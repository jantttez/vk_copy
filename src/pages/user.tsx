import { MainUserSection } from "@widgets/index";
import { Header, Base } from "@processes/index";
import { pageMiddleware } from "@pages/page-middleware";
import { Spinner } from "@chakra-ui/react";

export function UserPage() {
  const loading = pageMiddleware();

  return (
    <>
      <Header />
      {loading ? <Spinner /> : <Base component={<MainUserSection />} />}
    </>
  );
}
