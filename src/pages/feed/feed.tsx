import { MainFeedSection } from "@components/index";
import { Header, MainSkeleton } from "@widgets/index";

export function Feed() {
  return (
    <>
      <Header />
      <MainSkeleton component={<MainFeedSection />} />
    </>
  );
}
