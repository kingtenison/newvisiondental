import { getServerSupabase } from '@/app/lib/supabase-server';

export async function GET() {
  const baseUrl = 'https://newvisiondentalclinic.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { path: '', priority: '1.0', changefreq: 'weekly', lastmod: currentDate },
    { path: '/services', priority: '0.95', changefreq: 'weekly', lastmod: currentDate },
    { path: '/locations', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { path: '/contact', priority: '0.85', changefreq: 'monthly', lastmod: currentDate },
    { path: '/book', priority: '0.85', changefreq: 'monthly', lastmod: currentDate },
    { path: '/about', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { path: '/faq', priority: '0.85', changefreq: 'weekly', lastmod: currentDate },
    { path: '/blog', priority: '0.8', changefreq: 'daily', lastmod: currentDate },
    { path: '/gallery', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
  ];

  const serviceSlugs = [
    'consultation',
    'dental-x-ray-periapical',
    'scaling-polishing',
    'emergency-dentistry',
    'minor-oral-surgery',
    'composite-restoration',
    'tooth-extraction',
    'root-canal-treatment',
    'crown-bridge-recementation',
    'dental-veneers',
    'teeth-whitening',
    'dental-implants',
    'fluoride-therapy-children',
    'fissure-sealing-children',
    'orthodontics-braces',
  ];

  const locationSlugs = [
    'dentist-north-legon',
    'dentist-ashaley-botwe',
    'dentist-acp-estate',
  ];

  const serviceRoutes = serviceSlugs.map(s => ({
    path: `/services/${s}`,
    priority: '0.85',
    changefreq: 'monthly',
    lastmod: currentDate,
  }));

  const locationRoutes = locationSlugs.map(l => ({
    path: `/locations/${l}`,
    priority: '0.85',
    changefreq: 'monthly',
    lastmod: currentDate,
  }));

  // Fetch dynamic blog posts
  let blogRoutes: Array<{ path: string; priority: string; changefreq: string; lastmod: string }> = [];
  try {
    const supabase = getServerSupabase();
    const { data: posts } = await supabase
      .from('blogs')
      .select('slug, updated_at, published_at')
      .eq('status', 'published');

    if (posts && Array.isArray(posts)) {
      blogRoutes = posts.map(p => ({
        path: `/blog/${p.slug}`,
        priority: '0.7',
        changefreq: 'weekly',
        lastmod: (p.updated_at || p.published_at || currentDate).split('T')[0],
      }));
    }
  } catch (err) {
    console.error('Error fetching blog routes for sitemap:', err);
  }

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${allRoutes
    .map(
      r =>
        `<url>
    <loc>${baseUrl}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join('\n  ')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
