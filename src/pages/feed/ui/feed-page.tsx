import { FeedSection } from './feed-section';
import { Base, Header } from '@widgets/index';
import { pageMiddleware } from '@pages/page-middleware';

export function FeedPage() {
  pageMiddleware();

  return (
    <>
      <Header />
      <Base component={<FeedSection />} />
    </>
  );
}
