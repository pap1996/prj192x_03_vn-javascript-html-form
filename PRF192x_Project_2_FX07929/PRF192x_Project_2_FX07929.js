
// Kiem tra input co phai la number
function checkNumber() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    if (isNaN(input2) | isNaN(input1) | input1 === "" | input2 === "") {
        alert("Nhập cho đàng hoàng vào :)");
    } else {
        return true;
    }
}

// Kiem tra so chia co phai la zero
function checkzero() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    if (input2 === "0") {
        alert("Số chia phải khác 0 :)");
    } else {
        return true;
    }
}

// Phep cong
function plus() {
    if (checkNumber()) {
        var input1 = Number(document.getElementById("input1").value);
        var input2 = Number(document.getElementById("input2").value);
        // alert(input1);
        document.getElementById("show-result").innerHTML = (input1 + input2).toFixed(4)
    }
}

// Phep tru
function minus() {
    if (checkNumber()) {
        var input1 = Number(document.getElementById("input1").value);
        var input2 = Number(document.getElementById("input2").value);
        // alert(input1);
        document.getElementById("show-result").innerHTML = (input1 - input2).toFixed(4)
    }
}

// Phep nhan
function multiply() {
    if (checkNumber()) {
        var input1 = Number(document.getElementById("input1").value);
        var input2 = Number(document.getElementById("input2").value);
        // alert(input1);
        document.getElementById("show-result").innerHTML = (input1 * input2).toFixed(4)
    }
}


// Phep chia
function divide() {
    if (checkNumber() && checkzero()) {
        var input1 = Number(document.getElementById("input1").value);
        var input2 = Number(document.getElementById("input2").value);
        // alert(input1);
        document.getElementById("show-result").innerHTML = (input1 / input2).toFixed(4)
    }
}


// Luy thua
function power() {
    if (checkNumber()) {
        var input1 = Number(document.getElementById("input1").value);
        var input2 = Number(document.getElementById("input2").value);
        // alert(input1);
        document.getElementById("show-result").innerHTML = Math.pow(input1, input2).toFixed(4)
    }
}
