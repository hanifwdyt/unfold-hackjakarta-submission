const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const initial_message = `
Buat 3 opsi menu terdiri judul dan deskripsi dalam format json dengan format [{“title”: “title”, “description”:”description”}] tanpa penjelasan apapun, tapi tanya dulu pada saya hal ini:
1 Nama menu & maksimal karakter
2 maksimal karakter deskripsi
3 Cara masak yang akan masuk deskripsi
4 Bahan yang akan masuk deskripsi
5 Kategori yang akan masuk kedalam deskripsi 

kategori tidak perlu ditampilkan, tetapi masukkan kedalam deskripsi, deskripsi dibuat untuk menarik pembaca untuk membeli hidangan

contoh deskripsi:

Deskripsi: Ayam kalasan digoreng dengan bumbu kalasan asli, disajikan dengan timun segar, nasi putih panas, serta tahu dan tempe bacem. Cocok untuk Anda yang ingin merasakan kelezatan otentik kuliner Nusantara.

Deskripsi: Nikmati hidangan lezat nasi putih panas dengan ayam kalasan yang digoreng sempurna menggunakan bumbu kalasan khas. Disertai dengan timun segar dan tahu tempe bacem, menu ini siap memanjakan lidah Anda.

Deskripsi: Rasakan sensasi gurihnya ayam kalasan dengan bumbu khas yang digoreng renyah. Kombinasi nasi panas, timun segar, tahu tempe bacem, dan ayam kalasan ini siap memberikan pengalaman makan yang memuaskan dan penuh rasa.
`

const assistant_reply = `
1. Apa nama menu dan maksimal karakter untuk nama menu?
2. Berapa maksimal karakter deskripsi?
3. Bagaimana cara masak yang akan masuk deskripsi?
4. Apa saja bahan yang akan masuk deskripsi?
5. Apa kategori yang akan dimasukkan ke dalam deskripsi?
`

const test_prompt = `
1. ayam bakar, 20 karakter maksimal
2. 200 karakter
3. Digoreng dengan bumbu kalasan asli
4. timun, nasi panas, ayam kalasan, tahu tempe bacem
5. masuk kategori nasi, ayam, kalasan
`

const forgedConversationHistory = [
    { role: "user", content: initial_message },
    { role: "assistant", content: assistant_reply }
];

exports.generateDescription = async function fetchChatCompletion(data) {
    const prompt = `
    1. ${data.namaMenu}
    2. ${data.descriptionMaxCharacter}
    3. ${data.caraMasak}
    4. ${data.bahan}
    5. ${data.kategoriDesc}
    `

    try {
        const conversationWithUserMessage = [...forgedConversationHistory, { role: "user", content: prompt }];

        const chatCompletion = await openai.chat.completions.create({
            messages: conversationWithUserMessage,
            model: "gpt-4o-mini",
        });

        const responseText = chatCompletion.choices[0].message.content;

        console.log('response Text:' + responseText)
        
        // remove json formatting codeblock
        const cleanedResponseText = responseText
            .replace(/```json/, '')
            .replace(/```/, '')
            .trim();

        // Parse JSON string into a JavaScript object
        let jsonObject;
        try {
            jsonObject = JSON.parse(cleanedResponseText);
            console.log('JSON Object:', jsonObject);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }

        return jsonObject

    } catch (error) {
        console.error('Error fetching chat completion:', error);
    }
}