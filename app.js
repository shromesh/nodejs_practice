const express = require('express')
const app = express()
const port = 3000

// use json
app.use(express.json())

app.get('/booklog', (req, res) => {
    res.json({
        "success": "true",
        "body": {
            "name":"tcp/ip",
            "text":"muzui"
        }
    })
})

app.post('/booklog', (req, res) => {
    const req_body = req.body
    // console.log(req_body)

    if (req_body.name && req_body.text) {
        res.json({
            "success": "true",
            "body": req_body
        })
    } else {
        res.json({
            "success": "false",
            "error": "invalid parametes"
        })
    }
})


app.listen(port, () => {
    // initial process
    console.log(`Listening at http://localhost:${port}...`)
})