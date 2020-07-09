from bs4 import BeautifulSoup
import requests
from urllib.request import urlopen
import re


cntst_url = "https://atcoder.jp/contests/"
abc = "AtCoder Beginner Contest"

cr = urlopen(cntst_url)
soup = BeautifulSoup(cr, 'html.parser')
table = soup.findAll("table")[2]
row = table.findAll("tr")

for i in range(len(row)):
    res = row[i].select("td a")
    if(len(res) > 1):
        print(res[1].contents)
        txt = res[1].contents[0]
        match = re.match(r'^AtCoder Beginner Contest',txt)
        #sm = match.group()
        #print(match)
        if not (match is None):
            #print("------")
            res = txt
            break
num = res.strip(abc)      
print(num) 

#tc = row.findAll("td")[2]
#print(row)
pro_ar = ["a","b","c","d","e","f"]
num = int(num)
for i in range(5):
    num -= i
    target_url = "https://atcoder.jp/contests/abc"+str(num)+"/tasks/abc"+str(num)+"_"
    for s in pro_ar:
        target = target_url + s
        r = requests.get(target)
        soup = BeautifulSoup(r.text, 'lxml')
        print(soup.title.text)
