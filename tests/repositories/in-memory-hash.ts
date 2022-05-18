export function generated_props() {
  const caracters = 'zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM'
  const randomLoc = Math.floor(Math.random() * caracters.length / 2);

  let text = '';

  for(let i = 0; i <= randomLoc; i++) {

      let character = caracters[Math.floor(Math.random() * caracters.length)];

      if (text.indexOf(character) === -1) text += character
  };
  return text
};