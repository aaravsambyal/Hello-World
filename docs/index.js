const nameText = "Aarav Sambyal";
const typedName = document.getElementById("typed-name");

let index = 0;

function typeLetter(){
    if (index < nameText.length){
        typedName.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeLetter, 150);
    }
}

window.onload = typeLetter;