import { useEffect } from 'react';
import {
  BackButton,
  ContentBox,
  CreditCardFillout,
  Layout
} from '../components';

export default function Home() {
  useEffect(() => {
    // !
  }, []);

  return (
    <Layout>
      <ContentBox>
        <CreditCardFillout>
          <BackButton link="#">Alterar forma de pagamento</BackButton> 
          <CreditCardFillout.Card />
        </CreditCardFillout>
        <ContentBox.Content>
          Conteúdo!
        </ContentBox.Content>
      </ContentBox>
    </Layout>
  );
}
