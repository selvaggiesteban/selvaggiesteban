import re
import json

with open(r'C:\Users\Esteban Selvaggi\Desktop\subagent-driven_development\Ohd6k2co - esteban-selvaggi.json', 'r', encoding='utf-8') as f:
    content = f.read()

urls = re.findall(r'https?://[^\s"<>]+', content)
unique_urls = sorted(set(urls))

# Filter out common non-website URLs
filtered_urls = [url for url in unique_urls if not any(domain in url for domain in ['trello.com', 'google.com', 'github.com', 'cloudflare.com', 'youtube.com', 'facebook.com', 'twitter.com', 'instagram.com', 'linkedin.com'])]

for url in filtered_urls:
    print(url)