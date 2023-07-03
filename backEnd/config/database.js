const mongoose = require("mongoose");

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const database = process.env.MONGO_DATABASE;

const connectDatabase = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://" + username + ":" + password + "@cluster0.3uwjrdn.mongodb.net/" + database + "?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDatabase;
