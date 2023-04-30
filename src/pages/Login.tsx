import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonToast, IonText } from "@ionic/react";
import React, { useState } from "react";
import { HeaderComponent } from "../components";
import styles from "../styles";
import { loginUser } from "../firebaseConfig";
import { useHistory } from 'react-router-dom';


const Login = () => {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [tt2, setText] = useState('');
  const history = useHistory();

  async function login(){
    const res=await loginUser(username,password)
    console.log(res)
    if(res==true){
      setText('');
      history.push('/page/Login/AdminHomePage');
      console.log(`${res ? 'Login Success' : 'Login Failed'}`)
    }else{
         // showpopup()
         setText('Invalid Credentials');
    }

  }



  

  //LOGIN PAGE CALL

 /* const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const [isPassTouched, setPassIsTouched] = useState(false);
  const [isPassValid, setIsPassValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  const validatePass = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsPassValid(undefined);

    if (value === "") return;

    value.length > 7 ? setIsPassValid(true) : setIsPassValid(false);
  };

  const passwordMarkTouched = () => {
    setPassIsTouched(true);
  };*/

  return (


    // <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Login</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent className="ion-padding">
    //       <IonInput type="email" placeholder="Username?" 
    //       onIonChange={(e : any)=>setUsername(e.target.value)}/>
    //       <IonInput type="password" placeholder="Password?"
    //       onIonChange={(e : any)=>setPassword(e.target.value)}/>
    //       <IonButton onClick={login}>Login</IonButton>
    //   </IonContent>
    // </IonPage>


    // DESIGN
   <IonPage>
      <HeaderComponent title="Login" />
      <div className="h-full w-full">
        <div
          className={`h-full w-full mt-[-40px] md:w-[400px] mx-auto ${styles.padding} md:p-0 flex flex-col gap-6 items-center justify-center`}
        >
          <h1 className="font-nunito font-semibold text-xl text-primary">
            Staff Portal
          </h1>
          <form className="w-full flex flex-col gap-4">
            <IonInput
              type="email"
              fill="outline"
              label="Email"
              placeholder="Email"
              labelPlacement="floating"
              errorText="Invalid email"
              onIonChange={(e : any)=>setUsername(e.target.value)}
            ></IonInput>
            <IonInput
              label="Password"
              labelPlacement="floating"
              fill="outline"
              placeholder="**********"
              type="password"
              onIonChange={(e : any)=>setPassword(e.target.value)}
              errorText="Invalid password"
            ></IonInput>
            <IonButton expand="full" onClick={login}>Login</IonButton>
            <IonText color="danger" style={{ textAlign: 'center' }}>{tt2}</IonText>
          </form>
        </div>
      </div>
    </IonPage>


  );
};

export default Login;
