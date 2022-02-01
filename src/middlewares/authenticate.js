import 'dotenv/config';
import jwt from 'jsonwebtoken'

export const authenticate = async (req, res, next) => {
    try {
        const token = req.header.authorization.split(' ')[1]
        await jwt.verify(token, process.env.JWT_SECRETE);
        next();
    } catch (error) {
        return res.status(404).json({
            status: 401,
            error:"PLease, login it seems you are loged out."
        })
    }
}