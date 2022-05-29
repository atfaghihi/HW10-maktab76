new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// Error: Whoops!

// Works exactly the same as this:

new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
}).catch(alert);

// Error: Whoops!

// The "invisible try..catch" around the executor automatically catches
// the error and turns it into rejected promise.
  
// This happens not only in the executor function, but in its handlers as
// well. If we throw inside a .then handler, that means a rejected promise,
// so the control jumps to the nearest error handler.