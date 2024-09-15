// require('dotenv').config();
require('dotenv').config({
  path: require('path').resolve(__dirname, '../../.env'),
});

const { MongoClient } = require('mongodb');
const { URL } = require('../../index.js');
console.log({ URL });

const client = new MongoClient(URL);

const dbName = 'HelloWorld';

async function main() {
  await client.connect();
  console.log('connected successfully to the server');

  const db = client.db(dbName);
  const collection = db.collection('User');

  const data = {
    firstname: 'Lokesh',
    lastname: 'Yadav',
    city: 'Rewari',
    phoneNumber: '9999999888',
  };

  //   //   Insert
  //   const insertResult = await collection.insertMany([data]);
  //   console.log('inserted document ', { insertResult });

  //   // Read
  //   const findResult = await collection.find({}).toArray();
  //   console.log('Found documents => ', findResult);

  //   //   Count
  //   const countResult = await collection.countDocuments({});
  //   console.log('Count result is ', countResult);

  // find all the document with a filter of firstname Lokesh
  const result = await collection.find({ firstname: 'Lokesh' }).toArray();
  console.log('result => ', result);

  return 'done';
}

main()
  .then(console.log)
  .catch(console.log)
  .finally(() => client.close());
