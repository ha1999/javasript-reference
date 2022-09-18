function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

    yield* generateSequence(48, 57); // number
    // for (let i = 48; i <= 57; i++) yield i;
  
    yield* generateSequence(65, 90); // supper character
    // for (let i = 65; i <= 90; i++) yield i;
  
    yield* generateSequence(97, 122); // lower character
    // for (let i = 97; i <= 122; i++) yield i;
  
  }
  
  let str = '';
  
  for(let code of generateAlphaNum()) {
    str += String.fromCharCode(code);
  }
  
  console.log(str) // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz