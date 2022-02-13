import { StaffSidenav } from "../../../components/staff/sidenav";
import S from "./style.module.css";

import { Switch } from "@rebass/forms";
import { useState } from "react";

const HOUSE_DATA = [
  { house: 940, area: "Pint Street", city: "Caboolture north, QL", img: false },
  { house: 11, area: "Sunflower Cresent", city: "Narangba", img: false },

  { house: 940, area: "Pint Street", city: "Caboolture north, QL", img: false },
  { house: 11, area: "Sunflower Cresent", city: "Narangba", img: false },

  { house: 940, area: "Pint Street", city: "Caboolture north, QL", img: false },
  { house: 11, area: "Sunflower Cresent", city: "Narangba", img: false },
];

const Switchable = () => {
  const [switched, setSwitched] = useState(false);
  const toggleSwitch = () => {
    setSwitched(!switched);
  };

  return (
    <>
      <div>{switched ? "On" : "Off"}</div>
      <Switch checked={switched} onClick={() => toggleSwitch()} />
    </>
  );
};

export const StaffControlPanel = () => {
  return (
    <>
      <StaffSidenav />
      <main className={S.pageWrapper}>
        <header>
          <div>Hi Jonathon Salter,</div>
          <h1>Welcome back</h1>
        </header>

        {/* houses */}
        <div>
          <div className={S.sectionTitle}>Houses</div>
          <ul className={S.houseWrapper}>
            {HOUSE_DATA.map((item, i) => (
              <li className={S.houseItem} key={i}>
                <div className={S.houseImg}></div>
                <div className={S.houseDetails}>
                  <div
                    className={S.houseName}
                  >{`${item.house} ${item.area}`}</div>
                  <div className={S.houseCity}>{item.city}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* active house Controls */}
        <div className={S.controls}>
          <div className={S.controlsTitle}>Controls</div>
          <div className={S.controlList}>
            <div className={S.controlItem}>
              <div className={S.controlLabel}>Turn Ariel Off</div>
              <div className={S.controlAction}>
                <Switchable />
              </div>
            </div>

            <div className={S.controlItem}>
              <div className={S.controlLabel}>Eye gaze</div>
              <div className={S.controlAction}>
                <Switchable />
              </div>
            </div>

            <div className={S.controlItem}>
              <div className={S.controlLabel}>Light Sensor</div>
              <div className={S.controlAction}>
                <Switchable />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
