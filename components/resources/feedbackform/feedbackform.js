import React from "react";
import Title from "../../general/title";
import "./feedbackform.css";

const FeedbackForm = () => (
  <div className="feedback-form-page">
    <Title width={340} title="Feedback Form" />
    <div className="wide-feedback-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScYnwkipbWdNXLR6EDBotfMoBWvSd4nNCYmMthnpS88E9OszA/viewform?embedded=true"
        width="700"
        height="1200"
        frameBorder="0"
        scrolling="yes"
        type="text/javascript"
        title="Feedback Form"
      ></iframe>
    </div>
    <div className="narrow-feedback-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScYnwkipbWdNXLR6EDBotfMoBWvSd4nNCYmMthnpS88E9OszA/viewform?embedded=true"
        width="360"
        height="1200"
        frameBorder="0"
        scrolling="yes"
        type="text/javascript"
        title="Feedback Form"
      ></iframe>
    </div>
  </div>
);

export default FeedbackForm;
