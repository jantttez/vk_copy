import { MainFeedSection } from "@components/index";
import { Header, MainSkeleton } from "@processes/index";

export function FeedPage() {
  return (
    <>
      <Header />
      <MainSkeleton component={<MainFeedSection />} />
    </>
  );
}
