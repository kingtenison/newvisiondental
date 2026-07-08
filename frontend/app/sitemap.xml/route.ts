export async function GET() {
  const baseUrl = 'https://newvisiondental.com';

  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/locations', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.7', changefreq: 'weekly' },
    { path: '/book', priority: '0.9', changefreq: 'monthly' },
    { path: '/gallery', priority: '0.5', changefreq: 'monthly' },
  ];

  const serviceSlugs = [
    'consultation',
    'dental-x-ray-periapical',
    'scaling-polishing',
    'teeth-whitening',
    'dental-implants',
    'composite-restoration',
    'root-canal-treatment',
    'crown-bridge-recementation',
    'tooth-extraction',
    'dental-veneers',
    'fluoride-therapy-children',
    'fissure-sealing-children',
    'emergency-dentistry',
    'minor-oral-surgery',
  ];

  const locationSlugs = [
    'dentist-north-legon',
    'dentist-ashaley-botwe',
    'dentist-acp-estate',
  ];

  const serviceRoutes = serviceSlugs.map(s => ({
    path: `/services/${s}`,
    priority: '0.8',
    changefreq: 'monthly' as const,
  }));

  const locationRoutes = locationSlugs.map(l => ({
    path: `/locations/${l}`,
    priority: '0.7',
    changefreq: 'monthly' as const,
  }));

  const allRoutes = [...routes, ...serviceRoutes, ...locationRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      r =>
        `<url><loc>${baseUrl}${r.path}</loc><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`
    )
    .join('\n  ')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
