import { useEffect } from 'react';
import {
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
          <a href="#">Alterar forma de pagamento</a>
          <CreditCardFillout.Card />
        </CreditCardFillout>
        <ContentBox.Content>
          Conteúdo!
        </ContentBox.Content>
      </ContentBox>
    </Layout>
  );
}
