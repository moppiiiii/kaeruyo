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
  FormLabel,
  FormMessage,
} from "@/components/ui/form/Form.ui";
import { Button } from "@/components/ui/button/Button.ui";
import { Input } from "@/components/ui/input/Input.ui";

const FormSchema = z.object({
  groupName: z.string().min(1, {
    message: "グループ名を入力してください。",
  }),
  groupId: z.string().min(1, {
    message: "グループIDを入力してください。",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

const GroupParticipationSheet = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      groupName: "",
      groupId: "",
    },
    mode: "onChange",
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Sheet key={"bottom"}>
      <SheetTrigger
        aria-label="schedule-register-sheet"
        className="border rounded-md text-sm p-2"
      >
        グループに参加する
      </SheetTrigger>
      <SheetContent side={"bottom"} className="h-[calc(100vh-100px)]">
        <SheetHeader>
          <SheetTitle>グループ参加</SheetTitle>
          <SheetDescription>
            参加するグループ名とIDを入力してください
            <br />
            グループIDが不明の場合は
            <br />
            グループ作成者にお問い合わせください
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
                    <FormLabel className="text-left">グループ名</FormLabel>
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

              <FormField
                control={form.control}
                name="groupId"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-left">グループID</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="グループIDを入力"
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

export default GroupParticipationSheet;
