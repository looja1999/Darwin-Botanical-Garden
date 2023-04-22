import { IonPage, IonContent, IonButton, IonIcon, IonImg } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components";
import styles from "../styles";
import { cameraOutline, cameraSharp } from "ionicons/icons";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

const PlantRecognition: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  const [image, setImage] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setImage(photos[0]?.webviewPath);
    onPlantRecognitionButtonClick();
  }, [photos[0]?.webviewPath]);

  const onPlantRecognitionButtonClick = async () => {
    const url = photos[0].webviewPath;

    setImage(url);

    const blobToBase64 = (url: any) => {
      return new Promise(async (resolve, _) => {
        // do a request to the blob uri
        const response = await fetch(url);

        // response has a method called .blob() to get the blob file
        const blob = await response.blob();

        // instantiate a file reader
        const fileReader = new FileReader();

        // read the file
        fileReader.readAsDataURL(blob);

        fileReader.onloadend = function () {
          resolve(fileReader.result); // Here is the base64 string
        };
      });
    };

    // now you can get the
    blobToBase64(url).then((base64String) => {
      console.log(base64String); // i.e: data:image/jpeg;base64,/9j/4AAQSkZJ..
    });

    // or with await/async
    const file = await blobToBase64(url);

    const data = {
      api_key: "MXbko2p8005enYkDjDLdtPRr3PsyXZtZMYZnPKjVbXLl2N8ADg",
      images: [file],
      // modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers
      modifiers: ["crops_fast", "similar_images"],
      plant_language: "en",
      // plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details
      plant_details: [
        "common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms",
      ],
    };

    fetch("https://api.plant.id/v2/identify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <IonPage>
      <HeaderComponent title="Plant Recognition" />
      <IonContent fullscreen className="ion-padding">
        <div className={`mt-4 md:mt-8 w-full max-w-[1080px] mx-auto`}>
          <p>
            This new feature helps you to identify plants using your mobile's
            camera.
          </p>

          <img src={image} />

          <IonButton className="mt-4" expand="full" onClick={takePhoto}>
            <IonIcon ios={cameraOutline} md={cameraSharp} className="mr-4" />
            Photo Recognition
          </IonButton>

          {/* <IonButton
            className="mt-4"
            expand="full"
            onClick={onPlantRecognitionButtonClick}
          >
            Plant Recognition
          </IonButton> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PlantRecognition;
