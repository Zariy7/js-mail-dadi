let verifyBtn = document.getElementById('verify');
verifyBtn.addEventListener('click', verifyEmail);

function verifyEmail (){
    let userEmail = document.getElementById('email').value;
    let safeEmails = ['nazariy.hereha@gmail.com', 'n.husu@gmail.com', 'k.cok@gmail.com', 'frizzy89@gmail.com']

    for(let i=0; i<safeEmails.length; i++){
        if(userEmail === safeEmails[i]){
            verifyBtn.classList.replace('btn-primary', 'btn-success');
            verifyBtn.classList.replace('btn-danger', 'btn-success');
            verifyBtn.innerText = 'Success!';
            i=safeEmails.length;
        }
        else{
            verifyBtn.classList.replace('btn-primary', 'btn-danger');
            verifyBtn.classList.replace('btn-success', 'btn-danger');
            verifyBtn.innerText = 'Try again!'
        }
    }
}