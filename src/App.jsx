import React from "react";
import { useState, useContext } from "react";

import Header from './components/Header/Header.jsx';
import StepProgress from './components/Register/StepProgress/StepProgress.jsx';
import Step1 from './components/Register/Step1/Step1.jsx';
import Step2 from './components/Register/Step2/Step2.jsx';
import Step3 from './components/Register/Step3/Step3.jsx';
import ProgressControl from './components/Register/ProgressControl/ProgressControl.jsx';
import Cart from './components/Cart/Cart.jsx';
import { CartContext, cartItems } from './components/Context/CartContext.js';
import { CreditCardContext, creditCardInfo } from './components/Context/CreditCardContext';

import styles from './App.module.css';

function App() {
  const [step, setStep] = useState(1);
  const [products, setProducts] = useState(cartItems);
  const [creditCard, setCreditCard] = useState(creditCardInfo);
  const creditCards = useContext(CreditCardContext);

  function handleInputChange(e) {
    setCreditCard({
      ...creditCard,
      [e.target.id]: e.target.value,
    })
  };

  function Total(product) {
    let total = 0
    product.forEach(item => {
      total += item.price * item.quantity
    })
    return total
  }

  function handleSubmit() {
    console.log(creditCard)
    console.log(`The total price is: $${Total(products)}!`)
  }

  function handlePrevClick() {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  function handleNextClick() {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <div className={styles.app} >
      <Header />
      <StepProgress step={step} />
      <CartContext.Provider value={[products, setProducts]} >
        <CreditCardContext.Provider value={{ creditCards }}>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 onChange={handleInputChange} />}

          <ProgressControl step={step} setStep={setStep}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
            onSubmition={handleSubmit}
          />
          <Cart totalPrice={Total(products)} />
        </CreditCardContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
