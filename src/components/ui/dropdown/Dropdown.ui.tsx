import { DropdownProps } from "./type";

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  return (
    <div
      id="dropdown"
      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      {children}
    </div>
  );
};

export default Dropdown;
