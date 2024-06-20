import styles from "./main-user-section.module.scss";

import { UserHeader } from "@components/index";

import { InputField } from "@shared/ui/index";

export function MainUserSection() {
  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };
  return (
    <div className={styles.mainContainer}>
      <UserHeader
        avatar="https://i.pinimg.com/564x/0f/86/4b/0f864b918af5a8310fed7c12e76468a9.jpg"
        name="John Doe"
        status="ебу в рот"
        onEditProfile={handleEditProfile}
      />
      <InputField />
    </div>
  );
}
