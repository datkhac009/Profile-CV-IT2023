
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

