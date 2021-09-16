const mongoose = require('mongoose');
const QuestionSchema = require('./Question').schema;

const { Schema } = mongoose;

const FormSchema = new Schema(
    {
        _formId: mongoose.Types.ObjectId,
        form: [QuestionSchema],
    }
);

module.exports = mongoose.model('Form', FormSchema);
