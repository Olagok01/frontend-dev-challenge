import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Moon } from 'lucide-react';
import { Menu, X} from 'lucide-react';
import { useState } from "react";


const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
	const toggleNavbar = () =>{
		setMobileDrawerOpen(!mobileDrawerOpen);
	}

	const toggleBody = () =>{
		document.body.classList.toggle('toggle');
	}


  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
		<div className="container px-4 mx-auto relative text-sm">
			<div className="flex justify-between items-center">
				
				<div className="flex items-center flex-shrink-0">
					<img className="h-10 w-10 mr-1" src={logo} alt="logo" />
					<span className="text-white text-xl tracking-tight">RedTilt</span>
				</div>

				<ul className="hidden lg:flex ml-14 space-x-12">
					{navItems.map((item, index) => (
						<li key={index}>
							<a href={item.href}>{item.label}</a>
						</li>
					))}
				</ul>

				<div className="hidden lg:flex justify-center space-x-12 items-center">
					<div className="py-1 px-1 border-2 border-darkred rounded-md h-17 w-17">
						<Moon onClick={toggleBody} className="rounded-full bg-darkred px-1 py-1 h-17 w-17"/>
					</div>
					<a href="#" className="bg-darkred py-2 px-3 rounded-md">Start a project</a>
				</div>

				<div className="lg:hidden md:flex flex-col justify-end">
					<button onClick={toggleNavbar}>
						{mobileDrawerOpen ? <X /> : <Menu/>}
					</button>
				</div>
			</div>
			{mobileDrawerOpen && (
				<div className="fixed right-0 z-50 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
					<ul>
						{navItems.map((item, index) => (
							<li key={index} className="py-4">
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
					<div className="flex space-x-6">
						<div className="py-1 px-1 border-2 border-darkred rounded-md h-17 w-17">
							<Moon className="rounded-full bg-darkred px-1 py-1 h-17 w-17 z-50"/>
						</div>
						<a href="#" className="py-2 px-3 border rounded-md">
							Get a project
						</a>
					</div>
				</div>
			)}
		</div>
	 </nav>
  )
}

export default Navbar