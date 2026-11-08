import pdfplumber,json,glob,re,sys
HARI={'Se':'Senin','Sl':'Selasa','Ra':'Rabu','Ka':'Kamis','Ju':'Jumat','Sa':'Sabtu'}
PRE={'HL':'X','HJ':'XI','HT':'XII'}
out={};warn=[]
for f in sorted(glob.glob('jd/*.pdf')):
  pdf=pdfplumber.open(f)
  for pg in pdf.pages:
    W=pg.extract_words(extra_attrs=['size'])
    IST=lambda c:'ISTIRAHAT' in c['n']+c['t']
    V=[l for l in pg.lines if abs(l['x0']-l['x1'])<1]
    H=[l for l in pg.lines if abs(l['top']-l['bottom'])<1]
    # class
    t=[w for w in W if w['top']<70 and re.match(r'^(HL|HJ|HT)$',w['text'])]
    if not t: warn.append((f,pg.page_number,'no class'));continue
    num=[w for w in W if abs(w['top']-t[0]['top'])<3 and re.match(r'^\d+$',w['text'])][0]['text']
    kls=f"{PRE[t[0]['text']]} {t[0]['text']} {num}"
    gk=[w for w in W if w['top']<70 and w['x0']>t[0]['x1']+20 and w['size']<12]
    wali=' '.join(w['text'] for w in sorted(gk,key=lambda w:(round(w['top']),w['x0']))).split(':',1)[-1].strip()
    # header band
    top0=min(l['top'] for l in H if l['x1']-l['x0']>500); 
    hb=sorted(set(round(l['top']) for l in H if l['x1']-l['x0']>500))
    htop,hbot=hb[0],hb[1]
    E=sorted(set(round(l['x0']) for l in V if l['top']<=htop+1 and l['bottom']>=hbot-1))
    # drop leftmost (page edge 12) -> first col edge is day col right
    E=[x for x in E if x>20]
    cols=[]
    for a,b in zip(E,E[1:]):
      ws=[w for w in W if htop<w['top']<hbot and a-1<=w['x0'] and w['x1']<=b+1]
      lab=' '.join(w['text'] for w in ws if w['size']>10); tm=' '.join(w['text'] for w in ws if w['size']<10)
      lab=re.sub(r'\s+','',lab)
      if 'ISTIRAHAT' in tm: lab='ISTIRAHAT'; tm=tm.replace('ISTIRAHAT','').strip()
      cols.append({'n':lab,'t':tm,'a':a,'b':b})
    # day bands
    days=sorted([w for w in W if w['size']>30 and w['text'] in HARI],key=lambda w:w['top'])
    ys=sorted(set(round(l['top']) for l in H if l['x0']<20 and l['top']>hbot-1))
    ys=[hbot]+[y for y in ys if y>hbot+5]
    hari={}
    for (yt,yb) in zip(ys,ys[1:]):
      d=[w for w in days if yt<w['top']<yb]
      if not d: continue
      dn=HARI[d[0]['text']]
      xs=sorted(set(round(l['x0']) for l in V if l['top']<=yt+1 and l['bottom']>=yb-1 and l['x0']>20)|{E[0],E[-1]})
      # also istirahat column boundaries
      for c in cols:
        if IST(c): xs=sorted(set(xs)|{c['a'],c['b']})
      blok=[]
      for a,b in zip(xs,xs[1:]):
        ci=[i for i,c in enumerate(cols) if c['a']>=a-2 and c['b']<=b+2]
        if not ci or any(IST(cols[i]) for i in ci): continue
        hs=sorted(set(round(l['top']) for l in H if yt+3<l['top']<yb-3 and l['x0']<=a+2 and l['x1']>=b-2))
        bands=[yt]+hs+[yb]; isi=[]
        for s0,s1 in zip(bands,bands[1:]):
          ws=[w for w in W if s0<=w['top']<s1 and a<=w['x0']+1 and w['x1']<=b+1 and w['size']<30]
          ws.sort(key=lambda w:(round(w['top']),w['x0']))
          m=' '.join(w['text'] for w in ws if w['size']>12); g=' '.join(w['text'] for w in ws if w['size']<=12)
          m=re.sub(r'(?<=\S)\(',' (',re.sub(r'\s+','',m)); g=re.sub(r'\s+','',g)
          if m or g: isi.append([m,g])
        if isi: blok.append([ci[0],ci[-1],isi])
      hari[dn]=blok
    out[kls]={'wali':wali,'jam':[[c['n'],c['t']] for c in cols],'hari':hari}
print(len(out),warn,file=sys.stderr)
json.dump(out,open('jadwal.json','w'),ensure_ascii=False)

from collections import Counter
C=Counter(m for v in out.values() for b in v['hari'].values() for x in b for m,g in x[2]);print(C)
print({k:v['wali'] for k,v in list(out.items())[:40]})
print(out['XII HT 1']['jam']);print(out['XII HT 1']['hari']['Rabu'])
print(out['XI HJ 1']['jam']);print(out['XI HJ 1']['hari']['Senin'])
