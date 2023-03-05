import styles from './Step1.module.css';

function CountyOption() {
  return (
    <select id="county" placeholder="請選擇縣市">
      <option>請選擇縣市</option>
      <option>基隆市</option>
      <option>台北市</option>
      <option>新北市</option>
      <option>桃園市</option>
      <option>新竹縣</option>
      <option>新竹市</option>
      <option>苗栗市</option>
      <option>苗栗縣</option>
      <option>台中市</option>
      <option>彰化縣</option>
      <option>彰化市</option>
      <option>南投市</option>
      <option>雲林縣</option>
      <option>嘉義縣</option>
      <option>嘉義市</option>
      <option>台南市</option>
      <option>高雄市</option>
      <option>屏東縣</option>
      <option>屏東市</option>
      <option>宜蘭縣</option>
      <option>宜蘭市</option>
      <option>花蓮縣</option>
      <option>花蓮市</option>
      <option>台東市</option>
      <option>台東縣</option>
      <option>澎湖縣</option>
      <option>金門縣</option>
      <option>連江縣</option>
    </select>
  )
};

export default function Step1() {
  return (
    <div className={styles.container}>
      <p className={styles.topic}>寄送地址</p>
      <div className={styles.formArea}>
        {/* 稱謂 */}
        <div className={styles.call}>
          <label>稱謂</label>
          <select id={styles.call}>
            <option>先生</option>
            <option>女士</option>
            <option>不明</option>
          </select>
        </div>
        {/* 姓名 */}
        <div className={styles.name}>
          <label>姓名</label>
          <input type="text" placeholder="請輸入姓名"></input>
        </div>
        {/* 電話 */}
        <div className={styles.phone}>
          <label>電話</label>
          <input type="text" placeholder="請輸入行動電話"></input>
        </div>
        {/* Email */}
        <div className={styles.email}>
          <label>Email</label>
          <input type="text" placeholder="請輸入電子郵件"></input>
        </div>
        {/* 縣市 */}
        <div className={styles.county}>
          <label>縣市</label>
          <CountyOption />
        </div>
        {/* 地址 */}
        <div className={styles.address}>
          <label>地址</label>
          <input type="text" placeholder="請輸入地址"></input>
        </div>
      </div>
    </div>
  );
}