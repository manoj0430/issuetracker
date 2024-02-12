const mongoose = require('mongoose');
const db = mongoose.connection;

main().catch(err => console.log(err));

async function main() {
  const conn= await mongoose.connect(process.env.MONGO_URI);
  
  console.log(`MongoDB connected: ${conn.connection.host}`);
  
}
module.exports = db;