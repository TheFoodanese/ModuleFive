document.getElementById('generate-btn').addEventListener('click', function() {
    var lengthInput = document.getElementById('password-length').value;
    var length = parseInt(lengthInput);
  
    if (isNaN(length) || length < 8 || length > 30) {
      alert("Please enter a valid password length between 8 and 30 characters.");
      return;
    }
  
    var lowercase = document.getElementById('lowercase').checked;
    var uppercase = document.getElementById('uppercase').checked;
    var numeric = document.getElementById('numeric').checked;
    var special = document.getElementById('special').checked;
  
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("Please select at least one character type.");
      return;
    }
  
    var charset = "";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numeric) charset += "0123456789";
    if (special) charset += "!@#$%^&*()-_=+";
  
    var password = generatePassword(length, charset);
    alert("Generated Password: " + password);
  });
  
  function generatePassword(length, charset) {
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  