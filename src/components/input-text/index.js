import PropTypes from 'prop-types';
import style from './style.module.css';

const InputText = ({
  label,
  id,
  onInputChange,
  errorMessage,
  isInError,
  ...props
}) => {
  const inputProps = {
    id,
    name: id,
    type: 'text',
    placeholder: label,
    ...props
  };

  if (onInputChange) {
    inputProps.onChange = onInputChange;
  }

  return (
    <div className={isInError ? style.isInError : ''}>
      <label
        htmlFor={id}
        className={style.label}
      >
        {label}
      </label>
      <input 
        className={style.input} 
        {...inputProps}
      />
      <span className={style.errorMessage}>
        {errorMessage}
      </span>
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onInputChange: PropTypes.func,
  errorMessage: PropTypes.string,
  isInError: PropTypes.bool
}

InputText.defaultProps = {
  isInError: false
}

export default InputText;
