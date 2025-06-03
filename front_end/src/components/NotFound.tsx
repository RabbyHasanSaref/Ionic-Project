import { IonContent } from '@ionic/react';

const NotFound: React.FC = () => {
  return (
    <IonContent className="ion-padding">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </IonContent>
  );
};

export default NotFound;
