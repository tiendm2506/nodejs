import mongoose from 'mongoose'

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/course_education_dev')
        console.log('Successfully !!!')
    } catch (error) {
        console.log('ERROR: ', error)
    }
}

export default { connect }
