const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://alo:Gurudev@2021@alo.ztbph.mongodb.net/alo?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected Successfully'))
    .catch((err) => console.error(`Not Connected ${err}`));

module.exports = db;