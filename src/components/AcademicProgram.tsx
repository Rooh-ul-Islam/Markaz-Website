import { Book, BookOpen, Briefcase, Laptop } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgramSection {
	subtitle: string;
	items: string[];
}

interface Program {
	title: string;
	icon: React.ReactNode;
	details: string[] | ProgramSection[];
}

export default function AcademicPrograms() {
	const programs: Program[] = [
		{
			title: "Department of Sharia",
			icon: <Book className="h-6 w-6" />,
			details: [
				"8-year comprehensive program",
				"Equivalent to MA Islamiat and Arabic (HEC recognized)",
				"Annual graduation of 20 students",
				"Affiliated with Tanzeem Al-Madaris Ahl-e-Sunnah Board",
			],
		},
		{
			title: "Quranic Studies",
			icon: <BookOpen className="h-6 w-6" />,
			details: [	
				"Nazrah with Tajweed",
				"Tahfiz Al-Qur'an program",
				"Option to pursue Dars-e-Nizami",
			],
		},
		{
			title: "Contemporary Education",
			icon: <Laptop className="h-6 w-6" />,
			details: [
				"Primary school education",
				"Access to Model Higher Secondary School",
				"Education from Class 6 to FSC",
				"Modern curriculum integration",
			],
		},
		{
			title: "Technical Education",
			icon: <Briefcase className="h-6 w-6" />,
			details: [
				{
					subtitle: "IT Department",
					items: [
						"One-year IT diploma",
						"Freelancing training",
						"Modern computer lab",
						"Online classes available",
					],
				},
				{
					subtitle: "Vocational Training",
					items: [
						"Professional tailoring course",
						"English language programs",
						"Driving training with road safety",
						"Technical Board certified diplomas",
					],
				},
			],
		},
	];

	const renderDetails = (details: string[] | ProgramSection[]) => {
		if (Array.isArray(details) && typeof details[0] === "string") {
			return (
				<ul className="list-disc pl-5 space-y-1">
					{(details as string[]).map((detail, index) => (
						<li key={index}>{detail}</li>
					))}
				</ul>
			);
		}

		return (details as ProgramSection[]).map((section, index) => (
			<div
				key={index}
				className="mb-4"
			>
				<h3 className="font-semibold mb-2 text-cyan-700">{section.subtitle}</h3>
				<ul className="list-disc pl-5 space-y-1">
					{section.items.map((item, itemIndex) => (
						<li key={itemIndex}>{item}</li>
					))}
				</ul>
			</div>
		));
	};

	return (
		<div id="academic-programs" className="container mx-auto p-4 py-10 sm:py-16 md:py-20">
			<h1 className="text-3xl font-bold text-center mb-8 text-cyan-700">
				Academic Programs
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-6">
				{programs.map((program, index) => (
					<Card
						key={index}
						className="flex flex-col"
					>
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-cyan-500">
								{program.icon}
								<span className="text-cyan-700">{program.title}</span>
							</CardTitle>
						</CardHeader>
						<CardContent className="flex-grow">
							{renderDetails(program.details)}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
