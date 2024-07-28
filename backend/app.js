require('dotenv').config({ path: '.env' });

const express = require('express')
const app = express()
const port = 3000

const chatgpt = require('./lib/chatgpt')
const menuModel = require('./model/menu')
const menuUtil = require('./utils/menuUtil')

app.use(express.json())

// middleware
const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    const validApiKey = process.env.API_KEY;
  
    if (apiKey && apiKey === validApiKey) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized: Invalid API key' });
    }
}

// health check
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// gen ai api
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

app.post('/genai/menu/mock', apiKeyMiddleware, async (req, res) => { // gei ai mock
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

// penunjang kehidupan AAAAAAAAAA しっかりしてよ！
app.post('/menu', apiKeyMiddleware, async (req, res) => {

    const insert_request = {
        title: req.body.title,
        description: req.body.description,
        caraMasak: req.body.caraMasak,
        bahan: req.body.bahan,
        kategori: req.body.kategori,
        price: req.body.price,
        discountedPrice: req.body.discountedPrice,
        aiEnhanced: req.body.aiEnhanced
    }
    
    menuModel.insert(insert_request)

    res.json(insert_request);
});

app.post('/menu/:id', apiKeyMiddleware, async (req, res) => {

    const id = req.params.id

    const update_request = {
        title: req.body.title,
        description: req.body.description,
        caraMasak: req.body.caraMasak,
        bahan: req.body.bahan,
        kategori: req.body.kategori,
        price: req.body.price,
        discountedPrice: req.body.discountedPrice,
        aiEnhanced: req.body.aiEnhanced,
        id: id
    }
    
    menuModel.update(update_request)

    res.json(update_request);
});

app.get('/menu/:id', apiKeyMiddleware, async (req, res) => {
    
    const id = req.params.id

    try {
        const rows = await menuModel.findById(id)
        console.log(rows)

        let resp_rows = rows.map((item) => {
            const { price, discounted_price } = item
            const discount = menuUtil.getPercentageDiscount(price, discounted_price)
            return { ...item, discount }
        })

        res.json(resp_rows)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

app.get('/menus', apiKeyMiddleware, async (req, res) => {
    
    try {
        const rows = await menuModel.all()
        let resp_rows = rows.map((item) => {
            const { price, discounted_price } = item
            const discount = menuUtil.getPercentageDiscount(price, discounted_price)
            return { ...item, discount }
        });

        res.json(resp_rows);
    } catch (error) {
        console.error(error)
        res.status(500)
    }
});


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})