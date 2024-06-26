import { MainUserSection } from "@widgets/index";
import { Header, Base } from "@processes/index";
import { Spinner } from "@chakra-ui/react";

import { UserPageMiddleware } from "./user-page-middleware";

export function UserPage() {
  const state = UserPageMiddleware();

  //TODO: можно поидеи сделать так что у тебя будет подгружаться юзер в в мейнЮзер секции
  // либо можно вот как я ниже, но так по идеи будет очень много боейлер плейт кода

  return (
    <>
      <Header />
      {state?.loading ? <Spinner /> : <Base component={<MainUserSection currentUser={state!.user} />} />}
    </>
  );
}
