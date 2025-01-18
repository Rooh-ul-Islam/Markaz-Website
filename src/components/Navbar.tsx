"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // Adjust threshold for mobile here
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="w-full px-4 py-2 absolute top-8 left-0 right-0 z-10">
			<div className="container mx-auto">
				<div className="rounded-xl bg-white shadow-lg">
					<div className="flex h-20 items-center justify-between px-8">
						{/* Logo */}
						<Link
							href="/"
							className="flex items-center gap-2"
						>
							<Image
								src="/logo.png"
								alt="Maryam Institute"
								className="h-12 w-12"
								width={48}
								height={48}
							/>
							<div className="flex flex-col">
								<span className="text-lg font-semibold uppercase text-black">
									Jamia
								</span>
								<span className="text-sm uppercase text-black">
									Rooh-ul-Islam
								</span>
							</div>
						</Link>

						{/* Mobile Menu Button */}
						{isMobile && (
							<button
								className="md:hidden"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								{isMenuOpen ? (
									<X className="h-6 w-6 text-black" />
								) : (
									<Menu className="h-6 w-6 text-black" />
								)}
							</button>
						)}

						{/* Navigation Links */}
						<nav
							className={`${
								isMenuOpen ? "flex" : "hidden"
							} absolute left-0 right-0 top-20 z-20 flex-col gap-4 bg-white p-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0`}
						>
							<Link
								href="/"
								className={cn(
									"",
									buttonVariants({
										variant: "link",
										className: "font-medium",
									})
								)}
							>
								Home
							</Link>
							<Link
								href="#courses"
								className={cn(
									"",
									buttonVariants({
										variant: "link",
										className: "font-medium",
									})
								)}
							>
								Courses
							</Link>
							<Link
								href="/about"
								className={cn(
									"",
									buttonVariants({
										variant: "link",
										className: "font-medium",
									})
								)}
							>
								About
							</Link>
							<Link
								href="/gallery"
								className={cn(
									"",
									buttonVariants({
										variant: "link",
										className: "font-medium",
									})
								)}
							>
								Gallery
							</Link>
							<Link
								href="/contact"
								className={cn(
									"",
									buttonVariants({
										variant: "default",
										className: "font-medium bg-cyan-700 hover:bg-cyan-800",
									})
								)}
							>
								Contact Us
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
