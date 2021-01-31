const fs = require('fs');
const CSV = process.env.CSV;

exports.load = ()=>{
    let data = fs.readFileSync(`${CSV}`, 'utf8');
    return parser(data, ',', '\n') 
}

function parser(data, comma, end){
    data = data.replace(/\n/g, ',')
    data = data.replace(/\r|\t/g, '')
    let response = data.split(/,/)
    return response;
}