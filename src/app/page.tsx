import AboutSection from "@/components/AboutInstitution";
import AcademicPrograms from "@/components/AcademicProgram";
import ContactUs from "@/components/ContactUs";
import StudentLife from "@/components/StudentLife";
import Testimonies from "@/components/Testimonies";
import Link from "next/link";

export default function Component() {
	return (
		<div className="min-h-screen relative">
			<div className="h-24 w-full bg-cyan-950 relative overflow-hidden">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B4941F' fill-opacity='0.15'%3E%3Cpath d='M50 0L62.5 12.5H87.5L100 25V50L87.5 62.5V87.5L75 100H50L37.5 87.5H12.5L0 75V50L12.5 37.5V12.5L25 0H50zM50 25L37.5 37.5V62.5L50 75L62.5 62.5V37.5L50 25zM25 25V37.5L37.5 50L25 62.5V75H37.5L50 62.5L62.5 75H75V62.5L62.5 50L75 37.5V25H62.5L50 37.5L37.5 25H25z'/%3E%3C/g%3E%3C/svg%3E")`,
						backgroundSize: "100px 100px",
					}}
				/>
			</div>
			{/* Hero Section */}
			<main className="relative min-h-[calc(100vh-6rem)]">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/back.jpeg')`,
					}}
				/>

				<div className="container relative mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-4 text-center text-white">
					<h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
						Jamia Rooh-ul-Islam
					</h1>
					<p className="mb-8 max-w-3xl text-lg md:text-xl">
						Welcome to Jamia Ruhol-ul-Islam, a premier Islamic educational
						institution in Balochistan dedicated to combining religious
						education with modern learning. Established in 1996 by Shams Ulama
						Mufti Muhammad Rahim, our institution stands as a beacon of
						knowledge and spiritual growth.
					</p>
					<Link
						href="/founder"
						className="rounded-md bg-cyan-900  px-8 py-3 font-medium text-white transition-colors hover:bg-cyan-800"
					>
						Learn more
					</Link>
				</div>
			</main>
			<Testimonies />
			<AboutSection />
			<AcademicPrograms />
			<StudentLife />
			<section className="py-10 sm:py-16 md:py-20 flex flex-col items-center p-4">
				<blockquote className="mt-6 italic text-lg md:text-xl lg:text-2xl">
					Join us in our mission to cultivate knowledge, wisdom, and character
					in the next generation of Muslim scholars and leaders.
				</blockquote>
			</section>
			<ContactUs />
			<section className="bg-gradient-to-t from-cyan-900 to-cyan-800 text-primary-foreground p-6 border-t border-cyan-900">
				<div className=" text-center text-base text-white">
					<p>&copy; 2024 Jamia Rooh-ul-Islam</p>
				</div>
			</section>
		</div>
	);
}
