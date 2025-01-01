import Header from "@/components/ui/header/Header.ui";
import { BaseLayoutProps } from "./type";
import Footer from "@/components/ui/footer/Footer.ui";

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  isHideFooter = false,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {!isHideFooter && <Footer />}
    </div>
  );
};

export default BaseLayout;
