import React from "react";

export const Met_ExamPattern = () => {
  return (
    <div>
      <ul className="ExamsUl_list">
        <li>
          <b>Mode of exam: </b> Computer-Based Test
        </li>
        <li>
          <b>Medium of paper:</b> English
        </li>
        <li>
          <b>Duration of exam:</b> 2 Hours
        </li>
        <li>
          {" "}
          <b>Number of questions:</b> 240
        </li>
        <li>
          <b>Marking scheme:</b>
          <br />
         For Multiple Choice Questions
          <ul>
            <li>4 marks will be given for every correct answer</li>
            <li>1 mark will be deducted for every incorrect answer</li>
          </ul>
          <br />
          For Numerical Answer Type Questions
          <ul>
            <li>4 marks will be given for every correct answer</li>
            <li>No marks will be deducted for every incorrect answer</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
