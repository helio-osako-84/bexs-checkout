import PropTypes from 'prop-types';
import style from './style.module.css';
import {
  Header, 
  Footer
} from '../../components';

const Layout = ({ children }) => (
  <div className={style.layout}>
    <Header />
    <div className={style.content}>
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
