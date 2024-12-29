"use client";

import Image from "next/image";
import FrogIcon from "@/assets/icons/frog-solid.svg";
import MoonIcon from "@/assets/icons/moon-solid.svg";
import SunIcon from "@/assets/icons/sun-solid.svg";
import LaptopIcon from "@/assets/icons/laptop-solid.svg";
import GithubIcon from "@/assets/icons/github-brands-solid.svg";
// import { Separator } from "../separator/Separator.ui";
// import { Avatar, AvatarFallback, AvatarImage } from "../avatar/Avatar.ui";
import { Button } from "../button/Button.ui";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { useThemeStore } from "@/store/theme/";
import { useEffect } from "react";

const Header: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // システムテーマの場合、メディアクエリを監視
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle("dark", e.matches);
      };

      document.documentElement.classList.toggle("dark", mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    // ライト/ダークモードの場合
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <Image src={FrogIcon} alt="frog" width={20} height={20} />
        <p>yo!</p>
      </div>
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="border-0">
              <Image
                src={
                  theme === "dark"
                    ? MoonIcon
                    : theme === "light"
                      ? SunIcon
                      : LaptopIcon
                }
                alt="theme"
                width={20}
                height={20}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md w-max">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={theme}
              onValueChange={(value) =>
                setTheme(value as "light" | "dark" | "system")
              }
            >
              <DropdownMenuRadioItem
                value="light"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center gap-2">
                  <Image src={SunIcon} alt="light" width={16} height={16} />
                  <p>Light</p>
                </div>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="dark"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center gap-2">
                  <Image src={MoonIcon} alt="dark" width={14} height={14} />
                  <p>Dark</p>
                </div>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="system"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center gap-2">
                  <Image src={LaptopIcon} alt="system" width={16} height={16} />
                  <p>System</p>
                </div>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <a
          href="https://github.com/moppiiiii/kaeruyo"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GithubIcon} alt="github" width={20} height={20} />
        </a>
        {/* <Separator orientation="vertical" className="h-4" />
        <Avatar className="size-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
      </div>
    </header>
  );
};

export default Header;
