interface HeaderProps {
  title: string;
  quote?: string;
  by?: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ title, quote, by }) => {
  return (
    <div className="mb-16">
      <h1 className="font-black text-5xl mb-2">{title}</h1>
      {/* TODO: The quote section should always occupies the same height, so whenever there is or is not a quote, the content is always at the same starting place */}
      {by && by.length > 0 && (
        <p>
          {quote}
          <br />— {by}
        </p>
      )}
    </div>
  );
};

export default Header;
