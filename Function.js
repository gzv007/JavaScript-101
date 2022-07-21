function toCelsius(fahrenheit){
    let celcuis = (fahrenheit-32)/1.8
    return celcuis
}

function sayHello(username){
// ในวงเล็บจะเรียก Parametor
    return username
}
// let n = prompt("ใส่ชื่อของคุณ")
// alert(sayHello(n)) 

function showCelcuis(value){
    alert(toCelsius(value))
}

function showFahrenheit(value){
    alert(value)
}
// ในวงเล็บจะเรียกว่าอาร์กิวเมน

// paramitor เป็นตัวแปรที่เกิดมาพร้อม function จะทำหน้าที่ส่งข้อมูลเข้าไปใน function
// ส่วน Argument จะส่งข้อมูลให้ Paramitor

