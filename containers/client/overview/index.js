import { ClientSidenav } from "../../../components/client/sidenav";
import { PageWrapper } from "../../../components/common/pageWrapper";

import S from "./style.module.css";

export const ClientOverview = () => {
  return (
    <>
      <ClientSidenav />
      <PageWrapper>
        <header>
          <div>Hi Jonathon Salter,</div>
          <h1>Welcome back</h1>
        </header>

        {/* Summary */}
        <section className={`${S.summary} ${S.row}`}>
          <div className={`${S.card} ${S.summaryCard}`}>
            <div>
              <div className={S.cardTitle}>Client</div>
              <div className={S.summaryItem}>
                <div className={S.summaryClientPhoto}></div>
                <div className={S.summaryClientData}>
                  <div className={S.summaryClientName}>Bob Jones</div>
                  <div className={S.summaryClientNo}>NDIS No. 9827382082</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className={S.cardTitle}>Current Mood</div>
                <div className={S.summaryItem}>
                  <div className={S.clientMoodIcon}></div>
                  <div className={S.clientMood}>Happy</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className={S.cardTitle}>Actions</div>
                <div className={S.summaryItem}>
                  <button className={S.btn}>
                    <div>O</div>
                    <div className={S.btnLabel}>Call next to Kim</div>
                  </button>
                  <button className={`${S.btn} ${S.primaryBtn}`}>
                    <div className={S.btnLabel}>Emergency SOS</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requests + alerts */}
        <section className={`${S.row}`}>
          {/* Requests */}
          <div className={`${S.card} ${S.requestWrapper}`}>
            <div className={S.cardTitle}>Request for</div>
            <ul className={S.request}>
              <li className={S.requestItem}>
                <div className={S.requestIcon}></div>
                <div className={S.requestLabel}>Ask for water</div>
              </li>
              <li className={S.requestItem}>
                <div className={S.requestIcon}></div>
                <div className={S.requestLabel}>Ask for Medicine</div>
              </li>
              <li className={S.requestItem}>
                <div className={S.requestIcon}></div>
                <div className={S.requestLabel}>Ask for Food</div>
              </li>
            </ul>
            <button
              className={`${S.btn} ${S.primaryBtn} ${S.btnShrink} ${S.mxAuto}`}
            >
              <div>Call Caretakes</div>
            </button>
          </div>

          {/* Alerts */}
          <div className={S.card}>
            <div className={S.cardTitle}>Recent Alerts</div>
            <ul className={S.request}>
              <li className={S.requestItem}>
                <div className={S.requestIcon}></div>
                <div className={S.requestLabel}>Report fire</div>
              </li>
              <li className={S.requestItem}>
                <div className={S.requestIcon}></div>
                <div className={S.requestLabel}>Intrusion</div>
              </li>
              <li className={S.requestItem}>
                <div className={S.requestIcon}></div>
                <div className={S.requestLabel}>Health Issue</div>
              </li>
            </ul>
            <button
              className={`${S.btn} ${S.dangerBtn} ${S.btnShrink} ${S.mxAuto}`}
            >
              <div>Emergency SOS</div>
            </button>
          </div>
        </section>

        {/* Stats + sensors */}
        <section className={`${S.row} ${S.statsRow}`}>
          {/* Stats */}
          <div className={`${S.card} ${S.statsWrapper}`}>
            <div className={S.cardTitle}>Client Stats</div>
            <ul className={S.stats}>
              <li className={S.statItem}>
                <div className={S.statIcon}>O</div>
                <div className={S.statData}>Happy</div>
                <div className={S.statLabel}>Current Mood</div>
              </li>
              <li className={S.statItem}>
                <div className={S.statIcon}>O</div>
                <div className={S.statData}>Normal</div>
                <div className={S.statLabel}>Vitals</div>
              </li>
            </ul>
          </div>

          {/* Alerts */}
          <div className={`${S.card} ${S.sensorWrapper}`}>
            <div className={S.cardTitle}>Ariel Sensors</div>
            <ul className={S.stats}>
              <li className={S.statItem}>
                <div className={S.statIcon}>O</div>
                <div className={S.statData}>35°C</div>
                <div className={S.statLabel}>Body Temp</div>
              </li>
              <li className={S.statItem}>
                <div className={S.statIcon}>O</div>
                <div className={S.statData}>96BPM</div>
                <div className={S.statLabel}>Heart Rate</div>
              </li>
              <li className={S.statItem}>
                <div className={S.statIcon}>O</div>
                <div className={S.statData}>25°C</div>
                <div className={S.statLabel}>Room Temp</div>
              </li>
            </ul>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};
