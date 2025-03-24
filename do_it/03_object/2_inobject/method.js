var tv = new Object();
tv.color = "white";
tv.price = 300000;
// tv 정보에 관한 정보 함수
tv.info = function() {
    document.writeln("tv색상: " + this.color, "<br>");
    document.writeln("tv가격: " + this.price, "<br>");
}
var car = {
    color: "black",
    price: 50000000,
    info: function(){
        document.writeln("car 색상: " + this.color, "<br>");
        document.writeln("car 가격: " + this.price, "<br>");
    }
};
document.writeln("<h1> tv 객체 메소드 호출</h1>");
tv.info();
document.writeln("<h1> car 객체 메소드 호출</h1>");
car.info();