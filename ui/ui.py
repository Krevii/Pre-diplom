from urllib.request import urlopen
from bs4 import BeautifulSoup

url = "http://py4e-data.dr-chuck.net/comments_1776813.html"
html = urlopen(url).read()
soup = BeautifulSoup(html, "html.parser")

total = 0
for tag in soup.select('tr:has(.comments)'):
    value = int(tag.select_one('.comments').text)
    total += value

print(total)