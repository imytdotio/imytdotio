import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { randomColor } from "../functions/randomColor";
import LinkBlock from "../components/LinkBlock";

const StackPage = () => {
  const bets = [
    { id: "0", name: "Data Science", emoji: "🔢", to: "/stack/DataScience" },
    { id: "1", name: "App Dev", emoji: "💻", to: "/stack/AppDev" },
    { id: "2", name: "3d modeling", emoji: "🌈", to: "/stack/3d" },
    { id: "3", name: "Blockchain", emoji: "🔗", to: "/stack/Blockchain" },
  ];
  return (
    <>
      <Header
        title="⚔️ Stack"
        quote="You don't become who you are by shouting affirmations in the mirror, but by having a stack of undeniable proof that you are who you say you are."
        by="Alex Hormozi"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bets.map((bet) => (
          <LinkBlock
            key={bet.id}
            emoji={bet.emoji}
            name={bet.name}
            to={bet.to}
          />
        ))}
      </div>
    </>
  );
};

export default StackPage;
