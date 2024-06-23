import styles from "./side-bar.module.scss";
import { SideBarButton } from "@shared/ui/index";
import { AudioLines, BadgeHelp, Contact, CreditCard, MessageCircle, Newspaper, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/constant";
import { getUserId } from "@shared/utils";

export function SideBar() {
  const navigate = useNavigate();
  const userId = getUserId();

  const userPage = () => {
    navigate(`/${userId}`);
  };

  const feedPage = () => {
    navigate(routes.feed);
  };
  const friendPage = () => {
    navigate(routes.friends);
  };
  const paymentPage = () => {
    navigate(routes.payments);
  };

  return (
    <div className={styles.sideBar}>
      <SideBarButton clickAction={userPage} title="Моя страница" Icon={<User size={20} color="rgba(0,0,0, 1)" />} />
      <SideBarButton clickAction={feedPage} title="Новости" Icon={<Newspaper size={20} color="rgba(0,0,0, 1)" />} />
      <SideBarButton clickAction={friendPage} title="Друзья" Icon={<Contact size={20} color="rgba(0,0,0, 1)" />} />
      <SideBarButton clickAction={() => {}} title="Музыка" Icon={<AudioLines size={20} color="rgba(0,0,0, 1)" />} />
      <SideBarButton clickAction={() => {}} title="Чат" Icon={<MessageCircle size={20} color="rgba(0,0,0, 1)" />} />
      <SideBarButton clickAction={paymentPage} title="покупки" Icon={<CreditCard size={20} color="rgba(0,0,0, 1)" />} />
      <hr className={styles.divider} />
      <SideBarButton title="Помощь" Icon={<BadgeHelp size={20} color="rgba(0,0,0, 1)" />} />
    </div>
  );
}
