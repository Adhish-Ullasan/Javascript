class operation {
    constructor (x,y)
    {
        this.val = x;
        this.val2 = y;
    }

    getSum() {

        return this.val + this.val2
    }

    getSub() {

        return this.val - this.val2
    }

    getMul() {

        return this.val * this.val2
    }

    getDiv () {

        return this.val / this.val2
    }

}

const result = new operation(4,5)
const sum = result.getSum()
const sub = result.getSub()
const mul = result.getMul()
const div = result.getDiv()

console.log("\n sum is : ", sum ,"\n difference is :", sub ,"\n product is :", mul ,"\n quotient is :",div)