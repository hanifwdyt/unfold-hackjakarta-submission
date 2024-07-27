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

app.post('/genai/menu/mock', apiKeyMiddleware, async (req, res) => {
    const menu = [
        {
            "title": "Ayam Bakar Spesial",
            "description": "Nikmati kelezatan ayam bakar yang dipadu dengan bumbu kalasan asli. Disajikan dengan nasi panas, timun segar, serta tahu dan tempe bacem yang gurih, menu ini adalah pilihan sempurna untuk Anda pencinta masakan Nusantara."
        },
        {
            "title": "Ayam Bakar Kalasan",
            "description": "Rasakan cita rasa ayam bakar marinated dengan bumbu kalasan yang menggoda selera. Dihidangkan dengan nasi putih panas, dilengkapi timun segar dan tahu-tempe bacem, koleksi ini akan memanjakan lidah Anda."
        },
        {
            "title": "Ayam Bakar dengan Nasi Panas",
            "description": "Ayam bakar lezat yang dimasak dengan bumbu kalasan khas, dipadu dengan nasi panas, timun segar, dan tahu-tempe bacem. Menawarkan pengalaman kuliner yang kaya, hidangan ini pasti akan menggugah selera Anda."
        }
    ];

    res.json(menu);
});


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})