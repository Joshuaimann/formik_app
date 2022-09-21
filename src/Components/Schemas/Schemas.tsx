import * as yup from 'yup'

export const formikSchema = yup.object().shape({
    Course: yup.string().required('Required *')
});



export interface CourseInputs {
    Course: String
}