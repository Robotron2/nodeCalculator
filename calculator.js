const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/index.html`)
})

app.post("/", (req, res) => {
	let num1 = Number(req.body.num1)
	let num2 = Number(req.body.num2)
	let sum = num1 + num2
	res.send(`The sum of ${num1} and ${num2} is ${sum}`)
})

app.listen(3000, () => {
	console.log("Server is running on port 3000")
})
