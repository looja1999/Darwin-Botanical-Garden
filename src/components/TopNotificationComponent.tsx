import React from "react";
import styles from "../styles";
import { IonIcon, IonNavLink } from "@ionic/react";
import { closeOutline, closeSharp } from "ionicons/icons";
import { Link } from "react-router-dom";

type TopNotificationProps = {
  onClickProps: () => any;
};

const TopNotificationComponent = (props: TopNotificationProps) => {
  return (
    <div
      className={`w-full h-[80px] text-[12px] md:text-sm font-semibold ${styles.paddingX} bg-primary ${styles.flexCenter} text-white relative`}
    >
      <div className="mt-2">
        {" "}
        We added plant recongition technology to help you know about plants in
        the Garden.{" "}
        <Link
          to="/page/Plant-Recognition"
          className="pb-1 hover:text-dimWhite underline"
        >
          Click Here
        </Link>
      </div>
      <div className="absolute top-2 right-2">
        <IonIcon
          ios={closeOutline}
          md={closeSharp}
          className="w-[16px] h-[16px] object-contain cursor-pointer"
          onClick={() => props.onClickProps()}
        />
      </div>
    </div>
  );
};

export default TopNotificationComponent;
