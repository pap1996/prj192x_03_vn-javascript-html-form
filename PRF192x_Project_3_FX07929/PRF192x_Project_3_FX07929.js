
// Kiem tra truong Ho
function checkSurname() {
    var surname = document.getElementById("surname").value.trim();

    if (surname === "" | surname.length < 2 | surname.length > 30) {
        return false;
    } else {
        return true;
    }
}

// function checkSurname1() {
//     var surname = document.getElementById("surname").value.trim();

//     if (surname === "" | surname.length < 2 | surname.length > 30) {
//         return false;
//     } else {
//         return true;
//     }
// }


// Kiem tra truong Ten
function checkName() {
    var name = document.getElementById("name").value.trim();

    if (name === "" | name.length < 2 | name.length > 30) {
        return false;
    } else {
        return true;
    }
}


// Kiem tra truong email
function checkEmail() {
    var email = document.getElementById("email").value.trim();

    var re = /^\w+@\S+\.\S+[A-Za-z0-9]$/;

    if (email === "" || !re.test(email) | email.split("@").length - 1 > 1 | email.split(".").length - 1 > 2) {
        return false;
    } else {
        return true;
    }
}


// Kiem tra truong mat khau co duoc nhap hay khong
function checkPass() {
    var pass1 = document.getElementById("psw").value.trim();
    var pass2 = document.getElementById("psw-retype").value.trim();
    if (pass1 === "" | pass2 === "" | pass1.length < 6 | pass1.length > 30) {
        return false;
    } else {
        return true;
    }
}

// Kiem tra mat khau co khop hay khong
function checkPass1() {
    var pass1 = document.getElementById("psw").value.trim();
    var pass2 = document.getElementById("psw-retype").value.trim();
    if (pass1 != "" & pass1 != pass2) {
        return false;
    } else {
        return true;
    }

}

// Kiem tra truong nam sinh
function checkNamsinh() {
    var namsinh = document.getElementById("nam-sinh").value;
    if (namsinh === "default") {
        return false;
    } else {
        return true;
    }
}


// Kiem tra truong Thanh pho
function checkThanhpho() {
    var thanhpho = document.getElementById("thanhpho").value;
    if (thanhpho === "default") {
        return false;
    } else {
        return true;
    }
}


// Kiem tra truong Gioi tinh
function checkGioitinh() {
    var nam = document.getElementById("nam").checked;
    var nu = document.getElementById("nu").checked;

    if (nam === false & nu === false) {
        return false;
    } else {
        return true;
    }
}

function checkForm() {

    if (!checkSurname()) {
        alert("Ch??a nh???p H???, vui l??ng nh???p!")
    } else if (!checkName()) {
        alert("Ch??a nh???p T??n, vui l??ng nh???p!")
    } else if (!checkEmail()) {
        alert("Email ch??a nh???p ho???c nh???p ch??a ????ng ?????nh d???ng, vui l??ng ki???m tra!")
    } else if (!checkPass()) {
        alert("M???t kh???u ch??a ???????c nh???p ????ng ?????nh d???ng, vui l??ng ki???m tra l???i!")
    } else if (!checkPass1()) {
        alert("M???t kh???u ch??a kh???p, vui l??ng ki???m tra l???i!")
    } else if (!checkNamsinh()) {
        alert("Vui l??ng ch???n n??m sinh!")
    } else if (!checkThanhpho()) {
        alert("Vui l??ng ch???n th??nh ph???!")
    } else if (!checkGioitinh()) {
        alert("Vui l??ng ch???n Gi???i t??nh");
    } else {
        alert("????ng k?? th??nh c??ng!");
    }
}


