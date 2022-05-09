class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }



    add(x, y) {
        this.x = x;
        this.y = y;
        return x + y;
    }

    sub(x, y) {
        this.x = x;
        this.y = y;
        return x - y;
    }

    divide(x, y) {
        this.x = x;
        this.y = y;
        return x / y;
    }

    multiply(x, y) {
        this.x = x;
        this.y = y;
        return x * y;
    }
}

let a = Number(prompt("Type first Number."));
let b = Number(prompt("Type second Number."));

try {
    const calc = new Calculator()
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error("This is not a Number!");
    }
    console.log(calc.add(a, b))
    console.log(calc.sub(a, b))
    console.log(calc.divide(a, b))
    console.log(calc.multiply(a, b))
} catch(err) {
    alert(err);
} finally {
    console.log('Program is over.')
}





