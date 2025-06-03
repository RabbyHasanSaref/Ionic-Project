import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IonPage, IonContent } from '@ionic/react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <IonPage>
      <Header />
      <IonContent id="main-content" className="ion-padding">
        {children}
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default MainLayout;
