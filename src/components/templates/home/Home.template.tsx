import BaseLayout from "@/components/layouts/base/Base.layout";
import EventCalender from "./_ui/event-calender/EventCalender.ui";
import ScheduleRegisterSheet from "./_ui/schedule-register-sheet/ScheduleRegisterSheet.ui";

const HomeTemplate = () => {
  return (
    <BaseLayout>
      <div className="px-4 pt-4 pb-16 flex flex-col gap-4">
        <EventCalender />
      </div>
      <ScheduleRegisterSheet />
    </BaseLayout>
  );
};

export default HomeTemplate;
