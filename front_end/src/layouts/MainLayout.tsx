import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IonPage, IonContent } from '@ionic/react';
import AppRefresher from '../data/AppRefresher';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  const handleGlobalRefresh = () => {
    console.log('Refreshing entire app...');
    localStorage.clear();
    window.location.reload();
  };

  return (
    <IonPage>
      <Header />
      <IonContent id="main-content" className="ion-padding">
      <AppRefresher onRefresh={handleGlobalRefresh} />
        {children}
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default MainLayout;
