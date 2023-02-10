const MongoClient = require('mongodb').MongoClient;

module.exports = async function(event, context) {
  const uri = "mongodb://localhost:37017/";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const db = client.db("users");
    const collection = db.collection("users");

    const result = await collection.insertOne({
      name: "Test User with Date and Time",
      email: "testuser@example.com",
      inserted: new Date().toJSON()
    });
    console.log(`Inserted ${result.insertedCount} documents into the collection`);
  } catch (err) {
    console.error(err.stack);
  }
  finally {
    await client.close();
  }
};

