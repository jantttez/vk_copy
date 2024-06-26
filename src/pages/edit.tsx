import { Base, Header } from "@processes/index";
import { MainEditSection } from "@widgets/index";
import { pageMiddleware } from "./page-middleware";
import { Spinner } from "@chakra-ui/react";

export function EditPage() {
  const loading = pageMiddleware();

  return (
    <>
      <Header />
      {loading ? <Spinner /> : <Base component={<MainEditSection />} />}
    </>
  );
}
