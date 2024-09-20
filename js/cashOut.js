document.getElementById('btn-cash-out').addEventListener('click', function (event) {
  event.preventDefault();
  const inputCashout = document.getElementById('input-cash-out').value;
  const inputCashoutPin = document.getElementById('input-cashout-pin').value;
  if (inputCashoutPin === '1234') {
    const accountBalance = document.getElementById('account-balance').innerText;
    const newBalance =  parseFloat(accountBalance) - parseFloat(inputCashout);
    document.getElementById('account-balance').innerText = newBalance;
  }
  else {
    alert('faild to add money! pleace try again.')
  }
})