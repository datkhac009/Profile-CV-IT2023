// let register = document.querySelector("#register");
function resetInput() {
  let password = (document.querySelector(".register-form #password").value =
    "");
  let user = (document.querySelector(".register-form #username").value = "");
  let name = (document.querySelector(".register-form #name").value = "");
}
//     function next() {
//         setTimeout(function() {
//             window.location.href="login.html"
//         }, 1000);

//     }
//    function success (success) {
//     setTimeout(function() {
//         alert(success)
//         next()
//     }, 5000);
//         alert("Chúng tôi đang kiểm tra tài khoản của bạn")
//     }
//     function error(error) {

//     }
register.addEventListener("click", function () {
  let password = document.querySelector(".register-form #password").value;
  let user = document.querySelector(".register-form #username").value;
  let name = document.querySelector(".register-form #name").value;
  let list_register = localStorage.getItem("list-register")
    ? JSON.parse(localStorage.getItem("list-register"))
    : [];
  // let check_user = list_register.map(value=>{
  //        return value.username
  // })
  let checkc_clone_email = list_register.some(value => value.username === user)
  let regex = /\s+/g;
  let regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let check_email = regex_email.test(user);
  function next() {
    setTimeout(function () {
      window.location.href = "login.html";
    }, 1000);
  }
  function success(success) {
    setTimeout(function () {
      alert(success);
      next();
      resetInput()
    }, 4000);
    alert("Chúng tôi đang kiểm tra tài khoản của bạn");
  }
  function error(error) {
    setTimeout(function () {
      alert(error);
      resetInput()
    }, 4000);
    alert("Chúng tôi đang kiểm tra tài khoản của bạn");
  }

  if (!user || !password || !name) {
    alert("Bạn chưa điền đầy đủ");
  } else if (!check_email) {
    alert("Bạn hãy tạo đúng email");
  } else if (regex.test(user) || regex.test(password)) {
    alert("Không được để khoảng cách ở các dòng");
  }
  else if (checkc_clone_email) {
    error("Email này đã có người tạo,Vui lòng nhập lại Email");
  }
  else {
    list_register.push({
      name: name,
      username: user,
      password: password,
    });
    success("Bạn đã tạo tài khoản thành công");
    localStorage.setItem("list-register", JSON.stringify(list_register));
  }
});
