import styles from '../styles/Navbar.module.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <img className={styles.navbar_logo}
            src="http://via.placeholder.com/100x60?text=Logo"
            alt="" />
        </a>
      </Link>
      <div className={styles.navbar_search}>
        <input className={styles.navbar_searchInput}
          type="text" />
        <SearchIcon className={styles.navbar_searchIcon} />
      </div>

      <div className={styles.navbar_nav}>
        <Link href='/login'>
          <div className={styles.navbar_option}>
            <span className={styles.navbar_option_1}>
              Hello Guest
            </span>
            <span className={styles.navbar_option_2}>
              Sign-in
            </span>
          </div>
        </Link>

        <div className={styles.navbar_option}>
          <div className={styles.navbar_option}>
            <span className={styles.navbar_option_1}>
              Returns
          </span>
            <span className={styles.navbar_option_2}>
              & Orders
          </span>
          </div>
        </div>

        <div className={styles.navbar_option}>
          <div className={styles.navbar_option}>
            <span className={styles.navbar_option_1}>
              Your
          </span>
            <span className={styles.navbar_option_2}>
              Account
          </span>
          </div>
        </div>
      </div>
      <Link href="/checkout">
        <div className={styles.navbar_optionBasket}>
          <ShoppingBasketIcon />
          <span className={styles.navbar_option_2, styles.navbar_basketCount}>
            0
          </span>
        </div>
      </Link>

    </div>
  )
}

export default Navbar;