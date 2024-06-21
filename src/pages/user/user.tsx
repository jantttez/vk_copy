import { MainUserSection } from "@widgets/index";
import { Header, MainSkeleton } from "@processes/index";

export function UserPage() {
  return (
    <>
      <Header />
      <MainSkeleton component={<MainUserSection />} />
    </>
  );
}
