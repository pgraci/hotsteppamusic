import { getTranslations } from "@/i18n/server";
import { Newsletter } from "@/ui/footer/newsletter.client";
import { YnsLink } from "@/ui/yns-link";
// import type { SVGAttributes } from "react";

const sections = [
	{
		header: "Shop",
		links: [
			{
				label: "Shop",
				href: "/category/apparel",
			},
			{
				label: "Sound System",
				href: "/sound-system",
			},
			{
				label: "Record Label",
				href: "/hot-steppa-records",
			},
		],
	},
	{
		header: "Company",
		links: [
			{
				label: "About",
				href: "/about",
			},
			{
				label: "Contact",
				href: "/contact",
			},
			{
				label: "Returns & Exchanges",
				href: "/returns-exchanges",
			},
		],
	},
];

export async function Footer() {
	const t = await getTranslations("Global.footer");

	return (
		<footer className="w-full bg-neutral-50 p-6 text-neutral-800 md:py-12">
			<div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between">
				<div className="">
					<div className="flex w-full max-w-sm flex-col gap-2">
						<h3 className="font-semibold">{t("newsletterTitle")}</h3>
						<Newsletter />
					</div>
				</div>

				<nav className="grid grid-cols-2 gap-16">
					{sections.map((section) => (
						<section key={section.header}>
							<ul role="list" className="grid gap-1">
								{section.links.map((link) => (
									<li key={link.label}>
										<YnsLink className="underline-offset-4 hover:underline" href={link.href}>
											{link.label}
										</YnsLink>
									</li>
								))}
							</ul>
						</section>
					))}
				</nav>
			</div>
			<div className="container mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
				<div>
					<p>© 2024 Hot Steppa LLC / Hot Steppa Productions Limited</p>
				</div>
				<div className="flex items-center gap-4">
					<YnsLink
						className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
						href="https://instagram.com/hotsteppamusic"
					>
						@hotsteppamusic
					</YnsLink>
				</div>
			</div>
		</footer>
	);
}
