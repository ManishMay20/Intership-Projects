function validate()
{
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    
    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkpasswordmatch(password , cpassword);
}

function checkusername(username){
    if(username.length > 7){
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('failure','success');
        document.getElementById('username_error').innerText = '';
    }
    else{
        document.getElementById('username').classList.add('failure');
        document.getElementById('username_error').innerText = "Username must be 8 letter"
    }
}

function checkemail(email){
    if(email.length > 8 && email.includes('@gmail')){
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('failure','success');
        document.getElementById('email_error').innerText = '';
    }
    else{
        document.getElementById('email').classList.add('failure');
        document.getElementById('email_error').innerText = "Email must inculde @gmail and 8 letter long"
    }
}

function checkpassword(password){
    if(password.length > 7 && password.includes('.')){
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('failure','success');
        document.getElementById('password_error').innerText = '';
    }
    else{
        document.getElementById('password').classList.add('failure');
        document.getElementById('password_error').innerText = "password must be 8 letter long and should include ."
    }
}
function checkpasswordmatch(password , cpassword){
    if(password==cpassword && password!=''){
        document.getElementById('cpassword').classList.add('success');
        document.getElementById('cpassword').classList.replace('failure','success');
        document.getElementById('cpassword_error').innerText = '';
    }
    else{
        document.getElementById('cpassword').classList.add('failure');
        document.getElementById('cpassword_error').innerText = "password not matched";
    }
}
