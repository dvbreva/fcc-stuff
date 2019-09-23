 function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');

    for (var i = 0, length = str.length - 1; i < length / 2; i++) {
         if (str[i] !== str[length - i]) {
             return false;
         }
     }
    return true;
 }

palindrome("eye");