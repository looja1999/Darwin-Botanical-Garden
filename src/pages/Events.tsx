import { IonPage, IonContent } from "@ionic/react";
import { HeaderComponent } from "../components";
import React from "react";
import styles from "../styles";
import { IonDatetime } from "@ionic/react";

const Events: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent title="Events" />
      <IonContent fullscreen>
        <div className={`${styles.marginY} ${styles.paddingX}`}>
          <h1 className={styles.heading1}>What's on this Month</h1>
          <div className="w-full mt-4"></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Events;
