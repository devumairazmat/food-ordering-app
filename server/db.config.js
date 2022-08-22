const dbName = "food-ordering";
const dbhost = "ac-attug1t-shard-00-00.jxtggbt.mongodb.net:27017";
const dbport = "27017";
module.exports = {
    url : "mongodb://${dbhost}:${dbport}/${dbname}"
}