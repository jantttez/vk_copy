import { useRef, useState } from "react";
import styles from "./comment.module.scss";
import { extractDateFromTimestamp } from "@shared/lib";
import { useClickOutside } from "@shared/hooks";
import { Comment as IComment } from "@shared/types";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT_BY_ID, GET_POST_COMMENTS } from "@shared/api";
import { Spinner } from "@chakra-ui/react";

interface Props {
  comment: IComment;
}

export function Comment({ comment }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside({ ref: dropDownMenuRef, setState: setMenuVisible });

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [DELETE_COMMENT, { loading, error }] = useMutation(DELETE_COMMENT_BY_ID, {
    variables: { id: comment.id },
    refetchQueries: [GET_POST_COMMENTS, "GET_POST_COMMENTS"],
  });

  const replyToComment = () => {
    // Логика ответа на комментарий
  };

  const createdAt = extractDateFromTimestamp(Number(comment.createdAt));
  if (error) return <div>error: {error.message}</div>;

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <div className={styles.infoContainer}>
          <img src={comment.authorPhoto} alt="User Avatar" className={styles.avatar} />
          <div className={styles.userDetails}>
            <span className={styles.userName}>{comment.authorName}</span>
            <span className={styles.date}>{createdAt}</span>
          </div>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          ...
        </button>
      </div>
      <div className={styles.text}>{comment.content}</div>
      <div className={styles.menu}>
        {menuVisible && (
          <div className={styles.dropdownMenu} ref={dropDownMenuRef}>
            {loading ? <Spinner /> : <button onClick={DELETE_COMMENT}>Удалить</button>}
            <button onClick={replyToComment}>Ответить</button>
          </div>
        )}
      </div>
    </div>
  );
}
