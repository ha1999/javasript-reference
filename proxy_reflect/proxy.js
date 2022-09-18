
// return default value out of range array 

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  }
});

alert( numbers[1] ); // 1
alert( numbers[123] ); 


let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
  };
  
  dictionary = new Proxy(dictionary, {
    get(target, phrase) { // intercept reading a property from dictionary
      if (phrase in target) { // if we have it in the dictionary
        return target[phrase]; // return the translation
      } else {
        // otherwise, return the non-translated phrase
        return phrase;
      }
    }
  });
  
  // Look up arbitrary phrases in the dictionary!
  // At worst, they're not translated.
  alert( dictionary['Hello'] ); // Hola
  alert( dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)






// allow only number to push to array.

  let number_1s = [];

  number_1s = new Proxy(numbers, { // (*)
    set(target, prop, val) { // to intercept property writing
      if (typeof val == 'number') {
        target[prop] = val;
        return true;
      } else {
        return false;
      }
    }
  });
  
  number_1s.push(1); // added successfully
  number_1s.push(2); // added successfully
  alert("Length is: " + number_1s.length); // 2
  
  number_1s.push("test"); // TypeError ('set' on proxy returned false)
  
  alert("This line is never reached (error in the line above)");







  // handler return value by key of object


  let user = {
    name: "John",
    age: 30,
    _password: "***"
  };
  
  user = new Proxy(user, {
    ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });
  
  // "ownKeys" filters out _password
  for(let key in user) alert(key); // name, then: age
  
  // same effect on these methods:
  alert( Object.keys(user) ); // name,age
  alert( Object.values(user) ); // John,30