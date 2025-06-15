import React from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonText, IonIcon } from '@ionic/react';
import { logoFacebook, logoYoutube, logoTwitter } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonContent>
      <h2 style={{ fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem' }}>About</h2>
      <IonList style={{ borderRadius: '5px', }}>
        <IonItem button>
          <IonLabel>Feedback</IonLabel>
        </IonItem>
        <IonItem button>
          <IonLabel>Terms of Use</IonLabel>
        </IonItem>
        <IonItem button>
          <IonLabel>Privacy Policy</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Application Version</IonLabel>
          <IonText slot="end" color="medium">
            1.0.0
          </IonText>
        </IonItem>
      </IonList>

      <div style={{ marginTop: 40 }}>
        <h3 style={{ fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem' }}>Follow Us</h3>
        <IonList style={{ borderRadius: '5px', }}>
          <IonItem button href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <IonIcon icon={logoFacebook} slot="start" color="primary" />
            <IonLabel>Facebook</IonLabel>
          </IonItem>
          <IonItem button href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <IonIcon icon={logoYoutube} slot="start" color="danger" />
            <IonLabel>YouTube</IonLabel>
          </IonItem>
          <IonItem button href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <IonIcon icon={logoTwitter} slot="start" color="primary" />
            <IonLabel>Twitter</IonLabel>
          </IonItem>
        </IonList>
      </div>
    </IonContent>
  );
};

export default About;
