import { UserHeaderButton } from "@shared/ui";
import styles from "./user-header-btn-group.module.scss";
import { Dispatch, SetStateAction } from "react";
import { getUserId } from "@shared/lib";

interface Props {
  dontShowAddButton: boolean | undefined;
  showTolltip: boolean;
  editHandler: () => void;
  setShowTolltip: Dispatch<SetStateAction<boolean>>;
  addFriend: () => void;
  deleteFriend: () => void;
  headerUserId: string;
}

export function UserHeaderBtnGroup({
  editHandler,

  headerUserId,
}: Props) {
  const currUserId = getUserId();
  return (
    <div>
      <div className={styles.buttonGroup}>
        {currUserId === headerUserId ? <UserHeaderButton title="Edit" size={20} clickAction={editHandler} /> : <></>}
      </div>
    </div>
  );
}
