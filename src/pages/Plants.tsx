import { IonPage, IonContent, IonDatetimeButton, IonModal, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import { EventSmall, HeaderComponent } from "../components";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import { IonDatetime } from "@ionic/react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";

interface Plant {
  Name: string;
  Description: string;
  Native: string;
  id: string;
}

const Plants: React.FC = () => {
  const [plant, setPlant] = useState<Plant[]>([]);
  const plantCollectionRef = collection(db, "Plants");
  // const myDate = new Date("2023-05-02T15:22:00Z");

  useEffect(() => {
    const getPlant = async () => {
      const data = await getDocs(plantCollectionRef);
      setPlant(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Plant[]);
    };

    getPlant();
  }, []);
  
//Design 
return (
<IonPage>
<HeaderComponent title="Plants" />
<IonContent fullscreen>
<div
  className={`max-w-[1080px] h-full ${styles.paddingX} ${styles.paddingY} md:p-0 mt-4 md:mt-10 mx-auto font-nunito`}>
  <h1 className="text-xl md:text-2xl font-bold">Plants Information</h1>
  <div className="mt-4 pb-4 md:mt-8 grid grid-rows-1 md:grid-cols-3 gap-4">
  <div className="Plants">
      {plant.map((Plants) => {
        return (
          <div>
            <h1>Name: {Plants.Name}</h1>
            <h1>Description: {Plants.Description}</h1>
            <h1>Native: {Plants.Native}</h1>
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
export default Plants;
