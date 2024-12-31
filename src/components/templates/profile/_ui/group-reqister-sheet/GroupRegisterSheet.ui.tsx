"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet/Sheet.ui";
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
import { Input } from "@/components/ui/input/Input.ui";

const FormSchema = z.object({
  groupName: z.string().min(1, {
    message: "グループ名を入力してください。",
  }),
});

const GroupRegisterSheet = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      groupName: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Sheet key={"bottom"}>
      <SheetTrigger
        aria-label="schedule-register-sheet"
        className="border rounded-md text-sm p-2"
      >
        グループを作る
      </SheetTrigger>
      <SheetContent side={"bottom"} className="h-[calc(100vh-100px)]">
        <SheetHeader>
          <SheetTitle>グループ作成</SheetTitle>
          <SheetDescription>
            作成するグループ名を入力してください
          </SheetDescription>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="py-4 flex flex-col gap-8 justify-center items-center"
            >
              <FormField
                control={form.control}
                name="groupName"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="グループ名を入力"
                        {...field}
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

export default GroupRegisterSheet;
