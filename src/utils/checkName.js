export default function checkName(input, name) {
  let lettersAcepted = /^[a-zA-Z]+$/;
  let inputWithoutSpecialCharacters = '';
  let nameWithoutSpecialCharacters = '';
  input.split('').map((letter) => {
    if (lettersAcepted.test(letter)) inputWithoutSpecialCharacters += letter;
  });
  name.split('').map((letter) => {
    if (lettersAcepted.test(letter)) nameWithoutSpecialCharacters += letter;
  });
  return (
    inputWithoutSpecialCharacters.toLowerCase() ===
    nameWithoutSpecialCharacters.toLowerCase()
  );
}
