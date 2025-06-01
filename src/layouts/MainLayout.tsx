import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;