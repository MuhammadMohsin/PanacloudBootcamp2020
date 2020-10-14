const mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async () => {
    try {
        console.log(process.env.MONGODB_QUERY_STRING)


        await mongoose.connect(process.env.MONGODB_QUERY_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('mongoose open for business');

        const StudentSchema = new mongoose.Schema({
            name: String,
            age: Number
        });

        const Student = mongoose.model('Student', StudentSchema);

        const std1 = new Student({
            name: "Ali",
            age: 123
        })

        std1.save(function (err, stds) {
            if (err) return console.error(err);
            console.log(stds);
        });

    }
    catch (err) {
        console.log(err);
    }
})()
