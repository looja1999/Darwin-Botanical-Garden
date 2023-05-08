import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonImg,
  IonSpinner,
  IonModal,
  IonLabel,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components";
import styles from "../styles";
import {
  cameraOutline,
  cameraSharp,
  checkmarkCircleOutline,
  closeCircle,
  scaleSharp,
  scanCircleOutline,
  scanCircleSharp,
  scanOutline,
} from "ionicons/icons";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

const PlantRecognition: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  const [image, setImage] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlant, setIsPlant] = useState(false);
  const [plantDetails, setPlantDetails] = useState({
    plantName: "",
    commonNames: [],
    scientificName: "",
    wiki: "",
  });

  console.log(image.length);

  const onPlantRecognitionButtonClick = async () => {
    setIsLoading(true);
    setIsOpen(false);

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
      api_key: "trQWFju1LGKVKhc2WqivZrIZxGx0rGGEqyQgNrxfb6SmqDnryR",
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
      .then(async (data) => {
        await setIsPlant(data.is_plant);

        await setPlantDetails({
          plantName: data.suggestions[0].plant_name,
          commonNames: data.suggestions[0].plant_details.common_names,
          scientificName: data.suggestions[0].plant_details.scientific_name,
          wiki: data.suggestions[0].plant_details.wiki_description.value,
        });

        setIsLoading(false);
        setIsOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
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

          <img
            src={photos[0]?.webviewPath}
            className="mt-4 object-contain h-full w-full"
          />

          <IonButton className="mt-4 " expand="full" onClick={takePhoto}>
            {!photos[0]?.webviewPath && (
              <p className="flex items-center justify-center">
                <IonIcon
                  ios={cameraOutline}
                  md={cameraSharp}
                  className="mr-4 text-xl"
                />
                Take photo
              </p>
            )}
            {photos[0]?.webviewPath && (
              <p className="flex items-center justify-center">
                <IonIcon
                  ios={cameraOutline}
                  md={cameraSharp}
                  className="mr-4 text-xl"
                />
                Take photo again
              </p>
            )}
          </IonButton>

          {photos[0]?.webviewPath && (
            <IonButton
              className="mt-4 "
              expand="full"
              onClick={onPlantRecognitionButtonClick}
              color="tertiary"
            >
              <p className="flex items-center justify-center">
                {!isLoading && (
                  <IonIcon
                    md={scanCircleSharp}
                    ios={scanCircleOutline}
                    className="mr-4 text-xl"
                  />
                )}
                {isLoading && (
                  <IonSpinner name="dots" className="mr-4 text-xl"></IonSpinner>
                )}
                Use plant recognition
              </p>
            </IonButton>
          )}

          <IonModal
            isOpen={isOpen}
            initialBreakpoint={0.5}
            breakpoints={[0, 0.25, 0.5, 0.75]}
            handleBehavior="cycle"
          >
            <IonContent className="ion-padding">
              <div className="ion-margin-top">
                {isPlant && (
                  <div className="flex flex-col items-center justify-center ">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      className="mb-2 text-5xl text-green-600"
                    />

                    <div className="w-full flex flex-col gap-2">
                      <p>Plant Name: {plantDetails.plantName} </p>
                      <p>Common Name: {plantDetails.commonNames} </p>
                      <p>Scientific Name: {plantDetails.scientificName}</p>
                      <p className="w-full text-justify">
                        Wiki: {plantDetails.wiki}
                      </p>
                    </div>
                  </div>
                )}
                {!isPlant && (
                  <div className="flex items-center justify-center ">
                    <p className="text-xl flex flex-col items-center">
                      {/* <IonIcon
                        icon={closeCircle}
                        color="danger "
                        className="mb-2 text-5xl"
                      /> */}
                      The plant could not be recognized.
                    </p>
                  </div>
                )}
              </div>
            </IonContent>
          </IonModal>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PlantRecognition;
