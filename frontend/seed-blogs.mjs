import { writeFileSync } from "fs";

const SUPABASE_URL = "https://ovcjagthpbeapizvjehv.supabase.co";
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92Y2phZ3RocGJlYXBpenZqZWh2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDI4ODExMCwiZXhwIjoyMDg5ODY0MTEwfQ.YQKxQ7XM3_rWj17Bwz_MDZhvXeSPxck92FyVdgxV2EU";

const posts = [
  {
    title: "How Much Do Dental Implants Cost in Ghana? (2026 Pricing Guide)",
    slug: "how-much-do-dental-implants-cost-ghana",
    excerpt: "Looking for dental implant costs in Ghana? We break down the full pricing for single implants, all-on-4 implants, and payment options at New Vision Dental Clinic in Accra.",
    featured_image: "/images/blog/dental-implants-cost.jpg",
    author: "New Vision Dental",
    read_time: "7 min read",
    tags: ["dental implants", "implant cost", "Ghana dental costs", "tooth replacement"],
    status: "published",
    published_at: "2026-07-01T08:00:00Z",
    content: `<h2>Understanding Dental Implant Costs in Ghana</h2>
<p>Dental implants are widely considered the gold standard for replacing missing teeth. Unlike dentures or bridges, implants fuse directly with your jawbone, providing a permanent, natural-looking solution that can last a lifetime. But the most common question patients ask is: <strong>how much do dental implants cost in Ghana?</strong></p>
<p>At <strong>New Vision Dental Clinic</strong> in Accra, we believe in transparent pricing and high-quality care. This guide will help you understand the full cost of dental implants and what factors influence the final price.</p>

<h2>What Is a Dental Implant?</h2>
<p>A dental implant is a titanium post surgically placed into your jawbone to replace the root of a missing tooth. After the implant integrates with the bone (a process called osseointegration), a custom-made crown is attached to restore function and appearance.</p>
<p>A complete implant consists of three parts:</p>
<ul>
<li><strong>The implant fixture</strong> — the titanium post placed in the jawbone</li>
<li><strong>The abutment</strong> — the connector piece that joins the implant to the crown</li>
<li><strong>The crown</strong> — the visible tooth-coloured restoration</li>
</ul>

<h2>Single Dental Implant Cost Breakdown in Ghana</h2>
<p>At New Vision Dental Clinic, our pricing for a single dental implant typically includes:</p>
<ul>
<li><strong>Consultation and 3D imaging:</strong> GHS 300 — GHS 500</li>
<li><strong>Implant fixture (titanium):</strong> GHS 3,000 — GHS 5,000</li>
<li><strong>Abutment:</strong> GHS 800 — GHS 1,500</li>
<li><strong>Custom dental crown:</strong> GHS 2,000 — GHS 3,500</li>
<li><strong>Surgical placement fee:</strong> GHS 1,500 — GHS 2,500</li>
</ul>
<p><strong>Total estimated cost for a single implant:</strong> GHS 7,600 — GHS 13,000</p>

<h2>Factors That Affect Implant Cost</h2>
<h3>Bone Grafting</h3>
<p>If you have insufficient jawbone density, you may need a bone graft before implant placement. This adds GHS 1,500 — GHS 4,000 to the total cost depending on the extent of grafting needed.</p>
<h3>Implant Material and Brand</h3>
<p>Premium implant brands with longer track records and better research backing tend to cost more. At New Vision Dental, we use only CE-certified, internationally recognised implant systems.</p>
<h3>Number of Implants</h3>
<p>Replacing multiple teeth with individual implants costs more per tooth, but many patients opt for implant-supported bridges or overdentures, which use fewer implants to replace multiple teeth.</p>

<h2>All-on-4 Implant Cost in Ghana</h2>
<p>The All-on-4 technique replaces an entire arch of teeth using just four strategically placed implants. This is a popular option for patients needing full-mouth rehabilitation.</p>
<p><strong>All-on-4 estimated cost per arch:</strong> GHS 25,000 — GHS 45,000</p>
<p>This typically includes the implants, a temporary fixed bridge, and a final permanent prosthesis.</p>

<h2>Dental Implants vs Bridges vs Dentures — Cost Comparison</h2>
<ul>
<li><strong>Removable partial denture:</strong> GHS 500 — GHS 2,000 (lasts 3-5 years)</li>
<li><strong>Dental bridge (3-unit):</strong> GHS 3,000 — GHS 7,000 (lasts 10-15 years)</li>
<li><strong>Single dental implant:</strong> GHS 7,600 — GHS 13,000 (lasts 20+ years or lifetime)</li>
</ul>
<p>While implants have a higher upfront cost, their longevity and bone-preserving benefits often make them the most cost-effective option over time.</p>

<h2>Payment Options and Dental Insurance</h2>
<p>At New Vision Dental Clinic, we offer flexible payment plans to make implants more accessible. We also accept major health insurance plans that cover dental procedures. Contact our team to discuss financing options that work for your budget.</p>

<h2>Why Choose New Vision Dental for Implants?</h2>
<p>Our clinic in Accra is equipped with modern 3D imaging technology for precise implant planning. Our experienced dental surgeons have placed hundreds of successful implants using sterile, hospital-grade protocols. We are committed to providing world-class implant dentistry at competitive Ghanaian prices.</p>

<h2>Book Your Implant Consultation Today</h2>
<p>If you are considering dental implants, the first step is a comprehensive consultation. At New Vision Dental, we will assess your oral health, discuss your goals, and provide a detailed treatment plan with transparent pricing — no hidden fees. <a href="/book"><strong>Book your consultation today</strong></a>.</p>`
  },
  {
    title: "Is Teeth Whitening Safe? What Dentists Want You to Know",
    slug: "is-teeth-whitening-safe",
    excerpt: "Concerned about teeth whitening safety? Learn the difference between professional and at-home whitening, potential side effects, and how to get a brighter smile safely.",
    featured_image: "/images/blog/teeth-whitening-safety.jpg",
    author: "New Vision Dental",
    read_time: "6 min read",
    tags: ["teeth whitening", "dental safety", "cosmetic dentistry", "smile makeover"],
    status: "published",
    published_at: "2026-07-03T08:00:00Z",
    content: `<h2>Is Professional Teeth Whitening Safe?</h2>
<p>Teeth whitening is one of the most popular cosmetic dental treatments worldwide. But with so many products on the market — from whitening strips to charcoal toothpaste to professional treatments — many patients ask: <strong>is teeth whitening actually safe?</strong></p>
<p>The short answer is yes — when performed correctly under professional supervision. At <strong>New Vision Dental Clinic in Accra</strong>, we help patients achieve brighter smiles safely and effectively. Here is what you need to know.</p>

<h2>How Does Teeth Whitening Work?</h2>
<p>Most teeth whitening products use hydrogen peroxide or carbamide peroxide as the active whitening agent. These compounds break down into oxygen molecules that penetrate the enamel and break apart stain molecules, making teeth appear whiter.</p>
<p>The concentration of the whitening agent and the duration of exposure determine both the effectiveness and the safety profile of the treatment.</p>

<h2>Professional In-Office Whitening</h2>
<p>In-office whitening at a dental clinic is the <strong>safest and most effective</strong> option. Here is why:</p>
<ul>
<li><strong>Higher concentration, controlled application:</strong> Dentists apply a high-concentration gel (25-40% hydrogen peroxide) with careful gum protection</li>
<li><strong>Faster results:</strong> Most patients achieve 6-8 shades brighter in a single 60-90 minute session</li>
<li><strong>Professional supervision:</strong> Any sensitivity is monitored and managed immediately</li>
<li><strong>Customised treatment:</strong> Your dentist adjusts the treatment based on your tooth sensitivity and whitening goals</li>
</ul>

<h2>Take-Home Whitening Trays</h2>
<p>Your dentist can provide custom-fitted trays with a lower concentration whitening gel (10-20% carbamide peroxide) for use at home. This option offers:</p>
<ul>
<li>85% of the effectiveness of in-office treatment</li>
<li>Lower cost than in-office whitening</li>
<li>Convenience of whitening on your schedule</li>
<li>Custom trays ensure even application and minimal gum irritation</li>
</ul>

<h2>Over-the-Counter Whitening Strips and Gels</h2>
<p>OTC products are widely available and can produce modest results, but they come with caveats:</p>
<ul>
<li>Lower concentration means less dramatic results (typically 2-3 shades brighter)</li>
<li>One-size-fits-all trays can allow gel to contact gums, causing irritation</li>
<li>Results are temporary and may not last as long as professional treatment</li>
<li><strong>Risk of overuse:</strong> Some patients over-apply, leading to enamel damage and increased sensitivity</li>
</ul>

<h2>DIY and Natural Whitening Remedies — Proceed with Caution</h2>
<p>Many home remedies found online can actually damage your teeth:</p>
<ul>
<li><strong>Charcoal toothpaste:</strong> Highly abrasive — removes enamel over time, making teeth appear yellower as dentin shows through</li>
<li><strong>Lemon juice and baking soda:</strong> The acid erodes enamel while the abrasive scratches the surface</li>
<li><strong>Strawberry paste:</strong> The fruit acid can soften enamel temporarily</li>
</ul>
<p>The American Dental Association warns against any whitening method that is not professionally supervised or approved.</p>

<h2>Side Effects of Teeth Whitening</h2>
<p>The most common side effects are temporary and mild:</p>
<ul>
<li><strong>Tooth sensitivity:</strong> Affects up to 50% of patients during treatment, usually resolves within 24-48 hours</li>
<li><strong>Gum irritation:</strong> Occurs if whitening gel contacts gum tissue, resolves within a few days</li>
<li><strong>Uneven results:</strong> Existing restorations (crowns, veneers, fillings) do not whiten — professional planning ensures even colour matching</li>
</ul>

<h2>Who Should Avoid Teeth Whitening?</h2>
<p>Teeth whitening is not recommended for:</p>
<ul>
<li>Pregnant or nursing women</li>
<li>Children under 16 years old</li>
<li>Patients with untreated cavities or gum disease (whitening can aggravate these conditions)</li>
<li>Patients with severe enamel erosion or exposed dentin</li>
<li>Patients allergic to peroxide-based products</li>
</ul>

<h2>Professional Whitening at New Vision Dental</h2>
<p>At New Vision Dental Clinic in Accra, we offer professional teeth whitening that is safe, effective, and tailored to your needs. Our process includes a thorough examination to ensure your teeth and gums are healthy enough for whitening, followed by a customised treatment plan.</p>
<p><a href="/book"><strong>Book your whitening consultation today</strong></a> and start your journey to a brighter, more confident smile.</p>`
  },
  {
    title: "7 Signs You Need a Root Canal - Don't Ignore These Symptoms",
    slug: "signs-you-need-a-root-canal",
    excerpt: "Persistent tooth pain? Sensitivity to hot and cold? Learn the 7 key warning signs that indicate you may need root canal treatment and why early intervention saves your tooth.",
    featured_image: "/images/blog/root-canal-signs.jpg",
    author: "New Vision Dental",
    read_time: "8 min read",
    tags: ["root canal", "tooth pain", "endodontic treatment", "dental infection"],
    status: "published",
    published_at: "2026-07-05T08:00:00Z",
    content: `<h2>Do You Need a Root Canal? 7 Warning Signs</h2>
<p>Tooth pain can range from a minor annoyance to debilitating discomfort. When the pulp — the soft tissue inside your tooth containing nerves and blood vessels — becomes infected or inflamed, you may need a root canal to save the tooth. Recognising the early warning signs can mean the difference between saving your natural tooth and losing it.</p>
<p>At <strong>New Vision Dental in Accra</strong>, we specialise in gentle, effective root canal therapy. Here are the 7 key signs that indicate you may need root canal treatment.</p>

<h2>1. Persistent Tooth Pain</h2>
<p>If you experience constant pain deep in your tooth that does not go away, it is a strong indicator that the pulp is infected or inflamed. The pain may be dull and aching or sharp and throbbing, worsen when you bite down, radiate to your jaw or ear, or keep you awake at night.</p>

<h2>2. Sensitivity to Hot and Cold</h2>
<p>Do you wince when sipping hot coffee or cold water? Mild sensitivity is common. However, if the sensation lingers for more than 30 seconds after the stimulus is removed, it may indicate the pulp is dying or infected — a condition called irreversible pulpitis that almost always requires root canal treatment.</p>

<h2>3. Tooth Discoloration</h2>
<p>When the pulp dies, it can cause the tooth to darken or develop a greyish hue. This occurs because the dying pulp releases pigments that stain the dentin inside the tooth. If one tooth is turning darker than its neighbours, especially after trauma, see your dentist promptly.</p>

<h2>4. Swollen or Tender Gums</h2>
<p>Swelling around a specific tooth is a classic sign of infection. The gums may appear red and inflamed, feel tender to touch, or show a visible bump. In some cases, the swelling may come and go — this does not mean the problem is resolving; it often means the infection is spreading through the bone.</p>

<h2>5. Pain When Touching or Chewing</h2>
<p>If it hurts to touch your tooth or chew on that side, the infection may have spread beyond the tooth root into the surrounding bone. This condition, called apical periodontitis, is a common reason for root canal therapy.</p>

<h2>6. A Cracked or Chipped Tooth</h2>
<p>Cracks and chips provide a pathway for bacteria to reach the pulp. Even tiny cracks that are not visible to the naked eye can allow bacteria to enter. If you have experienced trauma to a tooth, it may need root canal treatment even without immediate pain.</p>

<h2>7. A Pimple on Your Gums</h2>
<p>A small bump on your gum near a tooth is called a dental abscess or parulis. This indicates the infection has formed a pocket of pus. You may notice a recurring bump, bad taste when it drains, or foul-smelling drainage. This requires immediate dental attention.</p>

<h2>What Happens During a Root Canal?</h2>
<p>Modern root canal therapy is <strong>virtually painless</strong>. After numbing the area completely, your dentist removes the infected pulp, cleans and disinfects the root canals, and seals them with a biocompatible material called gutta-percha. A crown is then placed to protect the restored tooth.</p>

<h2>What Happens If You Don't Treat It?</h2>
<p>An untreated infection can spread to the jawbone, cause a dental abscess, and eventually lead to tooth loss. The infection may also spread to other parts of your body, posing a risk to your overall health. Early treatment is always less invasive and less expensive.</p>

<h2>Root Canal Treatment at New Vision Dental</h2>
<p>Our Accra clinic uses modern technology and effective anaesthesia to ensure your root canal is comfortable and stress-free. We have successfully treated hundreds of patients, saving teeth that would otherwise need extraction. <a href="/book"><strong>Book your appointment today</strong></a> if you are experiencing any of these symptoms.</p>`
  },
  {
    title: "How Often Should You Visit the Dentist? A Complete Guide",
    slug: "how-often-should-you-visit-dentist",
    excerpt: "Confused about how often you need a dental checkup? We explain the recommended frequency based on your oral health, age, and risk factors.",
    featured_image: "/images/blog/dental-visit-frequency.jpg",
    author: "New Vision Dental",
    read_time: "5 min read",
    tags: ["dental checkup", "preventive dentistry", "oral health", "dental cleaning"],
    status: "published",
    published_at: "2026-07-07T08:00:00Z",
    content: `<h2>How Often Should You See the Dentist?</h2>
<p>One of the most common questions patients ask is: <strong>how often should I visit the dentist?</strong> The answer depends on your individual oral health, lifestyle, and risk factors. At <strong>New Vision Dental Clinic in Accra</strong>, we tailor our preventive care schedule to each patient's unique needs.</p>

<h2>The Standard Recommendation: Twice a Year</h2>
<p>For most people with good oral health, a dental checkup and cleaning every six months is sufficient. This twice-yearly schedule is recommended by dental associations worldwide because:</p>
<ul>
<li>Dental problems develop slowly — six months is early enough to catch cavities, gum disease, and other issues before they become serious</li>
<li>Professional cleaning removes tartar that daily brushing and flossing cannot reach</li>
<li>A regular schedule builds familiarity and reduces dental anxiety</li>
<li>Early detection saves money — treating a small cavity costs far less than a root canal or extraction</li>
</ul>

<h2>High-Risk Patients: 3-4 Times Per Year</h2>
<p>Some patients benefit from more frequent visits. You may need to see your dentist every 3-4 months if you:</p>
<ul>
<li>Have a history of gum disease (periodontitis)</li>
<li>Smoke or use tobacco products</li>
<li>Have diabetes (which increases gum disease risk)</li>
<li>Are pregnant (hormonal changes affect gum health)</li>
<li>Have a weakened immune system</li>
<li>Are prone to cavities or have multiple fillings</li>
<li>Have dry mouth (caused by medications or medical conditions)</li>
</ul>

<h2>Children and Teenagers</h2>
<p>Children should visit the dentist every six months starting from their first birthday or within six months of their first tooth erupting. Regular visits help:</p>
<ul>
<li>Monitor tooth development and jaw growth</li>
<li>Apply fluoride treatments and sealants to prevent cavities</li>
<li>Teach proper brushing and flossing techniques</li>
<li>Build positive associations with dental care from an early age</li>
</ul>

<h2>What Happens During a Dental Checkup?</h2>
<ul>
<li><strong>Examination:</strong> Your dentist checks for cavities, gum disease, oral cancer, and other issues</li>
<li><strong>Professional cleaning:</strong> Scaling removes tartar, polishing removes surface stains</li>
<li><strong>X-rays:</strong> Annual or biannual X-rays reveal problems between teeth and below the gumline</li>
<li><strong>Oral cancer screening:</strong> A visual and tactile examination of your mouth, tongue, and throat</li>
<li><strong>Treatment plan:</strong> Any recommended treatments and their timing are discussed</li>
</ul>

<h2>The Cost of Prevention vs Treatment</h2>
<p>A routine dental checkup and cleaning costs a fraction of what you would pay for restorative treatment. Investing in regular visits can save you thousands of cedis in the long run while keeping your smile healthy and bright.</p>

<h2>Book Your Next Checkup at New Vision Dental</h2>
<p>At New Vision Dental in Accra, we make preventive care convenient with three locations, flexible scheduling, and a comfortable, welcoming environment. <a href="/book"><strong>Schedule your next checkup today</strong></a> — your smile will thank you.</p>`
  },
  {
    title: "What Causes Bad Breath and How to Fix It",
    slug: "what-causes-bad-breath",
    excerpt: "Bad breath (halitosis) affects millions. Discover the real causes — from poor oral hygiene to medical conditions — and learn how to eliminate it for good.",
    featured_image: "/images/blog/bad-breath-causes.jpg",
    author: "New Vision Dental",
    read_time: "7 min read",
    tags: ["bad breath", "halitosis", "oral hygiene", "gum disease"],
    status: "published",
    published_at: "2026-07-09T08:00:00Z",
    content: `<h2>What Causes Bad Breath?</h2>
<p>Bad breath, medically known as halitosis, affects an estimated 1 in 4 people worldwide. It can be embarrassing and socially isolating, but the good news is that it is often treatable. At <strong>New Vision Dental Clinic in Accra</strong>, we help patients identify the root cause of their bad breath and develop effective solutions.</p>

<h2>Dental Causes (Approximately 40% of Cases)</h2>
<p>The mouth is home to hundreds of types of bacteria. When oral hygiene is poor, these bacteria break down food particles and produce volatile sulphur compounds — the source of bad breath.</p>
<ul>
<li><strong>Poor brushing and flossing:</strong> Food particles left between teeth decompose and cause odour</li>
<li><strong>Gum disease:</strong> Infected gums create pockets where bacteria thrive, producing persistent bad breath</li>
<li><strong>Tooth decay:</strong> Cavities trap food and bacteria, creating a breeding ground for odour</li>
<li><strong>Tongue coating:</strong> The tongue's surface harbours bacteria that produce up to 80% of mouth-related bad breath</li>
<li><strong>Dental restorations:</strong> Ill-fitting crowns, bridges, or dentures can trap food particles</li>
</ul>

<h2>Medical Causes (Approximately 35% of Cases)</h2>
<p>Sometimes bad breath originates outside the mouth:</p>
<ul>
<li><strong>GERD (acid reflux):</strong> Stomach acid and partially digested food can cause a sour odour</li>
<li><strong>Sinus infections:</strong> Post-nasal drip provides a protein-rich environment for bacteria</li>
<li><strong>Tonsil stones:</strong> Calcified bacterial deposits in tonsil crypts produce a distinctive foul odour</li>
<li><strong>Diabetes:</strong> Uncontrolled diabetes can cause a sweet, fruity breath odour (acetone)</li>
<li><strong>Liver or kidney disease:</strong> Advanced disease can cause distinctive breath odours</li>
<li><strong>H. pylori infection:</strong> This stomach bacteria is linked to bad breath</li>
</ul>

<h2>Lifestyle and Dietary Causes</h2>
<ul>
<li><strong>Foods:</strong> Garlic, onions, and spicy foods release compounds that enter the bloodstream and are exhaled through the lungs</li>
<li><strong>Tobacco:</strong> Smoking and chewing tobacco dry out the mouth and leave their own odour</li>
<li><strong>Alcohol:</strong> Alcohol dries out the mouth, reducing saliva's natural cleansing action</li>
<li><strong>Crash diets:</strong> Low-carb diets and fasting cause ketosis, producing a distinct breath odour</li>
</ul>

<h2>How to Fix Bad Breath</h2>
<h3>Improve Your Oral Hygiene Routine</h3>
<ul>
<li>Brush twice daily for two minutes with fluoride toothpaste</li>
<li>Floss daily to remove food between teeth — brushing alone cleans only 60% of tooth surfaces</li>
<li>Clean your tongue with a tongue scraper or your toothbrush</li>
<li>Use an antibacterial mouthwash as a supplement, not a replacement for brushing and flossing</li>
</ul>

<h3>Stay Hydrated</h3>
<p>Saliva is your mouth's natural cleanser. Drink plenty of water throughout the day, especially if you have dry mouth. Chewing sugar-free gum can also stimulate saliva production.</p>

<h3>See Your Dentist</h3>
<p>If improving your oral hygiene does not resolve bad breath within a few weeks, see your dentist. Professional cleaning removes tartar and bacteria that your toothbrush cannot reach. Your dentist can also check for cavities, gum disease, and other dental causes.</p>

<h2>When to See a Doctor</h2>
<p>If your dentist rules out dental causes and your breath still does not improve, a medical evaluation may be needed to check for sinus issues, GERD, diabetes, or other systemic conditions.</p>

<h2>Bad Breath Treatment at New Vision Dental</h2>
<p>At New Vision Dental in Accra, we offer comprehensive halitosis evaluation and treatment. Our approach includes a thorough dental examination, professional cleaning, and personalised oral hygiene instruction. <a href="/book"><strong>Book your appointment today</strong></a> and take the first step toward fresher breath.</p>`
  },
  {
    title: "Dental Implants vs Dentures vs Bridges - Which Is Right for You?",
    slug: "dental-implants-vs-dentures-vs-bridges",
    excerpt: "Choosing between dental implants, dentures, and bridges? Compare costs, longevity, pros and cons to find the best tooth replacement option for your needs.",
    featured_image: "/images/blog/dental-implants-comparison.jpg",
    author: "New Vision Dental",
    read_time: "8 min read",
    tags: ["dental implants", "dentures", "dental bridges", "tooth replacement"],
    status: "published",
    published_at: "2026-07-11T08:00:00Z",
    content: `<h2>Dental Implants vs Dentures vs Bridges — Making the Right Choice</h2>
<p>Losing a tooth — or multiple teeth — can affect your confidence, your ability to eat, and your overall oral health. Fortunately, modern dentistry offers three excellent options for tooth replacement: <strong>dental implants, dentures, and bridges</strong>. But which one is right for you?</p>
<p>At <strong>New Vision Dental Clinic in Accra</strong>, we help patients make informed decisions based on their unique needs, budget, and lifestyle. Here is a comprehensive comparison.</p>

<h2>Dental Implants</h2>
<h3>What They Are</h3>
<p>A titanium post surgically placed in the jawbone that acts as an artificial tooth root. A crown is attached on top for a natural look and feel.</p>
<h3>Pros</h3>
<ul>
<li>Most natural look and feel — indistinguishable from natural teeth</li>
<li>Stimulates jawbone, preventing bone loss and facial sagging</li>
<li>Does not require altering adjacent healthy teeth</li>
<li>Can last 20+ years or a lifetime with proper care</li>
<li>Allows normal eating of all foods</li>
</ul>
<h3>Cons</h3>
<ul>
<li>Highest upfront cost</li>
<li>Requires oral surgery and several months for complete treatment</li>
<li>Needs adequate jawbone density (bone grafting may be required)</li>
<li>Not suitable for everyone (certain medical conditions may rule out implants)</li>
</ul>

<h2>Dental Bridges</h2>
<h3>What They Are</h3>
<p>A prosthetic tooth held in place by crowns attached to the adjacent natural teeth. The bridge literally bridges the gap where the tooth is missing.</p>
<h3>Pros</h3>
<ul>
<li>Less expensive than implants</li>
<li>No surgery required</li>
<li>Completed in 2-3 weeks</li>
<li>Looks natural and functions well</li>
</ul>
<h3>Cons</h3>
<ul>
<li>Requires shaving down adjacent healthy teeth for crown placement</li>
<li>Does not prevent bone loss in the gap</li>
<li>Typically lasts 10-15 years before replacement needed</li>
<li>Can be difficult to clean between the bridge and gums</li>
</ul>

<h2>Dentures</h2>
<h3>What They Are</h3>
<p>Removable prosthetic devices that replace multiple missing teeth. Partial dentures replace a few teeth; full dentures replace an entire arch.</p>
<h3>Pros</h3>
<ul>
<li>Most affordable option upfront</li>
<li>Non-invasive — no surgery or tooth preparation needed</li>
<li>Can replace multiple teeth at once</li>
<li>Quick to make and fit</li>
</ul>
<h3>Cons</h3>
<ul>
<li>Less stable — may slip or click during eating and speaking</li>
<li>Requires daily removal and cleaning</li>
<li>May cause gum soreness and difficulty eating certain foods</li>
<li>Accelerates bone loss in the jaw over time</li>
<li>Needs replacement every 5-7 years as jaw shape changes</li>
</ul>

<h2>Quick Comparison Table</h2>
<ul>
<li><strong>Cost:</strong> Implants (highest), Bridges (moderate), Dentures (lowest)</li>
<li><strong>Lifespan:</strong> Implants (20+ years), Bridges (10-15 years), Dentures (5-7 years)</li>
<li><strong>Procedure:</strong> Implants (surgery needed), Bridges (no surgery), Dentures (no surgery)</li>
<li><strong>Bone preservation:</strong> Implants (yes), Bridges (no), Dentures (no)</li>
<li><strong>Natural feel:</strong> Implants (excellent), Bridges (very good), Dentures (moderate)</li>
<li><strong>Maintenance:</strong> Implants (normal brushing/flossing), Bridges (special cleaning tools needed), Dentures (daily removal and soaking)</li>
</ul>

<h2>Which Option Is Best for You?</h2>
<p>The right choice depends on several factors:</p>
<ul>
<li><strong>Number of missing teeth:</strong> Single tooth — implant or bridge; multiple teeth — implants, bridge, or partial denture; full arch — implants or full denture</li>
<li><strong>Bone health:</strong> Good bone density favours implants; significant bone loss may favour dentures or implants with grafting</li>
<li><strong>Budget:</strong> Consider long-term value, not just upfront cost</li>
<li><strong>Health status:</strong> Certain conditions (uncontrolled diabetes, blood thinners) may affect implant candidacy</li>
<li><strong>Lifestyle:</strong> Active patients often prefer the stability of implants; patients who prefer non-invasive options may choose bridges or dentures</li>
</ul>

<h2>Tooth Replacement at New Vision Dental</h2>
<p>We offer all three tooth replacement options at our Accra clinic. Our team will conduct a thorough evaluation, discuss your preferences, and recommend the best solution for your smile. <a href="/book"><strong>Book a consultation today</strong></a>.</p>`
  },
  {
    title: "Root Canal vs Tooth Extraction - Pros and Cons",
    slug: "root-canal-vs-tooth-extraction",
    excerpt: "Facing the choice between a root canal and extraction? Understand the pros and cons of each option to make an informed decision about your dental health.",
    featured_image: "/images/blog/root-canal-vs-extraction.jpg",
    author: "New Vision Dental",
    read_time: "7 min read",
    tags: ["root canal", "tooth extraction", "dental procedures", "oral surgery"],
    status: "published",
    published_at: "2026-07-13T08:00:00Z",
    content: `<h2>Root Canal vs Tooth Extraction — Which Is Better?</h2>
<p>When a tooth is severely damaged or infected, you may face a difficult decision: save the tooth with a root canal or remove it with an extraction. Both options have their place in modern dentistry, and the right choice depends on your specific situation.</p>
<p>At <strong>New Vision Dental Clinic in Accra</strong>, we help patients understand both options so they can make informed decisions about their oral health.</p>

<h2>What Is a Root Canal?</h2>
<p>A root canal (also called endodontic treatment) removes infected or inflamed pulp from inside the tooth, cleans and disinfects the root canals, and seals them to prevent reinfection. The tooth is then protected with a crown. The procedure saves your natural tooth and restores its function.</p>

<h2>What Is a Tooth Extraction?</h2>
<p>An extraction removes the entire tooth from its socket. After extraction, the missing tooth must be replaced with an implant, bridge, or denture to prevent neighbouring teeth from shifting and to maintain jawbone health.</p>

<h2>Root Canal — Pros</h2>
<ul>
<li><strong>Saves your natural tooth:</strong> Nothing functions as well as your own tooth</li>
<li><strong>Preserves jawbone:</strong> The tooth root stimulates bone, preventing the bone loss that occurs after extraction</li>
<li><strong>No need for replacement:</strong> After a crown, the tooth functions normally — no extra cost for an implant or bridge</li>
<li><strong>Normal chewing and biting:</strong> A restored root canal tooth can handle full chewing forces</li>
<li><strong>No impact on neighbouring teeth:</strong> Adjacent teeth do not shift or tilt</li>
</ul>

<h2>Root Canal — Cons</h2>
<ul>
<li>May require 1-2 visits to complete</li>
<li>Higher upfront cost than extraction</li>
<li>Some cases may fail (though success rate is over 95%)</li>
<li>Requires a crown for full protection (additional cost)</li>
</ul>

<h2>Tooth Extraction — Pros</h2>
<ul>
<li>Quick procedure (often under 30 minutes)</li>
<li>Lower upfront cost than root canal + crown</li>
<li>Removes the problem tooth completely</li>
<li>One visit is usually sufficient</li>
</ul>

<h2>Tooth Extraction — Cons</h2>
<ul>
<li><strong>Bone loss:</strong> The jawbone begins to shrink within months of tooth removal</li>
<li><strong>Teeth shifting:</strong> Adjacent and opposing teeth move into the gap, causing alignment issues</li>
<li><strong>Replacement needed:</strong> An implant or bridge is necessary to prevent long-term problems</li>
<li><strong>Higher long-term cost:</strong> Extraction + replacement (implant or bridge) typically costs more than a root canal + crown</li>
<li><strong>More invasive:</strong> Surgical extraction can involve significant recovery time</li>
</ul>

<h2>Long-Term Cost Comparison</h2>
<ul>
<li><strong>Root canal + crown:</strong> Moderate upfront cost, no additional costs needed</li>
<li><strong>Extraction only:</strong> Lowest upfront cost, but tooth replacement is necessary</li>
<li><strong>Extraction + dental implant:</strong> Highest total cost (extraction + implant + crown)</li>
<li><strong>Extraction + bridge:</strong> Moderate-to-high total cost (extraction + bridge)</li>
</ul>
<p>When you factor in the cost of replacing the extracted tooth, a root canal is almost always the more economical choice in the long term.</p>

<h2>When Extraction Is the Better Option</h2>
<p>Extraction may be recommended when:</p>
<ul>
<li>The tooth is too damaged to be restored (severe decay, large crack below the gumline)</li>
<li>Advanced gum disease has destroyed too much supporting bone</li>
<li>The tooth is impacted (like wisdom teeth)</li>
<li>There is insufficient tooth structure to support a crown</li>
<li>The patient is undergoing orthodontic treatment and needs space</li>
</ul>

<h2>Root Canal vs Extraction at New Vision Dental</h2>
<p>At New Vision Dental, our priority is always to save your natural tooth whenever possible. Our experienced team uses modern techniques to ensure root canal therapy is comfortable and effective. However, when extraction is the better option, we provide gentle care and discuss your replacement options. <a href="/book"><strong>Book a consultation</strong></a> to discuss your specific situation.</p>`
  },
  {
    title: "How to Fix a Chipped or Broken Tooth - Your Treatment Options",
    slug: "how-to-fix-chipped-broken-tooth",
    excerpt: "Chipped or broken a tooth? Don't panic. Learn about your treatment options — from dental bonding and veneers to crowns — and what to do in an emergency.",
    featured_image: "/images/blog/broken-tooth-repair.jpg",
    author: "New Vision Dental",
    read_time: "6 min read",
    tags: ["broken tooth", "chipped tooth", "emergency dentistry", "dental bonding"],
    status: "published",
    published_at: "2026-07-15T08:00:00Z",
    content: `<h2>How to Fix a Chipped or Broken Tooth</h2>
<p>A chipped or broken tooth can be alarming, but modern dentistry offers excellent solutions to restore your smile. Whether the damage is minor or severe, there is a treatment option that can help.</p>
<p>At <strong>New Vision Dental Clinic in Accra</strong>, we provide same-day emergency care for chipped and broken teeth. Here is what you need to know.</p>

<h2>What to Do Immediately After Breaking a Tooth</h2>
<ol>
<li><strong>Stay calm.</strong> Most broken teeth can be repaired.</li>
<li><strong>Rinse your mouth</strong> with warm water to clean the area.</li>
<li><strong>Save any pieces</strong> of the tooth if possible.</li>
<li><strong>Apply pressure</strong> with gauze if there is bleeding.</li>
<li><strong>Use a cold compress</strong> on the outside of your cheek to reduce swelling.</li>
<li><strong>Contact your dentist immediately.</strong> Prompt treatment improves outcomes.</li>
</ol>

<h2>Treatment Options Based on Severity</h2>

<h3>1. Minor Chip — Dental Bonding</h3>
<p>For small chips that do not affect the tooth's structure, dental bonding is a quick and affordable solution. A tooth-coloured composite resin is applied, shaped, and hardened with a special light. The procedure takes 30-60 minutes and usually requires no anaesthesia.</p>
<ul>
<li>Most affordable option for minor chips</li>
<li>Completed in a single visit</li>
<li>Lasts 3-7 years with proper care</li>
<li>Natural appearance matched to your tooth colour</li>
</ul>

<h3>2. Moderate Damage — Dental Veneer</h3>
<p>For larger chips affecting the front of a tooth, a porcelain veneer may be recommended. This thin shell covers the front surface of the tooth, restoring its shape, colour, and appearance.</p>
<ul>
<li>Highly aesthetic — looks like natural tooth enamel</li>
<li>Stain-resistant surface</li>
<li>Requires 2 visits (preparation and placement)</li>
<li>Lasts 10-15 years with proper care</li>
</ul>

<h3>3. Significant Damage — Dental Crown</h3>
<p>When a large portion of the tooth is broken or the tooth is cracked, a crown (cap) may be needed to protect and restore it. The crown covers the entire visible portion of the tooth above the gumline.</p>
<ul>
<li>Full protection for weakened teeth</li>
<li>Restores full chewing function</li>
<li>Can be made of porcelain, ceramic, or zirconia</li>
<li>Requires 2-3 visits</li>
<li>Lasts 10-15+ years</li>
</ul>

<h3>4. Severe Damage — Root Canal + Crown</h3>
<p>If the break extends into the pulp (nerve) of the tooth, a root canal is needed before a crown can be placed. This saves the tooth from extraction while eliminating pain and infection.</p>

<h3>5. Tooth Cannot Be Saved — Extraction</h3>
<p>In cases where the tooth is broken below the gumline or the damage is too extensive, extraction may be the only option. The tooth can then be replaced with an implant, bridge, or denture.</p>

<h2>Chipped Tooth Repair Cost in Ghana</h2>
<ul>
<li><strong>Dental bonding:</strong> GHS 300 — GHS 800 per tooth</li>
<li><strong>Porcelain veneer:</strong> GHS 2,000 — GHS 4,000 per tooth</li>
<li><strong>Dental crown:</strong> GHS 2,500 — GHS 5,000 per tooth</li>
<li><strong>Root canal + crown:</strong> GHS 4,000 — GHS 8,000 total</li>
</ul>

<h2>Emergency Dental Care at New Vision Dental</h2>
<p>We offer same-day emergency appointments for chipped and broken teeth at our Accra clinic. Our team is experienced in all types of tooth repair and will recommend the best option for your specific situation. <a href="/book"><strong>Book your emergency appointment now</strong></a>.</p>`
  },
  {
    title: "When Should Your Child First Visit the Dentist?",
    slug: "when-should-child-first-visit-dentist",
    excerpt: "Wondering when to take your child to the dentist for the first time? Learn the recommended age, what to expect, and how to make dental visits positive for kids.",
    featured_image: "/images/blog/child-first-dentist.jpg",
    author: "New Vision Dental",
    read_time: "5 min read",
    tags: ["pediatric dentistry", "children's dental care", "kids dentist", "family dentistry"],
    status: "published",
    published_at: "2026-07-17T08:00:00Z",
    content: `<h2>When Should Your Child First Visit the Dentist?</h2>
<p>As a parent, you want the best for your child's health — and that includes their dental health. One of the most common questions we hear at <strong>New Vision Dental Clinic in Accra</strong> is: <strong>at what age should my child first see a dentist?</strong></p>

<h2>The Recommended Age: By Their First Birthday</h2>
<p>The American Academy of Pediatric Dentistry (AAPD) and the Ghana Dental Association recommend that children visit the dentist within six months of their first tooth erupting or by their first birthday — whichever comes first. This may seem early, but early dental visits are crucial for establishing a lifetime of good oral health.</p>

<h2>Why So Early?</h2>
<p>Many parents assume baby teeth are not important since they eventually fall out. But primary (baby) teeth play a critical role in your child's development:</p>
<ul>
<li>They hold space for permanent teeth to come in correctly</li>
<li>They enable proper chewing and nutrition</li>
<li>They are essential for speech development</li>
<li>Cavities in baby teeth can affect permanent teeth developing underneath</li>
<li>Early visits establish a dental home and reduce fear of the dentist</li>
</ul>

<h2>What Happens at the First Visit?</h2>
<p>A child's first dental visit is designed to be gentle, fun, and educational:</p>
<ul>
<li><strong>The lap exam:</strong> For very young children, the dentist may examine their teeth while they sit on your lap</li>
<li><strong>Tooth counting:</strong> The dentist counts your child's teeth and checks for any issues</li>
<li><strong>Fluoride varnish:</strong> A protective fluoride coating may be applied to strengthen enamel</li>
<li><strong>Education:</strong> Parents receive guidance on brushing techniques, diet, and habits like thumb-sucking</li>
<li><strong>Positive introduction:</strong> The goal is to make the experience fun and non-threatening</li>
</ul>

<h2>Preparing Your Child for Their First Dental Visit</h2>
<ul>
<li>Talk positively about the dentist — use words like "clean," "strong," and "healthy"</li>
<li>Read children's books about visiting the dentist</li>
<li>Avoid using words like "pain," "needle," or "drill"</li>
<li>Schedule the appointment at a time when your child is well-rested</li>
<li>Bring a comfort item if needed (favourite toy or blanket)</li>
</ul>

<h2>How Often Should Children Visit?</h2>
<p>After the first visit, children should see the dentist every six months for regular checkups and cleanings. This schedule allows the dentist to monitor tooth development, apply preventive treatments, and catch any issues early.</p>

<h2>Preventive Treatments for Children</h2>
<ul>
<li><strong>Fluoride treatments:</strong> Applied during regular visits to strengthen enamel and prevent cavities</li>
<li><strong>Dental sealants:</strong> A thin protective coating applied to the chewing surfaces of back molars, where most childhood cavities occur</li>
<li><strong>Orthodontic evaluation:</strong> Around age 7, your child may be evaluated to see if braces or other orthodontic treatment will be needed</li>
</ul>

<h2>Starting Early Pays Off</h2>
<p>Children who visit the dentist from an early age are more likely to maintain good oral habits throughout life and less likely to develop dental anxiety. At New Vision Dental, our team is experienced in treating children and creating a welcoming, friendly environment for young patients. <a href="/book"><strong>Schedule your child's first visit today</strong></a>.</p>`
  },
  {
    title: "How to Treat Sensitive Teeth - Causes and Effective Remedies",
    slug: "how-to-treat-sensitive-teeth",
    excerpt: "Do hot or cold foods make you wince? Discover what causes tooth sensitivity and the most effective treatments — from desensitizing toothpaste to professional dental care.",
    featured_image: "/images/blog/sensitive-teeth.jpg",
    author: "New Vision Dental",
    read_time: "6 min read",
    tags: ["sensitive teeth", "tooth sensitivity", "dental care", "oral health"],
    status: "published",
    published_at: "2026-07-19T08:00:00Z",
    content: `<h2>How to Treat Sensitive Teeth</h2>
<p>If a sip of cold water or a spoonful of hot soup makes you wince, you are not alone. Tooth sensitivity affects millions of people worldwide. The sharp, temporary pain can make eating, drinking, and even brushing uncomfortable. But effective relief is available.</p>
<p>At <strong>New Vision Dental Clinic in Accra</strong>, we help patients understand what causes their sensitivity and provide effective treatments for lasting relief.</p>

<h2>What Causes Tooth Sensitivity?</h2>
<p>Tooth sensitivity occurs when the protective enamel layer wears down or gums recede, exposing the underlying dentin. Dentin contains microscopic tubules that lead to the tooth's nerve centre. When these tubules are exposed, hot, cold, sweet, or acidic stimuli trigger a pain response.</p>
<ul>
<li><strong>Enamel erosion:</strong> Caused by acidic foods and drinks, aggressive brushing, or acid reflux</li>
<li><strong>Gum recession:</strong> Exposes the tooth root, which has no protective enamel</li>
<li><strong>Cavities:</strong> Decay creates openings that expose dentin</li>
<li><strong>Teeth grinding (bruxism):</strong> Grinds down enamel over time</li>
<li><strong>Cracked teeth:</strong> Cracks can expose dentin or allow stimuli to reach the nerve</li>
<li><strong>Recent dental work:</strong> Temporary sensitivity after fillings, crowns, or whitening is normal</li>
<li><strong>Acidic diet:</strong> Frequent consumption of citrus, soda, or wine erodes enamel</li>
</ul>

<h2>At-Home Remedies for Sensitive Teeth</h2>
<h3>Desensitizing Toothpaste</h3>
<p>These toothpastes contain compounds like potassium nitrate or stannous fluoride that block pain signals from the tooth surface to the nerve. For best results, use consistently for at least 2-4 weeks. Look for products with the Ghana Dental Association seal of approval.</p>

<h3>Switch to a Soft-Bristled Toothbrush</h3>
<p>Medium and hard bristles can wear down enamel and aggravate gum recession. A soft-bristled brush is just as effective at cleaning but much gentler on your teeth and gums.</p>

<h3>Use Fluoride Rinse</h3>
<p>A fluoride mouthwash strengthens enamel and can help reduce sensitivity. Use it daily after brushing and flossing.</p>

<h3>Avoid Acidic Foods and Drinks</h3>
<p>Limit citrus fruits, tomatoes, soda, wine, and other acidic items. When you do consume them, rinse your mouth with water afterward and wait at least 30 minutes before brushing (brushing immediately after acid exposure can wear away softened enamel).</p>

<h2>Professional Treatments for Tooth Sensitivity</h2>
<p>When at-home remedies are not enough, your dentist can provide more effective treatments:</p>
<ul>
<li><strong>Fluoride varnish:</strong> A concentrated fluoride coating applied to sensitive areas to strengthen enamel and block pain signals</li>
<li><strong>Dental bonding:</strong> A tooth-coloured resin applied to exposed root surfaces to cover and protect them</li>
<li><strong>Gum graft surgery:</strong> For severe gum recession, a small amount of tissue is taken from the palate and grafted to cover exposed roots</li>
<li><strong>Root canal:</strong> In severe cases where sensitivity is caused by irreversible pulp damage, a root canal may be necessary</li>
</ul>

<h2>When to See a Dentist for Sensitive Teeth</h2>
<p>Make an appointment if:</p>
<ul>
<li>Sensitivity persists for more than 2-3 weeks despite using desensitizing toothpaste</li>
<li>The pain is severe or interferes with daily activities</li>
<li>You notice signs of gum disease (bleeding, swelling, redness)</li>
<li>You have a cracked, chipped, or visibly damaged tooth</li>
<li>Sensitivity is focused on a single tooth (may indicate a cavity or abscess)</li>
</ul>

<h2>Sensitive Teeth Treatment at New Vision Dental</h2>
<p>We offer comprehensive evaluation and treatment for sensitive teeth at our Accra clinic. Our team will identify the underlying cause of your sensitivity and recommend the most effective treatment — whether that is a simple fluoride varnish, dental bonding, or addressing a specific dental issue. <a href="/book"><strong>Book your appointment today</strong></a> and enjoy your favourite foods without pain again.</p>`
  }
];

async function seed() {
  console.log("=== Starting blog seed ===");
  for (const post of posts) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/blogs`, {
        method: "POST",
        headers: {
          "apikey": SERVICE_KEY,
          "Authorization": `Bearer ${SERVICE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify(post),
      });
      if (res.ok) {
        console.log(`Inserted: ${post.title}`);
      } else {
        const err = await res.text();
        console.error(`Failed: ${post.title} — ${err}`);
      }
    } catch (e) {
      console.error(`Error: ${post.title} — ${e.message}`);
    }
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 500));
  }
  console.log("=== Blog seed complete ===");
}

seed();
