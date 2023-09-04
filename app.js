
const cors = require('cors')
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static("images"))

const productsRoute = require('./routes/productsRoute')
const userRouter = require('./routes/userRoute')

app.use(userRouter)
app.use(productsRoute)




app.get('/', (req, res) => res.send("Welcome To Our Bazar."))
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
})



module.exports = app