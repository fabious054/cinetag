import styles from './Home.module.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';

const Home = () => {
  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Title>
        <h1>Welcome to Cinetag</h1>
      </Title>
      <Card id="1" title="The Shawshank Redemption" image="shawshank_redemption.jpg"/>
      <Footer/>
    </>
  );
}	

export default Home;