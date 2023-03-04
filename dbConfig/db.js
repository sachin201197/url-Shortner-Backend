const monogoos = require("mongoose");

async function connectMongo() {
  try {
    const res = await monogoos.connect(
      "mongodb+srv://sachin:sac456hin@cluster0.w1qzjsp.mongodb.net/?w=majority"
    );
    console.log(`DB is connected`);
  } catch (err) {
    console.log(`"Error" ${err}`);
  }
}

module.exports = connectMongo;
