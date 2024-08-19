// should return an array of separate key value pairs
// ex: ['username=azure+green', 'password=password%21']
function firstStep(input) {
    return input.split('&');
    // const keyValuePairs = input.split('&');
    // console.log(keyValuePairs);
    // return keyValuePairs;
}
// firstStep("username=azure+green&password=password%21");


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
    // Use str.replace(/\+/g, " ") to replace all + symbols in the string with a space
    return input.map(([k, v]) => [k, v.replace(/\+/g, " ")] );
    // let result = input.map();
    // console.log(result);
    // return result;
}
// thirdStep([
//   ["username", "azure+green"],
//   ["password", "password%21"],
// ]);

// should return an array with percent encoded values decoded
// ex: [["username", "azure green"], ["password", "password!"]]
function fourthStep(input) {
    return input.map(([k, v]) => [k, decodeURIComponent(v)]);
}


// should return an object of key/value pairs
// ex: { username: "azure green",password: "password!"}
function fifthStep(input) {
    const obj = {};
    input.forEach(([k, v]) => {
        obj[k] = v;
    })
    return obj;
    // return input.reduce((acc, [k, v]) => {
    //     acc[k] = v;
    //     return acc;
    // }, {})   // must pass in default(starting) accumulator as empty obj.
}

// should take in the request body as a string and return an object of key/value pairs
// example: { username: "azure green",password: "password!"}
function parseBody(str) {
    // return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
    // console.log(str);
    const split = firstStep(str);
    // console.log(split);
    const nestedArr = secondStep(split);
    // console.log(nestedArr);
    const spaces = thirdStep(nestedArr);
    // console.log(spaces);
    const decoded = fourthStep(spaces);
    // console.log(decoded);
    const obj = fifthStep(decoded);
    // console.log(obj);
    return obj;
}
// parseBody("username=azure+green&password=password%21");




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
