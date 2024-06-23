import styles from "./input-field.module.scss";

import { Dispatch, MutableRefObject, SetStateAction, useId } from "react";

import { Input, Spinner } from "@chakra-ui/react";
import { SendHorizontal } from "lucide-react";

import { useClickOutside } from "@shared/hooks";
import { useUserStore } from "@shared/lib/storage/use-user-store";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "@shared/api";

interface Props {
  inputFieldRef: MutableRefObject<HTMLDivElement | null>;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

interface FormState {
  imageUrl: string;
  inputText: string;
}

export function InputField({ inputFieldRef, isActive, setIsActive }: Props) {
  useClickOutside<HTMLDivElement>({ ref: inputFieldRef, setState: setIsActive });

  const currentUser = useUserStore((state) => state.user);

  const fieldActiveHandler = () => {
    setIsActive(!isActive);
  };
  const id = useId();

  const { register, handleSubmit } = useForm<FormState>({
    mode: "onChange",
  });

  /////
  const [insert_posts, { data, loading, error }] = useMutation(ADD_POST);

  const onSubmit: SubmitHandler<FormState> = (data) => {
    insert_posts({
      variables: {
        objects: {
          id: id,
          postImage: data.imageUrl,
          postContent: data.inputText,
        },
      },
    });
  };
  /////
  if (loading) return <Spinner />;
  if (error) return `Submission error! ${error.message}`;
  return (
    <div className={styles.InputField} ref={inputFieldRef} onClick={fieldActiveHandler}>
      <div className={styles.inputContainer}>
        <img src={currentUser?.userPhoto} alt="avatar" className={styles.inputImage} />
        {isActive ? (
          <Input placeholder="Url изображения..." variant="unstyled" {...register("imageUrl")} />
        ) : (
          <Input placeholder="Что у вас нового?" variant="unstyled" />
        )}
        <button className={styles.popoverButton} onClick={handleSubmit(onSubmit)}>
          <SendHorizontal />
        </button>
      </div>
      {isActive ? (
        <>
          <hr />
          <div className={styles.popoverContent} onClick={(e) => e.stopPropagation()}>
            <textarea
              className={styles.inputTextArea}
              placeholder="Что у вас нового?"
              {...register("inputText", {
                required: "this field is required",
              })}
            ></textarea>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
