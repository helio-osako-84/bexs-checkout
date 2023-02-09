import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import style from './style.module.css';

const InputText = ({
  label,
  id,
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
    <input 
      name={id}
      type="text"
      className={style.input} 
      placeholder={label}
      {...props}
    />
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
