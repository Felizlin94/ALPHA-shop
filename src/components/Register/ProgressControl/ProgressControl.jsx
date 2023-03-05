import styles from './ProgressControl.module.css';

export default function ProgressControl({
  onPrevClick,
  onNextClick,
  step,
  onSubmition
}) {

  return (
    <section className={styles.buttonContainer}>
      {/* 左邊按鈕渲染邏輯 */}
      {step > 1 && (
        <button
          className={styles.leftButton}
          onClick={onPrevClick}
        >← 上一步
        </button>
      )}
      {/* 右邊按鈕渲染邏輯 */}
      {step < 3 && (
        <button className={styles.rightButton} onClick={onNextClick}>
          下一步 →
        </button>
      )}
      {step === 3 && (
        <button
          className={styles.rightButton}
          onClick={onSubmition}>
          確認下單</button>
      )}
    </section>
  )
}