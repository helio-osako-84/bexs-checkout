import PropTypes from 'prop-types';
import style from './style.module.css';

const BackButton = ({
  children,
  link
}) => (
  <a className={style.backButton} href={link}>
    {children}
  </a>
)

BackButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
}

export default BackButton;
