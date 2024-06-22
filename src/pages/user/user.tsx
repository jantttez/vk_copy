import { MainUserSection } from "@widgets/index";
import { Header, Base } from "@processes/index";
import { pageMiddleware } from "@pages/page-middleware";

export function UserPage() {
  pageMiddleware();
  return (
    <>
      <Header />
      <Base component={<MainUserSection />} />
    </>
  );
}
