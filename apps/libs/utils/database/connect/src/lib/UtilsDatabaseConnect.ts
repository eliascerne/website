import { MongoClient } from 'mongodb';

export async function UtilsDatabaseConnect(database: string = 'blog') {
  const client = await MongoClient.connect(
    `mongodb+srv://erias:1wu6tYAdLxvwVcCG@blog0.eu4te.mongodb.net/?retryWrites=true&w=majority`
  );
  return client;
}

export default UtilsDatabaseConnect;