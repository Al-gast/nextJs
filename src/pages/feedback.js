import { useRef } from "react";

function Feedback() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
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
    </>
  );
}

export default Feedback;
