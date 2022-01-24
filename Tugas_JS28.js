function regex() {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let match = str.search(/s/);
    return "Urut ke : " + match;
}

console.log(regex());