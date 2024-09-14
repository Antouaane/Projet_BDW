let mainImage = document.querySelectorAll('img')[0];
mainImage.addEventListener('click', (e) => {e.preventDefault(); mainImage.width += 10});
mainImage.addEventListener('contextmenu', (e) => {e.preventDefault(); mainImage.width -= 10});

let submitButton = document.querySelectorAll('input')[2];
let commentaire = document.querySelectorAll('input')[1];

submitButton.disabled = true;

commentaire.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (commentaire.value == "") {
        submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
})


