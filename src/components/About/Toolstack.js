// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiAzuredevops,
  SiPycharm,
  SiAndroidstudio,
  SiCpanel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm /> {/* PyCharm */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /> {/* Android Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCpanel /> {/* cPanel */}
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops /> {/* Azure */}
      </Col>
    </Row>
  );
}

export default Toolstack;
