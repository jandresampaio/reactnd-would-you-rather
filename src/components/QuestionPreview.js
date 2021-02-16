import React from "react";

export default function QuestionPreview(props) {
  const { question, onGotoQuestion } = props;
  return (
    <div class="question-preview">
      <div className="question-summary">
        <div className="question-title">Would you rather...</div>
        <div className="question-preview-text">
          ...{question.optionOne.text}
        </div>
      </div>
      <div className="question-navigate">
        <button onClick={(e) => onGotoQuestion(e, question.id)}>
          View Poll
        </button>
      </div>
    </div>
  );
}