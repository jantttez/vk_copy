import { MainUserSection } from "@widgets/index";
import { Header, Base } from "@processes/index";
import { pageMiddleware } from "@pages/page-middleware";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@shared/api";

export function UserPage() {
  pageMiddleware();
  const { data, error, loading } = useQuery(GET_POSTS);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error {error.message}</div>;
  return (
    <>
      <Header />
      <Base component={<MainUserSection />} />
    </>
  );
}
