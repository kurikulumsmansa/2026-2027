/*
  DATA MURID — TP 2026/2027
  Sumber: Google Sheets "NAMA MURID SMA NEGERI 1 BATAM TP 2026/2027" (sheet HL, HJ, HT).
  Satu baris = satu murid: L/P|Nama|NIS|NISN|Agama  (Agama: I=Islam K=Kristen C=Katolik B=Buddha H=Hindu; kosongkan jika belum ada; "-" jika L/P belum diisi).
  Website mengambil data TERBARU langsung dari sheet itu (murid.js). File ini hanya cadangan jika sheet gagal dibuka.
  Ubah tanggal "update" setiap kali data diperbarui (format TAHUN-BULAN-TANGGAL).
*/
const MURID = {
  update: "2026-11-01",
  kelas: {
"X HL 1": `L|Abiyzzhafran Adita|10761|0109959382|I
L|Achmad Luthfi|10762|3104572977|I
P|Afirah Nur Muhammad|10776|3099421699|I
L|Aji Kurnia Akbar|10785|0103026453|I
P|Alicia Patio Uli Purba|10792|0104713026|K
L|Alphian Zio Raditya|10797|0119264883|I
L|Alvito Ginting|10798|0117177663|K
P|Alyssandra Adeena Irwan|10802|0116506853|I
L|Arai Valentzahid Ramdani|10828|0107810280|I
P|Artha Kezo Pongmanapa|10834|0116307323|K
P|Aurell Rahma Anzani|10848|0102460610|I
P|Bernika Juniartha Simbolon|10859|0115649830|K
P|Chalisa Nadhifa|10867|0107675565|I
P|Chila Farita Putri Novira|10869|0102827398|I
P|Chiquita Maygood Naibaho|10870|0118758739|K
L|Christo Vallen Tambunan|10873|0117750200|K
P|Cindy Aulia Putri|10874|0102148236|I
L|Endzaghi Atla|10906|0105852732|I
L|Fikri Faqih|10938|0116138495|I
P|Fransiska Mona Violentina Simanjuntak|10945|0117310089|C
P|Indah Puspita Marbun|10975|0103274522|K
L|Keanu Al Rucci|10997|0114015713|I
L|M. Adriansyah Putra|11025|0115505592|I
L|Muhammad Keenan Raihanul Islam|11048|3108808193|I
L|Muhammad Naufal Kurniawan|11050|0109593413|I
L|Muhammad Zakie Yuliansyah|11060|0112572311|I
P|Naysila Arizka Ripani|11081|0106036609|I
P|Nikita Sesilya Manurung|11086|0109604865|C
P|Orizha Satifa|11101|0106577737|I
L|Parisya Aqsa Putra|11105|0119460854|I
L|Rifqi Hidayat|11150|0108681803|I
P|Sabrina Putri Ziwi|11161|0107667147|I
P|Secilia Natalin Sianturi|11173|0108338250|K
P|Sherwina Hevelyn Verlica|11181|0107197018|B
P|Silvanie Cung|11184|0111419681|B
P|Syafira Azzahra|11190|0109657725|I
P|Theresia Angelica Christmarines|11203|0115777545|C
P|Threecyalona Angel Naara|11204|0103851149|K
L|Yasser Ahmadinejad|11214|0107841624|I
L|Yusuf Christian Barlen Simamora|11221|0103329250|K`,
"X HL 2": `P|Aatikah Khairullah|10758|0101516443|I
L|Abdiel Alfayed|10759|0104363490|I
L|Adiviansyah Rahmat Ramadhan|10770|0107047853|I
P|Angel Dahliana Tampubolon|10812|0111060331|K
P|Ashila Zulaikha|10837|0112106630|I
L|Athoriq Ahmad Barat|10842|0119318411|I
L|Augi Salmanita Al Farizi|10845|0117878243|I
P|Chosika Optima Theresia Lumban Gaol|10872|0113387950|K
P|Dhiva Iqlillah|10888|0103985374|I
L|Digo Situmorang|10890|0112359884|K
P|Dwi Nurhidayah|10894|0103205097|I
L|Dzaky Alif Al Abiyu|10899|0109044209|I
L|Erdo Jhofa Andriano|10908|0117554248|I
P|Fadila Anggraini|10915|0107354173|I
L|J R Josua Pardosi|10980|0105615653|K
P|Joice Stefani Elizabeth Silitonga|10984|0112483570|K
L|Jonathan Morisdo Sihaloho|10985|3109508484|K
P|Jovanka Martha Adeline Tambunan|10986|0119961198|K
L|Kaleb Manurung|10991|0114251460|K
P|Khalissa Asti Alfianti|11007|0105113232|I
L|Khoirul Azzam Al Ghifari|11011|0105391582|I
P|Macika Putri Agatha|11026|0118223633|I
P|Marianna Vrantricilya Aruan|11030|0113562601|K
P|Naina Putri Neren|11069|0106510310|I
P|Nayla Kelsy Yarmarina|11077|0115986442|I
P|Nisa Ayu Adelia|11088|0103787046|I
L|Nopal Joma Rizkiansyah|11091|0103535040|I
P|Raisya Rohadatul 'Aisy|11127|0105600318|I
P|Rebecca Glory|11139|0111513346|K
L|Rexy Marvin Simbolon|11146|0104993829|K
L|Rifkyano Tampubolon|11149|0115370013|K
L|Risky Melala Sinulingga|11154|0107564870|K
P|Ruth Eleora Jilena Kalangie|11159|0117215606|K
P|Shaquilla Septriani|11180|3105353418|I
L|Stevent Hamonangan Siringoringo|11188|0112808361|K
P|Syafira Dwi Putri|11191|0101535024|I
L|Taqiy Azfar Assakha|11199|0118159080|I
P|Tiyasa Hesi|11206|0113957245|I
L|Tristan Naafi Alva Dhiya|11208|0119377030|I
P|Zivana Alayya Putri|11230|0107497227|I`,
"X HL 3": `P|Abel Salma Raihanah|10760|0111831047|I
P|Adeta Zieanka Saicindo|10767|0114965129|I
P|Aisyah Delfina Binti Moh Sadiq|10782|0117562725|I
P|Amira Najwa Farisah|10807|3117754698|I
P|Aqilah Najla Shabirah|10827|0103832072|I
L|Asyam Arkan|10838|0103151930|I
P|Azkiya Nawal Refani Siregar|10853|0119807328|I
P|Bunga Leonie Saraswati Sihombing|10863|0116966288|I
L|Candra Purnama Sidi|10865|0118769720|I
P|Cinta|10875|0108122427|K
P|Dwi Reva Afrianty|10895|0118629900|I
L|Emerald Affreyn|10905|0116005344|I
P|Fadrani Indah Pertiwi|10916|0107945072|I
P|Fathimah Az Zahro|10931|0098733763|I
P|Firly Inayah Guswara|10941|0104054721|I
L|Habib Aditya Alamsyah|10957|0102299248|I
P|Hutri Nur Syahira|10968|0105369530|I
L|I Putu Andrayuga|10970|0117782069|H
L|I Putu Bagus Pradita Cita Utama|10971|0119015635|H
P|Indah Maya|10974|0117921422|I
P|Keysa Nadine Sagita Santoso|11001|0099511481|I
P|Khairun Nisa|11004|0091276487|I
L|Kheryso Gabrielo|11010|0114677022|K
P|Marcilya Sofia Anisa Wili|11027|0102592985|I
L|Muhammad Arief Syahputra|11043|0119803907|I
L|Muhammad Dzaki Widya Putra|11044|0103720347|I
L|Muhammad Sakti Salim|11056|0103641204|I
P|Nabila Sativa Apriani Putri|11065|0115428930|I
P|Nadhifa Aqila Aska|11066|3107456931|I
P|Naomita Anggraeny Situmorang|11072|0114339294|K
P|Nurul Aini|11098|0117621374|I
P|Osha Atika Novia Dosmon|11102|0108591297|I
P|Patricia Lucky Mimora Silaban|11106|0113190640|K
P|Pinta Uli Sinaga|11108|0104159875|K
L|Rafif Shidqi Yasman|11123|0107726156|I
P|Raisya Liyana Syasya|11126|0115114879|I
P|Rania Amirah Murwanto|11132|3117442890|I
L|Reno Nevada Desperado Pangaribuan|11143|0116640121|K
P|Syafina Azzahra|11189|0105309307|I
P|Trixie Adora Taruli Manik|11209|0114566078|K`,
"X HL 4": `P|Aisyla Anggita P. Sidabutar|10784|0103922922|K
P|Aleesya Dania Zahra|10788|0108764079|I
L|Alifardan Al Thariq|10795|3116883293|I
L|Amar Ampo|10803|0119385945|I
P|Amira Liyana Tri Deslita|10806|0107990385|I
P|Anavist Zikra Hafizah|10809|0111407293|I
P|Angeline Corri Manik|10813|0101313905|K
P|Anisa Alistantia|10818|0104849583|I
P|Apriani Siahaan|10825|0104792001|K
L|Arvin Alworth Jeta Simanjuntak|10835|0112283770|K
P|Avrilia Aqila Nigata|10849|0119180021|I
P|Azzahra Putri Ramadhina|10856|0105574806|I
P|Destyla Chairunisa Putri|10884|0106913511|I
P|Dianiera Eight Butarbutar|10889|0107319049|K
P|Enjel Natasya Sitorus|10907|0101024320|K
P|Fannesa Ariani Ginting|10925|0112869753|K
L|Fikri Rahmanshah Riadi|10939|0105239540|I
L|Fomalhaut Muhammad Alderi|10944|0111343635|I
P|Gisela Sindy|10952|0107646188|I
L|Habib Jauhari Al Muradi|10958|0103612560|I
L|Haris Alvian Simarmata|10963|0118514798|K
P|Hygeae Ryuki Sambera De Verlos|10969|0116573197|I
P|Intan Tri Wahyuni|10978|0111115279|I
L|Khalid Abdullah|11006|0118972734|I
P|Khalisya Aorora Putri Azvin|11008|0108216939|I
P|Khansa Tiana Putri|11009|0103280470|I
P|Kirana Aliya Ramadhani|11012|0113843778|I
L|Muayyad Shafir Syahiran|11039|0107033360|I
L|Muhammad Urwah Al Wusqo|11059|3126262788|I
L|Muhammad Zerico Abidin Al Sudaish|11244||I
L|Muhammad Zidane Arrafianto|11061|0109228411|I
P|Nassyfah Rahmafitri|11073|0114793670|I
P|Othari Rasiyah Ramadhani|11103|0106129476|I
P|Purnama Sari|11112|0106518704|I
P|Putri Prudence|11117|0108718419|I
L|Rakha Alifian Guntara|11129|0112832770|I
P|Rizka Amelia Rholiantini|11156|0111411407|I
P|Yohana Abel Gracia Manalu|11217|0108363247|K
L|Yunan Hawwari Jatmiko|11220|0109879114|I
P|Zahwa Fakhrun Nisa|11222|0115745159|I`,
"X HL 5": `P|Alya Naila Zhafirah|10801|0118314571|I
P|Amasya Wilstar|10805|0104738077|I
L|Andre Gunawan|10811|0112027759|I
P|Annisa Ramadhani|10822|0109683804|I
P|Arini Hidayati|10831|0118636430|I
L|Boy Roito Harianto Hutauruk|10861|0105600100|K
P|Cahaya Cristine Situmorang|10864|0101748597|K
L|Devin No Haerlianto|10885|3109085305|I
P|Dina Sasmita Ulthahara|10893|0103455498|I
L|Ekky Muhammad Fitrah Sudrajat|10902|0119065276|I
L|Fadhil Fadhali|10914|0104771577|I
L|Fatih Abiy Abqary|10932|0119319596|I
P|Frecilla Kanaya Andi Putri|10946|0115059820|I
L|Gibran Assad Tahir|10949|0107624529|I
P|Hanafa Situmorang|10961|0101127613|K
P|Herly Sintara Simbolon|10966|0111735538|K
P|Indah Septriani|10977|0109003953|I
L|Julian Bani Fahrezi|10987|0102018160|I
L|Kalih Ageng Raharjo|10992|0108022510|I
P|Karisa Indria Amelia|10995|0101512665|I
P|Letisya Anugrah Hutagalung|11021|0112628633|K
P|Maria Magdalena Lumban Gaol|11029|0118463436|K
P|Muhaisyah Rustyanty Rengen|11040|0103074961|I
L|Muhamad Fakhri|11041|0115040259|I
L|Muhammad Iqbal|11047|0127448169|I
P|Naura Alifahtunisa Rahmawan|11076|0097548209|I
P|Nayla Putri Amrullah|11078|0104443215|I
P|Novelita Barus|11092|0108939296|K
P|Novitri Tiara Zahira|11095|0107991451|I
P|Nurul Izzah|11099|0113067414|I
L|Rafka Aryan Putra|11124|0117600995|I
L|Raynalnd Sinambela|11137|0102306579|K
L|Rendy Pratama Sianturi|11142|0106178700|K
P|Revina Putri Sulistia|11145|0119141919|I
P|Rifka Agustina Hutasoit|11148|0106475397|K
P|Sabira Zurafa Rosadi|11160|0116922038|I
P|Salsa Nurul Asiqin.E|11165|0109672913|I
P|Siti Rasyidah Gunanri|11185|0116552712|I
P|Teresya Ananta Loure Hutagaol|11201|0102027233|K
P|Zira Al Shabiro|11228|0103940037|I`,
"X HL 6": `L|Adi Arga Sitorus|10768|0116553390|K
L|Adya Habibi Azmy|10773|0102437990|I
P|Aisyafa Syahrani Hutomo|10781|0116625693|I
L|Anugrah Aditra Fahmi|10823|0101645125|I
L|Athar Ghifari|10841|0106386858|I
P|Audrey Fransly Putri|10844|0119963003|I
P|Az Zahra Mulyandari|10852|0106710527|I
P|Bintang Mutiara Sihombing|10860|0098891691|C
P|Claresya Tambunan|10877|0112674665|K
L|Darrell Peter Franarga Silitonga|10881|0116779859|K
P|Dewi Adinda Syahnuriliyyah|10886|0101482798|I
P|Dina Ramadani|10892|0108829770|I
P|Elviana Elva Cahyani|10904|0102726583|I
P|Farras Nailah Arkana|10930|3117860937|I
P|Fhanyta Latifa|10937|0111203434|I
L|Gilang Fauzi Hafizh|10951|0109066879|I
P|Imayana Maria Sinaga|10972|0106970963|K
P|Keisya Farah Dilla|10998|0109306494|I
P|Khairun Nisa|11005|0101631539|I
P|Klarrisa Felycia Joice|11013|0118584919|I
P|Latifa Chintya Arum|11018|0112852778|I
P|Ledi Marito Simanjuntak|11019|0101464812|K
P|Lidiya|11022|0106032394|I
P|Lovely Angelina J Samosir|11024|0108727023|C
L|Michael Lumbanbatu|11036|0126223918|C
L|Muzafar Al Azzam|11062|0105097647|I
P|Nabiilah Syahfitri|11063|0107594806|I
P|Najwa Seizha|11070|0108233049|I
P|Naysiah Putri|11080|0102613605|I
P|Putri Kamilatus Sa'adah|11114|0105706526|I
P|Rawati Uli Lumban Gaol|11134|0108851281|C
L|Rendison Gadman Siahaan|11141|0104668204|K
L|Rio Ferdiansyah Dalimunthe|11152|0112688969|I
P|Rischa Ayu Kesuma|11153|0103674122|I
P|Sandria Naomi Ldydia Pasaribu|11168|0119147338|K
P|Talita Wardani|11197|0107484800|I
L|Tengku Abu Hisamudin Syah|11200|3108969519|I
P|Tyasigka Pratiwi|11210|0105846225|I
L|Zainul Hilal Muzakki|11223|0104716326|I
P|Zeyra Nur Azzahra|11227|0113846690|I`,
"X HL 7": `P|Adelia Mirza Atmariani|10764|0106950367|I
P|Aishah Qloudy Adisa|10780|0116461377|I
P|Alfiana Lutfi Hanifah|10790|3113740636|I
P|Aulia Dewi|10846|0109409070|I
P|Cellica Amirasansari|10866|0115805042|I
P|Delvia Agusti Rizwana|10883|0105164064|I
P|Dewi Kartika Chandra|10887|0106788394|I
L|Edwin Ferro Saputra|10901|0109228035|I
L|Evan Alghifari Ramadhan|10911|0114887222|I
L|Faiz Syathir Anwar|10921|0113023519|I
P|Fakhira Aulia Octa|10922|0101454934|I
P|Fannisa Luisa Khadijah|10926|0113686701|I
P|Hana Suzette Gultom|10960|0116561335|K
P|Haura Hafizhah Wihandono|10965|0115629016|I
P|Indah Kasih Aulia Batubara|10973|0107922960|K
L|Jafian Nafal Fadilah|10981|0101838379|I
P|Kania Atia Rasti|10993|0107348505|I
P|Karen Helena Calista Nazara|10994|0117540412|K
P|Kayla Amanda Shafitri|10996|0109315925|I
P|Khairissa Septiana|11003|0103637959|I
P|Metha Rahmah Dita|11034|0112338867|I
L|Muhammad Fakhri Ramadhan|11045|0117390161|I
L|Muhammad Royyan|11055|0109172516|I
L|Muhammad Syafi Anugrah|11058|0114836925|I
L|Nafiz Yasin Afandi|11068|0118941648|I
P|Nazwa Azwira Syafitri|11083|0105308490|I
P|Nelofer Pazira Darwis|11084|0112466821|I
P|Nisa Tri Ananda Hasibuan|11089|3118578726|I
P|Octavia Andini|11100|0093772906|I
P|Putri Nur Aini|11116|0102318240|I
L|Rafhael Arjuna Mahendra|11122|0106187687|I
L|Revand Velys Sanders Balukh|11144|0116842419|K
L|Rezvan Hendrawan|11147|0103866705|I
L|Samuel Jeckson Butar Butar|11167|0102183449|K
P|Selomita Yulisa Manalu|11176|0108617849|K
L|Shali Salasha Putra|11179|0111810532|I
P|Siva Stefani Samosir|11186|0119389689|K
P|Syakirah Reflia Nabila|11193|0101165488|I
P|Zevany Tampubolon|11226|0118997410|K
L|Zireh Nazaret Simanullang|11229|0119333348|K`,
"X HL 8": `P|Airen Renata Simanjuntak|10779|0106017536|K
L|Alfarizzi Nurfathoni|10789|0118307608|I
P|Alifa Pramadita|10794|0103925216|I
P|Alya Khusayn Azzahra|10800|3165775945|I
P|Amira Noraini Khoirunnisya|10808|0119701041|I
P|Anindah Gadiza|10816|0102684168|I
P|Apriana Siahaan|10824|0104330915|K
P|Asa Ramadhani|10836|0106348658|I
P|Aulia Rismah Nasution|10847|0116398003|I
L|Axel Fortino Sihotang|10850|0111550170|K
P|Bunga Destika Harahap|10862|0092953312|I
P|Chelsy Margareth Banjarnahor|10868|0111731218|K
L|Davian Ockto Widhy Lestari|10882|0113130735|I
P|Echa Aulida Harahap|10900|0108104622|I
P|Elisabeth Manullang|10903|0115468233|K
P|Esmeralda Anjelita Marpaung|10909|0117912632|K
L|Fabian Rizki Afrelly|10913|0111778309|I
P|Farida Ades Davilla|10929|0103670530|I
L|Fitrah Iskandar|10942|0102252980|I
P|Gabriella Annabel Napitupulu|10947|0113155722|K
L|Justin Adriano Sianturi|10988|0109368784|K
L|Kaffel Caniza Winarno|10990|0106158868|I
L|Kenzie Khaizan Al Qaasimy|10999|0101339156|I
L|Lanang Ahwaz Sastra|11016|0119642335|I
P|Lasri Pane|11017|0117174219|K
P|Leticia|11020|0107087802|I
L|Muhammad Rafqy Effendy|11051|0112741523|I
L|Muhammad Salman Al Rasyid|11057|0105524450|I
P|Nayra Cahya Putri|11079|0112969127|I
P|Nirwana Sari|11087|0101434225|K
P|Novita Ardianti|11093|0102189759|I
L|Rafli Andadinata|11125|0109273986|I
L|Ray Nanda Togatorop|11135|0104597213|K
P|Regina Nursyafitri Budiarto|11140|3106591008|I
P|Safira|11164|0107362245|I
P|Selfi Juliyana|11175|3104761690|I
P|Syifa Irawani|11196|0115665863|I
P|Thahara Tadzkira|11202|0112900201|I
P|Tifanny Aulia Elfitri|11205|0103883329|I
L|Vito Panji Justitia|11212|0109072491|I`,
"X HL 9": `L|Alief Raysha Riva|10793|0113502182|I
P|Anggi Meysha Putri|10815|0108076103|I
P|Annisa Faiqah|10821|0116915475|I
P|Arini Luciyana|10832|0101071437|I
P|Arkalya Kinar Kasih|10833|0117106194|I
P|Asyfa Ramadayu|10839|3113934252|I
P|Atiqah Haura Alini|10843|0117801119|I
P|Azra Alzillah Anugerah|10854|0101438485|I
L|Baihaqi Alhafizh|10857|0105415153|I
L|Daniel Nopriyanto Siallagan|10880|0109638493|K
L|Dzakwaan Hizam Lubis|10898|0113637450|I
L|Exsaudi Arion Siahaan|10912|0108148270|K
P|Faiqa Zahra Atma|10920|0116938891|I
L|Farhan Fermanto|10928|0105111684|I
P|Fitri Rahma Dani|10943|0108569669|I
P|Gracia Stevani Chen|10955|0109952370|I
P|Grety Aprilia Simamora|10956|0111007102|K
P|Harumi Ayane|10964|0106357365|I
P|Humaira Almira Abrar|10967|0108416186|I
L|Kevin Aqlan Faiz Aditama|11000|0105637006|I
P|Khaira Adam Kusuma|11002|0112022546|I
P|Lailatul Nazwa Khairunnisa|11015|0109779863|I
P|Mawar Amelia Sihombing|11031|0106943909|K
P|Mezzaluna Gloria Mandey|11035|0113504467|K
P|Nur Bayti Hayatun|11096|0103003679|I
L|Prabaswara Brilliantino Permana|11109|0118618934|I
P|Priskila Putri Valentin|11111|0111461641|K
L|Rayhan Cheza Andrean|11136|0107862728|I
P|Rinalty Dinia Love|11151|0105870523|I
L|Rizky Aditama Surendes|11157|3108555566|I
L|Rovences Yosavat Situmeang|11158|0104368509|K
L|Saddam Akhori Kurniadi Yusuf|11162|0103790985|I
L|Sayyid Fadhil Arrahman|11171|0108130229|I
P|Sekar Kayyasah Ufairah|11174|0109717207|I
P|Setia Fourtuna Simatupang|11177|0113342843|K
P|Sheyla Artha Falila|11182|0162797179|I
P|Tanysha Anindya Ramadhani Gunawan|11198|0104606800|I
P|Yesika Carolin Siahaan|11215|0113965918|K
L|Yosia Gaddiel Sitohang|11219|0104134633|K
P|Zaskia Mellyca|11225|0108016517|I`,
"X HL 10": `P|Adelina Putri Salsabila|10766|0109526265|I
P|Adventnia Novita Kristiani Panjaitan|10772|0109393103|K
P|Aira Adha|10778|0092851393|I
P|Aisyah Ramadhani|10783|0104280158|I
P|Al Alifia|10787|0105806612|I
L|Andhika Afriansyah|10810|0118225450|I
P|Anisa Rahmadani|10819|0111201093|I
P|Aprilia Diaphenia Ri Sihombing|10826|0104994685|K
P|Ardinda Putriana|10829|0114912925|I
L|Arief Saman Wijaksono|10830|0104119207|I
P|Asyifa Sahra Soleha|10840|0109764662|I
P|Azzahra Ahsa|10855|0107972263|I
P|Clara Adelina Agustin Purba|10876|0108658361|C
L|Daffa Putranya Fardian|10879|0117345840|I
P|Fahema Afsar Ara|10918|0116771091|I
P|Fakhirah Shakila|10923|0118973341|I
L|Fauzan Almer Aulia Muhludin|10933|0108423488|I
P|Felicia Putri Arnelia Tampubolon|10935|3107976027|K
P|Feva Meisa|10936|0111585070|K
L|Firas Adya Fisabil|10940|0116272581|I
P|Grace Withy Prayer Siahaan|10954|0114988584|K
L|Javid Fasya|10982|0109304449|I
L|Messi Maulana|11032|0101484444|I
P|Mesya|11033|0106909412|I
L|Muhammad Rayhan Fahri|11052|0109541747|I
L|Muhammad Rizki Aulia Asyhif Wijaya|11053|0102205624|I
-|Muhammad Zidane Saputra|11247||
P|Nancy Octavia Abigail|11071|0102229076|K
L|Pardomuan Elkana Sinabang|11104|0117984628|K
P|Putri Kumairah|11115|0104239071|I
P|Qaisara Ghaisani Heryadhi|11118|0119528853|I
P|Qirana Adevia Putri|11119|0109313583|I
P|Quensha Aldila Frischa|11120|0104788298|I
L|Raja Khairil Azizi Benzema|11243||
P|Rajwa Asyila|11128|0113371953|I
P|Shindy Aura Harahap|11183|0102992927|I
L|Syauqi Taufiq Qurrahman|11194|0114502260|I
P|Syeikha Salwa Humaira|11195|0106678005|I
L|Togi Pangihutan Hutagaol|11207|0115206822|K
P|Yeskia Tesalonika Simanjuntak|11216|0107379355|K`,
"X HL 11": `P|Adel Rafifah Indriyani|10763|0118914852|I
L|Adrian Ibrahim Farras|10771|0103731946|I
P|Afifah Sinuraya|10775|0104240718|I
L|Ahsan Rizqy Ramadhan|10777|0102467040|I
L|Ali Tondi|10791|0101669306|I
P|Almira Putri Aleya|10796|0107526328|I
P|Angellina Susilo Putri|10814|0109432285|I
P|Anis Lulu Fadilah|10817|0103809352|I
P|Batrisyia Syakira|10858|0105611525|I
L|Daffa Alfarizi|10878|0101744700|I
P|Dina Purnama Harahap|10891|0117509745|I
P|Faeyza Armainur Raisha|10917|0115104686|I
L|Fahri Mardiyansyah Putra|10919|0104393674|I
P|Feby Yanti Kasafani|10934|3102548674|I
L|Geraldo Carlos Pasaribu|10948|0119695137|K
P|Grace Mika Tobing|10953|0105266506|K
P|Hana Ayu Ramadani|10959|0111231436|I
P|Hana Humaira|11242||
L|Jeriko Manuel Purba|10983|0108167259|K
P|Lady Gracela Tambunan|11014|0112066294|K
P|Louisa Adilha Fransisca|11023|0107809766|I
P|Monica Feby Natasya|11037|3115355433|I
L|Muhammad Rizki Herdiansyah|11054|0102722685|I
P|Nabila Azkiatul Karima|11064|0107367959|I
P|Nadhifa Az Zahra|11067|0106198115|I
P|Nasywa Maganda Ikadiona|11074|0103279810|I
L|Nazree Khadafi|11082|0103951156|I
P|Nesy Maria Tampubolon|11085|0113462939|K
P|Nomi Febrianti|11090|0113392948|I
P|Priscilla Renata Simanjuntak|11110|0115186269|K
L|Rakha Oktara Aldeba|11130|0105300922|I
P|Rani Juliana Sigalingging|11131|0106647094|K
P|Rista Natalia Simanungkalit|11155|3100009226|K
P|Samara Dwi Ananda Sembiring|11166|0104577028|I
P|Satria Nurliza Sihotang|11170|0092083241|K
P|Shintya Rebecca Siregar|11245||
P|Vierra Puteri Velencia|11211|0113570688|I
P|Yoselin Ayu Ramadhani|11218|0112235294|I
L|Zaki Fadlur Rahman. M|11224|0101333908|I`,
"X HL 12": `P|Adelin Fyka Yuniar|10765|0111835059|I
P|Adilla Quinnsha Zulatifah|10769|0118744354|I
L|Afif Mubarak Arnes|10774|0112827492|I
L|Akbar Mulki Renziro Drafi|10786|0102461216|I
P|Alya Assyura|10799|0101888536|I
P|Amara Izzati Shafiqa|10804|0115784924|I
P|Annida Chabiera Rahma Hartono|10820|0115829392|I
P|Assyfa Naila Putri|11246||
L|Choky Panjaitan|10871|0111345850|K
P|Dytha Anggelina Saragih|10896|0103395016|I
L|Dzaki Khairullah|10897|0101693554|I
P|Ester Stefanny Sianipar|10910|0119178718|K
L|Fakhri Naufal Lesa Laode|10924|0115437767|I
P|Fara Zulfiyanti|10927|0101318557|I
P|Hanna Zatasha Evlyn Situmeang|10962|0103286206|K
P|Indah Ramadani|10976|0101509795|I
L|Irfan Bintang|10979|0106826029|I
L|Justine Rafael|10989|0101014586|K
P|Maria Anabella Siringoringo|11028|0103742672|K
L|Moreno Alpiero Panhar|11038|0118590861|I
L|Muhammad Ar Razi Ramadhan|11042|0101995018|I
L|Muhammad Haidar Fajrullah|11046|0106410577|I
L|Muhammad Khalaf Arif Maulana Zelmi|11049|0111736006|I
L|Natanael Kaya Lumbantobing|11075|0119586337|K
P|Novita Napitupulu|11094|0104933915|K
P|Nur Fitri|11097|0105129331|I
P|Putri Ayu Novita Sinaga|11113|0106797853|K
P|Raesha Dwi Ariendra|11121|0108681720|I
P|Ratu Claudia Lafatunnisa|11133|0108012826|I
L|Raytama Immanuel Silaban|11138|0115386302|K
P|Safa Angelita|11163|0108052656|I
P|Sarah Marsa Nathania|11169|0115251707|K
L|Sayyid Ibrahim Sartely|11172|0109800673|I
P|Shakynna Aura Febria|11178|0104963740|I
P|Steffi Tay Yanling|11187|0112812669|I
P|Syakila Putri Dianda|11192|0106404702|I
P|Winda Verlita Tambunan|11213|0109847986|K
P|Zahirah Aisyah Putri Pratamura|11237|0107232147|I
P|Zizi Aprilia Mahendra|11231|3113697762|I`,
"XI HJ 1": `P|Adiibah Aulia Zahra|10221|3095776490|I
L|Ahsani Alwan|10226|3101882498|I
P|Alifah Citra Puri Syafila|10241|0103926082|I
P|Anasthasya Mewardhyra Lase|10251|0103206067|I
L|Andreas Sangap Bastanta|10745|0102190370|K
L|Bachtiar Ibnu Sinaga|10284|0095017648|I
L|Boy Silitonga|10750|0097795422|C
P|Chelsea Yohana Silaban|10295|0103709560|K
P|Cut Famelin Rahmadani|10311|0097061985|I
P|Dame Delfina Simbolon|10316|0106036977|K
L|Danendra Ramadhan|10317|0093816960|I
P|Diandra Vira Aprilia|10335|0107306011|I
P|Dianti Araisya Putri|10336|0094211756|I
P|Elmira Yazmine Miharto|10346|0097291975|I
L|Fachry Athayya Ramadhan|10356|0091581964|I
L|Hafiq Alfaizi|10400|0091991753|I
P|Hanifah Al Humairah|10403|0108428810|I
P|Haqqu Mazaya Sribasuki|10406|0101062987|I
P|Hizsyaura Qaryra|10409|0104207761|I
L|Johan Alfred Nababan|10434|0095742413|K
P|Keilha Afifah Mufthi Fhatarani|10454|0102345225|I
P|Khafifatul Aulia Nikmath|10463|0093483766|I
P|Khanza Lautdhea Sukrisno|10467|0097151479|I
L|M. Daffa Putra Mulia|10490|0092487009|I
L|Martinus Primo Gunawan|10496|0106761674|C
L|Muhamad Naufalino|10507|0094962251|I
L|Muhammad Ayatullah Bimantara|10514|3095204046|I
L|Muhammad Harras Alfarisi|10526|0102950196|I
L|Muhammad Tamalaki Syamsil Bahya|10537|0106561474|I
P|Naurah Nurin Imanina Daulay|10563|0105564807|I
P|Nikita Agatha Sitompul|10575|0104342005|K
L|Niko Saputra|10576|0086654811|I
P|Queenby Tivanna Handoyo|10603|0092940445|I
P|Rahma Dini|10620|0092237379|I
P|Rasikah Suma Puspita|10627|0097944658|I
L|Rifaldi Walver Manihuruk|10640|0106389285|I
L|Ruben Darmanto Simanjuntak|10651|0092079002|C
L|Saul Hudson Siahaan|10661|0091073652|K
P|Shafarina Awaliyah|10664|0092278700|I
P|Shifa Dwi Annisyah|10667|0096817561|I
P|Yanneza Kartini Rangkuti|10707|0102969286|I
L|Yodha Danadyaksa|10709|0099789933|I
L|Ziad Muhammad Abdillah|10727|0109166084|I`,
"XI HJ 2": `L|Abdullah Shofy Mangkubumi|10214|0095627333|I
P|Alya Maharany|10247|0109552946|I
P|Aura Rahma Ramadhani|10273|3104360945|I
P|Aurelia Ivana Anindya|10277|0106151080|I
P|Chelsi Widelia|10296|0102838096|I
P|Daula Zaskia Santoso|10320|0091227422|I
L|Dava Alamsyah|10321|0103363737|I
P|Dayana Mayang Sari|10322|0103727816|I
P|Desti Rahma Auliya|10325|0098882745|I
L|Desviano Ronaldo Al Hasani|10326|0094357015|I
P|Devinka Arabella Sidabutar|10329|0101969882|K
L|Dilkana Bangun|10339|0097265409|I
P|Filzah Aqila Hilman|10380|3104198915|I
L|Gerd Sion Marthin Tampubolon|10390|3105882654|K
L|Giveson Ferdinan Simorangkir|10396|0099134308|K
L|Ilham|10414|0092731391|I
L|Jabar Ananda Sutrisno|10422|0102050472|I
P|Keisha Farras Azhar|10455|0095466287|I
L|Kevin Kesuma|10459|0106224537|I
L|Muhammad Fauzi Rafie|10523|0103470511|I
L|Muhammad Kamil Omair|10528|0101357029|I
L|Muhammad Nur Ahadyah|10531|0106979986|I
L|Muhammad Rizky Pratama|11248||
L|Muhammad Teguh Pratama|10538|0092723547|I
P|Nadira Fellah|10548|0096619093|I
L|Naufal Zuhdi|10561|0101447870|I
P|Nayla Feby Maulida|10564|0108905362|I
P|Nazwa Mawar Simatupang|10569|0087761961|K
P|Ogivia Ixchel Manurung|10586|0166596270|K
L|Paulus Ginting|10590|0106140885|K
L|Pranata Hamonangan Situmorang|10592|0096940015|K
P|Putri Azura Razy Qoiry|10597|0098962390|I
P|Qhaira Zalfa Naysilatabri|10599|0097993094|I
P|Qhiran Frista Birrul Walidain|10600|0108693523|I
L|Rafi Akbar Maulana|10616|0097925545|I
P|Rahma Maulidya Hasibuan|10621|0109560757|I
L|Randy Reyndra|10626|0109098080|I
P|Syalimar Qania Prihatini|10680|0101442577|I
P|Tri Veligia Lovenia Bakara|10691|0093499968|K
P|Vivi Al Arif|10701|0092408544|I
P|Welda Yohanna Pasaribu|10703|0096087323|K
P|Wichita Salma Nuaina Ibraya|10704|0107639657|I
P|Widia Safitri|10705|0099593289|I
L|Yossy Fahri Anggara|10713|0091532036|I`,
"XI HJ 3": `P|Alicia Illumina Larasati|10239|0106609786|I
P|Alifi Kayyisa Rifa|10242|0103218068|I
P|Ameera Ghaisani Zafeera Lubis|10249|0104976298|I
P|Arif Saputri Simamora|10262|0096652807|K
P|Arum Janeeta Putri Akeka|10267|0099267515|I
L|Christian Michael Pratama Gultom|10300|0105921008|C
P|Deazy Aurin|10323|0108710087|I
P|Desmitha Putri Arianti|10324|0083843008|I
P|Dinda Ayu Dhiresworo|11233|0107443008|I
L|Dio Panca Prima|10343|0093641519|K
L|Hafidz Lutfi Putra|10399|0109867700|I
P|Hanifah Rianawati Dasopang|10405|0092465495|I
P|Humaira Rahadatul Aisy|10412|0093914985|I
P|Intan Nabilla|10419|0093832225|I
P|Jasmine Apriliana Br Sembiring|10425|0094846093|I
P|Joyce Aprilia Hutapea|10439|0108958643|K
P|Kenzie Keyzilla Martha|10456|0104696243|I
P|Kristiany Felicia F Silalahi|10473|0106669254|K
P|Latifah|10475|0095664146|I
P|Laura Olivia Simanjuntak|10478|0096476807|K
L|M.Yaser Alvaraby|11239|3097107768|I
L|Mario Christian Situmeang|10495|0096178909|K
L|Muhammad Abyan Syauki Athallah|10510|0095395467|I
L|Muhammad Fatih Sajid|10522|0098032516|I
L|Muhammad Iza|10527|0119422587|I
L|Muhammad Khairul Azzam|10530|0108744200|I
P|Nabila Thayyibatunnisa|10544|0108886365|I
P|Nayla Oktaviani|10566|0095242999|I
P|Nazwa Melysya Putri|10570|0098210242|I
P|Princessa Urantia Dallymartha|10593|0101038581|I
P|Rafkania Agnashira Sugiharto|10618|0109077429|I
P|Rosa Tri Junianti|10649|0093401212|I
P|Shania Marwa|10665|0104370854|I
P|Siti Aisyah|10754|3101888865|I
P|Sri Hasna Sinta Marito Panjaitan|10670|0102576670|K
P|Syafira Anaya Putri Junaidi|10678|3106686135|I
P|Syakiilah Ratu Yuana|10679|0106807306|I
P|Tintania Zilvia Putri|10689|0106516987|I
P|Umairah|10692|0097426613|I
P|Viona Felicia Sibuea|10699|0102060290|K
P|Waode Aisyah Meilytania|10702|0099788052|I
L|Yusuf Hizkia Tandi|10715|0092164538|K
P|Zifa Lakeisha Nst|10728|0095574854|I`,
"XI HJ 4": `L|Adelio Luthfie Rafif|10218|0102147900|I
L|Agthama Putra Guchairi|10223|0101408335|I
P|Aisa Selvira|10231|3106812886|B
P|Ameera Thalita Sakhi|10250|0108205717|I
P|Azzahra Nadhifah Fikriyah|10282|0095208985|I
P|Bernike Gurusinga|10288|0107770191|K
P|Clara Radiah Citra|10751|0097048038|I
P|Clarissa Carenina Bangun|10305|0101343567|K
P|Cut Nazla Fulizar|10312|0104453767|I
P|Cyntia Nuvus Fitri|10313|0098268963|I
L|Danish Difiranda Simarmata|11240|0107682577|I
P|Dara Sry Wahyuni|10319|0095363440|I
P|Dhiya Mazaya Putri Syahril|10333|0107307175|I
P|Diamenti Eva Simangunsong|10337|0092772902|K
L|Fardhan Berkah Afrelly|10363|0091028104|I
P|Fathia Amanina Damyathie|10368|0109861027|I
P|Fransisca Clazio Hutabarat|10382|0097617429|K
P|Hanifah Ramadhani Azvis|10404|0101754869|I
P|Intan Putri Salsabila|10420|0109967873|I
P|Jesica Arumi Alicia|10428|0092765205|I
P|Julia Christian Sibuea|10442|0091943484|K
P|Julyane Indri|10444|0091968872|I
P|Karina Melati Kanza|10448|0096737792|I
L|Keanu Rifai Rizqi|10452|0092456930|I
P|Keiko Maritza Shaputri Yogaswara|10453|0092724378|I
P|Ladies Lovely|10479|0092748358|I
P|Lois Eunice Ilela|10485|3106963619|K
P|Makanatul Ngilmah|10492|0104524266|I
P|Meisy Delya Iskandar|10500|0101156467|I
P|Michelle Gretha Welly Banjarnahor|10502|0106653918|K
L|Muhammad Farid Amardiyab|10521|0104217195|I
L|Muhammad Rizq|10534|0091910194|I
L|Muhammad Rusydan Abdul Qohar|10535|3101557889|I
P|Nayla Novriyanti|10565|0095341672|I
P|Nizla Qir'ana|10578|0093057865|I
P|Octha Ardina .M|10585|0097298964|K
L|Rafael Ibrahim Zain|10613|0109131367|I
P|Renth Refifanea Kampong Gaghansa|10634|0102598440|K
P|Roro Putri Carissa Pramwesty|10648|0101346793|I
P|Saila Syakirah|10656|0101990857|I
P|Syawalina Trisna Fitriani|10682|0094434329|I
P|Zaskia Hurun'iin|10720|0091719181|I
P|Zhaskia Alva Rhamadani|10725|0097364460|I
P|Zhivana Letisya|10726|0092629566|I`,
"XI HJ 5": `P|Abigail Elsyhana Tarigan|10216|0095502773|K
P|Aira Putri Maharani|10230|0097215310|I
P|Alisha Putri Wibowo|10244|0093895234|I
P|Almira Zahra Ramadhani|10245|0099613384|I
L|Andra Maulana Lubis|10252|0091710152|I
L|Ariqul Isyraf|10265|0095442763|I
L|Aufa Ega Suwito|10271|0103266334|I
P|Azzura Jasmin|10283|0099160738|I
P|Callysta Ariendra Kusuma|10290|0103881652|I
P|Claudia Sinedua Sitompul|10306|0101000647|K
L|Cleonseptian Purwaprayoga|10307|0102169778|I
L|Cristhofer|10310|0091593645|K
L|Daffa Hanania Chesar|10749|0109554119|I
L|Evan Salomo Sinaga|10354|0105304805|K
L|Fajar Tri Oktaviano|10360|0099932430|I
L|Farras Almer Abiyu|10365|0109917894|I
L|Fathan Graha Admaja|10367|0091430133|I
L|Fathir Riskyriadi|10369|0096208878|I
P|Finesya Lumban Raja|10381|0106437919|K
L|Gabriel Kevin Saruksuk|10386|0092679957|K
P|Haura Syifa Amani|10407|0109683832|I
P|Humaira Sandrina Rivach|10413|0094060781|I
L|Josua Togi Parmonangan Sitinjak|10436|0101854761|K
L|Juan Verosi Pardede|10440|0102451004|K
L|Kalistus Abetnego Naibaho|10446|0101565352|C
P|Khanza Raissya Susanto|10468|0102890919|I
P|Lettyzia Fitri|10481|0098104027|I
P|Lindha Toi Tee Leen|10483|0093006167|I
P|Lydia Grace Sintanauli Lumban Tobing|10488|0109996575|K
L|Matthew Dave Butar Butar|10752|0101742760|K
P|Mira Nuraini Hutagalung|10503|3097694389|I
L|Muhammad Eltayeb Adena|10518|0091405368|I
L|Muhammad Farhan|10520|0098313533|I
L|Muhammad Rifqi Fahreza|10533|0098366975|I
L|Mujahid Ferda Firas Al Hakim|10741|0092417295|I
P|Queen Shaffira Permana|10602|0095924628|I
P|Siswei Meei|10668|0097360957|I
P|Siti Nadhira Aliandra|10669|0104252704|I
P|Syafa Anindhita Ariyanto|10677|0104640566|I
L|Teuku Muhammad Azwar Hamzah|10687|0092425723|I
P|Tiara Putri Febriani|10688|0109100339|I
L|Varel Reynaldi Hutabarat|10695|0096848153|K
P|Yola Karen Tambunan|10711|3099395922|K
L|Zaid Ahmar Hakim|10719|0104170029|I`,
"XI HJ 6": `L|Alfajhar Nurvayz|10237|0098409950|I
L|Alif Azlan Mufik|10240|0099964864|I
P|Anindya Regita Cahyani|10256|0097843704|I
L|Ariko Claudio Pardede|10263|0103139274|K
P|Asyifa Gendhis Shafiyah|10269|0103343856|I
P|Azhilah Niken Qhaliyah|10281|0101955095|I
L|Bagas Tulus Anakta Sidauruk|10285|0093399939|C
L|Bayu Rizky Ananda|10286|0105375776|I
P|Cantika Bintang Belyardi|10291|0103839488|I
P|Clara Diva Enjellita|10304|0096791206|I
P|Cleoputri|10308|0095026437|I
L|Daffa Kawindra Prasetiyo|10314|0104966792|I
L|Devin Gilbert Hilardhino|10327|0102881338|K
P|Elsa Carolina Tambunan|10347|0091624552|K
L|Evan Fadhilah Ramadhan|10353|0108596832|I
L|Gerard Nimrod Panjaitan|10389|0109336641|K
P|Gisella Annisa Putri|10393|0104713081|C
P|Gita Ohanna Agatha Siagian|10395|0105992764|K
L|Ilham Ariel Padila|10415|0098114804|I
P|Janeta Quin Amyra|10423|0109376910|I
L|Josep Tanra Janmalo|10435|0102792099|K
L|Judika Bagas Immanuel Sinaga|10441|0101106061|K
L|Kenzorio Alif Putra Pramodhian|10457|0094332225|I
L|Kevin Henri|10458|0101186775|I
P|Laura Angelica Manik|10476|0107919581|K
P|Liana Khatam|10482|0097496884|I
L|Mahendra Vidi Aditya|10491|0094455753|I
L|Moreno First Ladyano Damanik|10506|0093578176|C
L|Muhammad Gempar Alam|10525|0097517746|I
L|Muhammad Wishzard Rasya Abiwa|10539|0103904327|I
P|Naina Septiana|10552|0094006396|I
P|Natasya Zhiva Maharani|10558|0094981592|I
P|Radisty Audrey Ardhia|10610|0096719779|I
L|Rafi Kevin Rizky|10617|0103252829|I
P|Raissa Luthfia Mukti|10622|0104670240|I
L|Raymond Mahardika|10629|0094222394|I
P|Reanlin Syifatima|10630|0096567859|I
P|Rifkana Khoirun Nisa|10641|0098074282|I
L|Sabri Nugroho|10652|0091260316|I
L|Sugianto Ramadhan|10675|0094627325|I
L|Sulthan Aiman Wicaksono|10676|0096564983|I
P|Viona Calista Hasibuan|10698|0108049801|I
P|Yuly Kezia Tambunan|10714|3098902142|K
P|Zhafirah Zalfa Athirah|10723|0097538399|I`,
"XI HJ 7": `L|Abdullah Halim|10213|0088268777|I
P|Adellia Putri|10217|0106548392|I
P|Ahda Mawaddah|10225|0097738559|I
P|Alya Devina Nur Rizky Andima|10246|2171034212|I
P|Annisa Mazlan|10259|0104547445|I
P|Ariny Medina Assakinah|10264|0103420098|I
P|Aulia Syahrani Sihombing|10272|0094758965|I
P|Belinda Felecia Simorangkir|10287|3105966573|K
P|Cintarin Gafreta Pongty|10303|0091636946|K
P|Dewi Intan Safitri|10330|0095845879|I
P|Evelyn Maria Revalina Napitupulu|10355|0106008843|K
P|Febyana Nur Andieni|10375|0104524574|I
P|Frisila Vania Sipahutar|10384|0094844773|K
P|Frisya Putri Budiman|10385|0102729945|I
P|Gavrila Simamora|10388|0095425280|K
P|Indah Juwita|10416|0098791180|I
L|Jeremy David Eliezer Andias|10427|0104120816|K
P|Jihan Anggraini|10430|0094187980|I
L|Kenzie Esa Excellentdya|11235|0107017839|I
P|Kezia Brigita Sihombing|10461|0096606806|K
P|Khalisa Nashifa|10465|0092215674|I
P|Khansa Jauza Azzahra|10466|0109811587|I
P|Khusnul Khotimah|10472|0094339690|I
L|Lucky Ramadhan Simanjuntak|10486|0095447668|I
P|Luthfiyyah Gustian|10487|0093942922|I
L|Muhammad Akbar Putra Dermawan|10512|0105174116|I
L|Muhammad Dzaky Ramadhan|10517|0081858611|I
L|Muhammad Fahry Lorenzo|10519|0095321905|I
L|Muhammad Haqqi Mubaarok|10731|0091536704|I
L|Muhammad Khairul Arnavat|10529|0108023203|I
L|Muhammad Zulfikar Marli|10541|0102385030|I
P|Mulyarahma Velysha|10542|0092086339|I
P|Nabila Fitria Solehudin|10543|0091801148|I
P|Naurah Farhanah|10562|0099692284|I
P|Ni Putu Olivia Juniariska|10572|0104069110|H
P|Nisrinadhifa Assyifa|10577|0093772056|I
P|Raeesa Riskya Putri Wicaksono|10612|0103501493|I
L|Raffa Aulia Iskandar|10614|0109338065|I
L|Rhelovely Rhevaldy Rhemrev|10637|0093628631|K
P|Ria Efriani|10639|0106326779|I
P|Salsabila Saputri|10657|3093147717|I
P|Tessalonika Cahyani|10686|0092473348|K
P|Ziva Adellia|10729|3105544056|I`,
"XI HJ 8": `L|Adhitya Azka Ararya|10219|0092658414|I
P|Afifah Rahma Deskyana|10222|3094237189|I
P|Aisyah Putri Dinda|10233|0093701115|I
P|Amalia Adysha Putri|10248|0108254320|I
P|Angel Lina Tarihoran|10254|0092354254|K
P|Apriliani Nur Azizah|10261|0091962224|I
P|Aura Ramadhani Hagustin|10274|0097919190|I
L|Axsel Anugerah Simanungkalit|10279|0109443077|K
P|Cantika Zaskia Putri|10293|0096825811|I
L|Chris Agung Pratama Sitompul|10298|0099475627|I
P|Dian Renata Sempurna Sihombing|10334|0108075658|K
P|Dinda Kanya Dewi|10342|0096343231|I
P|Evalina Kasih Nainggolan|10352|0093228850|K
P|Farah Nabila Nursania|10362|0092362845|I
L|Fazar Ramadhan|10374|0095411220|I
P|Ferdia Novriesi|10378|3092751489|I
P|Giselle Santa Jhosephine Gultom|10394|0099062636|K
L|Holmes Maruli Ara Simamora|10410|0092368365|K
P|Jeann Lovely Pangaribuan|10426|0109929667|K
P|Kasih Syalomita Siringoringo|10450|0099394167|K
P|Laura Belisa Nasution|10477|0094028435|I
P|Liza Rediska Marbun|10484|0099786514|K
L|Mochammad Mirzha Putra Setiawan|10504|0099869113|I
L|Muhammad Aichal Aqiqi|10511|0103333274|I
L|Muhammad Zaidhan Khavia|10540|0101421931|I
P|Najwa Aviva Childasari|10553|0099259362|I
P|Nikita Admy Br Sitompul|10574|0092421309|I
P|Nova Mariza|10579|3099924364|I
L|Perwira Simbolon|10591|0106283885|C
P|Prytha Tria Corin Aritonang|10595|0096884759|K
L|Putra Rahmad Danel|10596|0085733606|I
L|Radika Luvian|10609|0091086194|I
L|Raka Ahmad Brilliano|10624|3108822817|I
L|Regan Athaillah Akbar|10631|0093383087|I
P|Revalina Cantika Pratiwi|10636|0091702248|I
L|Riskyano Mulyawan|10643|0096067257|I
P|Rismaulina Simanungkalit|10644|0096029166|K
P|Selvi Stephanie Sitinjak|10662|0105251072|K
P|Sri Lestari|10671|3095591210|I
L|Steve Hanson Simanjuntak|10673|0108638802|K
L|Wise Putra Nainggolan|10706|0098278508|K
P|Zahra Juniarta Nainggolan|10716|3092443708|I
P|Zefanya Christina Aritonang|10721|0108547948|I
P|Zhalikha Niffira|10724|0105381056|K`,
"XI HJ 9": `P|Anggi Aryani Saragih|10255|3091893239|K
L|Arlan Saor Marsudi Pardede|10266|0096922548|K
P|Avril Falen Pratiwy|10278|0102287341|I
P|Chrisna Adelia Rajagukguk|10299|0093049974|C
P|Christin Rosalina Panjaitan|10302|0097458752|K
P|Dhea Kaamiliyya|10332|0093738986|I
L|Dikie Fajar Rizkita|10338|0105289299|I
L|Doni Handa Saputra|10344|0095031816|I
P|Elsaday Aura Aulia Lubis|10348|0098294177|K
P|Endyta Rizkyana Ramadhani|10351|0092570540|I
L|Faizul Akbar|10359|0104154895|I
L|Farrel Radithya Firman|10366|0106022703|I
P|Fenny Angelita Manalu|10377|0105145199|K
P|Gabriela Maria Feodora De Hewot|10387|0101006877|C
P|Gesty Blessarmi Hutagalung|10391|0094533675|I
P|Gladis Nur Adinda Oktavia|10397|0098110225|I
P|Hafsah Billah|10401|0108737547|I
P|Hong Shu Ching|10411|0092994934|I
L|Irsyad Arya Maulana|10421|0095829216|I
L|Khelvin Saputra Simanjuntak|10471|0094634475|K
P|Maylaf Afra Nazrana|10499|0103972532|I
L|Michael Valentino Sitopu|10501|3107800441|K
L|Muhammad Dzaky Al-Farizi|10516|3105185147|I
L|Muhammad Iqbal Al-Masykuri|10509|0105369868|I
P|Nailah Afifah Najwa|10551|0097666682|I
L|Newman James Tampubolon|10571|0101703017|K
L|Okqueen Goklas Champion Sihombing|10587|0098245575|K
P|Olifia Junia Adrila|10588|3103735966|I
P|Putri Ramayani|10598|0073039150|I
P|Rachma Wati|10608|0085131994|I
L|Raja Ahmad Danil Hadiy|10623|0109673322|I
L|Reiguel Jesrel Samosir|10632|0099489968|K
P|Reva Oktalina|10635|0092189416|I
P|Sabrina Derizkika Aura|10654|0119381666|I
L|Sammuel Sem Yoktan Samosir|10658|3102983606|K
P|Septia Suci Ramadani|10663|0081146209|I
P|Steffie Yuliana Filadelfia Nababan|10672|3107150568|K
P|Syura Kayla|10684|0093718913|I
P|Vanesa Olivia|10693|0097441235|K
P|Viona Fitri Najmi|10700|0102522814|I
L|Yoel Pramana Sitorus|10710|0082267448|K
P|Zahra Tsyakhira Putri|10718|0102420498|I
P|Zivanna Silitonga|10730|0096377240|K`,
"XI HJ 10": `L|Adibat Toat Ariansyah|10220|0099900236|I
P|Aira Putri Aqilahsyifa|10229|0108396130|I
P|Cantika Yulia Amanda|10292|0094816886|I
P|Chintya Fiky Ramadhani|10297|0091895580|I
L|Daffa Rizki Febriansyah|10315|0102345208|I
L|Darius Timotheus Siregar|10747|3107965081|K
P|Dewi Mercyana Turnip|10331|0102829978|K
P|Dinda Intan Purnama|10341|0094374378|I
L|Eksel Alexsander Mambu|10345|0105355100|K
L|Fahry Abdi Syakir|10357|3096956043|I
L|Fardhan Herdiansyah|10364|0094093150|I
P|Faza Azzahra Ramadhani|10373|0094940265|I
L|Fernandus Pasaribu|10379|0096094858|K
P|Frischila Cicilia Asnat Pandie|10383|3107223754|K
L|Gilang Putra Ramadhan|10392|0095666495|I
L|Jesua Riski Sinulingga|10429|0094170370|K
P|Jihan Nazifah Putri|10432|3095136595|I
L|Jimmy Efriano Pangaribuan|10433|0094641268|K
P|Jovanka Keysia Violina S|10437|3101358929|K
L|Joy Newston Tampubolon|10438|0098211195|K
P|Keyla Latisha Dinda Aditiawan|10460|0107588255|I
P|Khayla Almira|10469|0104455066|I
P|Latifa Ramadhani|10474|0104160184|I
P|Maria Fransiska Silaban|10493|0097397348|K
L|Marvel Aditya Utama|10497|0096959420|I
L|Maskha Zildan|10498|0102053881|I
L|Muhammad Darrell Sandya Damanik|10515|3093312841|I
L|Muhammad Rafael|10532|0106116137|I
L|Muhammad Rifki Rafly|10508|0101219482|I
P|Nabilla Tiffany|10733|3099913182|I
P|Nadhira Najwa Syahlan|10545|0103574714|I
P|Nafla Reikanissa|10550|0109184047|I
P|Nayla Wijaya|10567|0096494805|I
P|Nazua Fadilah|10568|0092014617|I
P|Nur Tiffany Shalshabila|10581|0092365668|I
P|Nurainy Rafah Al Gauts|10582|3108372259|I
P|Ovie Grasella Manalu|10589|0094439347|K
P|Priscila Agusty Sihaloho|10594|0105064468|K
L|Radja Putra Simangunsong|10611|0104413103|I
L|Reihan Rizky Nur|10633|0096181785|I
L|Rhevan Brema Pratama Ginting|10638|3101974835|K
P|Sandra Citra Kartika|10659|0108032641|I
P|Syelbi My Fatihah|10683|3105998153|I
L|Yosep Gembirawan Pardede|10712|0102729914|K`,
"XI HJ 11": `P|Abigail Bintang Argadiau Tambunan|10215|0101480530|K
P|Aini Wirdatul Kautsar|10227|0103805819|I
L|Akbar Sanzani Harahap|10234|0091163569|I
L|Antonius Brain Heart Sinaga|10260|0108471202|C
L|Arzyedo Sadewa Kleyco Yuvilomindo|10268|0104911627|I
P|Carissa Putri Dahayu Assyifa|10294|0091450491|I
L|Christiano Yeri|10301|0097394949|K
P|Cresya Vanesa Tambunan|10309|0096238589|K
L|Daniel Fransisco Siburian|10318|0091743622|K
L|Darmawan Nur|10746|0102183631|I
P|Devina Wiyani|10328|0094088460|I
P|Falya Mautiha|10361|0104752469|I
L|Habib Aziz Tiansyah|10398|0091734749|I
L|Herman|10408|0091459181|I
P|Juliyanti Permata Hati Sihombing|10443|0094048365|K
P|Kanaya Kayla Azzahra|10447|0101623868|I
P|Kayla Putri Naliyah|10451|0107332913|I
P|Kezia Christiara Rajagukguk|10462|0094297700|K
P|Khairun Nisyah|10464|0091518425|I
P|Maria Theofani Sinambela|10494|0091997056|C
L|Mohammed Rocky Perdana|10505|0093827163|I
L|Muhammad Alfi Syahrin|10513|0109353247|I
L|Muhammad Firdaus|10524|0098679063|I
P|Nadhira Yasmin|10546|0101452200|I
P|Nadira Nur Aini|10549|0094585071|I
P|Naswa Tri Ananda|10555|0083348994|I
P|Natasya Kanaya Evelya Nainggolan|10557|0098809945|K
L|Naufal Azka El Khairi Radithya|10560|0108603939|I
P|Novita Sari|10580|0097866584|I
P|Nurul Fitriyah|10584|0099761944|I
P|Oryza Maulidya|10756|0109826425|I
L|Qowiyyan Rifai|10601|0108666794|I
P|Queenisa Zafira Nazmin|10604|0101436069|I
L|Raffa Zahy Dwi Abrey|10615|0099123059|I
L|Rafif Althaf Daifullah|11238|0106231597|I
L|Riskiaditia Herlambang|10642|0092178036|I
L|Romi Rafael Abadia Malau|10647|0092656548|K
P|Sharen Valencia Manihuruk|10666|0097589275|I
P|Suci Afiqah Ar-Raihana|10674|0098610173|I
P|Syarah Sandoria Putri|10681|0098098532|I
L|Tantony Sibarani|10685|0097672843|K
P|Vanesya Almira Putri|10694|0109596221|I
P|Vilda Eria Salsabila|10697|0092709991|I
P|Zahra Rachmania Hasanah|10717|0103327433|I`,
"XI HJ 12": `L|Agung Wahyu Pratama|10224|0104178657|I
P|Aira Oktaviani|10228|0094629098|I
P|Aisyah Nurhasanah|10232|0095169529|I
L|Al Zaelani Rozaq|10235|0102080660|I
P|Alfi Nurul Falah|10238|0095220523|I
P|Alila Shofia Purnawan|10243|0103900246|I
P|Anindya Sherin Kumari|10257|0107119911|I
P|Asyifa Nayla Rinaldi|10270|0092816895|I
P|Aurel Cintya Manurung|10275|0107688763|K
L|Azhari Hasbi|10280|0095734525|I
L|Binsar Hasudungan Leonardo Pasaribu|10289|0093833788|K
P|Catherine Oktora Madelane Rizal|11241|0096388725|
P|Cessy Wulandari|10753|0096074758|I
P|Dinda Anggia Mecca|10340|0096783037|I
P|Emilia Rotua Helena|10350|0101732568|K
P|Fatimah Azzahra Ramadhani|10371|3094825469|I
L|Fawwas Tri Firas|10372|0095157093|I
L|Fernando Gautama|10755|0103818971|B
P|Intan Fiqriyatul Azizah|10418|0106826896|I
P|Jihan Makaila Fakhirah|10431|0106486091|I
P|Justitia Khairan Tri Ramadhani|10445|0099185546|I
P|Kasih Martauli Manik|10449|0101979705|K
L|Leonn Nainggolan|10480|0079135562|K
L|M Nadhif Zaidan|10489|0091557968|I
L|Muhammad Syahreza|10536|3085026188|I
P|Mutiara Sevia Andhini|10743|0096195458|I
P|Nadifa Nur Syaidah|10547|0098007112|I
P|Nani Charris Wijaya Panjaitan|10554|0103422591|K
P|Natalia Anggelina Wensisca|10556|0096886153|C
P|Nathania Livia|10559|0093438259|B
P|Nida Khairunisa|10573|0095732600|I
P|Rabitha Auzura|10607|0092441357|I
P|Rahma Aulia Tsalisa|10619|3093606957|I
P|Ramayu Gita Lestari Gultom|10625|0095151539|K
P|Risnawati Aritonang|10645|0099099195|K
P|Rita Hotmauli Simanjuntak|10646|0103860919|K
P|Rossa Chyintia Putri|10650|3106452965|I
P|Sa'idatussyamsi|10655|0096343446|I
P|Sabrina Artha Dini Bijaqis|10653|0108748899|I
P|Sartika Afrilia Siregar|10660|3104402736|I
P|Tengku Ariella Khansa Zakhira|10742|0101271426|I
P|Vebby Vionanda Bangun|10696|0097304790|I
P|Yeni Silviana|10708|0109733854|K
P|Zefanya Letisha Sihombing|10722|0096994509|K`,
"XII HT 1": `L|Abdillah Bariq Zainudin|9626|0097246716|I
L|Adrian Ibril Mustain|9641|0092584158|I
L|Ahmad Fadli|10080|0094169262|I
P|Aisyah Putri Mustofa|10078|0092292879|I
L|Aloysius Bayu Nugroho|9664|0097699400|C
L|Andhika Ranggana Putra|10101|0093579489|I
P|Angela Naomi Octavia Sinaga|10103|0093736258|C
L|Anggi Hatorangan|9673|0089127319|K
L|Arrahman Rizki|9683|0083953328|I
L|Asyraf Aditama|9687|0082552583|I
L|Axell Ian Hezeky Simanjuntak|9696|0098520568|K
P|Bunga Cinta Desfranza|9713|0089979457|I
L|David Noel Adonia Sinaga|9739|0088609504|K
P|Davina Adinda Putri Prasetya|9740|0094873900|I
P|Deviana Yulita Askar|10123|0084915605|I
P|Dhea Trisna Rahayu|9751|0098355336|I
L|Dhika Laiza Dalimunthe|9752|0097274330|I
P|Eirene Rezkida Samosir|9767|0091356054|K
L|Endra Reifaldo Syahputra|9771|0092326764|I
L|Farhan Syahda Bintang|9781|0087980980|I
P|Geraldine Sitanggang|9802|0086065875|C
P|Gracia Mutiarani Tambunan|9808|0097859205|K
L|Irfan Abqary Vinandra|10135|0089532503|I
L|Irhash Arsyad Marin|9833|0087679869|I
L|Johannes Armando Damanik|9846|0087265195|K
P|Keysha Meharunisa M|9868|0091674184|I
P|Laquisha Arinda Anindya|10146|0099784491|I
L|M. Iqbal Pratama|9880|0091716541|I
L|Mario Torres Pardosi|9888|0088488537|K
P|Miska Ozora Raihana Irsan|9891|0098547493|I
L|Muhammad Rasya Riandhika|9913|0086432059|I
L|Muhammad Riski|9915|0084107652|I
L|Nicko Mahardika|9934|0091526957|I
L|Nofrian Nugrah Rongrean|9940|0088356563|K
L|Owen Immanuel Siregar|9954|0082744526|C
P|Raisa Ma'ayyis|9974|0095724964|I
L|Revan Surya Saputra|10212|0096787936|I
P|Risni Alifia Anggraini|9995|0083654831|I
L|Rizky Ilham|9997|0092733972|I
P|Rutsella Sinaga|10211|0099492381|K
L|Sebastian Bravo Simanjuntak|10010|0095754806|K
P|Tenri Aisyah Jameela|10092|0089256030|I
L|Verdinant Ananda Sugianto|10043|0081651577|I
L|Yehezkiel Anggi Sitohang|10056|0094244593|K`,
"XII HT 2": `L|Abdul Zaki Amrulloh|9628|0096759650|I
L|Abhinaya Zhorif Rahmat|9630|0087217982|I
L|Abner Godlife Siringoringo|9632|0099851404|K
L|Achmad Vhicry Zikrillah Ariyanto|9636|0084474405|I
L|Alif Baihaki Malik|10095|0083892211|I
P|Amanda Keisya Aurelia|9665|0089492836|I
P|Amirah|9668|0095307601|I
L|Andra Reifaldi Syahputra|9671|0096584618|I
L|Bayu Dafa Febriansyah|9704|0097065005|I
L|Cahya Kristoper Simanjuntak|9715|0086552972|K
P|Cerelia Davina|9720|0097324812|I
P|Chelsea Ruth Yessika Marpaung|10117|0082809374|K
L|Cheyfron Andriwan|9724|0109831421|K
P|Christina Anggraeni Nadeak|10118|0094243305|K
L|Daniel|9733|0089942573|B
L|Darsyah Alnov|9738|0082756370|I
P|Eunike Ozora Girsang|9772|0092242117|K
P|Faradhila Ramadhani Harman|10129|0088283210|I
L|Ferdy Thariq Sinambela|10131|0088183178|I
P|Haniva Mutiara Aisyah|9810|0095005170|I
P|Janet Jennifer Hutagalung|9835|0089866219|K
L|Jose Gilang Panjaitan|9847|0091550290|K
L|Josua Sihombing|10139|0082584750|K
L|Juan Rifqi Syarezha|9852|0088415898|I
P|Khadeja Putri Nasution|9869|0098055400|I
L|M Fadhil Wiryadinata|9879|0087507456|I
P|Marchanday Jocelyn Titahena|10209|0091520435|K
P|Mei Lia Tan|10151|0087590143|B
L|Muhammad Arfan Domili|10153|0093826726|I
L|Muhammad Azzam Inayatullah|9905|0099138526|I
P|Nadiyah Althafunnisa Harifuddin|9921|0096607165|I
P|Neza Nazihah Tan|9933|0087256600|I
L|Nico Wijaya Pratama|9936|0099880590|I
P|Oxy Wyene Marinda Sihotang|9955|0098492673|K
L|Parrel|9957|0082291813|I
P|Putri Riswati|10168|0084552752|I
L|Raffa Geovani Putra Husni|10170|0097809427|I
L|Rahmat Nugroho Affandi|9971|0079461816|I
L|Rasendriya Beno Arya|10172|0099119068|I
L|Rava Dwiva Syahputra|9982|0084735755|I
L|Reynard Rafael Pasaribu|9990|0089632639|K
L|Satria Kusumanegara|10180|3098233638|I
L|Timothy Jeremy Pohan|10188|0097771090|K
L|Willy Cristian Rusianto|10050|0085610515|K`,
"XII HT 3": `L|Aby Vega Prageninawa|9634|0071075071|I
L|Akmal Nufail Ares|9652|0094351564|I
P|Allyssa Naura Rizqie Susanto|9662|0083584037|I
P|Amira Elysia|10098|0093050185|I
L|Andhika Septian Ferdiansyah|9670|0083626705|I
P|Annisa Farah Rahmatillah|9676|0081821283|I
L|Arjun Nadyra|9682|0087189799|I
L|Bariq Fadhal Adhimukti|10109|0096045336|I
L|Bintang Rafif|9708|0087566421|I
P|Blezintha Cahaya Anastasia|9711|0089495288|K
L|Cristianno Tambunan|9728|0098108356|K
L|Dhanu Galih Syahputra|9750|0097946108|I
L|Dimas Rinawan|10207|0089564042|I
P|Dwi Apriliani Oriza|9762|0092141085|I
L|Dzaky Zayyan Fernanda|9766|0093090199|I
L|Fatih Husein Al Bana|9782|0085695559|I
L|Freddy Brisjon Hutabarat|10132|0089607621|K
L|Giovani Yosafat P|10197|0094345002|K
L|Hadip Belyan|9809|0085581183|I
P|Hizkia Gracellyn Benita Siahaan|9821|0097738353|K
P|Hutri Ayu Fatrecia|9823|0089955272|K
P|Intan Satma Situmorang|9830|0086168505|K
P|Irene Meitner Sihombing|9832|0096552287|K
L|Janri Hasudungan Simbolon|10138|0104653449|K
L|Jeremy Radoti Simanullang|9840|3097259658|K
P|Joy Gracia Inri Tobing|9848|0098529643|K
P|Kayla Dysya Ivanovna|9857|0098195067|I
L|Kenzie Aryasatya Manurung|9861|0095797281|K
P|Lia Apriliyani|10147|0083256271|I
L|Muhammad Faiq Mubarak Syahputra|10075|0094817295|I
L|Muhammad Ferdiansyah Ramadhan|9910|0085709807|I
L|Muhammad Mufid Hakim|10157|0083642998|I
P|Nafiah Amanta|10748|0081412633|I
P|Nesha Gavrila Siregar|10199|0099177052|K
L|Rakha Sakhi Bintana|9980|0097014611|I
L|Rendy Halasson Simatupang|9986|0098306826|K
P|Salwa Neveli Daestina|10004|0089072399|I
P|Shazia Nailal Husna|10014|0155029125|I
L|Varly Rafif Alfahrisi|10042|0086340303|I
P|Virny Morany Tambunan|10191|0095899045|K
P|Yessa Aprilia Fandra|10192|0095068483|I
L|Yudistira Annas Din Haqi|10062|0084222309|I
L|Zaky Muklis|10067|0095761773|I
L|Zulfadli Muhammad|10196|0082547488|I`,
"XII HT 4": `L|Abiansyah Abelji Putra|9631|0099768299|I
P|Amanda Palintine Anastasia|9666|0089504628|K
P|Azura Ulfa Mardiyah|9699|0098800490|I
P|Berkat Kezia|9705|0097957090|K
L|Daffa Khairon Majid|9730|0088480326|I
L|Devon Juandra Sembiring|9747|0095477573|K
P|Dorpika Dote|9761|0063622053|K
L|Fachri Arham Wijaya|9773|0089298577|I
L|Farel Fauzan Iskandar|9779|0093406571|I
L|Farhan Pratama Ruswanda|9780|0088816397|I
P|Fiki Uswatun Hasanah|9789|0096214764|I
P|Gabriella Grace Natalie Rosewidhyatmoko|11234|0095425570|C
L|Gilang Fadhilah Surya|9805|3097740242|I
L|Ikram Ahmad Dahlan|9826|0087202571|I
P|Intan Meilany|9828|0094617638|I
P|Kharisma Angel|9872|0085488062|I
P|Linda Aulia|9877|0085192016|I
L|Mike James Tanding Tampubolon|9890|0089357848|K
L|Muara|9895|0071909173|K
L|Muhammad Aufa Al Zikra|9903|0096733411|I
L|Muhammad Padlni|9911|0076410616|I
L|Muhammad Zaki Alim Yosety|10738|0095221458|I
L|Muhammad Zibran Rifa'i|10159|0083870280|I
P|Najwa Latifah Az-Zahra|10160|0085084634|I
P|Novita Nuraini Sihombing|9942|0079230793|K
P|Nur Hafiza|9946|0093168899|I
L|Rahmat Bintang Samartha|9970|0097192615|I
L|Rakan Nafis Maulidi Saputra|9979|0094881216|I
P|Regina Juniati Pangaribuan|9985|0083502957|K
P|Revanna Putri Harlina|9989|3091798313|I
L|Riyan Shadira|9996|0087711957|I
P|Sesilia Lusiana Sinaga|10182|0094882056|C
L|Silwanus Barnabas Marpaung|10016|0088211821|K
L|Subastian Nur Utama|10023|0094072161|I
P|Wulan Syafira Tamba|10054|0087544185|I`,
"XII HT 5": `L|Alfian Syafarullah|9655|0098911059|I
P|Alfira Istiqomah|9656|0096800201|I
P|Amanda Dwi Arifka|10097|0082713721|I
L|Andre Matias Sianipar|9672|0089533834|K
P|Audrey Barek Syahputri|9688|0089170012|I
L|Bilal Nur Fazrin|9706|0087783408|I
L|Bima Sakti Harahap|9707|0078713641|I
L|Bintang Panca Putra muridnto|10734||I
L|Bintang Syakila|9709|0089709393|I
P|Clarissa|9727|0085510566|I
L|Dika Delena Putra|9755|0087649963|I
P|Dinamaria Manullang|9760|0085321260|K
L|Endar Nuriansya|9770|0082784225|I
L|Fahri Naufal Danial|9774|0084136770|I
L|Ginzo Triton Dalipang|9806|0087204893|K
P|Haruko Ayane|9815|0084698304|I
P|Iin Asmaningsih|10134|0084739518|I
P|Intan Elysabet Siregar|9827|0089710816|K
P|Jeni Saibori|9838|0068610555|K
L|Juan Febrio Silitonga|9851|0096976635|K
P|Kayra Kathleen Angelica|10140|0098368807|K
L|Muhamad Miftah Chudin|9898|3097575606|I
L|Muhamad Willy Pribadi|10152|0084560199|I
L|Muhammad Aftar Qaisar Rafaldo|9900|0081128418|I
L|Muhammad Dzakwan Ziyaadurrizieq|10737|0091152470|I
L|Muhammad Fernando Massya|10155|0091023913|I
L|Nico Adithia Sijabat|9935|0085157490|K
P|Nur Asyfa Syalsa Nabila|10165|0097230961|I
L|Raafi Alam Syah|10757|0087628521|I
P|Rafifah Farras Sakhi|10091|0087594785|I
L|Rhasya Anil Dahwan|10174|0092855214|I
P|Riski Putri Amanda|10176|0082033205|I
P|Sazkia Angrayni Hasibuan|10009|3086031226|I
P|Siti Ayla Ridha|11236|0085176236|I`,
"XII HT 6": `L|Aditya Putra Waralolo|9639|0083708699|I
P|Afiqah Putri Nabilah|9644|0094078137|I
P|Aisyah Puteri Wijaya|9650|0094446411|I
P|Anisah Sakhi Salsabilah|9674|0087628447|I
P|Annisa Zharifah Candra|9678|0099228877|I
P|Artalyta Suryani|9684|0088332889|I
P|Astrid Charissa Johan|9686|0094183495|I
P|Cahya Aierha Meithasyah|9714|0096628760|I
P|Christine Febyola Nababan|10119|0087248401|K
L|Diki Tri Ardiansyah|9756|0081589130|I
P|Dyta Ayu Acnesia Silalahi|9764|0085098422|K
P|Ell Dwita Febryanti Aulina Sihombing|9769|0096967831|K
P|Febi Dwi Ningsih|10077|0099810256|I
P|Febi Dwi Syaputri|9783|0097497790|I
P|Fiorenza Kanaya Andi Putri|9791|0093649184|I
P|Fisca Sari|9792|0084656982|I
P|Gifirsty Harpenangel Tandisau|9804|0098388299|K
P|Havizah Rizkia|9818|0097097174|I
P|Hosianna Sion Argadiau Tambunan|9822|0099971910|K
L|Ibrahim Mufiid Fadhli|9824|0087653588|I
P|Jessica Angeline Nadeak|9842|3099269641|K
P|Jihan Iga Ananda|9845|0093394380|I
L|Kevin Samuel Sinaga|9863|0082112612|K
P|Lidya Mori Sinaga|9876|0091666450|K
P|Nadhifah Aulia Bahtiar|9919|0094405885|I
P|Nayla Aisyah Putri|9929|0091592446|I
P|Nayla Lutfia|9930|0099030225|I
P|Nur Azizah Al-Has|9945|0083432085|I
L|Puguh Kuncoro Jati|9960|0089113676|I
P|Queen Fayza Avindra Nuryaislam|9965|3099847612|I
P|Quennaira Ressel|9966|0098737631|I
L|Rafa Aditya Rizal|10169|0085007596|I
L|Raihan Mahesa|9973|0087763142|I
P|Raisya Almira|9975|0097183017|I
P|Sasha Berliana Putri|10006|0095254250|I
P|Savaira Nada Hernanda|10181|0091311049|I
P|Shafina Aurellia Azzahra|10013|0091579878|I
P|Siti Amalia Jelita Mulyani|10186|0092659505|I
P|Tasya Manurung|10033|0086255767|K
P|Weny Rosetan Binti Tan Cipto|10049|3090340694|I
P|Wulan Ramadhani Langoday|10053|0089813781|I
L|Yazidul Fikri|10055|0069543096|I
L|Yespan Brajamars Simanjuntak|10058|0099958209|K
P|Zizi Putri Batrisya|10072|0084698300|I`,
"XII HT 7": `L|Ahmad Renaldi Aryanto|9647|0082946816|I
P|Aisyah Tungga Harnum|9651|0085475461|I
L|Aldi Fachri Ghaizan|10081|0085835556|I
P|Andi Bulan Novianti Solihin|10082|0081610654|I
P|Ayu Kamila Salsabila|9698|0098145383|I
P|Chelsy Abigail Andrea Bawole|9722|0095393471|K
P|Cindy Rahmadhani|10120|0086730335|I
P|Cinta Zahratul Shita|11232|0091068719|I
P|Citra Lufiya|10121|0096783188|I
P|Danisya Aurelia Athaillah Luthfi|9736|0093583816|I
P|Delima Auricha Yosefha|9742|0098302695|C
P|Elfira Khairani Paruhuman Nasution|9768|0095574999|I
L|Fahry Rizki Saputra|10127|0094032134|I
P|Fanny Fazila|10128|0085714871|I
P|Febry Anggraeny Tampubolon|9784|0098629209|K
P|Feodora Belfry Berylda Tamaela|9787|3095320548|K
L|Gerald Sitanggang|9801|0086605837|C
L|Hildan Ary Pahlawan|10087|3084336354|I
P|Kayla Umulkhair.Z|9858|0088224088|I
P|Keisha Vivia Mufthi Ramadhani|10141|0087488333|I
P|Keisyah Almaira|9860|0098954435|I
P|Makrina Natasya Betir Yahzeis|9885|0081253333|C
P|Maria Putri Familia Situmorang|10150|0095932927|C
L|Muhammad Bagas Rahmatullah Putra Juwardi|9906|0098719136|I
L|Muhammad Dirgham Ramadhan|9907|0088382347|I
L|Muhammad Sultan Alrasyid|9916|0098051112|I
P|Naifah Eliza Fitri|9924|0088150246|I
P|Nanda Rezkya Emilza|10161|0096466331|I
P|Nathasya Nur Hamidah|9926|0096593054|I
P|Nida Ulhaq Nur Syifa|10074|0095810570|I
P|Nursyakira Wandini|9949|0092815914|I
P|Oculist Tisa Intan|9952|0084681538|I
L|Okta Muda Siregar|9953|3082391773|I
L|Raditya Rafif Ramadhan|10090|0099409776|I
P|Rafiqa Nayla Dawani|9969|0089361613|I
P|Salsabila Tri Wulandari|10003|0099453152|I
P|Sayu Kirana Sakinah Gayatri|10008|0097797016|I
P|Sesilia Natalia Gultom|10012|0087097538|K
P|Syarifah Aulia Razita Fatin|10030|0091543403|I
P|Thiana Titania|10035|0092403913|I
P|Ukhfi Imroatu Naima|10040|0083184211|I
P|Vexia Davinci Malau|10045|0081215492|K
P|Vici Lindriviani|10190|0084949280|I
L|Zaky Muntashir Akmal|10195|0096691724|I`,
"XII HT 8": `L|Ahmad Wahyuddin Daedad|9648|3085416998|I
L|Algiz Attaya Fikriandi|10094|0095745392|I
P|Arfitkah Rahmadani|9681|0096467855|I
P|Aulia Istiqomah|9689|0089717985|I
P|Aura Yasmin|9692|0092513597|I
P|Aurel Cheline Ayu|9693|0093951643|K
P|Auwra Latiffah|10108|0091078045|I
P|Ayla Zalika Qurrotu'aini|9697|3093898399|I
P|Azzahra Salikha Intani|9700|0087430353|I
P|Callysta Tribuana|9716|0096481666|I
P|Cantica Angeline Simanungkalit|9717|0102007364|K
P|Celsi Najiha|10114|0087681423|I
P|Chelsea Alifia Azzahra|9721|0082139782|I
P|Chintya Faiza|9725|0097187795|I
P|Chloe Kinaya Anggreiny|10085|0094979953|I
P|Cut Azzahra Salsabiela|9729|0091692728|I
P|Dhia Nafisa Ulhaq|10210|0091538291|I
P|Diandra Salsabila|9754|0084528855|I
P|Emilia Sadira Zahir|10124|0098997880|I
P|Erwina Dwilestari|10125|0083256824|I
P|Fadilah Oktavia H. Ga'a|10126|3088628557|I
P|Farras Najla Ahfa|10086|0089658245|I
P|Fresia Manik Febi Patulak|9794|0098866972|C
P|Izzatu Nafsiah Fitri. C|10137|0082545129|I
P|Jessica Anastasya|9841|0098092742|I
P|Keylla Risma Sitanggang|9867|0092616821|K
L|M. Mahatir Abdi Negara Losemito|10208|0099798108|I
L|Muhammad Fitra Yansyah|10156|0081989415|I
L|Nauval Al Ghifari Sastranegara|9927|0099117523|I
P|Nayla Aisha Novandi|9928|0083001298|I
P|Nayza Aulia Zhafirah|10089|0091857120|I
P|Putri Elizabeth Nainggolan|9961|0096696418|K
P|Rahsyifa Khansa Azizah|10171|0084779591|I
L|Raja Muhammad Hafizh Zuria|9976|0097579159|I
P|Rajwa Dea Kusuma|9978|0098463103|I
P|Rieke Angelia S|10175|0085544982|K
L|Rifan Sufriya Himawan|9993|0084755453|I
P|Sabrina Cinta Farcia Samosir|10177|0091509122|K
P|Salsa Trisya Meicha|10002|0099477683|I
P|Syaira Kamila Husna|10026|0096506709|I
P|Syarifah Aisyah|10029|0088252150|I
P|Trichia Novella|10189|0094331824|I
P|Tsurayya Reza Noorilmy|10039|0088328167|I
P|Yohana Olivin Naibaho|10193|0087033849|C`,
"XII HT 9": `P|Alda Christiani Natalya|10740|0088411897|K
P|Alitha Aldithya|9661|0089879871|I
P|Alma Deya|10096|0078579414|I
P|Almira Fahrunnisa|9663|0089605226|I
P|Aniswatuzzahra Adita|9675|0099843003|I
P|Annisa Nuraini|9677|0085496984|I
L|Aqila Praja Setiawan|9680|0098907736|I
P|Athaya Ramadhani|10107|0086544729|I
L|Awen Malau|9695|0083154866|K
L|Daniel Leonell Markus Purba|9734|0095783118|K
L|Dhani Arifin|9749|0084590450|I
L|Dimas Dwi Prasetyo|9757|0082171843|I
L|Dimas Maulana|9758|0099610417|I
P|Dzakira Berliana Putri|9765|0094208668|I
P|Faraas Raihaanah Zahra|9777|0082236617|I
P|Hana Fakhirah Shakila|9813|0088654884|I
P|Hanna Cinta Laura Br Simanjuntak|9812|0085887265|K
P|Haura Putri Ramadhani|9817|0088100390|I
P|Jessycha Stefhany Panjaitan|9843|0097938552|C
P|Jihan Afifah Sonda|9844|0089019966|I
P|Joys Theodora Maromon|9850|0094152981|K
P|Kayla Az Zahra Prasetyo Putri|9856|0081243474|I
P|Keyla Aznisah|9866|0085993817|I
P|Keyzia Alifah Nur Fatin|10088|0084977938|I
P|Lauren Octavia Nadeak|9874|0081046795|K
L|Lintang Prayoga|10198|0087296426|I
L|M. Zulfakhri Akbar|9883|0078743627|I
L|Muhamad Illwa Aldiyansyah|9897|0094329691|I
P|Nayla Nuur Syaahidah|10162|0085195015|I
L|Padlan Januarta Pratama|9956|0096491569|I
P|Pretty Ephiphania|10167|0103200648|K
P|Rahmi Askia Welva|9972|0081207857|I
P|Raja Thazriawyah Zainatul Ikhfa|9977|0096163043|I
P|Ratua Adinda Nababan|9981|0089185914|K
P|Rava Feodora Kellystin|9983|0087579349|I
L|Rhandy Borsian Daniel Panjaitan|9991|0081478590|K
P|Rizmanda Rangkuti|9998|0086544967|I
P|Safira Adisti Rafsanzani|10178|0089858397|I
P|Sofiya Nabila Maisarah|10017|3096780732|I
P|Sria Foi|10019|0071606797|K
P|Syafiqha Syamiathul Amri|10025|0085691770|I
P|Syarifah Nysa Zaira Hami|10031|0088587359|I
P|Teresia Sri Sulastri Sinaga|10034|0079651671|C
P|Zahra Agustine Putri|10064|3085587013|I`,
"XII HT 10": `P|Ade Nur Rahmania Dewi|9637|0089253124|I
L|Agustianda Ramadhan|9645|0089434654|I
L|Alfian Rahwidyan Ihsan|9654|0087501711|I
L|Ali Fatah Ma'arif|9658|0087038097|I
P|Andi Putri Indah Lestari Adzan|10102|0077378983|I
L|Anugrah Gultom|9679|0084618345|K
P|Aurel Suci Ramadhani|9694|0081758934|I
P|Bilqis Afifah|10111|0085290526|I
L|Brady Moca Golioth|9712|0085292094|I
P|Caroline Anasthasya Haloho|9718|0096046458|K
P|Cikal Ayu Rinastiti|9726|0094631913|I
P|Desfina Rizky Aulia|9744|3089795760|I
L|Devon Satria Alviano|9748|0086192622|I
L|Dimas Maulana|9759|0086081129|I
L|Gamiel Samy Andhika|9798|0082865282|I
P|Hanna Bunga Sidabutar|9811|0082668444|K
L|Isaac Gerar Simamora|10136|0104949077|K
P|Juanti Putri Simanjuntak|9853|0099498580|K
P|Kasih Stefani Hutasoit|9855|0096313175|K
P|Keiko Gizza Shaquila|9859|0099122163|I
L|Kevin Langit Febrian|9862|0096734403|I
P|Lamria Rohana|9873|0085335249|K
L|M.Arif Efendi Siregar|9884|0087260702|I
L|Muhammad Alif Hidayahtullah|9901|0083785378|I
L|Muhammad Ar Rafii|9902|0081261509|I
P|Nabila Khairani|9918|0084917464|I
P|Naomira Azzahra|9925|0099192290|I
P|Nazhifah|10744|0098022731|I
P|Nesva Untari|9932|0085790226|I
P|Nikeisha Malliqa Rayhana Eryn|9937|0084065134|I
P|Nur Amira Syahrani|9944|0089479327|I
P|Nur Hasanah|9947|0085672283|I
L|Nuryanto Ramadhan|9951|0086616782|I
P|Putri Olivia Hutauruk|9962|0098467146|K
P|Sabrina Salsabila|10000|0086850510|I
L|Satrio Anshorut Tauhid|10007|3098773332|I
P|Sifa Novianti|10183|0079729531|I
P|Stevania Pangaribuan|10022|0086721897|K
P|Syadira Fiqa|10024|0087587783|I
P|Tika Nurhayani|10036|0074033927|I
P|Tsabita Ufaira Novanny|10037|0084565194|I
P|Ummu Atika Harahap|10041|0073553259|I
P|Viona Anggraini|10046|0084645527|I
P|Wan Nabila Syahrani|10047|0099260505|I`,
"XII HT 11": `L|Afif Athaa-Illaah Hariadin|9643|0084374282|I
L|Alfi Rizki Erza Ramadhan|9653|0096168670|I
P|Aliffa Cheisya Azzarine|9660|0098893118|I
P|Ariqah Althafiona|10105|0093957957|I
P|Arisha Kirana Wulandari|10083|0082187070|I
P|Aura Sari Nainggolan|9691|0099522757|K
P|Balya Sakura|9703|0097585962|I
P|Belva Rahmatul Husna|10110|0094586603|I
P|Bless Ro Simatupang|9710|0093369376|K
P|Celsi Elisabeth Butar Butar|9719|0094763593|C
P|Chelsea Alicia Purwadi|10116|0085461263|I
P|Deswita Derriel Tampubolon|9745|0082328995|K
L|Dwi Mickhan Alinuha|9763|0154235130|I
L|Faiz Nauval Saputra|9776|0097280583|I
P|Futri Nabila Fitriani|9797|0085169806|I
L|Ghufran Parisya Yanaz|9803|0089258167|I
L|Hasyim Hidayatullah|9816|0092541064|I
P|Jaskia Tan Putri|9836|0097681183|I
P|Joy Sondang Tampubolon|9849|0097474796|K
L|Kevin Simangunsong|9864|0085706402|K
P|Khanza Altha Funisa|9870|0083961365|I
P|Khayla Almira Sufi|10145|0097612587|I
P|Laurensia Octavia Kornelita Supriadi|9875|0088788338|C
P|Meilysiana Simangunsong|9889|0089665233|K
L|Moreno Galang Ramadhan|9894|0045860117|I
L|Muhammad Rafi'anwanullah Anugrah|9912|3091089575|I
L|Muhammad Rafie Fachreza|10158|0082479773|I
L|Muhammad Rizky Dava Nurfadilah|9899|0096871691|I
P|Nabila|9917|0085641609|I
P|Nadia Andrian Ramadhani|9920|0085852933|I
P|Nur Aisyah|9943|0082387044|I
P|Nurul Aina Fatihah|9950|0081459112|I
P|Poppy Atikah Dinda Putri|9959|0087824558|I
P|Putri Riana Asyifa|9963|0092810403|I
P|Quinsha Keira Elzania Telaumbanua|9967|0097645192|K
L|Rahmat Kurniawan|10076|0087604860|I
P|Reyssa Nayla Cahaya Putri|10173|0083138597|I
L|Rifqy Rafif Anshori|9994|0089866032|I
P|Roaitul Islah Juliantino|9999|0082557205|I
P|Salwa Azahra Syidiqqi|10179|0088801948|I
P|Veronika Butar Butar|10044|0084443021|K
L|Wan Rizqullah Akbar|10048|0095056282|I
L|Yossi Josse Yoshua Simanjuntak|10061|0082859139|K
P|Zahra Athira|10065|0091393602|I`,
"XII HT 12": `P|Adonia Mishael Kanzhu|9640|0098838713|K
P|Alicia Lorenza Cinta Ginting|9659|0082048765|K
P|Ana Jufebiola|9669|0089401323|K
P|Ananda Tri Hapsari|10099|0088413849|I
L|Andesta Fasa Mewardhani Lase|10100|0086831369|I
P|Astrid Michela Asifani|10084|0099851365|I
L|Asyraf Rafa Ryadi|10106|0083468032|I
P|Balqis Indi Aurora|9702|0097737023|I
L|Boni Sittong Hasiholan Panjaitan|10112|0098933115|K
P|Catharine Michelle Simbolon|10113|0095483569|C
P|Chesia Lee Tambunan|9723|0098181174|K
P|Devi Kumalasari Putri|9746|0087313916|I
P|Dhiya Aqsha Almaghvira|9753|0086353846|I
L|Faiz Arifandi|9775|0095476921|I
L|Farel Afriadi Sinaga|9778|0091727622|K
P|Femita Dycarsa Hardian|9786|0081166127|I
P|Filia Raisha Sayidatina|9790|0084094614|I
P|Fisel Natalia Haloho|9793|0094007706|K
P|Friskila Apriani|9796|0091700371|K
L|Gilang Sandi Sasongko|10133|0085966843|C
P|Hayyu Aisyah Nazirah Sihombing|9819|0089785367|K
P|Intan Nur Aini|9829|0098410964|I
P|Keysa Mutia Atmaja|10143|0084236934|I
P|Khaisya Putri Ramadani|10144|0085818263|I
L|Luckyano Geranzani Mbele Niu|9878|0085141081|C
P|Maria Elsri Madu|9887|0084671640|C
L|Muhamad Feriana Azmi|9896|3074890723|I
L|Muhammad Fajar Prasetyo|9908|0087099543|I
L|Muhammad Rio Febrian|9914|0086720837|I
P|Nadya Syahwalia|9923|0083762628|I
P|Qorriy Aina|9964|0098974781|I
P|Rafa Khairunisa|9968|0087824081|I
L|Richardo Sitompul|9992|0094876292|C
P|Sherin Sandini Fitrahi|10015|0084304454|I
P|Syarifah Zainunnisa|10032|0083995207|I
P|Syawalya Shayna Malik|10187|0086851275|I
P|Tenri Jasmine Syakira|10093|0099928623|I
L|Yeremia Siahaan|10057|0083015833|K
P|Yohanna Lydia Febriyanti Manurung|10059|0095621325|K
L|Zahran Parisya Yanaz|10066|0081308701|I
L|Zikry Yuda Al Fatulah|10070|0081146186|I`,
"XII HT 13": `L|Abdul Kadir|9627|0084508193|I
L|Achmad Aziz Taqwim|9635|0082774164|I
L|Alfonso Ronaldo Sibarani|9657|0094373236|K
P|Anria Putti Rifiesa Hasibuan|10104|0082384715|I
P|Aulia Novira Handayani|9690|0093122795|I
P|Baili Oktarima|9701|3089328880|I
P|Chantika Ravida Putri|10115|0087195497|I
L|Daniel Sirait|9735|0069847927|K
L|Danny Muhammad Abrar|9737|0097513022|I
P|Dea Ayu Puja Kasturi|9741|3082176067|I
P|Debora Renatha Hutabarat|10122|0087645464|K
P|Feby Valerie Exarial|9785|0095545083|I
L|Gathan Akhiardi|9799|0083049783|I
P|Grace Anasthasya Panjaitan|9807|3091271261|K
P|Harisa Hasna|9814|0086160153|I
P|Helen Damayanti|9820|0083020938|K
P|Ika Putri Ramadhani|9825|0097829052|I
L|Iqral Rozik|9831|0074950674|I
L|Jeremia Manullang|9839|0088033769|K
P|Keyhizia Melani Silalahi|9865|0095815881|K
P|Khanza Rahmadini|9871|0096441206|I
P|Lydia Maria Renata Nainggolan|10148|0083360772|K
L|M. Nadif Mahardika Arlian|9881|0098840099|I
L|M. Rizky Akbar Nurendra|9882|0089607785|I
P|Monica Tay Yani|9893|0096760353|I
L|Muhammad Fakhry|9909|0096481520|I
P|Nayya Rallyenda|9931|0086357336|I
P|Nimas Dwi Ramadhani|10164|0085072184|I
P|Nindya Sasikirana|9939|0097494343|I
L|Ray Martin Siallagan|9984|0088704257|K
L|Samuel Arga Putra Siringoringo|10005|0082306497|K
P|Selfia Yunita|10011|0083142662|I
P|Sri Melani Sirait|10018|0098160255|K
L|Steeven Anthonio Purba|10020|0096671141|K
L|Stephen Paul Hananya Pasaribu|10021|0089917880|K
P|Syalwa Maghfira Nandini|10028|0085831729|I
P|Tsamara Shazia Nugraini|10038|0097227084|I
L|Wahyu Arief Dewanto|10739|0085757234|I
P|Windy Alfriani Situmeang|10052|0081163932|K
L|Yoka Hizkia Wiranto Butar Butar|10060|0097677430|K
P|Yuliza Ayunia Ginting|10063|0087135907|I
P|Zahra Cessa Kireina|10194|0086070469|I
P|Zulayka Amira|10073|0084411955|I`,
  },

  /* keterangan tambahan per kelas (wali kelas / paket) */
  info: {
    "X HL 1": "Wali kelas: Laras Syahgiah, S.Pd", "X HL 2": "Wali kelas: Rena Nurmala Sari, S.Pd", "X HL 3": "Wali kelas: Toyibah, S.Pd.",
    "X HL 4": "Wali kelas: Heru Darmawansyah, S.Pd", "X HL 5": "Wali kelas: Maydika Sapti Utami, S.Pd", "X HL 6": "Wali kelas: LM Zahid Arsyadi, S.Pd",
    "X HL 7": "Wali kelas: Krisna Midiastuti, S.Pd.", "X HL 8": "Wali kelas: Nyak Mutya Aulina Khairul Fajri, S.Pd", "X HL 9": "Wali kelas: Refda Yelni, S.E.",
    "X HL 10": "Wali kelas: Fitri Ramadhani, S.Pd", "X HL 11": "Wali kelas: Loveni Vebri, S.Pd.", "X HL 12": "Wali kelas: Aulia Fitri, S.Pd",
    "XI HJ 1": "Paket: Sains Kesehatan 1", "XI HJ 2": "Paket: Sains Kesehatan 1", "XI HJ 3": "Paket: Sains Kesehatan 2", "XI HJ 4": "Paket: Sains Kesehatan 2",
    "XI HJ 5": "Paket: Sains Teknik", "XI HJ 6": "Paket: Sains Teknik", "XI HJ 7": "Paket: Sosial Digital Entrepreneur",
    "XI HJ 8": "Paket: Sosial Lingkungan", "XI HJ 9": "Paket: Sosial Lingkungan", "XI HJ 10": "Paket: Sosial Linguistik",
    "XI HJ 11": "Paket: Sosial Linguistik", "XI HJ 12": "Paket: Sosial Humaniora",
    "XII HT 1": "Wali kelas: Sikkat Simanullang, S.Pd.", "XII HT 2": "Wali kelas: Liza Salfina, S.Pd.", "XII HT 3": "Wali kelas: Komariah, S.Pd.",
    "XII HT 4": "Wali kelas: Reni, S.Pd.", "XII HT 5": "Wali kelas: Yulia Afrianti, S.Pd.", "XII HT 6": "Wali kelas: Nasa Andriansa, S.Pd.",
    "XII HT 7": "Wali kelas: Korry Herawati, S.Pd.", "XII HT 8": "Wali kelas: Hasbiah, S.PdI", "XII HT 9": "Wali kelas: Desy Handayani, S.Pd",
    "XII HT 10": "Wali kelas: Siti Aisyah, S.Pd.", "XII HT 11": "Wali kelas: Dra. Yusnani", "XII HT 12": "Wali kelas: Yurike Waliana, S.Pd",
    "XII HT 13": "Wali kelas: Juliantri Utari, S.Pd.",
  },
};
