import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Tab from "../../components/BetsTab";
import BetsBlock from "../../components/BetsBlock";

const OPCPage = () => {
  const Introduction = () => {
    return <div>Introduction</div>;
  };

  const Roadmap = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <BetsBlock emoji="✍️" title="Long Form content" content="Instead of making Instagram Carousel, long form content, much valuable content will be produced." />
        <BetsBlock emoji="🧠" title="Idea" content="lorem ipsum" />
        <BetsBlock emoji="🧠" title="Idea" content="lorem ipsum" />
        <BetsBlock emoji="🧠" title="Idea" content="lorem ipsum" />
        <BetsBlock emoji="🧠" title="Idea" content="lorem ipsum" />
      </div>
    );
  };

  const [activeTab, setActiveTab] = useState(<Introduction />);

  return (
    <>
      <Header
        title="⭕️ One Percent Circle"
        quote="There are 4 types of leverage. Labour, Capital, Code, and Content"
        by="Naval Ravikant"
      />
      <div className="flex flex-row gap-4 mb-16">
        <Tab
          tabName="Introduction"
          emoji="ℹ️"
          onClick={() => setActiveTab(<Introduction />)}
        />
        <Tab
          tabName="Roadmap"
          emoji="🛣️"
          onClick={() => setActiveTab(<Roadmap />)}
        />
      </div>

      {activeTab}
    </>
  );
};

export default OPCPage;
