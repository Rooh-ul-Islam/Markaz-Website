import Image from "next/image";

const AboutSection = () => {
	return (
		<section id="about-us" className="bg-cyan-700 py-20 text-white">
			<div className="container mx-auto px-4 text-center md:text-left relative">
				<div className="flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10">
					<div className="w-full md:w-1/2 relative group">
						<Image
							src="/bott.jpeg"
							alt="Maryam Institute"
							width={800}
							height={600}
							className="w-full h-auto rounded-xl shadow-2xl relative z-10 transform transition duration-500 hover:scale-105 border border-white/20"
						/>
					</div>

					<div className="w-full md:w-1/2 backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 flex flex-col space-y-10 md:space-y-14">
						<div>
							<h3 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
								Our Vision
							</h3>
							<p className="leading-7 text-lg [&:not(:first-child)]:mt-6">
								To provide comprehensive Islamic education while embracing
								modern sciences, creating well-rounded individuals who serve
								both their faith and society.
							</p>
						</div>

						<div>
							<h3 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
								Our Mission
							</h3>
							<ul className="text-lg mb-8 text-blue-100 leading-relaxed my-6 ml-6 list-disc [&>li]:mt-2 text-left">
								<li>
									Making righteous Muslims through religious education and
									training
								</li>
								<li>
									Providing opportunities for modern sciences alongside
									religious studies
								</li>
								<li>Developing skilled citizens with strong character</li>
								<li>
									Serving the educational needs of Balochistan of both urban and especially rural and
									hilly areas
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
