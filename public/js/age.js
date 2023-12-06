const ageHandler = async (e) => {
  e.preventDefault();
  const dob = document.querySelector('#birthdate').value.trim();
  console.log(dob);
  var age = getAge(dob);
  console.log(age);
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

// // const rememberSession = async (e) => {
// //   e.preventDefault();
// //   const rememberCheckbox = document.querySelector('#remember-me');
// //   console.log(rememberCheckbox.checked);

// //   if (rememberCheckbox.checked == true) {
// //   }
// // };

// //   if (dob) {
// //     const response = await fetch('/', {
// //       method: 'GET',
// //       body: JSON.stringify({ birthdate: dob }),
// //       headers: { 'Content-Type': 'application/json' },
// //     });
// //     const data = await response.json();
// //     if (response.status === 400 || response.status === 401) {
// //       return alert(data.message);
// //     }
// //     document.location.replace('/');
// //   }
// // };

// // If birthday has been entered
// // if (dob) {
// //   const response = await fetch('/', {
// //     method: 'POST',
// //     body: JSON.stringify({ birthdate: dob }),
// //     headers: { 'Content-Type': 'application/json' },
// //   });
// //   const data = await response.json();
// //   if (response.status === 400 || response.status === 401) {
// //     return alert(data.message);
// //   }
// //   document.location.replace('/');
// // }
// // };
// document.querySelector('#birthdate').addEventListener('input', ageHandler);
// // document
// //   .querySelector('#remember-me')
// //   .addEventListener('change', rememberSession);
