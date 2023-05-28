const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors')

dotenv.config();
const generalRoutes = require('./routes/general')
const adminRoutes = require('./routes/admin')

const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*")
    res.header(
        "Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE"
    )
    res.header(
        "Access-Control-Allow-Headers", "Content-Type, x-requested-with"
    )
    next();
})

mongoose.connect(process.env.DB).then(() => {
    console.log('Db connection open')
}).catch(err => {
    console.log(err.message, 'oops err');
});

app.use(generalRoutes);
app.use('/admin', adminRoutes);


app.get('/', (req, res) => {
    res.send("GCAS API");
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`)
}
)
