import * as Yup from 'yup';

export const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  date: Yup.date().nullable().required('Date of Birth is required'),
  country: Yup.string().required('Country is required'),
  school: Yup.string().required('School Name is required'),
  degree: Yup.string().required('Degree is required'),
  graduate: Yup.date().nullable().required('Graduation Date is required'),
  fyp: Yup.string().required('FYP Project is required'),
  profession: Yup.string().required('Profession is required'),
  company: Yup.string().required('Company is required'),
  skill: Yup.string().required('Skill is required'),
  experience: Yup.string().required('Experience is required'),
});
