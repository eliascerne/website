import type { NextApiRequest, NextApiResponse } from 'next';
import { UtilsDatabaseConnect } from '@eliascerne/utils/database/connect';
import { ObjectId } from 'mongodb';

type Data = {
  message: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST')
    res.status(400).json({ message: 'Only Post allowed, aight' });

  let { id, heading, description, text, slug } = req.body;

  const client = await UtilsDatabaseConnect();

  const db = client.db('blog').collection('post');

  if (!text) {
    const res: any = await db.findOne(new ObjectId(id.toString()));
    text = res.text;
  }
  if (!slug) {
    slug = `post${Math.floor(Math.random() * 10000)}`;
  }
  slug = slug.replace(/\s+/g, '-').toLowerCase();

  const updateDoc = {
    $set: {
      heading: heading,
      description: description,
      text: text,
      slug: slug,
    },
  };

  const result = await db.updateOne(
    { _id: new ObjectId(id.toString()) },
    updateDoc
  );


  client.close();
  res.status(200).json({
    message: 'Document successfully updated',
  });
}
export default handler;
