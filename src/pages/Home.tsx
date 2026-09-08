import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import guitare1 from '../assets/images/guitare1.jpeg'
import guitare2 from '../assets/images/guitare2.jpeg'

function Home() {

  return (
    <>
        <Navbar></Navbar>
        <div className='info'>

          <div className='info__article'>
            <div className='info__article--category'>
              <img src={guitare1} />
            </div>
            <div className='info__article--category'>
              <p>Dans l'univers du metal, Möbius apporte une touche d'optimisme et une énergie nouvelle au genre.</p>
              <p>Fondé en 2025, le groupe prône l'importance de la persévérance, de l'unité et de la confiance en soi à travers sa discographie variée et puissante.</p>
            </div>
          </div>

          <div className='info__article'>
            <div className='info__article--category'>
              <p>Un mélange de riffs puissants, de lignes de basse entraînantes, de blast beats endiablés et de mélodies intenses.</p>
              <p>Mobius est la réponse à la sombre dystopie dans laquelle nous vivons.</p>
            </div>
            <div className='info__article--category'>
              <img src={guitare2} />
            </div>
          </div>

        </div>
        <Footer></Footer>
    </>
  )
}

export default Home
