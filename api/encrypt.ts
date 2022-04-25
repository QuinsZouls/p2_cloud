import { NextApiRequest, NextApiResponse } from 'next';

const algorithm = 'aes-256-cbc'; //Método AES encryption
const secret = process.env.SECRET_KEY;
//Para cifrar el texto
async function encryptText(text: string) {
  let txtEncrypted = '';
  return txtEncrypted;
}
async function decryptText(encryptedText: string) {
  let decryptedText = '';
  return decryptedText;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { message } = request?.body;
  const encryptedText = await encryptText(message);
  response.status(200).json({
    encryptedText,
    message,
  });
}
