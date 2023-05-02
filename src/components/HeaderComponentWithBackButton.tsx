import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

interface HeaderComponentWithBackButtonProps {
  title: string;
}

const HeaderComponentWithBackButton = (
  props: HeaderComponentWithBackButtonProps
) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/page/Tours"></IonBackButton>
        </IonButtons>
        <IonTitle>{props.title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderComponentWithBackButton;
