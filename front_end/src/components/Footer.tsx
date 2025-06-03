import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonFooter
} from '@ionic/react';
import {
  homeOutline,
  searchOutline,
  notificationsOutline,
  menuOutline
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();

  return (
    <IonFooter>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" onClick={() => history.push('/')}>
          <IonIcon icon={homeOutline} />
        </IonTabButton>

        <IonTabButton tab="search" onClick={() => history.push('/search')}>
          <IonIcon icon={searchOutline} />
        </IonTabButton>

        <IonTabButton tab="notification" onClick={() => history.push('/notification')}>
          <IonIcon icon={notificationsOutline} />
        </IonTabButton>

        <IonTabButton tab="menu" onClick={() => history.push('/menu')}>
          <IonIcon icon={menuOutline} />
        </IonTabButton>
      </IonTabBar>
    </IonFooter>
  );
};

export default Footer;
