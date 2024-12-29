import Header from "@/components/ui/header/Header.ui";
import { BaseLayoutProps } from "./type";
import Footer from "@/components/ui/footer/Footer.ui";

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
