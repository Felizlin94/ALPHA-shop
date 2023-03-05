import styles from './StepProgress.module.css';

export default function ProgressControl({ step }) {

  return (
    <div className={styles.container}>
      <p className={styles.topic}>結帳</p>
      <div className={styles.stepArea}>

        {/* step1 渲染邏輯 */}
        <div className={styles.aStep}>
          <span className={step > 1 ? styles.stepChecked : styles.stepNumber} >
            {step > 1 ? '✓' : '1'}</span>
          <span className={styles.stepName}>寄送地址</span>
          <hr className={styles.line} />
        </div>

        {/* step2 渲染邏輯 */}
        <div className={styles.aStep}>
          <span className={step < 2 ? styles.stepNumberGrey :
            step < 3 ? styles.stepNumberWhite : styles.stepChecked}>
            {step < 3 ? '2' : '✓'} </span>
          <span className={step > 1 ? styles.stepName : styles.stepNameGrey}>運送方式</span>
          <hr className={step > 1 ? styles.line : styles.lineGrey} />
        </div>

        {/* step3 渲染邏輯 */}
        <div className={styles.aStep}>
          <span className={step < 3 ? styles.stepNumberGrey : styles.stepNumberWhite}>3</span>
          <span className={step < 3 ? styles.stepNameGrey : styles.stepName}>付款資訊</span>
        </div>
      </div>
    </div>
  );
}

