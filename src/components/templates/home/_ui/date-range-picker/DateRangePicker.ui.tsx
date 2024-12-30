"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button/Button.ui";
import { Calendar } from "@/components/ui/calendar/Calendar.ui";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover/Popover.ui";

interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: DateRange;
  onDateChange?: (date: DateRange | undefined) => void;
}

export function DateRangePicker({ date, onDateChange }: DateRangePickerProps) {
  const today = new Date();
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    date || {
      from: today,
      to: addDays(today, 1),
    },
  );

  const handleDateSelect = (newDate: DateRange | undefined) => {
    setDateRange(newDate);
    onDateChange?.(newDate);
  };

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !dateRange && "text-muted-foreground",
          )}
        >
          <CalendarIcon />
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, "yyyy/MM/dd")} -{" "}
                {format(dateRange.to, "yyyy/MM/dd")}
              </>
            ) : (
              format(dateRange.from, "yyyy/MM/dd")
            )
          ) : (
            <span>日付を選択してください</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={handleDateSelect}
          numberOfMonths={1}
        />
      </PopoverContent>
    </Popover>
  );
}
