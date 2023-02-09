import { useState  } from 'react';
import {
  BackButton,
  ContentBox,
  CardFillout,
  FormGrid,
  InputText,
  Layout,
  Select,
  SubmitButton
} from '../components';

const Home = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [installments, setInstallments] = useState('');

  const [errorStatus, setErrorStatus] = useState({
    cardNumber: false,
    cardHolder: false,
    expirationDate: false,
    cvvNumber: false,
    installments: false
  });

  const updateCardNumber = ({ target }) => {
    const { value } = target;
    const masked = value
      .replace(/\D/g, '')
      .replace(/^(\d{4})(\d+)/, '$1 $2')
      .replace(/^([\d ]{9})(\d+)/, '$1 $2')
      .replace(/^([\d ]{14})(\d+)/, '$1 $2');
    target.value = masked;
    setCardNumber(masked);
  };

  const updateCardHolder = ({ target }) => {
    const { value } = target;
    const masked = value
      .replace(/[^a-záàâãéèêíïóôõöúçñ ]*/gi, '');
    target.value = masked;
    setCardHolder(masked);
  };

  const updateExpirationDate = ({ target }) => {
    const { value } = target;
    const masked = value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d+)/g, '$1/$2');
    target.value = masked;
    setExpirationDate(masked);
  };

  const updateCvvNumber = ({ target }) => {
    const { value } = target;
    const masked = value
      .replace(/\D/g, '');
    target.value = masked;
    setCvvNumber(masked);
  };

  const updateInstallments = ({ target }) => {
    const { value } = target;
    setInstallments(value);
  };

  const validateForm = (e) => {
    e.preventDefault();

    setErrorStatus({
      cardNumber: cardNumber.length < 19,
      cardHolder: cardHolder === '',
      expirationDate: expirationDate === '' || expirationDate.length < 5,
      cvvNumber: cvvNumber === '' || cvvNumber.length < 3,
      installments: installments === ''
    })
  };

  const installmentOptions = [
    '1x R$ 1.000,00 sem juros',
    '2x R$ 500,00 sem juros',
    '3x R$ 333,33 sem juros',
    '4x R$ 250,00 sem juros'
  ];

  return (
    <Layout>
      <ContentBox>
        <CardFillout>
          <BackButton link="#">Alterar forma de pagamento</BackButton> 
          <CardFillout.Card
            cardBrand=""
            cardNumber={cardNumber}
            cardHolder={cardHolder}
            expirationDate={expirationDate}
          />
        </CardFillout>
        <ContentBox.Content>
          <FormGrid>
            <FormGrid.Row>
              <InputText 
                label="Número do cartão"
                id="cardnumber" 
                maxLength={19}
                onChange={updateCardNumber}
                errorMessage="Número de cartão inválido"
                isInError={errorStatus.cardNumber}
              />
            </FormGrid.Row>
            <FormGrid.Row>
              <InputText 
                label="Nome (igual ao cartão)"
                id="cardholder"
                onChange={updateCardHolder}
                errorMessage="Insira seu nome completo"
                isInError={errorStatus.cardHolder}
              />
            </FormGrid.Row>
            <FormGrid.Row>
              <InputText 
                label="Validade"
                id="expirationdate" 
                maxLength={5}
                onChange={updateExpirationDate}
                errorMessage="Data inválida"
                isInError={errorStatus.expirationDate}
              />
              <InputText 
                label="CVV"
                id="cvvnumber" 
                maxLength={3}
                onChange={updateCvvNumber}
                errorMessage="Código inválido"
                isInError={errorStatus.cvvNumber}
              />
            </FormGrid.Row>
            <FormGrid.Row>
              <Select 
                label="Número de parcelas"
                id="installments"
                options={installmentOptions}
                onChange={updateInstallments}
                errorMessage="Insira o número de parcelas"
                isInError={errorStatus.installments}
              />
            </FormGrid.Row>
            <FormGrid.Actions>
              <SubmitButton 
                text="Continuar"
                onClick={validateForm}
              />
            </FormGrid.Actions>
          </FormGrid>
        </ContentBox.Content>
      </ContentBox>
    </Layout>
  );
}

export default Home;
