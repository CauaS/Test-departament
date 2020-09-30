import React, { useState, useCallback, useContext } from "react";
import "./style.css";

import ScheduleContext from "../../../state/requests/Context";
import * as ScheduleActions from "../../../state/requests/actions";

import MaskedInput from "react-text-mask";

export default function AddItem({ show, date }) {
  const [request, setRequest] = useState("");
  const [reason, setReason] = useState("");
  const [currentDate, setCurrentDate] = useState(date);

  const { schedule, setSchedule } = useContext(ScheduleContext);

  const handleAdd = useCallback(() => {
    let isEqual = false;

    if (request) {
      schedule.map((item, index) => {
        if (item.number === +request) {
          isEqual = true;
          setSchedule(
            ScheduleActions.addSchedule(index, {
              type: "schedule",
              color: "#F7522F",
              date: currentDate,
              number: +request,
              reason
            })
          );
          show(false);
        }
        return null;
      });
      if (isEqual !== true) {
        setSchedule(
          ScheduleActions.addRequestAndSchedule({
            number: +request,
            schedules: [
              {
                type: "schedule",
                color: "#F7522F",
                date: currentDate,
                number: +request,
                reason
              }
            ]
          })
        );
        show(false);
      }
    }
  }, [request, currentDate, setSchedule, show, reason, schedule]);
  const handleClose = useCallback(() => {
    show(false);
  }, [show]);

  return (
    <div className="content-add-item">
      <div className="modal-content">
        <div className="content-info">
          <div>
            <label htmlFor="input-request">
              <strong>Pedido:</strong>
            </label>
            <MaskedInput
              mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
              id="input-request"
              type="numeric"
              value={request}
              onChange={(value) => setRequest(value.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-date">
              <strong>Agendamento:</strong>
            </label>
            <MaskedInput
              mask={[
                /[0-9]/,
                /[0-9]/,
                "/",
                /[0-9]/,
                /[0-9]/,
                "/",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/
              ]}
              id="input-date"
              type="text"
              value={currentDate}
              onChange={(value) => setCurrentDate(value.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-reason">
              <strong>Motivo:</strong>
            </label>
            <textarea
              className="textarea"
              id="input-reason"
              type="text"
              value={reason}
              rows="4"
              onChange={(value) => setReason(value.target.value)}
            />
          </div>
          <div>
            <button className="button-add" type="button" onClick={handleAdd}>
              Adicionar
            </button>
            <button
              className="button-close"
              type="button"
              onClick={handleClose}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
