interface TabProps {
  tabName: string;
  emoji: string;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ tabName, emoji, onClick }) => {
  let tabColor = "";

  switch (tabName) {
    case "Introduction":
      tabColor = "hover:border-zinc-400 hover:text-zinc-900";
      break;
    case "Roadmap":
      tabColor = "hover:border-yellow-800 hover:text-yellow-800";
      break;
    case "Backlog":
      tabColor = "hover:border-rose-500 hover:text-rose-500";
      break;
    case "In Progress":
      tabColor = "hover:border-amber-500 hover:text-amber-500";
      break;
    case "Shipped":
      tabColor = "hover:border-emerald-500 hover:text-emerald-500";
      break;
    default:
      tabColor = "hover:border-gray-600 hover:text-gray-600";
      break;
  }

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer inline-block hover:shadow-sm rounded-full border-2 px-8 py-4 border-zinc-200 text-zinc-400 duration-200 ${tabColor} `}
    >
      <p>
        {emoji} {tabName}
      </p>
    </div>
  );
};

export default Tab;
