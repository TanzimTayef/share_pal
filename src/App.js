import styles from "./styles";
import {Navbar, Hero, Products, Services, Testimonials, Blogs, Footer } from "./components";


function App() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* --Navbar Start-- */}
        <div className={`${styles.marginX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
      {/* --Navbar End-- */}

      {/* --Hero start-- */}
         <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
         </div>
      {/* --Hero End-- */}

      {/* ---Main -- */}
       <div className={`${styles.paddingX} ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
            <Products/>
            <Services/>
            <Testimonials/>
            <Blogs/>
            <Footer/>
         </div>
       </div>

    </div>
  );
}

export default App;
