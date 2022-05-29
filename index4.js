let promise = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});
promise.then(alert);


answer
//  alerted 1 and did not alert 2 because the first resolve is running and if
//  we comment first resolve the second resolve is runnning and alert 2 and if
//  we have 'promise all' first alert 1 and 2 is alerted after 1 seconds.