function dangky() {
  var b = document.getElementsByClassName("error");
  var c = document.getElementById("username").value;
  var d = document.getElementById("password").value;
  var e = document.getElementById("repeat-password").value;
  var f = document.getElementById("email").value;
  var g = document.getElementById("address").value;
  var h = document.getElementById("phone-number").value;
  // kiểm tra tên
  if (c == "") {
    b[0].innerHTML = "<i>(*) Vui lòng nhập tên</i>";
    b[0].style.color = "red";
  } else {
    b[0].innerHTML = "";
  }
  // kiểm tra mật khẩu
  if (d.length < 8) {
    b[1].innerHTML = "<i>(*) Mật khẩu quá ngắn</i>";
    b[1].style.color = "red";
  } else {
    b[1].innerHTML = "";
  }
  // kiểm tra nhập lại mật khẩu
  if (e == "") {
    b[2].innerHTML = "<i>(*) Vui lòng nhập lại mật khẩu</i>";
    b[2].style.color = "red";
  } else {
    b[2].innerHTML = "";
  }
  // kiểm tra mk mới và cũ
  if (d != e) {
    b[2].innerHTML = "<i>(*) Mật khẩu không trùng nhau</i>";
    b[2].style.color = "blue";
  }
  // kiểm tra email
  if (f.indexOf("@") == -1) {
    b[3].innerHTML = "<i>(*) Không nhận dạng đúng email</i>";
    b[3].style.color = "red";
  } else {
    b[3].innerHTML = "";
  }
  // kiểm tra địa chỉ
  if (g.indexOf("/") == -1) {
    b[4].innerHTML = "<i>(*) Không xác định được địa chỉ</i>";
    b[4].style.color = "red";
  } else {
    b[4].innerHTML = "";
  }
  // kiểm tra sđt
  if (h.length < 10 || h.length > 10) {
    b[5].innerHTML = "<i>(*) Số điện thoại sai quy định</i>";
    b[5].style.color = "red";
  } else {
    b[5].innerHTML = "";
  }
  // điều kiện đăng ký thành công
  if (f != -1 && g != -1 && h.length == 10) {
    alert("Xác nhận đơn hàng thành công");
  }
}
function dangnhap() {
  var a = document.getElementById("username").value;
  var b = document.getElementById("password").value;
  var c = document.getElementsByClassName("error");
  if (a == "") {
    c[0].innerHTML = "<i>Tên đăng nhập sai</i>";
    c[0].style.color = "red";
  } else {
    c[0].innerHTML = "";
  }
  if (b == "") {
    c[1].innerHTML = "<i> Mật khẩu không đúng </i>";
    c[1].style.color = "red";
  } else {
    c[0].innerHTML = "";
  }
  if (a == "trannhatthinh" && b == "123456789") {
    alert("Đăng nhập thành công");
    window.location.replace("file:///D:/PROJECT/form/bang1.htm");
  } else {
    alert("Không tìm thấy tài khoản");
  }
  return false;
}
