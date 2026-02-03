import React, { useRef } from 'react';
 
function FeedbackForm() {
 
    const nameRef = useRef();
    const courseRef = useRef();
    const feedbackRef = useRef();
    const ratingRef = useRef();
 
    const submitHandler = (e) => {
        e.preventDefault();
 
        const name = nameRef.current.value;
        const course = courseRef.current.value;
        const feedback = feedbackRef.current.value;
        const rating = ratingRef.current.value;
 
        alert(
            " Student Name: " + name  +
            " Course Name: " + course  +
            " Feedback: " + feedback +
            " Rating: " + rating
        );
 
        nameRef.current.value = "";
        courseRef.current.value = "";
        feedbackRef.current.value = "";
        ratingRef.current.value = "";
    };
 
    return (
        <div>
            <h2>Course Feedback Form</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Student Name" ref={nameRef} />
                <input type="text" placeholder="Course Name" ref={courseRef} />
                <textarea placeholder="Feedback Message" ref={feedbackRef}></textarea>
                <input type="number"   ref={ratingRef} />
                <button type="submit">Submit Feedback</button>
 
            </form>
        </div>
    );
}
 
export default FeedbackForm;


// import React, { useRef } from "react";

// function CourseFeedbackForm() {
//   // Using useRef for form inputs
//   const nameRef = useRef(null);
//   const courseRef = useRef(null);
//   const feedbackRef = useRef(null);
//   const ratingRef = useRef(null);

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Getting the values from refs
//     const name = nameRef.current.value;
//     const course = courseRef.current.value;
//     const feedback = feedbackRef.current.value;
//     const rating = ratingRef.current.value;

//     // Display feedback data in an alert
//     alert(`Feedback Submitted:
//       Name: ${name}
//       Course: ${course}
//       Feedback: ${feedback}
//       Rating: ${rating}`);
    
//     // Reset the form fields
//     nameRef.current.value = "";
//     courseRef.current.value = "";
//     feedbackRef.current.value = "";
//     ratingRef.current.value = "";
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Student Name:
//           <input type="text" ref={nameRef} />
//         </label>
//       </div>
      
//       <div>
//         <label>
//           Course Name:
//           <input type="text" ref={courseRef} />
//         </label>
//       </div>
      
//       <div>
//         <label>
//           Feedback Message:
//           <textarea ref={feedbackRef} />
//         </label>
//       </div>
      
//       <div>
//         <label>
//           Rating (1–5):
//           <input type="number" ref={ratingRef} min="1" max="5" />
//         </label>
//       </div>
      
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default CourseFeedbackForm;
