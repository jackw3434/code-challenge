const Form = require('../models/Form');
const Question = require('../models/Question');

const pushNewQuestion = async (id, currentForm) => {
    try {
        let form = await Form.findById(id);
        form.form = currentForm.form;
        form.form.push(new Question());
        const dbEntry = await form.save();
        return dbEntry;
    } catch (err) {
        throw new Error(err);
    }
};

const updateQuestion = async (req) => {
    try {
        const form = await Form.findById(req.params.formId);
        await form.form.map(question => {
            if (question._id.toString() === req.params.questionId) {
                question.question = req.body.question;
                question.answerType = req.body.answerType;
                return
            }
        })
        const dbEntry = await form.save();
        return dbEntry;
    } catch (err) {
        throw new Error(err);
    }
};

const removeQuestion = async (req) => {
    try {
        const form = await Form.findById(req.params.formId);
        await form.form.map((question, i) => {
            if (question._id.toString() === req.params.questionId) {
                return form.form.splice(i, 1);
            }
        })
        const dbEntry = await form.save();
        return dbEntry;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = { pushNewQuestion, updateQuestion, removeQuestion };