import React, { useContext } from "react";
import "./style.css";
import RequestItem from "./request/index";

import ScheduleContext from "../../state/requests/Context";

export default function Request() {
  const { schedule } = useContext(ScheduleContext);

  return (
    <>
      <div className="request-area">
        {schedule.map((item, index) => (
          <RequestItem
            key={index}
            request={item.number}
            event={item.schedules.map((event) =>
              event.reason !== undefined ? event.reason : null
            )}
            item={item}
          />
        ))}
      </div>
    </>
  );
}
