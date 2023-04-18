import { IonButton, IonContent, IonPage } from "@ionic/react";
import {
  EventSmall,
  HeaderComponent,
  TopNotificationComponent,
} from "../components";
import { useHistory } from "react-router";

// Style sheet
import styles from "../styles";

// Constants
import { infoDarwinBotanicalGarden, Weekdays } from "../constants";

// Images
import { DarwinBotanicalGarden } from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [showDetailInfo, setShowDetailInfo] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(true);

  const history = useHistory();

  const showNotificationHandler = () => {
    setShowNotification((prev) => !prev);
  };

  return (
    <IonPage>
      <HeaderComponent title="Home" />
      <IonContent fullscreen className="font-nunito">
        {/* Top notification */}
        {showNotification && (
          <TopNotificationComponent
            onClickProps={() => {
              showNotificationHandler();
            }}
          />
        )}

        {/* Image of botanical garden  */}
        <img
          className="w-full object-contain"
          src={DarwinBotanicalGarden}
          alt="Darwin Botanical Garden"
        />
        <div className={`${styles.marginY} ${styles.paddingX}`}>
          <h1 className="text-[24px] text-left leading-[28px] font-semibold text-primary">
            Welcome to Darwin Botanical Garden
          </h1>

          {/* Darwin Botanical Garden Info */}
          <div className="w-full mt-4 text-justify">
            <p>{infoDarwinBotanicalGarden[0]}</p>

            {showDetailInfo &&
              infoDarwinBotanicalGarden.map((info, index) =>
                index === 0 ? (
                  ""
                ) : (
                  <p key={index} className="mt-4">
                    {info}
                  </p>
                )
              )}

            <IonButton
              expand="full"
              className="mt-4"
              onClick={() => setShowDetailInfo((prev) => !prev)}
            >
              {showDetailInfo ? "Close" : "Show more"}
            </IonButton>
          </div>

          {/* Opening times */}
          <div className="mt-12">
            <h2 className="text-[18px] font-semibold ">Opening Hours</h2>
            <div className="w-full">
              {Weekdays.map((weekday: string, index: number) => (
                <div
                  className={`flex justify-between items-center mt-4  ${
                    index === Weekdays.length - 1
                      ? "border-none"
                      : "border-b border-dimBlue pb-2"
                  }`}
                  key={index}
                >
                  <p>{weekday}</p>
                  <p>7 AM to 7 PM</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming events */}
          <div className="mt-12 flex ">
            <div
              className={`w-full md:w-[30%] border rounded-md bg-gray-100 py-8 px-4`}
            >
              <div className="w-full flex justify-between items-center">
                <h2 className="text-[18px] font-semibold ">Upcoming events</h2>
                <Link
                  to="/page/events"
                  className="hover:text-primary border-b hover:border-b-primary"
                >
                  See all
                </Link>
              </div>
              <div className="w-full mt-4 flex flex-col">
                <EventSmall />
                <EventSmall />
                <EventSmall />
              </div>
            </div>
          </div>
        </div>

        {/* Camera */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
