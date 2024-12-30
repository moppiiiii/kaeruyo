"use client";

import Image from "next/image";
import FrogIcon from "@/assets/icons/frog-solid.svg";
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
import { Moon, Sun, Laptop, Github } from "lucide-react";
import Link from "next/link";

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
    <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white dark:bg-gray-800 z-10">
      <Link href="/" title="home" className="flex items-center gap-2">
        <Image src={FrogIcon} alt="frog" className="w-5 h-5" />
        <p>yo!</p>
      </Link>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="border-0"
              aria-label="theme-changer"
            >
              {theme === "dark" ? (
                <Moon />
              ) : theme === "light" ? (
                <Sun />
              ) : (
                <Laptop />
              )}
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
                  <Sun className="w-4 h-4" />
                  <p className="text-sm">Light</p>
                </div>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="dark"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  <p className="text-sm">Dark</p>
                </div>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="system"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4" />
                  <p className="text-sm">System</p>
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
          <Github className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
