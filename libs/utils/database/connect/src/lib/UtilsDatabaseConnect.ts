import { MongoClient } from 'mongodb';

async function connectToDatabase(database: string = 'blog') {
  const client = await MongoClient.connect(
    `mongodb+srv://erias:1wu6tYAdLxvwVcCG@cluster0.f7bqi.mongodb.net/${database}?retryWrites=true&w=majority`
  );
  return client;
}

export default connectToDatabase;
