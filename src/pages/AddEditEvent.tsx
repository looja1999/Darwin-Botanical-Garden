import React, { FormEvent, useState } from "react";

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
import styles from "../styles";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";
// import './styles.css';

const AddEditEvent = () => {

    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newTime, setNewTime] = useState("")

    // const [event, setEvent] = useState<Event[]>([]);
    const eventCollectionRef = collection(db, "Events");


    const createEvent = async () => {
        await addDoc(eventCollectionRef, {Title: newTitle, Description: newDescription, Location: newLocation, Date: newDate, Time: newTime});
    };
    
  return (
    // <IonPage>

    // <IonInput placeholder="Title" onChange={(event) => {
    // setNewTitle((event.target as HTMLInputElement).value);}}></IonInput>
    // <IonButton onClick={createEvent}>Submit</IonButton>

    // </IonPage>

    <IonPage>
      <HeaderComponent title="AddEditEvent" />
      <div className="h-full w-full">
        <div
          className={`h-full w-full mt-[-40px] md:w-[400px] mx-auto ${styles.padding} md:p-0 flex flex-col gap-6 items-center justify-center`}
        >
          <h1 className="font-nunito font-semibold text-xl text-primary">
            Add Event
          </h1>
          <form className="w-full flex flex-col gap-4">
          <IonInput
            label="Title"
            labelPlacement="floating"
            errorText="Invalid title"
            fill="outline"
            onChange={(event) => {
                setNewTitle((event.target as HTMLInputElement).value);
              }}
            ></IonInput>
            <IonInput
              label="Description"
              labelPlacement="floating"
              fill="outline"
              placeholder="Description"
              onChange={(event) => {
                setNewDescription((event.target as HTMLInputElement).value);
              }}
            ></IonInput>
            <IonInput
              label="Location"
              labelPlacement="floating"
              fill="outline"
              placeholder="Location"
              onChange={(event) => {
                setNewLocation((event.target as HTMLInputElement).value);
              }}
            ></IonInput>
            <IonInput
              label="Date"
            //   type="date"
              labelPlacement="floating"
              fill="outline"
              placeholder="date"
              onChange={(event) => {
                setNewDate((event.target as HTMLInputElement).value);
              }}
            ></IonInput>
            <IonInput
              label="Time"
              type="time"
              labelPlacement="floating"
              fill="outline"
              placeholder="Time"
              onChange={(event) => {
                setNewTime((event.target as HTMLInputElement).value);
              }}
            ></IonInput>
            <IonButton expand="full" onClick={createEvent}>Submit</IonButton>
            {/* <IonText color="danger" style={{ textAlign: 'center' }}>{tt2}</IonText> */}
          </form>
        </div>
      </div>
    </IonPage>
  );
};

export default AddEditEvent;
