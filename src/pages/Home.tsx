import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-text-center'>
          <IonTitle>Our Dorm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        HomeSweteHome
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
