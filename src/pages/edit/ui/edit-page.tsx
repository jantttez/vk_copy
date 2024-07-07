import { Base, Header } from '@widgets/index';
import { pageMiddleware } from '@pages/page-middleware';
import { Spinner } from '@chakra-ui/react';
import { MainEditSection } from './edit-section';

export function EditPage() {
  const state = pageMiddleware();

  return (
    <>
      <Header />
      {state!.loading ? <Spinner /> : <Base component={<MainEditSection />} />}
    </>
  );
}
