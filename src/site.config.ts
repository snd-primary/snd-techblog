import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "大殺界 -daisakkai-",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "daisakkai-dev",
	// Meta property used as the default description meta property
	description: "テックブログ。Next.js/TypeScript/JavaScript/Prisma/CSS/HTML/vim/...",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "ja-JP",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "ja_JP",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "ja-JP",
		options: {
			year: "numeric",
			month: "short",
			day: "numeric",
		},
	},
	// Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
	includeViewTransitions: false,
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
];
