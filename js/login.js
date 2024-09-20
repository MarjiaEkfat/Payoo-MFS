// form submit reloading the page

document.getElementById('button-login').addEventListener('click', function (event) {
  event.preventDefault();  //  vajal to beginners
  

  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber, pinNumber);

  // temporary
  if (phoneNumber === '5' && pinNumber === '1234') {
    console.log('you are login.');
    window.location.href = '/home.html';
  }
  else {
    alert('wrong phone number or pin.')
  }
})