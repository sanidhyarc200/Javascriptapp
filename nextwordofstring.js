function shiftLetters(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (char >= 'a' && char <= 'z') {
        result += String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
      } else if (char >= 'A' && char <= 'Z') {
        result += String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
      } else {
        result += char;
      }
    }
    return result;
  }
  
  const originalString = "abcABC";
  const modifiedString = shiftLetters(originalString);
  console.log(modifiedString); 