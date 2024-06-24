import { MessageCircleMore, Trash } from "lucide-react";
import styles from "./show-more.module.scss";
import { useUserStore } from "@shared/lib/storage";
import { ApolloError } from "apollo-client";
import { Spinner } from "@chakra-ui/react";

interface Props {
  authorId: string;
  loading: boolean;
  error: ApolloError | undefined;
  deleteAction: any;
}

export function ShowMore({ authorId, loading, error, deleteAction }: Props) {
  const userId = useUserStore((state) => state.userId);

  if (loading) return <Spinner />;
  if (error) return <div>error: {error.message}</div>;

  return (
    <div className={styles.showMore}>
      {authorId === userId ? (
        <div className={styles.buttonContainer} onClick={deleteAction}>
          <button>Delete</button>
          <Trash size={20} strokeWidth={1} />
        </div>
      ) : (
        <></>
      )}
      <div className={styles.buttonContainer}>
        написать автору
        <MessageCircleMore size={20} strokeWidth={1} />
      </div>
    </div>
  );
}
