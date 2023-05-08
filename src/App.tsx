import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { Menu } from "./components";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";


import "./CustomUI.css";

// Pages import
import {
  Home,
  Events,
  Tours,
  PlantIndex,
  PlantRecognition,
  Login,
  AdminHomePage,
  Tour,
  AddEditEvent,
  AddEditPlant,
  ViewEvent,
  ViewPlant,
  UpdateEvent,
  UpdatePlant,
} from "./pages";
import Plants from "./pages/Plants";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/Home" exact={true}>
              <Home />
            </Route>
            <Route path="/page/Tours" exact={true}>
              <Tours />
            </Route>
            <Route path="/page/Events" exact={true}>
              <Events />
            </Route>
            <Route path="/page/Plants" exact={true}>
              <Plants />
            </Route>
            <Route path="/page/Plant-Index" exact={true}>
              <PlantIndex />
            </Route>
            <Route path="/page/Plant-Recognition" exact={true}>
              <PlantRecognition />
            </Route>
            <Route path="/page/Tours/:tour" exact={true}>
              <Tour />
            </Route>
            <Route path="/page/Login" exact={true}>
              <Login />
            </Route>
            <Route path="/" exact={true}>
              <Redirect to="/page/Home" />
            </Route>
            <Route path="/page/Login/AdminHomePage" exact={true}>
              <AdminHomePage />
            </Route>
            <Route path="/page/Login/AdminHomePage/AddEditEvent" exact={true}>
              <AddEditEvent/>
            </Route>
            <Route path="/page/Login/AdminHomePage/AddEditPlant" exact={true}>
              <AddEditPlant />
              </Route>
            <Route path="/page/Login/AdminHomePage/ViewEvent" exact={true}>
              <ViewEvent />
            </Route>
            <Route path="/page/Login/AdminHomePage/ViewPlant" exact={true}>
              <ViewPlant />
            </Route>
            <Route path="/page/Login/AdminHomePage/UpdateEvent/:id" exact={true}>
              <UpdateEvent />
            </Route>
            <Route path="/page/Login/AdminHomePage/UpdatePlant/:id" exact={true}>
              <UpdatePlant />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
