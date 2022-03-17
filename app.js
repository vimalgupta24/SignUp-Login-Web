const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbz1Wv8zd-oS6WQ6iP3-3ypegw8Apb5Qx0-DihMuiWo6PKXrNnpfz6SL--oISOHu72hV/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(function () {
    container.classList.remove("sign-up-mode");
    return alert("Thanks for Contacting us and Now,You can Proceed with Login...");
      })
  .catch(error => console.error('Error!', error.message))
})
container.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

// sign_in_btn.addEventListener('click', () =>{
//     container.classList.remove("sign-up-mode");
// });


