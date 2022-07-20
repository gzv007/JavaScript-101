let lotto = Math.floor(Math.random()*1000)
let number = prompt("เลขที่ต้องการซื้อ")

document.getElementById("result").innerHTML = lotto
if(number == lotto){
    document.getElementById("check01").innerHTML = "คุณถูกรางวัล"
}else{
    document.getElementById("check02").innerHTML = "คุณไม่ถูกรางวัล"
}

