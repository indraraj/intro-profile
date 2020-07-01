import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';

interface IInfoDetailComponentProps {
  companyName: string;
  startDate: Date;
  lastDate?: Date;
  location: string;
  details: string;
}

export const InfoDetailComponent: React.FunctionComponent<IInfoDetailComponentProps> = (
  props
) => {
  let start = moment(props.startDate);
  let last = moment(props.lastDate);

  let years = last.diff(start, 'years');
  let months = last.diff(start, 'months') % 12;

  let lastDay = props.lastDate ? props.lastDate.getMonth()+1+'/'+props.lastDate.getFullYear() : 'present';

  return (
    <>
      <div className={"mycontentInfo"}>
        <div>
          <div className={"mycontentInfoIcon"}>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>

          <span>{props.companyName}</span>
        </div>
        <div>
          <div className={"mycontentInfoIcon"}>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <span>{`${props.startDate.getMonth()+1}/${props.startDate.getFullYear()} - ${lastDay} (${years} Years ${months} Months)`}</span>
        </div>
        <div>
          <div className={"mycontentInfoIcon"}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <span>{props.location}</span>
        </div>
      </div>
      <div className={"mycontentDescription"}>
        <span>{props.details}</span>
      </div>
    </>
  );
};
