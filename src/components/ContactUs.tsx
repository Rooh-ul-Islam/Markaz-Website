import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
	const contactInfo = [
		{ title: "Chairman", number: "03453364994" },
		{ title: "Principal", number: "03453971777" },
		{ title: "Administrator", number: "03468416683" },
		{ title: "Deputy Administrator", number: "03063094330" },
		{ title: "Public Relations", number: "03452311006" },
	];

	const supportReasons = [
		"Provide quality education to deserving students",
		"Maintain and improve facilities",
		"Support student housing and meals",
		"Ensure fair compensation for our dedicated staff",
	];

	const contributionWays = [
		"Monthly donations",
		"Zakat",
		"Sadaqah",
		"Continuous charity",
	];

	return (
		<section  id="contact-us" className="bg-gradient-to-b from-cyan-900 to-cyan-800 text-white py-16 md:py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					Connect with Us
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card className="bg-white/10 backdrop-blur-lg border-none text-white">
						<CardHeader>
							<CardTitle className="flex items-center text-2xl">
								<Heart className="w-6 h-6 mr-2" />
								Support Our Cause
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="mb-4">
								Jamia Ruhol-ul-Islam thrives on community support and donations.
								Your contribution makes a difference:
							</p>
							<ul className="space-y-2 my-6 ml-6 list-disc [&>li]:mt-2">
								{supportReasons.map((reason, index) => (
									<li key={index}>{reason}</li>
								))}
							</ul>
							<Separator className="my-6 bg-white/20" />
							<h4 className="font-semibold text-xl mb-4">Ways to Contribute</h4>
							<ul className="grid grid-cols-2 gap-4">
								{contributionWays.map((way, index) => (
									<li
										key={index}
										className="flex items-center"
									>
										<Heart className="w-5 h-5 mr-2 text-red-400" />
										<span>{way}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<div className="space-y-8">
						<Card className="bg-white/10 backdrop-blur-lg border-none text-white">
							<CardHeader>
								<CardTitle className="flex items-center text-2xl">
									<Phone className="w-6 h-6 mr-2" />
									Contact Administration
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-4">
									{contactInfo.map((contact, index) => (
										<li
											key={index}
											className="flex justify-between items-center"
										>
											<span className="font-medium">{contact.title}</span>
											<a
												href={`tel:${contact.number}`}
												className="hover:underline flex items-center"
											>
												<Phone className="w-4 h-4 mr-2" />
												{contact.number}
											</a>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-white/10 backdrop-blur-lg border-none text-white">
							<CardHeader>
								<CardTitle className="flex items-center text-2xl">
									<MapPin className="w-6 h-6 mr-2" />
									Location
								</CardTitle>
							</CardHeader>
							<CardContent>
								<address className="not-italic">
									Jamia Rooh ul Islam
									<br />
									Sajjan Abad, Lakhra Road
									<br />
									Uthal, Lasbela
									<br />
									Balochistan, Pakistan
								</address>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
