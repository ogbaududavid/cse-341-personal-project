const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: "contacts API",
        description: "An api that allows your retrive, post, and delete contacts from a server"
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