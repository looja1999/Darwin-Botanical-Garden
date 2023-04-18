import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from "@ionic/react";
import Navbar from "./Navbar";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
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
    </IonHeader>
  );
};

export default Header;
