import { DropdownMenuProps } from "./type";

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg w-max">
      {children}
    </div>
  );
};

export default DropdownMenu;
