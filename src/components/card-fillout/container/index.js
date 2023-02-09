import PropTypes from 'prop-types';
import CardFilloutPresentation from '../presentation';

// Regex patterns from https://regexpattern.com/credit-card-number 
const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
const mastercardPattern = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

const isEmptyString = value => value === '' ? undefined : value;

const getCardBrand = cardNumber => {
  const onlyNumbers = cardNumber.replace(/\D/g, '')
  let cardBrand = '';

  if (visaPattern.test(onlyNumbers)) {
    cardBrand = 'visa';
  } else if (mastercardPattern.test(onlyNumbers)) {
    cardBrand = 'mastercard';
  }

  return cardBrand;
}

const CardFillout = ({ children }) => (
  <CardFilloutPresentation>
    {children}
  </CardFilloutPresentation>
);

CardFillout.propTypes = {
  children: PropTypes.node.isRequired
}

CardFillout.Card = ({
  cardNumber, 
  cardHolder, 
  expirationDate
}) => {
  const props = {
    cardBrand: getCardBrand(cardNumber),
    cardNumber: isEmptyString(cardNumber),
    cardHolder: isEmptyString(cardHolder),
    expirationDate: isEmptyString(expirationDate),
  }

  return (
    <CardFilloutPresentation.Card {...props} />
  );
}

CardFillout.Card.propTypes = {
  cardNumber: PropTypes.string,
  cardHolder: PropTypes.string,
  expirationDate: PropTypes.string
}

export default CardFillout;
