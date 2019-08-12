import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => res.end('This is the order page');

export default handler;
