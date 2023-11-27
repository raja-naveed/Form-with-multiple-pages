import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Emails must match')
    .required('Confirm email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  dateOfBirth: Yup.date().nullable().required('Date of birth is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  nic: Yup.string().required('National ID number (CNIC) is required'),
  address1: Yup.string().required('Address 1 is required'),
  address2: Yup.string(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State/Region is required'),
  zipCode: Yup.string().required('ZIP code/Post code is required'),
  qualifications: Yup.string().required('Please select your qualifications'),
  yearOfCompletion: Yup.string().required('Please select year of completion'),
  university: Yup.string().required('University name is required'),
  experience: Yup.string().required('Experience is required'),
  employement: Yup.string().required("Employment status is required"),

});

export default schema;
