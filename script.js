function goTo() {
    location.replace("./login.html");
}

function login() {
    const user = document.getElementById('username').value;
    const psw = document.getElementById('password').value;
    const divError = document.getElementById('error');
    if(user === "" || psw === "") {
        divError.style.display = 'block';
    }
    else {
        if(user === 'admin' && psw==='admin') {
            divError.style.display = 'none';
            window.alert(`Hello ${user}`);
            location.replace('./index.html');
        }
        else {
            divError.style.display = 'block';
        }
    }

}