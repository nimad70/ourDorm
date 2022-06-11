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
// import LoginControls from "./components/LoginInputsHandler";
import "./Home.css";

const Login: React.FC = () => {
  const [name, setName] = useState<string>();
  const [surname, setSurname] = useState<string>();
  const [id, setUsername] = useState<number>();
  const [password, setPassword] = useState<number>();
  const [confirmPassword, setConfirmPassword] = useState<number>();

  const nameRef = useRef<HTMLIonInputElement>(null);
  const surnameRef = useRef<HTMLIonInputElement>(null);
  const idRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const confimrPasswordRef = useRef<HTMLIonInputElement>(null);

  const log = () => {
    const enteredName = nameRef.current!.value;
    const enteredSurename = surnameRef.current!.value;
    const enteredID = idRef.current!.value;
    const enteredPassword = passwordRef.current!.value;
    const enteredConfirmPassword = confimrPasswordRef.current!.value;

    console.log(
      enteredName,
      enteredSurename,
      enteredID,
      enteredPassword,
      enteredConfirmPassword
    );
  };

  return (
    <IonPage>
      <DormHeader />
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput ref={nameRef}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Surname</IonLabel>
                <IonInput ref={surnameRef}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">
                  ID (Passport ID, Identity Card ID)
                </IonLabel>
                <IonInput ref={idRef}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput placeholder="1234" type="password" ref={passwordRef}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Confirm password</IonLabel>
                <IonInput placeholder="1234" type="password" ref={confimrPasswordRef}></IonInput>
              </IonItem>

              {/* <LoginControls /> */}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton
                size="large"
                color="secondary"
                expand="block"
                onClick={log}
              >
                log
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton
                size="large"
                color="warning"
                expand="block"
                routerLink="/Home"
              >
                Create Account
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonText color="medium">
                <h5>
                  Already have an account? <Link to="/Login">Log in</Link>
                </h5>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
