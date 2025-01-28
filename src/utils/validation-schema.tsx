import * as Yup from 'yup';


// contact_schema
export const contact_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  number: Yup.string().required().min(11).label("Phone"),
  comment: Yup.string().required().min(20).label("Comment"),
});

export const register_schema = Yup.object().shape({
  name: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
//forgot schema
export const forgotten_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email")
});
//blog schema
export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comment: Yup.string().required().min(20).label("Comment")
});
//Profile update schema 
export const ProfileUpdateSchema = Yup.object().shape({
  firstName: Yup.string().required().label("firstName"),
  gender: Yup.string().required().label("Gender"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.number().required().min(11).label("Phone number")
});
//Refund schema
export const refundSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  productId: Yup.string().required().label("Product Id"),
  paymentId: Yup.string().required().label("Payment Id"),
  phone: Yup.number().required().min(11).label("Phone"),
  email: Yup.string().required().email().label("Email"),
  productName: Yup.string().required().label("Product Name"),
  message: Yup.string().required().min(20).label("Message"),
});

// review_schema
export const review_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  massage: Yup.string().required().min(20).label("Message"),
});