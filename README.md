# Grovix Connect

Public website for **GROVIX VENTURES PRIVATE LIMITED** — the holding company behind Lead Foundry (performance marketing) and AiHive (AI & business automation).

Live site: https://grovix.co.in/

## Company

- **Legal name:** GROVIX VENTURES PRIVATE LIMITED  
- **Office:** 32, Chowringhee Road, Park Street, Kolkata, West Bengal – 700071, India  
- **Email:** info@grovix.co.in  

Privacy Policy and Terms & Conditions live at `/privacy` and `/terms`.

## Development

You need Node.js 22+ (or a current LTS) and npm.

```sh
git clone <this-repository-url>
cd grovix-connect
npm i
npm run dev
```

Set `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, and (for server functions) `SUPABASE_SERVICE_ROLE_KEY` in the environment before submitting the enquiry form.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint |
