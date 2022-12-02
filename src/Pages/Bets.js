import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Callout, H1 } from "../Components/Components";
import { Section, SectionHeader } from "../Components/Section";

/**
 * @author
 * @function Bets
 **/

export const Bets = (props) => {
  return (
    <div className="w-full text-left px-8">
      <H1>🎲 Bets</H1>

      <Callout emoji="💡">
        Bets
        直譯成中文的話應該是賭博，但準確來說，我想表達的意思，更像是實驗🧪。
        <br />
        大型 projects，有機會 monetize，前期工作會投入金錢／大量時間，會歸類為
        Bets。 <br /> 有機會成功，有機會失敗，Who knows?
      </Callout>

      {/* original idea, pivot, 投入時間、成功、Current Progress、諗法、結果 */}

      <Section>
        <SectionHeader>imyt.io</SectionHeader>
        <p>Hello</p>
      </Section>

      <Section>
        <SectionHeader>StudyNomad</SectionHeader>
        <p>Hello</p>
      </Section>

      <Section>
        <SectionHeader>Planner</SectionHeader>
        <p>Hello</p>
      </Section>

      <Section>
        <SectionHeader>5am e-book</SectionHeader>
        <p>Hello</p>
      </Section>

      <Section>
        <SectionHeader>1% Circle</SectionHeader>
        <p>Hello</p>
      </Section>

      <Section>
        <SectionHeader>ActivityRing</SectionHeader>
        <p>Hello</p>
      </Section>

      <Section>
        <SectionHeader>HKStoicism</SectionHeader>
        <p>Hello</p>
      </Section>
    </div>
  );
};
