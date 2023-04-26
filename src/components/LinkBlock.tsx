import { NavLink } from "react-router-dom";
import { randomColor } from "../functions/randomColor";

interface LinkBlockProps {
  emoji: string;
  name: string;
  to: string;
}

const LinkBlock: React.FC<LinkBlockProps> = ({ emoji, name, to }) => {
  return (
    <NavLink to={to}>
      <div
        className={`rounded-3xl w-full duration-200 hover:ring-2 hover:ring-offset-8 ring-sky-400 ring-0 h-60 flex flex-col justify-between items-center shadow-lg p-4 mb-4 text-center ${randomColor()}`}
      >
        <h1 className="font-bold text-8xl mb-2 bg-transparent flex-grow flex items-center justify-center">
          {emoji}
        </h1>
        <h2 className="font-bold text-lg bg-transparent">{name}</h2>
      </div>
    </NavLink>
  );
};

export default LinkBlock;
