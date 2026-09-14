import type { ExpressiveCodeConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from "./types/config";
import { LinkPreset } from "./types/config";
export const siteConfig: SiteConfig = {
 title: "Miike's Blog", subtitle: "记录、探索与分享", lang: "zh_CN",
 themeColor: { hue: 350, fixed: false },
 banner: { enable: true, src: "assets/images/banner.png", position: "center", credit: { enable: false, text: "", url: "" } },
 toc: { enable: true, depth: 2 }, favicon: [{ src: "assets/images/avatar.png" }],
};
export const navBarConfig: NavBarConfig = { links: [LinkPreset.Home, LinkPreset.Archive, LinkPreset.About] };
export const profileConfig: ProfileConfig = {
 avatar: "assets/images/avatar.png", name: "Miike", bio: "记录、探索与分享。",
 links: [{ name: "Github", icon: "fa6-brands:github", url: "https://github.com/cut3y1/Miikes-blogs" }],
};
export const licenseConfig: LicenseConfig = { enable: false, name: "CC BY-NC-SA 4.0", url: "https://creativecommons.org/licenses/by-nc-sa/4.0/" };
export const expressiveCodeConfig: ExpressiveCodeConfig = { theme: "github-dark" };
