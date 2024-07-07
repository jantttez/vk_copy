import { getUserId } from "@shared/lib";
import { Box } from "@shared/ui";
import { MessageCircleMore } from "lucide-react";
import styles from "./ui.module.scss";
import { DeleteBtn } from "@features/post/delete-post";

interface Props {
  authorId: string;
  postId: string;
}

export function Section({ authorId, postId }: Props) {
  const userId = getUserId();

  return (
    <Box className={styles.showMore}>
      {authorId === userId && <DeleteBtn postId={postId} />}
      <Box className="flex justify-between items-center p-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-hover-bg-color">
        <MessageCircleMore size={20} strokeWidth={1} />
      </Box>
    </Box>
  );
}
