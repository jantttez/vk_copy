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

  //TODO: можно поидеи сделать так что у тебя будет подгружаться юзер в в мейнЮзер секции
  // либо можно вот как я ниже, но так по идеи будет очень много боейлер плейт кода

  return (
    <>
      {userId !== curUserId ? (
        <>
          <Header />
          <Base component={<Spinner />} />
        </>
      ) : (
        <>
          <Header />
          {loading ? <Spinner /> : <Base component={<MainUserSection />} />}
        </>
      )}
    </>
  );
}
