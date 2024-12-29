import BaseLayout from "@/components/layouts/base/Base.layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card/Card.ui";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const HomeTemplate = () => {
  return (
    <BaseLayout>
      <div className="px-4 pt-4 pb-16 flex flex-col gap-4">
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="avatar"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">田中智久</p>
            </div>
            <CardTitle>年末</CardTitle>
            <CardDescription>車で帰ります</CardDescription>
          </CardHeader>
          <CardContent>
            <p>2024/12/29 ~ 2025/01/05</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="avatar"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">田中智久</p>
            </div>
            <CardTitle>年末の帰省</CardTitle>
            <CardDescription>車で帰ります</CardDescription>
          </CardHeader>
          <CardContent>
            <p>2024/12/29 ~ 2025/01/05</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="avatar"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">田中智久</p>
            </div>
            <CardTitle>年末の帰省</CardTitle>
            <CardDescription>新幹線で帰ります</CardDescription>
          </CardHeader>
          <CardContent>
            <p>2024/12/29 ~ 2025/01/05</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="avatar"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">田中智久</p>
            </div>
            <CardTitle>年末の帰省</CardTitle>
            <CardDescription>自転車で帰ります</CardDescription>
          </CardHeader>
          <CardContent>
            <p>2024/12/29 ~ 2025/01/05</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="avatar"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">田中智久</p>
            </div>
            <CardTitle>年末の帰省</CardTitle>
            <CardDescription>徒歩で帰ります。15時に着きます。</CardDescription>
          </CardHeader>
          <CardContent>
            <p>2024/12/29 ~ 2025/01/05</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="avatar"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">田中智久</p>
            </div>
            <CardTitle>年末の帰省</CardTitle>
            <CardDescription>飛んで帰ります</CardDescription>
          </CardHeader>
          <CardContent>
            <p>2024/12/29 ~ 2025/01/05</p>
          </CardContent>
        </Card>
      </div>
    </BaseLayout>
  );
};

export default HomeTemplate;
