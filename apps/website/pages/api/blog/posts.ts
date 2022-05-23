import type { NextApiRequest, NextApiResponse } from 'next';
import { UtilsDatabaseConnect } from '@eliascerne/utils/database/connect';
import { ObjectId } from 'mongodb';

type Data = {
  message: string;
  posts?: any;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    res
      .status(400)
      .json({ message: 'Cannot get anything else than GET method.' });
  }

  const client = await UtilsDatabaseConnect();

  const db = client.db('blog').collection('post');

  const collection = await db.find().toArray();

  client.close();

  res.status(200).json({ message: 'Got all items', posts: collection });
}

export default handler;
