import { useState } from "react";
import CourseGoalList from "./Components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./Components/CourseGoals/CourseInput/CourseInput";
import styled from "styled-components";

const GoalForm = styled.div`
  width: 30rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Goals = styled.div`
  width: 35rem;
  max-width: 90%;
  margin: 3rem auto;
`;
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHAndler = (enteredText: string) => {
    if (enteredText) {
      setCourseGoals((prevGoals) => {
        const updatedGoals = [...prevGoals];
        updatedGoals.unshift({
          text: enteredText,
          id: Math.random().toString(),
        });
        return updatedGoals;
      });
    }
    else {
      return courseGoals;
    }
  };

  const deleteItemHandler = (goalId: any) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  ); 

    if (courseGoals.length > 0) {
      content = <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} /> 
    } else {
      
      content =  <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
      
    }
    
  return (
    <>
      <GoalForm>
        <CourseInput onAddGoal={addGoalHAndler} />
      </GoalForm>
      <Goals>
        {content}
      </Goals>

    </>
  );
};

export default App;
