# Equation Solver App

An interactive web-based application that calculates values for `x` in quadratic and cubic equations, factorizes equations, and finds the product of constants in the equations. This app uses JavaScript for functionality, providing a toggle option to select between different actions.

## Features

- **Solve for `x`** in quadratic and cubic equations
- **Factorize** quadratic equations
- **Calculate the product** of constants in quadratic and cubic equations
- User-friendly toggle to choose the desired calculation action
- Real-time display of results after input

## Live Demo

> Check out the live app [here](#) (replace with your actual link if available).

## How to Use

1. **Enter coefficients**:
   - `a`, `b`, and `c` for quadratic equations
   - `a`, `b`, `c`, and `d` for cubic equations
   
2. **Choose an Action**:
   - **Solve for x**: Finds the value of `x` for given coefficients in either quadratic or cubic equations.
   - **Factorize**: Returns a factorized form of quadratic equations (only works for real roots).
   - **Product**: Calculates the product of constants in the equation.

3. **Click "Calculate"** to display the result based on the selected action.

## Example

### Input

For a quadratic equation \( ax^2 + bx + c = 0 \):
- `a = 1`
- `b = -3`
- `c = 2`

1. **Solve for x**:
   - Roots are `x1 = 1` and `x2 = 2`.

2. **Factorize**:
   - Factorized form: `(x - 1)(x - 2)`

3. **Product**:
   - Product of constants: `a * c = 1 * 2 = 2`

### Output
The output will be displayed under the "Result" section of the app.

## Technologies Used

- **HTML** for structure
- **CSS** for styling
- **JavaScript** for calculations and interactivity

## Setup

1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser.

## File Structure

- `index.html` – Contains the HTML structure and form for user inputs
- `style.css` – Basic CSS styling for layout and alignment
- `script.js` – JavaScript for calculations and toggle functionality

## Future Improvements

- Extend the cubic root-solving method with more advanced techniques.
- Enhance the factorization method for cubic equations.
- Add more robust error handling for invalid inputs.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with improvements or fixes.

---

> *Note: This app is a basic educational tool and not intended for complex or large-scale equation solving.* 

**Author**: Khulyso John
