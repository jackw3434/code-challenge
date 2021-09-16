const express = require('express');
const { retrieveAllForms, retrieveFormById, startNewForm, submitAnsweredForm, submitBlankForm } = require('../controllers/formController');
const { pushNewQuestion, updateQuestion, removeQuestion } = require('../controllers/questionController');

const router = express.Router();

function response(res, toSend, isSuccess) {
    return res.status(res.statusCode).send(isSuccess ? toSend : { error: toSend.message });
};

// create a new form with 1 single blank question
router.get('/start_form', async (_, res) => {
    try {
        console.log(new Date())
        const newForm = await startNewForm();
        return response(res, newForm, true);
    } catch (err) {
        return response(res, err, false);
    }
});

// submit a form with blank answers
router.post('/new_form', async (req, res) => {
    try {
        const answeredForm = await submitBlankForm(req.body);
        return response(res, answeredForm, true);
    } catch (err) {
        return response(res, err, false);
    }
});

// submit a form with answers filled in
router.post('/complete_form', async (req, res) => {
    try {
        const answeredForm = await submitAnsweredForm(req.body);
        return response(res, answeredForm, true);
    } catch (err) {
        return response(res, err, false);
    }
});

// push a new question object onto the form
router.post('/:formId/addQuestion', async (req, res) => {
    try {
        const updatedForm = await pushNewQuestion(req.params.formId, req.body);
        return response(res, updatedForm, true);
    } catch (err) {
        return response(res, err, false);
    }
});

// update a question
router.post('/:formId/updateQuestion/:questionId', async (req, res) => {
    try {
        const newForm = await updateQuestion(req);
        return response(res, newForm, true);
    } catch (err) {
        return response(res, err, false);
    }
});

// delete question
router.delete('/:formId/removeQuestion/:questionId', async (req, res) => {
    try {
        const newForm = await removeQuestion(req);
        return response(res, newForm, true);
    } catch (err) {
        return response(res, err, false);
    }
});

// retrieve all forms
router.get('/allForms', async (_, res) => {
    try {
        const allForms = await retrieveAllForms();
        return response(res, allForms, true);
    } catch (err) {
        return response(res, err, false);
    }
});

// retrieve form
router.get('/:formId', async (req, res) => {
    try {
        const form = await retrieveFormById(req.params.formId);
        return response(res, form, true);
    } catch (err) {
        return response(res, err, false);
    }
});

module.exports = router;
