import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="NextJS based Dashboard"
          description="NextJS based dashboard using MongoDB and Typescript"
        />
      }
    >
      this is home page
    </Main>
  );
};

export default Index;
