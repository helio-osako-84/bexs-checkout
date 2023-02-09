import PropTypes from 'prop-types';
import style from './style.module.css';

const Select = ({
  label,
  id,
  options,
  errorMessage,
  isInError,
  ...props
}) => (
  <div className={isInError ? style.isInError : ''}>
    <label
      htmlFor={id}
      className={style.label}
    >
      {label}
    </label>
    <select
      name={id}
      className={style.select}
      placeholder={label}
      {...props}
    >
      <option value=""> </option>
      {
        options.map((optionItem, key) => (
          <option key={key} value={optionItem}>{optionItem}</option>
        ))
      }
    </select>
    <span className={style.errorMessage}>
      {errorMessage}
    </span>
  </div>
);

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
  errorMessage: PropTypes.string,
  isInError: PropTypes.bool
}

Select.defaultProps = {
  isInError: false
}

export default Select;
