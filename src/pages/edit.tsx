import { Base, Header } from "@processes/index";
import { MainEditSection } from "@widgets/index";

export function EditPage() {
  return (
    <>
      <Header />
      <Base component={<MainEditSection />} />
    </>
  );
}
