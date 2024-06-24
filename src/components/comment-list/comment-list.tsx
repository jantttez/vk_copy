import { Comment } from "@components/index";
import styles from "./comments-list.module.scss";
import { Input, Spinner, useToast } from "@chakra-ui/react";
import { SendHorizontal } from "lucide-react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "@shared/api/get-post-comments";
import { Comment as IComment } from "@shared/types";
import { ADD_POST_COMMENT } from "@shared/api";
import { getNewUUID } from "@shared/lib";
import { useForm } from "react-hook-form";
import { useUserStore } from "@shared/lib/storage";

interface Props {
  postId: string;
}

export interface CommentForm {
  commentContent: string;
}

export function CommentsList({ postId }: Props) {
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { postId: postId },
  });
  const { register, watch, reset } = useForm<CommentForm>({
    mode: "onChange",
  });

  const toast = useToast();

  const currentUser = useUserStore((state) => state.user);

  let authorPhoto, authorId, authorName;

  if (currentUser) {
    authorPhoto = currentUser.userPhoto;
    authorId = currentUser.id;
    authorName = currentUser.name;
  }

  const id = getNewUUID();
  const inputContent = watch("commentContent");

  const [ADD_COMMENT, { loading: loadState, error: errorState }] = useMutation(ADD_POST_COMMENT, {
    variables: {
      objects: [
        {
          id: id,
          createdAt: Date.now(),
          authorPhoto: authorPhoto,
          postId: postId,
          authorId: authorId,
          authorName: authorName,
          content: inputContent,
        },
      ],
    },
    refetchQueries: [GET_POST_COMMENTS, "GET_POST_COMMENTS"],
  });

  const addHandler = () => {
    ADD_COMMENT();
    if (!loading) {
      reset({
        commentContent: "",
      });
    }
  };

  if (loading) return <Spinner />;
  if (error) return <div>error: {error.message}</div>;

  if (!data) return <div>нету</div>;

  return (
    <div className={styles.commentsList}>
      {loading ? (
        <Spinner />
      ) : (
        data.comments.map((comment: IComment) => (
          <div key={comment.id}>
            <hr />
            <Comment comment={comment} />
          </div>
        ))
      )}

      <hr />
      <div className={styles.inputContainer}>
        <Input
          placeholder="что вы думаете по этому поводу?"
          variant="unstyled"
          required
          {...register("commentContent", {
            required: "comment field is required",
            maxLength: {
              value: 150,
              message: "comment filed must be shorted than 150 characters",
            },
            minLength: {
              value: 4,
              message: " comment field must be longer than 4 characters",
            },
          })}
        />
        {loadState ? (
          <Spinner />
        ) : (
          <button className={styles.popoverButton} onClick={addHandler}>
            <SendHorizontal />
          </button>
        )}
        {errorState ? (
          toast({ description: errorState.message, title: "ADD ERROR", status: "error", duration: 1000 })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default CommentsList;
