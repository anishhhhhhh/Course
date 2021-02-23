import React from "react";

const AddInput = ({
  id,
  btnName,
  addLessonHandler,
  deleteSubjectHandler,
  deleteLessonHandler,
  addLectureHandler,
  deleteLectureHandler,
}) => {
  return (
    <div className="form-row my-2">
      <div className="col">
        <input type="text" className="form-control" name={`subject`+id} placeholder="New Subject" />
      </div>
      <a className="btn btn-danger delParam" onClick={deleteSubjectHandler || deleteLessonHandler || deleteLectureHandler}>
        -
      </a>
      <a className="btn btn-danger mx-2" onClick={addLessonHandler || addLectureHandler}>{btnName}</a>
    </div>
  );
};

export default AddInput;
