
const input = document.querySelector(".form-label input");
    const icon = document.querySelector('.form-label .icon');

    input.addEventListener('keyup', function () {
      let  list_register = localStorage.getItem("list-register")?JSON.parse(localStorage.getItem("list-register")):[];
        
    
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/;
    if(!input.value){
        console.log("input da xoa");
        icon.classList.replace("fa-check","fa-user")
       return icon.style.color = "#b4b4b4"

     }else if(input.value.match(pattern)){
        console.log("input da vao");
        icon.classList.replace("fa-user","fa-check")
       return icon.style.color = "#4bb543"

     }else{
        console.log("input chet");
        icon.classList.replace("fa-check","fa-user")
        return icon.style.color = "#f00000"
     }

});





    login.addEventListener('click', function () {
    let password = document.querySelector("#password").value;
    let user = document.querySelector("#username").value;
    list_register = localStorage.getItem("list-register")?JSON.parse(localStorage.getItem("list-register")):[];
    
    
    //Cách 1 :là dùng hàm some() để duyệt mảng xem nó trả về true hoặc false 
    let checkLogin = list_register.some(value => value.username === user && value.password === password)
    
    if(!checkLogin){
        alert("Nhap sai,Vui long nhap lai")
    }
    else{
        confirm("Bạn muốn tiếp tục chứ")
        window.location.href = "index.html"
    }
    // Cách 2 : lấy username và pass ra ngoài arr 
    // const Username = list_register.map(value => {
    //     return value.username;
    //   });
    //   const Password = list_register.map(value => {
    //     return value.password;
    //   });
    // if(user == Username && password == Password){
    //     window.location.href = "index.html"
        
    // }
    // else{
    //     alert("Nhap sai,Vui long nhap lai")
    // }
});
function resetInput(){
  let register_password = document.querySelector(".register-form #password").value=""
  let register_user = document.querySelector(".register-form #username").value=""

}
const form = document.querySelector('.form-group');
console.log("🚀 ~ file: login.js:64 ~ form:", form)
const register_link = document.querySelector('.register-link');
const login_link = document.querySelector('.login-link');
const register_form = document.querySelector('.register-form');
register_link.addEventListener('click', function () {

  form.classList.add('active');
  register_form.style.opacity = "1"
  resetInput()
});

login_link.addEventListener('click', function () {
  form.classList.remove('active');
  register_form.style.opacity = "0"
  resetInput()
});
