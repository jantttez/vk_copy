import { MainFeedSection } from "@widgets/index";
import { Header, MainSkeleton } from "@processes/index";

export function FeedPage() {
  return (
    <>
      <Header />
      <MainSkeleton component={<MainFeedSection />} />
    </>
  );
}
