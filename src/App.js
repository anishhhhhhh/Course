import React, { useState } from "react";

import AddInput from "./components/AddInput";

import "./App.css";
function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  // const [finalPrice, setFinalPrice] = useState("");
  const [addSubject, setAddSubject] = useState(0);
  const [addLesson, setAddLesson] = useState(0);
  const [addLecture, setAddLecture] = useState(0);

  const addSubjectHandler = () => {
    setAddSubject(addSubject + 1);
  };
  const deleteSubjectHandler = () => {
    setAddSubject(addSubject - 1);
  };
  const addLessonHandler = () => {
    setAddLesson(addLesson + 1);
  };
  const subjectArray = [];
  for (let i = 0; i < addSubject; i++) {
    subjectArray.push(
      <AddInput
        id = {addSubject}
        btnName="Add Lesson"
        deleteSubjectHandler={deleteSubjectHandler}
        addLessonHandler={addLessonHandler}
      />
    );
  }

  const addLectureHandler = () => {
    setAddLecture(addLecture + 1);
    console.log("hello");
  };
  const deleteLessonHandler = () => {
    setAddLesson(addLesson - 1);
  };

  const lessonArray = [];
  for (let i = 0; i < addLesson; i++) {
    lessonArray.push(
      <AddInput
        id = {addSubject+`.lesson`+i}
        btnName="Add Lecture"
        deleteSubjectHandler={deleteLessonHandler}
        addLectureHandler={addLectureHandler}
      />
    );
  }

  const deleteLectureHandler = () => {
    setAddLecture(addLecture - 1);
  };

  const lectureArray = [];
  for (let i = 0; i < addLecture; i++) {
    lectureArray.push(<AddInput id={addSubject+`.lesson`+i+`.lecture`+i} deleteLectureHandler={deleteLectureHandler} />);
  }

  let finalPrice = 0;
  const handleFinalPrice = (e) => {
    setDiscount(e.target.value);
    finalPrice = price - (price * discount) / 100;
  };

  return (
    <div className="App">
      <div className="container my-5">
        <form action="/course/addCourse" method="POST">
          {/* {% csrf_token %} */}
          <div className="form-group">
            <label htmlFor="id">Course Id</label>
            <input type="text" className="form-control" id="id" placeholder="Enter Course Id" name="id"/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Course Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Course Name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="short">Short Description</label>
            <input type="text" className="form-control" id="short" placeholder="Enter Course Short Description" name="short" />
          </div>
          <div className="form-group">
            <label htmlFor="long">Long Description</label>
            <input type="text" className="form-control" id="long" placeholder="Enter Course Long Description" name="long" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image Url</label>
            <input type="text" className="form-control" id="image" placeholder="Enter Image Url" name="image"/>
          </div>
          <div className="htmlForm-group">
            <label htmlFor="difficulty">Difficulty Level</label>
            <select className="form-control" id="difficulty" name="difficulty">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age Group</label>
            <div className="form-row">
              <div className="col-md-3">From: </div>
              <div className="col-md-9">To: </div>
              <div className="col-md-3">
                <input type="number" name="lowAge" id="age" />
              </div>
              <div className="col-md-9">
                <input type="number" name="highAge" id="age" />
              </div>
            </div>
          </div>
          <div className="htmlForm-group">
            <label htmlFor="board">Board</label>
            <select className="form-control" id="board" name="board">
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="StateBoard">State Board</option>
            </select>
          </div>
          <div className="htmlForm-group">
            <label htmlFor="instruction">Mode of Instruction</label>
            <select className="form-control" id="instruction" name="instruction">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="actual">Actual Price</label>
            <input
              type="number"
              className="form-control"
              id="actual"
              placeholder="Enter Course Actual Price"
              name="actual"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="discount">Discount</label>
            <input
              type="number"
              className="form-control"
              id="discount"
              placeholder="Enter Course Discount"
              name="discount"
              onChange={handleFinalPrice}
              value={discount}
            />
          </div>
          <div className="form-group">
            <label htmlFor="priafdis">Price After Discount</label>
            <input
              type="number"
              className="form-control"
              id="priafdis"
              placeholder="Course Price After Discount"
              name="priafdis"
              value={finalPrice}
              readOnly
            />
          </div>
          <div className="form-row my-2">
            <div className="sub col-md-4" id="sub"><a className="btn btn-danger" id="subject" onClick={addSubjectHandler}>Add Subject
            </a>{subjectArray}</div>
            <div className="lec col-md-4" id="less"><p>Lesson</p>{lessonArray}</div>
            <div className="less col-md-4" id="lec"><p>Lecture</p>{lectureArray}</div>
          </div>
          <button className="btn btn-danger" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
