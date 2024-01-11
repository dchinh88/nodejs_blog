import mongoose from "mongoose";

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev');
        console.log('connect susscess');
    } catch(err) {
        console.log('connect failure!!!');
    }

}

export default { connect }


