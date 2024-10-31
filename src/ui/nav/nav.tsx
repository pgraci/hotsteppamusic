import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { YnsLink } from "@/ui/yns-link";

import Logo from "@/images/logo.svg";

const links = [
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
];

export const Nav = async () => {
	return (
		<header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-md nav-border-reveal">
			<div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:flex-row sm:flex-wrap items-center md:items-start sm:px-6 md:flex-nowrap lg:px-8 md:items-center">
				<YnsLink href="/">
					<img src={Logo.src} style={{ marginRight: "1em" }} />
				</YnsLink>

				<div className="sm:mr-auto w-full md:w-auto">
					<NavMenu links={links} />
				</div>

				<div className="flex items-center justify-start gap-x-6 w-full md:w-auto">
					<SearchNav />
					<CartSummaryNav />
				</div>
			</div>
		</header>
	);
};
