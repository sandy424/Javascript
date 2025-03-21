var num = 0;
function testFnc() {
    num++;
    console.log(num, "<br");
    if(num == 10) return;

    testFnc();
}
testFnc();