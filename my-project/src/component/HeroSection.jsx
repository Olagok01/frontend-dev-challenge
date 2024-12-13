import { Users } from 'lucide-react';
import { CornerRightUp } from 'lucide-react';
import { Phone } from 'lucide-react';
/* import { iconItems } from '../constants';
 */
import Github from '../assets/github-142-svgrepo-com.svg';
import  Cloud from '../assets/google-cloud-svgrepo-com.svg';
import Linode from '../assets/linode-svgrepo-com.svg';
import Flare from '../assets/cloudflare-icon.png';
import DigitalOcean from '../assets/digitalocean-icon.png';
import Azure from '../assets/azure-svgrepo-com.svg';




const HeroSection = () => {
  return (
    <>
			<div className='flex flex-col items-center mt-6 lg:mt-20'>
				<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
					From Concept to Code
				</h1>
				<h1 className="text-4xl mt-2 bg-gradient-to-b from-red-500 to-red-800 text-transparent bg-clip-text sm:text-6xl lg:text-7xl text-center tracking-wide">
					We Make IT Happen
				</h1>
			</div>

			<div className="flex justify-between items-center px-3 mt-4 lg:mx-8">
				<div className="hidden lg:flex rounded-full border-2 bg-[#900C3F] border-[#722F37] px-3 py-3">
					<Users className='w-10 h-10 lg:w-12 h-12 '/>
				</div>
				<div className='sm:text-sm lg:text-2xl text-center capitalize flex flex-col justify-center items-center w-full '>
					<p className='md:text-xl'>We help brands and B2B enterprises build amazing</p>
					<p>website that convert thier visitors to paying customers.</p>
				</div>
				<div className="hidden lg:flex rounded-full border-2 bg-[#900C3F] border-[#722F37] px-2 py-2">
					<CornerRightUp className='w-12 h-12 lg:w-14 h-14'/>
				</div>
			</div>

			<div className='flex px-2 py-3 justify-center mt-4 mb-28 text-center'>
				<div className='flex px-5 py-3 rounded-xl gap-2 bg-gradient-to-r from-red-800 to-red-500'>
					<Phone/>
					<a href="#">Lets have a call</a>	
				</div>
			</div>

			<div className='uppercase flex justify-center mb-24'>Trusted by our partners</div>

			{/* <div className='md:flex justify-between items-center border-2 mb-24'>
					{iconItems.map((image, index) => (
						<div key={index} className=' flex flex-col justify-center items-center'>
							<img src={image.icon} alt={image.name} className='w-12 h-12 fill-white'/>
							<p>{image.name}</p>
						</div>
					))}
			</div> */}
			<div className='mb-24 grid grid-cols-3 gap-3 lg:flex flex-row lg:justify-between lg:items-center'>
				
				<div className='flex flex-col justify-center items-center'>
					<img src={DigitalOcean} alt="Digital Ocean" className='w-12 h-12' />
					<p>Digital Ocean</p>
				</div>

				<div className='flex flex-col md:flex md:flex-row md:justify-center md:items-center'>
					<img src={Azure} alt="Digital Ocean" className='w-12 h-12' />
					<p>Azure</p>
				</div>

				<div className='flex justify-center items-center'>
					<img src={Github} alt="Github" className='w-12 h-12' />
				</div>

				<div className='flex flex-col items-center md:flex md:flex-row md:justify-center md:items-center'>
					<img src={Cloud} alt="Cloud" className='w-12 h-12 pr-2' />
					<p>Google Cloud</p>
				</div>

				<div className='flex flex-col items-center md:flex md:flex-row md:justify-center md:items-center'>
					<img src={Linode} alt="Linode" className='w-12 h-12' />
					<p>Linode</p>
				</div>

				<div className='flex flex-col items-center md:flex md:justify-center md:items-end'>
					<img src={Flare} alt="Linode" className='w-12 h-10' />
					<p>Cloud Flare</p>
				</div>

			</div>
		</>
		
		
  )
}

export default HeroSection