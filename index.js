
function calculate() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const d = parseFloat(document.getElementById('d').value);
    const action = document.getElementById('action').value;
    let result = '';

    if (action === "solve") {
        if (d === 0) {
            result = solveQuadratic(a, b, c);
        } else {
            result = solveCubic(a, b, c, d);
        }
    } else if (action === "factorize") {
        if (d === 0) {
            result = factorizeQuadratic(a, b, c);
        } else {
            result = "Factorization for cubic equations is complex!";
        }
    } else if (action === "product") {
        result = findProduct(a, b, c, d);
    }

    document.getElementById('result').innerText = result;
}

function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Roots are real and different: x1 = ${root1}, x2 = ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return `Roots are real and same: x = ${root}`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        return `Roots are complex: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
    }
}

function solveCubic(a, b, c, d) {
    // Cubic solving is complex; we'll use a basic real root approximation here
    return "Cubic root-solving requires advanced techniques not covered in basic JavaScript.";
}

function factorizeQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return "Cannot factorize as roots are complex.";
    }
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `Factorized form: (x - ${root1})(x - ${root2})`;
}

function findProduct(a, b, c, d) {
    if (d === 0) {
        return `Product of quadratic equation constants: ${a * c}`;
    } else {
        return `Product of cubic equation constants: ${a * d}`;
    }
}
