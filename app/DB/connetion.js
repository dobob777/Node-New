const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://dobob777:123456Abcd@fpcluster0.plhn0fm.mongodb.net/fpdemo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB Connection....done');
}).catch((error) => {
    console.log(error);
})