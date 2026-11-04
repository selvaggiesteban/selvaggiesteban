import re

with open(r'C:\Users\Esteban Selvaggi\.local\share\opencode\worktree\55a4ad332f8ee36b1d920be8458b62fdde6ebd72\happy-forest\extract_urls.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract URLs from the output
urls = re.findall(r'https?://[^\s"<>]+', content)

# Filter out admin panels, login pages, and non-website URLs
filtered_urls = []
for url in urls:
    # Skip admin/login pages
    if any(x in url.lower() for x in ['/wp-admin', '/wp-login', '/login', '/webmail', '/admin', 'mail.hostinger.com', 'clientes.', 'micuenta.', 'auth.', 'account.', 'crm.', 'app.']):
        continue
    # Skip temporary/staging sites
    if 'hostingersite.com' in url or 'plesk.page' in url or 'cloud.wiroos.net' in url:
        continue
    # Skip tool/service URLs
    if any(x in url for x in ['trello.com', 'google.com', 'github.com', 'cloudflare.com', 'youtube.com', 'facebook.com', 'twitter.com', 'instagram.com', 'linkedin.com', 'wordpress.org', 'figma.com', 'fiverr.com', 'freelancer.com', 'upwork.com', 'workana.com', 'malt.es', 'wellfound.com', 'peopleperhour.com', 'dropi.ar', 'salebix.net', 'brevo.com', 'ionos.com', 'hostinger.com', 'donweb.com', 'tiendanube.com', 'refersion.com', 'n8n.cloud', 'openclaw.', 'selvaggiesteban.dev/login', 'selvaggiesteban.dev/ingresarawordpress']):
        continue
    # Skip API/technical URLs
    if any(x in url for x in ['172.30.', '158.69.', '93.93.', '212.227.', 'raq90.', 'ar141.', 'vps121295.', 'c522.', 'sync-elit']):
        continue
    # Skip markdown/formatting artifacts
    if url.endswith('`\\\\') or url.endswith('`') or '](' in url:
        continue
    # Skip image/video URLs
    if any(x in url for x in ['.webp', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.mp4', '.pdf']):
        continue
    # Skip plugin URLs
    if '/plugins/' in url:
        continue
    # Skip schema.org
    if 'schema.org' in url.lower():
        continue
    # Skip README.md
    if 'README.md' in url:
        continue
    # Skip S3 URLs
    if 's3.amazonaws.com' in url:
        continue
    # Skip WhatsApp API
    if 'api.whatsapp.com' in url or 'wa.me' in url:
        continue
    # Skip Google review URLs
    if 'g.page' in url:
        continue
    # Skip share URLs
    if 'share.google' in url:
        continue
    # Skip tr.ee shortlinks
    if 'tr.ee' in url:
        continue
    # Skip canva links
    if 'canva.link' in url:
        continue
    # Skip youtu.be
    if 'youtu.be' in url:
        continue
    # Skip tiktok
    if 'tiktok.com' in url:
        continue
    # Skip oca.com.ar
    if 'oca.com.ar' in url:
        continue
    # Skip pagomiscuentas.com
    if 'pagomiscuentas.com' in url:
        continue
    # Skip guarani.uba.ar and id.uba.ar
    if 'uba.ar' in url:
        continue
    # Skip office.com
    if 'office.com' in url:
        continue
    # Skip gmail.com
    if 'gmail.com' in url:
        continue
    # Skip rightpress.zendesk.com
    if 'zendesk.com' in url:
        continue
    # Skip webtoffee.com
    if 'webtoffee.com' in url:
        continue
    # Skip 8theme.com
    if '8theme.com' in url:
        continue
    # Skip businessbloomer.com
    if 'businessbloomer.com' in url:
        continue
    # Skip barn2.com
    if 'barn2.com' in url:
        continue
    # Skip elementorpress.com
    if 'elementorpress.com' in url:
        continue
    # Skip proelements.org
    if 'proelements.org' in url:
        continue
    # Skip colppy.com
    if 'colppy.com' in url:
        continue
    # Skip dragonchat.io
    if 'dragonchat.io' in url:
        continue
    # Skip app.dropdeal.ar
    if 'dropdeal.ar' in url:
        continue
    # Skip app.teemsagency.com
    if 'teemsagency.com' in url:
        continue
    # Skip jonyonlinecash.com
    if 'jonyonlinecash.com' in url:
        continue
    # Skip laburas.com
    if 'laburas.com' in url:
        continue
    # Skip forobeta.com
    if 'forobeta.com' in url:
        continue
    # Skip gcam1198.siteground.biz
    if 'siteground.biz' in url:
        continue
    # Skip selvaggiesteban.app.n8n.cloud
    if 'app.n8n.cloud' in url:
        continue
    # Skip openclaw.selvaggiesteban.dev/login
    if 'openclaw.selvaggiesteban.dev/login' in url:
        continue
    # Skip ventasonline.payway.com.ar
    if 'payway.com.ar' in url:
        continue
    # Skip www5.oca.com.ar
    if 'www5.oca.com.ar' in url:
        continue
    # Skip www4.cbc.uba.ar
    if 'www4.cbc.uba.ar' in url:
        continue
    # Skip app.notion.com
    if 'app.notion.com' in url:
        continue
    # Skip raw.githubusercontent.com
    if 'raw.githubusercontent.com' in url:
        continue
    # Skip d2k1ftgv7pobq7.cloudfront.net
    if 'cloudfront.net' in url:
        continue
    # Skip res.cloudinary.com
    if 'cloudinary.com' in url:
        continue
    # Skip mailpoet.com
    if 'mailpoet.com' in url:
        continue
    # Skip account.mailpoet.com
    if 'account.mailpoet.com' in url:
        continue
    # Skip accounts.mailerlite.com
    if 'accounts.mailerlite.com' in url:
        continue
    # Skip app.hubspot.com
    if 'app.hubspot.com' in url:
        continue
    # Skip app.salebix.net
    if 'app.salebix.net' in url:
        continue
    # Skip crm.salebix.net
    if 'crm.salebix.net' in url:
        continue
    # Skip estebanselvaggi.ipzmarketing.com
    if 'ipzmarketing.com' in url:
        continue
    # Skip fullemails.ipzmarketing.com
    if 'fullemails.ipzmarketing.com' in url:
        continue
    # Skip selvaggiesteban.ipzmarketing.com
    if 'selvaggiesteban.ipzmarketing.com' in url:
        continue
    # Skip auth.hostinger.com
    if 'auth.hostinger.com' in url:
        continue
    # Skip mail.hostinger.com
    if 'mail.hostinger.com' in url:
        continue
    # Skip hpanel.hostinger.com
    if 'hpanel.hostinger.com' in url:
        continue
    # Skip clientes.latincloud.com
    if 'clientes.latincloud.com' in url:
        continue
    # Skip clientes.nuthost.com
    if 'clientes.nuthost.com' in url:
        continue
    # Skip clientes.wiroos.com
    if 'clientes.wiroos.com' in url:
        continue
    # Skip ferozo.host
    if 'ferozo.host' in url:
        continue
    # Skip login.brevo.com
    if 'login.brevo.com' in url:
        continue
    # Skip login.ionos.es
    if 'login.ionos.es' in url:
        continue
    # Skip mail.ionos.com
    if 'mail.ionos.com' in url:
        continue
    # Skip bank.com.ar
    if 'bank.com.ar' in url:
        continue
    # Skip insightful-brown.93-93-114-8.plesk.page
    if 'plesk.page' in url:
        continue
    # Skip practical-morse.212-227-248-59.plesk.page
    if 'practical-morse' in url:
        continue
    # Skip yellowgreen-hyena-968296.hostingersite.com
    if 'yellowgreen-hyena' in url:
        continue
    # Skip teal-kangaroo-518905.hostingersite.com
    if 'teal-kangaroo' in url:
        continue
    # Skip peachpuff-hornet-801724.hostingersite.com
    if 'peachpuff-hornet' in url:
        continue
    # Skip lightblue-shrew-991665.hostingersite.com
    if 'lightblue-shrew' in url:
        continue
    # Skip lightcoral-worm-221915.hostingersite.com
    if 'lightcoral-worm' in url:
        continue
    # Skip access1012224408.webspace-data.io
    if 'webspace-data.io' in url:
        continue
    # Skip tplinkwifi.net
    if 'tplinkwifi.net' in url:
        continue
    # Skip 172.30.160.1:11434
    if '172.30.160.1' in url:
        continue
    # Skip github.com/selvaggiesteban
    if 'github.com/selvaggiesteban' in url:
        continue
    # Skip webmail.vasmargroup.com
    if 'webmail.vasmargroup.com' in url:
        continue
    # Skip webmail.nice.com.ar
    if 'webmail.nice.com.ar' in url:
        continue
    # Skip bonjour.ar/asistencia365
    if 'asistencia365' in url:
        continue
    # Skip bonjour.ar/zyxmecanizados
    if 'zyxmecanizados' in url:
        continue
    # Skip geobauen.com/wp-admin
    if 'geobauen.com' in url:
        continue
    # Skip forttia.sistemafull.com
    if 'sistemafull.com' in url:
        continue
    # Skip forttech.tech
    if 'forttech.tech' in url:
        continue
    # Skip marking.com.ar
    if 'marking.com.ar' in url:
        continue
    # Skip nordichairinstitute.com
    if 'nordichairinstitute.com' in url:
        continue
    # Skip milgrullas.org
    if 'milgrullas.org' in url:
        continue
    # Skip academiacopo.com
    if 'academiacopo.com' in url:
        continue
    # Skip somostuimpulso.ar
    if 'somostuimpulso.ar' in url:
        continue
    # Skip urgenciafunerariars.com.ar
    if 'urgenciafunerariars.com.ar' in url:
        continue
    # Skip admin.trustindex.io
    if 'trustindex.io' in url:
        continue
    # Skip checkout.getnet.cl
    if 'getnet.cl' in url:
        continue
    # Skip www.tiktok.com
    if 'tiktok.com' in url:
        continue
    # Skip selvaggiconsultores.selvaggi-esteban.workers.dev
    if 'workers.dev' in url:
        continue
    # Skip mayorista-decotay.selvaggi-esteban.workers.dev
    if 'mayorista-decotay.selvaggi-esteban.workers.dev' in url:
        continue
    # Skip selvaggiesteban.dev/login
    if 'selvaggiesteban.dev/login' in url:
        continue
    # Skip selvaggiesteban.dev/ingresarawordpress
    if 'selvaggiesteban.dev/ingresarawordpress' in url:
        continue
    # Skip openclaw.selvaggiesteban.dev/login
    if 'openclaw.selvaggiesteban.dev/login' in url:
        continue
    # Skip app.notion.com
    if 'app.notion.com' in url:
        continue
    # Skip raw.githubusercontent.com
    if 'raw.githubusercontent.com' in url:
        continue
    # Skip d2k1ftgv7pobq7.cloudfront.net
    if 'cloudfront.net' in url:
        continue
    # Skip res.cloudinary.com
    if 'cloudinary.com' in url:
        continue
    # Skip mailpoet.com
    if 'mailpoet.com' in url:
        continue
    # Skip account.mailpoet.com
    if 'account.mailpoet.com' in url:
        continue
    # Skip accounts.mailerlite.com
    if 'accounts.mailerlite.com' in url:
        continue
    # Skip app.hubspot.com
    if 'app.hubspot.com' in url:
        continue
    # Skip app.salebix.net
    if 'app.salebix.net' in url:
        continue
    # Skip crm.salebix.net
    if 'crm.salebix.net' in url:
        continue
    # Skip estebanselvaggi.ipzmarketing.com
    if 'ipzmarketing.com' in url:
        continue
    # Skip fullemails.ipzmarketing.com
    if 'fullemails.ipzmarketing.com' in url:
        continue
    # Skip selvaggiesteban.ipzmarketing.com
    if 'selvaggiesteban.ipzmarketing.com' in url:
        continue
    # Skip auth.hostinger.com
    if 'auth.hostinger.com' in url:
        continue
    # Skip mail.hostinger.com
    if 'mail.hostinger.com' in url:
        continue
    # Skip hpanel.hostinger.com
    if 'hpanel.hostinger.com' in url:
        continue
    # Skip clientes.latincloud.com
    if 'clientes.latincloud.com' in url:
        continue
    # Skip clientes.nuthost.com
    if 'clientes.nuthost.com' in url:
        continue
    # Skip clientes.wiroos.com
    if 'clientes.wiroos.com' in url:
        continue
    # Skip ferozo.host
    if 'ferozo.host' in url:
        continue
    # Skip login.brevo.com
    if 'login.brevo.com' in url:
        continue
    # Skip login.ionos.es
    if 'login.ionos.es' in url:
        continue
    # Skip mail.ionos.com
    if 'mail.ionos.com' in url:
        continue
    # Skip bank.com.ar
    if 'bank.com.ar' in url:
        continue
    # Skip insightful-brown.93-93-114-8.plesk.page
    if 'plesk.page' in url:
        continue
    # Skip practical-morse.212-227-248-59.plesk.page
    if 'practical-morse' in url:
        continue
    # Skip yellowgreen-hyena-968296.hostingersite.com
    if 'yellowgreen-hyena' in url:
        continue
    # Skip teal-kangaroo-518905.hostingersite.com
    if 'teal-kangaroo' in url:
        continue
    # Skip peachpuff-hornet-801724.hostingersite.com
    if 'peachpuff-hornet' in url:
        continue
    # Skip lightblue-shrew-991665.hostingersite.com
    if 'lightblue-shrew' in url:
        continue
    # Skip lightcoral-worm-221915.hostingersite.com
    if 'lightcoral-worm' in url:
        continue
    # Skip access1012224408.webspace-data.io
    if 'webspace-data.io' in url:
        continue
    # Skip tplinkwifi.net
    if 'tplinkwifi.net' in url:
        continue
    # Skip 172.30.160.1:11434
    if '172.30.160.1' in url:
        continue
    # Skip github.com/selvaggiesteban
    if 'github.com/selvaggiesteban' in url:
        continue
    # Skip webmail.vasmargroup.com
    if 'webmail.vasmargroup.com' in url:
        continue
    # Skip webmail.nice.com.ar
    if 'webmail.nice.com.ar' in url:
        continue
    # Skip bonjour.ar/asistencia365
    if 'asistencia365' in url:
        continue
    # Skip bonjour.ar/zyxmecanizados
    if 'zyxmecanizados' in url:
        continue
    # Skip geobauen.com/wp-admin
    if 'geobauen.com' in url:
        continue
    # Skip forttia.sistemafull.com
    if 'sistemafull.com' in url:
        continue
    # Skip forttech.tech
    if 'forttech.tech' in url:
        continue
    # Skip marking.com.ar
    if 'marking.com.ar' in url:
        continue
    # Skip nordichairinstitute.com
    if 'nordichairinstitute.com' in url:
        continue
    # Skip milgrullas.org
    if 'milgrullas.org' in url:
        continue
    # Skip academiacopo.com
    if 'academiacopo.com' in url:
        continue
    # Skip somostuimpulso.ar
    if 'somostuimpulso.ar' in url:
        continue
    # Skip urgenciafunerariars.com.ar
    if 'urgenciafunerariars.com.ar' in url:
        continue
    # Skip admin.trustindex.io
    if 'trustindex.io' in url:
        continue
    # Skip checkout.getnet.cl
    if 'getnet.cl' in url:
        continue
    # Skip www.tiktok.com
    if 'tiktok.com' in url:
        continue
    # Skip selvaggiconsultores.selvaggi-esteban.workers.dev
    if 'workers.dev' in url:
        continue
    # Skip mayorista-decotay.selvaggi-esteban.workers.dev
    if 'mayorista-decotay.selvaggi-esteban.workers.dev' in url:
        continue
    # Skip selvaggiesteban.dev/login
    if 'selvaggiesteban.dev/login' in url:
        continue
    # Skip selvaggiesteban.dev/ingresarawordpress
    if 'selvaggiesteban.dev/ingresarawordpress' in url:
        continue
    
    # Clean up URL - remove trailing characters
    url = url.rstrip('.,;:)]')
    if url.startswith('http'):
        filtered_urls.append(url)

# Extract domain names
domains = []
for url in filtered_urls:
    # Extract domain from URL
    match = re.match(r'https?://([^/]+)', url)
    if match:
        domain = match.group(1)
        # Remove www. prefix
        if domain.startswith('www.'):
            domain = domain[4:]
        domains.append(domain)

# Remove duplicates and sort
unique_domains = sorted(set(domains))

# Print results
for domain in unique_domains:
    print(domain)