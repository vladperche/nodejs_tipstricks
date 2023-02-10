const MongoClient = require('mongodb').MongoClient;

module.exports = async function(event, context) {
  const uri = "mongodb://localhost:37017/";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const db = client.db("databaseName");
    const collection = db.collection("collectionName");

    let cursor = collection.find(
        /* { 'field': 'parameters' } */
    );

    if((await cursor.count()) === 0)
    {
        console.log("No records found!");
    }
    else
    {
        console.log("Records:");
        await cursor.forEach(function(record){
            console.log(record);
        });
    }
  } catch (err) {
    console.error(err.stack);
  }
  finally {
    await client.close();
  }
};

