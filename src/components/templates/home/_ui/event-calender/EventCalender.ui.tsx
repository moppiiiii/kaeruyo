"use client";

import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button } from "@/components/ui/button/Button.ui";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./EventCalender.css";

type FullCalendarRef = InstanceType<typeof FullCalendar>;

const EventCalender = () => {
  const today = new Date();
  const calendarRef = useRef<FullCalendarRef>(null);
  const [month, setMonth] = useState<string>(
    today.toLocaleDateString("ja-JP", { year: "numeric", month: "long" }),
  );

  /**
   * カレンダーの月を設定
   */
  const setCalendarMonth = () => {
    if (!calendarRef.current) return;
    const calendarApi = calendarRef.current?.getApi();
    const month = calendarApi.getDate();
    setMonth(
      month.toLocaleDateString("ja-JP", { year: "numeric", month: "long" }),
    );
  };

  /**
   * 前の月を表示
   */
  const onClickPrev = () => {
    if (!calendarRef.current) return;
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    setCalendarMonth();
  };

  /**
   * 今日の日付を表示
   */
  const onClickToday = () => {
    if (!calendarRef.current) return;
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
    setCalendarMonth();
  };

  /**
   * 次の月を表示
   */
  const onClickNext = () => {
    if (!calendarRef.current) return;
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    setCalendarMonth();
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <p className="text-lg">{today.toLocaleDateString("ja-JP")}</p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClickPrev}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" onClick={onClickToday}>
            today
          </Button>
          <Button variant="outline" onClick={onClickNext}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-center text-lg">{month}</p>
      </div>
      <div className="shadow-md">
        <FullCalendar
          ref={calendarRef}
          headerToolbar={false}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locale="ja"
          height="auto"
          events={[
            {
              id: "a",
              title: "my event",
              start: "2024-12-26",
              end: "2025-01-02",
              allDay: true,
              color: "green",
            },
            {
              id: "b",
              title: "my event",
              start: "2024-12-26",
              end: "2025-01-03",
              allDay: true,
              color: "purple",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default EventCalender;
