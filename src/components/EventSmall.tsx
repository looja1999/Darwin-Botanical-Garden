import { IonIcon } from "@ionic/react";
import {
  calendarNumberOutline,
  calendarNumberSharp,
  locationOutline,
  locationSharp,
  timeSharp,
} from "ionicons/icons";
import React from "react";

const EventSmall = () => {
  return (
    <div className="w-full mt-4 bg-gray-100 flex flex-col gap-4 p-3 rounded-md cursor-pointer">
      <h2 className="text-xl font-semibold text-center ">
        Botanical Garden Tour
      </h2>
      <div className="flex flex-col jusity-start items-start mt-2">
        <div className="flex items-center">
          <IonIcon md={locationSharp} ios={locationOutline} />
          <p className="ml-2">Darwin Botanical Garden</p>
        </div>
        <div className="flex items-center">
          <IonIcon md={calendarNumberSharp} ios={calendarNumberOutline} />
          <p className="ml-2">May 01</p>
        </div>
        <div className="flex items-center">
          <IonIcon md={timeSharp} ios={timeSharp} />
          <p className="ml-2">2:00 PM to 5:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default EventSmall;
