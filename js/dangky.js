// let register = document.querySelector("#register");
function resetInput(){
    let password = document.querySelector(".register-form #password").value=""
    console.log("🚀 ~ file: dangky.js:4 ~ resetInput ~ password:", password)
    let user = document.querySelector(".register-form #username").value=""
    console.log("🚀 ~ file: dangky.js:6 ~ resetInput ~ user:", user)

}

   
    register.addEventListener('click', function () {
        let password = document.querySelector(".register-form #password").value;
        let user = document.querySelector(".register-form #username").value;
        let list_register = localStorage.getItem("list-register")?JSON.parse(localStorage.getItem("list-register")):[];
    
        let regex = /\s+/g;
    
        if(!user || !password){
        alert("Bạn chưa điền đầy đủ");
    }
        else if(regex.test(user)|| regex.test(password)){
            alert("Không được để khoảng cách ở các dòng")
        }
        else{
        list_register.push({
            username :user,
            password : password
        })
        localStorage.setItem("list-register",JSON.stringify(list_register))
        resetInput()
        
    }
});
