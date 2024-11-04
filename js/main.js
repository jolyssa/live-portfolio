function toggleHamburgerMenu() {
    let x = document.querySelector('nav');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


//Class Home
//Typewriter Effect on Home Section
const typewriterText = document.querySelector('#typewriter')

const phrases = [
    'Full-Stack Software Engineer', 
    'Web Designer',
     'Educator'
]

let phraseIndex = 0
let characterIndex = 0

function type(){
    if (characterIndex < phrases[phraseIndex].length) {
        typewriterText.textContent += phrases[phraseIndex][characterIndex]
        characterIndex++
        setTimeout(type, 100)
    } else {
        setTimeout(erase, 1000)
    }
}

function erase(){
    if (characterIndex > 0) {
        typewriterText.textContent = phrases[phraseIndex].substring(0, characterIndex - 1)
        characterIndex--
        setTimeout(erase, 50)
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 250)
      }
    }

    type()
