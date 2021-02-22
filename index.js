const { default: consolaGlobalInstance } = require('consola');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let wordCounter = 0;

function requestedWord() {
     
    rl.question('Please insert 5 words ', (answer) => {
      
      for (let index = 0; index < answer.length; index++) {
            if (answer.charAt(index)===" ")
                wordCounter ++;
        }
            if (wordCounter <4) {
                consola.error(`${answer} Your input is not valid`)
                requestedWord()
            } else {
                consola.success(`${answer} Your input valid!`)
                rl.close();
          }
          
            
    });  
}

requestedWord()