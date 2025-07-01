import React from "react";

function AboutSections() {
  const sectionStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  };

  const innerCardStyle = {
    width: "80%",
    backgroundColor: "#1e1e2f",
    padding: "20px",
    borderRadius: "12px",
    color: "white",
    textAlign: "center",
  };

  const buttonStyle = {
    marginLeft: "10px",
    backgroundColor: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "5px 10px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#aaa",
    cursor: "not-allowed",
    pointerEvents: "none",
  };

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Education</h3>
          <div>
            <strong>Vellore Institute of Technology</strong>, Chennai (2022 - 2026) – B.Tech (Computer Science and Engineering), GPA: 8.78
            <br />
            <strong>Delhi Public School</strong>, Roorkee (2021 - 2022) – 12th Class, Percentage: 92
            <br />
            <strong>Delhi Public School</strong>, Roorkee (2019 - 2020) – 10th Class, Percentage: 94
          </div>
        </div>
      </div>

      <br />
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Research Work</h3>
          <p>
            <strong>Smart Home Pet Feeder</strong> – Designed an IoT-enabled feeder using
            Arduino, load cells, ultrasonic sensors, and Wi-Fi for automated and remote
            pet feeding.
          </p>
        </div>
      </div>

      <br />
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Professional Certificate</h3>
          <p>
            <strong>AWS Cloud Practitioner (May 2025)</strong> – Demonstrated understanding of
            core AWS services like EC2, S3, RDS, IAM, etc.
          </p>
        </div>
      </div>

      <br />
      <div style={sectionStyle}>
        <div style={innerCardStyle}>
          <h3 className="purple">Courses</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li key="react-course">
              <strong>Developing Frontend Apps with React (Coursera)</strong>
              <br /><br />
            </li>
            <li key="sql-course">
              <strong>Databases and SQL for Data Science with Python (Coursera)</strong>
              
              <br /><br />
            </li>
            <li key="backend-course">
              <strong>Introduction to Back-End Development (Coursera)</strong>
              
              <br /><br />
            </li>
            <li key="python-course">
              <strong>Complete Python Developer (Udemy)</strong>
              
              <br /><br />
            </li>
            <li key="aws-course">
              <strong>AWS Solutions Architect (Udemy)</strong>
             
              <br /><br />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutSections;
