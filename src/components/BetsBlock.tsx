interface BetsBlockProps {
  emoji: string;
  title: string;
  content: string;
}

const BetsBlock: React.FC<BetsBlockProps> = ({ emoji, title, content }) => {
  return (
    <div className="rounded-xl hover:bg-slate-100 border-2 p-4">
      <h3 className="bg-transparent text-4xl">{emoji}</h3>
      <h1 className="bg-transparent text-2xl font-bold">{title}</h1>
      <p className="bg-transparent text-zinc-500">{content}</p>
    </div>
  );
};

export default BetsBlock;
