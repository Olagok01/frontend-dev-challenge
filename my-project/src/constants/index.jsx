import { CircleCheck } from 'lucide-react';

import Cpu from '../assets/cpu-svgrepo-com.svg';
import Globe from '../assets/globe-alt-svgrepo-com.svg';
import CloudUpload from '../assets/cloud-upload-svgrepo-com.svg';
import ShieldCheck from '../assets/shield-check-svgrepo-com.svg';


  export const navItems = [
    { label: "Service", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Jobs", href: "#" },
  ];

  export const cardDataArray = [
    {
      cardNo: "01",
      cardHeadingImg: Cpu,
      cardTitle: "Development",
      listItems: ["UIUX", "DevOps", "Web design", "Frontend dev", "Backend dev"],
    },
    {
      cardNo: "02",
      cardHeadingImg: Globe,
      cardTitle: "MSP",
      listItems: ["Infrastructure", "Managed Monitoring", "Business Continuity", "Managed Cyber"],
    },
    {
      cardNo: "03",
      cardHeadingImg: CloudUpload,
      cardTitle: "Cloud",
      listItems: ["AWS", "Azure", "Multi-Cloud", "SRE Strategy", "Serverless"],
    },
    {
      cardNo: "04",
      cardHeadingImg: ShieldCheck,
      cardTitle: "Cyber",
      listItems: ["Cyber Audit", "Cyber Governance", "Security as a Service", "Penetration Testing"],
    },
  ];
  

const Card = ({cardNo, cardHeadingImg, cardTitle, listItems}) => {
  return (
    <div className='bg-[red] dark:hover:shadow-[#FF5A5A] flex flex-col w-72 relative pt-3 rounded-md'>
      <p className="absolute top-[-46px] left-0 text-[8rem] z-50 opacity-40">{cardNo}</p>
      <div className='flex py-5 pl-5 justify-start items-center'>
        <img src={cardHeadingImg} /* alt={`${cardTitle} icon`} */ className='pl-3 pr-2 w-14 h-14' />
        <p className='text-xl pr-3'>{cardTitle}</p>
      </div>
      <div className='pl-12'>
        <ul className='flex flex-col justify-end pl-3 pt-3 pb-7 bg-[darkred] rounded-ss-md rounded-ee-md'>
          {listItems.map((item, index) => (
          <>
            <li className='flex items-center pb-2'>
            <CircleCheck className='pr-2 w-8 h-8'/>
            <p key={index}>{item}</p>
            </li>
          </>  
          ))}
        </ul>
      </div>
		</div>
  )
}

export default Card;