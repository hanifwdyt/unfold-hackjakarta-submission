require('dotenv').config({ path: '.env' });

const express = require('express')
const app = express()
const port = 3000

const chatgpt = require('./lib/chatgpt')

app.use(express.json())

const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    const validApiKey = process.env.API_KEY;
  
    if (apiKey && apiKey === validApiKey) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized: Invalid API key' });
    }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/genai/menu', apiKeyMiddleware, async (req, res) => {

    const namaMenu = req.body.namaMenu
    const descriptionMaxCharacter = req.body.descMaxChar
    const caraMasak = req.body.caraMasak
    const bahan = req.body.bahan
    const kategoriDesc = req.body.kategoriDesc

    const prompt = {
        namaMenu, descriptionMaxCharacter, caraMasak, bahan, kategoriDesc
    }

    const chatgptRes = await chatgpt.generateDescription(prompt)

    res.send(chatgptRes)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})