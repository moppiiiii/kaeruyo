"use client";

import { useRef } from "react";
import Image from "next/image";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button } from "../button/Button.ui";
import AngleLeftIcon from "@/assets/icons/angle-left-solid.svg";
import AngleRightIcon from "@/assets/icons/angle-right-solid.svg";

import "./Calender.css";

type FullCalendarRef = InstanceType<typeof FullCalendar>;

const Calender = () => {
  const calendarRef = useRef<FullCalendarRef>(null);

  /**
   * 前の月を表示
   */
  const onClickPrev = () => {
    if (!calendarRef.current) return;
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  };

  /**
   * 今日の日付を表示
   */
  const onClickToday = () => {
    if (!calendarRef.current) return;
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  };

  /**
   * 次の月を表示
   */
  const onClickNext = () => {
    if (!calendarRef.current) return;
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <p className="text-lg">{new Date().toLocaleDateString("ja-JP")}</p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClickPrev}>
            <Image src={AngleLeftIcon} alt="prev" width={10} height={10} />
          </Button>
          <Button variant="outline" onClick={onClickToday}>
            today
          </Button>
          <Button variant="outline" onClick={onClickNext}>
            <Image src={AngleRightIcon} alt="next" width={10} height={10} />
          </Button>
        </div>
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

export default Calender;
