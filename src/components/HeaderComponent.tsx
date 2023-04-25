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
import { useLocation } from "react-router";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const location = useLocation();

  const showNotificationHandler = () => {
    setShowNotification((prev: any) => !prev);
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
      {showNotification && location.pathname === "/page/Home" && (
        <TopNotificationComponent
          onClickProps={() => {
            showNotificationHandler();
          }}
        />
      )}
    </IonHeader>
  );
};

export default Header;
