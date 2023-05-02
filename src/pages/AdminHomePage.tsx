import React from "react";
import { useHistory } from 'react-router-dom';
import {
  IonButton,
  IonPage,
} from "@ionic/react";
import { HeaderComponent } from "../components";

const AdminHomePage = () => {
  const history = useHistory();
  const handleAddEventClick = () => {
    history.push('/page/Login/AdminHomePage/AddEditEvent');
  };
  const handleEditEventPlant = () => {
    history.push('/page/Login/AdminHomePage/AddEditPlant');
  };

  return (
    <IonPage>
      <HeaderComponent title="Admin Home" />
      <div className="container">
        <header>
          <h1>Welcome to Admin Page</h1>
          <IonButton onClick={handleAddEventClick}>Add Event</IonButton>
          <IonButton onClick={handleEditEventPlant}>Add Plant</IonButton>
        </header>
      </div>
    </IonPage>
  );
};

export default AdminHomePage;
























// import React from "react";
// import { useHistory } from 'react-router-dom';
// import {
//   IonButton,
//   // IonContent,
//   // IonHeader,
//   // IonInput,
//   IonPage,
//   // IonTitle,
//   // IonToolbar,
//   // IonToast,
//   // IonText,
// } from "@ionic/react";
// import { HeaderComponent } from "../components";
// // import './styles.css';

// const AdminHomePage = () => {
//   // const history = useHistory();
//   // const handleClick = () => {
//   //   history.push('/AddEDitEvent');
//   return (
//     <IonPage>
//       <HeaderComponent title="Login" />
//       <div className="container">
//         <header>
//           <h1>Welcome to Admin Page</h1>
//         </header>
//       </div>
//     </IonPage>
//   );
// };

// //   return (
// //     <div>
// //       <IonButton onClick={handleClick}>Add Event</IonButton>
// //     </div>
// //   );
// // }; 

// export default AdminHomePage;
