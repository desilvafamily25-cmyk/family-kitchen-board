/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: "https://www.pausesleep.com.au",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/privacy", "/disclaimer"],
}
