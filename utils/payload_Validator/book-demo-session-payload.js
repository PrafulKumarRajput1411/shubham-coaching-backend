const Joi = require('joi');
const schema = Joi.object({
    student_name: Joi.string().required(),
    student_email: Joi.string().required(),
    student_phone: Joi.string().required(),
    student_class: Joi.string().required(),
    student_board: Joi.string().allow('').required(),
    subject_type: Joi.string().allow('').required(),
    demo_date: Joi.string().required(),
    demo_time_slot: Joi.string().required(),
    demo_query: Joi.string().required()
})

const validateBookDemoSessionPayload = (payload) => {
    return schema.validate(payload)
}
module.exports = validateBookDemoSessionPayload