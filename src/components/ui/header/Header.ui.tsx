import GithubIcon from "../../../assets/icons/github-mark.svg";
import SunIcon from "../../../assets/icons/sun.svg";
import FrogIcon from "../../../assets/icons/frog.svg";
import DropdownMenu from "../dropdown-menu/DropdownMenu.ui";
import { useState, useRef, useEffect } from "react";
import ThemeMenu from "./_ui/theme-menu/ThemeMenu.ui";

const Header: React.FC = () => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="flex justify-between p-5 items-center">
        <div className="flex items-center gap-1 text-xl">
          <p>
            <img className="w-6 h-6" src={FrogIcon} alt="Frog" />
          </p>
          <p>Yo !</p>
        </div>

        <div className="flex items-center gap-4">
          <div ref={dropdownRef} className="relative">
            <button
              className="flex items-center"
              type="button"
              onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
            >
              <img className="w-6 h-6" src={SunIcon} alt="Sun" />
            </button>
            {isDropdownMenuOpen && (
              <div className="absolute end-full">
                <DropdownMenu>
                  <ThemeMenu />
                </DropdownMenu>
              </div>
            )}
          </div>
          <img className="w-6 h-6" src={GithubIcon} alt="Github" />
        </div>
      </div>
    </header>
  );
};

export default Header;
