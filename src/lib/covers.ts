const files = import.meta.glob('$lib/images/cover_art/*.jpg', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

const find = (id: string) => {
	const key = Object.keys(files).find((k) => k.includes(id));
	if (!key) throw new Error(`cover not found: ${id}`);
	return files[key];
};

export type Cover = { src: string; title: string; artist: string; kind: string };

// Titles and artists as printed on each cover.
export const covers: Cover[] = [
	{ src: find('118423609'), title: 'Azania', artist: 'Entity Musiq', kind: 'Album cover' },
	{ src: find('20250313-0001'), title: 'Halaal Flavour #042', artist: 'Fiso El Musica', kind: 'Mix cover' },
	{ src: find('92363944'), title: 'The Whole Truth', artist: 'Cargo', kind: 'Album cover' },
	{ src: find('20250313-0007'), title: 'ProjeXxx 6', artist: 'Mdesigns', kind: 'Artwork' },
	{ src: find('120653087'), title: 'Siya Jaiva Vol. 01', artist: 'Vista SA', kind: 'Mix cover' },
	{ src: find('20250313-0002'), title: 'A Short Story', artist: 'Cargo', kind: 'Single cover' },
	{ src: find('147215379'), title: 'Broken Ghetto Child', artist: 'Proof', kind: 'Single cover' },
	{ src: find('95526366'), title: 'Reading Room', artist: 'Mdesigns', kind: 'Artwork' },
	{ src: find('20250313-0004'), title: 'Migi D6ix', artist: 'Migi D6ix', kind: 'Artist card' },
	{ src: find('120792411'), title: 'Friday Session', artist: 'DJ Msindo', kind: 'Event flyer' },
	{ src: find('20250313-0009'), title: 'Restricted Collections Vol. 3', artist: 'Papsie Papsie', kind: 'Mix cover' },
	{ src: find('20250313-0003'), title: 'Another Short Story', artist: 'Cargo', kind: 'Album cover' },
	{ src: find('20250313-0010'), title: 'Open Field', artist: 'Mdesigns', kind: 'Artwork' },
	{ src: find('117656769'), title: 'Night Street', artist: 'Mdesigns', kind: 'Artwork' },
	{ src: find('20250313-0011'), title: 'Journey to Africa', artist: "It's Loshka SA", kind: 'Mix cover' },
	{ src: find('120578610'), title: 'Top Deck', artist: 'Luther King ft. Blessing Ramadan', kind: 'Single cover' }
];
