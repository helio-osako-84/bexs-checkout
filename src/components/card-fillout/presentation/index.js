import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import style from './style.module.css';

const CardFillout = ({ children }) => (
  <div className={style.cardFillout}>
    {children}
  </div>
);

CardFillout.propTypes = {
  children: PropTypes.node.isRequired
}

CardFillout.Card = ({
  cardBrand,
  cardNumber, 
  cardHolder, 
  expirationDate
}) => {
  const cardBrandClassname = ClassNames(
    style.cardBrand,
    cardBrand ? style[cardBrand] : ''
  );

  return (
    <div className={style.cardArea}>
      <div className={style.card}>
        <div className={cardBrandClassname}></div>
        <span className={style.cardNumber}>{cardNumber}</span>
        <div className={style.contentRow}>
          <span className={style.cardHolder}>{cardHolder}</span>
          <span>{expirationDate}</span>
        </div>
      </div>
    </div>
  );
}

CardFillout.Card.propTypes = {
  cardBrand: PropTypes.string,
  cardNumber: PropTypes.string,
  cardHolder: PropTypes.string,
  expirationDate: PropTypes.string
}

CardFillout.Card.defaultProps = {
  cardNumber: "**** **** **** ****",
  cardHolder: "NOME DO TITULAR",
  expirationDate: "00/00"
}

export default CardFillout;
