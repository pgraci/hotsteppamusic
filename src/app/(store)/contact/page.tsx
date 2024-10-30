import { SeoH1 } from "@/ui/seo-h1";

export default function ContactPage() {
	return (
		<main className="pb-8">
			<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Contact Us</SeoH1>
			<p className="text-pretty text-neutral-600"></p>

			<p className="text-pretty text-neutral-600">
				HOT STEPPA, LLC
				<br />
				10596 National Blvd, #2, Los Angeles, CA 90034
				<br />
				323-975-1492
			</p>

			<p className="text-pretty text-neutral-600">
				HOT STEPPA PRODUCTIONS LIMITED
				<br />
				61 Windsor Avenue, St Anns Bay, St Ann, Jamaica
				<br />
				876-997-9067
			</p>

			<p className="text-pretty text-neutral-600">
				Contact us&nbsp;using the form below for questions on orders,
				<br />
				or to book Hot Steppa Sound System&nbsp;and Artists!
			</p>

			<p className="text-pretty text-neutral-600">
				<a title="Returns &amp; Exchanges" href="/returns-exchanges">
					Returns/Exchanges
				</a>
			</p>
		</main>
	);
}
