import styles from './Cart.module.css';
import plus from '../../icons/plus.svg'
import minus from '../../icons/minus.svg'
import { useContext } from "react";
import { CartContext } from '../Context/CartContext.js'

export default function Cart({ totalPrice }) {
  const [products, setProducts] = useContext(CartContext);
  const cart = useContext(CartContext)

  function handleMinusClick(itemID) {
    setProducts(products.map(product => {
      if (product.quantity === 0) {
        return {
          ...product,
          quantity: 0
        };
      } else {
        if (product.id === itemID) {
          return {
            ...product,
            quantity: product.quantity - 1
          };
        } else {
          return product
        }
      }
    }));
  };

  function handlePlusClick(itemID) {
    setProducts(products.map(product => {
      if (product.id === itemID) {
        return {
          ...product,
          quantity: product.quantity + 1
        };
      } else {
        return product
      }
    }))

  };

  const itemList = products.map(item => {
    return (
      <div className={styles.itemContainer} key={item.id} >
        <img className={styles.img} src={item.img} />
        <div className={styles.name}>{item.name}</div>
        <div className={styles.price}>${item.price}</div>
        <div className={styles.quantity}>
          <button
            className={styles.btn}
            onClick={() => { handleMinusClick(item.id) }}              >
            <img src={minus} />
          </button>
          {item.quantity}
          <button
            className={styles.btn}
            onClick={() => { handlePlusClick(item.id) }}>
            <img src={plus} />
          </button>
        </div>
      </div>
    )
  });

  function FeeAndTotalPrice() {
    return (
      <>
        <div className={styles.fee}>
          <div className={styles.infoText}>運費</div>
          <div className={styles.resultText}>免費</div>
        </div>
        <div className={styles.totalAmount}>
          <div className={styles.infoText}>小計</div>
          <div className={styles.resultText}>${totalPrice}</div>
        </div>
      </>
    )
  };

  return (
    <div className={styles.container}>
      <p className={styles.topic}>購物籃</p>
      <CartContext.Provider value={{ cart }} >
        {itemList}
        <FeeAndTotalPrice />
      </CartContext.Provider>
    </div>
  );
}






