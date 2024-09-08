import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My Coding <strong className="purple">Journey</strong>
      </h1>
      <h2 className="subheading" style={{ paddingBottom: "20px", textAlign: "center" }}>
        Balancing professional work during weekdays and enhancing skills through personal projects on weekends.
      </h2>
      <GitHubCalendar
        username="ankit-9009"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        showWeekdayLabels={true}
        showTotalCount={true}
      />
    </Row>
  );
}

export default Github;
