import { Sidenav } from "../../common/sidenav";

const links = [
  { name: "Overview", route: "/staff" },
  { name: "Control", route: "/staff/control" },
  { name: "Settings", route: false },
];

export const StaffSidenav = () => {
  return (
    <>
      <Sidenav links={links} />
    </>
  );
};
