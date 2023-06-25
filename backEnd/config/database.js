const mongoose = require("mongoose");

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const database = process.env.MONGO_DATABASE;

const connectDatabase = () => {
	mongoose
		.connect("mongodb+srv://" + username + ":" + password + "@cluster0.3uwjrdn.mongodb.net/" + database + "?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
		.then((data) => {
			console.log(`MongoDb connected with server ${data.connection.host}`);
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = connectDatabase;
