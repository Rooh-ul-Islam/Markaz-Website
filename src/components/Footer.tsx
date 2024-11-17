import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className=" text-white relative">
			{/* Background blobs */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-20 right-10 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
				<div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
				<div className="absolute top-40 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
			</div>

			<div className="container mx-auto flex flex-col  lg:flex-row lg:justify-between gap-12 px-6 py-12 relative z-10">
				{/* About Us Section */}
				<div className="flex bg-cyan-700 flex-col items-center lg:items-start lg:w-1/3 space-y-4 backdrop-blur-sm  p-6 rounded-xl border border-white/10">
					<h2 className="text-lg font-semibold uppercase text-cyan-300 relative">
						About Us
						<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-300 rounded-full"></div>
					</h2>
					<p className="text-center lg:text-left text-sm text-blue-100">
						The basis of the establishment of Jamia Ruhol-ul-Islam is to provide
						religious services to the people of Balochistan, especially the
						children belonging to the hilly and rural areas of Lasbela, to
						acquire religious, contemporary and modern sciences and to expose
						them to Islamic teachings.
					</p>
					<div className="flex space-x-4">
						<Link
							href="/"
							className="text-cyan-300 hover:text-cyan-200 transition-colors"
						>
							<Facebook className="h-6 w-6" />
						</Link>
						<Link
							href="/"
							className="text-cyan-300 hover:text-cyan-200 transition-colors"
						>
							<Youtube className="h-6 w-6" />
						</Link>
						<Link
							href="/"
							className="text-cyan-300 hover:text-cyan-200 transition-colors"
						>
							<Instagram className="h-6 w-6" />
						</Link>
					</div>
				</div>

				{/* Student Resources Section */}
				<div className="lg:w-1/3 space-y-4 backdrop-blur-sm bg-cyan-800 p-6 rounded-xl border border-white/10">
					<h2 className="text-lg font-semibold uppercase text-center lg:text-left text-cyan-300 relative">
						Courses
						<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
					</h2>
					<ul className="space-y-3 text-sm text-center lg:text-left">
						{[
							"Shria 8 Year",
							"Tehfiz-ul-Quran",
							"Contemptory Studies",
							"Traditional Studies",
						].map((item) => (
							<li key={item}>
								<Link
									href="/"
									className="text-blue-100 hover:text-cyan-300 transition-colors relative group"
								>
									<span className="inline-block transform group-hover:translate-x-2 transition-transform">
										⋆ {item}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Info Section */}
				<div className="lg:w-1/3 space-y-4 text-center lg:text-left backdrop-blur-sm bg-cyan-700 p-6 rounded-xl border border-white/10">
					<h2 className="text-lg font-semibold uppercase text-cyan-300 relative">
						Zakat, Donations, and Cooperation
						<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
					</h2>
					<p className="text-blue-100">
						To collaborate online, please find the account details below:
					</p>
					<p className="text-blue-100">
						Account Title: <strong>M Naeem</strong>
					</p>
					<p className="text-blue-100">
						Account No: <strong>03063094330</strong>
					</p>
					<p className="text-blue-100">
						Bank Name: <strong>Jazz Cash</strong>
					</p>
					<p className="text-blue-100">
						Get your receipt via WhatsApp from the number below:
					</p>
					<p className="flex items-center justify-center lg:justify-start space-x-2 text-blue-100">
						<span className="text-cyan-300">03468416683</span>
					</p>
				</div>
			</div>

			{/* Bottom Section with Islamic Pattern */}
			<div className="relative z-10">
				<div className="bg-cyan-700 py-4 text-center text-sm text-blue-100 backdrop-blur-sm  border-t border-white/10">
					<p>&copy; 2024 Markaz Rooh-ul-Islam</p>
				</div>
				<div className="bg-gradient-to-r b"></div>
			</div>
		</footer>
	);
}
