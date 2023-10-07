import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Revisamos&nbsp;</h1>
				<br />
				<h1 className={title()}>
					si el clima esta para café, mates o cervezas
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					de la mano de
				</h2>
				<h1 className={title({ color: "appa" })}>APPA&nbsp;</h1>
			</div>
		</section>
	);
}
