const loginHandler = async (e) => {
  e.preventDefault();
  const user_name = document.querySelector('#user-name').value.trim();
  const password = document.querySelector('#password').value.trim();
  // const email = document.querySelector('#email').value.trim();

  if (user_name == '') {
    $('#user-name').attr(
      'style',
      'background-color: rgb(255, 245, 235); border-color: red; '
    );
    $('#user-name').attr('placeholder', 'Please enter a username');
  }

  if (password == '') {
    $('#password').attr(
      'style',
      'background-color: rgb(255, 245, 235); border-color: red; '
    );
    $('#password').attr('placeholder', 'Please enter a password');
  }

  // if (email == '') {
  //   $('#email').attr(
  //     'style',
  //     'background-color: rgb(255, 245, 235); border-color: red; '
  //   );
  //   $('#email').attr('placeholder', 'Please enter an email');
  // }

  // If username and password have been entered
  if (user_name && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    if (response.status === 400 || response.status === 401) {
      return alert(data.message);
    }
    document.location.replace('/');
  }
};

// const ageHandler = async (e) => {
//   e.preventDefault();
//   const dob = document.querySelector('#birthdate').value.trim();
//   console.log(dob);
//   var age = getAge(dob);
//   console.log(age);
//   if (dob == '' || age < 21) {
//     $('#birthdate').attr(
//       'style',
//       'background-color: rgb(255, 245, 235); border-color: red; '
//     );
//   }
//   if (age < 21) {
//     document.querySelector('#login-btn').disabled = true;
//   } else {
//     document.querySelector('#login-btn').disabled = false;
//   }
// };

// function getAge(dob) {
//   var today = new Date(),
//     birthDate = new Date(dob),
//     age = today.getFullYear() - birthDate.getFullYear(),
//     m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   return age;
// }
// document.querySelector('#birthdate').addEventListener('input', ageHandler);
document.querySelector('#login-btn').addEventListener('click', loginHandler);
