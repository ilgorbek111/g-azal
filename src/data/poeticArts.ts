import { ArtEncyclopediaEntry } from '../types';

export const POETIC_ARTS: ArtEncyclopediaEntry[] = [
  {
    id: 'tashbeh',
    name: 'Tashbeh (Oʻxshatish)',
    arabicName: 'التشبيه',
    category: 'maʼnaviy',
    definition: 'Bir narsa yoki hodisani boshqa bir narsa yoki hodisaga umumiy belgisiga koʻra qiyoslash, oʻxshatish sanʼati. Tashbehning toʻrt rukni bor: mushabbah (oʻxshatilmish), mushabbahun bih (oʻxshatilgan narsa), vajhi shabah (oʻxshashlik asosi) va adoti tashbeh (oʻxshatish vositasi: -dek, -kabi, misol, yangligʻ).',
    exampleBayt: `Koʻkragimdur subhning pirohanidin chokroq,
Kirpigim shabnam toʻkulgan sabzadin namnokroq.`,
    poet: 'Alisher Navoiy',
    analysis: 'Muxlislar shoir koʻkragidagi jarohatni subhning qizil shafaq yorib oʻtgan etagiga, kirpiklaridagi qonli koʻz yoshlarni esa shabnam tushgan koʻm-koʻk oʻt-oʻlanga qiyoslaydi. Bu yerda tashbeh tafziliy (ustunlik tashbehi) shaklida ifodalangan.',
    subtypes: ['Tashbehi mufassal', 'Tashbehi mujmal', 'Tashbehi baliygʻ', 'Tashbehi kinoya', 'Tashbehi tamseel']
  },
  {
    id: 'tajnis',
    name: 'Tajnis (Jinos / Soʻz oʻyini)',
    arabicName: 'التجنيس',
    category: 'lafziy',
    definition: 'Talaffuzi va yozilishi bir xil yoki oʻxshash, lekin maʼnolari butunlay boshqa-boshqa boʻlgan soʻzlarni (omonimlarni) bir baytda qoʻllash sanʼati. Mumtoz sheʼriyatda gʻoyat nozik zehn va soʻz boyligini talab qiluvchi oliy mahorat hisoblanadi.',
    exampleBayt: `Har labing oʻlganni tirguzmakda jono, jon эrur,
Bu jihatdan bir-birisi birla jonojon эrur.`,
    poet: 'Alisher Navoiy',
    analysis: 'Najmiddin Komilov tahliliga koʻra: baytda "jon" va "jonon" soʻzlari zanjirlanib kelgan. "Jono" – xitob (ey jonim), "jon erur" – tiriklik baxsh etuvchi, "jonojon" – inoq, ittifoq, shuningdek qadimiy "jon berib jon olish" maʼnolarini qamrab olgan.',
    subtypes: ['Tajnisi tom (toʻliq omonim)', 'Tajnisi zoid (qoʻshimcha harfli)', 'Tajnisi noqis', 'Tajnisi xattiy', 'Tajnisi murakkab', 'Tajnisi shiru shakar (ikki tildagi omonimlar)']
  },
  {
    id: 'tazod',
    name: 'Tazod (Ziddiyat / Antiteza)',
    arabicName: 'التضاد',
    category: 'maʼnaviy',
    definition: 'Sheʼrda maʼno jihatidan bir-biriga qarama-qarshi boʻlgan tushunchalar, soʻzlar yoki tasvirlarni yonma-yon keltirish sanʼati. Ushbu ziddiyat orqali lirik qahramonning ichki ziddiyatli tuygʻulari va hayotning murakkabligi yorqin ochiladi.',
    exampleBayt: `Erur koʻngulda safo ishq toza dogʻi bila,
Nechunki koʻzda yorugʻliq эrur qarogʻi bila.`,
    poet: 'Alisher Navoiy',
    analysis: 'Baytda "safo" (poklik, ravshanlik) va "dogʻ" (qoralik, jarohat), "yorugʻliq" va "qaroq" (koʻz qorachigʻi) soʻzlari orqali ajoyib tazod yaratilgan. Oq va qora, nur va zulmat toʻqnashuvida ishqning qalbni yorituvchi qudrati kashf etiladi.',
    subtypes: ['Tazodi mutloq', 'Tazodi majoziy', 'Tazodi tarkibiy']
  },
  {
    id: 'talmeh',
    name: 'Talmeh (Tarixiy va afsonaviy ishora)',
    arabicName: 'التلميح',
    category: 'maʼnaviy',
    definition: 'Badiiy asarda barcha tinglovchilarga maʼlum boʻlgan tarixiy shaxs, afsonaviy qahramon, Qurʼoniy qissa yoki mashhur adabiy asar voqeasiga bir yoki bir necha soʻz bilan ishora qilish sanʼati.',
    exampleBayt: `Husnidin toʻymogʻ эmas mumkinki, behad xoʻb эrur,
Toʻygʻay эrdim, boʻlsa эrdi Yusufi Kanʼoncha xoʻb.`,
    poet: 'Alisher Navoiy',
    analysis: 'Dilnavoz Yusupova tahlili: Baytda Qurʼoni Karimdagi "ahsanul qisas" boʻlgan Yusuf alayhissalom qissasiga ishora qilinadi. Yusuf husniga toʻyish mumkin edi, zero Misrda qahatchilikda xalq uning jamoliga qarab ochlikni unutgan; ammo yorning husni ilohiy mutlaq boʻlgani uchun unga toʻyib boʻlmaydi.',
    subtypes: ['Diniy-Qurʼoniy talmeh', 'Tarixiy talmeh', 'Asotiriy/afsonaviy talmeh', 'Adabiy talmeh']
  },
  {
    id: 'husni-talil',
    name: 'Husni taʼlil (Goʻzal sabablash)',
    arabicName: 'حسن التعليل',
    category: 'maʼnaviy',
    definition: 'Tabiiy yoki real hodisaning asl sababini chetga surib, shoirona, xayoliy va nozik bir goʻzal sabab bilan bogʻlab tushuntirish sanʼati.',
    exampleBayt: `Koʻngillar nolasi zulfung kamandin nogahon koʻrgach,
Erur andoqki, qushlar qichqirishqaylar yilon koʻrgach.`,
    poet: 'Alisher Navoiy',
    analysis: 'Muhammad Ali tahlili: Oshiqlar koʻnglining faryod chekishiga sabab yorning zulfi ilonga oʻxshatiladi. Qushlar ilonni koʻrganda qanday chirqillasa, koʻngil qushi ham qora zulf (ilon)dan shunday qoʻrquvda dod soladi.',
    subtypes: ['Tabiiy hodisalarni sabablash', 'Ruhiy holatni sabablash']
  },
  {
    id: 'iyhom',
    name: 'Iyhom (Ikki maʼnolilik)',
    arabicName: 'الإيهام',
    category: 'maʼnaviy',
    definition: 'Bir soʻzning bir necha maʼnosi (odatda yaqin va uzoq maʼnolari) boʻlib, shoir oʻquvchining xayolini avval yaqin maʼnoga yoʻnaltirib, aslida uzoq va teranroq maʼnoni nazarda tutishi.',
    exampleBayt: `Mehrdin topmay nishone senda ham, gardunda ham,
Bu musibat koʻzuma yorugʻ jahonni tor эtar.`,
    poet: 'Alisher Navoiy',
    analysis: 'Nusratullo Jumaev tahlili: "Mehr" soʻzi baytda ikki maʼnoda kelgan: 1) mehr-oqibat, muhabbat; 2) Quyosh. Gardunda (osmonda) quyosh ham yoʻq, yorda mehr ham yoʻq – natijada yorugʻ jahon oshiq koʻziga zim-ziyo tor boʻlib koʻrinadi.',
    subtypes: ['Iyhomi mujarrada', 'Iyhomi murashshaha']
  },
  {
    id: 'tashxis-va-intoq',
    name: 'Tashxis va Intoq (Jonlantirish va nutq berish)',
    arabicName: 'التشخيص والإنطاق',
    category: 'maʼnaviy',
    definition: 'Jonsiz narsalarga, tabiat hodisalariga yoki hayvonlarga insoniy xususiyatlar (yigʻlash, kulish, kuyish, gapirish) bagʻishlash sanʼati.',
    exampleBayt: `Axtarin ashk эttiyu sovuq nafasni oh subh,
Boʻldi goʻyo shomi hajrim holidin ogoh subh.`,
    poet: 'Alisher Navoiy',
    analysis: 'Najmiddin Komilov tahlili: Tongsahar (subh) tirik shaxsdek jonlantirilgan (tashxis). U oshiqning hijron tunidagi faryodidan xabardor boʻlib, yulduzlarni koʻz yoshi qilib toʻkadi va ertalabki salqin shabadani sovuq oh qilib tortadi.',
    subtypes: ['Tashxis (shaxslashtirish)', 'Intoq (nutq bagʻishlash)']
  },
  {
    id: 'tardi-aks',
    name: 'Tardi aks (Aks ettirish / Chappa takror)',
    arabicName: 'طرد وعكس',
    category: 'lafziy',
    definition: 'Misrada yoki baytda keltirilgan soʻz birikmalarining oʻrnini keyingi misrada teskari tartibda takrorlash orqali yangi va chuqur maʼno hosil qilish sanʼati.',
    exampleBayt: `Kimki, oning bir malaksiymo parivash yori bor,
Odami boʻlsa, pari birla malakdin ori bor.`,
    poet: 'Alisher Navoiy',
    analysis: 'Birinchi misrada "malaksiymo parivash", ikkinchi misrada "pari birla malak" tarzida soʻzlar oʻrni almashinib, yorning odamzod ichida tengsizligi va unga ega boʻlgan kishining boshqa barcha gʻayritabiiy goʻzallardan yuz burishi taʼkidlangan.',
    subtypes: ['Toʻliq tardi aks', 'Qisman tardi aks']
  },
  {
    id: 'kitobat',
    name: 'Kitobat sanʼati (Harfiy timsollar)',
    arabicName: 'الكتابة',
    category: 'lafziy',
    definition: 'Arab/turkiy yozuvdagi harflarning shakliy koʻrinishlaridan (alif, dal, jim, ayn, shin, qof va b.) ramziy-badiiy maqsadda foydalanish sanʼati.',
    exampleBayt: `Boʻynum uza, “ayn”in aylagil tavq,
“Shin”in qil ichimga shuʼlai shavq.
“Qof”in manga ayla koʻhu anduh,
Koʻnglumga gʻamini koʻh to koʻh.`,
    poet: 'Alisher Navoiy ("Layli va Majnun")',
    analysis: 'Dilnavoz Yusupova tahlili: "Ishq" (عشق) soʻzi uchta harfdan iborat: ayn (ع) shaklan boʻyinturuq-tavqqa, shin (ش) uch nuqtasi bilan shavq alangalariga, qof (ق) esa mashhur Qof togʻidek ulkan anduh togʻiga qiyoslanadi.',
    subtypes: ['Nuqtali harflar sanʼati', 'Muvaqqat kitobat']
  },
  {
    id: 'musajja',
    name: 'Musajjaʼ (Ichki qofiya / Sajʼ)',
    arabicName: 'المسجع',
    category: 'lafziy',
    definition: 'Gʻazal baytlarining ichki qismlarida ohangdosh soʻzlar (sajʼ) qoʻllanilib, har bir misra ichida oʻzaro qofiyalanuvchi boʻlaklar hosil qilish sanʼati. Bunday gʻazallar nihoyatda baland musiqiy jarang kasb etadi.',
    exampleBayt: `Tunum dayjur, oʻzum ranjur, ichim gʻamnoku bagʻrim chok,
Tilim lolu tanim behol, ishim afgʻon, sirishkim qon.`,
    poet: 'Alisher Navoiy',
    analysis: 'Abdurashid Abdugʻafurov tahlili: Bayt 8 ta teng boʻlakka boʻlinadi: Tunum dayjur – oʻzum ranjur – ichim gʻamnok – va bagʻrim chok (dayjur/ranjur, gʻamnok/chok), ikkinchi misrada esa lolu/behol, afgʻon/qon. Ichki qofiyalar mislsiz ritmik zarb va fojiaviy shiddat yaratadi.',
    subtypes: ['Sajʼi mutavvoziy', 'Sajʼi mutarraf', 'Sajʼi mutavvozin']
  },
  {
    id: 'ruju',
    name: 'Rujuʼ (Fikrni inkor etib kuchaytirish)',
    arabicName: 'الرجوع',
    category: 'maʼnaviy',
    definition: 'Oldingi aytilgan fikrni goʻyo rad etib, undan-da yuqoriroq, kuchliroq mubolagʻali ikkinchi bir fikrni ilgari surish sanʼati.',
    exampleBayt: `Oʻn sakiz yil dema, yuz sakson yil oʻlsa, uldurur
Husn shohi, ul balolarkim, koʻzu qoshindadur.`,
    poet: 'Alisher Navoiy',
    analysis: 'Nusratullo Jumaev tahlili: Shoir avval "yana oʻn sakkiz yil husni bor" deydi-da, darhol oʻz fikridan rujuʼ qilib: "Oʻn sakkiz yil dema, yuz sakson yil oʻtsa ham u husn shohi boʻlib qoladi" deb goʻzallikning boqiyligini mubolagʻa qiladi.',
    subtypes: ['Tazminiy rujuʼ', 'Mubolagʻali rujuʼ']
  },
  {
    id: 'iroai-masal',
    name: 'Irsoli masal (Maqol keltirish)',
    arabicName: 'إرسال المثل',
    category: 'maʼnaviy',
    definition: 'Fikrni dalillash va unga xalqona hikmat bagʻishlash maqsadida xalq maqoli, matali yoki umum eʼtirof etgan hikmatli soʻzdan foydalanish.',
    exampleBayt: `Hijronu visolin koʻpu oz dema Navoiy,
Yuz shukr dekim, koʻpi borib, ozi qoliptur.`,
    poet: 'Alisher Navoiy',
    analysis: 'Dilnavoz Yusupova tahlili: Xalq orasidagi mashhur "koʻpi ketib, ozi qoldi" matali ғазалда ҳижрон ва висол ziddiyatiga bogʻlanib, sabr va shukr falsafasi mustahkamlangan.',
    subtypes: ['Xalq maqoli', 'Hikmatli aforizm']
  }
];
