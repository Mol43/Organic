import { FaCircleArrowRight } from 'react-icons/fa6'
import EntrEmain from '../components/common/EntrEmain'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import WhyChooseUs from './WhyChooseUs'






function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="bg-[url(./headerBg.png)] bg-cover flex items-center bg-center h-screen ">
          <div className="ml-20">
            <p className='text-3xl text-[#68A47F] italic font-serif'>100% Natural Food</p> <br />
            <p className='text-5xl font-extrabold text-[#274C5B]'>Choose the best <br />
              healthier way <br />
              of life</p> <br />
            <button className='flex items-center gap-1 px-10 py-7 bg-[#EFD372] rounded-xl text-[#274C5B] text-xl'>Explore Now <FaCircleArrowRight /></button>
          </div>
        </div>
      </section>


      <section>
        <div className="flex flex-wrap gap-6 mt-10 justify-center">
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className={`relative h-[300px] w-[500px] rounded-xl overflow-hidden ${fruit.bgColor}`}
            >
              <img
                src={fruit.image}
                alt={fruit.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
                <p className="text-lg text-green-600 italic font-serif">{fruit.subtitle}</p>
                <p className="text-2xl font-extrabold text-white w-48">{fruit.title}</p>
              </div>
            </div>
          ))}
        </div>


      </section>



      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <EntrEmain />
      <br/>
      <br />
      <WhyChooseUs/>
      <Footer />
    </div>
  )
}

export default Home