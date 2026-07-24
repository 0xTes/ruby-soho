/**
 * Central brand configuration.
 *
 * This file is the single source of truth for all creator-specific
 * content used throughout the application.
 */

import { FaInstagram, FaBluesky } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";

export const brand = {
  name: "Ruby Soho",

  shortName: "RS",

  creator: {
    country: "Canada",
    age: "30+",
  },

  description:
    "Authentic, playful, unapologetically nerdy content creator blending motherhood, geek culture, and bold self-expression.",

  cta: {
    label: "Subscribe",
    href: "#",
  },

  support: [
    {
      id: "coffee",
      icon: "☕",
      label: "Buy Me a Coffee",
      href: "#",
    },
    {
      id: "cashapp",
      icon: "💵",
      label: "Tip Jar with CashApp",
      href: "#",
    },
  ],

  socialLinks: [
    {
      id: "instagram",
      label: "Instagram",
      href: "#",
      icon: FaInstagram,
    },

    {
      id: "bluesky",
      label: "Bluesky",
      href: "#",
      icon: FaBluesky,
    },

    {
      id: "exclusive",
      label: "Exclusive Content",
      href: "#",
      icon: PiStarFourFill,
    },
  ],
};