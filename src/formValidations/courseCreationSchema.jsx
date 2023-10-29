import * as Yup from 'yup';

export const courseCreationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    subtitle: Yup.string().required("Sub Title is required"),
    category: Yup.number()
    .typeError("Category must be a number")
    .required("Category is required"),
    level: Yup.string()
    .oneOf(["Beginner", "Intermediate", "Advanced"], "Invalid level selection")
    .required("Level is required"),
    price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number"),
    description: Yup.string().required("Description is required"),
    cover_image: Yup.mixed()
    .test("fileSize", "File is too large", (value) => {
      if (value) {
        return value.size <= 2 * 1024 * 1024; // 2MB
      }
      return true;
    })
    .test("fileType", "Unsupported file type", (value) => {
      if (value) {
        return ["image/jpeg", "image/jpg"].includes(value.type);
      }
      return true;
    }),


})