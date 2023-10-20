import styles from "./Calculator.module.css";

//caculator component
function Calculator() {
  return (
    <>
      <div className={styles.calculator}>
        {/* first heading */}
        <div className={styles.menu}>
          <button>Academic Writing</button>
          <button>Editing and proofreading</button>
          <button>Calculations</button>
        </div>
        {/* second heading */}
        <div className={styles.menu}>
          <button>High School</button>
          <button>Undergraduate</button>
          <button>Bachelor</button>
          <button>Professional</button>
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
            <input type="number" value={1} />
            <div className={styles.quantityType}>
              <button>pages</button> <button>words</button>
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
            <h3>$12</h3>
          </div>
          <div className={styles["calculator-order-btn"]}>
            <button>PROCEED TO ORDER</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
