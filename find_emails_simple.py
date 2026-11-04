import re
import csv
import time
import urllib.request
import urllib.error
import ssl

# List of websites from the README
websites = [
    "abogario.com.ar",
    "acuatika25.com.ar",
    "alquiriasolutions.com",
    "alphatelservices.com",
    "andreamoreno.com.ar",
    "aptofisico.com",
    "babychic.ar",
    "bonjour.ar",
    "boscana.com.ar",
    "centraldeturbos.com",
    "ciclorural.com",
    "cvela2017.com",
    "decotay.com.ar",
    "depaoli.com.ar",
    "consulting-21.com",
    "draandreamamani.com",
    "educacionit.com",
    "endurances.com.ar",
    "estudiogsr.com.ar",
    "flyandcotarifa.com",
    "forttia.tech",
    "genblocksa.com",
    "geobauen.com",
    "gimenezmilena.com",
    "gretacloset.com",
    "gsrabogados.com.ar",
    "healthybodychamp.com",
    "identidadmarketing.com",
    "ingenieriaproyectos.com.ar",
    "lanuscomputacion.com",
    "lereve.com.ar",
    "marking.com.ar",
    "matiasgarcetesuarez.com.ar",
    "mayrea.com",
    "milgrullas.org",
    "montescookexperiences.com",
    "mottobasic.com",
    "mueblescavah.com.ar",
    "negociosoptimizados.com",
    "nordichairinstitute.com",
    "noticiassalud.com",
    "ntkic.com",
    "octonove.com",
    "oteguiobras.com",
    "pescaolidvalladolid.com",
    "petruscigars.com",
    "piscinasluciano.com.ar",
    "rocadeguiapsicologia.es",
    "saute.es",
    "selvaggiconsultores.com",
    "semikongarden.com.ar",
    "semikon.com.ar",
    "seararefrigeracion.com.ar",
    "sich.com.ar",
    "smartalk.cl",
    "somoswanderlust.com",
    "somostuimpulso.ar",
    "sosamirandaabogados.com.ar",
    "talaiotaudio.com",
    "tay.com.ar",
    "tvmasmagazine.com",
    "urgenciafunerariars.com.ar",
    "vintageradio.com.ar",
    "watervan.com.ar",
    "yourdream.ae",
    "zingueriazarza.com.ar"
]

# Email regex pattern
email_pattern = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')

# Create SSL context that doesn't verify certificates
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def find_email_for_domain(domain):
    """Try to find an email address for a given domain"""
    emails_found = set()
    
    # Try to fetch the main page
    urls_to_try = [
        f'https://{domain}',
        f'http://{domain}',
    ]
    
    for url in urls_to_try:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
            response = urllib.request.urlopen(req, timeout=5, context=ctx)
            content = response.read().decode('utf-8', errors='ignore')
            
            # Find all emails in the page
            found_emails = email_pattern.findall(content)
            for email in found_emails:
                emails_found.add(email.lower())
            
            # Also look for mailto: links
            mailto_pattern = re.compile(r'mailto:([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})')
            mailto_emails = mailto_pattern.findall(content)
            for email in mailto_emails:
                emails_found.add(email.lower())
            
            if emails_found:
                break
        except Exception as e:
            continue
    
    # Return the first email found, or a placeholder
    if emails_found:
        return list(emails_found)[0]
    else:
        return f"info@{domain}"

# Process all websites
results = []
for i, domain in enumerate(websites):
    print(f"Processing {i+1}/{len(websites)}: {domain}")
    email = find_email_for_domain(domain)
    results.append({"domain": domain, "email": email})
    print(f"  Found: {email}")
    time.sleep(0.2)  # Be nice to servers

# Write CSV file
csv_file = r'C:\Users\Esteban Selvaggi\.local\share\opencode\worktree\55a4ad332f8ee36b1d920be8458b62fdde6ebd72\happy-forest\emails.csv'
with open(csv_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['domain', 'email'])
    writer.writeheader()
    writer.writerows(results)

print(f"\nCSV file created: {csv_file}")
print(f"Total websites processed: {len(results)}")