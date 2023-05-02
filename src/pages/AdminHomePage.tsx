import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToast,
  IonText,
} from "@ionic/react";
import { HeaderComponent } from "../components";
// import './styles.css';

const AdminHomePage = () => {
  return (
    <IonPage>
      <HeaderComponent title="Login" />
      <div className="container">
        <header>
          <h1>Welcome to Admin Page</h1>
        </header>
      </div>
    </IonPage>
  );
};

export default AdminHomePage;
