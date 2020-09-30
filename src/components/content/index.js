import React, { useContext, useState } from "react";
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Agenda from "../agenda/index";
import Editor from "../editorTexto/index";
import AnexoItem from "../anexo/index";

import ScheduleContex from "../../state/requests/Context";

export default function Content() {
  const { currentRequest } = useContext(ScheduleContex);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="content-area">
        <Tabs>
          <TabList>
            <Tab>Solicitação</Tab>
            <Tab>Detalhe Téc.</Tab>
            <Tab>Anexo</Tab>
            <Tab>Validação</Tab>
            <Tab>Agenda</Tab>
          </TabList>

          <TabPanel className="geral">
            <h2>{currentRequest.description}</h2>
          </TabPanel>
          <TabPanel className="geral">
            <h2>Detalhe</h2>
          </TabPanel>
          <TabPanel className="geral">
            <AnexoItem />
            <AnexoItem />
            <AnexoItem />
            <AnexoItem />
          </TabPanel>
          <TabPanel className="geral">
            <Editor />
          </TabPanel>
          <TabPanel className="geral-agenda">
            <Agenda />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
