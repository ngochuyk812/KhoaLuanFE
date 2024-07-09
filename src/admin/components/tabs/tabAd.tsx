import React from "react";
import styles from "./tab.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface TabAdProps {
  icon: React.ReactNode;
  tabName: string;
}

const TabAd: React.FC<TabAdProps> = ({ icon, tabName }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tabLeft")}>
        <div className={cx("icon")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="var(--NavItem-icon-color)"
            viewBox="0 0 256 256"
            font-size="var(--joy-fontSize-xl)"
          >
            <path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z"></path>
          </svg>
        </div>
        <span className={cx("name")}>{tabName}</span>
      </div>
      <div className={cx("tabRight")}>
        <div className={cx("iconOpen")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            font-size="var(--joy-fontSize-sm)"
          >
            <path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TabAd;
