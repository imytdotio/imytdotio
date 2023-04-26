import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { randomColor } from "../functions/randomColor";
import LinkBlock from "../components/LinkBlock";

const BetsPage = () => {
  const bets = [
    { id: "0", name: "imyt.io @ig", emoji: "✍️", to: "/bets/contentcreation" },
    { id: "1", name: "OPC", emoji: "⭕️", to: "/bets/opc" },
    { id: "2", name: "Changelog.today", emoji: "🎞", to: "/bets/changelog" },
    { id: "3", name: "BulletWriter", emoji: "⚡️", to: "/bets/bulletwriter" },
    { id: "4", name: "HK-Stoicism", emoji: "🗿", to: "/bets/stoic" },
  ];
  return (
    <>
      <Header
        title="🧪 Bets"
        quote="Fail fast, fail often, but always fail forward."
        by="John C. Maxwell"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-">
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

export default BetsPage;
