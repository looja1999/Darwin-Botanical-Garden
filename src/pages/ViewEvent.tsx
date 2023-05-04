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


interface Event {
    Title: string;
    Description: string;
    Location: string;
    Date: string;
    Time: string;
    id: string;
  }
  
// Delete Event Function
const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "Events", id));
      window.location.reload();
      console.log(`Document with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(error);
    }
  };


// View Event Function
  const ViewEvent: React.FC = () => {

    const history = useHistory();

    const handleUpdate = (id: string,title : string,description:string,location:string,date:string,time:string) => {

        console.log(id)
        console.log(title)

        const data1 = {
            id: id,
            title: title,
            description: description,
            location: location,
            date: date,
            time: time
          };
        
         // console.log(data1)

          
        history.push('./UpdateEvent', { data: data1 });
      }

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
  <IonContent>
      
          {/* Table Headers */}
          <IonRow className="table-row">
            <IonCol className="table-cell"> 
              <IonText>Title</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>Description</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>Location</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>Date</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>Time</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>Edit</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>Delete</IonText>
            </IonCol>
          </IonRow>
          {/* Table Rows */}

          <div className="Events">
        {event.map((Events) => {
          return (
            <div>
                <IonRow className="table-row">
            <IonCol className="table-cell"> 
              <IonText>{Events.Title}</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>{Events.Description}</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>{Events.Location}</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>{Events.Date}</IonText>
            </IonCol>
            <IonCol className="table-cell">
              <IonText>{Events.Time}</IonText>
            </IonCol>
            <IonCol className="table-cell">
              {/* <IonText>Row 1, Column 6</IonText> */}
            <IonButton onClick={() => handleUpdate(Events.id,Events.Title,Events.Description,Events.Location,Events.Date,Events.Time)}>Edit</IonButton>
            </IonCol>
            <IonCol className="table-cell">
              {/* <IonText>Row 1, Column 7</IonText> */}
              <IonButton onClick={() => handleDelete(Events.id)}>Delete</IonButton>
            </IonCol>
          </IonRow>
            </div>
          );
        })}
      </div>

          {/* Add more rows as needed */}
        {/* </IonGrid> */}
      </IonContent>
  {/* <div
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
    </div> */}
  </IonContent>
  </IonPage>
  );
  
  
  };
  export default ViewEvent;