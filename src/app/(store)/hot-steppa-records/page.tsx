import { Card } from "@/ui/card";
import { SeoH1 } from "@/ui/seo-h1";

const releaseData = [
	{
		image: "/images/tuff-like-iron-unbreakable-cover.png",
		description: "Tuff Like Iron",
		name: "Unbreakable",
		link: "/hot-steppa-records/unbreakable",
	},
	{
		image: "/images/tuff-like-iron-sometimeish-cover.png",
		description: "Tuff Like Iron",
		name: "Sometimeish",
		link: "/hot-steppa-records/sometimeish",
	},
	{
		image: "/images/tuff-like-iron-roll-out-cover.png",
		description: "Tuff Like Iron",
		name: "Roll Out",
		link: "/hot-steppa-records/rollout",
	},
];

export default function HotSteppaRecordsPage() {
	return (
		<main className="pb-8">
			<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Hot Steppa Records</SeoH1>

			<p className="text-pretty text-neutral-600">
				Founded in LA and based in Jamaica. Our sound is just like our DJ sets - heavy on Reggae & Dancehall,
				spiced with Afrobeats, Hip Hop, and Pop. Explore our current catalog and get ready for more fire in
				2024.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3" style={{ justifyContent: "center" }}>
				{releaseData.map((item, index) => (
					<div key={index}>
						<Card image={item.image} name={item.name} description={item.description} link={item.link} />
					</div>
				))}
			</div>

			<iframe
				src="https://open.spotify.com/embed/album/0YpIVMHDlg7zuI9bO8Ev3Y?utm_source=generator"
				width="100%"
				height="800"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				style={{ margin: "2em 0" }}
			/>

			<iframe
				src="https://open.spotify.com/embed/track/2f4TDUAuTkvCKJ32oymmr7?utm_source=generator"
				width="100%"
				height="152"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				style={{ margin: "2em 0" }}
			/>

			<iframe
				className="responsive-video"
				id="yt-1570995"
				src="https://www.youtube.com/embed/unpGdjlTOxw?rel=0&amp;wmode=transparent&amp;enablejsapi=1"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				loading="lazy"
				title="TUFF LIKE IRON - SOMETIMEISH"
				style={{ margin: "2em 0" }}
			/>

			<iframe
				src="https://open.spotify.com/embed/track/3JNLF4PPqwWNqHqSGeFfWV?utm_source=generator"
				width="100%"
				height="152"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				style={{ margin: "2em 0" }}
			/>

			<iframe
				className="responsive-video"
				id="yt-1571002"
				src="https://www.youtube.com/embed/EonU3YtN3bQ?rel=0&amp;wmode=transparent&amp;enablejsapi=1"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				loading="lazy"
				title="Tuff Like Iron - Roll Out (Official Video)"
				style={{ margin: "2em 0" }}
			/>
		</main>
	);
}
