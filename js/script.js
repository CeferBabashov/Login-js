// let inp= document.getElementById("inp");
// let pass=document.getElementById("pass");


// function Login(){
//     let gmail="example@gmail.com";
//     let password="12345";

// }
// Login();


function Login() {
    let mail = document.getElementById("inp").value;
    let password = document.getElementById("pass").value;
    

    if (mail == 'example@gmail.com' && password == '12345') {
        alert("Entered successfuly");
    }
    else if(mail=='' || password==''){
        alert("Fill in the blanks");
    }
    else {
        alert("Try again");
    }
}
// if(gmail=="example@gmail.com" && password="12345"){
//     alert("true");
// }
// else(){
//     alert("wrong");
// // }
// let cavab=prompt('enter password');

// let mail=="example@gmail.com" ? 'okey' :'yanlis';

