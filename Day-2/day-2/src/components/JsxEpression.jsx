const JsxExpression = () =>{

    const name = "Sachalamalasetti";
    const multiply = (a, b) => a * b;
    const simpleClass = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px'
    }
    return (
        <div>
            <h2>Hello {name}</h2>
            <h1>JSX Expressions</h1>
            <p>5 + 5 = {5 + 5}</p>
            <p>Current Date and Time: {new Date().toLocaleString()}</p>
            <p style={simpleClass}>Multiplication of 5 and 10 is: {multiply(5, 10)}</p>
            <p> adding the Stock value : {((170+220+270+305+170)/5) - 170}</p>
        </div>
    )
}
export default JsxExpression;