import Button from "../../UI/Button";
import * as Yup from "yup";
//import { useState } from "react";
import { CourseInputs } from "../../Schemas/Schemas";
import styled from "styled-components";
import { Formik, Field, Form} from "formik";

const FormControl = styled.div`
  margin: 0.5rem 0;
  }
`;
const formikSchema = Yup.object().shape({
  Course: Yup.string().required("Required *"),
});

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


  return (
    <Formik
      initialValues={{} as CourseInputs}
      validationSchema={formikSchema}
      //Do the formSubmitHandler
      onSubmit={() => {}}
    >
      {({ values, setFieldValue }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (values.Course.trim().length === 0) {
              alert('Please enter some text')
            } else {
              props.onAddGoal(values.Course);
            }
          }}
        >
          <FlexDiv>
            <FormControl>
              <FormLabel>Course Goal</FormLabel>
              <Field
                variant="outlined"
                type="text"
                name="Course"
                value={values.Course}
                onChange={(e: any) => {
                  setFieldValue("Course", e.target.value);
                }}
              />
            </FormControl>
            <Button type="submit"> Add Goal</Button>
          </FlexDiv>
        </Form>
      )}
    </Formik>
  );
};

export default CourseInput;
