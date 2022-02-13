import { StaffSidenav } from "../../../components/staff/sidenav";
import S from "./style.module.css";

export const StaffOverviewPanel = () => {
  return (
    <>
      <StaffSidenav />
      <main className={S.pageWrapper}>
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
                  <button className={`${S.btn} ${S.dangerBtn}`}>
                    <div className={S.btnLabel}>Emergency SOS</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logs + alerts */}
        <section className={`${S.row}`}>
          {/* Logs */}
          <div className={`${S.card} ${S.logWrapper}`}>
            <div className={S.cardTitle}>Client Logs</div>
            <ul className={S.log}>
              <li className={S.logLatest}>
                Bob Requested mineral water 10 mins ago
              </li>
              <li>It’s time for bobs medication.</li>
            </ul>
          </div>

          {/* Alerts */}
          <div className={S.card}>
            <div className={S.cardTitle}>Alerts</div>
            <div className={S.fireAlertContent}>
              <div className={S.fireAlertIcon}></div>
              <div>Fire Alert</div>
            </div>
            <button className={`${S.btn} ${S.dangerBtn}`}>
              <div>Call Fire Brigade</div>
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
      </main>
    </>
  );
};
