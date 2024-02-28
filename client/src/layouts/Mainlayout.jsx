import Header from "./Header";
import Footer from "./Footer";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
};

export default MainLayout;