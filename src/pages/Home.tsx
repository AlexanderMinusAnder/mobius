import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import guitare1 from '../assets/images/guitare1.jpeg'
import guitare2 from '../assets/images/guitare2.jpeg'
import groupFR from '../assets/images/groupFR.png'
import theoutcast from '../assets/musics/theoutcast.mp3'
import theoutcastcover from '../assets/images/theoutcast.png'
import againstthewind from '../assets/musics/againstthewind.mp3'
import againstthewindcover from '../assets/images/againstthewind.png'
import finaldestination from '../assets/musics/finaldestination.mp3'
import finaldestinationcover from '../assets/images/finaldestination.png'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
        <div className='info'>

          <h1 className='title'>Présentation du groupe</h1>

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

          <Link to={"/members"}><img src={groupFR} className='info__group--image' /></Link>
        </div>

        <div className='music'>
            <h1 className='title'>Nos réalisations</h1>

            <div className='music__container'>

              <div className='music__single'>
                <img src={theoutcastcover} className='cover' />
                <audio controls controlsList="nodownload">
                  <source src={theoutcast} type="audio/mpeg" />
                </audio>
              </div>

              <div className='music__single'>
                <img src={againstthewindcover} className='cover' />
                <audio controls controlsList="nodownload">
                  <source src={againstthewind} type="audio/mpeg" />
                </audio>
              </div>

              <div className='music__single'>
                <img src={finaldestinationcover} className='cover' />
                <audio controls controlsList="nodownload">
                  <source src={finaldestination} type="audio/mpeg" />
                </audio>
              </div>

            </div>

            <p className="music__text">Retrouvez nos autres réalisations sur notre <a href="https://soundcloud.com/moebius-812741817" target="_blank">SoundCloud</a></p>

        </div>
    </>
  )
}

export default Home
