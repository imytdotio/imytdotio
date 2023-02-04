import React from "react";
import { Section } from "../Components/Section";

/**
 * @author
 * @function Bets
 **/
{
  /* original idea, pivot, 投入時間、成功、Current Progress、諗法、結果 */
}

const Container = (props) => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center w-full md:w-2/3 mb-4">
        {props.header}
      </h2>
      {props.children}
    </div>
  );
};

const BasicStatistics = (props) => {
  return (
    <Section header="Basic Statistics">
      <ul>
        {props.currentProgress && <li>現時壯況：{props.currentProgress}</li>}
        {props.timeInvested && <li>投入時間：{props.timeInvested}</li>}
      </ul>
    </Section>
  );
};

const H3 = (props) => {
  return (
    <h3 className="font-bold text-center w-full md:w-2/3">{props.title}</h3>
  );
};

export const Imytdotio = (props) => {
  return (
    <Container header="imyt.io">
      <BasicStatistics
        timeInvested="Jul 2021 - Jan 2023"
        currentProgress="🟡 Pivotting"
      />
      <Section header="Original Idea">
        <p>
          因為我好鐘意睇有關自我成長類別嘅內容，所以就將學習所得嘅內容分享俾大眾。其中內容包括
          <span className="font-bold">
            習慣建立、自學、自律、專注工作、提高生產力、目標管理、時間管理，
          </span>
          等等嘅內容。另外，因為我閱讀時都會寫律記，我亦會同時分享我讀書寫低嘅筆記，同大家分享。
        </p>
      </Section>
      <Section header="Outcome">
        <p>
          經營咗 1 年半，有 2000 個
          followers，其實都真係算少，以我嘅更新數量同埋日數嚟計，2000
          人真係唔算十分成功。
        </p>
        <p>
          但我卻因為呢個 account
          而激勵自己進步咗好多。譬如我會刻意讀多啲書，刻意再自學多啲，刻意了解更多點樣建立習慣，刻意
          input 更多。
        </p>
      </Section>
      <Section header="Pivot">
        <p>
          由於繼續用 imyt.io 呢個 account
          去更新，似乎成積未如理想。但我仍然想分享有關自我成長嘅內容，所以，一切內容會移師去
          One Percent Circle 嗰邊，而 imyt.io 就會主力分享有關 YT
          我自己嘅內容。譬如係我自學 programming 嘅路，我嘗試寫 App
          賺錢嘅過程等等。
        </p>
      </Section>
    </Container>
  );
};

export const OPC = (props) => {
  return (
    <Container header="One Percent Circle">
      <BasicStatistics currentProgress="🛠 Building" />
      <Section header="Original Idea">
        <p>
          因為我每朝都會 05:00 起身，咁 share 喺 IG 發現原來都有唔少人都想一齊
          05:00
          起身。所以最原本嘅諗法係聚集一班人，一齊建立習慣，譬如係早起、閱讀、飲水等等。
        </p>
      </Section>
      <Section header="Pivot">
        <p>我而家整緊啲 Slides 去回應唔同問題，2023 下半年應該會 launch.</p>
      </Section>
    </Container>
  );
};

export const Changelog = (props) => {
  return (
    <Container header="Changelog.today">
      <BasicStatistics
        timeInvested="Jan 2023 - Now"
        currentProgress="🛠 Building"
      />
      <Section header="Original Idea">
        <p>
          我有太多想測試的事情了。其實我學習 programming
          也是為了這樣：把腦中一切的想法都用 programme
          令他們成真。而把這些實驗都記錄下來，並在未來隨時閱讀，就像是時間囊一樣回看過程，一定會十分滿足。
        </p>
      </Section>
    </Container>
  );
};

export const BulletWriter = (props) => {
  return (
    <Container header="BulletWriter">
      <BasicStatistics currentProgress="🛠 Building" />
      <Section header="Original Idea">
        <p>
          我好鐘意{" "}
          <a href="https://thenetworkstate.com" target="_blank">
            thenetworkstate.com
          </a>{" "}
          嘅 UI，我覺得 design 得好靚，而且其實適用於每一本書，所以想用呢個
          design 整成一個 app，俾任何人都可以用嚟寫書同埋閱讀。所有書都會以好
          atomic 嘅方式 store 喺 database。書 → Chapter → Section
        </p>
      </Section>
    </Container>
  );
};
export const Prolific = (props) => {
  return (
    <Container header="Prolific">
      <BasicStatistics />
      <Section header="outcome">
        <p>售出：0</p>
        <p>
          呢個係我第一個 launch 嘅 product，嘗試分享我點樣做到 1 日 1 post。我
          launch 之前有嘗試做 IG 宣傳，啲 post 都係圍繞呢個內容，講點樣做
          content creation。但嗰時得 1000 followers 都冇，你話好唔好笑。同{" "}
          <a href="https://www.youtube.com/watch?v=9dkwf-hTJ_A" target="_blank">
            Ben 哥教人做 youtuber 差唔多。
          </a>
        </p>
      </Section>
    </Container>
  );
};

export const EBook = (props) => {
  return (
    <Container header="5 am e-book">
      <BasicStatistics timeInvested="6 hours" />
    </Container>
  );
};

export const Planner = (props) => {
  return <Container header="Planner"></Container>;
};

export const StudyNomad = (props) => {
  return <Container header="Study Nomad"></Container>;
};

export const ActivityRing = (props) => {
  return (
    <Container header="Activity Ring">
      <BasicStatistics timeInvested="2 weeks" />
    </Container>
  );
};
export const MarvelousApps = (props) => {
  return (
    <Container header="Marvelous Apps">
      <Section header="Original Idea">
        <p>
          最原本會想做呢堆 Marvelous Apps 係因為想練習自己嘅 programming
          skills。每學完一個位，就會想練吓啲
          skill。以前都會嘅，但係係未去到一個有足夠技能嘅位就想 build
          一啲超乎我能力嘅 App。而家我學到少少，就 build
          啲練嘢，呢三個就係其中三個。
        </p>
        <p>
          但有趣嘅係，其實我都仲未 build 到完成呢三個，因為喺過程中，我有又其他
          Ideas，咁我就又開新 project，又試新嘢。Changelog 同埋 e-book
          都係例子。
        </p>
      </Section>
      <H3 title="Marvelous Calculator" />
      <H3 title="Marvelous Todo" />
      <H3 title="Marvelous Weather" />
    </Container>
  );
};

export const HKStoicism = (props) => {
  return <Container header="HKStoicism"></Container>;
};

export const ProgrammingCerts = (props) => {
  return <Container header="Programming Certificates"></Container>;
};
export const DataScience = (props) => {
  return <Container header="Data Science"></Container>;
};
