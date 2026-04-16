from bs4 import BeautifulSoup
from pathlib import Path
html_path = Path('/home/ubuntu/browser_html/magnos-site_vercel_app_page_1776358303136.html')
soup = BeautifulSoup(html_path.read_text(encoding='utf-8'), 'html.parser')
print('TITLE:', soup.title.string.strip() if soup.title and soup.title.string else '')
for name in ['description','keywords','robots','viewport']:
    tag = soup.find('meta', attrs={'name': name})
    print(f'META {name}:', tag.get('content','') if tag else '<missing>')
canon = soup.find('link', rel=lambda x: x and 'canonical' in x)
print('CANONICAL:', canon.get('href','<missing>') if canon else '<missing>')
print('LANG:', soup.html.get('lang','<missing>') if soup.html else '<missing>')
print('H1 COUNT:', len(soup.find_all('h1')))
print('H2 COUNT:', len(soup.find_all('h2')))
print('IMG COUNT:', len(soup.find_all('img')))
missing_alt = []
for i, img in enumerate(soup.find_all('img'), start=1):
    alt = img.get('alt')
    if alt is None or not alt.strip():
        missing_alt.append((i, img.get('src','')[:120]))
print('IMAGES MISSING ALT:', len(missing_alt))
for item in missing_alt[:10]:
    print(' -', item)
anchors = soup.find_all('a')
print('ANCHOR COUNT:', len(anchors))
for a in anchors[:20]:
    print('A:', (a.get_text(' ', strip=True) or '<no-text>')[:80], '->', a.get('href',''))
print('JSON-LD COUNT:', len(soup.find_all('script', attrs={'type':'application/ld+json'})))
