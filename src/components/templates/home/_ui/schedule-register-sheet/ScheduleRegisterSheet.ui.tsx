"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet/Sheet.ui";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form/Form.ui";
import { Button } from "@/components/ui/button/Button.ui";
import { DateRangePicker } from "../date-range-picker/DateRangePicker.ui";

const FormSchema = z.object({
  dateRange: z.object(
    {
      from: z.date(),
      to: z.date(),
    },
    {
      required_error: "滞在期間を選択してください。",
    },
  ),
});

const ScheduleRegisterSheet = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Sheet key={"bottom"}>
      <SheetTrigger
        className="fixed right-5 bottom-[38px] w-fit mx-auto p-2 rounded-full bg-green-600/30 backdrop-blur-lg
rounded-full border shadow-lg z-10"
        aria-label="schedule-register-sheet"
      >
        <Plus />
      </SheetTrigger>
      <SheetContent side={"bottom"} className="h-[calc(100vh-100px)]">
        <SheetHeader>
          <SheetTitle>滞在期間</SheetTitle>
          <SheetDescription>実家の滞在期間を選択してください</SheetDescription>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="py-4 flex flex-col gap-8 justify-center items-center"
            >
              <FormField
                control={form.control}
                name="dateRange"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <DateRangePicker
                        date={field.value}
                        onDateChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">登録</Button>
            </form>
          </Form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ScheduleRegisterSheet;
