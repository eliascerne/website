import type { NextApiRequest, NextApiResponse } from 'next';
import { UtilsDatabaseConnect } from '@eliascerne/utils/database/connect';
import { ObjectId } from 'mongodb';

type Data = {
  message: string;
  posts?: any;
};

async function handler() {
  const client = await UtilsDatabaseConnect();

  const db = client.db('blog').collection('post');

  const collection = await db.find().toArray();

  client.close();

  return collection;
}

export default handler;
