// Question4 : Write a program to find if two words are anagrams

function anagram(word1, word2){

    var first = word1.toLowerCase().split('').sort().join();
    var second = word2.toLowerCase().split('').sort().join();
  
    if(first == second){

      console.log("Anagram!");

    }
    else{

      console.log("Not an Anagram!");

    }
  
  }
  
  anagram("Listen", "silent");