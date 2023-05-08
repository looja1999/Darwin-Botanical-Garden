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
  IonTextarea,
} from "@ionic/react";
import { HeaderComponent } from "../components";
import styles from "../styles";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";
import { useHistory } from "react-router";



const AddEditPlant = () => {
 
  const history = useHistory();


    const [newName, setNewName] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newNative, setNewNative] = useState("")


    function handleInputChange(plant: any) {
      const value: string = plant.target.value.toString();
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

    const plantCollectionRef = collection(db, "Plants");

  const createPlant = async () => {
    try {
      await addDoc(plantCollectionRef, {
        Name: newName,
        Description: newDescription,
        Native: newNative,
      });
      console.log("Plant created successfully!");
      // clear form input fields
      setNewName("");
      setNewDescription("");
      setNewNative("");
             
      history.push('./ViewPlant');
      window.location.reload();

    } catch (error) {
      console.error("Error creating plant:", error);
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
            Add Plant
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
            ></IonInput>
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
            <IonButton expand="full" onClick={createPlant}>Submit</IonButton>
            {/* <IonText color="danger" style={{ textAlign: 'center' }}>{tt2}</IonText> */}
          </form>
        </div>
      </div>
    </IonPage>
  );
};

export default AddEditPlant;
