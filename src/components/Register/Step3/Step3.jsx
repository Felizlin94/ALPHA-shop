import styles from './Step3.module.css';

export default function Step3({ onChange }) {

  return (
    <div className={styles.container}>
      <p className={styles.topic}>付款資訊</p>
      <div className={styles.formArea}>
        <div className={styles.inputBox}>
          <label>持卡人姓名</label>
          <input type="text"
            placeholder="John Doe"
            id="holderName"
            onChange={onChange} ></input>
        </div>
        <div className={styles.inputBox}>
          <label>卡號</label>
          <input type="text"
            placeholder="1111 2222 3333 4444"
            id="cardNumber"
            onChange={onChange}></input>
        </div>
        <div className={styles.inputBox2}>
          <div className={styles.inputSubBox}>
            <label>有效期限</label>
            <input type="text"
              placeholder="MM/YY"
              id="expirationDate"
              onChange={onChange}></input>
          </div>
          <div className={styles.inputSubBox}>
            <label>CVC/CCV</label>
            <input type="text"
              placeholder="123"
              id="ccv"
              onChange={onChange}></input>
          </div>
        </div>
      </div>
    </div>
  );
}