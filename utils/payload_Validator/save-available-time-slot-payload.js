const Joi = require('joi');

// Define a schema for your payload
const schema = Joi.object({
    time_slot_uuid: Joi.string().allow('').optional(),
    start_time_hour: Joi.string().required(),
    start_time_min: Joi.string().required(),
    is_start_AM: Joi.boolean().required(),
    end_time_hour: Joi.string().required(),
    end_time_min: Joi.string().required(),
    is_end_AM: Joi.boolean().required(),
    available_day_uuid: Joi.string().required(),

    // Add more fields as needed
});

// Function to validate the payload
const validateSaveAvailableTimeSlotPayload = (payload) => {
    return schema.validate(payload);
}

module.exports = validateSaveAvailableTimeSlotPayload