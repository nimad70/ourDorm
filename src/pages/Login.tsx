import React, { Component, useRef, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";

import DormHeader from "../components/DormHeader";
import ExploreContainer from "../components/ExploreContainer";
// import LoginControls from "../components/LoginInputsHandler";
import "./Home.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<number>();
  const [password, setPassword] = useState<number>();

  const usernameRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);

  const loginInfo = () => {
    const enteredUsername = usernameRef.current!.value;
    const enteredPassword = passwordRef.current!.value;

    console.log(enteredUsername, enteredPassword);
  };

  return (
    <React.Fragment>
      <IonPage>
        <DormHeader />
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Username</IonLabel>
                  <IonInput placeholder="ID" ref={usernameRef}></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput placeholder="1234" type="password" ref={passwordRef}></IonInput>
                </IonItem>

                {/* <LoginControls /> */}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonButton
                  size="large"
                  color="primary"
                  expand="block"
                  routerLink="/Home"
                  onClick={loginInfo}
                >
                  log
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-center">
                <IonButton
                  size="large"
                  color="secondary"
                  expand="block"
                  routerLink="/Home"
                >
                  Log in
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-center">
                <IonButton
                  size="large"
                  color="warning"
                  expand="block"
                  routerLink="/Signup"
                >
                  Sign up
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonText color="medium">
                  <h5>Newbie? <Link to="./Signup">Create a new Account!</Link></h5>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Login;
