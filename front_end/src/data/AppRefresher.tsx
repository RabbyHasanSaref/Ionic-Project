import React from 'react';
import { IonRefresher, IonRefresherContent } from '@ionic/react';

interface AppRefresherProps {
  onRefresh: () => void;
}

const AppRefresher: React.FC<AppRefresherProps> = ({ onRefresh }) => {
  const handleRefresh = (event: CustomEvent) => {
    onRefresh();
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
  };

  return (
    <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
      <IonRefresherContent pullingText="Pull to refresh" refreshingSpinner="circles" />
    </IonRefresher>
  );
};

export default AppRefresher;
