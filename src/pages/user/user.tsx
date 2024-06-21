import { MainUserSection } from "@widgets/index";
import { Header, Base } from "@processes/index";

export function UserPage() {
  return (
    <>
      <Header />
      <Base component={<MainUserSection />} />
    </>
  );
}
