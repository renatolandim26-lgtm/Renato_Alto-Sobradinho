from bs4 import BeautifulSoup
from pathlib import Path
from urllib.parse import urljoin
import requests
html = Path('/home/ubuntu/browser_html/magnos-site_vercel_app_page_1776358303136.html').read_text(encoding='utf-8')
soup = BeautifulSoup(html, 'html.parser')
base = 'https://magnos-site.vercel.app/'
assets = []
for tag in soup.find_all(['script','link']):
    url = tag.get('src') or tag.get('href')
    if not url:
        continue
    if url.startswith('data:'):
        continue
    full = urljoin(base, url)
    if any(ext in full for ext in ['.js','.css','.woff','.woff2','.png','.jpg','.jpeg','.webp','.svg']):
        try:
            r = requests.head(full, allow_redirects=True, timeout=20)
            size = r.headers.get('content-length','?')
            ctype = r.headers.get('content-type','?')
        except Exception as e:
            size = f'ERR:{e}'
            ctype = 'ERR'
        assets.append((tag.name, full, ctype, size))
print('ASSET_COUNT', len(assets))
for item in assets:
    print('\t'.join(map(str,item)))
