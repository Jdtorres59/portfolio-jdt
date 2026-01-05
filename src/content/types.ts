export type Locale = "en" | "es";

export type SocialPlatform = "linkedin" | "github" | "email";

export type SocialLink = {
  id: SocialPlatform;
  href: string;
  labelKey: string;
};

export type Profile = {
  name: string;
  roleKey: string;
  taglineKey: string;
  summaryKey: string;
  locationKey: string;
  email: string;
  photo?: {
    src: string;
    altKey: string;
  };
  social: SocialLink[];
};

export type ProjectStatus = "deployed" | "in-development" | "academic";

export type ProjectCategory = "featured" | "ai" | "engineering";

export type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tech: string[];
  mediaPlacement?: "above" | "below";
  media?: {
    poster?: {
      src: string;
      altKey: string;
    };
    video?: {
      src: string;
      posterSrc?: string;
      altKey: string;
      muted?: boolean;
      lockMuted?: boolean;
      aspect?: "16/10" | "4/3" | "9/16";
    };
  };
  links: {
    demo?: string;
    repo?: string;
    caseStudy?: string;
  };
};

export type CertificationCategory = "ai" | "software" | "systems";

export type Certification = {
  id: string;
  titleKey: string;
  issuerKey: string;
  year: string;
  category?: CertificationCategory;
  credentialId?: string;
  credentialUrl?: string;
};

export type Education = {
  id: string;
  institution: string;
  degreeKey: string;
  locationKey: string;
  periodKey?: string;
};
