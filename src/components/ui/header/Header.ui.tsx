import Image from "next/image";
import { Separator } from "@/components/ui/separator/Separator.ui";
import FrogIcon from "@/assets/icons/frog-solid.svg";
import GithubIcon from "@/assets/icons/github-brands-solid.svg";
import MoonIcon from "@/assets/icons/moon-solid.svg";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar/Avatar.ui";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center gap-2">
        <Image src={FrogIcon} alt="frog" width={20} height={20} />
        <p>Yo !</p>
      </div>
      <div className="flex items-center gap-3">
        <Image src={MoonIcon} alt="moon" width={16} height={16} />
        <Image src={GithubIcon} alt="github" width={20} height={20} />
        <Separator orientation="vertical" className="h-4" />
        <Avatar className="size-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
