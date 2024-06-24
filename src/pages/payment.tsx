import { Base, Header } from "@processes/index";
import { MainPaymentSection } from "@widgets/index";

export function PaymentPage() {
  return (
    <>
      <Header />
      <Base component={<MainPaymentSection />} />
    </>
  );
}
