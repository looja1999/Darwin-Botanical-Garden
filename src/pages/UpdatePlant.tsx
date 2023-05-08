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
  IonCardContent,
  IonTextarea,
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


const UpdatePlant = () => {


  const history = useHistory();

  const location = useLocation();

  const [newName, setNewName] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newNative, setNewNative] = useState("")


  const db = getFirestore();

  const getData = async () => {
      const locationArray = location.pathname.split("/");
      const dataId = locationArray[locationArray.length - 1]
      const docRef = doc(db, "Plants", dataId);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
          console.log(docSnap.data())

          // Update all the states here
          setNewName(docSnap.data().Name)
          setNewDescription(docSnap.data().Description)
          setNewNative(docSnap.data().Native)
    

      } else {
          console.error("Doc does not exists")
      }
      
  };  

  useEffect(() => {
     getData();
  }, [])


//  Event handlers for all the state 




function handleInputChange(plant: any) {
    const value: string = plant.target.value.toString();
   // console.log(value)
    // Update the state variable based on the input element's name
    switch (plant.target.name) {
      case "name":
        setNewName(value);
        break;
      case "description":
        setNewDescription(value);
        break;
      case "native":
        setNewNative(value);
        break;
      default:
        break;
    }
  }



//   Form submit handler to update the database


const updatePlant = async () => {
  

  
  try {


      const updateddata ={
      Name: newName,
      Description: newDescription,
      Native: newNative,
     }

     const locationArray = location.pathname.split("/");
     const dataId = locationArray[locationArray.length - 1]

     
     await setDoc(doc(db, "Plants", dataId), updateddata);



     console.log('Successfully updated');

     
     history.push('../ViewPlant');
     window.location.reload();

    //  history.goBack();
      
    } catch (error) {
      console.error('Error updating document: ', error);
    }

};


return (
  <IonPage>
    <HeaderComponent title="AddEditPlant" />
    <div className="h-full w-full">
      <div
        className={`h-full w-full mt-[-40px] md:w-[400px] mx-auto ${styles.padding} md:p-0 flex flex-col gap-6 items-center justify-center`}
      >
        <h1 className="font-nunito font-semibold text-xl text-primary">
          Update Plant
        </h1>
        <form className="w-full flex flex-col gap-4">
          <IonInput
            label="Name"
            labelPlacement="floating"
            errorText="Invalid name"
            fill="outline"
            name="name"
            value={newName}
            onIonChange={handleInputChange} 
         />
          <IonTextarea
            label="Description"
            labelPlacement="floating"
            fill="outline"
            placeholder="Description"
            name="description"
            style={{width: '400px', height: '200px', gravity: 'start'}}
            value={newDescription}
            onIonChange={handleInputChange}
          ></IonTextarea>
          <IonInput
            label="Native"
            labelPlacement="floating"
            fill="outline"
            placeholder="Native"
            name="native"
            value={newNative}
            onIonChange={handleInputChange}
          ></IonInput>
          <IonButton expand="full" onClick={updatePlant}>Update</IonButton>  
        </form>
      </div>
    </div>
  </IonPage>
);
};

export default UpdatePlant;
