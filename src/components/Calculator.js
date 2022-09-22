import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */

  /** TODO: what happens when I click a number? */
  const handleNumberClick = () => {};

  /** TODO: what happens when I click an operator? */
  const handleOperatorClick = () => {};

  return (
    <div>
      <Screen value="123" />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operator value="+" onClick={handleOperatorClick} />
          <Operator value="/" onClick={handleOperatorClick} />
          <Operator value="x" onClick={handleOperatorClick} />
          <Operator value="-" onClick={handleOperatorClick} />
          <Operator value="=" onClick={handleOperatorClick} />
          <Operator value="clear" onClick={handleOperatorClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
