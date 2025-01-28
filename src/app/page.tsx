//@refresh
// import ProductModal from '@/components/SharedComponents/ProductModal';
import HomeMain from '@/components/home/HomeMain';
import MetaData from '@/hooks/useMetaData';
import WrapperStyleOne from '@/layout/WrapperStyleOne';
const Home = () => {
  const pageTitle = 'Home';
  return (
    <>
      <MetaData pageTitle={pageTitle}>
        <WrapperStyleOne>
          <main>
            <HomeMain />
            {/* <ProductModal /> */}
          </main>
        </WrapperStyleOne>
      </MetaData>
    </>
  );
};

export default Home;
