const Form = require('../models/Form');
const Question = require('../models/Question');

const startNewForm = async () => {
    try {
        const newForm = new Form({ form: [new Question()] });
        const dbEntry = await newForm.save();
        return dbEntry
    } catch (err) {
        throw new Error(err);
    }
};

const submitAnsweredForm = async (form) => {
    try {
        const newForm = new Form({ ...form });
        newForm.form.map(question => {   
            // answer comes in as a string       
            if(question.answerType === 'Boolean' && typeof JSON.parse(question.answer) === 'boolean'){
                question.answer = JSON.parse(question.answer);
            } 
            
            if(question.answerType === 'Number' && typeof JSON.parse(question.answer) === 'number'){
                question.answer = JSON.parse(question.answer);
            } 
        })

        const dbEntry = await newForm.save();
        return dbEntry;
    } catch (err) {
        throw new Error(err);
    }
};

const submitBlankForm = async (form) => {
    try {
        const newForm = new Form({ ...form });
        let allMatch = newForm.form.every(question => question.answer === '');
        if(allMatch){
            const dbEntry = await newForm.save();
            return dbEntry;
        } else{
            throw new Error(err);
        }        
    } catch (err) {
        throw new Error(err);
    }
};

const retrieveAllForms = async () => {
    try {
        const allForms = await Form.find({});
        return allForms;
    } catch (err) {
        throw new Error(err);
    }
};

const retrieveFormById = async (id) => {
    try {
        const form = await Form.findById(id);
        return form;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = { retrieveAllForms, retrieveFormById, startNewForm, submitAnsweredForm, submitBlankForm };
