import { IonButton, IonContent, IonPage } from "@ionic/react";
import {
  EventSmall,
  HeaderComponent,
  Hero,
  TopNotificationComponent,
} from "../components";
import { useHistory } from "react-router";

// Style sheet
import styles from "../styles";

// Constants
import { infoDarwinBotanicalGarden, Weekdays } from "../constants";


import { Link } from "react-router-dom";

const Home: React.FC = () => {

  return (
    <IonPage>
      <HeaderComponent title="Home" />
      <IonContent fullscreen className="font-nunito">

        <Hero />

        <div className={`${styles.marginY} ${styles.paddingX}`}>
          
          {/* Upcoming events */}
          <div className="mt-12 max-w-[1080px] mx-auto flex flex-col md:flex-row gap-8 md:gap-2 justify-between items-stretch">
            <div
              className={`w-full md:w-[30%] border rounded-md bg-gray-50 py-8 px-4`}
            >
              <div className="w-full flex justify-between items-center">
                <h2 className="text-[18px] font-bold text-primary">Upcoming events</h2>
                <Link
                  to="/page/Events"
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
            <div className="w-full md:w-[65%] border rounded-md bg-gray-50 py-8 px-4">
              <div className="w-full flex justify-between items-center">
                <h2 className="text-[18px] font-bold text-primary">Opening Hours</h2>
              </div>
              
              <div className="w-full mt-8 cursor-auto">
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
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
