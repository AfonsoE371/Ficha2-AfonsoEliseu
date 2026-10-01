const name = process.argv[2] || 'World';
console.log('Hello, $(name)!');
console.log(process.argv.map(arg=>arg));

function greet (name){
    return 'Hello, ${name}!';
}

function looping(arg, index){
    return 'Argument ${index}:${arg}';
}

console.log(process.argv.map((arg,index)=>'Argument ${index}: ${arg}'));

const cards=['Ace','King','Queen','Jack','10','9'];

console.log("Cards size: "+ cards.length);


