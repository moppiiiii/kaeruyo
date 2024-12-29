import Header from "@/components/ui/header/Header.ui";
import { BaseLayoutProps } from "./type";

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
