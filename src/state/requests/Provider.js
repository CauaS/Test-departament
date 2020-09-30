import React, { useReducer } from "react";

import ScheduleContext from "./Context";
import ScheduleReducer from "./reducer";

export default function Provider({ children }) {
  let [schedule, setSchedule] = useReducer(ScheduleReducer, [
    {
      number: 35489,
      schedules: [
        {
          type: "início",
          color: "#00BC13",
          date: "19/07/2020",
          number: 35489,
          reason: ""
        }
      ],
      description: "Descrição do pedido nro 35489",
      techDetail: "",
      typeRequest: "PROJETO"
    },
    {
      number: 35499,
      schedules: [
        {
          type: "início",
          color: "#00BC13",
          date: "21/07/2020",
          number: 35499,
          reason: ""
        }
      ],
      description: "Descrição do pedido nro 35491",
      techDetail: "Detalhe Técnico do pedido 35491",
      typeRequest: "PROJETO"
    },
    {
      number: 35493,
      schedules: [
        {
          type: "início",
          color: "#00BC13",
          date: "23/07/2020",
          number: 35493,
          reason: ""
        }
      ],
      description: "Descrição do pedido nro 35493",
      techDetail: "Detalhe Técnico do pedido 35493",
      typeRequest: "PROJETO"
    },
    {
      number: 35476,
      schedules: [],
      description: "Descrição do pedido nro 35476",
      techDetail: "Detalhe Técnico do pedido 35476",
      typeRequest: "PROJETO"
    },
    {
      number: 35477,
      schedules: [],
      description: "Descrição do pedido nro 35477",
      techDetail: "Detalhe Técnico do pedido 35477",
      typeRequest: "PROJETO"
    },
    {
      number: 35478,
      schedules: [],
      description: "Descrição do pedido nro 35478",
      techDetail: "Detalhe Técnico do pedido 35478",
      typeRequest: "PROJETO"
    },
    {
      number: 35410,
      schedules: [],
      description: "Descrição do pedido nro 35410",
      techDetail: "Detalhe Técnico do pedido 35410",
      typeRequest: "PROJETO"
    },
    {
      number: 35479,
      schedules: [],
      description: "Descrição do pedido nro 35479",
      techDetail: "Detalhe Técnico do pedido 35479",
      typeRequest: "PROJETO"
    },
    {
      number: 35480,
      schedules: [],
      description: "Descrição do pedido nro 35480",
      techDetail: "Detalhe Técnico do pedido 35480",
      typeRequest: "PROJETO"
    },
    {
      number: 35481,
      schedules: [],
      description: "Descrição do pedido nro 35481",
      techDetail: "Detalhe Técnico do pedido 35481",
      typeRequest: "PROJETO"
    },
    {
      number: 35482,
      schedules: [],
      description: "Descrição do pedido nro 35482",
      techDetail: "Detalhe Técnico do pedido 35482",
      typeRequest: "PROJETO"
    },
    {
      number: 35483,
      schedules: [],
      description: "Descrição do pedido nro 35483",
      techDetail: "Detalhe Técnico do pedido 35483",
      typeRequest: "PROJETO"
    },
    {
      number: 35484,
      schedules: [],
      description: "Descrição do pedido nro 35484",
      techDetail: "Detalhe Técnico do pedido 35484",
      typeRequest: "PROJETO"
    },
    {
      number: 35486,
      schedules: [],
      description: "Descrição do pedido nro 35486",
      techDetail: "Detalhe Técnico do pedido 35486",
      typeRequest: "PROJETO"
    },
    {
      number: 35487,
      schedules: [],
      description: "Descrição do pedido nro 35487",
      techDetail: "Detalhe Técnico do pedido 35487",
      typeRequest: "PROJETO"
    },
    {
      number: 35488,
      schedules: [],
      description: "Descrição do pedido nro 35488",
      techDetail: "Detalhe Técnico do pedido 35488",
      typeRequest: "PROJETO"
    },
    {
      number: 35400,
      schedules: [],
      description: "Descrição do pedido nro 35400",
      techDetail: "Detalhe Técnico do pedido 35400",
      typeRequest: "PROJETO"
    },
    {
      number: 35490,
      schedules: [],
      description: "Descrição do pedido nro 35490",
      techDetail: "Detalhe Técnico do pedido 35490",
      typeRequest: "PROJETO"
    },
    {
      number: 35491,
      schedules: [],
      description: "Descrição do pedido nro 35491",
      techDetail: "Detalhe Técnico do pedido 35491",
      typeRequest: "PROJETO"
    },
    {
      number: 35493,
      schedules: [],
      description: "Descrição do pedido nro 35493",
      techDetail: "Detalhe Técnico do pedido 35493",
      typeRequest: "PROJETO"
    },
    {
      number: 35492,
      schedules: [],
      description: "Descrição do pedido nro 35492",
      techDetail: "Detalhe Técnico do pedido 35492",
      typeRequest: "PROJETO"
    }
  ]);

  const [currentRequest, setCurrentRequest] = useReducer(ScheduleReducer, []);

  schedule = schedule.filter((item) => typeof item === "object");

  return (
    <ScheduleContext.Provider
      value={{ schedule, setSchedule, currentRequest, setCurrentRequest }}
    >
      {children},
    </ScheduleContext.Provider>
  );
}
