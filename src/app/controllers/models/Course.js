import mongoose from "mongoose"
import mongooseSlugGenerator from "mongoose-slug-generator"

mongoose.plugin(mongooseSlugGenerator)
const Schema = mongoose.Schema

const Course = new Schema({
    name: { type: String, default: '', maxLength: 255, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    slug: {type: String, slug: 'name', unique: true}
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true
})

export default mongoose.model('Course', Course)


