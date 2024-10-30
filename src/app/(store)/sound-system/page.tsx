import { Card } from "@/ui/card";
import { SeoH1 } from "@/ui/seo-h1";

const teamData = [
	{
		image: "/images/hotsteppa-djs-phil-hotsteppa.jpg",
		name: "Phil Hot Steppa",
		description: "@philhotsteppa",
		link: "https://instagram.com/philhotsteppa",
	},
	{
		image: "/images/hotsteppa-djs-tetris.jpg",
		name: "Dj Tetris",
		description: "@tetty_hotsteppa",
		link: "https://instagram.com/tetty_hotsteppa",
	},
	{
		image: "/images/hotsteppa-djs-yungg-trip.jpg",
		name: "Yungg Trip",
		description: "yunggtripofficial.com",
		link: "https://www.yunggtripofficial.com",
	},
	{
		image: "/images/hotsteppa-djs-sadeki.jpg",
		name: "DJ Sadeki",
		description: "@djsadekihotsteppa",
		link: "https://instagram.com/djsadekihotsteppa",
	},
	{
		image: "/images/hotsteppa-djs-stich.jpg",
		name: "DJ Stich",
		description: "@djstich_music",
		link: "https://instagram.com/djstich_music",
	},
];

const eventsData = [
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Oct 19, 2024",
		name: "Sky High @ Earth Family Farms",
		description: "Ocho Rios",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Oct 18, 2024",
		name: "Hot Steppa Pool Party",
		description: "Ocho Rios",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Sept 14, 2024",
		name: "Sky High @ Earth Family Farms",
		description: "Ocho Rios",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Aug 17, 2024",
		name: "Sky High @ Earth Family Farms",
		description: "Ocho Rios",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Aug 5, 2024",
		name: "Milkcrate Mondays LA",
		description: "DTLA",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Aug 4, 2024",
		name: "LBC Park Jam",
		description: "Cesar Chavez Park, LBC",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "May 28 2024",
		name: "Tuff Like Iron Unbreakable Launch",
		description: "Bunny's Seaside, Kingston",
		link: "/hot-steppa-records/unbreakable",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "May 18 2024",
		name: "Next Fest LA",
		description: "LA County Fair, Los Angeles",
		link: "/hot-steppa-records/sometimeish",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Feb 16 & 17, 2024",
		name: 'Flow Life "After Vibes" After Parties',
		description: "Harvelles, LBC",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Aug 26 2023",
		name: "Litty In the City",
		description: "Vortex, Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "July 8 2023",
		name: "Surf Skate Art Rock Festival",
		description: "Vortex, Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Jun 17 & 19 2023",
		name: "Leimert Park Juneteenth Festival",
		description: "Harun, Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "May 20 2023",
		name: "Litty In the City",
		description: "Vortex, Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Apr 25, 2023",
		name: "Irie Tuesdays",
		description: "Carbon, Culver City",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Mar 1, 2023",
		name: "Hot Steppa Sessions",
		description: "Decoded HQ, Santa Monica",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Feb 18, 2023",
		name: "Cali Vibes Fest",
		description: "Boomyard Stage, LBC",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Jan 21, 2023",
		name: "BlackLeaf First Smoke of The Day Family Reunion",
		description: "Vortex, LA",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Dec 6, 2022",
		name: "Irie Tuesdays",
		description: "LA",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Nov 6, 2022",
		name: "Reggae Sundays w Kingston 12 Hifi",
		description: "Kingston 12 Studio, Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Oct 25, 2022",
		name: "Future Cannabis Project",
		description: "Santa Monica",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Jul 30, 2022",
		name: "Temperature Beach Rave",
		description: "Zion Oasis, St. Thomas JA",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Jul 5, 2022",
		name: "Irie Tuesdays",
		description: "Carbon, LA",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Jul 3, 2022",
		name: "LBC Park Jam",
		description: "Cesar Chavez Park, LBC",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Jun 18, 2022",
		name: "Leimert Park Juneteenth Festival",
		description: "Harun, Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Jun 7, 2022",
		name: "Irie Tuesdays",
		description: "Carbon, LA",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "May 29, 2022",
		name: "Reggae Sundays w Kingston 12 Hifi",
		description: "Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "May 28, 2022",
		name: "Saturdaze",
		description: "Harun, Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
	{
		image: "/images/hotsteppa-events-default.jpg",
		date: "Jun 19, 2021",
		name: "Leimert Park Juneteenth Festival",
		description: "Harun, Los Angeles",
		link: "/hot-steppa-records/rollout",
	},
];

export default function SoundSystemPage() {
	return (
		<main className="pb-8">
			<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Hot Steppa Sound System</SeoH1>
			<img
				src="/images/hot-steppa-2024-logo-sm800-soundsystem.png"
				style={{ margin: "2em auto", width: "100%", maxWidth: "400px", height: "auto" }}
			/>
			<p className="text-pretty text-neutral-600">
				The ultimate party starter! Featuring premier DJs, Artists, and Dancers, blending reggae, dancehall,
				afrobeats, hip hop, R&B, and pop into an authentic sound-system experience that leaves guests wanting
				more. Catch us at local events in Los Angeles and Jamaica. Available for bookings throughout the US
				and Caribbean.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5" style={{ justifyContent: "center" }}>
				{teamData.map((item, index) => (
					<div key={index}>
						<Card image={item.image} name={item.name} description={item.description} link={item.link} />
					</div>
				))}
			</div>
			<iframe
				width="100%"
				height="420"
				allow="autoplay"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1831360737&amp;color=%23fc644c&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
				style={{ margin: "2em 0" }}
			/>
			<iframe
				src="https://open.spotify.com/embed/playlist/7ztZBz5oZhY6xkSgtud35Q?utm_source=generator&amp;theme=0"
				width="100%"
				height="420"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				style={{ margin: "2em 0" }}
			/>
			<h2>EVENTS</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4" style={{ justifyContent: "center" }}>
				{eventsData.map((item, index) => (
					<div key={index}>
						<Card
							image={item.image}
							name={item.name}
							description={item.description}
							date={item.date}
							variant="event"
						/>
					</div>
				))}
			</div>
		</main>
	);
}
