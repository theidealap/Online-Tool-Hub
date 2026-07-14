---
    name: Next.js not supported as artifact type
    description: What to do when a user explicitly requests Next.js
    ---

    The artifact system only supports these artifactType values: expo, openscad, react-vite, slides, video-js. There is no Next.js scaffold.

    **Why:** createArtifact() bootstraps from fixed templates per type; Next.js isn't one of them.

    **How to apply:** When a user asks for "Next.js", build a react-vite artifact instead (client-side routing via wouter, per-page SEO via document.title/meta tags in a small SEO helper component). Mention to the user that the site was built with React instead of Next.js, in plain language, so they aren't surprised if they expected Next.js-specific features (e.g. server-side rendering/API routes). Functionally equivalent for client-rendered content.
    