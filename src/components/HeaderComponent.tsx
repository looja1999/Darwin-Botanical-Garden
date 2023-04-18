import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from "@ionic/react";
import Navbar from "./Navbar";
import TopNotificationComponent from "./TopNotificationComponent";
import { useState } from "react";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const [showNotification, setShowNotification] = useState<boolean>(true);


  const showNotificationHandler = () => {
    setShowNotification((prev:any) => !prev);
  };

  return (
    <IonHeader>
      <IonToolbar className="md:hidden">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{props.title}</IonTitle>
      </IonToolbar>

      <IonToolbar className="hidden md:block">
        <Navbar title="Home" />
      </IonToolbar>
      {showNotification && <TopNotificationComponent onClickProps={() => {
              showNotificationHandler();
            }} />}
    </IonHeader>
  );
};

export default Header;
