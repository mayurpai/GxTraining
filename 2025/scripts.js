let gitHubURL = "https://api.github.com/users/mayurpai"
let dogApiURL = "https://dog.ceo/api/breeds/image/random"
let employeeURL = "https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee"

let response = fetch(employeeURL)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data
    })

// async function fetcher() {
//     console.log(await response)
// }

// fetcher();

response.then(res => console.log(res))

// console.log(response.then(res => console.log(res)))
// const fetcher = async () => {
//     let response = await fetch(gitHubURL)
//     let data = await response.json()
//     return data.bio
// }

// const response_ = fetcher().then((res) => console.log(res)).catch((err) => console.log(err))

// console.log(response_)


// const myPromise = new Promise((resolve, reject) => {
//     let bool = false
//     bool ? resolve("Done") : reject("Not Done")
// })

// console.log(myPromise
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// )


// async function myPro() {
//     try {
//         let resp = await myPromise
//         console.log(resp)
//     } catch (error) {
//         console.log(error)
//         // throw new Error("Error Message In Here")
//     }
// }

// myPro();

// // console.log(response)


// asyncOperation1(function (result1) {
//     asyncOperation2(function (result2) {
//         asyncOperation3(function (result3) {
//             // More Nested Callbacks
//         })
//     })
// })


// Fixed function definition for fetchRandomJokes
// function fetchRandomJokes(joke) {
//     console.log(joke);
//     translateRandomJoke(joke, (translate) => {
//         console.log(translate);
//         postJoke(translate, () => {
//             console.log("Posted Successfully!");
//         });
//     });
// }

// fetchRandomJoke((joke) => {
//     console.log(joke);

//     translateJoke(joke, (translatedJoke) => {
//         console.log(translatedJoke);

//         postJoke(translatedJoke, () => {
//             console.log("Joke posted successfully!");
//         });
//     });
// });

// fetchRandomJokes("Hey");
