import PropTypes from 'prop-types';
import style from './style.module.css';

const FormGrid = ({ children }) => (
  <form className={style.FormGrid}>
    {children}
  </form>
);

FormGrid.propTypes = {
  children: PropTypes.node.isRequired
}

FormGrid.Row = ({ children }) => (
  <div className={style.row}>
    {children}
  </div>
);

FormGrid.Row.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormGrid;
