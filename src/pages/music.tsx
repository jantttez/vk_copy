import { Base, Header } from "@processes/index";
import { MainMusicSection } from "@widgets/index";

export function MusicPage() {
  return (
    <>
      <Header />
      <Base component={<MainMusicSection />} />
    </>
  );
}
