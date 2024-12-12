import { CircleCheck } from 'lucide-react';
import Facebook from '../assets/facebookIcon.svg';
import Twitter from '../assets/twitterIcon.svg';
import Instagram from '../assets/instaIcon.svg';
import Github from '../assets/githubIcon.svg';

const Footer = () => {
  return (
    <>
		<div className="text-center flex justify-center pb-12">
			<button className="border border-white rounded-xl px-3 py-3">Read more</button>
		</div>

		<div className='flex flex-col gap-3 md:grid grid-cols-2 pb-12'>
			
			<div className='flex flex-col items-start'>
				<p className='pb-2 text-gray-500'>Got a project in mind?</p>
				<h1 className='text-4xl pb-2'>Reserve a call</h1>
				<ul className='flex flex-col items-start'>
					<li className='flex gap-3 items-center justify-center pb-4'>
						<CircleCheck className='w-4 h-4'/>
						<p>An in depth session to understand your needs</p>
					</li>
					<li className='flex gap-3 items-center justify-center pb-4'>
						<CircleCheck className='w-4 h-4'/>
						<p>Leran which plan is right for your team</p>
					</li>
					<li className='flex gap-3 items-center justify-center pb-4'>
						<CircleCheck className='w-4 h-4'/>
						<p>Get onboarding help</p>
					</li>
					<li className='flex gap-3 items-center justify-center pb-4'>
						<p>Technical support or some query?</p>
						<p>Contact support</p>
					</li>
				</ul>
			</div>
			
			<div className=''>
				<p className='border-2 px-5 py-3'>Tell us about yourself</p>
				<form action="" className='border-2 px-5 py-3'>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Full Name</label>
						<input type="text" placeholder='TAHA HAIDER' className='mt-2 w-full px-2 py-3 rounded-lg text-xs sm:text-sm bg-gray-700 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Work Email</label>
						<input type="text" placeholder='Syed.Shah@RedTilT.Team' className='mt-2 w-full px-2 py-3 rounded-lg text-xs sm:text-sm bg-gray-700 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Company Size</label>
						<input type="text" placeholder='1-20' className='mt-2 w-full px-2 py-3 rounded-lg text-xs sm:text-sm bg-gray-700 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>How Can We Help?</label>
						<textarea type="text" placeholder='I Am Interested In Redtilt For My Team. I Would Like To Learn More About It....' className='mt-2 w-full px-2 py-3 rounded-lg text-xs sm:text-sm bg-gray-700 outline-none'></textarea>
					</div>
					<div className='mb-3 flex justify-between items-center'>
						<p className='w-48'>You Can Also Email Us At Apac@Redtilt.Team</p>
						<button className='px-2 py-2 rounded-md bg-[red]'>Send message</button>
					</div>
				</form>
			</div>
		</div>

		<div className='flex justify-between items-center px-6 py-6 bg-[darkred] rounded-md mb-5'>
			<div className='flex flex-col'>
				<p>Newsletter</p>
				<p>Be the first one to know about insights, technologies and innovations.</p>
			</div>
			<button className='px-2 py-2 bg-[red] rounded-md'>Subscribe</button>
		</div>

		<div className='md:flex md:justify-around md:items-start'>
			
			<div className='mb-6 flex flex-col'>
				<p className='font-bold mb-3'>Company</p>
				<ul>
					<li className='pb-3'>About</li>
					<li className='pb-3'>Service</li>
					<li className='pb-3'>Works</li>
					<li className='pb-3'>Career</li>
				</ul>
			</div>
			
			<div className='mb-6 flex flex-col'>
				<p className='font-bold mb-3'>Help</p>
				<ul>
					<li className='pb-3'>Customer support</li>
					<li className='pb-3'>Terms & Conditions</li>
					<li className='pb-3'>Privacy Policy</li>
				</ul>
			</div>
			
			<div className='mb-6 flex flex-col'>
				<p className='font-bold mb-3'>Resources</p>
				<ul>
					<li className='pb-3'>Free eBooks</li>
					<li className='pb-3'>Development Tutorial</li>
					<li className='pb-3'>How to-Blog</li>
					<li className='pb-3'>Career</li>
				</ul>
			</div>
		</div>

		<div className='py-2 md:flex md:justify-between md:items-center'>
			<p className='text-xs'>&copy; Copyright 2024, All Rights Reserved</p>
			<div className='flex gap-4 py-3'>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Twitter} alt="Twitter" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Facebook} alt="Facebook" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Instagram} alt="Instagram" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Github} alt="Github" className='w-6 h-6 md:w-8 md:h-8' /></a>
			</div>
		</div>
    </>
  )
}

export default Footer