const joi = require('@hapi/joi')

const dataSchema = joi.object({
    telephone: joi
        .string()
        .min(7)
        .max(19)
        .regex(/^([+])?(\d+)$/)
        .required(),
    
    templeName: joi.string().required(),
    country: joi.string().required(),
    state_region_province: joi.string().required(),
    street: joi.string(),
    announced:  joi
        .date()
        .iso()
        .required(),
    groundBreaking: joi
        .date()
        .iso()
        .required(),

    dedicated: joi
        .date()
        .iso()
        .required(),
    
})

const idSchema = joi.object({
    id: joi.string().required()
})

module.exports = {dataSchema, idSchema}

    // schema.validate({telephone: 90989, dedicated: "600/10/1995"})

    // schema.validate({})

    // try {
    //     const value = await schema.validateAsync({telephone: 90989, dedicated: "600/10/1995"})
    // }
    // catch (err) {
    //     console.log(err)
    // }