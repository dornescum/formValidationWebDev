// const name = document.getElementById('name')
// const password = document.getElementById('password')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (name.value === '' || name.value == null) {
//     messages.push('Name is required')
//   }

//   if (password.value.length <= 6) {
//     messages.push('Password must be longer than 6 characters')
//   }

//   if (password.value.length >= 20) {
//     messages.push('Password must be less than 20 characters')
//   }

//   if (password.value === 'password') {
//     messages.push('Password cannot be password')
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })

const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const elementError = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages=[];
  if (name.value === '' || name.value == null){
    messages.push("name must be longer")
  
  }
  if (password.value.length <= 6){
    messages.push('Parola trebuie sa contina minim 6 caractere')
  
  }
  if (password.value.length >= 20){
    messages.push('parola trebuie sa fie mai mica de 20 de caractere')
  }
  if (password.value === 'password'){
    messages.push('nu poti sa pui parola password')
  }
  if (messages.length > 0){
        e.preventDefault()
    elementError.innerText = messages.join(', ')
  }
});