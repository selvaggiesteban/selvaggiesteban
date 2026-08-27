---
title: "Master in Web Positioning with AI"
description: "Discover what to do to tell AI how to access your website's Google data and extract the topics where you already appear but very low, and write ONLY about them — the ones people actually search for, with your experience inside."
pubDate: 2026-07-19
heroImage: "/assets/blog/covers/maestro-posicionamiento-web-ia-en.svg"
---

<h1>Master in Web Positioning with AI</h1>

<ul>
 	<li>Discover <strong>what to do to tell AI how to access your website's Google data and extract the topics where you already appear but very low</strong>, and write ONLY about them — the ones people actually search for, with your experience inside.</li>
 	<li>The complete prompt (the long one, the one that validates demand with your real Google data before writing a single word), how to connect your data to AI, the topic architecture to avoid keyword cannibalization, the exact standard that makes Google reward your content instead of catching it, and the sales kit for businesses to get the first client).</li>
</ul>

<h2>1. The system, no smoke: volume is the risk, not the play</h2>

The temptation is to think the trick is volume: release a hundred thousand articles with bots and bill. It's exactly the opposite. Volume is what Google penalizes. What truly separates an <a href="https://selvaggiesteban.dev/en/services/seo-positioning/">SEO strategy</a> that lasts from spam is a single discipline, and it's the one almost nobody copies: not writing anything that Google doesn't confirm people search for.

That's the <a href="https://selvaggiesteban.dev/en/blog/professional-marketing-automation/">AI automation</a> system. A filter that goes in front of the writing machine and only lets through topics that meet two things: there's real demand (Google already shows you for that search) and you have something real to say (experience, a case, a data point of yours). Everything that doesn't pass that filter doesn't get written. Sounds obvious when said like this, but 99% of people who "do <a href="https://selvaggiesteban.dev/en/services/seo-positioning/">SEO with AI</a>" do the opposite: they ask AI for a hundred topics from scratch and publish all hundred. Those hundred are noise, and noise is what Google penalizes.

Your website is already telling you, in Google's data, where you're one push away from the first page. These are searches where you already appear but on page 2 or 3 (position 11 to 30, more or less), with many impressions and few clicks. That means Google already considers you relevant for that topic and shows you, but not high enough for people to visit. A good article about exactly that topic is the cheapest one to push up, because you're not starting from zero: you're starting from page 2.

<h2>2. How to connect Google data with AI</h2>

For the automation to work, your AI needs to see your website's data in Google. Those data live in a free Google tool called Search Console (if you have a website and haven't signed up, do it first — it's free and it's Google's).

<h3>Path A: zero setup, the CSV.</h3>

In Search Console, go to the Performance report, Queries tab, set the range to the last 6 months, enable all four columns (Clicks, Impressions, CTR, and Average Position), and hit Export. A document downloads. Attach it to your AI and done. Enough to start today without touching anything else.

<h3>Path B: set it up once, a connector.</h3>

There's a connector (what in the AI world is called an MCP) that plugs Search Console directly into Claude Code, so your AI asks Google on its own when it needs to. The most used is an open-source community project called mcp-gsc: it gives your AI access to your queries, clicks, impressions, CTR, and position. It installs with uvx mcp-search-console and authenticates with your Google account (via browser login or a service key). It's a third-party project, not from Google or Anthropic, so you're giving it access to your data with your credentials. Check the version before using it seriously, and if you don't want to touch any of this, go with the CSV from Path A, which does the same job.

<h3>What those data mean</h3>

The query is what people typed; impressions are how many times Google showed you; clicks are how many times people visited; CTR is clicks divided by impressions (if it's low, people see you but don't choose you); and average position is your average ranking. Strike distance lives at positions 11 to 30 with high impressions.

<h3>3. The prompt to do an SEO consultant's job</h3>

Important: requires having connected your Google data first (block 2). Paste it as-is and change what's between {braces}:

<pre>You have access to my Google Search Console. We're going to create a content plan that only
writes what Google ALREADY confirms people search for. Follow these steps and don't skip
any.

STEP 1 → Deduce my business. Go to my website {URL} (read it by crawling the sitemap {} and the internal links you find navigating: the homepage, the about page, product or service pages, and blog articles if there are any) and write me in 5 lines: what I sell, who I sell to, and the 3 topic categories where it would make sense for me to appear on Google. Don't invent: if something isn't clear on the website, say so.

