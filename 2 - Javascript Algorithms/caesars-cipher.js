function rot13(str) {
    return str.split('')
        .map.call(str, function (char) {

            x = char.charCodeAt(0);
            if (x < 65 || x > 90) {
                return String.fromCharCode(x); 
            }
            else if (x < 78) {  //N = ASCII 78, if the character code is less than 78, shift forward 13 places
                return String.fromCharCode(x + 13);
            }
            
            // Otherwise shift the character 13 places backward
            return String.fromCharCode(x - 13);
        }).join('');
}