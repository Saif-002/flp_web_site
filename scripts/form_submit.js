document.getElementById('btn').addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('form').reset()
})

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  const input = document.getElementById('user_mobile');
  const value = input.value;

  if (value.length !== 10 || !/^\d{10}$/.test(value)) {
      alert('Please enter a valid 10-digit number.');
      e.preventDefault();
      submitButton.disabled = false
  }else{
    fetch('/env')
    .then(response => response.json())
    .then(data => {
      fetch(data.apiKey, { method: 'POST', body: requestBody })
      .then(response => {
        alert('Success!', response)
        document.getElementById('form').reset()
        submitButton.disabled = false
      })
      .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
      }
      )
    })
    .catch(error => console.error('Error fetching environment variables:', error));
  }
})
