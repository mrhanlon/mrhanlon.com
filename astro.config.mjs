import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    include: {
      mdi: [
        "cloud-download",
        "github",
        "bitbucket",
        "linkedin",
        "github",
        "twitter",
        "mastodon",
        "heart-broken",
      ],
    }
  })]
});
