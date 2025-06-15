import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { trashOutline, timeOutline } from 'ionicons/icons';

const articles = [
  {
    id: 1,
    title: 'Bangladesh wins the series!',
    subtitle: 'Cricket News',
    content: 'Bangladesh secures a historic win against Australia...',
    time: '2 hours ago',
    image: 'https://www.fairobserver.com/wp-content/uploads/2025/05/liberty.jpg',
  }
];

const SaveArticle: React.FC = () => {
  return (
    <IonContent>
      <h2 style={{ fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem' }}>Saved Articles</h2>
      <IonList style={{ borderRadius: '5px', }}>
        {articles.map((article) => (
          <IonItem key={article.id} lines="none" className="ion-margin-bottom">
            <IonCard className="ion-no-margin" style={{ width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />

              <IonCardHeader>
                <IonCardTitle style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{article.title}</IonCardTitle>
                <IonCardSubtitle style={{ color: '#666' }}>{article.subtitle}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent style={{ fontSize: '0.95rem', color: '#444' }}>
                <p>{article.content}</p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                    <IonIcon icon={timeOutline} style={{ marginRight: '6px' }} />
                    <small>{article.time}</small>
                  </div>

                  <IonButton fill="outline" size="small" color="danger">
                    <IonIcon icon={trashOutline} slot="start" />
                    Remove
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default SaveArticle;
