import * as yup from 'yup';

const validationSchema = yup
  .object({
    name: yup
      .string()
      .required('contact.errors.name.required')
      .min(2, 'contact.errors.name.min'),

    email: yup
      .string()
      .required('contact.errors.email.required')
      .email('contact.errors.email.valid'),
    message: yup
      .string()
      .required('contact.errors.message.required')
      .min(3, 'contact.errors.message.min'),
  })
  .required();

export default validationSchema;
