const signUpHandler = async (e) => {
  e.preventDefault();
  const user_name = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();
  const email = document.querySelector('#email').value.trim();
  const dob = document.querySelector('#birthdate').value.trim();

  if (email == '') {
    $('#email').attr(
      'style',
      'background-color: rgb(255, 245, 235); border-color: red; '
    );
    $('#email').attr('placeholder', 'Please enter an email');
  }

  if (user_name == '') {
    $('#username').attr('style', 'border-color: red;');
    $('#username').attr('placeholder', 'Please enter a username');
  }

  if (password.length < 8) {
    $('#password').attr('style', 'border-color: red;');
    $('#password').attr('placeholder', 'Please enter a valid password');

    return;
  }

  if (user_name && password && email && dob) {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ user_name, password, email, dob }),
      headers: { 'Content-Type': 'application/json' },
    });

    const signData = await response.json();
    if (response.status === 400 || response.status === 404) {
      return alert(signData.message);
    }
    if (response.ok) {
      //replaces current page with home page
      document.location.replace('/');
    } else {
      return alert(
        'Username already exist in our database. Try another Username.'
      );
    }
  }
};
document.querySelector('#submit-btn').addEventListener('click', signUpHandler);

const ageHandler = async (e) => {
  e.preventDefault();
  const dob = document.querySelector('#birthdate').value.trim();
  var age = getAge(dob);
  if (dob == '' || age < 21) {
    $('#birthdate').attr(
      'style',
      'background-color: rgb(255, 245, 235); border-color: red; '
    );
  }
  if (age < 21) {
    document.querySelector('#submit-btn').disabled = true;
  } else {
    document.querySelector('#submit-btn').disabled = false;
  }
};

function getAge(dob) {
  var today = new Date(),
    birthDate = new Date(dob),
    age = today.getFullYear() - birthDate.getFullYear(),
    m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
document.querySelector('#birthdate').addEventListener('input', ageHandler);
