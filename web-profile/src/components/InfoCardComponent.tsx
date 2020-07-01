import React, { FunctionComponent } from "react";

import styles from "./InfoCardComponent.module.css";

interface IInfoCardComponentProps {
  isLeft: boolean;
  cardHeading: string;
}

export const InfoCardComponent: FunctionComponent<IInfoCardComponentProps> = (
  props
) => {
  return (
    <div className={"expLists"}>
      <div className={props.isLeft ? styles.datalistLeft : styles.datalist}>
        <div className={props.isLeft ? styles.contentLeft : styles.content}>
          <div
            className={props.isLeft ? styles.mycontentLeft : styles.mycontent}
          >
            <div className={"header"}>
              <h4 className={"headerText"}>{props.cardHeading}</h4>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
