import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Book, Calendar, MapPin, Shirt, Users } from "lucide-react";
import { Button } from "./ui/button";

export default function StudentLife() {
	const activities = [
		"Annual educational tours",
		"Weekly literary gatherings",
		"Monthly knowledge assemblies",
		"Weekly religious lessons",
		"National day celebrations",
		"Environmental campaigns",
		"Anti-drug awareness programs",
	];

	const sports = ["Cricket", "Football", "Badminton", "Regular competitions"];

	const fastFacts = [
		{
			icon: <MapPin className="w-5 h-5" />,
			label: "Location",
			value: "Uthal, Lasbela, Balochistan",
		},
		{
			icon: <MapPin className="w-5 h-5" />,
			label: "Distance from Karachi",
			value: "120km",
		},
		{
			icon: <Users className="w-5 h-5" />,
			label: "Alumni",
			value: "166 graduates",
		},
		{
			icon: <Calendar className="w-5 h-5" />,
			label: "Established",
			value: "1996",
		},
	];

	const affiliations = [
		"Tanzeem-ul-Madaris Ahl-e-Sunnah Pakistan",
		"Baluchistan Societies",
	];

	const dressCode = [
		"White Turban",
		"Blue Color Jabba",
		"White Shalwar Kameez",
	];

	return (
		<section className="bg-gradient-to-b from-cyan-800 to-cyan-900 text-white py-16 md:py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					Student Life at Jamia Ruhol-ul-Islam
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<Card className="bg-white/10 backdrop-blur-lg border-none text-white">
						<CardHeader>
							<CardTitle className="flex items-center text-2xl">
								<Book className="w-6 h-6 mr-2" />
								Extracurricular Activities
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{activities.map((activity, index) => (
									<li
										key={index}
										className="flex items-start"
									>
										<Award className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-cyan-300" />
										<span>{activity}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card className="bg-white/10 backdrop-blur-lg border-none text-white">
						<CardHeader>
							<CardTitle className="flex items-center text-2xl">
								<Award className="w-6 h-6 mr-2" />
								Sports
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="grid grid-cols-2 gap-4">
								{sports.map((sport, index) => (
									<li
										key={index}
										className="flex items-center"
									>
										<Badge
											variant="secondary"
											className="mr-2"
										>
											{sport}
										</Badge>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card className="bg-white/10 backdrop-blur-lg border-none text-white md:col-span-2 lg:col-span-1">
						<CardHeader>
							<CardTitle className="flex items-center text-2xl">
								<Users className="w-6 h-6 mr-2" />
								Fast Facts
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-4">
								{fastFacts.map((fact, index) => (
									<li
										key={index}
										className="flex items-center"
									>
										{fact.icon}
										<span className="ml-2 font-semibold">{fact.label}:</span>
										<span className="ml-2">{fact.value}</span>
									</li>
								))}
							</ul>
							<div className="mt-6">
								<h4 className="font-semibold text-xl mb-2">Affiliations</h4>
								<ul className="list-disc list-inside">
									{affiliations.map((affiliation, index) => (
										<li key={index}>{affiliation}</li>
									))}
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>

				<Card className="bg-white/10 backdrop-blur-lg border-none text-white mt-8">
					<CardHeader>
						<CardTitle className="flex items-center text-2xl">
							<Shirt className="w-6 h-6 mr-2" />
							Dress Code
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">Students are required to wear:</p>
						<ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{dressCode.map((item, index) => (
								<li
									key={index}
									className="flex items-center"
								>
									<Button
										variant="ghost"
										size={"lg"}
										className="mr-2 text-base font-semibold"
									>
										{item}
									</Button>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
