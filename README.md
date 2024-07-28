# unfold-hackjakarta-submission

Submission for team UNFOLD: GRAB MERCHANT INSIGHT

Empowers food merchants to achieve business growth through optimized content and strategic promotions.

We aim to provide food merchants with personalized, actionable recommendations which improve menu descriptions fostering increased customer engagement and higher sales.


## Repository directory

- Frontend Application (next js) at `/frontend`
- Backend Application at (node js) `/backend`
- Utility Scripts at `/scripts`

## Frontend application

Frontend application built with Next JS.

### How to run

1. Supply env vars needed

```
API_KEY=
API_URL=
```

`API_KEY` is a static key generated for backend application, `API_URL` is the host of backend application

2. Install node package with `npm install`

3. Run application on dev mode with `npm run dev`

## Backend Application

Backend application built with Node JS as OpenAPI Wrapper and Grab Menu(dish) crud mock.

### API Documentations

GEN AI: Used to generate menu content based on menu data. Remove `/mock` path to use actual API

```bash
curl --location --request POST 'http://203.175.11.27:3000/genai/menu/mock' \
--header 'api-key: aWdhcH...YWJpeXlp' \
--header 'Content-Type: application/json' \
--data-raw '{
    "namaMenu": "ayam bakar, 20 karakter maksimal",
    "descMaxChar": "200 karakter",
    "caraMasak": "Digoreng dengan bumbu kalasan asli",
    "bahan": "timun, nasi panas, ayam kalasan, tahu tempe bacem",
    "kategoriDesc": "masuk kategori nasi, ayam, kalasan"
}'
```

GEN AI EXAMPLE REQUEST AND RESPONSE
```bash
Request
{
    "namaMenu": "pizza pepaya",
    "descMaxChar": "200 karakter",
    "caraMasak": "Di panggang secara matang, dioleh bumbu rempah dan spicy",
    "bahan": "pasta, pepaya",
    "kategoriDesc": "masuk kategori brunch"
}

Response
[
    {
        "title": "Pizza Pepaya Spicy",
        "description": "Nikmati keunikan Pizza Pepaya yang dipanggang sempurna dengan bumbu rempah dan rasa pedas yang menggugah selera. Kombinasi pasta lembut dan pepaya segar menjadikan hidangan ini pilihan brunch yang tidak boleh Anda lewatkan."
    },
    {
        "title": "Pizza Pepaya Kejutan Rasa",
        "description": "Rasakan kelezatan Pizza Pepaya yang diolah dengan rempah pilihan dan rasa spicy yang menggoda. Dipanggang hingga matang, pizza ini cocok menjadi sajian brunch yang mengesankan bagi Anda dan orang terkasih."
    },
    {
        "title": "Pizza Pepaya Spesial",
        "description": "Pizza Pepaya ini merupakan perpaduan pasta yang lezat dan pepaya manis yang dipanggang dengan bumbu rempah dan sentuhan pedas. Hidangan brunch yang unik dan menggoyang selera ini pasti akan menjadi favorit Anda."
    }
]
```

CREATE: Mock grab create menu api
```bash
curl --location --request POST 'http://203.175.11.27:3000/menu' \
--header 'api-key: aWdhcH...YWJpeXlp' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "new one ",
    "description": "test description 2",
    "caraMasak": "test caram asak 2",
    "bahan": "test bahan 2",
    "kategori": "test kategori 2",
    "price": 100000,
    "discountedPrice": 78000,
    "aiEnhanced": true
}'
```

GET ALL: Mock grab get all menu api
```bash
curl --location --request GET 'http://203.175.11.27:3000/menus' \
--header 'api-key: aWdhcH...YWJpeXlp'
```

GET BY ID: Mock grab get menu by id api
```bash
curl --location --request GET 'http://203.175.11.27:3000/menu/2' \
--header 'api-key: aWdhcH...YWJpeXlp'
```

UPDATE: Mock grab update menu api
```bash
curl --location --request POST 'http://203.175.11.27:3000/menu/1' \
--header 'api-key: aWdhcH...YWJpeXlp' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "test title 2213123",
    "description": "test description 2",
    "caraMasak": "test caram asak 2",
    "bahan": "test bahan 2",
    "kategori": "test kategori 2",
    "price": 100000,
    "discountedPrice": 50000,
    "aiEnhanced": false
}'
```

### How to run

1. Supply env vars needed

```
OPENAI_API_KEY=
API_KEY=
```

`OPENAI_API_KEY` is OpenAPI Platform key, for using OpenAPI's model. `API_KEY` is a staticly generated api key for client application.

2. Install node package with `npm install`

3. Run application on dev mode with `node app`