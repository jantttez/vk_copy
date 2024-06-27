import { Base, Header } from "@widgets/index";
import { MainPaymentSection } from "@widgets/index";

export function PaymentPage() {
  return (
    <>
      <Header />
      <Base component={<MainPaymentSection />} />
    </>
  );
}
