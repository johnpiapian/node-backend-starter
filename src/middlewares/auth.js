import * as jwt from '../utils/jwt.js';

export const checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]

    if (token === null) return res.status(401).json({ error: 'missing token' });

    const decoded = jwt.verifyToken(token);

    if(decoded) {
        req.user = decoded;
        next();
    } else {
        return res.status(401).json({ error: 'invalid token' });
    }
};