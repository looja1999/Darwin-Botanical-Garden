import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from "@ionic/react";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{props.title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
