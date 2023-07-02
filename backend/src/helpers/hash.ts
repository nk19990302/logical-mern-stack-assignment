import bcrypt from 'bcrypt'

export const generateHash = (txt: string) => {
  return bcrypt.hash(txt, 10);
}

export const matchPassword = async (password: string, hash: string) => {
  if (await bcrypt.compare(password, hash)) {
    return true;
  } else {
    return false;
  }
}