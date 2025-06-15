import React, { useState } from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { chevronDown, chevronUp } from 'ionicons/icons';

const Menu: React.FC = () => {
  const [banglaOpen, setBanglaOpen] = useState(false);

  return (
    <IonContent>
      <IonList style={{ borderRadius: '5px', }}>
        <IonItem button>
          <IonLabel>Latest news</IonLabel>
        </IonItem>
        <IonItem button>
          <IonLabel>politics</IonLabel>
        </IonItem>
        <IonItem button onClick={() => setBanglaOpen(!banglaOpen)}>
          <IonLabel>Bangladesh</IonLabel>
          <IonIcon slot="end" icon={banglaOpen ? chevronUp : chevronDown} />
        </IonItem>
        {banglaOpen && (
          <>
            <IonItem button style={{ paddingLeft: '30px' }}>
              <IonLabel>Capital</IonLabel>
            </IonItem>
            <IonItem button style={{ paddingLeft: '30px' }}>
              <IonLabel>District</IonLabel>
            </IonItem>
          </>
        )}
        <IonItem button>
          <IonLabel>N/A</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default Menu;
