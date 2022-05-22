import type { NextApiRequest, NextApiResponse } from 'next';
import { UtilsDatabaseConnect } from '@eliascerne/utils/database/connect';
import { ObjectId } from 'mongodb';

type Data = {
  message: string;
  _id?: ObjectId;
  id?: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res
      .status(400)
      .json({ message: 'Cannot get anything else than POST method.' });
  }
  const { heading, description, text } = req.body;

  if (!heading) res.status(400).json({ message: 'No heading provided :(' });

  const client = await UtilsDatabaseConnect();

  const db = client.db('blog').collection('post');

  const objectId = new ObjectId();
  const defaultSlang = `post${Math.floor(Math.random() * 10000)}`;
  const createDate = new Date();

  const collection = await db.insertOne({
    _id: objectId,
    slang: defaultSlang,
    heading: heading,
    description: description,
    text: text,
    createDate: createDate,
  });

  client.close();

  res
    .status(200)
    .json({ message: 'Created Post', _id: objectId, id: defaultSlang });
}

export default handler;
