import re

# Read the URLs from the extract_urls.py output
with open(r'C:\Users\Esteban Selvaggi\.local\share\opencode\worktree\55a4ad332f8ee36b1d920be8458b62fdde6ebd72\happy-forest\extract_urls.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all URLs
urls = re.findall(r'https?://[^\s"<>]+', content)

# Extract domains
domains = set()
for url in urls:
    match = re.match(r'https?://([^/]+)', url)
    if match:
        domain = match.group(1)
        # Remove www. prefix
        if domain.startswith('www.'):
            domain = domain[4:]
        domains.add(domain)

# Filter out common non-website domains
filtered_domains = set()
skip_patterns = ['trello.com', 'google.com', 'github.com', 'cloudflare.com', 'youtube.com', 
                 'facebook.com', 'twitter.com', 'instagram.com', 'linkedin.com', 'wordpress.org',
                 'figma.com', 'fiverr.com', 'freelancer.com', 'upwork.com', 'workana.com', 
                 'malt.es', 'wellfound.com', 'peopleperhour.com', 'hostinger.com', 'donweb.com',
                 'tiendanube.com', 'n8n.cloud', 'openclaw.', 'selvaggiesteban.dev/login',
                 'selvaggiesteban.dev/ingresarawordpress', 'ipzmarketing.com', 'mailpoet.com',
                 'mailerlite.com', 'hubspot.com', 'salebix.net', 'brevo.com', 'ionos.com',
                 'ferozo.host', 'plesk.page', 'hostingersite.com', 'webspace-data.io',
                 'tplinkwifi.net', '172.30.', '158.69.', '93.93.', '212.227.', 'raq90.',
                 'ar141.', 'vps121295.', 'c522.', 'sync-elit', 'cloudfront.net', 'cloudinary.com',
                 'zendesk.com', 'webtoffee.com', '8theme.com', 'businessbloomer.com', 'barn2.com',
                 'elementorpress.com', 'proelements.org', 'colppy.com', 'dragonchat.io',
                 'dropdeal.ar', 'teemsagency.com', 'jonyonlinecash.com', 'laburas.com',
                 'forobeta.com', 'siteground.biz', 'app.n8n.cloud', 'openclaw.selvaggiesteban.dev/login',
                 'payway.com.ar', 'www5.oca.com.ar', 'www4.cbc.uba.ar', 'app.notion.com',
                 'raw.githubusercontent.com', 'cloudfront.net', 'cloudinary.com', 'mailpoet.com',
                 'account.mailpoet.com', 'accounts.mailerlite.com', 'app.hubspot.com',
                 'app.salebix.net', 'crm.salebix.net', 'estebanselvaggi.ipzmarketing.com',
                 'fullemails.ipzmarketing.com', 'selvaggiesteban.ipzmarketing.com', 'auth.hostinger.com',
                 'mail.hostinger.com', 'hpanel.hostinger.com', 'clientes.latincloud.com',
                 'clientes.nuthost.com', 'clientes.wiroos.com', 'ferozo.host', 'login.brevo.com',
                 'login.ionos.es', 'mail.ionos.com', 'bank.com.ar', 'insightful-brown.93-93-114-8.plesk.page',
                 'practical-morse.212-227-248-59.plesk.page', 'yellowgreen-hyena-968296.hostingersite.com',
                 'teal-kangaroo-518905.hostingersite.com', 'peachpuff-hornet-801724.hostingersite.com',
                 'lightblue-shrew-991665.hostingersite.com', 'lightcoral-worm-221915.hostingersite.com',
                 'access1012224408.webspace-data.io', 'tplinkwifi.net', '172.30.160.1:11434',
                 'github.com/selvaggiesteban', 'webmail.vasmargroup.com', 'webmail.nice.com.ar',
                 'asistencia365', 'zyxmecanizados', 'geobauen.com', 'sistemafull.com', 'forttech.tech',
                 'marking.com.ar', 'nordichairinstitute.com', 'milgrullas.org', 'academiacopo.com',
                 'somostuimpulso.ar', 'urgenciafunerariars.com.ar', 'trustindex.io', 'getnet.cl',
                 'tiktok.com', 'workers.dev', 'mayorista-decotay.selvaggi-esteban.workers.dev',
                 'selvaggiesteban.dev/login', 'selvaggiesteban.dev/ingresarawordpress',
                 'openclaw.selvaggiesteban.dev/login', 'app.notion.com', 'raw.githubusercontent.com',
                 'cloudfront.net', 'cloudinary.com', 'mailpoet.com', 'account.mailpoet.com',
                 'accounts.mailerlite.com', 'app.hubspot.com', 'app.salebix.net', 'crm.salebix.net',
                 'estebanselvaggi.ipzmarketing.com', 'fullemails.ipzmarketing.com',
                 'selvaggiesteban.ipzmarketing.com', 'auth.hostinger.com', 'mail.hostinger.com',
                 'hpanel.hostinger.com', 'clientes.latincloud.com', 'clientes.nuthost.com',
                 'clientes.wiroos.com', 'ferozo.host', 'login.brevo.com', 'login.ionos.es',
                 'mail.ionos.com', 'bank.com.ar', 'insightful-brown.93-93-114-8.plesk.page',
                 'practical-morse.212-227-248-59.plesk.page', 'yellowgreen-hyena-968296.hostingersite.com',
                 'teal-kangaroo-518905.hostingersite.com', 'peachpuff-hornet-801724.hostingersite.com',
                 'lightblue-shrew-991665.hostingersite.com', 'lightcoral-worm-221915.hostingersite.com',
                 'access1012224408.webspace-data.io', 'tplinkwifi.net', '172.30.160.1:11434',
                 'github.com/selvaggiesteban', 'webmail.vasmargroup.com', 'webmail.nice.com.ar',
                 'asistencia365', 'zyxmecanizados', 'geobauen.com', 'sistemafull.com', 'forttech.tech',
                 'marking.com.ar', 'nordichairinstitute.com', 'milgrullas.org', 'academiacopo.com',
                 'somostuimpulso.ar', 'urgenciafunerariars.com.ar', 'trustindex.io', 'getnet.cl',
                 'tiktok.com', 'workers.dev', 'mayorista-decotay.selvaggi-esteban.workers.dev',
                 'selvaggiesteban.dev/login', 'selvaggiesteban.dev/ingresarawordpress',
                 'openclaw.selvaggiesteban.dev/login']

for domain in domains:
    if not any(skip in domain for skip in skip_patterns):
        filtered_domains.add(domain)

# Print filtered domains
for domain in sorted(filtered_domains):
    print(domain)