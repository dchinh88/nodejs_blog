function MongooToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose
}

export default MongooToObject