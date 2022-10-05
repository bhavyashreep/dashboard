import React from "react";
import { Card, Row, Col } from "antd";
import FeatherIcon from "feather-icons-react";
import Graph from "./Graph";

export default function Cards() {
  return (
    <Row gutter={12}>
      <Col span={12}>
        <Row gutter={12}>
          {" "}
          <Col span={12}>
            {" "}
            <Card
              className="statistics"
              bordered={false}
              style={{
                width: 300,
                height: 240,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="cardItem">
                {/* <img alt="icon" src={NewMembers} /> */}
                <FeatherIcon className="icons" icon="paperclip" />
                <h1 className="value">900</h1>
                <span className="label">Attached Files</span>
              </div>{" "}
            </Card>
          </Col>
          <Col span={12}>
            {" "}
            <Card
              className="statistics"
              bordered={false}
              style={{
                width: 300,
                height: 240,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="cardItem">
                {/* <img alt="icon" src={NewMembers} /> */}
                <FeatherIcon className="icons" icon="message-square" />
                <h1 className="value">2499</h1>
                <span className="label">Comments</span>
              </div>{" "}
            </Card>
          </Col>
        </Row>
        <Row gutter={12}>
          {" "}
          <Col span={12}>
            {" "}
            <Card
              className="statistics"
              bordered={false}
              style={{
                width: 300,
                height: 240,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="cardItem">
                {/* <img alt="icon" src={NewMembers} /> */}
                <FeatherIcon className="icons" icon="eye" />

                <h1 className="value">10,495</h1>
                <span className="label">Total Views</span>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            {" "}
            <Card
              className="statistics"
              bordered={false}
              style={{
                width: 300,
                height: 240,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="cardItem">
                <FeatherIcon className="icons" icon="user-plus" />

                {/* <img alt="icon" src={NewMembers} /> */}
                <h1 className="value">1200</h1>
                <span className="label">New Posts</span>
              </div>{" "}
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={12}><Card
          className="dottedGraph"
          title="Followers"
          bordered={false}
          // style={{ width: 300 }}
        >
          <div>
            <Graph />
          </div>
        </Card></Col>
    </Row>
  );
}
