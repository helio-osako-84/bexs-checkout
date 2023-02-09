import PropTypes from 'prop-types';
import style from './style.module.css';

const SubmitButton = ({
  text,
  ...props
}) => (
  <button className={style.button} {...props}>
    {text}
  </button>
);

SubmitButton.propTypes = {
  text: PropTypes.node.isRequired
}

export default SubmitButton;
