import {
  BackButton,
  ContentBox,
  CardFillout,
  Layout
} from '../components';

const Home = () => (
  <Layout>
    <ContentBox>
      <CardFillout>
        <BackButton link="#">Alterar forma de pagamento</BackButton> 
        <CardFillout.Card
          cardBrand=""
          cardNumber=""
          cardHolder=""
          expirationDate=""
        />
      </CardFillout>
      <ContentBox.Content>
        Conteúdo!
      </ContentBox.Content>
    </ContentBox>
  </Layout>
);

export default Home;
