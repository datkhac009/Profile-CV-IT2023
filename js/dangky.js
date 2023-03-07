// let register = document.querySelector("#register");
function resetInput(){
    let password = document.querySelector(".register-form #password").value=""
    let user = document.querySelector(".register-form #username").value=""
    let name = document.querySelector(".register-form #name").value="";

}

   
    register.addEventListener('click', function () {
        let password = document.querySelector(".register-form #password").value;
        let user = document.querySelector(".register-form #username").value;
        let name = document.querySelector(".register-form #name").value;
        let list_register = localStorage.getItem("list-register")?JSON.parse(localStorage.getItem("list-register")):[];
    
        let regex = /\s+/g;
        let regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let check_email = regex_email.test(user);
        if(!user || !password ||!name){
        alert("Bạn chưa điền đầy đủ");
        }
        else if(!check_email){
            alert("Bạn hãy tạo đúng email")
        }
        else if(regex.test(user)|| regex.test(password)){
            alert("Không được để khoảng cách ở các dòng")
        }
        else{
        list_register.push({
            name :name,
            username :user,
            password : password
        })
        localStorage.setItem("list-register",JSON.stringify(list_register))
        resetInput()
        
    }
});
