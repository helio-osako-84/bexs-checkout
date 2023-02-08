import PropTypes from 'prop-types';
import style from './style.module.css';

const ContentBox = ({ children }) => (
  <div className={style.contentBox}>
    {children}
  </div>
);

ContentBox.propTypes = {
  children: PropTypes.node.isRequired
}

ContentBox.Content = ({ children }) =>  (
  <div className={style.contentArea}>{children}</div>
);

ContentBox.Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default ContentBox;
