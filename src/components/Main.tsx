import { ReactNode } from "react";
const Main = ({ children }: { children: ReactNode }) => {
  return (
    <div className="main-container">
      <div className="main">{children}</div>
    </div>
  );
};

export default Main;
