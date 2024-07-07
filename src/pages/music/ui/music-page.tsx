import { Base, Header } from '@widgets/index';
import { pageMiddleware } from '@pages/page-middleware';
import { Spinner } from '@chakra-ui/react';
import { MainMusicSection } from './music-section';

export function MusicPage() {
  const state = pageMiddleware();
  return (
    <>
      <Header />
      {state!.loading ? <Spinner /> : <Base component={<MainMusicSection />} />}
    </>
  );
}
