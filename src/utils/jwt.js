import jwt from 'jsonwebtoken';

const jwtSecret = 'yourJwtSecret';

export const generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, jwtSecret, { expiresIn: expiresIn });
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (error) {
        return null;
    }
};