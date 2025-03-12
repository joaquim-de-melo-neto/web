// The promise chain is what you need when your operation consists of several asynchronous functions,
//  and you need each one to complete before starting the next one. But there are other ways you might
//  need to combine asynchronous function calls, and the Promise API provides some helpers for them.

// Sometimes, you need all the promises to be fulfilled, but they don't depend on each other.
// In a case like that, it's much more efficient to start them all off together, then be notified when they have all fulfilled. The Promise.all() method is what you need here. It takes an array of promises and returns a single promise.

// The promise returned by Promise.all() is:

// - fulfilled when and if all the promises in the array are fulfilled. In this case, the then() handler is called with an array of all the responses, in the same order that the promises were passed into all().
// - rejected when and if any of the promises in the array are rejected. In this case, the catch() handler is called with the error thrown by the promise that rejected.


const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);

const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });


// Sometimes, you might need any one of a set of promises to be fulfilled, and don't care which one. In that case, you want Promise.any(). 
// This is like Promise.all(), except that it is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected:

const fetchPromise4 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise5 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise6 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.any([fetchPromise4, fetchPromise5, fetchPromise6])
    .then((response) => {
        console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });
