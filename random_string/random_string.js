function randoms(string_list) {
    var i1 = Math.floor(Math.random() * (string_list.length));
    var i2 = Math.floor(Math.random() * (string_list.length));
    var i3 = Math.floor(Math.random() * (string_list.length));
    {
        return [string_list[i1],string_list[i2],string_list[i3]]
    }
    ;
}
console.log(randoms(['alma', 'banan','korte','ruha','fej','iras']))
