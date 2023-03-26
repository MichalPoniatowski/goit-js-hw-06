const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Please fill all fields");
  } else {
    let object = {
      email: email.value,
      password: password.value,
    };

    console.log(object);
    form.reset();
  }
});
