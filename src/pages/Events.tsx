import { IonPage, IonContent, IonDatetimeButton, IonModal, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import { EventSmall, HeaderComponent } from "../components";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import { IonDatetime } from "@ionic/react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";

interface Event {
  Title: string;
  Description: string;
  Location: string;
  Date: string;
  Time: string;
  id: string;
}

const Events: React.FC = () => {
  const [event, setEvent] = useState<Event[]>([]);
  const eventCollectionRef = collection(db, "Events");
  // const myDate = new Date("2023-05-02T15:22:00Z");

  useEffect(() => {
    const getEvent = async () => {
      const data = await getDocs(eventCollectionRef);
      setEvent(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Event[]);
    };

    getEvent();
  }, []);
  
//Design 
return (
<IonPage>
<HeaderComponent title="Events" />
<IonContent fullscreen>
<div
  className={`max-w-[1080px] h-full ${styles.paddingX} ${styles.paddingY} md:p-0 mt-4 md:mt-10 mx-auto font-nunito`}>
  <h1 className="text-xl md:text-2xl font-bold">Whats on</h1>
  <div className="mt-4 pb-4 md:mt-8 grid grid-rows-1 md:grid-cols-3 gap-4">
  <div className="Events">
      {event.map((Events) => {
        return (
          <div>
            <h1>Title: {Events.Title}</h1>
            <h1>Description: {Events.Description}</h1>
            <h1>Location: {Events.Location}</h1>
            <h1>Date: {Events.Date}</h1>
            <h1>Time: {Events.Time}</h1>
          </div>
        );
      })}
    </div>
  </div>
  </div>
</IonContent>
</IonPage>
);


};
export default Events;
