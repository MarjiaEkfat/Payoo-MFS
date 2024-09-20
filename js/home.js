document.getElementById('btn-add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const inputAddMoney = document.getElementById('input-add-money').value;
  const inputPinNumber = document.getElementById('input-pin-number').value;

  if (inputPinNumber === '1234') {
    const accountBalance = document.getElementById('account-balance').innerText;
    const newBalance = parseFloat(inputAddMoney) + parseFloat(accountBalance);
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;
  }
  else {
    console.log('faild to add money! pleace try again.')
  }
})