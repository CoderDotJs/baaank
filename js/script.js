const login = document.getElementById('login');

//login event
login.addEventListener('click', function(event){
    event.preventDefault();
    getLogin('email','pass');
});

function getLogin(mail,pass){
    const email = document.getElementById(mail);
    const epass = document.getElementById(pass);
    let userMail = email.value;
    let userPass = epass.value;

    if(userMail == 'akash@gmail.com' && userPass == 'pass'){
        window.location.href = 'dashboard.html';
    }else if(userMail == '' || userPass == ''){
        alert('Please enter mail and password')
    }
    else{
        alert('User or pass is incorrect')
    }
}