import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      res.writeHead(302, { Location: '/' });
      res.end();
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la déconnexion : ', error);
      res.status(500).end();
    }
  } else {
    console.log("déso")
  }
}
