import User from "../models/user";
import { generateHash, matchPassword } from "../helpers/hash";
import { APIResponse } from "../models/error";

const userService = {
    login: async (email: string, password: string): Promise<APIResponse> => {
        try {
            // get all user with email id
            console.log('xxx', email, password);
            const users = await User.find({ email: email });
            if (users.length > 0) {
                const user = users[0];
                // verify password
                const isAuthUser = await matchPassword(password, user.password)
                if (isAuthUser) {
                    return { status: 'success', statusCode: 200, data: user }
                }
            }
            return { status: 'error', statusCode: 400, message: 'wrong credentials' }

        } catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error }
        }

    },
    signup: async (name: string, email: string, password: string): Promise<APIResponse> => {
        try {
            // check for email presence in db
            const users = await User.find({ email: email });
            if (users.length > 0) {
                return { status: 'error', statusCode: 400, message: 'email is already in use' }
            }
            // save new user in db
            const hash = await generateHash(password);
            const user = new User({ name, email, password: hash });
            return { status: 'success', statusCode: 2010, data: await user.save() }
        } catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error }
        }


    },
};

export default userService;
