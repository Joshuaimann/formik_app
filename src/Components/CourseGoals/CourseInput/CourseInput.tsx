import Button from "../../UI/Button";
import { useState } from "react";
import { formikSchema, CourseInputs } from "../../Schemas/Schemas";
import styled from "styled-components";
import { Formik, Field } from "formik";

const FormControl = styled.div`
  margin: 0.5rem 0;
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;


  

const FormLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const CourseInput = (props: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  return (
    <Formik
      initialValues={{} as CourseInputs}
      validationSchema={formikSchema}
      //Do the formSubmitHandler
      onSubmit={() => {}}
    >
      {({ values }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onAddGoal(enteredValue);
          }}
        >
          <FlexDiv>
            <FormControl>
              <FormLabel> Course Goal </FormLabel>
              <Field
                variant="outlined"
                name="Course"
                value={values.Course}
                onChange={(e: any) => {
                  setEnteredValue(e.target.value);
                }}
              />
            </FormControl>


              <Button type="submit"> Add Goal</Button>

          </FlexDiv>
        </form>
      )}
    </Formik>
  );
};

export default CourseInput;
