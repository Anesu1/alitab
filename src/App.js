import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Collaborators from "./components/Collaborators";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurProjects from "./components/OurProjects";
import Services from "./components/Services";

function App() {
  const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

  return (
    <>
      <Header />
      <Banner />
      <About   />
      <Services />
      <OurProjects />
      <Collaborators />
      <Clients />
      <img src="./images/lets.png" className="lets" alt="lets work together" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
