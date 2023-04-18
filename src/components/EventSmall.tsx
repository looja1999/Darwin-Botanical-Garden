import { IonIcon } from "@ionic/react";
import {
  calendarNumberOutline,
  calendarNumberSharp,
  locationOutline,
  locationSharp,
  timeSharp,
} from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";

const EventSmall = () => {
  return (
    <div className="w-full mt-3 bg-dimWhite flex flex-col gap-2 p-3 rounded-md border-2 cursor-pointer hover:border-2 hover:border-primary">
      <h2 className="text-md font-semibold ">Botanical Garden Tour</h2>

      <div className="flex flex-col jusity-start items-start gap-1">
        <div className="flex items-center">
          <IonIcon md={locationSharp} ios={locationOutline} />
          <p className="ml-2">Darwin Botanical Garden</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <IonIcon md={calendarNumberSharp} ios={calendarNumberOutline} />
            <p className="ml-2">May 01</p>
          </div>
          <div className="flex items-center">
            <IonIcon md={timeSharp} ios={timeSharp} />
            <p className="ml-2">2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSmall;
