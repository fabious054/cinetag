import styles from './Default.module.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container';

const Default = () => {
  return (
    <>
      <Header />
        <Container >
          <Outlet />
        </Container>
      <Footer />
    </>
  );
}	

export default Default;