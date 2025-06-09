import { useFormContext, Controller } from "react-hook-form";
import { useRef, useState, useEffect } from "react";
import styles from "./Upload.module.scss";
import icon_upld from "../../assets/image/icon-upload.svg";

export default function Upload() {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatar = watch("avatar");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (avatar && avatar[0]) {
      const file = avatar[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewUrl(null);
    }
  }, [avatar]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setValue("avatar", [file], { shouldValidate: true });
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    setValue("avatar", null, { shouldValidate: true });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("avatar", [file], { shouldValidate: true });
      e.target.value = "";
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.label}>
          <label>Upload Avatar</label>
        </div>

        {previewUrl ? (
          <div className={styles.previewWrapper}>
            <img
              src={previewUrl}
              alt="Preview"
              className={styles.previewImage}
            />
            <div className={styles.actions}>
              <button
                type="button"
                onClick={handleClick}
                className={styles.changeButton}
              >
                Change Image
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className={styles.removeButton}
              >
                Remove Image
              </button>
            </div>
          </div>
        ) : (
          <div
            className={styles.dropzone}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <img src={icon_upld} alt="upload icon" />
            <p>Drag and drop or click to upload</p>
          </div>
        )}

        <input
          type="file"
          accept="image/jpeg, image/png"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.hiddenInput}
        />

        {errors.avatar ? (
          <p className={styles.error}>{errors.avatar.message as string}</p>
        ) : (
          <div className={styles.infoWrapper}>
            <span className={styles.icon}>i</span>
            <p className={styles.text}>
              Upload your photo (JPG or PNG, max size: 500KB).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
