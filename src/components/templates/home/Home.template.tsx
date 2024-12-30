import BaseLayout from "@/components/layouts/base/Base.layout";
import Calender from "@/components/ui/calender/Calender.ui";

const HomeTemplate = () => {
  return (
    <BaseLayout>
      <div className="px-4 pt-4 pb-16 flex flex-col gap-4">
        <Calender />
      </div>
    </BaseLayout>
  );
};

export default HomeTemplate;
