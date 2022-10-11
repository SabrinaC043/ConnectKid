const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongod: mongodb://127.0.0.1:27017/connectKid',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);