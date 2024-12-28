import SunIcon from "../../../../../assets/icons/sun.svg";
import DarkIcon from "../../../../../assets/icons/dark.svg";
import SystemIcon from "../../../../../assets/icons/system.svg";

const ThemeMenu: React.FC = () => {
  return (
    <ul className="flex flex-col border-gray-100">
      <li className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
        <img className="w-5 h-5" src={SunIcon} alt="Sun" />
        <p>Light</p>
      </li>
      <li className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
        <img className="w-5 h-5" src={DarkIcon} alt="Sun" />
        <p>Dark</p>
      </li>
      <li className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
        <img className="w-5 h-5" src={SystemIcon} alt="Sun" />
        <p>System</p>
      </li>
    </ul>
  );
};

export default ThemeMenu;
