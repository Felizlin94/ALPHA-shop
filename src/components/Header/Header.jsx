import styles from './Header.module.css';

// SVG檔案
import logo from '../../icons/alphaLogo.svg'
import search from '../../icons/search.svg'
import cart from '../../icons/cart.svg'
import moon from '../../icons/moon.svg'


export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.navText}>
        <li className={styles.text}>
          <a href="#">
            男款
          </a></li>
        <li className={styles.text}>
          <a href="#">
            女款
          </a></li>
        <li className={styles.text}>
          <a href="#">
            最新消息
          </a></li>
        <li className={styles.text}>
          <a href="#">
            客製商品
          </a></li>
        <li className={styles.text}>
          <a href="#">
            聯絡我們
          </a></li>
      </ul>

      <a className={styles.brand} href="#">
        <img src={logo} />
      </a>

      <ul className={styles.navIcon}>
        <li className={styles.icons}>
          <img src={search} alt="search" />
        </li>
        <li className={styles.icons}>
          <img src={cart} alt="cart" />
        </li>
        <li className={styles.icons}>
          <img src={moon} alt="moon" />
        </li>
      </ul>
    </header>
  )
}

