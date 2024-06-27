import { Base, Header } from "@widgets/index";
import { MainMusicSection } from "@widgets/index";
import { pageMiddleware } from "./page-middleware";
import { Spinner } from "@chakra-ui/react";

export function MusicPage() {
  const state = pageMiddleware();
  return (
    <>
      <Header />
      {state!.loading ? <Spinner /> : <Base component={<MainMusicSection />} />}
    </>
  );
}
