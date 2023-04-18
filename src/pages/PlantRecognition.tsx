import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/react";
import React from "react";
import { HeaderComponent } from "../components";
import styles from "../styles";
import { cameraOutline, cameraSharp } from "ionicons/icons";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

const PlantRecognition: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <HeaderComponent title="Plant Recognition" />
      <IonContent fullscreen>
        <div className={`${styles.marginY} ${styles.paddingX}`}>
          <p>
            This new feature helps you to identify plants using your mobile's
            camera.
          </p>
          <IonButton className="mt-4" expand="full" onClick={takePhoto}>
            <IonIcon ios={cameraOutline} md={cameraSharp} className="mr-4" />
            Open Camera
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PlantRecognition;
