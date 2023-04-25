import { IonPage, IonContent, IonDatetimeButton, IonModal } from "@ionic/react";
import { EventSmall, HeaderComponent } from "../components";
import React from "react";
import styles from "../styles";
import { IonDatetime } from "@ionic/react";

const Events: React.FC = () => (
  <IonPage>
    <HeaderComponent title="Events" />
    <IonContent fullscreen>
      <div
        className={`max-w-[1080px] h-full ${styles.paddingX} ${styles.paddingY} md:p-0 mt-4 md:mt-10 mx-auto font-nunito`}
      >
        <h1 className="text-xl md:text-2xl font-bold">Whats on</h1>
        <div className="mt-4 pb-4 md:mt-8 grid grid-rows-1 md:grid-cols-3 gap-4">
          <EventSmall />
          <EventSmall />
          <EventSmall />
          <EventSmall />
          <EventSmall />
          <EventSmall />
          <EventSmall />
          <EventSmall />
          <EventSmall />
        </div>
      </div>
    </IonContent>
  </IonPage>
);

export default Events;
