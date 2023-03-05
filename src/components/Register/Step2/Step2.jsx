import styles from './Step2.module.css';

export default function Step2() {
  return (
    <div className={styles.container}>
      <p className={styles.topic}>運送方式</p>
      <label className={styles.option}>
        <input type="radio" name="delivery" defaultChecked={true} />
        <span className={styles.checkMark}></span>
        <div>
          <p className={styles.deliveryMode}>標準運送</p>
          <p className={styles.deliveryTime}>約3~7個工作天</p>
        </div>
        <div>
          <p className={styles.deliveryFee}>免費</p>
        </div>
      </label>
      <label className={styles.option}>
        <input type="radio" name="delivery" />
        <span className={styles.checkMark}></span>
        <div>
          <p className={styles.deliveryMode}>DHL貨運</p>
          <p className={styles.deliveryTime}>48小時內送達</p>
        </div>
        <div>
          <p className={styles.deliveryFee}>$500</p>
        </div>
      </label>
    </div>
  )
}