// they are not equal.

// if error happens in f1 then it is handled by .catch:
promise
    .then(f1)
    .catch(f2);

// But:

promise
    .then(f1, f2);

// if error happens in f1, f2 there is not chain below
//  and .then passes results/errors to the next .then/catch.
//  So in the second example the error is unhandled.