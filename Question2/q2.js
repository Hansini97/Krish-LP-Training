//Question2 : Write a program to count the repetitions of each character in a given string

function characterCount(intent) {
    const ch = {};
    
    for (let characters of intent) {
      characters = characters.toLowerCase();
      ch[characters] = ch[characters] + 1 || 1;
       
    }

    return ch;
}

var sentence = 'Hi Hansini!!!';
console.log(characterCount(sentence));
