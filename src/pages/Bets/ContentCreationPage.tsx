import React from "react";
import { useState } from "react";
import Tab from "../../components/BetsTab";
import Header from "../../components/Header";
import BetsBlock from "../../components/BetsBlock";

const BetsPage = () => {
  const Introduction = () => {
    return (
      <div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-6 gap-4">
            <h1 className="col-span-1">Idea</h1>
            <p className="col-span-5 max-w-prose">
              I love consuming contents about Productivity, Building Habits and
              Focusing at work.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Backlog = () => {
    return <div className="grid grid-cols-3 gap-4">
      <BetsBlock emoji="🧠" title="Idea" content="lorem ipsum" />
      <BetsBlock emoji="🧠" title="Idea" content="lorem ipsum" />
      <BetsBlock emoji="🧠" title="Idea" content="lorem ipsum" />
    </div>;
  };

  const InProgress = () => {
    return <div>InProgress</div>;
  };

  const Shipped = () => {
    return <div>Shipped</div>;
  };

  const [activeTab, setActiveTab] = useState(<Introduction />);

  return (
    <>
      <Header
        title="✍️ Content Creation @IG"
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
          tabName="Backlog"
          emoji="🧠"
          onClick={() => setActiveTab(<Backlog />)}
        />
        <Tab
          tabName="In Progress"
          emoji="🛠️"
          onClick={() => setActiveTab(<InProgress />)}
        />
        <Tab
          tabName="Shipped"
          emoji="🚢"
          onClick={() => setActiveTab(<Shipped />)}
        />
      </div>

      {activeTab}
      {/* <Introduction /> */}
    </>
  );
};

export default BetsPage;
