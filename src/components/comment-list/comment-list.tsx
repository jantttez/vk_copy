import { Comment } from "@components/index";
import avatarImage from "@shared/assets/Смысл.jpg";
import styles from "./comments-list.module.scss";
import { Input } from "@chakra-ui/react";
import { SendHorizontal } from "lucide-react";

export function CommentsList() {
  const comments = [
    {
      id: 1,
      avatar: avatarImage,
      username: "Пользователь 1",
      date: "22 июня 2024",
      text: "Первый комментарий...",
    },
    {
      id: 2,
      avatar: avatarImage,
      username: "Пользователь 2",
      date: "23 июня 2024",
      text: "Второй комментарий...",
    },
    {
      id: 3,
      avatar: avatarImage,
      username: "Пользователь 3",
      date: "24 июня 2024",
      text: "Третий комментарий...",
    },
  ];

  return (
    <div className={styles.commentsList}>
      {comments.map((comment) => (
        <div key={comment.id}>
          <hr />
          <Comment avatar={comment.avatar} username={comment.username} date={comment.date} text={comment.text} />
        </div>
      ))}
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
