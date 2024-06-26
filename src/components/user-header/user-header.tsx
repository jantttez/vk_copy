import { CircleAlert, Handshake, MessageCircle } from "lucide-react";
import styles from "./user-header.module.scss";
import { UserHeaderButton } from "@shared/ui";
import { User } from "@shared/types";
import { useNavigate } from "react-router-dom";
import { ModalWindow } from "@components/modal-window/modal-window";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { getUserId } from "@shared/lib";
import { useUserStore } from "@shared/lib/storage";
import { ADD_USER_FRIEND, GET_USER_BY_ID, GET_USER_FRIENDS_IDS } from "@shared/api";
import { useMutation } from "@apollo/client";
import { UserHeaderBtnGroup } from "@components/user-header-btn-group/user-header-btn-group";

interface Props {
  user: User;
}

export function UserHeader({ user }: Props) {
  const [modalMoreIsActive, setModalMoreIsActive] = useState(false);
  const [imageMore, setImageMore] = useState(false);
  const currntUser = useUserStore((state) => state.user);
  const [showTolltip, setShowTolltip] = useState(false);

  const newCurrentUserAddIds = currntUser?.friends ? [...currntUser.friends, user.id] : [];
  const newPersonUserAddIds = currntUser?.id ? [...user.friends, currntUser.id] : [];
  const newCurrentUserDeleteIds = currntUser?.friends ? currntUser.friends.filter((friend) => friend !== user.id) : [];
  const newPersonUserDeleteIds = currntUser?.id ? user.friends.filter((friend) => friend !== currntUser.id) : [];

  const dontShowAddButton = currntUser?.friends.some((friendId) => friendId === user.id);

  const [ADD_FRIEND, { loading, error }] = useMutation(ADD_USER_FRIEND, {
    refetchQueries: [
      {
        query: GET_USER_BY_ID,
        variables: { id: user.id },
      },
    ],
  });

  const addFriendHandler = () => {
    ADD_FRIEND({
      variables: {
        idFirst: currntUser?.id,
        friendsIdsFirst: newCurrentUserAddIds,
        idSecond: user.id,
        friendsIdsSecond: newPersonUserAddIds,
      },
    }).catch((error) => console.error("Error adding friend:", error));
  };

  const deleteFriendHandler = () => {
    ADD_FRIEND({
      variables: {
        idFirst: currntUser?.id,
        friendsIdsFirst: newCurrentUserDeleteIds,
        idSecond: user.id,
        friendsIdsSecond: newPersonUserDeleteIds,
      },
    }).catch((error) => console.error("Error adding friend:", error));
  };

  const naviagte = useNavigate();

  const editHandler = () => {
    naviagte(`/${user.id}/edit`);
  };

  if (loading) return <Spinner />;

  if (error) return <div>error: {error.message}</div>;

  return (
    <div className={styles.header}>
      <div className={styles.userInfoMain}>
        <img src={user?.userPhoto} alt="User Avatar" className={styles.avatar} onClick={() => setImageMore(true)} />
        <ModalWindow isActive={imageMore} setIsActive={setImageMore}>
          <img src={user?.userPhoto} alt="User Avatar" style={{ borderRadius: "10px" }} />
        </ModalWindow>

        <div className={styles.userInfo}>
          <h1 className={styles.name}>{user.name}</h1>
          <p className={styles.status}>{user.status}</p>
          <div className={styles.moreLink} onClick={() => setModalMoreIsActive(true)}>
            <CircleAlert size={18} />
            Подробнее
          </div>
          <ModalWindow isActive={modalMoreIsActive} setIsActive={setModalMoreIsActive}>
            <Spinner />
          </ModalWindow>
        </div>
      </div>
      <UserHeaderBtnGroup
        dontShowAddButton={dontShowAddButton}
        editHandler={editHandler}
        setShowTolltip={setShowTolltip}
        showTolltip={showTolltip}
        addFriend={addFriendHandler}
        deleteFriend={deleteFriendHandler}
        headerUserId={user.id}
      />
    </div>
  );
}
