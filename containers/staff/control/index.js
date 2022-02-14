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
      <Switch
        sx={{
          backgroundColor: switched ? "#8486ec" : "#F2F2F2",
          borderRadius: "12.5px",
          width: "60px",
          height: "25px",
          border: "none",
          transition: "background-color 0.2s ease-out"
        }}
        className={S.switch}
        checked={switched}
        onClick={() => toggleSwitch()}
      />
    </>
  );
};

const Counter = ({
  defaultCount = 0,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
}) => {
  const [count, setCount] = useState(defaultCount);

  const increment = () => {
    if (count + step > max) return;
    setCount(count + step);
  };
  const decrement = () => {
    if (count - step < min) return;
    setCount(count - step);
  };

  return (
    <>
      <div className={S.counter}>
        <button onClick={decrement} className={S.counterDecrement}>
          -
        </button>
        <input
          type={"number"}
          value={count}
          min={min}
          max={max}
          onChange={(e) =>
            setCount(
              parseInt(e.target.value) ? parseInt(e.target.value) : defaultCount
            )
          }
        />
        <button onClick={increment} className={S.counterIncrement}>
          +
        </button>
      </div>
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
              <div className={S.controlLabel}>Raise Temp</div>
              <div className={S.controlAction}>
                <Counter />
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
