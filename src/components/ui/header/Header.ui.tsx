import Image from "next/image";
import FrogIcon from "@/assets/icons/frog-solid.svg";
import MoonIcon from "@/assets/icons/moon-solid.svg";
import GithubIcon from "@/assets/icons/github-brands-solid.svg";
import { Separator } from "../separator/Separator.ui";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar/Avatar.ui";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center gap-2">
        <Image src={FrogIcon} alt="frog" width={20} height={20} />
        <p>yo!</p>
      </div>
      <div className="flex items-center gap-4">
        <Image src={MoonIcon} alt="moon" width={16} height={16} />
        <a
          href="https://github.com/moppiiiii/kaeruyo"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GithubIcon} alt="github" width={20} height={20} />
        </a>
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
