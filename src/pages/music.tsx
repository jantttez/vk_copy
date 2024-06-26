import { Base, Header } from "@processes/index";
import { MainMusicSection } from "@widgets/index";
import { pageMiddleware } from "./page-middleware";
import { Spinner } from "@chakra-ui/react";

export function MusicPage() {
  const loading = pageMiddleware();
  return (
    <>
      <Header />
      {loading ? <Spinner /> : <Base component={<MainMusicSection />} />}
    </>
  );
}
