let validInput = (input) =>{
    let { from, to, price } = input;
    if(typeof(from) != 'string' || typeof(to) != 'string' || isNaN(parseInt(price))) throw Error('Input invalid')
}

exports.validInput = validInput