let menu = ["rau xào", "thịt luộc", "gà rán"];

let n = prompt("Người dùng nhập số món ăn muốn lưu:");
n = Number(n); 
let i = 1
do{
    let x = prompt(`Mời người dùng nhập món ăn thứ ${i}`);
    menu.push(x);
    i = i+1;
}
while (i <= n);
console.log("Menu mon an hien tai la:", menu);

let input;
do {
    input = prompt("Moi nguoi dung nhap vao C,R,U,D");
    if (input == 'c') {
        menu.push(prompt("Moi nguoi dung nhap mon an muon them:"));
        console.log("Menu mon an sau khi them la:",menu);
    }
    else if (input == 'r') {
        console.log("Menu mon an sau khi them la:",menu);
    }
    else if (input == 'u') {
        let vitriUpdate = menu.indexOf(prompt("Nguoi dung nhap mon an muon cap nhat:"));
        menu[vitriUpdate] = prompt("Nguoi dung nhap mon an thay the mon an cu:");
        console.log("Menu mon an sau khi update:",menu);
    }
    else if (input == 'd') {
        let vitriDelete = menu.indexOf(prompt("Nguoi dung nhap mon an muon xoa:"));
        menu.splice(vitriDelete, 1);
        console.log("Menu mon an sau khi xoa:",menu);
    }
    else{
        alert("Khong ton tai lua chon => thoat vong lap");
    }
}

while (input == 'c' || input == 'r' || input == 'u' || input == 'd' )