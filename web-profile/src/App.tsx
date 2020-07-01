import React from "react";
import debounce from "lodash.debounce";
import "./App.css";
import Image from "./Assets.tsx/assets";
import { InfoCardComponent } from "./components/InfoCardComponent";
import { InfoDetailComponent } from "./components/InfoDetailComponent";
import { LifeEventComponent } from "./components/LifeEventComponent";

export interface IExperiance {
  order?: number;
  position?: string;
  company?: string;
  joinDate?: Date;
  lastDate?: Date;
  location?: string;
  details: string;
  lifeEvent: boolean;
}

const dummyData: IExperiance[] = [
  {
    order:1,
    position: "Senior developer",
    company: "Red hat",
    joinDate: new Date("2019-10-07"),
    location: "Bangalore",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    lifeEvent: false
  },
  {
    order:2,
    position: "Senior software developer",
    company: "Altron",
    joinDate: new Date("2019-09-29"),
    lastDate: new Date("2019-10-05"),
    location: "Bangalore",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    lifeEvent: false
  },
  {
    order:3,
    position: "Senior Associate Technology",
    company: "Publicis Sapient",
    joinDate: new Date("2019-09-16"),
    lastDate: new Date("2019-09-27"),
    location: "Bangalore",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    lifeEvent: false
  },
  {
    details: 'Moved to Bangalore',
    lifeEvent: true
  },
  {
    order:4,

    position: "Analyst Programmer",
    company: "Fidelity",
    joinDate: new Date("2018-04-02"),
    lastDate: new Date("2019-09-13"),
    location: "Gurgaon",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`,
  lifeEvent: false
  },
  {
    order:5,

    position: "Application Development analyst",
    company: "Accentue",
    joinDate: new Date("2017-12-26"),
    lastDate: new Date("2018-03-29"),
    location: "Gurgaon",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`,
  lifeEvent: false
  },
  {
    details: 'Moved to Gurgaon',
    lifeEvent: true
  },
  {
    order:6,

    position: "Software developer",
    company: "Tech Mahindra",
    joinDate: new Date("2015-07-02"),
    lastDate: new Date("2017-12-04"),
    location: "Noida",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`,
  lifeEvent: false
  },
  {
    details: 'Born into this world',
    lifeEvent: true
  },
];

function App() {
  const [infoList, setInfoList] = React.useState<IExperiance[]>(
    dummyData.slice(0, 3)
  );
  // Binds our scroll event handler
  window.onscroll = debounce(() => {
    // Checks that the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight
    ) {
      if (infoList.length < dummyData.length) {
        const infoListCopy = [...infoList, dummyData[infoList.length]];
        setInfoList(infoListCopy);
      }
    }
  }, 100);

  return (
    <div className="App">
      <div className="comp">
        <div>
          <img className="userImage" src={Image.pic} alt="UserImage" />
        </div>

        <div className="temp">
          {infoList.map((listItem) => {
            let isLeft = false;
            if (listItem.order) {
              if (listItem.order % 2 === 0) {
                isLeft = true;
              }
            }
            let returnVal;
            if(listItem.lifeEvent){
              returnVal = <LifeEventComponent 
              key={listItem.details}
              content={listItem.details}></LifeEventComponent>

            }else{
              returnVal = <InfoCardComponent
              key={listItem.joinDate && listItem.company ? listItem.joinDate + listItem.company : ''}
              isLeft={isLeft}
              cardHeading={listItem.position || ''}
            >
              <InfoDetailComponent
                companyName={listItem.company || ''}
                startDate={listItem.joinDate || new Date()}
                lastDate={listItem.lastDate ? listItem.lastDate : undefined}
                location={listItem.location || ''}
                details={listItem.details || ''}
              ></InfoDetailComponent>
            </InfoCardComponent>
            }
            return returnVal;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
