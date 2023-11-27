let MyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("Promise Kept") : reject("Promise Broke");
  }, 2000);
});

console.log(
  MyPromise.then((value) => console.log(value)).catch((error) =>
    console.log(error)
  )
);

const getSoup = async () => {
	try {
		const prm = await MyPromise;
		console.log(prm)
	} catch(error) {
		console.log(error)
	}
}

getSoup();

var something;

console.log(something);

// import fetch from 'node-fetch'

// const randomDogAPI = () => {
//   let URL = "https://dog.ceo/api/breeds/image/random";
//   return fetch(URL)
//     .then((response) => response.json())
//     .then((data) => console.log(data.message));
// };

// randomDogAPI();

// const getDog = async () => {
//     const url = "https://dog.ceo/api/breeds/image/random"
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data.message)
//     } catch (error) {
//         console.log(error)        
//     }
// }

// getDog();