import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonIcon,
} from "@ionic/react";
import { bedOutline } from "ionicons/icons";

const DormHeader: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle className="ion-text-center">Our Dorm</IonTitle>

        {/* <IonButtons slot="start">
          <IonMenuButton autoHide={false} />
        </IonButtons>
        <IonButtons slot="primary">
          <IonButton onClick={() => {}}>
            <IonIcon slot="icon-only" icon={bedOutline} />
          </IonButton>
        </IonButtons> */}
        
      </IonToolbar>
    </IonHeader>
  );
};

export default DormHeader;
