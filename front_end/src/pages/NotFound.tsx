import { IonContent } from '@ionic/react';

const NotFound: React.FC = () => {
  return (
    <IonContent className="ion-padding">
      <div style={{ textAlign: 'center', marginTop: '20vh' }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </IonContent>
  );
};

export default NotFound;
