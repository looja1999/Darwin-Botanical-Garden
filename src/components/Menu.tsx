import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  calendarOutline,
  calendarSharp,
  cameraOutline,
  cameraSharp,
  homeOutline,
  homeSharp,
  leafOutline,
  leafSharp,
  logInOutline,
  logInSharp,
  navigateOutline,
  navigateSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/page/Home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Events",
    url: "/page/Events",
    iosIcon: calendarOutline,
    mdIcon: calendarSharp,
  },
  {
    title: "Tours",
    url: "/page/Tours",
    iosIcon: navigateOutline,
    mdIcon: navigateSharp,
  },
  {
    title: "Plant Recognition",
    url: "/page/Plant-Recognition",
    iosIcon: cameraOutline,
    mdIcon: cameraSharp,
  },
  {
    title: "Staff login",
    url: "/page/login",
    iosIcon: logInOutline,
    mdIcon: logInSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="push" className="md:hidden">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Darwin Botanical Garden</IonListHeader>
          <IonNote>info@darwinbotanicalgarden.com.au</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
