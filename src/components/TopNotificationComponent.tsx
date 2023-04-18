import React from "react";
import styles from "../styles";
import { IonIcon, IonNavLink } from "@ionic/react";
import { closeOutline, closeSharp, leafSharp, planetOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

type TopNotificationProps = {
  onClickProps: () => any;
};

const TopNotificationComponent = (props: TopNotificationProps) => {
  return (
    <div
      className={`w-full h-[80px] md:h-[60px] bg-opacity-95 text-[12px] md:text-sm font-semibold ${styles.paddingX} bg-primary ${styles.flexCenter} text-white`}
    >
      <div className="md:max-w-[1080px] relative w-full h-full">
        <div className="h-full w-full flex items-center justify-start md:justify-center">
          <p>
            We added plant recongition technology to help you know about plants in
            the Garden.{" "}
          <Link
            to="/page/Plant-Recognition"
            className="hover:text-dimWhite underline ml-2"
          > 
             Click Here
          </Link></p>
          
        </div>
        <div className="absolute top-1 md:top-3 right-[0]">
          <IonIcon
            ios={closeOutline}
            md={closeSharp}
            className="w-[20px] h-[20px] object-contain cursor-pointer hover:text-dimWhite"
            onClick={() => props.onClickProps()}
          />
        </div>
      </div>
      
    </div>
  );
};

export default TopNotificationComponent;
