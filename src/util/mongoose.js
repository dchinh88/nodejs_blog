// export default {
//     multipleMongooObjectseToObject: function(mongooses) {
//         return mongooses.map(mongoose => mongoose.toObject())
//     },
//     mongooseToObject: function(mongoose) {
//         return mongoose ? mongoose.toObject() : mongoose
//     }
// }

function MultipleMongooObjectseToObject(mongoose) {
    return mongoose.map(mongoo => mongoo.toObject())
}
// function MongooToObject(mongoose) {
//     return mongoose ? mongoose.toObject() : mongoose
// }

export default MultipleMongooObjectseToObject


