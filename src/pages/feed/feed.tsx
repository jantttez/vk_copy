import { MainFeedSection } from "@components/index";
import { Header, MainSkeleton } from "@widgets/index";

export function FeedPage() {
  return (
    <>
      <Header />
      <MainSkeleton component={<MainFeedSection />} />
    </>
  );
}
