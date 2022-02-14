import S from "./style.module.css";

export const PageWrapper = ({ children }) => {
  return (
    <>
      <main className={S.pageWrapper}>{children}</main>
    </>
  );
};
