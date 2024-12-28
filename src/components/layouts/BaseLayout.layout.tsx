import Header from "../ui/header/Header.ui";
import { BaseLayoutProps } from "./type";

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default BaseLayout;
