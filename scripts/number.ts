 export function sum(a: number, b: number) {
    return a + b;
}
export function minus(a: number, b: number) {
    let c = a - b;
    if (c > 0) {
        console.log(a + "lon hon" + b)
    } else if (c < 0) {
        console.log(a + "nho hon" + b)
    } else {
        console.log(a + "bang" + b)
    } 
    return c;
}
export function multiply(a: number, b: number) {
    return a*b
}
export function divide(a: number, b: number) {
    if (b === 0) {
        console.log("khong the thuc hien phep chia")
    }
    let c = a/b;
    return c
}