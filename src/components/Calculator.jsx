import { useState, useCallback, useEffect } from "react";
import styles from "./Calculator.module.css";

//caculator component
function Calculator() {
  let [price, setPrice] = useState(1);
  // menu items state
  const [academic, setAcademic] = useState(false);
  const [editing, setEditing] = useState(false);
  const [calculation, setCalculation] = useState(false);
  const [highschool, setHighschool] = useState(false);
  const [undergrad, setUndergrad] = useState(false);
  const [bachelor, setBachelor] = useState(false);
  const [professional, setProfessional] = useState(false);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    let amount = 0;
    // price listings for all combinations of menu
    if (academic && highschool) amount = 12;
    if (academic && undergrad) amount = 15;
    if (academic && bachelor) amount = 21;
    if (academic && professional) amount = 25;
    //menu for editing and combination
    if (editing && highschool) amount = 3;
    if (editing && undergrad) amount = 5;
    if (editing && bachelor) amount = 7;
    if (editing && professional) amount = 13;
    //menu for calculations and combinations
    if (calculation && highschool) amount = 18;
    if (calculation && undergrad) amount = 23;
    if (calculation && bachelor) amount = 32;
    if (calculation && professional) amount = 38;
    // console.log(amount);
    setPrice((prev) => (prev = amount));
  }, [
    //dependency on menu options
    academic,
    editing,
    calculation,
    highschool,
    undergrad,
    bachelor,
    professional,
  ]);

  // handlers toggle to current selected menu option and off other options

  // select Academic menu option and off other options
  function academicHandler() {
    setAcademic((prev) => !prev);
    setEditing(false);
    setCalculation(false);
  }

  // select Editing menu option and off other options
  function editingHandler() {
    setEditing((prev) => !prev);
    setAcademic(false);
    setCalculation(false);
  }

  // select Calculation menu option and off other options
  function calculationHandler() {
    setCalculation((prev) => !prev);
    setAcademic(false);
    setEditing(false);
  }

  // select Highschool menu option and off other options
  function highschoolHandler() {
    setHighschool((prev) => !prev);
    setUndergrad(false);
    setBachelor(false);
    setProfessional(false);
  }

  // select Undergrad menu option and off other options
  function undergradHandler() {
    setUndergrad((prev) => !prev);
    setHighschool(false);
    setBachelor(false);
    setProfessional(false);
  }

  // select Bachelor menu option and off other options
  function bachelorHandler() {
    setBachelor((prev) => !prev);
    setHighschool(false);
    setUndergrad(false);
    setProfessional(false);
  }

  // select professional menu option and toggle off other options
  function professionalHandler() {
    setProfessional((prev) => !prev);
    setHighschool(false);
    setUndergrad(false);
    setBachelor(false);
  }

  //functons computes price on number of pages selected
  function amountCalculatorHandler() {
    // compute new price with current quantity
    let newPrice = quantity * price;
    price = newPrice;
  }

  //function to change qunatity type pages->words / words->pages;
  // function changeQuantityTypeToWords() {
  // }
  return (
    <>
      <div className={styles.calculator}>
        {/* first heading */}
        <div className={styles.menu}>
          <button
            id={styles["menubtn"]}
            onClick={() => {
              // call for academicHander
              academicHandler();
            }}
          >
            Academic Writing
          </button>
          <button
            id={styles["menubtn"]}
            onClick={() => {
              editingHandler();
            }}
          >
            Editing and proofreading
          </button>
          <button
            id={styles["menubtn"]}
            onClick={() => {
              calculationHandler();
            }}
          >
            Calculations
          </button>
        </div>
        {/* second heading */}
        <div className={styles.menu}>
          <button
            id={styles["menubtn"]}
            onClick={() => {
              highschoolHandler();
            }}
          >
            High School
          </button>
          <button
            id={styles["menubtn"]}
            onClick={() => {
              undergradHandler();
            }}
          >
            Undergraduate
          </button>
          <button
            id={styles["menubtn"]}
            onClick={() => {
              bachelorHandler();
            }}
          >
            Bachelor
          </button>
          <button
            id={styles["menubtn"]}
            onClick={() => {
              professionalHandler();
            }}
          >
            Professional
          </button>
        </div>

        <div className={styles.quantityType}>
          <h5>Type of paper</h5>
          <input list="type_of_paper" placeholder="Select..." />
          <datalist id="type_of_paper">
            <option value="Research paper"></option>
            <option value="Research proposal"></option>
            <option value="Speech"></option>
            <option value="Thesis"></option>
            <option value="Thesis proposal"></option>
            <option value="Thesis statement"></option>
          </datalist>
        </div>
        {/* quantity and deadline */}
        <div className={styles.quantityMenu}>
          <div>
            <p>Quantity</p>
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => {
                setQuantity((prev) => (prev = e.target.value));
              }}
            />
            <div className={styles.quantityType}>
              <button
                id={styles["menubtn"]}
                onClick={amountCalculatorHandler()}
              >
                pages
              </button>{" "}
              <button id={styles["menubtn"]}>words</button>
            </div>
          </div>
          <div>
            <p>Deadline</p>
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, -14)}
              min={new Date().toISOString().slice(0, -14)}
            />
          </div>
        </div>
        {/* bottom */}
        <div className={styles["calculator-bottom"]}>
          <div className={styles["calculator-price"]}>
            <span>Approx. Price</span>
            <h3>$ {price}</h3>
          </div>
          <div className={styles["calculator-order-btn"]}>
            <button id={styles.oderbtn}>PROCEED TO ORDER</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
