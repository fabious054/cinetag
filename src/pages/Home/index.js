import styles from './Home.module.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';

import videos from 'json/db.json';

const Home = () => {
  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Title>
        <h1>Welcome to Cinetag</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card key={video.id} {...video}/>
        ))}
      </section>
      <Footer/>
    </>
  );
}	

export default Home;