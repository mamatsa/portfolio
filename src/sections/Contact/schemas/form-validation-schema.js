import * as yup from 'yup';

const validationSchema = yup
  .object({
    name: yup
      .string()
      .required('Name field is required.')
      .min(2, 'Name must contain at least 2 characters.'),

    email: yup
      .string()
      .required('Email field is required.')
      .email('Must be a valid email.'),
    message: yup
      .string()
      .required('Message field is required.')
      .min(3, 'Message must contain at least 3 characters.'),
  })
  .required();

export default validationSchema;
