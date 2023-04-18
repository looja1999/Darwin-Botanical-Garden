import { IonPage, IonContent } from "@ionic/react";
import React from "react";
import { HeaderComponent } from "../components";

const Tours: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent title="Tours" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Tours;
