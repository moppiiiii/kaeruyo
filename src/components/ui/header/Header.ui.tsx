import GithubIcon from "../../../assets/icons/github-mark.svg";
import SunIcon from "../../../assets/icons/sun.svg";
import FrogIcon from "../../../assets/icons/frog.svg";
import Dropdown from "../dropdown/Dropdown.ui";

const Header: React.FC = () => {
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
          <button type="button">
            <img className="w-6 h-6" src={SunIcon} alt="Sun" />
          </button>
          <Dropdown>
            <div>Dropdown</div>
          </Dropdown>
          <img className="w-6 h-6" src={GithubIcon} alt="Github" />
        </div>
      </div>
    </header>
  );
};

export default Header;
