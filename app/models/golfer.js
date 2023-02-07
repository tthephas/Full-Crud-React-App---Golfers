const mongoose = require('mongoose')

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
	return `${this.name} plays for ${this.tour}`
})

module.exports = mongoose.model('Golfer', golferSchema)
