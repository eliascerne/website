import type { NextApiRequest, NextApiResponse } from 'next';
import { UtilsDatabaseConnect } from '@eliascerne/utils/database/connect';
import { ObjectId } from 'mongodb';

async function IDhandler(postId: any) {
  const client = await UtilsDatabaseConnect();

  const db = client.db('blog').collection('post');

  const collection = await db.findOne({ slug: postId });
  // .then((res: any) => res.json())
  // .then((data: any) => {
  //   client.close();
  //   return data;
  // });

  return collection;
}

export default IDhandler;
