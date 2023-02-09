import PropTypes from 'prop-types';
import style from './style.module.css';

const InputText = ({
  label,
  id,
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
    <input 
      name={id}
      type="text"
      className={style.input} 
      placeholder={label}
      {...props}
    />
    <span className={style.errorMessage}>
      {errorMessage}
    </span>
  </div>
);

InputText.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  errorMessage: PropTypes.string,
  isInError: PropTypes.bool
}

InputText.defaultProps = {
  isInError: false
}

export default InputText;
