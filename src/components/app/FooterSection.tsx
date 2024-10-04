import { CheckIcon } from "@heroicons/react/20/solid";
import { FaApple, FaXTwitter } from "react-icons/fa6";
import { facebook, gplay, instagram, logo } from "../../assets";

const FooterSection = () => {
	const linkGroups = [
		[
			"Buying and Selling",
			"Financing",
			"Find a car",
			"Sell your car",
			"Car reviews and ratings",
			"Car payments",
			"Financing",
			"Find a car",
			"Become a sales agent",
			"Car reviews and ratings",
			"Car payments",
		],
		[
			"Explore our Brand",
			"Mangocars.com",
			"Contact us",
			"Investors relations",
			"Partner with us",
			"FAQ",
			"Mangocars.com",
			"Contact us",
			"Investors relations",
			"Partner with us",
			"FAQ",
		],
		[
			"About Mango Cars",
			"About us",
			"Careers",
			"Site map",
			"Feedback",
			"About Mango Cars",
			"About us",
			"Careers",
			"Site map",
			"Feedback",
		],
	];
	return (
		<footer>
			<div className="w-full bg-primary text-white">
				<div className="mw py-4 px-4 md:px-0">
					<div className="md:flex items-end justify-between">
						<div className="">
							<h3 className="md:text-3xl text-xl font-semibold mb-2">
								Sign up to our Newsletter
							</h3>
							<p className="max-w-sm text-green-200">
								Get exclusive discount and new product gossip delivered straight
								to you
							</p>
						</div>
						<div className="relative md:w-1/2 mt-4 md:mt-0">
							<input
								type="text"
								placeholder="example@email.com"
								className="py-3 px-6 text-black rounded w-full"
							/>
							<CheckIcon className="absolute top-3 right-3 h-6 text-primary" />
						</div>
					</div>
				</div>
			</div>
			<div className="mw grid grid-cols-2 md:grid-cols-4 py-10 px-4 md:px-0">
				{linkGroups.map((linkGroup) => (
					<ul className="md:first-line:text-lg first-line:text-base text-sm md:text-base first-line:font-bold">
						{linkGroup.map((link) => (
							<li className="mb-4">{link}</li>
						))}
					</ul>
				))}
				<ul className="flex flex-col gap-4">
					<li className="md:text-lg font-bold text-center md:text-left">Our Apps</li>
					<li className="bg-black rounded-xl flex gap-2 items-center w-max text-white py-3 pl-3 pr-7">
						<FaApple size={36} />
						<div className="flex flex-col">
							<p className="text-xs -mb-1">Download on the</p>
							<h5 className="font-semibold">App Store</h5>
						</div>
					</li>
					<li className="bg-black rounded-xl flex gap-2 items-center w-max text-white py-3 pl-4 pr-6">
						<img src={gplay} className="h-9 w-9" />
						<div className="flex flex-col">
							<p className="text-xs -mb-1">Download on the</p>
							<h5 className="font-semibold">Play Store</h5>
						</div>
					</li>
					<li className="text-lg font-bold">Connect with Us</li>
					<li className="flex gap-8">
						<FaXTwitter size={24} />
						<img src={instagram} className="h-6" />
						<img src={facebook} className="h-6" />
					</li>
				</ul>
			</div>

			<div className="border-t">
				<div className="mw py-4  relative">
					<img
						src={logo}
						className="h-16 z-10 relative hidden md:block"
						alt=""
					/>
					<div className="flex items-center md:justify-center justify-between md:gap-24 md:absolute top-0 w-full h-full text-xs md:text-base">
						<img src={logo} className="h-16 z-10 relative md:hidden" alt="" />
						<p>Lagos, Nigeria</p>
						<p>Privacy Notice</p>
						<p className="w-max">@2023 Mangocars.com All rights Reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
