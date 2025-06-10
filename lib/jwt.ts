import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET

export function signToken(payload: object): string {
    return jwt.sign(payload, SECRET as string, {
        expiresIn: '7d',
    });
}

export function verifyToken(token: string) { 
    try {
        return jwt.verify(token, SECRET as string);
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}