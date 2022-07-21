const catApiKey = '7847af99-be65-44b2-bdaa-fbe3b64d9f27';
const catBaseUrl = 'https://api.thecatapi.com/v1/images/search';
const img = document.querySelector('img')

const catBtn = document.getElementById('catBtn');
const catRequestParams = `?api_key=${catApiKey}`;
const CatUrlToFetch = `${catBaseUrl}${catRequestParams}`

async function getCatImage() {
    try {
        const response = await fetch (CatUrlToFetch);

        if(response.ok) {
            const json = await response.json();
            const jsonImage = json[0].url
            console.log(jsonImage)
            return jsonImage;
        }
    } catch(error) {
        console.log(error);
    }
}

catBtn.addEventListener('click', () => {
    getCatImage()
    .then(result => {
        img.style.display = 'flex';
        img.setAttribute('src', result)
    })
});



const dogBtn = document.getElementById('dogBtn');
const DogUrlToFetch = 'https://dog.ceo/api/breeds/image/random'

async function getDogImage() {
    try {
        const response = await fetch (DogUrlToFetch);

        if(response.ok) {
            const json = await response.json();
            const jsonImage = json.message;
            return jsonImage;
        }
    } catch(error) {
        console.log(error);
    }
}

dogBtn.addEventListener('click', () => {
    getDogImage()
    .then(result => {
        img.style.display = 'flex';
        img.setAttribute('src', result)
    })
});