STEP 2 → Pull my real data from the last 6 months of Search Console. Bring me the queries with: query, average position, impressions, clicks, and CTR. At least the 500 with the most impressions.

STEP 3 → Filter by strike distance. From that list, keep ONLY the searches that meet all three at once:
a) average position between 11 and 30 (I'm on page 2-3 of Google, one push away),
b) high impressions (Google already shows me a lot: there's real demand),
c) low CTR or nearly zero clicks (I appear but don't get the click).
Sort them by impressions from highest to lowest. Discard the ones already
in the top 10 (those already work) and the ones with ridiculous impressions (no demand).

STEP 4 → Filter by business relevance. Of the survivors, cross out the ones that have nothing to do with what I
sell or with someone who could become a customer. I want topics where I have real experience
and where the person searching could end up being a client.

STEP 5 → Give me a table with: search | current position | impressions/month | current CTR | why it's within reach | what MY
angle (my real experience) can win it. Mark the 10 with the best demand/effort ratio as "start here."

STEP 6 → Group these searches into topics (clusters) and tell me, for each one, which would be the
main page (pillar) and which the satellite articles. Let me know if two searches are so similar
that two articles would fight for the same thing: in that case, merge them into one. Don't write any
article yet. First I want to see the table and the topics and decide myself.</pre>

<h3>The brake at the end</h3>

Notice the brake at the end: "don't write anything yet". The <strong>AI automation system</strong> isn't a writing machine — it's a machine for deciding what's worth writing. You look at the table, cross out what doesn't fit your business, and only then give the green light to the first ten. That "I decide" is half the system.

<h3>Second prompt: writing an article to capture Google's featured snippet</h3>

Once you have the approved topics, the second prompt is to write one, and that's where the standard from block 5 comes in.

<pre>SEO-optimized article writing for Google in first person singular, in Spanish from {%}, category {%} for the institutional blog of "{%}" with minimum length of "{%}" words and the target keyword in the subheadings as H2, H3, H4, etc. ordered with paragraphs of up to 100 words each including naturally and attractively the main keyword "{%}", additionally external link with URL {%} and anchor text "{%}", internal link to another page on the website, or article, forcing the call to action with URL {%}, and closing with topic conclusion, tips, and invitation to contact "{%}". You are also responsible for creating SEO title, SEO description, minimum 5 image alt texts, and permalink configuration. Note: The body must include at the beginning an unordered list with 2 (two) or 3 (three) highlighted paragraphs of up to 160 characters each.</pre>

<h3>4. The topic architecture (without cannibalizing)</h3>

Don't release orphan articles. They're organized into pillars and satellites: one main page per central topic, and between six and twelve articles around it answering sub-questions, all linked to each other and toward the pillar. That tells Google you dominate the topic, not that you have a random article.

<h3>The trap to avoid: cannibalization</h3>

Cannibalization is when two of your pages fight for the same search and shadow each other (Google doesn't know which to show and ends up showing both worse). The practical rule: if you can't say in one sentence how one satellite differs from the next, they're going to fight; merge them into one. The sign it's already happening: your page that shows up for a search keeps switching between two URLs from week to week.

<h3>5. The standard Google rewards (so you don't get caught)</h3>

Here's the fine print that prevents everything else from blowing up. Google has a public policy against what it calls "scaled content abuse." The official definition is: generating many pages whose primary purpose is to manipulate ranking without helping the user. And it clarifies something important: the method doesn't matter. The policy applies "whether with AI, human effort, or a mix." So AI isn't the crime. The crime is the result: heaps of pages with no value to climb Google. In fact, Google gives as an explicit example of a violation "using generative AI to produce many pages without adding value."

<h3>E-E-A-T: the shield</h3>

The shield has a name and an acronym you'll see everywhere: E-E-A-T. The first E stands for Experience (Google added it in 2022). Translated to what you do when writing with AI:

<ul>
 	<li>First-hand experience. Your real case, your numbers, your own screenshots, results with their date. AI writes, but the data is yours. It's what no competitor can copy and no AI can invent.</li>
 	<li>Cited data. Every strong claim with its linked source (this is already house doctrine).</li>
 	<li>Verifiable author. Not an anonymous article signed by "the team." A real, verifiable author behind it.</li>
</ul>

So they don't sell it to you as a magic button: E-E-A-T is not a direct ranking switch. It's the framework Google's human quality raters use to judge quality. Doing things this way lowers the risk of getting caught and improves your odds; it doesn't guarantee the #1 spot. Google also tightens this with every major algorithm update (the so-called core updates), and filler pages are the first to fall.

<h2>6. Niche, pricing, and first client: the business sales kit</h2>

This same system is sellable as a service, and that's the second path of all this. You don't sell a company "a hundred thousand articles." You sell this: writing only what Google already confirms their customers search for, with the business's experience inside, to move from page 2 to page 1 on the topics they've almost earned.

<h3>What to charge (real ranges 2025-2026)</h3>

<a href="https://selvaggiesteban.dev/en/services/seo-positioning/">SMB SEO</a> moves in a few thousand per month. The average agency charges around $3,200 monthly, and most charge above $1,000 (data varies by country: in the US and Canada, nearly 80% of agencies charge more than $1,000/month; globally there are more agencies below). You charge by monthly recurring fee, not by the hour: you charge for the result that accumulates. Some agencies also charge a one-time setup fee, but it's not the norm (most don't); if you add one, it works well to filter out those who aren't serious.

<h3>How to get your first client (in order)</h3>

Pick a narrow niche. Dental clinics in your city, physiotherapists, law firms, a specific type of e-commerce. "I do SEO for anyone" doesn't sell; "I build SEO for dental clinics" does, because the one next door refers you.

Free audit as bait, but a good one. Not a generic audit of "your site loads slow." Show them three searches that specific business already has in strike distance and isn't leveraging (pull them with the spy prompt on their website). And translate every finding into money, not jargon: not "you're in position 14 for this keyword," but "there are X people per month searching for this in your area and your competition is taking them."

One case. Do the first one free or at half price in exchange for a testimonial with numbers. That case opens the next ones.

A well-done free audit converts well according to people in the trade, because it changes the conversation from "I'm selling you SEO" to "look at this problem of yours that's costing you money." And that conversation is won by the specialist, not the generalist.

<h2>7. The honest boundary (what won't come free or fast)</h2>

<h3>Volume is the risk, not the play</h3>

Hundreds of thousands of generated articles are exactly the profile that scaled content abuse policies watch for. That it works for them today doesn't mean your site survives if you copy the volume without real experience inside. An algorithm update can erase you overnight.

<h3>SEO takes time</h3>

It's not money tomorrow. Indexing takes weeks, seeing traffic takes months, and real growth takes half a year. The system doesn't speed that up; what it does is make sure you don't waste that time writing about what nobody searches for.

<h3>Validated demand has a ceiling</h3>

You can only write about what people ALREADY search for and where you ALREADY appear. It's a machine to squeeze what you have, not to invent new demand. To create a category from scratch, this doesn't work.

<h3>The first client is hard to get</h3>

The free audit converts well, but first you have to find someone to audit. The narrow niche is what makes word of mouth start rolling.

Everything above you build and sell yourself. You don't need anything else.

<h4>Google defines "scaled content abuse"</h4>

Google Search Central, Spam Policies — official source. Google defines "scaled content abuse" and clarifies it applies equally whether AI, human, or a mix (AI isn't prohibited per se): what it penalizes is the result (many low-value pages to manipulate ranking), not the method.

<h4>E-E-A-T: Google added the E for Experience in 2022</h4>

Google Search Central, Dec 2022 — official source. E-E-A-T is still current. Mandatory honest caveat: E-E-A-T is NOT a direct ranking factor — it's the framework of Google's human quality raters. It's not a button.

<h4>Strike distance keywords</h4>

Trade consensus (Ahrefs, SE Ranking). Strike distance keywords are those at positions 11-30 with many impressions and low CTR.

<h4>Google Search Console connects to Claude Code</h4>

DATO — Community open-source project mcp-gsc (installs with uvx mcp-search-console; auth via OAuth or service account). Honest caveat: it's a third-party project, not officially from Google or Anthropic; the path without any of this is the CSV export.

<h4>SMB SEO moves in a few thousand per month</h4>

DATO/TRINCHERA — Industry surveys (Ahrefs, n=439; SE Ranking). Average agency ~$3,200; most charge >$1,000, more in US/Canada. The 50-100% setup fee is the rule WHEN it's charged, but most don't charge it.

Tags: #WebPositioning #SEOwithAI #E-E-A-T #SearchConsole #ContentMarketing #StrikeDistanceKeywords #PilarCluster #SEPOpportunities #DigitalMarketing #SEOFactory