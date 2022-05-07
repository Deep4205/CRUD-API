
module.exports = {
    randomFunction: function(){
        let randomNumber = Math.floor((Math.random() * 10000000000) + 1);
       return randomNumber;
    }
,
    alphaNumeric:function(){
        let alpha = Math.random().toString(36).substr(2, 10); //? 10 is the length of the string
    }
 }