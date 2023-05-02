import {
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { HeaderComponentWithBackButton } from "../components";
import { useLocation } from "react-router";
import { MatboerrmaWalk, PlacesOfInterest, TreeWalk } from "../assets";
import styles from "../styles";
import { leafSharp, sendSharp, walkSharp } from "ionicons/icons";

const Tour = () => {
  const location = useLocation();
  const pageTitle = location.pathname.split("/")[3];
  //   const bgImage = "bg-" + pageTitle;
  //   console.log(bgImage);

  return (
    <IonPage>
      <HeaderComponentWithBackButton title={pageTitle} />
      <IonContent fullscreen>
        <div className={`h-[40%] md:h-[50%] w-full  bg-cover bg-no-repeat`}>
          <img
            src={
              pageTitle === "PlacesOfInterest"
                ? PlacesOfInterest
                : pageTitle === "TreeWalk"
                ? TreeWalk
                : MatboerrmaWalk
            }
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`font-nunito max-w-[1080px] mx-auto mt-6 md:mt-8 md:p-0 ${styles.padding}`}
        >
          <h1 className="text-lg font-semibold">
            George Brown Botanical Gardens Information
          </h1>
          <div className="flex mt-2 md:mt-4 gap-4">
            <p className="flex items-center gap-1.5">
              <IonIcon className="text-[#75C29A]" icon={leafSharp} />
              240 plants
            </p>
            <p className="flex items-center gap-1.5">
              <IonIcon className="text-[#E98C00]" icon={walkSharp} />
              40 mins
            </p>
          </div>

          <div className="mt-4 md:mt-8">
            <h1>Content</h1>
          </div>
        </div>
      </IonContent>

      <IonFooter translucent={true} className="h-[100px]">
        <IonToolbar
          className={`w-full h-full flex items-center justify-center ${styles.paddingX}`}
        >
          <IonButton expand="block">
            Start Tour <IonIcon icon={sendSharp} className="ml-2" />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tour;
