import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input data." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `${process.env.mongodb_url}/${process.env.data_base}`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Falid to connect to the database." });
      return null;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res
        .status(500)
        .json({ message: "Falid to insert data into the database." });
      client.close();
      return null;
    }

    client.close();
    res.status(201).json({ message: "Message store successfully." });
  }
}

export default handler;
