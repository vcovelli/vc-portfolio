# Vincent Covelli — portfolio

Professional portfolio with selected application and data-engineering projects, work experience, education, and contact information.

[View the portfolio](https://vcovelli.github.io/vc-portfolio/) · [LinkedIn](https://www.linkedin.com/in/vincent-covelli/)

Built with React, Vite, Tailwind CSS and Framer Motion. The contact form uses EmailJS; its browser identifiers are public configuration. Restrict the service to the portfolio's allowed origins in the EmailJS dashboard.

## Local development

Use Node.js 22 or later. Run `npm ci`, then `npm run dev`. `npm run build` generates `dist/`.

## Publishing

The source lives on `main`. `npm run deploy` builds the site and publishes `dist/` to `gh-pages`. GitHub Pages serves that branch. Keep build output off the source branch.

The résumé and headshot in `public/` are intentionally public professional assets. Check the résumé before publishing a new version. Runtime credentials belong in ignored local environment files; commit checks and CI scan for accidental credentials.
