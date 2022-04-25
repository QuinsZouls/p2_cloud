import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

const algorithm = 'aes-256-cbc'; //Método AES encryption
const secret = process.env.SECRET_KEY;
const iv = crypto.randomBytes(16);

//Para cifrar el texto
async function encryptText(text: string) {
  const cipher = crypto.createCipheriv(algorithm, secret, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { message } = request?.body;
  const encrypted = await encryptText(message);
  response.status(200).json({
    ...encrypted,
  });
}
