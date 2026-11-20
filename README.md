# Dhiman Hydraulics — React storefront

A self-contained React/Vite recreation of the public Dhiman Hydraulics website. The site uses reusable React layout and page components, data-driven catalogue and product details, React Router routes, and locally bundled product and company images. It does not embed or render the original HTML pages.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; serve the `dist/` folder with any static host that supports SPA fallback to `index.html`.

## Project structure

- `src/components/` — shared navigation, footer, product cards, forms and headings
- `src/pages/` — home, catalogue, category, product, profile, and contact pages
- `src/data/site-data.json` — editable company, product, specification, and catalogue content
- `public/assets/` — locally stored public site images

To receive enquiries, configure `VITE_INQUIRY_ENDPOINT` in a local `.env` file. The endpoint should accept a JSON `POST` request. Without it the form displays setup guidance and does not pretend to send a message.
