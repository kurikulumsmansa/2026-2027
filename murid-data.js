/*
  DATA MURID — TP 2026/2027
  Sumber: Google Sheets "NAMA MURID SMA NEGERI 1 BATAM TP 2026/2027" (sheet HL, HJ, HT).
  Satu baris = satu murid: "L Nama Murid" atau "P Nama Murid" ("- Nama" jika L/P belum diisi).
  Ubah tanggal "update" setiap kali data diperbarui (format TAHUN-BULAN-TANGGAL).
*/
const MURID = {
  update: "2026-11-01",
  kelas: {
"X HL 1": `L Abiyzzhafran Adita
L Achmad Luthfi
P Afirah Nur Muhammad
L Aji Kurnia Akbar
P Alicia Patio Uli Purba
L Alphian Zio Raditya
L Alvito Ginting
P Alyssandra Adeena Irwan
L Arai Valentzahid Ramdani
P Artha Kezo Pongmanapa
P Aurell Rahma Anzani
P Bernika Juniartha Simbolon
P Chalisa Nadhifa
P Chila Farita Putri Novira
P Chiquita Maygood Naibaho
L Christo Vallen Tambunan
P Cindy Aulia Putri
L Endzaghi Atla
L Fikri Faqih
P Fransiska Mona Violentina Simanjuntak
P Indah Puspita Marbun
L Keanu Al Rucci
L M. Adriansyah Putra
L Muhammad Keenan Raihanul Islam
L Muhammad Naufal Kurniawan
L Muhammad Zakie Yuliansyah
P Naysila Arizka Ripani
P Nikita Sesilya Manurung
P Orizha Satifa
L Parisya Aqsa Putra
L Rifqi Hidayat
P Sabrina Putri Ziwi
P Secilia Natalin Sianturi
P Sherwina Hevelyn Verlica
P Silvanie Cung
P Syafira Azzahra
P Theresia Angelica Christmarines
P Threecyalona Angel Naara
L Yasser Ahmadinejad
L Yusuf Christian Barlen Simamora`,
"X HL 2": `P Aatikah Khairullah
L Abdiel Alfayed
L Adiviansyah Rahmat Ramadhan
P Angel Dahliana Tampubolon
P Ashila Zulaikha
L Athoriq Ahmad Barat
L Augi Salmanita Al Farizi
P Chosika Optima Theresia Lumban Gaol
P Dhiva Iqlillah
L Digo Situmorang
P Dwi Nurhidayah
L Dzaky Alif Al Abiyu
L Erdo Jhofa Andriano
P Fadila Anggraini
L J R Josua Pardosi
P Joice Stefani Elizabeth Silitonga
L Jonathan Morisdo Sihaloho
P Jovanka Martha Adeline Tambunan
L Kaleb Manurung
P Khalissa Asti Alfianti
L Khoirul Azzam Al Ghifari
P Macika Putri Agatha
P Marianna Vrantricilya Aruan
P Naina Putri Neren
P Nayla Kelsy Yarmarina
P Nisa Ayu Adelia
L Nopal Joma Rizkiansyah
P Raisya Rohadatul 'Aisy
P Rebecca Glory
L Rexy Marvin Simbolon
L Rifkyano Tampubolon
L Risky Melala Sinulingga
P Ruth Eleora Jilena Kalangie
P Shaquilla Septriani
L Stevent Hamonangan Siringoringo
P Syafira Dwi Putri
L Taqiy Azfar Assakha
P Tiyasa Hesi
L Tristan Naafi Alva Dhiya
P Zivana Alayya Putri`,
"X HL 3": `P Abel Salma Raihanah
P Adeta Zieanka Saicindo
P Aisyah Delfina Binti Moh Sadiq
P Amira Najwa Farisah
P Aqilah Najla Shabirah
L Asyam Arkan
P Azkiya Nawal Refani Siregar
P Bunga Leonie Saraswati Sihombing
L Candra Purnama Sidi
P Cinta
P Dwi Reva Afrianty
L Emerald Affreyn
P Fadrani Indah Pertiwi
P Fathimah Az Zahro
P Firly Inayah Guswara
L Habib Aditya Alamsyah
P Hutri Nur Syahira
L I Putu Andrayuga
L I Putu Bagus Pradita Cita Utama
P Indah Maya
P Keysa Nadine Sagita Santoso
P Khairun Nisa
L Kheryso Gabrielo
P Marcilya Sofia Anisa Wili
L Muhammad Arief Syahputra
L Muhammad Dzaki Widya Putra
L Muhammad Sakti Salim
P Nabila Sativa Apriani Putri
P Nadhifa Aqila Aska
P Naomita Anggraeny Situmorang
P Nurul Aini
P Osha Atika Novia Dosmon
P Patricia Lucky Mimora Silaban
P Pinta Uli Sinaga
L Rafif Shidqi Yasman
P Raisya Liyana Syasya
P Rania Amirah Murwanto
L Reno Nevada Desperado Pangaribuan
P Syafina Azzahra
P Trixie Adora Taruli Manik`,
"X HL 4": `P Aisyla Anggita P. Sidabutar
P Aleesya Dania Zahra
L Alifardan Al Thariq
L Amar Ampo
P Amira Liyana Tri Deslita
P Anavist Zikra Hafizah
P Angeline Corri Manik
P Anisa Alistantia
P Apriani Siahaan
L Arvin Alworth Jeta Simanjuntak
P Avrilia Aqila Nigata
P Azzahra Putri Ramadhina
P Destyla Chairunisa Putri
P Dianiera Eight Butarbutar
P Enjel Natasya Sitorus
P Fannesa Ariani Ginting
L Fikri Rahmanshah Riadi
L Fomalhaut Muhammad Alderi
P Gisela Sindy
L Habib Jauhari Al Muradi
L Haris Alvian Simarmata
P Hygeae Ryuki Sambera De Verlos
P Intan Tri Wahyuni
L Khalid Abdullah
P Khalisya Aorora Putri Azvin
P Khansa Tiana Putri
P Kirana Aliya Ramadhani
L Muayyad Shafir Syahiran
L Muhammad Urwah Al Wusqo
L Muhammad Zerico Abidin Al Sudaish
L Muhammad Zidane Arrafianto
P Nassyfah Rahmafitri
P Othari Rasiyah Ramadhani
P Purnama Sari
P Putri Prudence
L Rakha Alifian Guntara
P Rizka Amelia Rholiantini
P Yohana Abel Gracia Manalu
L Yunan Hawwari Jatmiko
P Zahwa Fakhrun Nisa`,
"X HL 5": `P Alya Naila Zhafirah
P Amasya Wilstar
L Andre Gunawan
P Annisa Ramadhani
P Arini Hidayati
L Boy Roito Harianto Hutauruk
P Cahaya Cristine Situmorang
L Devin No Haerlianto
P Dina Sasmita Ulthahara
L Ekky Muhammad Fitrah Sudrajat
L Fadhil Fadhali
L Fatih Abiy Abqary
P Frecilla Kanaya Andi Putri
L Gibran Assad Tahir
P Hanafa Situmorang
P Herly Sintara Simbolon
P Indah Septriani
L Julian Bani Fahrezi
L Kalih Ageng Raharjo
P Karisa Indria Amelia
P Letisya Anugrah Hutagalung
P Maria Magdalena Lumban Gaol
P Muhaisyah Rustyanty Rengen
L Muhamad Fakhri
L Muhammad Iqbal
P Naura Alifahtunisa Rahmawan
P Nayla Putri Amrullah
P Novelita Barus
P Novitri Tiara Zahira
P Nurul Izzah
L Rafka Aryan Putra
L Raynalnd Sinambela
L Rendy Pratama Sianturi
P Revina Putri Sulistia
P Rifka Agustina Hutasoit
P Sabira Zurafa Rosadi
P Salsa Nurul Asiqin.E
P Siti Rasyidah Gunanri
P Teresya Ananta Loure Hutagaol
P Zira Al Shabiro`,
"X HL 6": `L Adi Arga Sitorus
L Adya Habibi Azmy
P Aisyafa Syahrani Hutomo
L Anugrah Aditra Fahmi
L Athar Ghifari
P Audrey Fransly Putri
P Az Zahra Mulyandari
P Bintang Mutiara Sihombing
P Claresya Tambunan
L Darrell Peter Franarga Silitonga
P Dewi Adinda Syahnuriliyyah
P Dina Ramadani
P Elviana Elva Cahyani
P Farras Nailah Arkana
P Fhanyta Latifa
L Gilang Fauzi Hafizh
P Imayana Maria Sinaga
P Keisya Farah Dilla
P Khairun Nisa
P Klarrisa Felycia Joice
P Latifa Chintya Arum
P Ledi Marito Simanjuntak
P Lidiya
P Lovely Angelina J Samosir
L Michael Lumbanbatu
L Muzafar Al Azzam
P Nabiilah Syahfitri
P Najwa Seizha
P Naysiah Putri
P Putri Kamilatus Sa'adah
P Rawati Uli Lumban Gaol
L Rendison Gadman Siahaan
L Rio Ferdiansyah Dalimunthe
P Rischa Ayu Kesuma
P Sandria Naomi Ldydia Pasaribu
P Talita Wardani
L Tengku Abu Hisamudin Syah
P Tyasigka Pratiwi
L Zainul Hilal Muzakki
P Zeyra Nur Azzahra`,
"X HL 7": `P Adelia Mirza Atmariani
P Aishah Qloudy Adisa
P Alfiana Lutfi Hanifah
P Aulia Dewi
P Cellica Amirasansari
P Delvia Agusti Rizwana
P Dewi Kartika Chandra
L Edwin Ferro Saputra
L Evan Alghifari Ramadhan
L Faiz Syathir Anwar
P Fakhira Aulia Octa
P Fannisa Luisa Khadijah
P Hana Suzette Gultom
P Haura Hafizhah Wihandono
P Indah Kasih Aulia Batubara
L Jafian Nafal Fadilah
P Kania Atia Rasti
P Karen Helena Calista Nazara
P Kayla Amanda Shafitri
P Khairissa Septiana
P Metha Rahmah Dita
L Muhammad Fakhri Ramadhan
L Muhammad Royyan
L Muhammad Syafi Anugrah
L Nafiz Yasin Afandi
P Nazwa Azwira Syafitri
P Nelofer Pazira Darwis
P Nisa Tri Ananda Hasibuan
P Octavia Andini
P Putri Nur Aini
L Rafhael Arjuna Mahendra
L Revand Velys Sanders Balukh
L Rezvan Hendrawan
L Samuel Jeckson Butar Butar
P Selomita Yulisa Manalu
L Shali Salasha Putra
P Siva Stefani Samosir
P Syakirah Reflia Nabila
P Zevany Tampubolon
L Zireh Nazaret Simanullang`,
"X HL 8": `P Airen Renata Simanjuntak
L Alfarizzi Nurfathoni
P Alifa Pramadita
P Alya Khusayn Azzahra
P Amira Noraini Khoirunnisya
P Anindah Gadiza
P Apriana Siahaan
P Asa Ramadhani
P Aulia Rismah Nasution
L Axel Fortino Sihotang
P Bunga Destika Harahap
P Chelsy Margareth Banjarnahor
L Davian Ockto Widhy Lestari
P Echa Aulida Harahap
P Elisabeth Manullang
P Esmeralda Anjelita Marpaung
L Fabian Rizki Afrelly
P Farida Ades Davilla
L Fitrah Iskandar
P Gabriella Annabel Napitupulu
L Justin Adriano Sianturi
L Kaffel Caniza Winarno
L Kenzie Khaizan Al Qaasimy
L Lanang Ahwaz Sastra
P Lasri Pane
P Leticia
L Muhammad Rafqy Effendy
L Muhammad Salman Al Rasyid
P Nayra Cahya Putri
P Nirwana Sari
P Novita Ardianti
L Rafli Andadinata
L Ray Nanda Togatorop
P Regina Nursyafitri Budiarto
P Safira
P Selfi Juliyana
P Syifa Irawani
P Thahara Tadzkira
P Tifanny Aulia Elfitri
L Vito Panji Justitia`,
"X HL 9": `L Alief Raysha Riva
P Anggi Meysha Putri
P Annisa Faiqah
P Arini Luciyana
P Arkalya Kinar Kasih
P Asyfa Ramadayu
P Atiqah Haura Alini
P Azra Alzillah Anugerah
L Baihaqi Alhafizh
L Daniel Nopriyanto Siallagan
L Dzakwaan Hizam Lubis
L Exsaudi Arion Siahaan
P Faiqa Zahra Atma
L Farhan Fermanto
P Fitri Rahma Dani
P Gracia Stevani Chen
P Grety Aprilia Simamora
P Harumi Ayane
P Humaira Almira Abrar
L Kevin Aqlan Faiz Aditama
P Khaira Adam Kusuma
P Lailatul Nazwa Khairunnisa
P Mawar Amelia Sihombing
P Mezzaluna Gloria Mandey
P Nur Bayti Hayatun
L Prabaswara Brilliantino Permana
P Priskila Putri Valentin
L Rayhan Cheza Andrean
P Rinalty Dinia Love
L Rizky Aditama Surendes
L Rovences Yosavat Situmeang
L Saddam Akhori Kurniadi Yusuf
L Sayyid Fadhil Arrahman
P Sekar Kayyasah Ufairah
P Setia Fourtuna Simatupang
P Sheyla Artha Falila
P Tanysha Anindya Ramadhani Gunawan
P Yesika Carolin Siahaan
L Yosia Gaddiel Sitohang
P Zaskia Mellyca`,
"X HL 10": `P Adelina Putri Salsabila
P Adventnia Novita Kristiani Panjaitan
P Aira Adha
P Aisyah Ramadhani
P Al Alifia
L Andhika Afriansyah
P Anisa Rahmadani
P Aprilia Diaphenia Ri Sihombing
P Ardinda Putriana
L Arief Saman Wijaksono
P Asyifa Sahra Soleha
P Azzahra Ahsa
P Clara Adelina Agustin Purba
L Daffa Putranya Fardian
P Fahema Afsar Ara
P Fakhirah Shakila
L Fauzan Almer Aulia Muhludin
P Felicia Putri Arnelia Tampubolon
P Feva Meisa
L Firas Adya Fisabil
P Grace Withy Prayer Siahaan
L Javid Fasya
L Messi Maulana
P Mesya
L Muhammad Rayhan Fahri
L Muhammad Rizki Aulia Asyhif Wijaya
- Muhammad Zidane Saputra
P Nancy Octavia Abigail
L Pardomuan Elkana Sinabang
P Putri Kumairah
P Qaisara Ghaisani Heryadhi
P Qirana Adevia Putri
P Quensha Aldila Frischa
L Raja Khairil Azizi Benzema
P Rajwa Asyila
P Shindy Aura Harahap
L Syauqi Taufiq Qurrahman
P Syeikha Salwa Humaira
L Togi Pangihutan Hutagaol
P Yeskia Tesalonika Simanjuntak`,
"X HL 11": `P Adel Rafifah Indriyani
L Adrian Ibrahim Farras
P Afifah Sinuraya
L Ahsan Rizqy Ramadhan
L Ali Tondi
P Almira Putri Aleya
P Angellina Susilo Putri
P Anis Lulu Fadilah
P Batrisyia Syakira
L Daffa Alfarizi
P Dina Purnama Harahap
P Faeyza Armainur Raisha
L Fahri Mardiyansyah Putra
P Feby Yanti Kasafani
L Geraldo Carlos Pasaribu
P Grace Mika Tobing
P Hana Ayu Ramadani
P Hana Humaira
L Jeriko Manuel Purba
P Lady Gracela Tambunan
P Louisa Adilha Fransisca
P Monica Feby Natasya
L Muhammad Rizki Herdiansyah
P Nabila Azkiatul Karima
P Nadhifa Az Zahra
P Nasywa Maganda Ikadiona
L Nazree Khadafi
P Nesy Maria Tampubolon
P Nomi Febrianti
P Priscilla Renata Simanjuntak
L Rakha Oktara Aldeba
P Rani Juliana Sigalingging
P Rista Natalia Simanungkalit
P Samara Dwi Ananda Sembiring
P Satria Nurliza Sihotang
P Shintya Rebecca Siregar
P Vierra Puteri Velencia
P Yoselin Ayu Ramadhani
L Zaki Fadlur Rahman. M`,
"X HL 12": `P Adelin Fyka Yuniar
P Adilla Quinnsha Zulatifah
L Afif Mubarak Arnes
L Akbar Mulki Renziro Drafi
P Alya Assyura
P Amara Izzati Shafiqa
P Annida Chabiera Rahma Hartono
P Assyfa Naila Putri
L Choky Panjaitan
P Dytha Anggelina Saragih
L Dzaki Khairullah
P Ester Stefanny Sianipar
L Fakhri Naufal Lesa Laode
P Fara Zulfiyanti
P Hanna Zatasha Evlyn Situmeang
P Indah Ramadani
L Irfan Bintang
L Justine Rafael
P Maria Anabella Siringoringo
L Moreno Alpiero Panhar
L Muhammad Ar Razi Ramadhan
L Muhammad Haidar Fajrullah
L Muhammad Khalaf Arif Maulana Zelmi
L Natanael Kaya Lumbantobing
P Novita Napitupulu
P Nur Fitri
P Putri Ayu Novita Sinaga
P Raesha Dwi Ariendra
P Ratu Claudia Lafatunnisa
L Raytama Immanuel Silaban
P Safa Angelita
P Sarah Marsa Nathania
L Sayyid Ibrahim Sartely
P Shakynna Aura Febria
P Steffi Tay Yanling
P Syakila Putri Dianda
P Winda Verlita Tambunan
P Zahirah Aisyah Putri Pratamura
P Zizi Aprilia Mahendra`,
"XI HJ 1": `P Adiibah Aulia Zahra
L Ahsani Alwan
P Alifah Citra Puri Syafila
P Anasthasya Mewardhyra Lase
L Andreas Sangap Bastanta
L Bachtiar Ibnu Sinaga
L Boy Silitonga
P Chelsea Yohana Silaban
P Cut Famelin Rahmadani
P Dame Delfina Simbolon
L Danendra Ramadhan
P Diandra Vira Aprilia
P Dianti Araisya Putri
P Elmira Yazmine Miharto
L Fachry Athayya Ramadhan
L Hafiq Alfaizi
P Hanifah Al Humairah
P Haqqu Mazaya Sribasuki
P Hizsyaura Qaryra
L Johan Alfred Nababan
P Keilha Afifah Mufthi Fhatarani
P Khafifatul Aulia Nikmath
P Khanza Lautdhea Sukrisno
L M. Daffa Putra Mulia
L Martinus Primo Gunawan
L Muhamad Naufalino
L Muhammad Ayatullah Bimantara
L Muhammad Harras Alfarisi
L Muhammad Tamalaki Syamsil Bahya
P Naurah Nurin Imanina Daulay
P Nikita Agatha Sitompul
L Niko Saputra
P Queenby Tivanna Handoyo
P Rahma Dini
P Rasikah Suma Puspita
L Rifaldi Walver Manihuruk
L Ruben Darmanto Simanjuntak
L Saul Hudson Siahaan
P Shafarina Awaliyah
P Shifa Dwi Annisyah
P Yanneza Kartini Rangkuti
L Yodha Danadyaksa
L Ziad Muhammad Abdillah`,
"XI HJ 2": `L Abdullah Shofy Mangkubumi
P Alya Maharany
P Aura Rahma Ramadhani
P Aurelia Ivana Anindya
P Chelsi Widelia
P Daula Zaskia Santoso
L Dava Alamsyah
P Dayana Mayang Sari
P Desti Rahma Auliya
L Desviano Ronaldo Al Hasani
P Devinka Arabella Sidabutar
L Dilkana Bangun
P Filzah Aqila Hilman
L Gerd Sion Marthin Tampubolon
L Giveson Ferdinan Simorangkir
L Ilham
L Jabar Ananda Sutrisno
P Keisha Farras Azhar
L Kevin Kesuma
L Muhammad Fauzi Rafie
L Muhammad Kamil Omair
L Muhammad Nur Ahadyah
L Muhammad Rizky Pratama
L Muhammad Teguh Pratama
P Nadira Fellah
L Naufal Zuhdi
P Nayla Feby Maulida
P Nazwa Mawar Simatupang
P Ogivia Ixchel Manurung
L Paulus Ginting
L Pranata Hamonangan Situmorang
P Putri Azura Razy Qoiry
P Qhaira Zalfa Naysilatabri
P Qhiran Frista Birrul Walidain
L Rafi Akbar Maulana
P Rahma Maulidya Hasibuan
L Randy Reyndra
P Syalimar Qania Prihatini
P Tri Veligia Lovenia Bakara
P Vivi Al Arif
P Welda Yohanna Pasaribu
P Wichita Salma Nuaina Ibraya
P Widia Safitri
L Yossy Fahri Anggara`,
"XI HJ 3": `P Alicia Illumina Larasati
P Alifi Kayyisa Rifa
P Ameera Ghaisani Zafeera Lubis
P Arif Saputri Simamora
P Arum Janeeta Putri Akeka
L Christian Michael Pratama Gultom
P Deazy Aurin
P Desmitha Putri Arianti
P Dinda Ayu Dhiresworo
L Dio Panca Prima
L Hafidz Lutfi Putra
P Hanifah Rianawati Dasopang
P Humaira Rahadatul Aisy
P Intan Nabilla
P Jasmine Apriliana Br Sembiring
P Joyce Aprilia Hutapea
P Kenzie Keyzilla Martha
P Kristiany Felicia F Silalahi
P Latifah
P Laura Olivia Simanjuntak
L M.Yaser Alvaraby
L Mario Christian Situmeang
L Muhammad Abyan Syauki Athallah
L Muhammad Fatih Sajid
L Muhammad Iza
L Muhammad Khairul Azzam
P Nabila Thayyibatunnisa
P Nayla Oktaviani
P Nazwa Melysya Putri
P Princessa Urantia Dallymartha
P Rafkania Agnashira Sugiharto
P Rosa Tri Junianti
P Shania Marwa
P Siti Aisyah
P Sri Hasna Sinta Marito Panjaitan
P Syafira Anaya Putri Junaidi
P Syakiilah Ratu Yuana
P Tintania Zilvia Putri
P Umairah
P Viona Felicia Sibuea
P Waode Aisyah Meilytania
L Yusuf Hizkia Tandi
P Zifa Lakeisha Nst`,
"XI HJ 4": `L Adelio Luthfie Rafif
L Agthama Putra Guchairi
P Aisa Selvira
P Ameera Thalita Sakhi
P Azzahra Nadhifah Fikriyah
P Bernike Gurusinga
P Clara Radiah Citra
P Clarissa Carenina Bangun
P Cut Nazla Fulizar
P Cyntia Nuvus Fitri
L Danish Difiranda Simarmata
P Dara Sry Wahyuni
P Dhiya Mazaya Putri Syahril
P Diamenti Eva Simangunsong
L Fardhan Berkah Afrelly
P Fathia Amanina Damyathie
P Fransisca Clazio Hutabarat
P Hanifah Ramadhani Azvis
P Intan Putri Salsabila
P Jesica Arumi Alicia
P Julia Christian Sibuea
P Julyane Indri
P Karina Melati Kanza
L Keanu Rifai Rizqi
P Keiko Maritza Shaputri Yogaswara
P Ladies Lovely
P Lois Eunice Ilela
P Makanatul Ngilmah
P Meisy Delya Iskandar
P Michelle Gretha Welly Banjarnahor
L Muhammad Farid Amardiyab
L Muhammad Rizq
L Muhammad Rusydan Abdul Qohar
P Nayla Novriyanti
P Nizla Qir'ana
P Octha Ardina .M
L Rafael Ibrahim Zain
P Renth Refifanea Kampong Gaghansa
P Roro Putri Carissa Pramwesty
P Saila Syakirah
P Syawalina Trisna Fitriani
P Zaskia Hurun'iin
P Zhaskia Alva Rhamadani
P Zhivana Letisya`,
"XI HJ 5": `P Abigail Elsyhana Tarigan
P Aira Putri Maharani
P Alisha Putri Wibowo
P Almira Zahra Ramadhani
L Andra Maulana Lubis
L Ariqul Isyraf
L Aufa Ega Suwito
P Azzura Jasmin
P Callysta Ariendra Kusuma
P Claudia Sinedua Sitompul
L Cleonseptian Purwaprayoga
L Cristhofer
L Daffa Hanania Chesar
L Evan Salomo Sinaga
L Fajar Tri Oktaviano
L Farras Almer Abiyu
L Fathan Graha Admaja
L Fathir Riskyriadi
P Finesya Lumban Raja
L Gabriel Kevin Saruksuk
P Haura Syifa Amani
P Humaira Sandrina Rivach
L Josua Togi Parmonangan Sitinjak
L Juan Verosi Pardede
L Kalistus Abetnego Naibaho
P Khanza Raissya Susanto
P Lettyzia Fitri
P Lindha Toi Tee Leen
P Lydia Grace Sintanauli Lumban Tobing
L Matthew Dave Butar Butar
P Mira Nuraini Hutagalung
L Muhammad Eltayeb Adena
L Muhammad Farhan
L Muhammad Rifqi Fahreza
L Mujahid Ferda Firas Al Hakim
P Queen Shaffira Permana
P Siswei Meei
P Siti Nadhira Aliandra
P Syafa Anindhita Ariyanto
L Teuku Muhammad Azwar Hamzah
P Tiara Putri Febriani
L Varel Reynaldi Hutabarat
P Yola Karen Tambunan
L Zaid Ahmar Hakim`,
"XI HJ 6": `L Alfajhar Nurvayz
L Alif Azlan Mufik
P Anindya Regita Cahyani
L Ariko Claudio Pardede
P Asyifa Gendhis Shafiyah
P Azhilah Niken Qhaliyah
L Bagas Tulus Anakta Sidauruk
L Bayu Rizky Ananda
P Cantika Bintang Belyardi
P Clara Diva Enjellita
P Cleoputri
L Daffa Kawindra Prasetiyo
L Devin Gilbert Hilardhino
P Elsa Carolina Tambunan
L Evan Fadhilah Ramadhan
L Gerard Nimrod Panjaitan
P Gisella Annisa Putri
P Gita Ohanna Agatha Siagian
L Ilham Ariel Padila
P Janeta Quin Amyra
L Josep Tanra Janmalo
L Judika Bagas Immanuel Sinaga
L Kenzorio Alif Putra Pramodhian
L Kevin Henri
P Laura Angelica Manik
P Liana Khatam
L Mahendra Vidi Aditya
L Moreno First Ladyano Damanik
L Muhammad Gempar Alam
L Muhammad Wishzard Rasya Abiwa
P Naina Septiana
P Natasya Zhiva Maharani
P Radisty Audrey Ardhia
L Rafi Kevin Rizky
P Raissa Luthfia Mukti
L Raymond Mahardika
P Reanlin Syifatima
P Rifkana Khoirun Nisa
L Sabri Nugroho
L Sugianto Ramadhan
L Sulthan Aiman Wicaksono
P Viona Calista Hasibuan
P Yuly Kezia Tambunan
P Zhafirah Zalfa Athirah`,
"XI HJ 7": `L Abdullah Halim
P Adellia Putri
P Ahda Mawaddah
P Alya Devina Nur Rizky Andima
P Annisa Mazlan
P Ariny Medina Assakinah
P Aulia Syahrani Sihombing
P Belinda Felecia Simorangkir
P Cintarin Gafreta Pongty
P Dewi Intan Safitri
P Evelyn Maria Revalina Napitupulu
P Febyana Nur Andieni
P Frisila Vania Sipahutar
P Frisya Putri Budiman
P Gavrila Simamora
P Indah Juwita
L Jeremy David Eliezer Andias
P Jihan Anggraini
L Kenzie Esa Excellentdya
P Kezia Brigita Sihombing
P Khalisa Nashifa
P Khansa Jauza Azzahra
P Khusnul Khotimah
L Lucky Ramadhan Simanjuntak
P Luthfiyyah Gustian
L Muhammad Akbar Putra Dermawan
L Muhammad Dzaky Ramadhan
L Muhammad Fahry Lorenzo
L Muhammad Haqqi Mubaarok
L Muhammad Khairul Arnavat
L Muhammad Zulfikar Marli
P Mulyarahma Velysha
P Nabila Fitria Solehudin
P Naurah Farhanah
P Ni Putu Olivia Juniariska
P Nisrinadhifa Assyifa
P Raeesa Riskya Putri Wicaksono
L Raffa Aulia Iskandar
L Rhelovely Rhevaldy Rhemrev
P Ria Efriani
P Salsabila Saputri
P Tessalonika Cahyani
P Ziva Adellia`,
"XI HJ 8": `L Adhitya Azka Ararya
P Afifah Rahma Deskyana
P Aisyah Putri Dinda
P Amalia Adysha Putri
P Angel Lina Tarihoran
P Apriliani Nur Azizah
P Aura Ramadhani Hagustin
L Axsel Anugerah Simanungkalit
P Cantika Zaskia Putri
L Chris Agung Pratama Sitompul
P Dian Renata Sempurna Sihombing
P Dinda Kanya Dewi
P Evalina Kasih Nainggolan
P Farah Nabila Nursania
L Fazar Ramadhan
P Ferdia Novriesi
P Giselle Santa Jhosephine Gultom
L Holmes Maruli Ara Simamora
P Jeann Lovely Pangaribuan
P Kasih Syalomita Siringoringo
P Laura Belisa Nasution
P Liza Rediska Marbun
L Mochammad Mirzha Putra Setiawan
L Muhammad Aichal Aqiqi
L Muhammad Zaidhan Khavia
P Najwa Aviva Childasari
P Nikita Admy Br Sitompul
P Nova Mariza
L Perwira Simbolon
P Prytha Tria Corin Aritonang
L Putra Rahmad Danel
L Radika Luvian
L Raka Ahmad Brilliano
L Regan Athaillah Akbar
P Revalina Cantika Pratiwi
L Riskyano Mulyawan
P Rismaulina Simanungkalit
P Selvi Stephanie Sitinjak
P Sri Lestari
L Steve Hanson Simanjuntak
L Wise Putra Nainggolan
P Zahra Juniarta Nainggolan
P Zefanya Christina Aritonang
P Zhalikha Niffira`,
"XI HJ 9": `P Anggi Aryani Saragih
L Arlan Saor Marsudi Pardede
P Avril Falen Pratiwy
P Chrisna Adelia Rajagukguk
P Christin Rosalina Panjaitan
P Dhea Kaamiliyya
L Dikie Fajar Rizkita
L Doni Handa Saputra
P Elsaday Aura Aulia Lubis
P Endyta Rizkyana Ramadhani
L Faizul Akbar
L Farrel Radithya Firman
P Fenny Angelita Manalu
P Gabriela Maria Feodora De Hewot
P Gesty Blessarmi Hutagalung
P Gladis Nur Adinda Oktavia
P Hafsah Billah
P Hong Shu Ching
L Irsyad Arya Maulana
L Khelvin Saputra Simanjuntak
P Maylaf Afra Nazrana
L Michael Valentino Sitopu
L Muhammad Dzaky Al-Farizi
L Muhammad Iqbal Al-Masykuri
P Nailah Afifah Najwa
L Newman James Tampubolon
L Okqueen Goklas Champion Sihombing
P Olifia Junia Adrila
P Putri Ramayani
P Rachma Wati
L Raja Ahmad Danil Hadiy
L Reiguel Jesrel Samosir
P Reva Oktalina
P Sabrina Derizkika Aura
L Sammuel Sem Yoktan Samosir
P Septia Suci Ramadani
P Steffie Yuliana Filadelfia Nababan
P Syura Kayla
P Vanesa Olivia
P Viona Fitri Najmi
L Yoel Pramana Sitorus
P Zahra Tsyakhira Putri
P Zivanna Silitonga`,
"XI HJ 10": `L Adibat Toat Ariansyah
P Aira Putri Aqilahsyifa
P Cantika Yulia Amanda
P Chintya Fiky Ramadhani
L Daffa Rizki Febriansyah
L Darius Timotheus Siregar
P Dewi Mercyana Turnip
P Dinda Intan Purnama
L Eksel Alexsander Mambu
L Fahry Abdi Syakir
L Fardhan Herdiansyah
P Faza Azzahra Ramadhani
L Fernandus Pasaribu
P Frischila Cicilia Asnat Pandie
L Gilang Putra Ramadhan
L Jesua Riski Sinulingga
P Jihan Nazifah Putri
L Jimmy Efriano Pangaribuan
P Jovanka Keysia Violina S
L Joy Newston Tampubolon
P Keyla Latisha Dinda Aditiawan
P Khayla Almira
P Latifa Ramadhani
P Maria Fransiska Silaban
L Marvel Aditya Utama
L Maskha Zildan
L Muhammad Darrell Sandya Damanik
L Muhammad Rafael
L Muhammad Rifki Rafly
P Nabilla Tiffany
P Nadhira Najwa Syahlan
P Nafla Reikanissa
P Nayla Wijaya
P Nazua Fadilah
P Nur Tiffany Shalshabila
P Nurainy Rafah Al Gauts
P Ovie Grasella Manalu
P Priscila Agusty Sihaloho
L Radja Putra Simangunsong
L Reihan Rizky Nur
L Rhevan Brema Pratama Ginting
P Sandra Citra Kartika
P Syelbi My Fatihah
L Yosep Gembirawan Pardede`,
"XI HJ 11": `P Abigail Bintang Argadiau Tambunan
P Aini Wirdatul Kautsar
L Akbar Sanzani Harahap
L Antonius Brain Heart Sinaga
L Arzyedo Sadewa Kleyco Yuvilomindo
P Carissa Putri Dahayu Assyifa
L Christiano Yeri
P Cresya Vanesa Tambunan
L Daniel Fransisco Siburian
L Darmawan Nur
P Devina Wiyani
P Falya Mautiha
L Habib Aziz Tiansyah
L Herman
P Juliyanti Permata Hati Sihombing
P Kanaya Kayla Azzahra
P Kayla Putri Naliyah
P Kezia Christiara Rajagukguk
P Khairun Nisyah
P Maria Theofani Sinambela
L Mohammed Rocky Perdana
L Muhammad Alfi Syahrin
L Muhammad Firdaus
P Nadhira Yasmin
P Nadira Nur Aini
P Naswa Tri Ananda
P Natasya Kanaya Evelya Nainggolan
L Naufal Azka El Khairi Radithya
P Novita Sari
P Nurul Fitriyah
P Oryza Maulidya
L Qowiyyan Rifai
P Queenisa Zafira Nazmin
L Raffa Zahy Dwi Abrey
L Rafif Althaf Daifullah
L Riskiaditia Herlambang
L Romi Rafael Abadia Malau
P Sharen Valencia Manihuruk
P Suci Afiqah Ar-Raihana
P Syarah Sandoria Putri
L Tantony Sibarani
P Vanesya Almira Putri
P Vilda Eria Salsabila
P Zahra Rachmania Hasanah`,
"XI HJ 12": `L Agung Wahyu Pratama
P Aira Oktaviani
P Aisyah Nurhasanah
L Al Zaelani Rozaq
P Alfi Nurul Falah
P Alila Shofia Purnawan
P Anindya Sherin Kumari
P Asyifa Nayla Rinaldi
P Aurel Cintya Manurung
L Azhari Hasbi
L Binsar Hasudungan Leonardo Pasaribu
P Catherine Oktora Madelane Rizal
P Cessy Wulandari
P Dinda Anggia Mecca
P Emilia Rotua Helena
P Fatimah Azzahra Ramadhani
L Fawwas Tri Firas
L Fernando Gautama
P Intan Fiqriyatul Azizah
P Jihan Makaila Fakhirah
P Justitia Khairan Tri Ramadhani
P Kasih Martauli Manik
L Leonn Nainggolan
L M Nadhif Zaidan
L Muhammad Syahreza
P Mutiara Sevia Andhini
P Nadifa Nur Syaidah
P Nani Charris Wijaya Panjaitan
P Natalia Anggelina Wensisca
P Nathania Livia
P Nida Khairunisa
P Rabitha Auzura
P Rahma Aulia Tsalisa
P Ramayu Gita Lestari Gultom
P Risnawati Aritonang
P Rita Hotmauli Simanjuntak
P Rossa Chyintia Putri
P Sa'idatussyamsi
P Sabrina Artha Dini Bijaqis
P Sartika Afrilia Siregar
P Tengku Ariella Khansa Zakhira
P Vebby Vionanda Bangun
P Yeni Silviana
P Zefanya Letisha Sihombing`,
"XII HT 1": `L Abdillah Bariq Zainudin
L Adrian Ibril Mustain
L Ahmad Fadli
P Aisyah Putri Mustofa
L Aloysius Bayu Nugroho
L Andhika Ranggana Putra
P Angela Naomi Octavia Sinaga
L Anggi Hatorangan
L Arrahman Rizki
L Asyraf Aditama
L Axell Ian Hezeky Simanjuntak
P Bunga Cinta Desfranza
L David Noel Adonia Sinaga
P Davina Adinda Putri Prasetya
P Deviana Yulita Askar
P Dhea Trisna Rahayu
L Dhika Laiza Dalimunthe
P Eirene Rezkida Samosir
L Endra Reifaldo Syahputra
L Farhan Syahda Bintang
P Geraldine Sitanggang
P Gracia Mutiarani Tambunan
L Irfan Abqary Vinandra
L Irhash Arsyad Marin
L Johannes Armando Damanik
P Keysha Meharunisa M
P Laquisha Arinda Anindya
L M. Iqbal Pratama
L Mario Torres Pardosi
P Miska Ozora Raihana Irsan
L Muhammad Rasya Riandhika
L Muhammad Riski
L Nicko Mahardika
L Nofrian Nugrah Rongrean
L Owen Immanuel Siregar
P Raisa Ma'ayyis
L Revan Surya Saputra
P Risni Alifia Anggraini
L Rizky Ilham
P Rutsella Sinaga
L Sebastian Bravo Simanjuntak
P Tenri Aisyah Jameela
L Verdinant Ananda Sugianto
L Yehezkiel Anggi Sitohang`,
"XII HT 2": `L Abdul Zaki Amrulloh
L Abhinaya Zhorif Rahmat
L Abner Godlife Siringoringo
L Achmad Vhicry Zikrillah Ariyanto
L Alif Baihaki Malik
P Amanda Keisya Aurelia
P Amirah
L Andra Reifaldi Syahputra
L Bayu Dafa Febriansyah
L Cahya Kristoper Simanjuntak
P Cerelia Davina
P Chelsea Ruth Yessika Marpaung
L Cheyfron Andriwan
P Christina Anggraeni Nadeak
L Daniel
L Darsyah Alnov
P Eunike Ozora Girsang
P Faradhila Ramadhani Harman
L Ferdy Thariq Sinambela
P Haniva Mutiara Aisyah
P Janet Jennifer Hutagalung
L Jose Gilang Panjaitan
L Josua Sihombing
L Juan Rifqi Syarezha
P Khadeja Putri Nasution
L M Fadhil Wiryadinata
P Marchanday Jocelyn Titahena
P Mei Lia Tan
L Muhammad Arfan Domili
L Muhammad Azzam Inayatullah
P Nadiyah Althafunnisa Harifuddin
P Neza Nazihah Tan
L Nico Wijaya Pratama
P Oxy Wyene Marinda Sihotang
L Parrel
P Putri Riswati
L Raffa Geovani Putra Husni
L Rahmat Nugroho Affandi
L Rasendriya Beno Arya
L Rava Dwiva Syahputra
L Reynard Rafael Pasaribu
L Satria Kusumanegara
L Timothy Jeremy Pohan
L Willy Cristian Rusianto`,
"XII HT 3": `L Aby Vega Prageninawa
L Akmal Nufail Ares
P Allyssa Naura Rizqie Susanto
P Amira Elysia
L Andhika Septian Ferdiansyah
P Annisa Farah Rahmatillah
L Arjun Nadyra
L Bariq Fadhal Adhimukti
L Bintang Rafif
P Blezintha Cahaya Anastasia
L Cristianno Tambunan
L Dhanu Galih Syahputra
L Dimas Rinawan
P Dwi Apriliani Oriza
L Dzaky Zayyan Fernanda
L Fatih Husein Al Bana
L Freddy Brisjon Hutabarat
L Giovani Yosafat P
L Hadip Belyan
P Hizkia Gracellyn Benita Siahaan
P Hutri Ayu Fatrecia
P Intan Satma Situmorang
P Irene Meitner Sihombing
L Janri Hasudungan Simbolon
L Jeremy Radoti Simanullang
P Joy Gracia Inri Tobing
P Kayla Dysya Ivanovna
L Kenzie Aryasatya Manurung
P Lia Apriliyani
L Muhammad Faiq Mubarak Syahputra
L Muhammad Ferdiansyah Ramadhan
L Muhammad Mufid Hakim
P Nafiah Amanta
P Nesha Gavrila Siregar
L Rakha Sakhi Bintana
L Rendy Halasson Simatupang
P Salwa Neveli Daestina
P Shazia Nailal Husna
L Varly Rafif Alfahrisi
P Virny Morany Tambunan
P Yessa Aprilia Fandra
L Yudistira Annas Din Haqi
L Zaky Muklis
L Zulfadli Muhammad`,
"XII HT 4": `L Abiansyah Abelji Putra
P Amanda Palintine Anastasia
P Azura Ulfa Mardiyah
P Berkat Kezia
L Daffa Khairon Majid
L Devon Juandra Sembiring
P Dorpika Dote
L Fachri Arham Wijaya
L Farel Fauzan Iskandar
L Farhan Pratama Ruswanda
P Fiki Uswatun Hasanah
P Gabriella Grace Natalie Rosewidhyatmoko
L Gilang Fadhilah Surya
L Ikram Ahmad Dahlan
P Intan Meilany
P Kharisma Angel
P Linda Aulia
L Mike James Tanding Tampubolon
L Muara
L Muhammad Aufa Al Zikra
L Muhammad Padlni
L Muhammad Zaki Alim Yosety
L Muhammad Zibran Rifa'i
P Najwa Latifah Az-Zahra
P Novita Nuraini Sihombing
P Nur Hafiza
L Rahmat Bintang Samartha
L Rakan Nafis Maulidi Saputra
P Regina Juniati Pangaribuan
P Revanna Putri Harlina
L Riyan Shadira
P Sesilia Lusiana Sinaga
L Silwanus Barnabas Marpaung
L Subastian Nur Utama
P Wulan Syafira Tamba`,
"XII HT 5": `L Alfian Syafarullah
P Alfira Istiqomah
P Amanda Dwi Arifka
L Andre Matias Sianipar
P Audrey Barek Syahputri
L Bilal Nur Fazrin
L Bima Sakti Harahap
L Bintang Panca Putra muridnto
L Bintang Syakila
P Clarissa
L Dika Delena Putra
P Dinamaria Manullang
L Endar Nuriansya
L Fahri Naufal Danial
L Ginzo Triton Dalipang
P Haruko Ayane
P Iin Asmaningsih
P Intan Elysabet Siregar
P Jeni Saibori
L Juan Febrio Silitonga
P Kayra Kathleen Angelica
L Muhamad Miftah Chudin
L Muhamad Willy Pribadi
L Muhammad Aftar Qaisar Rafaldo
L Muhammad Dzakwan Ziyaadurrizieq
L Muhammad Fernando Massya
L Nico Adithia Sijabat
P Nur Asyfa Syalsa Nabila
L Raafi Alam Syah
P Rafifah Farras Sakhi
L Rhasya Anil Dahwan
P Riski Putri Amanda
P Sazkia Angrayni Hasibuan
P Siti Ayla Ridha`,
"XII HT 6": `L Aditya Putra Waralolo
P Afiqah Putri Nabilah
P Aisyah Puteri Wijaya
P Anisah Sakhi Salsabilah
P Annisa Zharifah Candra
P Artalyta Suryani
P Astrid Charissa Johan
P Cahya Aierha Meithasyah
P Christine Febyola Nababan
L Diki Tri Ardiansyah
P Dyta Ayu Acnesia Silalahi
P Ell Dwita Febryanti Aulina Sihombing
P Febi Dwi Ningsih
P Febi Dwi Syaputri
P Fiorenza Kanaya Andi Putri
P Fisca Sari
P Gifirsty Harpenangel Tandisau
P Havizah Rizkia
P Hosianna Sion Argadiau Tambunan
L Ibrahim Mufiid Fadhli
P Jessica Angeline Nadeak
P Jihan Iga Ananda
L Kevin Samuel Sinaga
P Lidya Mori Sinaga
P Nadhifah Aulia Bahtiar
P Nayla Aisyah Putri
P Nayla Lutfia
P Nur Azizah Al-Has
L Puguh Kuncoro Jati
P Queen Fayza Avindra Nuryaislam
P Quennaira Ressel
L Rafa Aditya Rizal
L Raihan Mahesa
P Raisya Almira
P Sasha Berliana Putri
P Savaira Nada Hernanda
P Shafina Aurellia Azzahra
P Siti Amalia Jelita Mulyani
P Tasya Manurung
P Weny Rosetan Binti Tan Cipto
P Wulan Ramadhani Langoday
L Yazidul Fikri
L Yespan Brajamars Simanjuntak
P Zizi Putri Batrisya`,
"XII HT 7": `L Ahmad Renaldi Aryanto
P Aisyah Tungga Harnum
L Aldi Fachri Ghaizan
P Andi Bulan Novianti Solihin
P Ayu Kamila Salsabila
P Chelsy Abigail Andrea Bawole
P Cindy Rahmadhani
P Cinta Zahratul Shita
P Citra Lufiya
P Danisya Aurelia Athaillah Luthfi
P Delima Auricha Yosefha
P Elfira Khairani Paruhuman Nasution
L Fahry Rizki Saputra
P Fanny Fazila
P Febry Anggraeny Tampubolon
P Feodora Belfry Berylda Tamaela
L Gerald Sitanggang
L Hildan Ary Pahlawan
P Kayla Umulkhair.Z
P Keisha Vivia Mufthi Ramadhani
P Keisyah Almaira
P Makrina Natasya Betir Yahzeis
P Maria Putri Familia Situmorang
L Muhammad Bagas Rahmatullah Putra Juwardi
L Muhammad Dirgham Ramadhan
L Muhammad Sultan Alrasyid
P Naifah Eliza Fitri
P Nanda Rezkya Emilza
P Nathasya Nur Hamidah
P Nida Ulhaq Nur Syifa
P Nursyakira Wandini
P Oculist Tisa Intan
L Okta Muda Siregar
L Raditya Rafif Ramadhan
P Rafiqa Nayla Dawani
P Salsabila Tri Wulandari
P Sayu Kirana Sakinah Gayatri
P Sesilia Natalia Gultom
P Syarifah Aulia Razita Fatin
P Thiana Titania
P Ukhfi Imroatu Naima
P Vexia Davinci Malau
P Vici Lindriviani
L Zaky Muntashir Akmal`,
"XII HT 8": `L Ahmad Wahyuddin Daedad
L Algiz Attaya Fikriandi
P Arfitkah Rahmadani
P Aulia Istiqomah
P Aura Yasmin
P Aurel Cheline Ayu
P Auwra Latiffah
P Ayla Zalika Qurrotu'aini
P Azzahra Salikha Intani
P Callysta Tribuana
P Cantica Angeline Simanungkalit
P Celsi Najiha
P Chelsea Alifia Azzahra
P Chintya Faiza
P Chloe Kinaya Anggreiny
P Cut Azzahra Salsabiela
P Dhia Nafisa Ulhaq
P Diandra Salsabila
P Emilia Sadira Zahir
P Erwina Dwilestari
P Fadilah Oktavia H. Ga'a
P Farras Najla Ahfa
P Fresia Manik Febi Patulak
P Izzatu Nafsiah Fitri. C
P Jessica Anastasya
P Keylla Risma Sitanggang
L M. Mahatir Abdi Negara Losemito
L Muhammad Fitra Yansyah
L Nauval Al Ghifari Sastranegara
P Nayla Aisha Novandi
P Nayza Aulia Zhafirah
P Putri Elizabeth Nainggolan
P Rahsyifa Khansa Azizah
L Raja Muhammad Hafizh Zuria
P Rajwa Dea Kusuma
P Rieke Angelia S
L Rifan Sufriya Himawan
P Sabrina Cinta Farcia Samosir
P Salsa Trisya Meicha
P Syaira Kamila Husna
P Syarifah Aisyah
P Trichia Novella
P Tsurayya Reza Noorilmy
P Yohana Olivin Naibaho`,
"XII HT 9": `P Alda Christiani Natalya
P Alitha Aldithya
P Alma Deya
P Almira Fahrunnisa
P Aniswatuzzahra Adita
P Annisa Nuraini
L Aqila Praja Setiawan
P Athaya Ramadhani
L Awen Malau
L Daniel Leonell Markus Purba
L Dhani Arifin
L Dimas Dwi Prasetyo
L Dimas Maulana
P Dzakira Berliana Putri
P Faraas Raihaanah Zahra
P Hana Fakhirah Shakila
P Hanna Cinta Laura Br Simanjuntak
P Haura Putri Ramadhani
P Jessycha Stefhany Panjaitan
P Jihan Afifah Sonda
P Joys Theodora Maromon
P Kayla Az Zahra Prasetyo Putri
P Keyla Aznisah
P Keyzia Alifah Nur Fatin
P Lauren Octavia Nadeak
L Lintang Prayoga
L M. Zulfakhri Akbar
L Muhamad Illwa Aldiyansyah
P Nayla Nuur Syaahidah
L Padlan Januarta Pratama
P Pretty Ephiphania
P Rahmi Askia Welva
P Raja Thazriawyah Zainatul Ikhfa
P Ratua Adinda Nababan
P Rava Feodora Kellystin
L Rhandy Borsian Daniel Panjaitan
P Rizmanda Rangkuti
P Safira Adisti Rafsanzani
P Sofiya Nabila Maisarah
P Sria Foi
P Syafiqha Syamiathul Amri
P Syarifah Nysa Zaira Hami
P Teresia Sri Sulastri Sinaga
P Zahra Agustine Putri`,
"XII HT 10": `P Ade Nur Rahmania Dewi
L Agustianda Ramadhan
L Alfian Rahwidyan Ihsan
L Ali Fatah Ma'arif
P Andi Putri Indah Lestari Adzan
L Anugrah Gultom
P Aurel Suci Ramadhani
P Bilqis Afifah
L Brady Moca Golioth
P Caroline Anasthasya Haloho
P Cikal Ayu Rinastiti
P Desfina Rizky Aulia
L Devon Satria Alviano
L Dimas Maulana
L Gamiel Samy Andhika
P Hanna Bunga Sidabutar
L Isaac Gerar Simamora
P Juanti Putri Simanjuntak
P Kasih Stefani Hutasoit
P Keiko Gizza Shaquila
L Kevin Langit Febrian
P Lamria Rohana
L M.Arif Efendi Siregar
L Muhammad Alif Hidayahtullah
L Muhammad Ar Rafii
P Nabila Khairani
P Naomira Azzahra
P Nazhifah
P Nesva Untari
P Nikeisha Malliqa Rayhana Eryn
P Nur Amira Syahrani
P Nur Hasanah
L Nuryanto Ramadhan
P Putri Olivia Hutauruk
P Sabrina Salsabila
L Satrio Anshorut Tauhid
P Sifa Novianti
P Stevania Pangaribuan
P Syadira Fiqa
P Tika Nurhayani
P Tsabita Ufaira Novanny
P Ummu Atika Harahap
P Viona Anggraini
P Wan Nabila Syahrani`,
"XII HT 11": `L Afif Athaa-Illaah Hariadin
L Alfi Rizki Erza Ramadhan
P Aliffa Cheisya Azzarine
P Ariqah Althafiona
P Arisha Kirana Wulandari
P Aura Sari Nainggolan
P Balya Sakura
P Belva Rahmatul Husna
P Bless Ro Simatupang
P Celsi Elisabeth Butar Butar
P Chelsea Alicia Purwadi
P Deswita Derriel Tampubolon
L Dwi Mickhan Alinuha
L Faiz Nauval Saputra
P Futri Nabila Fitriani
L Ghufran Parisya Yanaz
L Hasyim Hidayatullah
P Jaskia Tan Putri
P Joy Sondang Tampubolon
L Kevin Simangunsong
P Khanza Altha Funisa
P Khayla Almira Sufi
P Laurensia Octavia Kornelita Supriadi
P Meilysiana Simangunsong
L Moreno Galang Ramadhan
L Muhammad Rafi'anwanullah Anugrah
L Muhammad Rafie Fachreza
L Muhammad Rizky Dava Nurfadilah
P Nabila
P Nadia Andrian Ramadhani
P Nur Aisyah
P Nurul Aina Fatihah
P Poppy Atikah Dinda Putri
P Putri Riana Asyifa
P Quinsha Keira Elzania Telaumbanua
L Rahmat Kurniawan
P Reyssa Nayla Cahaya Putri
L Rifqy Rafif Anshori
P Roaitul Islah Juliantino
P Salwa Azahra Syidiqqi
P Veronika Butar Butar
L Wan Rizqullah Akbar
L Yossi Josse Yoshua Simanjuntak
P Zahra Athira`,
"XII HT 12": `P Adonia Mishael Kanzhu
P Alicia Lorenza Cinta Ginting
P Ana Jufebiola
P Ananda Tri Hapsari
L Andesta Fasa Mewardhani Lase
P Astrid Michela Asifani
L Asyraf Rafa Ryadi
P Balqis Indi Aurora
L Boni Sittong Hasiholan Panjaitan
P Catharine Michelle Simbolon
P Chesia Lee Tambunan
P Devi Kumalasari Putri
P Dhiya Aqsha Almaghvira
L Faiz Arifandi
L Farel Afriadi Sinaga
P Femita Dycarsa Hardian
P Filia Raisha Sayidatina
P Fisel Natalia Haloho
P Friskila Apriani
L Gilang Sandi Sasongko
P Hayyu Aisyah Nazirah Sihombing
P Intan Nur Aini
P Keysa Mutia Atmaja
P Khaisya Putri Ramadani
L Luckyano Geranzani Mbele Niu
P Maria Elsri Madu
L Muhamad Feriana Azmi
L Muhammad Fajar Prasetyo
L Muhammad Rio Febrian
P Nadya Syahwalia
P Qorriy Aina
P Rafa Khairunisa
L Richardo Sitompul
P Sherin Sandini Fitrahi
P Syarifah Zainunnisa
P Syawalya Shayna Malik
P Tenri Jasmine Syakira
L Yeremia Siahaan
P Yohanna Lydia Febriyanti Manurung
L Zahran Parisya Yanaz
L Zikry Yuda Al Fatulah`,
"XII HT 13": `L Abdul Kadir
L Achmad Aziz Taqwim
L Alfonso Ronaldo Sibarani
P Anria Putti Rifiesa Hasibuan
P Aulia Novira Handayani
P Baili Oktarima
P Chantika Ravida Putri
L Daniel Sirait
L Danny Muhammad Abrar
P Dea Ayu Puja Kasturi
P Debora Renatha Hutabarat
P Feby Valerie Exarial
L Gathan Akhiardi
P Grace Anasthasya Panjaitan
P Harisa Hasna
P Helen Damayanti
P Ika Putri Ramadhani
L Iqral Rozik
L Jeremia Manullang
P Keyhizia Melani Silalahi
P Khanza Rahmadini
P Lydia Maria Renata Nainggolan
L M. Nadif Mahardika Arlian
L M. Rizky Akbar Nurendra
P Monica Tay Yani
L Muhammad Fakhry
P Nayya Rallyenda
P Nimas Dwi Ramadhani
P Nindya Sasikirana
L Ray Martin Siallagan
L Samuel Arga Putra Siringoringo
P Selfia Yunita
P Sri Melani Sirait
L Steeven Anthonio Purba
L Stephen Paul Hananya Pasaribu
P Syalwa Maghfira Nandini
P Tsamara Shazia Nugraini
L Wahyu Arief Dewanto
P Windy Alfriani Situmeang
L Yoka Hizkia Wiranto Butar Butar
P Yuliza Ayunia Ginting
P Zahra Cessa Kireina
P Zulayka Amira`,
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
