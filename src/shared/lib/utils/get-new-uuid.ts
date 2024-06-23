import { v4 as uuidv4 } from "uuid";

export const getNewUUID = () => {
  // я кстати нке до конца понимаю почему он не отдает ссылку на эту же функцию а уже результат ее выполнения
  return uuidv4();
};
