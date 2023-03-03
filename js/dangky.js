// let register = document.querySelector("#register");
function resetInput(){
    let password = document.getElementById("password").value=""
    let user = document.getElementById("username").value=""

}

   
    register.addEventListener('click', function () {
    let password = document.querySelector("#password").value;
    let user = document.querySelector("#username").value;
    list_register = localStorage.getItem("list-register")?JSON.parse(localStorage.getItem("list-register")):[];
    if(!user || !password){
        alert("Bạn chưa điền đầy đủ");
    }else{
        list_register.push({
            username :user,
            password : password
        })
        localStorage.setItem("list-register",JSON.stringify(list_register))
        resetInput()
    }
});
