import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET as string;

/**
 * Generate JWT token
 * @param {string} userId - User ID
 * @return {string} - JWT token
 */
export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, jwtSecret, { expiresIn: '2d' });
};