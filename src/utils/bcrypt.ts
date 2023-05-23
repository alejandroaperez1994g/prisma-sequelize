import bcrypt from 'bcrypt';


export const hashPassword = async (password: string) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (err) {
        throw err;
    }
}


export const comparePassword = async (password: string, hashedPassword: string) => {
    try {
        return bcrypt.compareSync(password, hashedPassword);
    } catch (err) {
        throw err;
    }
}
