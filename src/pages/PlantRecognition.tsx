import { IonPage, IonContent, IonButton, IonIcon, IonImg } from "@ionic/react";
import React from "react";
import { HeaderComponent } from "../components";
import styles from "../styles";
import { cameraOutline, cameraSharp } from "ionicons/icons";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import { PLANT_ID_API } from "../constants";

const PlantRecognition: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

  const onPlantRecognitionButtonClick = () => {
    const str = photos[0].webviewPath;

    console.log(typeof(str))

    function createBlobFromData(data:any) {
      if (typeof data === "string" || data instanceof ArrayBuffer || data instanceof Blob) {
        return new Blob([data], { type: "application/octet-stream" });
      } else {
        throw new Error("Invalid data type");
      }
    }

    function convertBlobToBase64(blob:any) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
          const base64String = reader.result ? reader.result.slice(37) : '';
          resolve(base64String);
        };
        reader.readAsDataURL(blob); 
      });
    }
    const blob = createBlobFromData(str)

    const base64 = convertBlobToBase64(blob)
    .then(base64String => console.log(base64String))
    .catch(error => console.error(error));

    fetch('https://plant.id/api/v2', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            'API-Key': 'MXbko2p8005enYkDjDLdtPRr3PsyXZtZMYZnPKjVbXLl2N8ADg'
          },
          body: JSON.stringify({
            images: [base64]
          })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));




    // let blobParts = str ? [str] : []; // Only add the string to the array if it's defined
    // let blob = new Blob(blobParts, { type: 'text/plain' });

    // console.log(blob)

    // let reader = new FileReader();

    // reader.readAsDataURL(blob);

    // reader.onload = function() {
    //   let base64data = reader.result;

    //   fetch('https://plant.id/api/v2', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       },
    //       body: JSON.stringify({
    //         api_key: 'MXbko2p8005enYkDjDLdtPRr3PsyXZtZMYZnPKjVbXLl2N8ADg',
    //         images: [base64data]
    //       })
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));

    // };

    // reader.readAsDataURL(blob);

    // reader.onload = function() {
    //   let base64data = reader.result;
    //   console.log(base64data);
    // };

    // let reader = new FileReader();

    // reader.readAsDataURL(path);

    // reader.onload = function() {
    //   let base64data = reader.result.split(',')[1];
    //   console.log(base64data);
    // };


    // fetch(path)
    //   .then(response => response.blob())
    //   .then(blob => {
    //     // Convert blob to base64 data
    //     const reader = new FileReader();
    //       reader.readAsDataURL(blob);
    //       reader.onload = function() {
    //         let base64data = reader.result.split(',')[1];
    //         console.log(base64data);
    //       };

    //         // const base64data = JSON.stringify([reader.result]);
    //         // console.log(base64data)
            
    //         // fetch(PLANT_ID_API, {
    //         //   method: "POST",
    //         //   body: JSON.stringify({
    //         //     'images':base64data,
    //         //     'key': 'MXbko2p8005enYkDjDLdtPRr3PsyXZtZMYZnPKjVbXLl2N8ADg'
    //         //   })
    //         // }).then(res => res.json()).then(data => console.log(data)).catch(err => console.error(err))
       
    //       };
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }


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
          <IonButton className="mt-4" expand="full" onClick={onPlantRecognitionButtonClick}>
            Plant Recognition
          </IonButton>
          

        </div>
      </IonContent>
    </IonPage>
  );
};

export default PlantRecognition;
