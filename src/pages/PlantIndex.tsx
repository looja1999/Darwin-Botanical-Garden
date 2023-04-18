import { IonPage, IonContent } from "@ionic/react";
import React from "react";
import { HeaderComponent } from "../components";

const PlantIndex: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent title="Plant Index" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default PlantIndex;
