// should return an array of separate key value pairs
// ex: ['username=azure+green', 'password=password%21']
function firstStep(input) {
    return input.split('&');
    // const keyValuePairs = input.split('&');
    // console.log(keyValuePairs);
    // return keyValuePairs;
}
firstStep("username=azure+green&password=password%21");


// should return a 2D array with key value pairs
// ex: [["username", "azure+green"], ["password", "password%21"]]
function secondStep(input) {
    return input.map(kvPair => kvPair.split('='));

    // // keyValuePairs = firstStep(input);
    // const keyValuePairs = input.map(pair => {
    //     // console.log(input);
    //     // console.log(pair);
    //     const result = pair.split('=');
    //     return result;
    // });
    // // console.log(keyValuePairs)
    // return keyValuePairs;
  }
// console.log(secondStep(["username=azure+green", "password=password%21"]));


// should return an array with all "+" signs replaced
// ex: [["username", "azure green"], ["password", "password%21"]]
function thirdStep(input) {

}


// should return an array with percent encoded values decoded
// ex: [["username", "azure green"], ["password", "password!"]]
function fourthStep(input) {

}


// should return an object of key/value pairs
// ex: { username: "azure green",password: "password!"}
function fifthStep(input) {

}

// should take in the request body as a string and return an object of key/value pairs
// example: { username: "azure green",password: "password!"}
function parseBody(str) {

}


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
