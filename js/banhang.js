function thanhtoan() {
    var x = document.getElementsByTagName("input");
    var y = document.getElementsByClassName("error");
    var z = document.getElementById("email").value;
    var z0 = document.getElementById("address").value;
    var z1 = document.getElementById("phone-number").value;
    for (var i = 0; i < x.length; i++) {
        if (x[i].value == "") {
            y[i].innerHTML = "(*) Bắt buộc nhập thông tin";
            y[i].style.color = "red";
        } else {
            y[i].innerHTML = "";
        }
    }
    if (z.indexOf("@") == -1) {
        y[1].innerHTML = "(*) Không nhận dạng đúng email";
        y[1].style.color = "red";
    }
    if (z0.indexOf("/") == -1) {
        y[2].innerHTML = "(*) Địa chỉ không phù hợp";
        y[2].style.color = "red";
    }
    if (z1.length < 10 || z1.length > 10) {
        y[3].innerHTML = "(*) Số điện thoại sai quy định";
        y[3].style.color = "red";
    }
    if (z != -1 && z0 != -1 && z1.length == 10) {
        alert('Xác nhận đơn hàng thành công');
        window.location.replace("file:///D:/PROJECT/sanpham/trangchu.html");
    }
}

function tinhtien() {
    var x = document.getElementById("gia").innerHTML;
    tam = " ";
    for (i = x.length - 2; i >= 0; i--) { // bỏ "đ".
        if ((x[i] != " ") && (x[i] != ",")) {
            tam = x[i] + tam;
        }
        if (x[i] == ",") {
            tam = tam;
        }
        if (x[i] == " ") {
            break;
        }
    }
    var y = parseInt(tam);
    var z = parseInt(document.getElementById("size").value);
    document.getElementById("giatien").innerHTML = "<b>" + (y * z).toString().replace(/\B(?=(\d{3})+(?!\d))\B/g, ",") + 'đ</b>';
    document.getElementById("giatien").style.color = 'red';
    document.getElementById("tt").innerHTML = "<b>" + (y * z).toString().replace(/\B(?=(\d{3})+(?!\d))\B/g, ",") + 'đ</b>';
    document.getElementById("tt").style.color = 'red';
}

$(document).ready(function() {
    var modal = $('.modal1');
    var btn = $('.show');
    var span = $('.close');

    btn.click(function() {
        modal.show();
    });
    span.click(function() {
        modal.hide();
    });
    // click bên ngoài bảng
    $(window).on('click', function(e) {
        if ($(e.target).is('.modal')) {
            modal.hide();
        }
    });
});