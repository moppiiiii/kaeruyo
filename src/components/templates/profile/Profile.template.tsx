import BaseLayout from "@/components/layouts/base/Base.layout";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/Avatar.ui";
import { Button } from "@/components/ui/button/Button.ui";

const ProfileTemplate: React.FC = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col gap-12 p-8">
        <div className="flex items-center gap-6">
          <Avatar className="size-20">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="avatar"
              className="rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">Tomo</p>
            <p className="text-sm text-gray-500">田中家</p>
          </div>
        </div>
        <Button>ログアウト</Button>
      </div>
    </BaseLayout>
  );
};

export default ProfileTemplate;
