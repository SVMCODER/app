function create() {
    pname = document.getElementById('pname').value;
    fname = document.getElementById('fname').value;
    lang = document.getElementById('lang').value;
    localStorage.removeItem('method')
    
    if (pname == '' || fname == '') {
      document.getElementById('error').innerHTML = '<br> ❗ Please fill all the fields'
    }
    else if (lang == 'aio') {
    localStorage.removeItem('method')
    localStorage.setItem('pname',pname)
    localStorage.setItem('fname',fname+'.html')
    localStorage.setItem('lang',lang)
    localStorage.setItem('editing',true)
    swal({
      title: "Creating Project",
      text: "Please wait while we are creating your project.",
      imageUrl: 'https://recruitment.hpushimla.in/Images/tick-gif-6.gif'
    });
      setTimeout(() => {
        swal({
          title: "Project Created",
          text: "Done!",
          imageUrl: 'https://recruitment.hpushimla.in/Images/tick-gif-6.gif'
        });
        setTimeout(() => {
          window.location.replace('codeaio.html')
        }, 400);
      }, 1300);
    }

    // else if (lang == 'py') {
    //   localStorage.setItem('pname',pname)
    //   localStorage.setItem('fname',fname+'.py')
    //   localStorage.setItem('lang',lang)
    //   swal({
    //     title: "Creating Project",
    //     text: "Please wait while we are creating your project.",
    //     imageUrl: 'https://recruitment.hpushimla.in/Images/tick-gif-6.gif'
    //   });
    //     setTimeout(() => {
    //       swal({
    //         title: "Project Created",
    //         text: "Done!",
    //         imageUrl: 'https://recruitment.hpushimla.in/Images/tick-gif-6.gif'
    //       });
    //       setTimeout(() => {
    //         window.location.replace('codepy.html')
    //       }, 400);
    //     }, 1300);
    //   }
}

document.getElementById('p').innerHTML = `<div class='container'>
<i class='bx bx-calendar-edit'></i> Editing ${localStorage.getItem('fname')} in ${localStorage.getItem('pname')}
</div>`
