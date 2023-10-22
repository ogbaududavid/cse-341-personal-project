const joi = require('@hapi/joi')

const templeDataSchema = joi.object({
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

const wardDataSchema = joi.object({
    wardName: joi
        .string()
        .min(2)
        .max(19)
        .required(),
    
    address: joi.string().min(5).required(),
    bishopName: joi.string().required(),
    stake: joi.string().required(),
    
})

module.exports = {templeDataSchema, wardDataSchema, idSchema}

    // schema.validate({telephone: 90989, dedicated: "600/10/1995"})

    // schema.validate({})

    // try {
    //     const value = await schema.validateAsync({telephone: 90989, dedicated: "600/10/1995"})
    // }
    // catch (err) {
    //     console.log(err)
    // }