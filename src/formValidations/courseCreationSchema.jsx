import * as Yup from "yup";

export const courseCreationSchema = Yup.object().shape({
  title: Yup.string()
    .min(27, "Title must be more than 26 characters.")
    .required("*Title is required."),
  subtitle: Yup.string().required("*Sub Title is required."),
  category: Yup.number()
    .typeError("Category must be a number.")
    .required("*Category is required."),
  level: Yup.string()
    .oneOf(["Beginner", "Intermediate", "Advanced"], "Invalid level selection")
    .required("*Level is required."),
  tag: Yup.number().required("*Tag is required."),
  price: Yup.number()
    .typeError("Price must be a number.")
    .positive("Price must be a positive number.")
    .test("maxDigits", "Price must be up to 5 digits.", (value) => {
      // Check if the integer part has up to 7 digits
      const integerPart = value ? Math.floor(value) : 0;
      const integerDigits = integerPart.toString().length;
      return integerDigits <= 5;
    })
    .test(
      "maxDecimalPlaces",
      "Price can have up to 2 decimal places.",
      (value) => {
        // Check if the decimal part has up to 2 digits
        const decimalPart = value ? value.toString().split(".")[1] : "";
        const decimalDigits = decimalPart ? decimalPart.length : 0;
        return decimalDigits <= 2;
      }
    )
    .required("*Price required."),
  description: Yup.string().required("*Description is required."),
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
});
