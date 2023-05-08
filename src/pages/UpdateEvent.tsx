import React, { FormEvent, useEffect, useState } from "react";

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
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { doc, updateDoc, deleteField, DocumentData, DocumentReference, setDoc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { compassSharp } from "ionicons/icons";



const UpdateEvent = () => {


    const history = useHistory();

    const location = useLocation();

    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newTime, setNewTime] = useState("")


    const db = getFirestore();

    const getData = async () => {
        const locationArray = location.pathname.split("/");
        const dataId = locationArray[locationArray.length - 1]
        const docRef = doc(db, "Events", dataId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log(docSnap.data())

            // Update all the states here
            setNewTitle(docSnap.data().Title)
            setNewDescription(docSnap.data().Description)
            setNewLocation(docSnap.data().Location)
            setNewTime(docSnap.data().Time)
            setNewDate(docSnap.data().Date)

        } else {
            console.error("Doc does not exists")
        }
        
    };  

    useEffect(() => {
       getData();
    }, [])


//  Event handlers for all the state 




function handleInputChange(event: any) {
      const value: string = event.target.value.toString();
     // console.log(value)
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



//   Form submit handler to update the database


const updateEvent = async () => {
    
 
    
    try {


        const updateddata ={
        Title: newTitle,
        Description: newDescription,
        Location: newLocation,
        Date: newDate,
        Time: newTime,
       }

       const locationArray = location.pathname.split("/");
       const dataId = locationArray[locationArray.length - 1]

       
       await setDoc(doc(db, "Events", dataId), updateddata);



       console.log('Successfully updated');

       
       history.push('../ViewEvent');
       window.location.reload();

      //  history.goBack();
        
      } catch (error) {
        console.error('Error updating document: ', error);
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
            Update Event
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
           />
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
            <IonButton expand="full" onClick={updateEvent}>Update</IonButton>  
          </form>
        </div>
      </div>
    </IonPage>
  );
};

export default UpdateEvent;