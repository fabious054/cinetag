import styles from './Home.module.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';

const Home = () => {
  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Footer/>
    </>
  );
}	

export default Home;