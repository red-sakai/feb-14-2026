"use client";

import { useMemo, useState } from "react";

const noReplies = [
	"Are you sure? 🥺",
	"Really sure? 💔",
	"Pleaseee? 🌹",
	"I’ll bring chocolates 🍫",
	"Okay… last chance? 💌",
];

export default function Home() {
	const [accepted, setAccepted] = useState(false);
	const [noCount, setNoCount] = useState(0);

	const noText = noReplies[Math.min(noCount, noReplies.length - 1)];
	const yesScale = useMemo(() => Math.min(1 + noCount * 0.12, 1.8), [noCount]);

	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
			<div className="pointer-events-none absolute -top-8 left-8 text-5xl animate-float">💖</div>
			<div className="pointer-events-none absolute right-8 top-20 text-4xl animate-float [animation-delay:200ms]">🌸</div>
			<div className="pointer-events-none absolute bottom-10 left-14 text-6xl animate-float [animation-delay:450ms]">💕</div>
			<div className="pointer-events-none absolute bottom-20 right-10 text-5xl animate-float [animation-delay:700ms]">🌹</div>

			<section className="w-full max-w-xl rounded-3xl border border-pink-200/60 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm md:p-12">
				{!accepted ? (
					<div className="animate-fade-in space-y-7">
						<p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-500">Valentine&apos;s Day 2026</p>
						<h1 className="text-4xl font-bold text-pink-700 md:text-5xl">
							Will you be my Valentine? 💘
						</h1>
						<p className="mx-auto max-w-md text-base text-pink-900/80 md:text-lg">
							PLEASEEE BIBEHKERLSSS!
						</p>

						<div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
							<button
								onClick={() => setAccepted(true)}
								style={{ transform: `scale(${yesScale})` }}
								className="rounded-full bg-pink-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-pink-700"
							>
								Yes! 💗
							</button>
							<button
								onClick={() => setNoCount((count) => count + 1)}
								className="rounded-full border border-pink-300 bg-pink-50 px-6 py-3 text-base font-medium text-pink-700 transition hover:bg-pink-100"
							>
								{noText}
							</button>
						</div>
					</div>
				) : (
					<div className="animate-fade-in space-y-6">
						<div className="text-7xl animate-pulse-heart">💞</div>
						<h2 className="text-4xl font-bold text-pink-700 md:text-5xl">Yay! You said yes! ✨</h2>
						<p className="mx-auto max-w-md text-lg text-pink-900/80">
							OMKEIII VERY GEWDDD see you sa feb 14 bibeh mwehehehehh
						</p>
						<button
							onClick={() => {
								setAccepted(false);
								setNoCount(0);
							}}
							className="rounded-full border border-pink-300 bg-white px-6 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-50"
						>
							Ask me again
						</button>
					</div>
				)}
			</section>
		</main>
	);
}
