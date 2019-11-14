const config = {
  siteTitle: "Yoon's Blog", // Site title.
  siteTitleShort: "Yoon's Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "A blog for programming, science, and rants.", // Alternative site title for SEO.
  siteLogo: "", // Logo used for SEO and manifest.
  siteUrl: "https://yoons.blog", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Yoon's blog for programming, science, and rants.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "static/profile.jpg", // FB Application ID for using app insights
  googleAnalyticsID: "UA-152600302-1", // GA tracking ID.
  disqusShortname: "yoons-blog", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Yoon", // Username to display in the author segment.
  userEmail: "yoonoh930@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Lyon, France", // User location to display in the author segment.
  userAvatar: "../static/profile.jpg", // User avatar to display in the author segment.
  userDescription:
    "Interested in lots of things, but because unequivalent retention skills as much as the curiosity, ended up making a new blog", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/yoonoh930",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/YooonOh",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:yoonoh930@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Yoonseok Oh", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
