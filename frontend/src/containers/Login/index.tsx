import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AuthService } from "../../services/AuthService";
import { isUserLoggedIn } from "../../helpers/cookies";
import { persistLoggedInUser } from "../../helpers/login";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (isUserLoggedIn()) {
            navigate('/', { replace: true })
        }
    }, [])

    const handleLogin = async () => {
        // call login api
        const res = await AuthService.login(email, password);
        if (res.status === "success" && res.data?._id != null) {
            persistLoggedInUser(res)
            navigate('/', { replace: true })
        }

    }
    return (
        <Container sx={{ padding: 4 }}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-disabled"
                        label="Disabled"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" sx={{ m: 1, width: '26ch' }} onClick={() => handleLogin()}>Login</Button>
                </div>
            </Box>
        </Container>
    );
};

export default Login;
