import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/react";
import React from "react";
import { HeaderComponent, TourCard } from "../components";
import styles from "../styles";
import { starSharp } from "ionicons/icons";
import { useHistory } from "react-router";

const Tours: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <HeaderComponent title="Tours" />
      <IonContent fullscreen>
        <div
          className={`max-w-[1080px] h-full ${styles.paddingX} ${styles.paddingY} md:p-0  my-4 md:mt-10 mx-auto font-nunito`}
        >
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            Self-guided tours
          </h1>
          <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
            {/* Cards */}
            <div className="w-full border-2 border-gray-300 h-[320px] md:h-[400px] rounded-xl flex flex-col items-center justify-start ">
              <div
                className={`h-[65%] border-b border-gray-300 rounded-lg w-full bg-center bg-cover bg-[url('/src/assets/places-of-interest.jpeg')]  bg-gray-500  bg-blend-overlay`}
              ></div>
              <div className="flex-1 w-full flex flex-col  justify-start p-4 gap-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-semibold">Places of interest</h1>
                  <h2 className="text-sm flex justify-center items-center ">
                    <IonIcon
                      icon={starSharp}
                      className="mr-1 text-[#E98C00] text-[16px]"
                    />
                    Popular
                  </h2>
                </div>
                <h2 className="text-sm">Discover the garden</h2>
                <IonButton
                  expand="block"
                  shape="round"
                  fill="outline"
                  onClick={() => history.push("/page/Tours/PlacesOfInterest")}
                >
                  Learn more
                </IonButton>
              </div>
            </div>

            <div className="w-full border-2 border-gray-300 h-[320px] md:h-[400px]  rounded-xl flex flex-col items-center justify-start ">
              <div
                className={`h-[65%] border-b border-gray-300 rounded-lg w-full bg-center bg-cover bg-[url('/src/assets/tree-walk.jpeg')] bg-gray-500  bg-blend-overlay`}
              ></div>
              <div className="flex-1 w-full flex flex-col  justify-start p-4 gap-2">
                <h1 className="text-lg font-semibold">Our tree walk</h1>
                <h2 className="text-sm">Every tree has a story to tell</h2>
                <IonButton
                  expand="block"
                  shape="round"
                  fill="outline"
                  onClick={() => history.push("/page/Tours/TreeWalk")}
                >
                  Learn more
                </IonButton>
              </div>
            </div>

            <div className="w-full border-2 border-gray-300 h-[320px] md:h-[400px] rounded-xl flex flex-col items-center justify-start ">
              <div
                className={`h-[65%] border-b border-gray-300 rounded-lg w-full bg-center bg-cover bg-[url('/src/assets/places.jpeg')] bg-gray-500  bg-blend-overlay`}
              />
              <div className="flex-1 w-full flex flex-col  justify-start p-4 gap-2">
                <h1 className="text-lg font-semibold">Matboerrma walk</h1>
                <h2 className="text-sm">Larrakia stories</h2>
                <IonButton
                  expand="block"
                  shape="round"
                  fill="outline"
                  onClick={() => history.push("/page/Tours/MatboerrmaWalk")}
                >
                  Learn more
                </IonButton>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tours;
