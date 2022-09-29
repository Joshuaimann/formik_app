import styled from "styled-components"
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem"

const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseGoalList = (props: any) => {
    return (
        <UnorderedList>
            {props.items.map((goal: any) => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                    
                </CourseGoalItem>
        ))}
        </UnorderedList>
    )
}

export default CourseGoalList