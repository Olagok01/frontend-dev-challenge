import { CircleCheck } from 'lucide-react';

/* import { Cpu } from 'lucide-react';
import { Globe } from 'lucide-react';
import { CloudUpload } from 'lucide-react';
import { ShieldCheck } from 'lucide-react'; */

import Javascript from '../assets/javascript-svgrepo-com.svg';
import vue from '../assets/vue-16-svgrepo-com.svg';
import prisma from '../assets/prisma-svgrepo-com.svg';
import evernote from '../assets/evernote-svgrepo-com.svg';
import remix from '../assets/remix-glowing.svg';
import mongo from '../assets/mongodb-svgrepo-com.svg';
import image from '../assets/laptop-sports-coat-computer-beard.jpg';

import { cardDataArray } from '../constants/index.jsx';
import Card from '../constants/index.jsx';



const Offer = () => {
  return (
    <>
      <div className="text-center flex justify-center items-center flex-col bg-[radial-gradient(#b63636,transparent_1px)]">
				<h1 className="mb-2">What we offer</h1>
				<p className="capitalize rounded-full py-2 px-6 border-2 border-darkred max-w-md">our experts will help you in following fields </p>
			</div>

			<div className='flex flex-col items-center px-4 py-16 mx-auto md:items-center lg:flex-row lg:items-start gap-6 '>
				{/* start */}
				{cardDataArray.map((card, index) => (
					<Card
						key={index}
						cardNo={card.cardNo}
						cardHeadingImg={card.cardHeadingImg}
						cardTitle={card.cardTitle}
						listItems={card.listItems}
					/>
				))}

			</div>

			<div className='max-w-7xl px-6 pb-16'>
				<h1 className='text-center text-3xl'>Our Superpowers</h1>
				<div className='pt-12 px-6 mx-auto grid grid-cols-3 gap-6 lg:flex lg:flex-row lg:justify-between lg:items-center'>
					<img src={Javascript} alt="javascript" className='w-14 h-14' />
					<img src={vue} alt="javascript" className='w-14 h-14' />
					<img src={prisma} alt="javascript" className='w-14 h-14' />
					<img src={evernote} alt="javascript" className='w-14 h-14' />
					<img src={remix} alt="javascript" className='w-14 h-14' />
					<img src={mongo} alt="javascript" className='w-14 h-14' />
				</div>
			</div>

			<div className='text-center mb-5'>
				<p className='pb-3'>Read Our Blog</p>
				<div className='text-3xl font-bold'>
					<h1>Read Daily news about</h1>
					<h1>startup companies</h1>
				</div>
			</div>

			<div className='mx-5 md:flex gap-7 px-5 py-5  border border-neutral-700'>
				<div className='px-3'>
					<img src={image} alt="" className='hidden md:flex' />
				</div>

				<div className='grid grids-cols-1 content-between'>
					<div>
						<p className='text-3xl pb-4 font-normal'>Not Another Framework</p>
						<p className='pb-2'>We brought all the remix goodies over to React Router and made improvements in the process.</p>
						<p className='pb-5 border-b border-1 border-gray-700'>Now it's time to bring those improved APIs back over to Remix where they started!</p>
					</div>
					<div className='flex flex-col'>
						<div className='flex gap-3 mb-3'>
							<CircleCheck className='w-5 h-5'/>
							<p>Collaboration Tools</p>
						</div>
						<div className='flex gap-3'>
							<CircleCheck className='w-5 h-5'/>
							<p>Collaboration Tools</p>
						</div>
					</div>
				</div>
			</div>

    </>
  )
}

export default Offer