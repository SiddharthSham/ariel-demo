import { Sidenav } from "../../common/sidenav";

const links = [
  { name: "Overview", route: "/client" },
  { name: "Chat", route: "/client/chat" },
  { name: "Settings", route: false },
];

export const ClientSidenav = () => {
  return (
    <>
      <Sidenav links={links} />
    </>
  );
};
