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
import { useHistory } from "react-router";
// import './styles.css';

const AddEditEvent = () => {


  const history = useHistory();


    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newTime, setNewTime] = useState("")

    function handleInputChange(event: any) {
      const value: string = event.target.value.toString();
      // Update the state variable based on the input element's name
      switch (event.target.name) {
        case "title":
          setNewTitle(value);
          break;
        case "description":
          setNewDescription(value);
          break;
        case "location":
          setNewLocation(value);
          break;
        case "date":
          setNewDate(value);
          break;
        case "time":
          setNewTime(value);
          break;
        default:
          break;
      }
    }
    // const [event, setEvent] = useState<Event[]>([]);
    const eventCollectionRef = collection(db, "Events");

  const createEvent = async () => {
    try {
      await addDoc(eventCollectionRef, {
        Title: newTitle,
        Description: newDescription,
        Location: newLocation,
        Date: newDate,
        Time: newTime,
      });
      console.log("Event created successfully!");
      // clear form input fields
      setNewTitle("");
      setNewDescription("");
      setNewLocation("");
      setNewDate("");
      setNewTime("");
             
      history.push('./ViewEvent');
      window.location.reload();

    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  return (
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
              name="title"
              value={newTitle}
              onIonChange={handleInputChange}
            ></IonInput>
            <IonInput
              label="Description"
              labelPlacement="floating"
              fill="outline"
              placeholder="Description"
              name="description"
              value={newDescription}
              onIonChange={handleInputChange}
            ></IonInput>
            <IonInput
              label="Location"
              labelPlacement="floating"
              fill="outline"
              placeholder="Location"
              name="location"
              value={newLocation}
              onIonChange={handleInputChange}
            ></IonInput>
            <IonInput
              label="Date"
              type="date"
              labelPlacement="floating"
              fill="outline"
              placeholder="date"
              name="date"
              value={newDate}
              onIonChange={handleInputChange}
            ></IonInput>
            <IonInput
              label="Time"
              type="time"
              labelPlacement="floating"
              fill="outline"
              placeholder="time"
              name="time"
              value={newTime}
              onIonChange={handleInputChange}
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

