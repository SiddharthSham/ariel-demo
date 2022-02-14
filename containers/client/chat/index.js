import { ClientSidenav } from "../../../components/client/sidenav";
import { PageWrapper } from "../../../components/common/pageWrapper";

import S from "./style.module.css";

const CARETAKERS = [
  { name: "Angela Ken", role: "Caretaker", img: false },
  { name: "Desly Wallace", role: "Caretaker", img: false },
];

const FRIENDS = [{ name: "Desly Wallace", role: "Friend", img: false }];

export const ClientChat = () => {
  return (
    <>
      <ClientSidenav />
      <PageWrapper>
        <header>
          <div>Hi Jonathon Salter,</div>
          <h1>Welcome back</h1>
        </header>

        {/* houses */}
        <div>
          <div className={S.sectionTitle}>Caretakers</div>
          <ul className={S.houseWrapper}>
            {CARETAKERS.map((item, i) => (
              <li className={S.houseItem} key={i}>
                <div className={S.houseImg}></div>
                <div className={S.houseDetails}>
                  <div className={S.houseName}>{`${item.name}`}</div>
                  <div className={S.houseCity}>{item.role}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={S.sectionTitle}>Family and friends</div>
          <ul className={S.houseWrapper}>
            {FRIENDS.map((item, i) => (
              <li className={S.houseItem} key={i}>
                <div className={S.houseImg}></div>
                <div className={S.houseDetails}>
                  <div className={S.houseName}>{`${item.name}`}</div>
                  <div className={S.houseCity}>{item.role}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* active house Controls */}
        <div className={S.controls}>
          <div className={S.controlsTitle}>Chat</div>
          <div className={S.chatbox}>
            <div className={`${S.msg} ${S.iconMsg} ${S.from}`}>
              <div className={S.msgIcon}></div>
              <div>Food Please</div>
            </div>
            <div className={`${S.msg} ${S.txtMsg} ${S.to}`}>
              Will get you soon
            </div>
            <div className={`${S.msg} ${S.txtMsg} ${S.from}`}>Thanks</div>
          </div>
          <div className={S.textInputBox}>
            <input className={S.textInput} placeholder="Type Something"></input>
            <button className={S.msgBtn}>Send</button>
          </div>
          <div className={S.quickActions}>
            <div className={S.quickActionList}>
              <div className={S.quickActionTitle}>How are you feeling?</div>
              <ul className={S.quickActionItem}>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Happy</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Sad</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Anxiety</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Unwell</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Surprised</div>
                </li>
              </ul>
            </div>
            <div className={S.quickActionList}>
              <div className={S.quickActionTitle}>Need anything?</div>
              <ul className={S.quickActionItem}>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Happy</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Sad</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Anxiety</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Unwell</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}></div>
                  <div className={S.quickActionLabel}>Surprised</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
