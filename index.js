function login() {
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  admno = document.getElementById('admno').value;
  frname = document.getElementById('frname').value;
  mrname = document.getElementById('mrname').value;

  if (username.length > 16) {
    swal({
      title: "Invalid",
      text: "Username cannot be greater than 16 letters",
      icon: "error",
      button: "Ok",
    });
  }
  else if (password.length > 8 || password.length < 8) {
    swal({
      title: "Invalid",
      text: "Password cannot be less or greater than 8 digits",
      icon: "error",
      button: "Ok",
    });
  }
  else if (admno.length > 4 || admno.length < 4) {
    swal({
      title: "Invalid",
      text: "Admission Number cannot be less or greater than 4 digits",
      icon: "error",
      button: "Ok",
    });
  }
  else if (frname.length > 0 || frname.length < 16) {
    swal({
      title: "Invalid",
      text: "Father's Name cannot be less than 0 and greater than 16 digits",
      icon: "error",
      button: "Ok",
    });
  }
  else if (mrname.length > 0 || mrname.length < 16) {
    swal({
      title: "Invalid",
      text: "Mother's Name cannot be less than 0 and greater than 16 digits",
      icon: "error",
      button: "Ok",
    });
  }
  else if (username == 'Shaurya' && password == 'uioplol!') {
    swal({
      title: "Welcome our Developer",
      text: "Loggin In, Please wait.",
      icon: "success"
    });
    localStorage.setItem('name', "Shaurya Tripathi")
    localStorage.setItem('role', "Founder")
    localStorage.setItem('badge', "Developer")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', '3672')
    localStorage.setItem('frname', "Mr. Ramanand Tripathi")
    localStorage.setItem('mrname', "Mrs. Kiran Tripathi")
    localStorage.setItem('verified',true)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else if (username == 'Rohit' && password == 'rs15bug!') {
    swal({
      title: "Welcome our Owner Rohit",
      text: "Loggin In, Please wait.",
      icon: "success"
    });
    localStorage.setItem('name', "Rohit Srivastava")
    localStorage.setItem('role', "Onwer")
    localStorage.setItem('badge', "Admin")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', admno)
    localStorage.setItem('frname', frname)
    localStorage.setItem('mrname', mrname)
    localStorage.setItem('verified',true)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else if (username == 'Yashraj' && password == 'ur7bug00') {
    swal({
      title: "Welcome Admin",
      text: "Loggin In, Please wait.",
      icon: "success"
    });
    localStorage.setItem('name', "Yash Raj Ojha")
    localStorage.setItem('role', "Friend")
    localStorage.setItem('badge', "Admin")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', admno)
    localStorage.setItem('frname', frname)
    localStorage.setItem('mrname', mrname)
    localStorage.setItem('verified',true)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else {
    swal({
      title: "Welcome "+username,
      text: "Loggin In, Please wait.",
      icon: "success"
    });
    localStorage.setItem('name', username)
    localStorage.setItem('role', 'User')
    localStorage.setItem('loggedin','yes')
    localStorage.setItem('admno', admno)
    localStorage.setItem('frname', frname)
    localStorage.setItem('mrname', mrname)
    localStorage.setItem('verified', false)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
}
if(localStorage.getItem('loggedin') == 'yes') {
  window.location.replace('home.html')
}