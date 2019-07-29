const mongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
mongoClient.connect("mongodb://localhost:27017/workshop", {useNewUrlParser: true})
    .then(conn => global.conn = conn.db("workshop"))
    .catch(err => console.log(err))

function findAll(callback){
    global.conn.collection("customers").find({}).toArray(callback);
}

function insert(customer, callback){
    global.conn.collection("customers").insert(customer, callback);
}

function findOne(id, callback){
    global.conn.collection("customers").findOne(new ObjectId(id), callback);
}

module.exports = {findAll, insert, findOne}