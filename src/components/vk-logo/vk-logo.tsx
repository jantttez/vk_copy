import styles from "./vk-logo.module.scss";
import vkLogo from "@shared/assets/vkLogo.svg";
import { useNavigate } from "react-router-dom";

export function VkLogo() {
  const navigate = useNavigate();

  const vkLogoHandler = () => {
    navigate("/feed");
  };

  return (
    <div className={styles.logoBage} onClick={vkLogoHandler}>
      <img src={vkLogo} alt="vkLogo" className={styles.vkLogo} />
      <h1>ВКОНТАКТЕ</h1>
    </div>
  );
}
