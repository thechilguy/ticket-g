import React from "react";
import styles from "./FormPage.module.scss";
import TitleMain from "./component/TitleMain/TitleMain";
import Upload from "./component/Upload/Upload";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadSchema } from "./shema";
import NameInput from "./component/NameInput/NameInput";
import EmailInput from "./component/EmailInput/EmailInput";
import GitInput from "./component/GitInput/GitInput";
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
            <NameInput />
            <EmailInput />
            <GitInput />
            <button type="submit" className={styles.btn}>
              Generate My Ticket
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default FormPage;
