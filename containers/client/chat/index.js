import { ClientSidenav } from "../../../components/client/sidenav";
import { PageWrapper } from "../../../components/common/pageWrapper";

import S from "./style.module.css";
import Image from "next/image";

const CARETAKERS = [
  { name: "Angela Ken", role: "Caretaker", img: "/client/angela.png" },
  { name: "Desly Wallace", role: "Caretaker", img: "/client/angela.png" },
];

const FRIENDS = [
  { name: "Desly Wallace", role: "Friend", img: "/staff/bob.png" },
];

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
                <div className={S.houseImg}>
                  <Image
                    src={item.img}
                    alt="Picture"
                    width={200}
                    height={200}
                  />
                </div>
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
                <div className={S.houseImg}>
                  <Image
                    src={item.img}
                    alt="Picture"
                    width={200}
                    height={200}
                  />
                </div>
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
              <div className={S.msgIcon}>
                <Image
                  src="/client/bread.png"
                  alt="Picture"
                  width={200}
                  height={200}
                />
              </div>
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
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/beaming-face-with-smiling-eyes.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Happy</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/disappointed-face.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Sad</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/confounded-face.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Anxiety</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/face-with-medical-mask.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Unwell</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/hushed-face-2.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Surprised</div>
                </li>
              </ul>
            </div>
            <div className={S.quickActionList}>
              <div className={S.quickActionTitle}>Need anything?</div>
              <ul className={S.quickActionItem}>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/tropical-drink.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Ask for drink</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/hamburger-3.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Tasty Meal</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/bread.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Ask for food</div>
                </li>
                <li className={S.quickAction}>
                  <div className={S.quickActionIcon}>
                    <Image
                      src="/client/pill.png"
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={S.quickActionLabel}>Medicine</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
