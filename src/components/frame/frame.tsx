import Footer from "../footer/footer";
import Header from "../header/header";

const Frame = ({ children }: { children: any }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Frame;
