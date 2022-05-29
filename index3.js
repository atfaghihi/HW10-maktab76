function IsJsonString(str) {
    try {
        JSON.parse(str);
        // JSON.stringify(str);
    } catch (error) {
        return false;
    }
    return true;
}

let str = '{name:at}';
console.log(IsJsonString(str));