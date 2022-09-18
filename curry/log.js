function log(date, importance, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

function curry(f) { // curry(f) does the currying transform
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c);
            };
        };
    };
}
log = curry(log);

log(new Date())("DEBUG")("some debug");

let logNow = log(new Date());

// use it
logNow("INFO", "message"); // [HH:mm] INFO message

let debugNow = logNow("DEBUG");

debugNow("message"); // [HH:mm] DEBUG message

