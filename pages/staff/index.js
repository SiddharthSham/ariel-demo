import Head from "next/head";

import { StaffOverviewPanel } from "../../containers/staff/overview";

const StaffOverview = () => {
  return (
    <>
      <Head>
        <title>Ariel Demo</title>
      </Head>
      <StaffOverviewPanel />
    </>
  );
};

export default StaffOverview;
