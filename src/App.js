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
    lectureArray.push(<AddInput deleteLectureHandler={deleteLectureHandler} />);
  }

  let finalPrice = 0;
  const handleFinalPrice = (e) => {
    setDiscount(e.target.value);
    finalPrice = price - (price * discount) / 100;
  };

  return (
    <div className="App">
      <div class="container my-5">
        <form action="/course/addCourse" method="POST">
          {/* {% csrf_token %} */}
          <div class="form-group">
            <label for="id">Course Id</label>
            <input
              type="text"
              class="form-control"
              id="id"
              placeholder="Enter Course Id"
              name="id"
            />
          </div>
          <div class="form-group">
            <label for="name">Course Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter Course Name"
              name="name"
            />
          </div>
          <div class="form-group">
            <label for="short">Short Description</label>
            <input
              type="text"
              class="form-control"
              id="short"
              placeholder="Enter Course Short Description"
              name="short"
            />
          </div>
          <div class="form-group">
            <label for="long">Long Description</label>
            <input
              type="text"
              class="form-control"
              id="long"
              placeholder="Enter Course Long Description"
              name="long"
            />
          </div>
          <div class="form-group">
            <label for="image">Image Url</label>
            <input
              type="text"
              class="form-control"
              id="image"
              placeholder="Enter Image Url"
              name="image"
            />
          </div>
          <div class="form-group">
            <label for="difficulty">Difficulty Level</label>
            <select class="form-control" id="difficulty" name="difficulty">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div class="form-group">
            <label for="age">Age Group</label>
            <div class="form-row">
              <div class="col-md-3">From: </div>
              <div class="col-md-9">To: </div>
              <div class="col-md-3">
                <input type="number" name="lowAge" id="age" />
              </div>
              <div class="col-md-9">
                <input type="number" name="highAge" id="age" />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="board">Board</label>
            <select class="form-control" id="board" name="board">
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="StateBoard">State Board</option>
            </select>
          </div>
          <div class="form-group">
            <label for="instruction">Mode of Instruction</label>
            <select class="form-control" id="instruction" name="instruction">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </select>
          </div>
          <div class="form-group">
            <label for="actual">Actual Price</label>
            <input
              type="number"
              class="form-control"
              id="actual"
              placeholder="Enter Course Actual Price"
              name="actual"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price}
              // value="0"
              // oninput="price_aft_disc()"
            />
          </div>
          <div class="form-group">
            <label for="discount">Discount</label>
            <input
              type="number"
              class="form-control"
              id="discount"
              placeholder="Enter Course Discount"
              name="discount"
              onChange={handleFinalPrice}
              value={discount}
              // value="0"
              // oninput="price_aft_disc()"
            />
          </div>
          <div class="form-group">
            <label for="priafdis">Price After Discount</label>
            <input
              type="number"
              class="form-control"
              id="priafdis"
              placeholder="Course Price After Discount"
              name="priafdis"
              value={finalPrice}
              readonly
            />
          </div>
          <div class="form-row my-2">
            <div class="sub col-md-4" id="sub">
              <a
                class="btn btn-danger"
                id="subject"
                onClick={addSubjectHandler}
              >
                Add Subject
              </a>
              {subjectArray}
            </div>
            <div class="lec col-md-4" id="less">
              <p>Lesson</p>
              {lessonArray}
            </div>
            <div class="less col-md-4" id="lec">
              <p>Lecture</p>
              {lectureArray}
            </div>
          </div>

          <button class="btn btn-danger" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
