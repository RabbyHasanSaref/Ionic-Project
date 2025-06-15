import React, { useState } from 'react';
import {
  IonContent,
  IonAvatar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { cameraOutline} from 'ionicons/icons';

const EditProfile: React.FC = () => {
  const [profilePic, setProfilePic] = useState('https://i.ibb.co/FqJZ5w16/user.png');
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
      <IonContent>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, position: 'relative' }}>
          <IonAvatar style={{ width: 120, height: 120 }}>
            <img src={profilePic} alt="Profile" />
          </IonAvatar>

          <label
            htmlFor="fileInput"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 'calc(50% - 60px)',
              backgroundColor: '#3880ff',
              borderRadius: '50%',
              padding: 8,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            <IonIcon icon={cameraOutline} style={{ color: 'white', fontSize: 22 }} />
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        <IonItem>
          <IonLabel position="floating">Full Name</IonLabel>
          <IonInput/>
        </IonItem>

        <IonButton expand="block" style={{ marginTop: 30 }} color="primary">
          Save Changes
        </IonButton>
      </IonContent>
  );
};

export default EditProfile;
