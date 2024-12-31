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
import { Pencil } from "lucide-react";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "氏名を入力してください。",
  }),
  image: z.any().optional(),
  color: z.string().min(1, {
    message: "カラーを選択してください。",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

const EditProfileSheet = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      color: "#000000",
    },
    mode: "onChange",
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Sheet key={"bottom"}>
      <SheetTrigger aria-label="schedule-register-sheet">
        <Pencil className="size-4" />
      </SheetTrigger>
      <SheetContent side={"bottom"} className="h-[calc(100vh-100px)]">
        <SheetHeader>
          <SheetTitle>プロフィール編集</SheetTitle>
          <SheetDescription>
            画像、氏名、カラーを編集できます
            <br />
            カラーはカレンダー上の表示に適用されます
          </SheetDescription>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="py-4 flex flex-col gap-8 justify-center items-center"
            >
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-left">
                      プロフィール画像
                    </FormLabel>
                    <FormControl>
                      <Input id="profileImage" type="file" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-left">氏名</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="氏名を入力" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-left">カラー</FormLabel>
                    <FormControl>
                      <Input
                        type="color"
                        placeholder="カラーを選択"
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

export default EditProfileSheet;
