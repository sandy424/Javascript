function testAvg(arrData) {
    var sum = 0;
    for(var i=0; i<arrData.length; i++) {
        sum+=Number(prompt(arrData[i] + " 점수는?", "0"));
    }

    var avg = sum/arrData.length;
    return avg;
}

var arrSubject = ["국어", "수학", "과학", "사회"];
var result = testAvg(arrSubject);

document.writeln("평균 점수는 " + result + "점입니다.");