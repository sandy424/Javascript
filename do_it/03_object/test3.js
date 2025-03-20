let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multimenu(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
multimenu(menu);
console.log("호출값: " , menu);