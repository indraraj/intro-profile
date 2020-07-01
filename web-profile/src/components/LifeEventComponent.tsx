import React, { FunctionComponent } from "react";

import styles from "./LifeEventComponent.module.css";

interface ILifeEventComponentProps {
  content: string;
}

export const LifeEventComponent: FunctionComponent<ILifeEventComponentProps> = (
  props
) => {
  return (
    <div className={"expLists"}>
      <div className={styles.datalist}>
        <div className={styles.content}>
          <span className={styles.tooltiptext}>{props.content}</span>
        </div>
      </div>
    </div>
  );
};
