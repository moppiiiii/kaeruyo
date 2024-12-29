"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import HouseIcon from "@/assets/icons/house-solid.svg";
import BowlFoodIcon from "@/assets/icons/bowl-food-solid.svg";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ToggleGroup, ToggleGroupItem } from "../toggle/ToggleGroup";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  // パスに基づいて現在の値を決定
  const getCurrentValue = () => {
    switch (pathname) {
      case "/":
        return "home";
      case "/food":
        return "food";
      case "/profile":
        return "profile";
      default:
        return "home";
    }
  };

  // トグル変更時の処理
  const handleValueChange = (value: string) => {
    if (!value) return;
    switch (value) {
      case "home":
        router.push("/");
        break;
      case "food":
        router.push("/food");
        break;
      case "profile":
        router.push("/profile");
        break;
    }
  };

  return (
    <footer
      className="sticky bottom-8 w-fit mx-auto px-4 py-2 rounded-full bg-green-600/30 backdrop-blur-lg
    rounded-full border shadow-lg"
    >
      <ToggleGroup
        type="single"
        value={getCurrentValue()}
        onValueChange={handleValueChange}
        className="gap-4"
      >
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
