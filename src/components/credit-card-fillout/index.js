import PropTypes from 'prop-types';
import style from './style.module.css';

const CreditCardFillout = ({ children }) => (
  <div className={style.creditCardFillout}>
    {children}
  </div>
);

CreditCardFillout.propTypes = {
  children: PropTypes.node.isRequired
}

CreditCardFillout.Card = ({ children }) =>  (
  <div className={style.cardArea}>
    <div className={style.card}>{children}</div>
  </div>
);

CreditCardFillout.Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default CreditCardFillout;
