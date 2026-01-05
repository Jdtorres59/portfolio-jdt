import type { Profile } from "./types";

export const profile: Profile = {
  name: "Juan David Torres",
  roleKey: "profile.role",
  taglineKey: "profile.tagline",
  summaryKey: "profile.summary",
  locationKey: "profile.location",
  email: "Jd.torresc1@uniandes.edu.co",
  photo: {
    src: "/media/about/JuanDavidPortfolio.png",
    altKey: "profile.photoAlt",
  },
  social: [
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/juan-david-torres-casas-b26162382/",
      labelKey: "social.linkedin",
    },
    {
      id: "github",
      href: "https://github.com/Jdtorres59",
      labelKey: "social.github",
    },
    {
      id: "email",
      href: "mailto:Jd.torresc1@uniandes.edu.co",
      labelKey: "social.email",
    },
  ],
};
