import mongoose from 'mongoose'

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@todo.5gqboci.mongodb.net/?retryWrites=true&w=majority&appName=todo`

    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log("Connected Successfully")
    } catch (error) {
        console.log("Error in DB")
        console.log(error)
    }
}

export default Connection