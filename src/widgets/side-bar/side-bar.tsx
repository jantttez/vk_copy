import styles from "./side-bar.module.scss";
import { SideBarButton } from "@shared/ui/index";
import { AudioLines, BadgeHelp, Contact, MessageCircle, Newspaper, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SideBar() {
  const navigate = useNavigate();

  const userPage = () => {
    navigate("/asdasd");
  };

  const feedPage = () => {
    navigate("/feed");
  };
  const friendPage = () => {
    navigate("/friends");
  };

  return (
    <div className={styles.sideBar}>
      <SideBarButton clickAction={userPage} title="Моя страница" Icon={<User size={20} />} />
      <SideBarButton clickAction={feedPage} title="Новости" Icon={<Newspaper size={20} />} />
      <SideBarButton clickAction={friendPage} title="Друзья" Icon={<Contact size={20} />} />
      <SideBarButton clickAction={() => {}} title="Музыка" Icon={<AudioLines size={20} />} />
      <SideBarButton clickAction={() => {}} title="Чат" Icon={<MessageCircle size={20} />} />
      <hr className={styles.divider} />
      <SideBarButton title="Помощь" Icon={<BadgeHelp size={20} />} />
    </div>
  );
}
