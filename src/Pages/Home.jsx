import HomeBottomSection from "../components/HomeBottomSection"
import HomeParaSection from "../components/HomeParaSection"
import HomeProductSection from "../components/HomeProductSection"
import HomeUpSection from "../components/HomeUpSection"
import HomeVideo from "../components/HomeVideo"

const Home = () => {
  return (
    <main>
        <HomeUpSection/>
        <HomeVideo/>
        <HomeParaSection/>
        <HomeProductSection/>
        <HomeBottomSection/>
    </main>
  )
}

export default Home