import { MainUserSection } from './user-section';
import { Header, Base } from '@widgets/index';
import { Spinner } from '@chakra-ui/react';

import { UserPageMiddleware } from '@pages/user-page-middleware';

export function UserPage() {
  const state = UserPageMiddleware();

  return (
    <>
      <Header />
      {state?.loading ? <Spinner /> : <Base component={<MainUserSection currentUser={state!.user} />} />}
    </>
  );
}
