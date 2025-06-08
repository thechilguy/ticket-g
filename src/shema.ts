import * as yup from "yup";

export const uploadSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  github: yup
    .string()
    .required("GitHub username is required")
    .matches(/^@[\w-]{1,20}$/, "Must start with @ and be max 20 characters"),
  avatar: yup
    .mixed()
    .required("File is required")
    .test("fileSize", "Max file size is 500KB", (value) => {
      if (value && (value instanceof FileList || Array.isArray(value))) {
        return value[0]?.size <= 500 * 1024;
      }
      return false;
    })
    .test("fileType", "Only JPG or PNG files are allowed", (value) => {
      if (value && (value instanceof FileList || Array.isArray(value))) {
        return ["image/jpeg", "image/png"].includes(value[0]?.type);
      }
      return false;
    }),
});
