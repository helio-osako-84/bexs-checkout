import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import style from './style.module.css';

const Select = ({
  label,
  id,
  options,
  errorMessage,
  isInError,
  ...props
}) => (
  <div className={
    ClassNames(
      style.wrapper,
      isInError ? style.isInError : ''
    )
  }>
    <select
      name={id}
      className={style.select}
      placeholder={label}
      required
      defaultValue=""
      {...props}
    >
      <option value="">{label}</option>
      {
        options.map((optionItem, key) => (
          <option key={key} value={optionItem}>{optionItem}</option>
        ))
      }
    </select>
    <label
      htmlFor={id}
      className={style.label}
    >
      {label}
    </label>
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
