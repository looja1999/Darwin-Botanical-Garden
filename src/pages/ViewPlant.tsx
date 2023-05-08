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
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonSpinner,
} from "@ionic/react";
import { EventSmall, HeaderComponent } from "../components";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import { IonDatetime } from "@ionic/react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";
// import '../style.css';
import '../CustomUI.css';
// import 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';



interface Plant {
  Name: string;
  Description: string;
  Native: string;
  id: string;
}


// Delete Event Function
const handleDelete = async (id: string) => {
  try {
    await deleteDoc(doc(db, "Plants", id));
    window.location.reload();
    console.log(`Document with ID ${id} deleted successfully`);
  } catch (error) {
    console.error(error);
  }
};

// View Event Function
const ViewPlant: React.FC = () => {

  const history = useHistory();

  const [plant, setPlant] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(false); 


  const plantCollectionRef = collection(db, "Plants");
  // const myDate = new Date("2023-05-02T15:22:00Z");

  useEffect(() => {
    const getPlant = async () => {
      setIsLoading(true);
      const data = await getDocs(plantCollectionRef);
      setPlant(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Plant[]);
      setIsLoading(false);
    };

    getPlant();
  }, []);
  
//Design 
return (
<IonPage>
<HeaderComponent title="Plants" />
<IonContent fullscreen>
      <div className="w-full md:w-[1080px] mt-4 md:mt-8 mx-auto p-4 md:p-0">
          <div className="overflow-x-scroll md:overflow-x-hidden w-full">
              <table className="w-full ">
                  <tr>
                      <th className="border p-4">Name</th>
                      <th className="border p-4">Description</th>
                      <th className="border p-4">Native</th>
                      <th className="border p-4">Edit</th>
                  </tr>
                  { !isLoading && 
                      plant.map((Plant) => {
                      return (
                          <tr>
                              <td className="border p-4">{Plant.Name}</td>
                              <td className="border p-4">{Plant.Description}</td>
                              <td className="border p-4">{Plant.Native}</td>
                              <td className="border p-4">
                              <IonButton onClick={() => history.push(`/page/Login/AdminHomePage/UpdatePlant/${Plant.id}`)}>Edit</IonButton>
                              <IonButton onClick={() => handleDelete(Plant.id)}>Delete</IonButton></td>
                          </tr>
                      )
                  })}
              </table>
              {isLoading && <div className="w-[100%] flex items-center justify-center p-10">
                <IonSpinner name="circular"></IonSpinner>
              </div>}

          </div>
          
      </div>
     
</IonContent>
</IonPage>
);


};
export default ViewPlant;
