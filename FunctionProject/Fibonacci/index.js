var bigInt = require("big-integer");
var memo=[0,1];

function fibbo(numero){

    if (numero < 0){
        throw 'must be greater than 0'

    }
    else if (memo.length > numero){
        return memo[numero];
    }

    else {
        
        memo.push(fibbo(numero-1));

    }
    return memo[numero];
    
    
}

module.exports = async function (context, req) {
    
    

    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    /*let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        for (var i = 0; i < nth - 1; i++) {
            answer = nth_2.add(nth_1)
            nth_2 = nth_1
            nth_1 = answer
        }
    }
    */
    let answer = fibbo(nth); 
    context.res = {
        body: answer.toString()
    };
}