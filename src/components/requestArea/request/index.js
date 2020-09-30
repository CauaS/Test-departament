import React, { useContext, useCallback } from "react";
import "./style.css";

import ScheduleContext from "../../../state/requests/Context";
import * as ScheduleActions from "../../../state/requests/actions";

export default function Request({ request, event, item }) {
  const { setCurrentRequest } = useContext(ScheduleContext);

  const handleCurrent = useCallback(() => {
    setCurrentRequest(ScheduleActions.current(item));
  }, [item, setCurrentRequest]);

  return (
    <>
      <div className="content" onClick={handleCurrent}>
        <h3 className="text-request">{request}</h3>
        {event.map(
          (item, index) =>
            item !== "" && <span key={index} className="schedule-event" />
        )}
      </div>
    </>
  );
}
