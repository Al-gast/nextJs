import { useRef, useState } from "react";
import { buildFeedbackPath, extractFeedback} from "./api/feedback";

function Feedback(props) {
  const [feedbackItems, setFeedbackItems] = useState(props.feedbackItems)
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const loadFeedbackHandler = () => {
    fetch("http://localhost:3000/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    console.log(enteredEmail, enteredFeedback, "test");

    const reqBody = { email: enteredEmail, feedback: enteredFeedback };

    fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      loadFeedbackHandler()
    alert("penambahan data succes")
  };

  return (
    <>
      <h1>Form Feedback</h1>
      <form action="">
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="email">Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button onClick={submitFormHandler}>Send Feedback</button>
      </form>
      <hr />
      {/* <button onClick={loadFeedbackHandler}>Load Feedback</button> */}
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.feedback}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath)

  return {
    props: {
      feedbackItems: data
    }
  }
}

export default Feedback;
