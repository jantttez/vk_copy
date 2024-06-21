import { MainFeedSection } from "@widgets/index";
import { Base, Header } from "@processes/index";

export function FeedPage() {
  return (
    <>
      <Header />
      <Base component={<MainFeedSection />} />
    </>
  );
}
