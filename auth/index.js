
var body = null;

if (typeof document !== 'undefined') {
    body = document.getElementsByTagName("body")[0];
}
console.log(document.getElementById("loginForm"));
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    
    if (username === 'admin' && password === 'password') {
      
      alert('Login Successful');
    } else {

      alert('Invalid username or password');
    }
  });

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
  
    if (username && email && password && confirmPassword) {

      if (password === confirmPassword) {

        alert('Registration Successful');

        document.getElementById('registrationForm').reset();
      } else {

        alert('Passwords do not match');
      }
    } else {

      alert('Please fill in all fields');
    }
  });

  // const fileInput = document.getElementById("fileUpload")
  // const imageOutput = document.getElementById("output");

  // fileInput.addEventListener("change", async() => {
  //   let [file] = fileInput.files
  //   const reader = new FileReader();
  //   reader.onload = (e) =>{
  //       imageOutput.src=e.target.result;
  //   };

  //   reader.onerror = (err)=>{
  //       console.error("Error reading file", err);
  //       alert("An error occured while reading the file");
  //   };

  //   reader.readAsDataURL(file);
  // });

  
