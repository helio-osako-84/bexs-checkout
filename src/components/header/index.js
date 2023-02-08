import style from './style.module.css';
import Logo from './logo.svg';

const Header = () => (
  <header className={style.header}>
    <img className={style.logo} src={Logo.src} alt="Bexs" />
  </header>
);

export default Header;
