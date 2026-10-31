# MIWA website

Next.js (App Router, TypeScript) site for miwa.org.in, designed to deploy on Vercel.

## Run locally
```
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:3000
```

## Where things live
| What | Where |
|---|---|
| Contact details, nav, social links | `lib/site.ts` |
| Home page copy | `app/page.tsx` |
| Services / About copy | `app/services/page.tsx`, `app/about-us/page.tsx` (marked as drafts) |
| Blog posts | `content/blog/*.md` (title, date, excerpt, then Markdown) |
| Colours and type | `app/globals.css` (variables at the top) |
| Old-URL redirects | `next.config.ts` |

## Contact form
Uses Resend. Create a free account, verify `miwa.org.in`, then set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (for example `website@miwa.org.in`) in Vercel > Project > Settings > Environment Variables.

## Deploy
1. Push this folder to a new GitHub repo.
2. In Vercel: Add New > Project > import the repo. Framework is detected automatically.
3. Add the environment variables above and deploy. Test on the `*.vercel.app` URL.
4. When happy: Project > Settings > Domains > add `www.miwa.org.in` and follow the DNS instructions.

Before switching DNS, export your newsletter subscribers from Wix and check where your domain email is hosted.
