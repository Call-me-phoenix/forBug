const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')
const signUp = document.getElementById('realsignUp')
const signIn = document.getElementById('realsignIn')
const signInForm = document.getElementById('signInForm')
console.log(signInForm)
let xhr = new XMLHttpRequest()
var data = JSON.stringify({
  username: 'phoenix',
  password: 'Zwh3208a'
})

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active")
})

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active")
})

signIn.addEventListener('click', function (e) {
  e.preventDefault()
  xhr.open('POST', 'http://127.0.0.1:3007/api/login', true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send('username=phoenix&password=Zwh3208c');
  // xhr.send(data)
  xhr.onreadystatechange = function () {

  }
})
// signInForm.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(1)
// })
// let data = new FormData(signInForm)