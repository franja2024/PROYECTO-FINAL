const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://frandomesem:<DesFeb24>@devcamp.lrjnrac.mongodb.net/?retryWrites=true&w=majority&appName=devcamp'
).then(() => {
    console.log('connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:',err);
});

module.exports = mongoose;