import { useState } from 'react';
function Calculator() {

  const [value, setValue] = useState("");
  const [evalOf, setEvalOf] = useState("");

  const oprt = ['+', '-', '/', '*', '%', '.'];
  const updateValue = v => {
    if (oprt.includes(v) && value === '' || oprt.includes(v) && oprt.includes(value.slice(-1))) {
      return
    }
    setValue(value + v);

  }


  // if (value.length > 8) {
  //   const display = document.querySelector('h1');
  //   const className = 'fontsize';
  //   display.classList.toggle(className);
  // }


  const evaluate = () => {
    setEvalOf(value)
    const val = eval(value);
    setValue(val.toString());
  }

  const vals = evalOf;
  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          {/* value.length === valueLength.length? setEvalOf(''): */}
          <span>{vals}</span>
          <h1>{value || '0'}</h1>
          <hr />
        </div>

        <div className="buttons">

          <button onClick={() => setValue('') || setEvalOf('')} className="danger">C</button>
          <button onClick={() => setValue(value.slice(0, -1))} className="danger">DEL</button>
          <button onClick={() => updateValue('%').toString()} className="operators">%</button>
          <button onClick={() => updateValue('/').toString()} className="operators">/</button>
          <button onClick={() => updateValue('1').toString()}>1</button>
          <button onClick={() => updateValue('2').toString()}>2</button>
          <button onClick={() => updateValue('3').toString()}>3</button>
          <button onClick={() => updateValue('*').toString()} className="operators">X</button>
          <button onClick={() => updateValue('4').toString()}>4</button>
          <button onClick={() => updateValue('5').toString()}>5</button>
          <button onClick={() => updateValue('6').toString()}>6</button>
          <button onClick={() => updateValue('-').toString()} className="operators">-</button>
          <button onClick={() => updateValue('7').toString()}>7</button>
          <button onClick={() => updateValue('8').toString()}>8</button>
          <button onClick={() => updateValue('9').toString()}>9</button>
          <button onClick={() => updateValue('+').toString()} className="operators">+</button>
          <button onClick={() => updateValue('00').toString()}>00</button>
          <button onClick={() => updateValue('0').toString()}>0</button>
          <button onClick={() => updateValue('.').toString()}>.</button>
          <button id="equal" onClick={() => { evaluate() }}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
