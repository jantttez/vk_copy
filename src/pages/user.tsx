import { MainUserSection } from "@widgets/index";
import { Header, Base } from "@processes/index";
import { pageMiddleware } from "@pages/page-middleware";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getUserId } from "@shared/lib";

export function UserPage() {
  const loading = pageMiddleware();

  const { userId } = useParams("userId");

  const curUserId = getUserId();

  return (
    <>
      <Header />
      {loading ? <Spinner /> : userId === curUserId ? <Base component={<MainUserSection />} /> : <></>}
    </>
  );
}
