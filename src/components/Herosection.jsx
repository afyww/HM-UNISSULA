import './App.css'
import TypewriterComponent from 'typewriter-effect'
import luqi from '../assets/images/Luqi.png'
import nadia from '../assets/images/Nadia.png'
import agung from '../assets/images/Agung.png'
import laila from '../assets/images/Laila.png'

const Herosection = () => {
    return (
        <section id="home">
            <div className="h-screen">
                <div className="my-20 mx-auto">
                    <h1 className="text-5xl text-center text-black font-bold font-['QuattrocentoSans']">
                        <TypewriterComponent
                            options={{
                                strings: [
                                    "Himpunan Mahasiswa",
                                    "Teknik Informatika",
                                    "UNISSULA",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </h1>
                </div>
                <div className="flex bg-black rounded-xl bg-opacity-70">
                    <div className='border-r'>
                        <img className='' src={nadia} alt="" />
                    </div>
                    <div className='border-r'>
                        <img className='' src={luqi} alt="" />
                    </div>
                    <div className='border-r'>
                        <img className='' src={agung} alt="" />
                    </div>
                    <div className='border-l'>
                        <img className='' src={laila} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection