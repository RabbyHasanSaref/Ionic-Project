import React, { useState } from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio,
  IonItemDivider,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  useIonToast
} from '@ionic/react';
import { moon, sunny } from 'ionicons/icons';

const Setting: React.FC = () => {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  const [present] = useIonToast();

  const toggleTheme = (value: string) => {
    setTheme(value);
    document.body.classList.toggle('dark', value === 'dark');
    present({
      message: `Theme set to ${value}`,
      duration: 1500,
      position: 'bottom'
    });
  };

  return (
    <IonContent>
      <h2 style={{ fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem' }}>Settings</h2>

      <IonList style={{ borderRadius: '5px', }}>
        <IonItem>
          <IonLabel>Push Notifications</IonLabel>
          <IonToggle
            checked={pushEnabled}
            onIonChange={(e) => setPushEnabled(e.detail.checked)}
          />
        </IonItem>

        <IonItemDivider>Font Size</IonItemDivider>
        <IonRadioGroup value={fontSize} onIonChange={(e) => setFontSize(e.detail.value)}>
          <IonItem>
            <IonLabel>Small</IonLabel>
            <IonRadio slot="end" value="small" />
          </IonItem>
          <IonItem>
            <IonLabel>Medium</IonLabel>
            <IonRadio slot="end" value="medium" />
          </IonItem>
          <IonItem>
            <IonLabel>Large</IonLabel>
            <IonRadio slot="end" value="large" />
          </IonItem>
        </IonRadioGroup>

        <IonItemDivider>Language</IonItemDivider>
        <IonItem>
          <IonLabel>Choose Language</IonLabel>
          <IonSelect
            value={language}
            onIonChange={(e) => setLanguage(e.detail.value)}
          >
            <IonSelectOption value="en">English</IonSelectOption>
            <IonSelectOption value="bn">Bengali</IonSelectOption>
            <IonSelectOption value="hi">Hindi</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItemDivider>Theme</IonItemDivider>
        <IonSegment value={theme} onIonChange={(e) => toggleTheme(e.detail.value)}>
          <IonSegmentButton value="light">
            <IonIcon icon={sunny} />
          </IonSegmentButton>
          <IonSegmentButton value="dark">
            <IonIcon icon={moon} />
          </IonSegmentButton>
        </IonSegment>
      </IonList>
    </IonContent>
  );
};

export default Setting;
