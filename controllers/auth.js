const dotenv = require("dotenv");
dotenv.config();
const axios = require('axios')

const client_id = process.env.OUTH_CLIENT_ID
const client_secret = process.env.OUTH_CLIENT_SECRET
const validated = false


const Oauth = async (req, res, next) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${client_id}&client_secret=${client_secret}`
    )
};

const handleCallback = ( {query : {code}}, res) => {
    
    const body = {
        client_id: client_id,
        client_secret: client_secret,
        code
    }
    const opts = {headers: {accept: "application/json"}}

    axios.post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
        let userData;
        axios.get(`https://api.github.com/user`, {headers:`Authorization: token ${token}`})
        .then((res) =>
            {
               userData = res.data
            })
        if(token){
            res.redirect(`https://temples-wards-api.onrender.com/?token=${token}`)
            validated = true
        } else {
            res.redirect(`https://temples-wards-api.onrender.com`)

        }
        console.log(userData)
        console.log(validated)

        
    })
    .catch((err) => res.status(500).json({err: err.message}))
}

module.exports = {Oauth, handleCallback}