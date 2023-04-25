import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { HeaderComponent } from "../components";
import styles from "../styles";

const Login = () => {
  const [isTouched, setIsTouched] = useState(false);
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
  };

  return (
    <IonPage>
      <HeaderComponent title="Login" />
      <div className="h-full w-full">
        <div
          className={`h-full w-full md:w-[400px] mx-auto ${styles.padding} md:p-0 flex flex-col gap-6 items-center justify-center`}
        >
          <h1 className="font-nunito font-semibold text-xl text-primary">
            Staff Portal
          </h1>
          <form className="w-full flex flex-col gap-4">
            <IonInput
              className={`${isValid && "ion-valid"} ${
                isValid === false && "ion-invalid"
              } ${isTouched && "ion-touched"}`}
              type="email"
              fill="outline"
              label="Email"
              labelPlacement="floating"
              errorText="Invalid email"
              onIonInput={(event) => validate(event)}
              onIonBlur={() => markTouched()}
            ></IonInput>
            <IonInput
              className={`${isPassValid && "ion-valid"} ${
                isPassValid === false && "ion-invalid"
              } ${isPassTouched && "ion-touched"}`}
              label="Password"
              labelPlacement="floating"
              fill="outline"
              placeholder="**********"
              type="password"
              errorText="Invalid password"
              onIonInput={(event) => validatePass(event)}
              onIonBlur={() => passwordMarkTouched()}
            ></IonInput>
            <IonButton>Login</IonButton>
          </form>
        </div>
      </div>
    </IonPage>
  );
};

export default Login;
