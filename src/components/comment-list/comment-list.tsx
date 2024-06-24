import { Comment } from "@components/index";
import styles from "./comments-list.module.scss";
import { Input, Spinner } from "@chakra-ui/react";
import { SendHorizontal } from "lucide-react";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "@shared/api/get-post-comments";
import { Comment as IComment } from "@shared/types";

interface Props {
  postId: string;
}

export function CommentsList({ postId }: Props) {
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { postId: postId },
  });

  if (error) return <div>error: {error.message}</div>;

  return (
    <div className={styles.commentsList}>
      {loading ? (
        <Spinner />
      ) : (
        data.comments.map((comment: IComment) => (
          <div key={comment.id}>
            <hr />
            <Comment
              avatar={comment.authorPhoto}
              username={comment.authorName}
              date={comment.createdAt}
              text={comment.content}
            />
          </div>
        ))
      )}

      <div className={styles.inputContainer}>
        <Input placeholder="Что у вас нового?" variant="unstyled" />
        <button className={styles.popoverButton} onClick={() => console.log("hello")}>
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
}

export default CommentsList;
