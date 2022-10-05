import { Card } from "antd";
import React from "react";
import "./style.scss";
import { Column } from "@ant-design/plots";
import data from "../../DemoData/statistics.json";
import NewMembers from "../common/Assets/Images/newMembers.png";
import Places from "../common/Assets/Images/location.png";
import Support from "../common/Assets/Images/supportMembers.png";
import Tags from "../common/Assets/Images/tags.jpeg";
import { RingProgress } from "@ant-design/plots";
import Cards from "./components/Cards";

export default function Dashboard() {

  const config = {
    data,
    width: "10",
    xField: "city",
    yField: "value",
    seriesField: "type",
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };
  
  const config2 = {
    height: 160,
    width: 160,
    autoFit: false,
    percent: 0.8,
    color: ["#6495fa", "#E8EDF3"],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: "#363636",
          fontSize: "12px",
          lineHeight: "14px",
        },

        formatter: () =>  "Followers",
      },
    },
  };
 
  return (
    <div id="dashboard">
      <div style={{ display: "flex", width: "100%" }}>
        <Card
          className="daily-oveerview"
          title="Daily Overview"
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="cardContainer">
            {" "}
            <div className="cardItem">
              <img alt="icon" src={NewMembers} />
              <h1 className="value">10,495</h1>
              <span className="label">New Members</span>
            </div>
            <div className="cardItem">
              <img alt="icon" src={Places} />

              <h1 className="value">30,942</h1>
              <span className="label">Places Added</span>
            </div>{" "}
            <div className="cardItem">
              <img alt="icon" src={Support} />

              <h1 className="value">45,269</h1>
              <span className="label">support Members</span>
            </div>{" "}
            <div className="cardItem">
              <img alt="icon" src={Tags} />

              <h1 className="value">20,965</h1>
              <span className="label">Tags Used</span>
            </div>
          </div>
        </Card>
        <Card
          className="followers"
          title={null}
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="ringContainer">
            <RingProgress {...config2} />
            <span className="title">842K</span>

            <span className="sub">Close to react 1000k followers!</span>
          </div>
        </Card>
      </div>

      <Card
        className="statistics"
        title="Statistics"
        bordered={false}
        style={{ width: 300 }}
      >
        <Column {...config} />
      </Card>
      
        <Cards />

        
     
    </div>
  );
}
