const newImageBtn = document.getElementById('newDoggo');

const downloadBtn = document.getElementById('download');

const breedInfoList = document.querySelectorAll('.list-group-item');

newImageBtn.addEventListener('click',bringDoggo);

downloadBtn.addEventListener('click',()=>{
    let imgItem = document.querySelector('img');
    let imgPath = imgItem.getAttribute('src');
    let fileName = getFileName(imgPath);
    saveAs(imgPath,fileName);
})

function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1);
}

const fetchStatus = response =>{
    if(response.ok){
        return Promise.resolve(response);
    }else{
        return Promise.reject(new Error(error.type));
    }
}

function bringDoggo (){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(fetchStatus)
    .then(function(response){
        response.text().then(function(text){
           const data = text;
           return data;
        }).then(data => displayImage(data));
    }).catch(function(error){
        console.log(error.type);
    })
}

function displayImage(data){
    const parsedData = JSON.parse(data);
    
    const imageURL = parsedData.message;
    console.log(imageURL);
    const imageContainer = document.getElementById('doggoPicture');
    imageContainer.innerHTML = `<img src=${imageURL} class="img-fluid rounded" alt="cute doggo" />`;
    getBreedInfo(imageURL);
}

function getBreedInfo (str){
    let breed = str.substring(str.lastIndexOf('/breeds'))
                .split('/')[2];

    breed = (breed.charAt(0).toUpperCase() + breed.slice(1))
            .replace('-',' ');
    console.log(breed);
    displayDoggoInfo(breed);
}

function displayDoggoInfo(str){
    const breedInfo = document.querySelector('h2');
    breedInfo.innerHTML = `This doggo is a <span id="doggoBreed">${str}</span>!`;
    const coloredText = document.getElementById('doggoBreed');
    coloredText.style.color='#de7ac3';
}
window.addEventListener('load',bringDoggo());

// fetch('https://dog.ceo/api/breeds/image/random')
// .then(function(response){
//     response.text().then(function(text){
//         console.log(text);
//         const data = JSON.parse(text);
//         console.log(data);
//     })
// });


// const displayDoggo = URL =>{
//     fetch(URL)
//     .then(function(response){
//         response.text()
//         .then(function(text){
//             console.log(text);
//         })
//     })
// }
// newImageBtn.addEventListener('click',displayDoggo('https://dog.ceo/api/breeds/image/random'));


// const str= 'https://images.dog.ceo/breeds/terrier-russell/jack1.jpg';
// undefined
// str.substring(str.lastIndexOf('/breeds')+1);
// "breeds/terrier-russell/jack1.jpg"
// let sub = str.substring(str.lastIndexOf('/breeds'));
// undefined
// sub.split('/');
// (4) ["", "breeds", "terrier-russell", "jack1.jpg"]
// let sub2 = sub.split('/');
// undefined
// sub2[2]
// "terrier-russell"
// sub2 = sub.split('/')[2];
// "terrier-russell"






 

