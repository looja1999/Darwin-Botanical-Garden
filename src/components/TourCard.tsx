import { IonButton } from "@ionic/react";
import React from "react";

interface TourCardProps {
  title: string;
  subTitle: string;
  image: string;
}

const urlImage: any = {
  placesOfInterest: "url('/src/assets/places-of-interest.jpeg')",
  treeWalk: "url('/src/assets/tree-walk.jpeg')",
  matboerrmaWalk: "url('/src/assets/matboerrma-walk.jpeg')",
};

const TourCard = (props: TourCardProps) => {
  console.log(props.image);

  return (
    <div className="w-full border-2 border-gray-300 h-[320px] rounded-xl flex flex-col items-center justify-start">
      <div
        className={`h-[65%] border-b border-gray-300 rounded-xl w-full bg-[${
          urlImage[`${props.image}`]
        }] bg-cover`}
      />
      <div className="flex-1 w-full flex flex-col  justify-start p-4 gap-2">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <h2 className="text-sm">{props.subTitle}</h2>
        <IonButton expand="block" color="success" shape="round" fill="outline">
          Learn more
        </IonButton>
      </div>
    </div>
  );
};

export default TourCard;
