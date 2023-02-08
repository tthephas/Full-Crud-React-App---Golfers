const mongoose = require('mongoose')

const statSchema = require('./stat')

const golferSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		tour: {
			type: String,
			required: true,
		},
		tenure: {
			type: Number,
			required: true,
		},
		stats: [statSchema],
		// keeping in, will maybe be like my "favorites" type, mine or i built them
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
			
		},
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true}
	}
)

golferSchema.virtual('fullTitle').get(function () {
	return `${this.name} plays on the ${this.tour} tour`
})

// how do a virtual with some subdoc info?
// golferSchema.virtual('careerStats').get(function () {
// 	return `${this.name} plays on the ${this.tour} tour`
// })

module.exports = mongoose.model('Golfer', golferSchema)
