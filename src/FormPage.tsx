import styles from "./FormPage.module.scss";
import TitleMain from "./component/TitleMain/TitleMain";
import Upload from "./component/Upload/Upload";
import TextInput from "./TextInput";
import SubmitButton from "./component/Button/SubmitButton";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadSchema } from "./shema";

import { useNavigate } from "react-router-dom";

function FormPage() {
  const methods = useForm({
    resolver: yupResolver(uploadSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    const file = data.avatar?.[0];
    const imageUrl = file ? URL.createObjectURL(file) : null;

    navigate("/ticket", {
      state: {
        ...data,
        imageUrl,
      },
    });
  };

  return (
    <>
      <TitleMain />
      <div className={styles.wrapper}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Upload />
            <TextInput name="name" label="Full name" placeholder="Your name" />
            <TextInput
              name="email"
              label="Email Address"
              placeholder="Enter your email"
            />
            <TextInput
              name="github"
              label="GitHub profile"
              placeholder="@username"
            />

            <SubmitButton text="Get your ticket" />
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default FormPage;
