const mongoose = require('mongoose');

const { Schema } = mongoose;

const QuestionSchema = new Schema(
    {
        question: { type: String, default: '' },
        answer: { type: mongoose.SchemaTypes.Mixed, default: '' },
        answerType: { type: mongoose.SchemaTypes.Mixed, required: true, default: 'String', enum: ['Number', 'String', 'Boolean'] }
    }
);

module.exports = mongoose.model('Question', QuestionSchema);
