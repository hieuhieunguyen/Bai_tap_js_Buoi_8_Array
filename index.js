var arrAllNumber = [];

// thêm số vào khối hiển thị
document.getElementById('btn').onclick = function() {
    var soNhap = Number(document.getElementById('soNhap').value);
    if(Number.isInteger(soNhap)) {
        arrAllNumber.push(soNhap);
        // clear input
        document.getElementById('soNhap').value = '';
        // hiển thị số vừa thêm ra layout
        document.getElementById('themSo').innerText = arrAllNumber;
    } else {
        alert('Số bạn nhập không hợp lệ');
        // clear input
        document.getElementById('soNhap').value = '';
    };
};

// Bài 1: tính tổng số dương
document.getElementById('btn-tong-so-duong').onclick = function tinhTongSoDuong() {
    var tonSoDuong = 0;
    arrAllNumber.map(function(number) {
        if(number > 0) {
            tonSoDuong += number;
        };
    });
    // hiển thị tổng số dương
    document.getElementById('ket-qua-tong-so-duong').innerText = `Tổng các số dương: ${tonSoDuong}`;
};


// Bài 2: đếm số dương
document.getElementById('btn-dem-so-duong').onclick = function demSoDuong() {
    var count = 0;
    for(var i = 0; i < arrAllNumber.length; i++) {
        if(arrAllNumber[i] > 0) {
            count++;
        };
    };
    // hiển thị có bao nhiêu số dương
    document.getElementById('ket-qua-dem-so-duong').innerText = `Số dương: ${count}`;
};

// Bài 3: tìm số nhỏ nhất trong mảng
document.getElementById('btn-tim-so-nho-nhat').onclick = function timSoNhoNhat() {
    var minNumber = arrAllNumber[0];
    for(var i = 0; i < arrAllNumber.length; i++) {
        if(arrAllNumber[i] < minNumber) {
            minNumber = arrAllNumber[i];
        };
    };
    document.querySelector('.ket-qua-so-nho-nhat').innerText = `Số nhỏ nhất: ${minNumber}`;
};

// Bài 4: tìm só dương nhỏ nhất
document.getElementById('btn-tim-so-duong-nho-nhat').onclick = function timSoDuongNhoNhat() {
    var renderHTML = document.getElementById('ket-qua-so-duong-nho-nhat');
    var minPositiveNumber = null;
    for(var i = 0; i < arrAllNumber.length; i++) {
        var currentNumber = arrAllNumber[i];
        if(currentNumber > 0 && (currentNumber < minPositiveNumber || minPositiveNumber === null)) {
            minPositiveNumber = currentNumber;
        }
    };
    // hiển thị ra layout
    if(minPositiveNumber > 0) {
        renderHTML.innerText = `Số dương nhỏ nhất là: ${minPositiveNumber}`;
    } else {
        renderHTML.innerText = 'Trong mảng không có số dương';
    };
};

// Bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
document.getElementById('btn-tim-so-chan').onclick = function timSoChan() {
    var soChanCuoiCung = -1;
    arrAllNumber.map(function(number) {
        if(number % 2 == 0) {
            soChanCuoiCung = number;
        };
    });
    // hiển thị ra layout
    var renderHTML = document.getElementById('ket-qua-so-chan');
    if(soChanCuoiCung == -1) {
        renderHTML.innerText = 'Không có số chẵn nào trong mảng';
    } else {
        renderHTML.innerText = `Số chẵn cuối cùng: ${soChanCuoiCung}`;
    }
};

// Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
document.getElementById('btn-tim-doi-cho').onclick = function doiCho() {
    var viTri1 = Number(document.getElementById('vi-tri-1').value);
    var viTri2 = Number(document.getElementById('vi-tri-2').value);
    var ketQuaDoiCho = document.getElementById('ket-qua-doi-cho');
    if(viTri1 < 0 || viTri1 >= arrAllNumber.length || viTri2 < 0 || viTri2 >= arrAllNumber.length) {
        ketQuaDoiCho.innerText = 'Các số nhập vào không hợp lệ';
    } else {
        // biến lưu trữ
        var bienLuuTru = arrAllNumber[viTri1];
        // gán giá trị index 2 vào giá trị index 1
        arrAllNumber[viTri1] = arrAllNumber[viTri2];
        // gán giá trị biến lưu trữ vào giá trị index 2
        arrAllNumber[viTri2] = bienLuuTru;
    
        ketQuaDoiCho.innerText = `Mảng sau khi đổi: ${arrAllNumber}`;
    }
   
}

// Bài 7: Sắp xếp mảng theo thứ tự tăng dần
document.getElementById('btn-sap-xep').onclick = function sapXep() {
    var result = arrAllNumber.sort(function(a, b) {
        return a - b;
    });
    document.getElementById('ket-qua-sap-xep').innerText = `Mảng sau khi sắp xếp: ${result}`;
}

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
function kiemTraSoNguyenTo(number) {
    if(number <= 1) {
        return false;
    };

    for(var i = 2; i <= Math.sqrt(number); i++) {
        if(number % i == 0) {
            return false;
        };
    };

    return true;
};

function timSoNguyenToDauTien(arrNumber) {
    for(var i = 0; i < arrNumber.length; i++) {
        if(kiemTraSoNguyenTo(arrNumber[i])) {
            return arrNumber[i];
            break;
        };
    };

    return -1;
};

document.getElementById('btn-tim-so-nguyen-to').onclick = function() {
    var result = timSoNguyenToDauTien(arrAllNumber);
    var renderHTML = document.getElementById('ket-qua-tim-so-nguyen-to');
    if(result == -1) {
        renderHTML.innerText = `${result}`;
    } else {
        renderHTML.innerText = `Số nguyên tố đầu tiên trong mảng: ${result}`;
    };
};

// Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
var arrNumber2 = [];
document.getElementById('btn-them-so').onclick = function() {
    var soNhapThem = Number(document.getElementById('nhap-so-them-vao-mang').value);
    arrNumber2.push(soNhapThem);
    // clear input
    document.getElementById('nhap-so-them-vao-mang').value = '';
    // hiển thị số vừa thêm ra layout
    document.getElementById('ket-qua-them-mang-so').innerText = arrNumber2;   
}


document.getElementById('btn-dem-so-nguyen').onclick = function() {   
    var count = 0;
    arrNumber2.forEach(function(number) {
        if(Number.isInteger(number)) {
            count++;
        };
    });

    // hiển thị ra layout
    document.getElementById('ket-qua-dem-so-nguyen').innerText = `Số nguyên: ${count}`;
};

// Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
document.getElementById('btn-so-sanh').onclick = function() {
    var renderHTML = document.getElementById('ket-qua-so-sanh');
    var demSoDuong = 0;
    var demSoAm = 0;
    for(var i = 0; i < arrAllNumber.length; i++) {
        if(arrAllNumber[i] > 0) {
            demSoDuong++;
        } else if(arrAllNumber[i] < 0) {
            demSoAm++;
        }
    }

    if(demSoDuong > demSoAm) {
        renderHTML.innerText = 'Số dương > Số âm';
    } else if(demSoDuong < demSoAm) {
        renderHTML.innerText = 'Số âm > Số dương';
    } else {
        renderHTML.innerText = 'Số dương = Số âm';
    };
}
