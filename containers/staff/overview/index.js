import { StaffSidenav } from "../../../components/staff/sidenav";
import { PageWrapper } from "../../../components/common/pageWrapper";

import Image from "next/image";

import S from "./style.module.css";

export const StaffOverviewPanel = () => {
  return (
    <>
      <StaffSidenav />
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
                <div className={S.summaryClientPhoto}>
                  <Image
                    src="/staff/bob.png"
                    alt="Picture of Bob"
                    width={120}
                    height={120}
                  />
                </div>
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
                  <div className={S.clientMoodIcon}>
                    <Image
                      src="/staff/happy.png"
                      alt="Picture of mood"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className={S.clientMood}>Happy</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className={S.cardTitle}>Actions</div>
                <div className={S.summaryItem}>
                  <button className={S.btn}>
                    <div className={S.btnIcon}>
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 21 21"
                      >
                        <path
                          d="M20 15.225v2.86a1.903 1.903 0 0 1-1.3 1.814 1.89 1.89 0 0 1-.783.093 18.93 18.93 0 0 1-8.245-2.927 18.61 18.61 0 0 1-5.731-5.72 18.844 18.844 0 0 1-2.933-8.266 1.903 1.903 0 0 1 1.13-1.916c.243-.107.506-.163.77-.163h2.867a1.913 1.913 0 0 1 1.91 1.64c.121.915.346 1.814.67 2.68a1.903 1.903 0 0 1-.43 2.01L6.71 8.543a15.27 15.27 0 0 0 5.732 5.72l1.213-1.21a1.913 1.913 0 0 1 2.016-.43c.867.323 1.767.547 2.684.668A1.911 1.911 0 0 1 20 15.225Z"
                          stroke="#fff"
                          strokeWidth="1.267"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
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
              <div className={S.fireAlertIcon}>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27 31"
                >
                  <path
                    d="M20.31 19.612c0 5.336-4.314 9.707-9.707 9.707a9.666 9.666 0 0 1-9.707-9.707c0-5.393 8.458-10.672 6.358-18.506 2.384 0 6.698 4.996 6.358 9.423-.17 2.441 3.179-1.248 2.838-5.676 3.86 2.214 3.86 13.226 3.86 14.759Z"
                    stroke="#fff"
                    strokeWidth="1.624"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.961 23.017c0 3.463-2.838 6.302-6.3 6.302-3.463 0-6.302-2.839-6.302-6.302 0-3.462 5.507-6.925 4.144-12.034 1.59 0 4.371 3.236 4.144 6.131-.114 1.59 2.044-.795 1.873-3.69 2.441 1.42 2.441 8.572 2.441 9.593Z"
                    fill="#fff"
                  />
                  <path
                    d="M19.97 11.21h-4.882c-.738 0-1.25-.851-.852-1.476l2.441-4.2 2.441-4.2c.397-.682 1.306-.682 1.703 0l2.44 4.2 2.442 4.2c.397.681-.114 1.476-.852 1.476H19.97Zm-.113-6.926V7.01m0 1.873v.227"
                    stroke="#fff"
                    strokeWidth="1.624"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
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
                <div className={S.statIcon}>
                  <Image
                    src="/staff/happy.png"
                    alt="Picture of mood"
                    width={94}
                    height={94}
                  />
                </div>
                <div className={S.statData}>Happy</div>
                <div className={S.statLabel}>Current Mood</div>
              </li>
              <li className={S.statItem}>
                <div className={S.statIcon}>
                  {" "}
                  <Image
                    src="/staff/normal.png"
                    alt="Picture of vitals"
                    width={94}
                    height={94}
                  />
                </div>
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
                <div className={S.statIcon}>
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 54 56"
                  >
                    <path
                      d="m30.884 34.197-.124-.248V8.197c0-4.333-3.59-7.924-7.924-7.924-4.333 0-7.924 3.59-7.924 7.924v25.876l-.124.124c-2.723 2.352-4.333 5.695-4.333 9.41 0 6.809 5.571 12.38 12.381 12.38 6.81 0 12.38-5.571 12.38-12.38 0-3.715-1.609-7.058-4.332-9.41ZM22.836 53.14c-5.324 0-9.657-4.334-9.657-9.657 0-3.095 1.362-5.82 3.838-7.676.371-.248.495-.62.495-1.115V8.073c0-2.847 2.353-5.2 5.2-5.2 2.848 0 5.2 2.353 5.2 5.2v26.62c0 .37.248.866.495 1.114 2.477 1.857 3.838 4.58 3.838 7.676.124 5.324-4.085 9.657-9.409 9.657Z"
                      fill="#8486EC"
                    />
                    <path
                      d="M24.44 38.034h-.247V8.196c0-.743-.62-1.362-1.362-1.362-.743 0-1.362.62-1.362 1.362v29.838h-.248c-2.476.743-4.21 2.971-4.21 5.571 0 3.22 2.6 5.82 5.82 5.82 3.219 0 5.819-2.6 5.819-5.82-.124-2.6-1.857-4.828-4.21-5.571Zm-1.61 8.543c-1.609 0-2.97-1.362-2.97-2.972 0-1.61 1.361-2.971 2.97-2.971 1.61 0 2.972 1.362 2.972 2.971 0 1.61-1.362 2.972-2.971 2.972Zm16.467-19.808c-.742 0-1.361.619-1.361 1.361 0 .743.619 1.362 1.361 1.362.743 0 1.362-.619 1.362-1.362 0-.742-.619-1.361-1.362-1.361Zm5.571-4.334c-.248-.248-.62-.371-.99-.371-.372 0-.743.123-.991.371s-.371.619-.371.99c0 .372.123.743.371.99 1.981 1.982 1.981 5.325 0 7.43-.248.247-.371.618-.371.99 0 .371.123.743.371.99.248.248.62.372.99.372.372 0 .743-.124.99-.372 1.487-1.485 2.353-3.466 2.353-5.571 0-2.105-.866-4.333-2.352-5.819Zm4.709-4.58c-.248-.248-.62-.372-.99-.372-.372 0-.743.124-.991.372-.248.247-.371.619-.371.99 0 .372.123.743.371.99 2.229 2.23 3.467 5.2 3.467 8.296 0 3.095-1.238 6.066-3.467 8.295-.248.248-.371.62-.371.99 0 .372.123.743.371.991s.619.371.99.371c.372 0 .743-.123.99-.371 5.696-5.695 5.696-14.98 0-20.552ZM7.48 31.72H2.031c-.743 0-1.362.62-1.362 1.363 0 .742.619 1.361 1.362 1.361h5.447c.743 0 1.362-.619 1.362-1.361 0-.743-.619-1.362-1.362-1.362Zm-5.571-3.839h3.343c.742 0 1.362-.62 1.362-1.362 0-.743-.62-1.362-1.362-1.362H1.909c-.743 0-1.362.62-1.362 1.362 0 .743.619 1.362 1.362 1.362Zm5.571-9.282H2.031c-.743 0-1.362.619-1.362 1.362 0 .742.619 1.362 1.362 1.362h5.447c.743 0 1.362-.62 1.362-1.362 0-.743-.619-1.362-1.362-1.362Zm-5.571-3.84h3.343c.742 0 1.362-.62 1.362-1.362 0-.743-.62-1.362-1.362-1.362H1.909c-.743 0-1.362.62-1.362 1.362 0 .743.619 1.362 1.362 1.362ZM7.48 5.348H2.031C1.289 5.348.67 5.967.67 6.71c0 .742.619 1.361 1.362 1.361h5.447c.743 0 1.362-.619 1.362-1.361 0-.743-.619-1.362-1.362-1.362Z"
                      fill="#8486EC"
                    />
                  </svg>
                </div>
                <div className={S.statData}>35°C</div>
                <div className={S.statLabel}>Body Temp</div>
              </li>
              <li className={S.statItem}>
                <div className={S.statIcon}>
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 58 54"
                  >
                    <path
                      d="M29.201 51.952 51.53 29.624c6.176-6.175 6.176-16.165 0-22.34-6.163-6.163-16.152-6.163-22.328.012m-.002 0c-6.175-6.175-16.177-6.175-22.34-.012-6.175 6.176-6.175 16.165 0 22.34l22.328 22.328"
                      stroke="#8486EC"
                      strokeWidth="3.422"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={S.statData}>96BPM</div>
                <div className={S.statLabel}>Heart Rate</div>
              </li>
              <li className={S.statItem}>
                <div className={S.statIcon}>
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 67 61"
                  >
                    <path
                      d="M64.63 29.495v.086h.147c-.043 1.894-1.49 3.472-3.355 3.472h-.064v-9.329c0-.654-.486-1.149-1.133-1.149H7.104c-.648 0-1.134.495-1.134 1.15v9.327h-.063c-1.892 0-3.356-1.626-3.356-3.558V6.26c0-1.933 1.464-3.559 3.356-3.559h.063v3.56c0 3.233 2.43 5.705 5.473 5.705h44.294c3.044 0 5.473-2.625 5.473-5.705V2.702h.063c1.892 0 3.356 1.626 3.356 3.559v23.234ZM61.273.405H5.907C2.862.404.433 3.027.433 6.108v23.234c0 3.234 2.43 5.704 5.474 5.704h55.366c3.045 0 5.474-2.624 5.474-5.704V6.11c.15-3.087-2.433-5.707-5.474-5.707ZM8.236 6.26V2.854l50.942-.152h.063v3.559c0 1.932-1.464 3.558-3.355 3.558H11.593c-1.892 0-3.356-1.626-3.356-3.558ZM8.3 31.706l50.941.151v1.196H8.237v-1.346h.064Zm50.941-3.341v1.194H8.237v-1.346h.064l50.941.152ZM8.301 24.72l50.941.152v1.195H8.237V24.72h.064Zm24.901 16.836-.003.005c-1.455 2.397-1.455 5.541 0 7.938v.002c1.028 1.6 1.029 3.932.001 5.533-.793 1.198-1.192 2.549-1.06 4.049.002.628.422 1.119 1.001 1.119.58 0 1.002-.493 1.002-1.123 0-1.024.258-2.042.768-2.764l.004-.005c1.455-2.397 1.455-5.54 0-7.937l-.001-.002c-1.028-1.6-1.028-3.933 0-5.534.793-1.199 1.191-2.55 1.059-4.052l-.002-.011c-.066-.302-.168-.576-.327-.776a.824.824 0 0 0-.672-.328c-.58 0-1.001.493-1.001 1.122 0 1.024-.26 2.042-.77 2.764Zm-9.043-.007-.004.005c-1.821 2.4-1.821 5.552 0 7.952l.001.002a4.44 4.44 0 0 1 0 5.518c-.99 1.198-1.491 2.552-1.326 4.058.002.645.538 1.118 1.23 1.118.693 0 1.23-.475 1.23-1.123 0-1.02.322-2.035.96-2.757l.003-.004c1.822-2.4 1.822-5.553 0-7.953l-.001-.002a4.44 4.44 0 0 1 0-5.518c.992-1.2 1.492-2.554 1.326-4.062h.001l-.004-.014c-.17-.617-.686-1.1-1.227-1.1-.693 0-1.23.476-1.23 1.123 0 1.02-.322 2.035-.959 2.757Zm17.703 0-.004.005c-1.821 2.4-1.821 5.552 0 7.952l.001.002a4.44 4.44 0 0 1 0 5.518c-.99 1.198-1.49 2.552-1.326 4.058.003.645.539 1.118 1.23 1.118.693 0 1.23-.475 1.23-1.123 0-1.02.322-2.035.96-2.757l.003-.004c1.822-2.4 1.822-5.553 0-7.953v-.002a4.44 4.44 0 0 1-.001-5.518c.991-1.198 1.491-2.551 1.326-4.057-.002-.646-.538-1.118-1.23-1.118-.693 0-1.23.475-1.23 1.122 0 1.02-.322 2.035-.959 2.757Z"
                      fill="#8486EC"
                      stroke="#8486EC"
                      strokeWidth=".172"
                    />
                  </svg>
                </div>
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
