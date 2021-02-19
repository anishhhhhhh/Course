import React from "react";

const AddInput = ({
  btnName,
  addLessonHandler,
  deleteSubjectHandler,
  deleteLessonHandler,
  addLectureHandler,
  deleteLectureHandler,
}) => {
  return (
    <div class="form-row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          name="subject"
          placeholder="New Subject"
        />
      </div>
      <a
        class="btn btn-danger delParam"
        onClick={
          deleteSubjectHandler || deleteLessonHandler || deleteLectureHandler
        }
      >
        -
      </a>
      <a
        class="btn btn-danger mx-2"
        onClick={addLessonHandler || addLectureHandler}
      >
        {btnName}
      </a>
    </div>
  );
};

export default AddInput;
