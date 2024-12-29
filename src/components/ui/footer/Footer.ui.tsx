import Image from "next/image";
import HouseIcon from "@/assets/icons/house-solid.svg";
import BowlFoodIcon from "@/assets/icons/bowl-food-solid.svg";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ToggleGroup, ToggleGroupItem } from "../toggle/ToggleGroup";

const Footer = () => {
  return (
    <footer
      className="sticky bottom-8 w-fit mx-auto px-4 py-2 rounded-full bg-green-600/30 backdrop-blur-lg
    rounded-full border shadow-lg"
    >
      <ToggleGroup type="single" defaultValue="home" className="gap-4">
        <ToggleGroupItem value="home" className="rounded-full">
          <Image src={HouseIcon} alt="frog" width={20} height={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="food" className="rounded-full">
          <Image src={BowlFoodIcon} alt="frog" width={20} height={20} />
        </ToggleGroupItem>
        <ToggleGroupItem value="profile" className="rounded-full">
          <Avatar className="size-5">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="avatar"
              className="rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ToggleGroupItem>
      </ToggleGroup>
    </footer>
  );
};

export default Footer;
