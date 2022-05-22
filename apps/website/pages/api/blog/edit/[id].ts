import type { NextApiRequest, NextApiResponse } from 'next';
import { UtilsDatabaseConnect } from '@eliascerne/utils/database/connect';
import { ObjectId } from 'mongodb';

type Data = {
  message: string;
  post?: any;
  text?: any;
  heading?: any;
  description?: any;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const client = await UtilsDatabaseConnect();
  const { id } = req.query;
  if (req.method === 'GET') {
    // const { postUUID } = req.body;
    if (!id) {
      client.close();
      res.status(400).json({ message: 'No postUUID in req body' });
    }
    const db = client.db('blog').collection('post');

    const storedPost = await db.findOne(new ObjectId(id.toString()));
    const storedText = storedPost.text;
    const storedHeading = storedPost.heading;
    const storedDescription = storedPost.description;

    console.log(storedHeading);

    if (!storedPost) {
      client.close();
      res
        .status(400)
        .json({ message: `Post could not be retrieved UUID:${id}` });
    }

    client.close();
    res.status(200).json({
      message: 'Post successfully retrieved from db',
      post: storedPost,
      text: storedText,
      heading: storedHeading,
      description: storedDescription,
    });
  }
}
export default handler;
