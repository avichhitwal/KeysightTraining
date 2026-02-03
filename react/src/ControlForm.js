import React, { useState } from 'react';
 
function StudentForm() {
 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [gender, setGender] = useState('');
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState(null);
 
    const validate = () => {
        let err = {};
 
        if (!name) err.name = "Name required";
        if (!email) err.email = "Email required";
        if (!age) err.age = "Age required";
        if (!course) err.course = "Select course";
        if (!gender) err.gender = "Select gender";
 
        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const clearForm = () => {
        setName("");
        setEmail("");
        setAge("");
        setCourse("React");
        setGender("");
        setTerms(false);
  };
 
    const submitHandler = (event) => {
        event.preventDefault();
 
        if (validate()) {
            setData({ name, email, age, course, gender });
 
            setName('');
            setEmail('');
            setAge('');
            setCourse('');
            setGender('');
            setTerms(false);
            setErrors({});
        }
    };
 
    return (
        <div>
            <h2>Student Admission Form</h2>
 
            <form onSubmit={submitHandler}>
                <label>Student Name:</label>    
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> <br/>
                <label>Email ID:</label>    
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br/>
                <label>Age:</label> 
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/> <br/>
 
                <select value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option>Select Course</option>
                    <option>React</option>
                    <option>Angular</option>
                    <option>Java</option>
                    <option>Python</option>
                </select>
 
                <div>
                    <input type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}/> Male
                    <input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)}/> Female
                </div>
 
                <div>
                    <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)}/> Accept Terms & Conditions
                </div>
                <button disabled={!terms}>Submit</button> <br/>
                <button onClick={clearForm}>Clear</button>
            </form>
 
            {data && (
                <div>
                    <h3>Submitted Data</h3>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Age: {data.age}</p>
                    <p>Course: {data.course}</p>
                    <p>Gender: {data.gender}</p>
                </div>
            )}
        </div>
    );
}
 
export default StudentForm;






// import React, { useState } from "react";

// const StudentAdmissionForm = () => {
//   const [studentName, setStudentName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");
//   const [course, setCourse] = useState("React");
//   const [gender, setGender] = useState("");
//   const [termsAccepted, setTermsAccepted] = useState(false);

//   const [errors, setErrors] = useState({
//     studentName: "",
//     email: "",
//     age: "",
//     gender: "",
//   });

//   const validateForm = () => {
//     const newErrors = { ...errors };

//     if (!studentName) {
//       newErrors.studentName = "Student Name is required";
//     } else {
//       newErrors.studentName = "";
//     }

//     if (!email) {
//       newErrors.email = "Valid Email is required";
//     } else {
//       newErrors.email = "";
//     }

//     if (!age || isNaN(age)) {
//       newErrors.age = "Age must be a number";
//     } else {
//       newErrors.age = "";
//     }

//     if (!gender) {
//       newErrors.gender = "Please select a gender";
//     } else {
//       newErrors.gender = "";
//     }

//     setErrors(newErrors);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     validateForm();

//     if (
//       !errors.studentName &&
//       !errors.email &&
//       !errors.age &&
//       !errors.gender &&
//       termsAccepted
//     ) {
//       alert("Form Submitted Successfully!");
//       clearForm();
//     }
//   };

//   const clearForm = () => {
//     setStudentName("");
//     setEmail("");
//     setAge("");
//     setCourse("React");
//     setGender("");
//     setTermsAccepted(false);
//   };

//   changeHandler = (event, a) => {
//         let name = event.target.name;
//         let val = event.target.value;

//         if(name === "") {
//             if(!Number(val)) {
//                 alert("not a number");
//             }
//             this.setState({[name] : val});
//         }
//     }

//   return (
//     <div>
//       <h2>Student Admission Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Student Name:</label>
//           <input type="text" name="studentName" value={studentName} onChange={changeHandler()}/>
//         </div>

//         <div>
//           <label>Email ID:</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onBlur={validateForm}
//           />
//           {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//         </div>

//         <div>
//           <label>Age:</label>
//           <input
//             type="text"
//             name="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             onBlur={validateForm}
//           />
//           {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
//         </div>

//         <div>
//           <label>Course:</label>
//           <select
//             name="course"
//             value={course}
//             onChange={(e) => setCourse(e.target.value)}
//           >
//             <option value="React">React</option>
//             <option value="Angular">Angular</option>
//             <option value="Java">Java</option>
//             <option value="Python">Python</option>
//           </select>
//         </div>

//         <div>
//           <label>Gender:</label>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               checked={gender === "Male"}
//               onChange={(e) => setGender(e.target.value)}
//             />
//             Male
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               checked={gender === "Female"}
//               onChange={(e) => setGender(e.target.value)}
//             />
//             Female
//           </label>
//           {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
//         </div>

//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="terms"
//               checked={termsAccepted}
//               onChange={() => setTermsAccepted(!termsAccepted)}
//             />
//             Accept Terms & Conditions
//           </label>
//         </div>

//         <div>
//           <button type="submit" disabled={!termsAccepted}>Submit</button>
//         </div>
//       </form>

//       {studentName && (
//         <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
//           <h3>Form Submission Details:</h3>
//           <p><strong>Student Name:</strong> {studentName}</p>
//           <p><strong>Email ID:</strong> {email}</p>
//           <p><strong>Age:</strong> {age}</p>
//           <p><strong>Course:</strong> {course}</p>
//           <p><strong>Gender:</strong> {gender}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentAdmissionForm;
