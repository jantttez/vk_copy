import { MainUserSection } from "@components/index";
import { Header, MainSkeleton } from "@widgets/index";

export function UserPage() {
  return (
    <>
      <Header />
      <MainSkeleton component={<MainUserSection />} />
    </>
  );
}
