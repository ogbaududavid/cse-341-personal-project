const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: "Temples and Wards API",
        description: "A Temples and Wards API"
    },
    host: 'https://temples-and-wards-api.onrender.com',
    schemes: 'https'
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

// swaggerAutogen(outputFile, endpointsFiles, doc)


swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
    await import('./app.js'); // Your project's root file
  });