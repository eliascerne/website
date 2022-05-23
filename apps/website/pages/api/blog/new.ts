import type { NextApiRequest, NextApiResponse } from 'next';
import { UtilsDatabaseConnect } from '@eliascerne/utils/database/connect';
import { ObjectId } from 'mongodb';

type Data = {
  message: string;
  _id?: ObjectId;
  slug?: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res
      .status(400)
      .json({ message: 'Cannot get anything else than POST method.' });
  }
  let { heading, description, text, slug } = req.body;

  if (!heading) res.status(400).json({ message: 'No heading provided :(' });
  if (text == {})
    text = [
      {
        id: 'erias',
        type: 'paragraph',
        data: {
          text: 'Hey, baby, wanna touch my weiner? ~ Butthead',
        },
      },
    ];

  const client = await UtilsDatabaseConnect();

  const db = client.db('blog').collection('post');

  const objectId = new ObjectId();
  if (!slug) {
    slug = `post${Math.floor(Math.random() * 10000)}`;
  }
  slug = slug.replace(/\s+/g, '-').toLowerCase();
  const createDate = new Date();
  console.log(text);

  const collection = await db.insertOne({
    _id: objectId,
    slug: slug,
    heading: heading,
    description: description,
    text: text,
    createDate: createDate,
  });

  client.close();

  res
    .status(200)
    .json({ message: 'Created Post', _id: objectId, slug: slug });
}

export default handler;
