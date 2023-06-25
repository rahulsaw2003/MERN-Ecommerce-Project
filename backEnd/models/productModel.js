const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter product name"],
		trim: true,
	},
	description: {
		type: String,
		required: [true, "Please enter product description"],
	},
	price: {
		type: Number,
		required: [true, "Please enter product price"],
		maxLength: [8, "Price cannot exceed 8 characters"],
	},
	ratings: {
		type: Number,
		default: 0,
	},
	images: [
		{
			public_id: {
				type: String,
				required: [true, "Required"],
			},
			url: {
				type: String,
				required: [true, "Required"],
			},
		},
	],
	category: {
		type: String,
		required: [true, "Please enter product category"],
	},
	Stock: {
		type: Number,
		required: [true, "Please enter product stock"],
		maxLength: [4, "Stock cannot exceed caharcters"],
		default: 1,
	},
	numOfReviews: {
		type: Number,
		default: 0,
	},
	reviews: [
		{
			user: {
				type: mongoose.Schema.ObjectId,
				ref: "User",
				required: [true, ""],
			},
			name: {
				type: String,
				required: [true, "Please enter your name"],
			},
			rating: {
				type: Number,
				required: [true, "Please enter rating"],
			},
			comment: {
				type: String,
				required: [true, "Required"],
			},
		},
	],
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		required: [true, ""],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});


module.exports = mongoose.model("Product", productSchema);