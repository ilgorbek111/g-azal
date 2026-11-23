import { CanonicalGhazal } from '../types';

export const CANONICAL_GHAZALS: CanonicalGhazal[] = [
  {
    id: 'ghazal-jon-va-jonon',
    firstLine: 'Har labing oʻlganni tirguzmakda jono, jon эrur',
    title: 'Jon va Jonon Mojarosi',
    poet: 'Alisher Navoiy',
    divan: 'Xazoyin ul-maoniy',
    commentator: 'Najmiddin Komilov',
    sourceBook: 'Gʻazallar, sharhlar (1991)',
    genre: 'Ishqiy-tasavvufiy (Tajnisli gʻazal)',
    compositionType: 'Musalsal gʻazal (Silsilaviy, tadrijiy)',
    meter: {
      name: 'Hazaji musammani solim',
      rukns: 'Mafoiylun mafoiylun mafoiylun mafoiylun',
      pattern: 'V - - - / V - - - / V - - - / V - - -',
      rhythmEffect: 'Musiqiy, salobatli, zanjirband soʻz oʻyiniga (tajnisga) nihoyatda qulay va xushxaror oʻlchov.'
    },
    rhymeAndRadif: {
      radif: 'эrur',
      qofiyaWords: ['jon', 'jonojon', 'jonon', 'hijron', 'oson', 'imkon', 'zindon', 'ranjon'],
      rhymeType: 'Mutlaq qofiya, muraddaf, gʻazal boʻylab "jon" (19 marta) va "jonon" (16 marta) soʻzlari zanjirlangan.'
    },
    text: `Har labing oʻlganni tirguzmakda jono, jon эrur,
Bu jihatdan bir-birisi birla jonojon эrur.

Jonim andoq toʻldi jonondinki, boʻlmas fahmkim,
Jon эrur, jonon эmas, yo jon эmas, jonon эrur.

Boʻlsa jonon bordudur jon ham, chu jonon qildi azm,
Jon ketib jonon bila, jondin menga hijron эrur.

Jon manga jonon uchundur, yoʻq jonon jon uchun,
Umr jononsiz qotiq, jonsiz vale oson эrur.

Borsa jon jonon yitar, gar borsa jonon jon ketar,
Kimsaga jononu jonsiz umr ne imkon эrur.

Xushdurur jonu jahon jonon bila, jonon agar
Boʻlmasa, jon oʻylakim oʻlmas, jahon zindon эrur.

Jonim ol, эy, hajru jononsiz manga ranj aylama,
Chunki jononsiz Navoiy jonidin ranjon эrur.`,
    vocabulary: [
      { word: 'Jono', definition: 'Ey jonim, ey sevgilim (xitob)', origin: 'forscha' },
      { word: 'Jonojon', definition: 'Inoq, sirdosh, bir tanu bir jon; jon berib jon oluvchi', origin: 'forscha' },
      { word: 'Azm', definition: 'Qasd, yoʻlga chiqish, harakat', origin: 'arabcha' },
      { word: 'Qotiq', definition: 'Qattiq, ogʻir, azobli', origin: 'eski oʻzbekcha' },
      { word: 'Ranjon', definition: 'Ranjigan, ozor chekkan, bezor boʻlgan', origin: 'forscha' }
    ],
    couplets: [
      {
        number: 1,
        originalText: `Har labing oʻlganni tirguzmakda jono, jon эrur,\nBu jihatdan bir-birisi birla jonojon эrur.`,
        proseTranslation: `Ey jonim, sening har bir labing oʻlikni tiriltirishda jon kabidir; shuning uchun ham ular bir-biri bilan nihoyatda inoq, bir tanu bir jondir.`,
        poeticArts: [
          { name: 'Tajnis', targetWords: 'jono, jon, jonojon', explanation: 'Oʻzakdosh va talaffuzdosh soʻzlarning xilma-xil maʼnolarda qoʻllanishi.' },
          { name: 'Tashbeh', targetWords: 'labing... jon erur', explanation: 'Yor labining tiriltiruvchi xususiyati jonga oʻxshatilgan.' },
          { name: 'Talmeh', targetWords: 'oʻlganni tirguzmak', explanation: 'Iso Masihning oʻliklarni nafas bilan tiriltirish moʻjizasiga ishora.' }
        ],
        literalMeaning: 'Maʼshuqaning lablari shunchalik shirin va jilvaliki, oshiqqa hayot bagʻishlaydi.',
        sufiMeaning: 'Haqning kalomi va ilohiy fayzi maʼnaviy oʻlik qalblarga haqiqiy hayot va maʼrifat ato etadi.'
      },
      {
        number: 2,
        originalText: `Jonim andoq toʻldi jonondinki, boʻlmas fahmkim,\nJon эrur, jonon эmas, yo jon эmas, jonon эrur.`,
        proseTranslation: `Mening vujudim jonon bilan shu qadar toʻlib-toshdiki, endi uning qaysi biri jon-u qaysi biri jonon ekanini ajratib boʻlmaydi.`,
        poeticArts: [
          { name: 'Tajnis', targetWords: 'jonim, jonondin, jon, jonon', explanation: 'Lafziy va maʼnaviy oʻyin orqali vahdat (birlik) holatini aks ettirish.' },
          { name: 'Tazod', targetWords: 'jon erur / jonon emas', explanation: 'Tasdiq va inkorning zidlanishi.' }
        ],
        literalMeaning: 'Oshiq oʻzligini yoʻqotib, maʼshuqasi bilan yaxlit bir vujudga aylangan.',
        sufiMeaning: 'Vahdatul vujud va Fanofilloh maqomi: solik oʻz xudbin "men"idan butunlay kechib, Haq nurida erib ketadi, "Men" va "Sen" orasidagi chegara yoʻqoladi.'
      },
      {
        number: 3,
        originalText: `Boʻlsa jonon bordudur jon ham, chu jonon qildi azm,\nJon ketib jonon bila, jondin menga hijron эrur.`,
        proseTranslation: `Agar jonon yonimda boʻlsa, demak jonim ham bor; ammo jonon ketishga qasd qilgach, jon ham u bilan ketadi va oqibatda jondan ayrilish hijroni qoladi.`,
        poeticArts: [
          { name: 'Ishtiqoq', targetWords: 'jon, jonon', explanation: 'Bir oʻzakdan olingan soʻzlarning falsafiy bogʻliqligi.' },
          { name: 'Tazod', targetWords: 'bordur / ketib', explanation: 'Borlik va ketish ziddiyati.' }
        ],
        literalMeaning: 'Yordan ajralgan oshiq tirik jonsiz murdaga oʻxshaydi.',
        sufiMeaning: 'Haq zikridan va ilohiy nurlanishdan mahrum boʻlgan qalb maʼnaviy oʻlim holatidadir.'
      },
      {
        number: 4,
        originalText: `Jon manga jonon uchundur, yoʻq jonon jon учун,\nUmr jononsiz qotiq, jonsiz vale oson эrur.`,
        proseTranslation: `Menga jon jonon uchun kerak, aksincha jonon jon uchun emas. Jononsiz yashash juda ogʻir, ammo jonsiz oʻlish esa osondir.`,
        poeticArts: [
          { name: 'Tazod', targetWords: 'qotiq (ogʻir) / oson', explanation: 'Oshiqning hayoti va oʻlimi orasidagi kontrast.' },
          { name: 'Tardi aks', targetWords: 'jon manga jonon uchun / yoʻq jonon jon uchun', explanation: 'Soʻzlar tartibining teskari takrorlanishi.' }
        ],
        literalMeaning: 'Yorsiz hayot azob, yor yoʻlida jon berish esa saodatdir.',
        sufiMeaning: 'Inson vujudi va ruhi faqat Yaratganni sevish va tanish uchun yaratilgan. Nafsiy tiriklik behuda, Haq yoʻlidagi fano esa eng oliy yengillikdir.'
      },
      {
        number: 5,
        originalText: `Borsa jon jonon yitar, gar borsa jonon jon ketar,\nKimsaga jononu jonsiz umr ne imkon эrur.`,
        proseTranslation: `Agar jon ketsa jonon ham yoʻqoladi, agar jonon ketsa jon ham ketadi. Hech kimga jononsiz ham, jonsiz ham umr koʻrishning imkoni yoʻq.`,
        poeticArts: [
          { name: 'Mantiqiy rujuʼ va zanjirlanish', targetWords: 'Borsa jon jonon yitar / gar borsa jonon jon ketar', explanation: 'Har ikki tushunchaning bir-birini taqozo etishi.' }
        ],
        literalMeaning: 'Ishq va hayotning ajralmas birligi.',
        sufiMeaning: 'Ruh bilan Ilohiy mohiyat egizakdir, birisiz ikkinchisini idrok etib boʻlmaydi.'
      },
      {
        number: 6,
        originalText: `Xushdurur jonu jahon jonon bila, jonon agar\nBoʻlmasa, jon oʻylakim oʻlmas, jahon zindon эrur.`,
        proseTranslation: `Jon ham, bu butun jahon ham jonon bilan goʻzaldir; agar jonon boʻlmasa, oʻlmay qiynalayotgan jonga bu keng jahon zindondek tor boʻladi.`,
        poeticArts: [
          { name: 'Tashbeh', targetWords: 'jahon zindon erur', explanation: 'Jononsiz dunyo qorongʻu zindonga oʻxshatilgan.' },
          { name: 'Tazod', targetWords: 'xushdurur / zindon erur', explanation: 'Huzur va hibsxona ziddiyati.' }
        ],
        literalMeaning: 'Yorsiz dunyo goʻzalliklari qafas va zindondek azoblidir.',
        sufiMeaning: 'Moddiy olam Haq nuri boʻlmaganda qorongʻu bandixonadir; faqat ilohiy tajalli orqali dunyo jannat makoniga aylanadi.'
      },
      {
        number: 7,
        originalText: `Jonim ol, эy, hajru jononsiz manga ranj aylama,\nChunki jononsiz Navoiy jonidin ranjon эrur.`,
        proseTranslation: `Ey hijron, mayli mening jonimni olaqol, ammo meni jononsiz azoblama; chunki jononsiz yashashdan Navoiy oʻz jonidan ham bezor boʻlgandir.`,
        poeticArts: [
          { name: 'Tashxis', targetWords: 'Ey hajr', explanation: 'Hijron jalloddek jonlantirilib, unga xitob qilinmoqda.' },
          { name: 'Tajnis', targetWords: 'ranj / ranjon', explanation: 'Oʻzakdosh soʻzlar uygʻunligi.' }
        ],
        literalMeaning: 'Oshiq yorsiz qiynalgandan koʻra oʻlimni afzal biladi.',
        sufiMeaning: 'Maqtaʼdagi fano iltijosi: solik Haq ishqida barcha azoblar evaziga boʻlsa ham fano boʻlib, abadiy visolga intiladi.'
      }
    ],
    overallMeaning: 'Najmiddin Komilov taʼkidlaganidek, gʻazal butunlay "jon" va "jonon" soʻzlari ustiga qurilgan boʻlib, unda lirik qahramonning visol lazzati va hijron azobi orasidagi ruhiy holatlari mukammal aks etgan. Bu yerda soʻz oʻyini shunchaki koʻz-koʻz qilish emas, balki chuqur falsafiy-axloqiy gʻoyaga xizmat qilgan.',
    nimkosaSubtext: 'Kosa tagidagi nimkosa: Odam zoti ruhiy-maʼnaviy hayotsiz yashay olmaydi. Jononsiz (ishqsiz) yashagan kishilar zohiran tirik yursa-da, botinan oʻlikdirlar. Haqiqiy hayot – qalbda ishq va maʼrifat chirogʻining yonishidir.',
    didacticConclusion: 'Insonga berilgan eng aziz neʼmat bu qalb va ruhiy покликдир. Oʻtkinchi dunyo hoyu havaslari ortidan quvib, haqiqiy maʼnaviyatdan, yaʼni Jonondan judo boʻlish – inson umrini zindonga aylantiradi.'
  },
  {
    id: 'ghazal-junun-vodiysi',
    firstLine: 'Junun vodiysigʻa moyil koʻrarmen joni zorimni',
    title: 'Junun Vodiysida',
    poet: 'Alisher Navoiy',
    divan: 'Xazoyin ul-maoniy ("Navodir ush-shabob")',
    commentator: 'Erkin Vohidov',
    sourceBook: 'Gʻazallar, sharhlar (1991)',
    genre: 'Hasbi hol, ijtimoiy-falsafiy faryod',
    compositionType: 'Musalsal gʻazal',
    meter: {
      name: 'Hazaji musammani solim',
      rukns: 'Mafoiylun mafoiylun mafoiylun mafoiylun',
      pattern: 'V - - - / V - - - / V - - - / V - - -',
      rhythmEffect: 'Fojiaviy, dardli, oʻzbek maqom kuylariga nihoyatda mos tushuvchi mungli va ulugʻvor ohang.'
    },
    rhymeAndRadif: {
      radif: 'koʻrarmen / ruzgʻorimni va h.k.',
      qofiyaWords: ['zorimni', 'roʻzgʻorimni', 'gʻuborimni', 'ixtiyorimni', 'bahorimni', 'diyorimni', 'uzorimni', 'xumorimni', 'borimni'],
      rhymeType: 'Mutlaq qofiya, musalsal intihoga yoʻnaltirilgan.'
    },
    text: `Junun vodiysigʻa moyil koʻrarmen joni zorimni,
Tilarmen bir yoʻli buzmoq buzulgon roʻzgʻorimni.

Falak bedodidin garchi mani xokiy gʻubor oʻldum,
Tilarmen, topmagʻaylar toʻtiyolikka gʻuborimni.

Demang, qay sori azm эtgung, menga yoʻq ixtiyor, oxir —
Qazo ilkiga bermishmen inoni ixtiyorimni.

Tugandi ashki gulgun, эmdi qolmish zaʼfaroni yuz,
Falak zulmi badal qildi xazon birla bahorimni.

Diyorim ahli birla yordin boshimgʻa yuz mehnat,
Ne tong, boshim olib ketsam qoʻyub yoru diyorimni.

Yomon holimgʻa bagʻri ogʻrigʻay har kimsakim koʻrgay,
Bagʻir pargolasidan qongʻa bulgʻongʻon uzorimni.

Hayotim bodasidin sargaronmen asru, эy soqiy,
Qadahqa zahr qotil quy, dogʻi dafʼ эt xumorimni.

Jahon tarkini qilmay chunki tinmoq mumkin эrmastur,
Navoiy, qil meni ozod oʻrtab yoʻqu borimni.`,
    vocabulary: [
      { word: 'Junun', definition: 'Telbalik, devonalik, aql qolipini sindirish', origin: 'arabcha' },
      { word: 'Bedod', definition: 'Adolatsizlik, zulm', origin: 'forscha' },
      { word: 'Toʻtiyo', definition: 'Koʻzga surtiladigan shifobaxsh dori; tabarruk surma', origin: 'forscha' },
      { word: 'Inon', definition: 'Jilov, tizgin', origin: 'arabcha' },
      { word: 'Ashki gulgun', definition: 'Gul rangidagi qonli koʻz yosh', origin: 'forscha' },
      { word: 'Zaʼfaroni yuz', definition: 'Zaʼfarondek sargʻaygan yuz', origin: 'arabcha-oʻzbekcha' },
      { word: 'Uzor', definition: 'Yuz, chehra', origin: 'arabcha' },
      { word: 'Sargaron', definition: 'Boshi ogʻir, sarxush, garangsigan', origin: 'forscha' }
    ],
    couplets: [
      {
        number: 1,
        originalText: `Junun vodiysigʻa moyil koʻrarmen joni zorimni,\nTilarmen bir yoʻli buzmoq buzulgon roʻzgʻorimni.`,
        proseTranslation: `Oʻz zor jonimni telbalik vodiysi tomon ogʻayotganini koʻryapman; allaqachon algʻov-dalgʻov boʻlgan hayotimni endi batamom buzib, vayron qilishni istayman.`,
        poeticArts: [
          { name: 'Tashbeh va Istiora', targetWords: 'Junun vodiysi', explanation: 'Telbalik cheksiz choʻl-vodiyga qiyoslangan.' },
          { name: 'Ishtiqoq', targetWords: 'buzmoq / buzulgon', explanation: 'Bir oʻzakdan olingan soʻzlarning ichki musiqiy uygʻunligi.' }
        ],
        literalMeaning: 'Dunyodagi haqsizlik va qaygʻular oshiqni aql doirasidan chiqarib, sahrolarga qochishga undamoqda.',
        sufiMeaning: 'Aql tor qolipidan chiqib, ilohiy ishqning sarsari sahrosiga intilish.'
      },
      {
        number: 2,
        originalText: `Falak bedodidin garchi mani xokiy gʻubor oʻldum,\nTilarmen, topmagʻaylar toʻtiyolikka gʻuborimni.`,
        proseTranslation: `Falakning zulmi tufayli tuproq va changga aylandim, ammo shuni istaymanki, (men oʻlgach qadrimga yetganlar) koʻzlariga surma qilmoq uchun ham mening bu tuprogʻimni topa olmasinlar.`,
        poeticArts: [
          { name: 'Tazod', targetWords: 'xokiy gʻubor (oddiy chang) / toʻtiyo (qimmatli shifobaxsh surma)', explanation: 'Xoksorlik va eʼzoz ziddiyati.' },
          { name: 'Kinoya', targetWords: 'topmagʻaylar toʻtiyolikka gʻuborimni', explanation: 'Tirikligida qadriga yetmagan odamlarga nisbatan alamli kinoya.' }
        ],
        literalMeaning: 'Shoir tirikligida uni xoʻrlagan nokaslarga oʻz xokini ham qoldirishni istamaydi.',
        sufiMeaning: 'Oʻzlikdan toʻla fano boʻlib, butunlay izsiz va benishon boʻlish orzusi.'
      },
      {
        number: 3,
        originalText: `Demang, qay sori azm эtgung, menga yoʻq ixtiyor, oxir —\nQazo ilkiga bermishmen inoni ixtiyorimni.`,
        proseTranslation: `Mendan qayoqqa qarab ketayotganimni soʻramang, chunki menda ixtiyor qolmagan; ixtiyorim tizginini taqdir (qazo) qoʻliga topshirib qoʻyganman.`,
        poeticArts: [
          { name: 'Tashbeh / Istiora', targetWords: 'inoni ixtiyor', explanation: 'Ixtiyor otning jilovi sifatida tasvirlangan.' },
          { name: 'Tazod', targetWords: 'yoʻq ixtiyor / inoni ixtiyor', explanation: 'Ixtiyorsizlik va ixtiyor oʻrtasidagi ziddiyat.' }
        ],
        literalMeaning: 'Oshiq oʻz taqdiriga butunlay boʻysungan.',
        sufiMeaning: 'Tavakkul va Rizo maqomi: Allohning qazoyu qadariga soʻzsiz taslim boʻlish.'
      },
      {
        number: 4,
        originalText: `Tugandi ashki gulgun, эmdi qolmish zaʼfaroni yuz,\nFalak zulmi badal qildi xazon birla bahorimni.`,
        proseTranslation: `Koʻzimdagi qonli qizil yoshlar qurib bitdi, endi faqat zaʼfarondek sargʻaygan yuzim qoldi; falakning zulmi mening bahorimni xazon (kuz) fasliga almashtirib qoʻydi.`,
        poeticArts: [
          { name: 'Tazod', targetWords: 'gulgun (qizil) / zaʼfaroni (sariq); bahor / xazon', explanation: 'Ranglar va fasllar orqali vujudga keltirilgan murakkab antiteza.' },
          { name: 'Tashbeh', targetWords: 'zaʼfaroni yuz', explanation: 'Sargʻaygan yuz zaʼfaron guliga oʻxshatilgan.' }
        ],
        literalMeaning: 'Koʻz yosh toʻkaverib darmonsiz qolgan, yuzi sargʻaygan bemor oshiq holati.',
        sufiMeaning: 'Zohiriy hayot gullab-yashnashining soʻnishi va botiniy riyozat davri.'
      },
      {
        number: 5,
        originalText: `Diyorim ahli birla yordin boshimgʻa yuz mehnat,\nNe tong, boshim olib ketsam qoʻyub yoru diyorimni.`,
        proseTranslation: `Oʻz yurtim odamlari va yor dastidan boshimga yuzlab kulfat yogʻildi; agar yorim va vatanimni tashlab bosh olib ketsam, bunga ajablanmasa ham boʻladi.`,
        poeticArts: [
          { name: 'Tanosub', targetWords: 'diyor, ahli, yor, bosh olib ketmoq', explanation: 'Mavzuviy yaqin soʻzlar uygʻunligi.' },
          { name: 'Mubolagʻa', targetWords: 'yuz mehnat', explanation: 'Kulfatning cheksizligi.' }
        ],
        literalMeaning: 'Tushunmovchilik, hasad va jabrlardan toliqqan shoirning gʻariblikka ketish niyati.',
        sufiMeaning: 'Tajarrud – dunyo kishilari va aloqalaridan butunlay uzilish.'
      },
      {
        number: 6,
        originalText: `Hayotim bodasidin sargaronmen asru, эy soqiy,\nQadahqa zahr qotil quy, dogʻi dafʼ эt xumorimni.`,
        proseTranslation: `Bu hayot mayini ichib boshim nihoyatda ogʻrib garangsib qoldim, ey soqiy; qadahimga oʻldiruvchi zahar quyib bergin-da, bu hayot xumorini daf et!`,
        poeticArts: [
          { name: 'Tazod', targetWords: 'boda (sharob) / zahr qotil (oʻldiruvchi zahar)', explanation: 'Hayot va oʻlim timsollarining ziddiyati.' },
          { name: 'Tashbeh', targetWords: 'hayotim bodasi', explanation: 'Tiriklik sharobga qiyoslangan.' }
        ],
        literalMeaning: 'Tiriklik azoblaridan charchagan qalbning faryodi.',
        sufiMeaning: 'Nafsiy tiriklikning xumori faqat dunyodan butunlay kechish zahri bilan daf boʻladi.'
      },
      {
        number: 7,
        originalText: `Jahon tarkini qilmay chunki tinmoq mumkin эrmastur,\nNavoiy, qil meni ozod oʻrtab yoʻqu borimni.`,
        proseTranslation: `Modomiki bu dunyoni tark etmasdan turib tinchlik topish mumkin emas ekan, ey Navoiy, butun bor-yoʻgʻimni kuydirib yuborib, meni bu azoblardan ozod qil!`,
        poeticArts: [
          { name: 'Tazod', targetWords: 'yoʻqu borimni', explanation: 'Borliq va yoʻqlik antitezasi.' },
          { name: 'Tashxis / Xitob', targetWords: 'Navoiy, qil meni ozod', explanation: 'Shoirning oʻz vujudiga va taxallusiga faryod bilan murojaati.' }
        ],
        literalMeaning: 'Dunyoni tark etib, ruhan ozod boʻlish.',
        sufiMeaning: 'Faqru fano orqali dunyoviy bogʻliqliklardan xalos boʻlib, ozod ruhga aylanish.'
      }
    ],
    overallMeaning: 'Erkin Vohidov taʼbiri bilan aytganda: "Bu gʻazal dunyoning gʻamu anduhidan zardob boʻlgan shoir qalbining afgʻonidir. Inson yuragi va tafakkuri haddan ziyod sevincni ham, gʻamni ham qabul qilolmaslik xususiyatiga ega. Tuygʻularning ofatli seli kishini telba qiladi. Shoir oʻz jonini junun, yaʼni telbalik vodiysiga moyil koʻradi."',
    nimkosaSubtext: 'Falak zulmidan, bevafo zamona odamlaridan chekilgan chuqur iztirob. Zamonaning torligi, nohaqliklar shoirdek ulugʻ qalbni ham vatan va yordan bosh olib ketish darajasiga olib kelgan.',
    didacticConclusion: 'Tirikligida insonlarning, ayniqsa ijodkor va donishmandlarning qadriga yetish kerak. Qadrsizlik, hasad va beoqibatlik inson qalbini oʻrtovchi eng ogʻir fojiadir.'
  },
  {
    id: 'ghazal-kamand-uchiga',
    firstLine: 'Kamand uchiga yetkurmas gʻamu andesha ayyori',
    title: 'Timsollar Timsoli',
    poet: 'Alisher Navoiy',
    divan: 'Xazoyin ul-maoniy',
    commentator: 'Najmiddin Komilov',
    sourceBook: 'Gʻazallar, sharhlar (1991)',
    genre: 'Orifona, tasavvufiy-falsafiy',
    compositionType: 'Yakpora gʻazal (Yaxlit bir falsafiy gʻoyaga bagʻishlangan)',
    meter: {
      name: 'Hazaji musammani axrabi makfufi mahzuf',
      rukns: 'Mafʼulu mafoiylu mafoiylu faʼulun',
      pattern: '- - V / V - - V / V - - V / V - -',
      rhythmEffect: 'Oʻta nafis, serjilo va falsafiy mushohadaga yoʻgʻrilgan vazn.'
    },
    rhymeAndRadif: {
      radif: 'ayyoriy / meʼmoriy va h.k.',
      qofiyaWords: ['ayyori', 'meʼmori', 'devori', 'pargori', 'kori', 'namudori', 'bori', 'ruxsori', 'sori', 'tori'],
      rhymeType: 'Mutlaq qofiya'
    },
    text: `Kamand uchiga yetkurmas gʻamu andesha ayyori,
Biyik chekmish magar mayxona tomin sunʼ meʼmori.

Xumorim zaʼfida kahgil isi to yetti mast oʻldum,
Suvalmishdur magar may loyidin mayxona devori.

Toʻla kub ogʻzi may, xurshidedur, goʻyo teng ochilmish
Chekardi bu iki xurshid davrin sunʼ pargori.

May ichmish xonaqah shayxi, xarobot ahli aysh aylang,
Ki, chiqmish bahya urgʻon xirqasidin mablagʻi kori.

Koʻringan mosivo budi эmas, balki namudidur,
May ustida hubobu mavj shaklining namudori.

Hubobu mavj may tahrikidin zohirdurur, lekin
Sukun tongʻon vujudi, maydin oʻzga qaydadur bori?

Quyosh aksimudur hayvon suyida yo koʻrunmishdur
Ravonoso may ichra soqin gulchehra ruxsori.

Fano dayrin koʻngul istarki, bir-bir piri dayr эlga
Tutarda boda, shoyad, jurʼae sungay bizning sori.

Navosidin fano chun hosil oʻldi, qilgasen эy ishq,
Navoiy rishtai jonin mugʻanniy udining tori.`,
    vocabulary: [
      { word: 'Kamand', definition: 'Qalʼa devorlariga otiladigan ilgakli arqon', origin: 'forscha' },
      { word: 'Gʻamu andesha ayyori', definition: 'Aqlning hiylasi, aql tadbirkorligi', origin: 'arabcha' },
      { word: 'Sunʼ meʼmori', definition: 'Yaratuvchi, Alloh taolo', origin: 'arabcha' },
      { word: 'Kahgil', definition: 'Somonli loy suvoq', origin: 'forscha' },
      { word: 'Pargor', definition: 'Sirkul, doira chizgich', origin: 'forscha' },
      { word: 'Mosivo', definition: 'Allohdan boshqa barcha narsalar, moddiy borliq', origin: 'arabcha' },
      { word: 'Bud va Namud', definition: 'Bud – asl mohiyat, mavjudlik; Namud – tashqi koʻrinish, shakl', origin: 'forscha' },
      { word: 'Hubob', definition: 'Suv yoki may ustidagi koʻpik, pufakcha', origin: 'arabcha' },
      { word: 'Mugʻanniy', definition: 'Cholgʻuchi, sozanda', origin: 'arabcha' }
    ],
    couplets: [
      {
        number: 1,
        originalText: `Kamand uchiga yetkurmas gʻamu andesha ayyori,\nBiyik chekmish magar mayxona tomin sunʼ meʼmori.`,
        proseTranslation: `Aql va tadbirkorlik arqonining uchi mayxona tomiga yetolmaydi; chunki Yaratuvchi bu mayxona tomuni nihoyatda baland qilib qurgan.`,
        poeticArts: [
          { name: 'Istiora', targetWords: 'mayxona tomi', explanation: 'Orif qalbining maʼrifati va ilohiy haqiqat baland saroyga qiyoslangan.' },
          { name: 'Tashxis', targetWords: 'gʻamu andesha ayyori', explanation: 'Aql va tashvish makkor kishiga oʻxshatilgan.' }
        ],
        literalMeaning: 'Mayxona shu qadar balandki, unga arqon bilan ham chiqib boʻlmaydi.',
        sufiMeaning: 'Najmiddin Komilov: Ilohiy maʼrifatni faqat mantiq va aql vositasida anglab boʻlmaydi; unga faqat qalb va ishq orqali yetishiladi.'
      },
      {
        number: 2,
        originalText: `Xumorim zaʼfida kahgil isi to yetti mast oʻldum,\nSuvalmishdur magar may loyidin mayxona devori.`,
        proseTranslation: `Xumorim tarqab, holsizlanayotganimda somonli loy hidi dimogʻimga urilib, yana mast boʻldim; ehtimol mayxona devori may loyi bilan suvalgandir.`,
        poeticArts: [
          { name: 'Husni taʼlil', targetWords: 'may loyidin suvalmishdur', explanation: 'Mayxona devoridan may hidi kelishining sababini uning may loyidan suvalganligi bilan chiroyli asoslash.' }
        ],
        literalMeaning: 'Mayxona devori paxsasi may hidi taratib, odamni mast qiladi.',
        sufiMeaning: 'Solikning iymoni susayganda pir dargohiga yaqinlashsa, uning tashqi muhitidan ham maʼnaviy shavq oladi.'
      },
      {
        number: 5,
        originalText: `Koʻringan mosivo budi эmas, balki namudidur,\nMay ustida hubobu mavj shaklining namudori.`,
        proseTranslation: `Koʻzga koʻringan bu moddiy dunyo (mosivo) asl mohiyat (bud) emas, balki may yuzidagi toʻlqin va pufakchalar kabi oʻtkinchi bir koʻrinishdir (namuddur).`,
        poeticArts: [
          { name: 'Tazod va Tajnis', targetWords: 'bud / namud', explanation: 'Asl mohiyat va zohiriy koʻrinish ziddiyati.' },
          { name: 'Tamseel', targetWords: 'May ustida hubobu mavj', explanation: 'Falsafiy qoidani may va toʻlqin misolida koʻrgazmali dalillash.' }
        ],
        literalMeaning: 'May ustidagi koʻpik mayning oʻzi emas, uning vaqtinchalik shaklidir.',
        sufiMeaning: 'Kategoriya tahlili (Najmiddin Komilov): Mohiyat va hodisa, mazmun va shakl. Koinotdagi barcha narsalar Alloh qudratining namoyon boʻlishidir, oʻzlari mustaqil mavjud emas.'
      },
      {
        number: 9,
        originalText: `Navosidin fano chun hosil oʻldi, qilgasen эy ishq,\nNavoiy rishtai jonin mugʻanniy udining tori.`,
        proseTranslation: `Ilohiy ohangdan fano hosil boʻlgach, ey ishq, Navoiyning jon ipini oʻsha ilohiy sozandaning ud cholgʻusiga tor qilib bogʻlagil!`,
        poeticArts: [
          { name: 'Tajnis va Ihtiqaq', targetWords: 'Navosidin / Navoiy', explanation: 'Shoir taxallusi va kuy-ohang (navo) oʻrtasidagi uygʻunlik.' },
          { name: 'Tashbeh', targetWords: 'rishtai jonin udining tori', explanation: 'Jon ipining cholgʻu toriga qiyoslanishi.' }
        ],
        literalMeaning: 'Sozandaning navosidan mast boʻlib, uning soziga tor boʻlish orzusi.',
        sufiMeaning: 'Fano filloh: Inson butunlay oʻzligini unutib, koinotdagi ilohiy uygʻunlik (Navo) bilan birga yangraydi.'
      }
    ],
    overallMeaning: 'Najmiddin Komilov taʼkidlaganidek: "Mazkur gʻazalda tasavvuf falsafasining bilish nazariyasi ifodalab berilgan: avval olamni bilish mushkulligidan sarosimaga tushish, hayratlanish, keyin tashqi dunyo narsa-hodisalarini mushohada eta boshlash, zohiriy mushohadadan asta-sekin mohiyatni idrok qilishga oʻtish."',
    nimkosaSubtext: 'Aql qanchalik oʻtkir boʻlmasin, u faqat zohiriy shakllarni oʻrganadi. Haqiqatga esa qalbiy sezgi, yaʼni ilmul yaqin, aynul yaqin va haqqul yaqin bosqichlari orqali erishiladi.',
    didacticConclusion: 'Tashqi dunyoning yaltiroq koʻrinishlariga mahliyo boʻlmaslik, narsalarning asl mohiyatini anglashga intilish kerak.'
  },
  {
    id: 'ghazal-xilatin-to-aylamish',
    firstLine: 'Xilʼatin to aylamish jonon qizil, sorigʻ, yashil',
    title: 'Qizil, Sorigʻ, Yashil (Ranglar Falsafasi)',
    poet: 'Alisher Navoiy',
    divan: 'Xazoyin ul-maoniy',
    commentator: 'Jamol Kamol',
    sourceBook: 'Gʻazallar, sharhlar (1991)',
    genre: 'Oshiqona-irfoniy (Ranglar poetikasi)',
    compositionType: 'Yakpora va musalsal gʻazal',
    meter: {
      name: 'Hazaji musammani axrabi makfufi mahzuf',
      rukns: 'Mafʼulu mafoiylu mafoiylu faʼulun',
      pattern: '- - V / V - - V / V - - V / V - -',
      rhythmEffect: 'Musiqiy va rang-barang tovlanuvchi jilvakor ohang.'
    },
    rhymeAndRadif: {
      radif: 'qizil, sorigʻ, yashil',
      qofiyaWords: ['har yon', 'har on', 'davron', 'alvon', 'imkon', 'oson', 'devon'],
      rhymeType: 'Muraddaf gʻazal (uch soʻzli murakkab radif).'
    },
    text: `Xilʼatin to aylamish jonon qizil, sorigʻ, yashil,
Shuʼlayi ohim эsar har yon qizil, sorigʻ, yashil.

Gulshan эtdim ishq sahrosin, samumi ohdin,
Kim эsar ul dasht aro har on qizil, sorigʻ, yashil.

Orazi, xoling ila xatting xayolidin эrur,
Koʻzlarimning oldida davron qizil, sorigʻ, yashil.

Shishadek koʻnglimdadir gulzori husning yodidin
Tobadonning aksidek alvon qizil, sorigʻ, yashil...

Laʼlgun may tutqil oltin jom birlan sabzada,
Kim bulardin yaxshi yoʻq imkon qizil, sorigʻ, yashil.

Faqr aro beranglik dushvor эrur behad, valek,
Xirqada tikmak эrur oson qizil, sorigʻ, yashil.

Ey, Navoiy, oltinu shingarfu zangor istama,
Boʻldi nazming rangidin devon qizil, sorigʻ, yashil...`,
    vocabulary: [
      { word: 'Xilʼat', definition: 'Qimmatbaho toʻn, sarupo', origin: 'arabcha' },
      { word: 'Samum', definition: 'Sahroning qaynoq garmseli, issiq shamol', origin: 'arabcha' },
      { word: 'Tobadon', definition: 'Eshik yoki deraza tepasidagi rangli oynali darcha', origin: 'forscha' },
      { word: 'Shingarf', definition: 'Qizil rangli boʻyoq, kinovar', origin: 'forscha' },
      { word: 'Zangor', definition: 'Yashil rangli boʻyoq', origin: 'forscha' },
      { word: 'Beranglik', definition: 'Rangsizlik, soflik, dunyoviy sifatlardan xoli boʻlish', origin: 'forscha-oʻzbekcha' }
    ],
    couplets: [
      {
        number: 1,
        originalText: `Xilʼatin to aylamish jonon qizil, sorigʻ, yashil,\nShuʼlayi ohim эsar har yon qizil, sorigʻ, yashil.`,
        proseTranslation: `Jonon oʻz libosini qizil, sariq, yashil rangda kiygandan buyon, yuragimdan chiqayotgan ohim shuʼlalari ham har tomonga qizil, sariq, yashil boʻlib taralmoqda.`,
        poeticArts: [
          { name: 'Tanosub', targetWords: 'qizil, sorigʻ, yashil', explanation: 'Uch xil rangning butun gʻazal boʻylab radif sifatida mutanosib kelishi.' },
          { name: 'Mubolagʻa', targetWords: 'shuʼlayi ohim... qizil, sorigʻ, yashil', explanation: 'Oshiq ohi alangasining rang-barang boʻlib esishi.' }
        ],
        literalMeaning: 'Yorning rang-barang libosi oshiq xayolini lol qilib, uning butun tuygʻularini shu ranglarga boʻyagan.',
        sufiMeaning: 'Jamol Kamol tahlili: Yaratganning butun tabiatda, gullarda, fasllarda rang-barang jilvalanishi (tajalliy). Olam-odam birligi.'
      },
      {
        number: 3,
        originalText: `Orazi, xoling ila xatting xayolidin эrur,\nKoʻzlarimning oldida davron qizil, sorigʻ, yashil.`,
        proseTranslation: `Yuzing (qizilligi), xoling (qoraligi) va labing ustidagi xating (sabzaligi) xayolidan koʻz oʻngimda butun olam kamalakdek qizil, sariq, yashil boʻlib jilvalanadi.`,
        poeticArts: [
          { name: 'Tanosub', targetWords: 'oraz (qizil), xol (qora/sariq fon), xatt (yashil)', explanation: 'Yuz aʼzolari va ranglar oʻrtasidagi mukammal uygʻunlik.' }
        ],
        literalMeaning: 'Yuzning gulrangligi, mayin xatning maysarangligi olamni jilvalantiradi.',
        sufiMeaning: 'Inson kamolot sari borar ekan, Yaratganning cheksiz nurlarini koinotdagi ranglarda idrok etadi.'
      },
      {
        number: 7,
        originalText: `Ey, Navoiy, oltinu shingarfu zangor istama,\nBoʻldi nazming rangidin devon qizil, sorigʻ, yashil...`,
        proseTranslation: `Ey Navoiy, kitobni bezash uchun oltin, qizil (shingarf) va yashil (zangor) boʻyoqlarni qidırma; chunki sening sheʼringning rang-barangligidan devoning oʻzi qizil, sariq, yashil boʻldi!`,
        poeticArts: [
          { name: 'Faxriya', targetWords: 'Boʻldi nazming rangidin devon...', explanation: 'Shoirning oʻz sheʼriyatidagi soʻz boyligi va tasviriy goʻzallik bilan faxrlanishi.' },
          { name: 'Tanosub', targetWords: 'oltin (sariq), shingarf (qizil), zangor (yashil)', explanation: 'Kalligrafiya va naqqoshlik boʻyoqlari bilan radif ranglarining uygʻunligi.' }
        ],
        literalMeaning: 'Devon sahifalarini boʻyoqlar bilan bezashga hojat yoʻq, sheʼrning oʻzi beqiyos rangindir.',
        sufiMeaning: 'Haqiqiy sheʼriyat – sunʼiy bezaklardan xoli boʻlib, hayot va ilohiy haqiqatning tirik ranglariga yoʻgʻrilgan boʻlishi kerak.'
      }
    ],
    overallMeaning: 'Jamol Kamol taʼrifiga koʻra: "Navoiy gʻazali – haqiqatning rangin olamiga bitilgan oʻlmas madhiyadir. Unda oshiqning ohi, yorning jamoli, tabiat fasllari, fano va faqr yoʻli ranglar orqali falsafiy mushohada qilingan."',
    nimkosaSubtext: 'Olamdagi barcha xilma-xillik (kasrat) aslida Yagona Haqning (Vahdatning) rang-barang jilvalaridir. Faqr ahli tashqi yaltiroqlikdan voz kechib, maʼnaviy rangsizlik (beranglik)ka intiladi.',
    didacticConclusion: 'Hayot goʻzalligini biryoqlama emas, uning barcha quvonch va iztiroblari, rang-barang koʻrinishlari bilan butunlikda sevish va qadrlash lozim.'
  },
  {
    id: 'ghazal-el-pariyu-hurni',
    firstLine: 'El pariyu hurni degay gumon qilgʻoncha xoʻb',
    title: 'El Pariyu Hurni Degay...',
    poet: 'Alisher Navoiy',
    divan: 'Xazoyin ul-maoniy ("Navodir ush-shabob", 43-gʻazal)',
    commentator: 'Dilnavoz Yusupova',
    sourceBook: 'Istiqlol davri oʻzbek navoiyshunosligi (2022)',
    genre: 'Oshiqona, taʼrifu tavsif',
    compositionType: 'Yakpora gʻazal',
    meter: {
      name: 'Hazaji musammani axrabi makfufi mahzuf',
      rukns: 'Mafʼulu mafoiylu mafoiylu faʼulun',
      pattern: '- - V / V - - V / V - - V / V - -',
      rhythmEffect: 'Oshiqona taʼrif va tasvirga mos oʻynoqi va jilvakor ritm.'
    },
    rhymeAndRadif: {
      radif: 'xoʻb',
      qofiyaWords: ['oncha', 'davroncha', 'rayhoncha', 'hayroncha', 'Kanʼoncha', 'jononcha', 'yolgʻoncha', 'insoncha', 'rizvoncha'],
      rhymeType: 'Muraddaf gʻazal'
    },
    text: `El pariyu hurni degay gumon qilgʻoncha xoʻb,
Lek эrur huri pariyzodim mening yuz oncha xoʻb.

Davr ichinda fitna ham koʻp, xoʻb ham behad, valek 
Boʻlmagʻay mingdin bir ul sarfitnai davroncha xoʻb.

Kun bila tun yuz bila xattingcha xoʻb эrmas yaqin 
Boʻlsa bu gulshanda boʻlgʻaylar gulu rayhoncha xoʻb.

Husnigʻa ushshoq agar mencha halok эrmas, ne ayb 
Kim, kishi ul yuzni koʻrmaydur meni hayroncha xoʻb.

Husnidin toʻymogʻ эmas mumkinki, behad xoʻb эrur, 
Toʻygʻay эrdim, boʻlsa эrdi Yusufi Kanʼoncha xoʻb.

Ey koʻngul, Farhodu Majnun boʻlgʻay эrdi bizcha zor, 
Boʻlsa эrdi Layliyu Shirin bizning jononcha xoʻb.

Buki tarki ishq эtarlar vaʼda yolgʻon qilsa yor, 
Qilsa boʻlmas, boʻlsa yor ul vaʼdasi yolgʻoncha xoʻb.

Ey koʻngul, huru pariy vasfin эshittim, goʻyiyo 
Hech qaysi odamiyligʻda эmas insoncha xoʻb.

Ey Navoiy, koʻyining xori koʻzumga gulcha bor 
Kim, эrur ollimda koʻyi ravzai rizvoncha xoʻb.`,
    vocabulary: [
      { word: 'Xoʻb', definition: '1) yaxshi; 2) goʻzal; 3) afzal', origin: 'forscha' },
      { word: 'Sarfitna', definition: 'Fitna qoʻzgʻovchi, fitna boshlovchi', origin: 'arabcha-forscha' },
      { word: 'Xatt', definition: 'Lab ustidagi mayin tuklar, sabza', origin: 'arabcha' },
      { word: 'Ushshoq', definition: 'Oshiqlar', origin: 'arabcha' },
      { word: 'Xor', definition: 'Tikan', origin: 'forscha' },
      { word: 'Ravzai rizvon', definition: 'Jannat bogʻi', origin: 'arabcha' },
      { word: 'Koʻy', definition: 'Koʻcha, mahalla, yor yashaydigan manzil', origin: 'forscha' }
    ],
    couplets: [
      {
        number: 1,
        originalText: `El pariyu hurni degay gumon qilgʻoncha xoʻb,\nLek эrur huri pariyzodim mening yuz oncha xoʻb.`,
        proseTranslation: `Xalq pari va hurni oʻzlari tasavvur qilganlaricha juda goʻzal deyishadi, lekin mening huri parizodim ulardan yuz chandon goʻzalroqdir.`,
        poeticArts: [
          { name: 'Tafzil (Ustunlik tashbehi)', targetWords: 'yuz oncha xoʻb', explanation: 'Yorning gʻayritabiiy mavjudotlar boʻlmish hur va paridan ham yuz baravar goʻzalligi taʼkidlangan.' }
        ],
        literalMeaning: 'Oshiqning yori dunyodagi har qanday xayoliy va jannatiy goʻzallardan ustun.',
        sufiMeaning: 'Haq jamoli har qanday aqliy tasavvur va mavhum timsollardan beqiyos darajada yuksakdir.'
      },
      {
        number: 5,
        originalText: `Husnidin toʻymogʻ эmas mumkinki, behad xoʻb эrur,\nToʻygʻay эrdim, boʻlsa эrdi Yusufi Kanʼoncha xoʻb.`,
        proseTranslation: `Uning husniga toʻyish aslo mumkin emas, chunki u behad goʻzaldir; agar u Kanʼonlik Yusufchalik boʻlganida toʻygan boʻlardim (lekin u Yusufdan ham goʻzalroq).`,
        poeticArts: [
          { name: 'Talmeh', targetWords: 'Yusufi Kanʼon', explanation: 'Yusuf alayhissalomning tengsiz husniga va Misrdagi ochlik qissasiga ishora.' },
          { name: 'Mubolagʻa', targetWords: 'toʻygʻay erdim...', explanation: 'Yusufdek goʻzallikka toʻyish mumkin, ammo bu yorning husniga aslo toʻyib boʻlmaydi.' }
        ],
        literalMeaning: 'Yorning husni har qanday dunyoviy goʻzallik mezonidan yuqori.',
        sufiMeaning: 'Yusuf – ilohiy husnning bir zarrasi edi. Mutlaq Husn esa cheksiz boʻlib, uning mushohadasiga toʻyish imkonsizdir.'
      },
      {
        number: 6,
        originalText: `Ey koʻngul, Farhodu Majnun boʻlgʻay эrdi bizcha zor,\nBoʻlsa эrdi Layliyu Shirin bizning jononcha xoʻb.`,
        proseTranslation: `Ey koʻngil, agar Layli bilan Shirin bizning jononimizdek goʻzal boʻlganlarida edi, Farhod bilan Majnun ham bizchalik zor va xor boʻlardilar.`,
        poeticArts: [
          { name: 'Talmeh', targetWords: 'Farhod, Majnun, Layli, Shirin', explanation: 'Mumtoz adabiyotdagi buyuk oshiq-maʼshuqlar silsilasiga murojaat.' },
          { name: 'Tanosub', targetWords: 'Farhod – Shirin, Majnun – Layli', explanation: 'Oshiq va maʼshuq juftliklarining uygʻunligi.' }
        ],
        literalMeaning: 'Oshiqning dardi va sevgisi afsonaviy oshiqlarnikidan ham ustun qoʻyilmoqda.',
        sufiMeaning: 'Komil insonning Haq yoʻlidagi talabi va riyozati barcha qissalardan teranroqdir.'
      },
      {
        number: 8,
        originalText: `Ey koʻngul, huru pariy vasfin эshittim, goʻyiyo\nHech qaysi odamiyligʻda эmas insoncha xoʻb.`,
        proseTranslation: `Ey koʻngil, hur va parilarning taʼrifini koʻp eshitganman, ammo ularning hech biri odamiylik, insoniylik fazilatlari bobida inson farzandiga teng kela olmaydi.`,
        poeticArts: [
          { name: 'Tazod', targetWords: 'huru pariy / inson', explanation: 'Gʻayritabiiy ruhoniyat bilan odamiylikning solishtirilishi.' }
        ],
        literalMeaning: 'Inson fazilati va odamiylik har qanday paridan afzaldir.',
        sufiMeaning: 'Inson – "ashrafi maxluqot" (yaratilganlarning eng sharaflisi) va Allohning yerdagi xalifasidir. Malaklar ham insonga taʼzim qilgan.'
      }
    ],
    overallMeaning: 'Dilnavoz Yusupova tahlili: Gʻazalda ёр гўзаллиги бошдан охиригача тараннум этилади. Лекин мутафаккир шоир оддий ҳусни зоҳирийни мадҳ этиш билан чекланмай, инсоннинг маънавий камолоти ва одамийлик шарафини ҳур ва парилардан ҳам юқори қўяди.',
    nimkosaSubtext: 'Inson zotiga berilgan "odamiylik" sifatining ulugʻvorligi. Yor timsolida Komil inson va Haq jamolining yer yuzidagi aksi namoyon boʻladi.',
    didacticConclusion: 'Tashqi husnga emas, qalb goʻzalligi va odamiylikka intilmoq lozim. Vafodorlik va qatʼiyat chin insoniylikning bosh belgisidir.'
  },
  {
    id: 'ghazal-kongillar-nolasi',
    firstLine: 'Koʻngillar nolasi zulfung kamandin nogahon koʻrgach',
    title: 'El Komin Ravo Ayla...',
    poet: 'Alisher Navoiy',
    divan: 'Xazoyin ul-maoniy ("Gʻaroyib us-sigʻar", 133-bet)',
    commentator: 'Muhammad Ali',
    sourceBook: 'Gʻazallar, sharhlar (1991)',
    genre: 'Oshiqona-falsafiy (Kosa va nimkosa)',
    compositionType: 'Musalsal va voqeaband gʻazal',
    meter: {
      name: 'Hazaji musammani solim',
      rukns: 'Mafoiylun mafoiylun mafoiylun mafoiylun',
      pattern: 'V - - - / V - - - / V - - - / V - - -',
      rhythmEffect: 'Musiqiy, harakatli va xalqona hikmatlarga boy oʻlchov.'
    },
    rhymeAndRadif: {
      radif: 'koʻrgach',
      qofiyaWords: ['yilon', 'qon', 'nishon', 'xazon', 'oshyon', 'karvon', 'qayon', 'komron', 'xurdadon'],
      rhymeType: 'Muraddaf gʻazal, mutlaq qofiya'
    },
    text: `Koʻngillar nolasi zulfung kamandin nogahon koʻrgach,
Erur andoqki, qushlar qichqirishqaylar yilon koʻrgach.

Koʻngul chokin koʻzumda ashki rangin эlga fosh эtdi,
Baligʻ zaxmini fahm aylarlar эl daryoda qon koʻrgach.

Koʻzum qon yosh toʻkar, netib koʻngul zaxmin yashuraykim,
Toparlar эrda zaxmin sayd qonidin nishon koʻrgach.

Boʻyalgʻon qon aro jon pardasi эtgach gʻami hajring,
Koʻngul bogʻida bargedurki, ol oʻlmish xazon koʻrgach.

Xadanging zaxmi ichindin balolarni yugʻon yoshim
Erur tiflekim, olgʻay qush bolarin oshyon koʻrgach.

Koʻngillar naqdini toroj эtarga yopmogʻing burqaʼ
Aningdekdurki, yuz bogʻlar qaroqchi karvon koʻrgach.

Yuzin zulf ichra to koʻrdum, oʻlub vasligʻa эtmasmen,
Gʻalat эrmish yuz urmoq kecha oʻtni har qayon koʻrgach.

Erur chun olam ichra joh foniy, yaxshi ot boqiy,
Bas, эl komin ravo ayla oʻzingni komron koʻrgach.

Navoiy, xurdai nazmingni andoq aylading tahrir,
Ki sochqay xurda boshing uzra shohi xurdadon koʻrgach.`,
    vocabulary: [
      { word: 'Kamand', definition: 'Tuzoq, band, ov arqoni', origin: 'forscha' },
      { word: 'Burqaʼ', definition: 'Parda, niqob, yuzni yopuvchi mato', origin: 'arabcha' },
      { word: 'Xadang', definition: 'Oʻq, kamon oʻqi', origin: 'forscha' },
      { word: 'Xurda', definition: '1) Nozik sir, yashirin maʼno; 2) Oltin zarrasi, mayda tanga', origin: 'forscha' },
      { word: 'Xurdadon', definition: 'Nozik sirlarni biluvchi, teran idrokli kishi', origin: 'forscha' }
    ],
    couplets: [
      {
        number: 1,
        originalText: `Koʻngillar nolasi zulfung kamandin nogahon koʻrgach,\nErur andoqki, qushlar qichqirishqaylar yilon koʻrgach.`,
        proseTranslation: `Oshiqlar koʻnglining sening sochlaring tuzogʻini koʻrganda faryod solishi – qushlarning ilonni koʻrganda chirqillashib qichqirganiga oʻxshaydi.`,
        poeticArts: [
          { name: 'Tashbeh / Tamseel', targetWords: 'Koʻngil – qush, nola – qichqiriq, zulf – yilon', explanation: 'Kosa: zulfni koʻrganda koʻngilning dod solishi; Nimkosa: Odamzotning bu beqaror oʻzgaruvchan dunyo tuzoqlarida qolib chekayotgan faryodi.' },
          { name: 'Tanosub', targetWords: 'qush, qichqirmoq, ilon', explanation: 'Tabiatdagi hodisalarning oʻzaro uygʻunligi.' }
        ],
        literalMeaning: 'Yorning qora sochini koʻrgan oshiqlar xavf va hayrat ichra qoladilar.',
        sufiMeaning: 'Zulf – kasrat (dunyo mashaqqatlari). Ruh bu dunyo tuzogʻiga tushgach, oʻzining asriy vatanini qoʻmsab faryod chekadi.'
      },
      {
        number: 2,
        originalText: `Koʻngul chokin koʻzumda ashki rangin эlga fosh эtdi,\nBaligʻ zaxmini fahm aylarlar эl daryoda qon koʻrgach.`,
        proseTranslation: `Koʻnglimning teshilganini koʻzimdagi qonli qizil yoshlar hammaga oshkor qildi; xuddi daryoda qon koʻringanida odamlar baliqning yaralanganini bilib olganlaridek.`,
        poeticArts: [
          { name: 'Tamseel', targetWords: 'daryoda qon koʻrgach baligʻ zaxmini fahm aylamoq', explanation: 'Koʻzdagi qonli yosh orqali dildagi yarani sezishni baliq va daryo qoni bilan dalillash.' }
        ],
        literalMeaning: 'Oshiqning dildagi dardi uning qonli koʻz yoshlari orqali fosh boʻladi.',
        sufiMeaning: 'Koʻngil tubidagi ilohiy ishq alangasini yashirib boʻlmaydi, u albatta zohir boʻladi.'
      },
      {
        number: 8,
        originalText: `Erur chun olam ichra joh foniy, yaxshi ot boqiy,\nBas, эl komin ravo ayla oʻzingni komron koʻrgach.`,
        proseTranslation: `Modomiki bu olamda mol-davlat va mansab oʻtkinchidir, faqat yaxshi nom abadiy qoladi; bas, oʻzing baxt-saodatga erishganingda, xalqning ham murod-maqsadini ravo qilgin!`,
        poeticArts: [
          { name: 'Tazod', targetWords: 'foniy / boqiy', explanation: 'Oʻtkinchi dunyo va boqiy nom ziddiyati.' },
          { name: 'Irsoli masal / Hikmat', targetWords: 'joh foniy, yaxshi ot boqiy', explanation: 'Falsafiy-axloqiy qoida.' }
        ],
        literalMeaning: 'Mansab va boylik oʻtkinchi, inson faqat yaxshilik va saxovat bilan nom qoldiradi.',
        sufiMeaning: 'Komil insoniyatning bosh sharti – el xizmatida boʻlish va ezgulik urugʻini sepish.'
      },
      {
        number: 9,
        originalText: `Navoiy, xurdai nazmingni andoq aylading tahrir,\nKi sochqay xurda boshing uzra shohi xurdadon koʻrgach.`,
        proseTranslation: `Ey Navoiy, oʻz sheʼriyatingdagi nozik sirlarni shu qadar ustakorlik bilan yozdingki, donishmand nozikfahm podshoh uni koʻrgach, boshingga oltin tangalar sochar!`,
        poeticArts: [
          { name: 'Tajnis', targetWords: 'xurdai (sir/nozik maʼno) / xurda (oltin tangalar) / xurdadon (nozikfahm)', explanation: 'Uch karra jinos.' },
          { name: 'Faxriya', targetWords: 'shohi xurdadon koʻrgach', explanation: 'Oʻz sheʼrining yuksak badiiy qadriga berilgan yuksak baho.' }
        ],
        literalMeaning: 'Navoiy oʻz gʻazalidagi sirlar va sanʼatlarga yuqori baho beradi.',
        sufiMeaning: 'Maʼrifat xazinasi soʻz orqali kashf etilgan boʻlib, uni faqat qalb koʻzi ochiq zotlar toʻliq anglaydi.'
      }
    ],
    overallMeaning: 'Muhammad Ali tahlili: "Birgina gʻazalda yetti xil obraz (qush, ilon, baliq, daryo, ovlangan sayd, xazon, yosh bola, qaroqchi, karvon, kechagi olov) ishlatilib, hayotning keng panoramasi chizilgan. Soʻngra gʻazal bosh maqsadga – inson umrining mazmuni yaxshi ot qoldirishda ekanligi haqidagi ulugʻvor falsafaga kelib taqaladi."',
    nimkosaSubtext: 'Kosa tagidagi nimkosa: Odam zotiga berilgan kuch-qudrat va imkoniyat oʻtkinchidir. Boylik, goʻzallik oʻtib ketadi; faqat xalq manfaati yoʻlida qilingan xolis xizmat va ezgu nom boqiy yashaydi.',
    didacticConclusion: 'Oʻzing komronlikka (baxtga) yetganingda oʻzgalarning hojatini chiqarishga shoshil, chunki dunyoda faqat yaxshilik mangu qoladi.'
  },
  {
    id: 'ghazal-balo-dashti-aro',
    firstLine: 'Balo dashti aro Majnun meningdek koʻrmamish davron',
    title: 'Tilim Lolu Sirishkim Qon',
    poet: 'Alisher Navoiy',
    divan: 'Xazoyin ul-maoniy ("Navodir ush-shabob")',
    commentator: 'Abdurashid Abdugʻafurov',
    sourceBook: 'Gʻazallar, sharhlar (1991)',
    genre: 'Ijtimoiy-falsafiy liroyika, musajjaʼ',
    compositionType: 'Musalsal va musajjaʼ gʻazal',
    meter: {
      name: 'Hazaji musammani solim',
      rukns: 'Mafoiylun mafoiylun mafoiylun mafoiylun',
      pattern: 'V - - - / V - - - / V - - - / V - - -',
      rhythmEffect: 'Har bir misrada 4 tadan, baytda 8 tadan ichki qofiya (sajʼ) vositasida vujudga kelgan ulkan ritmik zarb va fojiaviy keskinlik.'
    },
    rhymeAndRadif: {
      radif: 'yoʻq (qofiyaga tayangan)',
      qofiyaWords: ['davron', 'poyon', 'qon', 'hijron', 'darmon', 'imkon', 'pinhon', 'osmon', 'ahzon', 'jon', 'oson'],
      rhymeType: 'Musajjaʼ gʻazal (har bayt ichida mustaqil qofiyalar zanjiri).'
    },
    text: `Balo dashti aro Majnun meningdek koʻrmamish davron,
Quyondek har zamon bir koʻrmagan vodiyda sargardon.

Ne anduhu malolimgʻa baliyat dashtidek gʻoyat,
Ne savdoyu jujunimgʻa malomat bahridek poyon.

Tunum dayjur, oʻzum ranjur, ichim gʻamnoku bagʻrim chok,
Tilim lolu tanim behol, ishim afgʻon, sirishkim qon.

Zaifu dardu gʻam pesha, nahifu mehnat andisha,
Zalilu besaru somon, qatili xanjari hijron.

Figʻonimdin falak gʻamgin, sirishkimdin jahon rangin,
Na ishqim oʻtigʻa taskin, na hajrim dardigʻa darmon.

Boshim gʻam toshidin pora, tanim hajr oʻqidin yora,
Koʻngul bu yoragʻa chora topargʻa topmayin imkon.

Koʻzum namliq, boʻyum xamliq, ichim anduhu motamliq,
Na hamdamlik, na marhamliq topib bu mehnati pinhon.

Manga ne yoʻru ne hamdam, manga ne doʻst, ne mahram,
Manga ne chora, ne marham, manga ne sabru ne somon.

Bu ahvoli tabohimdin, figʻoni umrkohimdin,
Ham oʻtluq dudi ohimdin qarorib kulbai ahzon.

Falak rahzan, zamon dushman, badan ravzan uza ravzan,
Qolib jon xisravidin tan, chiqib tan kishvaridin jon.

Navoiy, boʻlsa mehnat koʻp ichakoʻr jomi ishrat koʻp,
Necha boʻlsa suubat koʻp, qilur vahdat mayi oson.`,
    vocabulary: [
      { word: 'Dayjur', definition: 'Qop-qorongʻu, qora tun', origin: 'arabcha' },
      { word: 'Ranjur', definition: 'Ranjigan, xasta, aziyat chekkan', origin: 'forscha' },
      { word: 'Nahif', definition: 'Oziqqan, darmonsiz, nimjon', origin: 'arabcha' },
      { word: 'Besaru somon', definition: 'Boshpanasiz, chorasiz, qashshoq', origin: 'forscha' },
      { word: 'Ravzan uza ravzan', definition: 'Teshik ustiga teshik, elakdek gʻalvir boʻlgan', origin: 'forscha' },
      { word: 'Suubat', definition: 'Qiyinchilik, ogʻir mashaqqat', origin: 'arabcha' },
      { word: 'Rahzan', definition: 'Qaroqchi, yoʻltoʻsar', origin: 'forscha' }
    ],
    couplets: [
      {
        number: 3,
        originalText: `Tunum dayjur, oʻzum ranjur, ichim gʻamnoku bagʻrim chok,\nTilim lolu tanim behol, ishim afgʻon, sirishkim qon.`,
        proseTranslation: `Keçam qop-qorongʻu, oʻzim xastayu ozordaman, ichim gʻam-gʻussaga toʻla, bagʻrim esa pora-poradir; tilim kalimaga kelmay lol, tanim madorisiz, ishim ohu faryod, koʻz yoshim esa qondir.`,
        poeticArts: [
          { name: 'Musajjaʼ (Ichki sajʼ)', targetWords: 'dayjur / ranjur; gʻamnok / chok; lolu / behol; afgʻon / qon', explanation: 'Bitta bayt ichida sakkiz boʻlakning juft-juft qofiyalanishi orqali mislsiz dinamik ritm va musiqiylik hosil qilingan.' }
        ],
        literalMeaning: 'Insoniyat boshiga tushishi mumkin boʻlgan eng ogʻir ruhiy va jismoniy fojea tasviri.',
        sufiMeaning: 'Nafsni sindirish va zohiriy quvvatlarning butunlay soʻnishi (Faqru fano intihosi).'
      },
      {
        number: 10,
        originalText: `Falak rahzan, zamon dushman, badan ravzan uza ravzan,\nQolib jon xisravidin tan, chiqib tan kishvaridin jon.`,
        proseTranslation: `Falak qaroqchidir, zamona esa dushmandir; butun vujudim teshik ustiga teshik (jarohatlardan gʻalvir) boʻldi; tan jon podshohidan judo boʻlib qoldi, jon esa tan mamlakatini tark etmoqda.`,
        poeticArts: [
          { name: 'Tardi aks', targetWords: 'jon xisravidin tan / tan kishvaridin jon', explanation: 'Mисра охирида "тан" ва "жон" сўзларининг акс тартибда такрорланиши.' },
          { name: 'Tashbeh / Istiora', targetWords: 'jon xisravi, tan kishvari, badan ravzan', explanation: 'Vujud mamlakatga, jon shohga, jarohatlar darchalarga oʻxshatilgan.' }
        ],
        literalMeaning: 'Zolimlarning jafo va zulmidan halokat yoqasiga kelgan pok insonning faryodi.',
        sufiMeaning: 'Ruhning jism qafasidan ozod boʻlib, oʻz asliga intilishi.'
      }
    ],
    overallMeaning: 'Abdurashid Abdugʻafurov: "Bu gʻazal nafaqat Navoiy merosida, balki butun oʻtmish adabiyotimizdagi ijtimoiy lirikaniing eng yorqin namunasidir. Unda zamona nohaqliklari, adolatsizlik, erku qadr-qimmatning toptalishiga qarshi keskin norozilik va faryod mujassam."',
    nimkosaSubtext: 'Falakni "rahzan" (qaroqchi) va zamonni "dushman" deb atash orqali shoir oʻz davridagi zulmkor kuchlarga nisbatan oʻzining murosa qilmas nafratini ifodalagan.',
    didacticConclusion: 'Har qanday ogʻir kulfat va nohaqlik oldida insoniy qadr-qimmatni yoʻqotmaslik, ruhiy matonat koʻrsatish va Vahdat mayi (maʼnaviy komillik) bilan yengish kerak.'
  },
  {
    id: 'ghazal-parim-bolsa',
    firstLine: 'Parim boʻlsa uchub qochsam ulusdin to qanotim bor',
    title: 'Parim Boʻlsa Uchub Qochsam...',
    poet: 'Alisher Navoiy',
    divan: 'Xazoyin ul-maoniy',
    commentator: 'Ibrohim Haqqul',
    sourceBook: 'Gʻazallar, sharhlar (1991)',
    genre: 'Irfoniy-falsafiy (Tajarrud va Ozodlik)',
    compositionType: 'Musalsal gʻazal',
    meter: {
      name: 'Hazaji musammani solim',
      rukns: 'Mafoiylun mafoiylun mafoiylun mafoiylun',
      pattern: 'V - - - / V - - - / V - - - / V - - -',
      rhythmEffect: 'Parvozkor, yuksak maʼnaviy intilishni ifodalovchi ravon va shiddatli vazn.'
    },
    rhymeAndRadif: {
      radif: 'bor',
      qofiyaWords: ['qanotim', 'hayotim', 'najotim', 'uyotim', 'davotim', 'sabotim', 'iltifotim'],
      rhymeType: 'Muraddaf gʻazal'
    },
    text: `Parim boʻlsa uchub qochsam ulusdin to qanotim bor,
Qanotim kuysa uchmoqdin, yugursam to hayotim bor.

Chiqib bu dayrdin Isogʻa nechun hamnafas boʻlmay,
Bihamdulilloh, tajarrud birla himmatdin qanotim bor.

Xaloyiq suhbatidin ming gʻamim bordurki, muft oʻlgʻay,
Agar ming jon berib bilsamki, bir gʻamdin najotim bor.

Chekib agʻyordin yuz javru tortib yordin ming gʻam,
Ne oʻzga xalqdin gʻayrat, ne oʻzimdin uyotim bor.

Kechib koʻzdin yozay bir xatki, dahr ahliga koʻz solmay,
Bu damkim koʻz savodidin qaro, koʻzdin davotim bor.

Tilar koʻnglum qushi anqodin oʻtgay nari yuz vodiy,
Muningdek sayr эtarga Qofdin ortuq sabotim bor.

Navoiy, bilki, shah koʻngli manga qayd oʻlmasa, billah,
Agar kavnaynga xoshok chogʻligʻ iltifotim bor.`,
    vocabulary: [
      { word: 'Ulus', definition: 'Xalq, omma, el', origin: 'turkiy' },
      { word: 'Tajarrud', definition: 'Barcha moddiy va dunyoviy aloqalardan butunlay uzilish, yolgʻiz Haqqa bogʻlanish', origin: 'arabcha' },
      { word: 'Muft', definition: 'Bekerga, tekinga, arzon', origin: 'forscha' },
      { word: 'Davot', definition: 'Siyohdon', origin: 'arabcha' },
      { word: 'Kavnayn', definition: 'Ikki olam (bu dunyo va oxirat)', origin: 'arabcha' },
      { word: 'Xoshok', definition: 'Xashak, choʻp, arzimas narsa', origin: 'forscha' }
    ],
    couplets: [
      {
        number: 1,
        originalText: `Parim boʻlsa uchub qochsam ulusdin to qanotim bor,\nQanotim kuysa uchmoqdin, yugursam to hayotim bor.`,
        proseTranslation: `Qaniydi qanotlarim boʻlsa-yu, qanotim kuchga toʻla ekan, bu olomon orasidan uchib qochsam; agar parvoz qilaverib qanotlarim kuyib ketsa, tirik ekanman, piyoda yugurib boʻlsa ham qochsam!`,
        poeticArts: [
          { name: 'Mubolagʻa', targetWords: 'uchub qochsam... yugursam to hayotim bor', explanation: 'Xalqning riyo va gʻavgʻolaridan qochish istagining cheksiz ifodasi.' },
          { name: 'Tanosub', targetWords: 'par, qanot, uchmoq', explanation: 'Parvoz semantikasi.' }
        ],
        literalMeaning: 'Jamiyatdagi mayda tashvishlar va munofiqlikdan qochish istagi.',
        sufiMeaning: 'Ibrohim Haqqul tahlili: Qanot nima sababdan kuyadi? Quyosh olovidan, yaʼni Husn Quyoshining – Haq nurining taftidan! Bu oddiy qochish emas, oʻzlikdan kechib gʻayb olamiga parvozdir.'
      },
      {
        number: 2,
        originalText: `Chiqib bu dayrdin Isogʻa nechun hamnafas boʻlmay,\nBihamdulilloh, tajarrud birla himmatdin qanotim bor.`,
        proseTranslation: `Bu dunyo butxonasidan (dayridan) chiqib ketib, nega toʻrtinchi falakka koʻtarilgan Iso Masihga hamnafas boʻlmayin? Allohga shukrki, menda moddiyatdan uzilish (tajarrud) va yuksak himmatdan qanotlarim bor!`,
        poeticArts: [
          { name: 'Talmeh', targetWords: 'Isogʻa hamnafas boʻlmoq', explanation: 'Iso alayhissalomning samoga koʻtarilib, tajarrud (tarkidunyo) timsoli boʻlganiga ishora.' },
          { name: 'Tashbeh', targetWords: 'tajarrud birla himmatdin qanot', explanation: 'Maʼnaviy sifatlar qush qanotiga oʻxshatilgan.' }
        ],
        literalMeaning: 'Dunyoni tark etib, samoviy yuksaklikka erishish.',
        sufiMeaning: 'Ruhning toʻrt unsur (tuproq, suv, olov, havo) qolipidan chiqib, ilohiy rutbaga parvozi.'
      },
      {
        number: 7,
        originalText: `Navoiy, bilki, shah koʻngli manga qayd oʻlmasa, billah,\nAgar kavnaynga xoshok chogʻligʻ iltifotim bor.`,
        proseTranslation: `Ey Navoiy, qasamki, agar ul Shohning (Allohning) koʻngli menga bogʻlanmagan boʻlsa, mening ikki olamga (kavnaynga) hatto xashakchalik ham eʼtiborim yoʻqdir!`,
        poeticArts: [
          { name: 'Iyhom / Talmeh', targetWords: 'shah koʻngli', explanation: 'Zohiran davr shohi (Husayn Boyqaro), botinan esa yagona Shoh – Alloh taolo.' },
          { name: 'Tazod va Mubolagʻa', targetWords: 'kavnayn (ikki dunyo) / xoshok chogʻligʻ', explanation: 'Ikki olam saltanatini bir xas-choʻpga teng koʻrish.' }
        ],
        literalMeaning: 'Shoh marhamati boʻlmasa, dunyo boyliklari bir tiyin.',
        sufiMeaning: 'Ibrohim Haqqul: Navoiyning nazdidagi asl Shoh – Allohdir. Uning roziligi va muhabbati oldida butun borliq arzimas xashak kabidir.'
      }
    ],
    overallMeaning: 'Ibrohim Haqqul tahlili: "Navoiyning bu gʻazalida ‘Man’likdan kechib, ‘Sen’likka (Haqqa) yuz burgan lirik qahramonning sirli kechinmalari, olami gʻayb sari parvozi tasvirlangan. Bu dunyo havaslaridan xalos boʻlib, qalbni sof ilohiy sirlar bilan toʻldirish maqsad qilingan."',
    nimkosaSubtext: 'Inson qalbini mayda gʻiybatlar, mansabparastlik va kibr kirlatadi. Faqat komil himmat va pok eʼtiqodgina insonni bu botqoqlikdan qutqara oladi.',
    didacticConclusion: 'Dunyoviy maqtovlar va hoyu havaslarga aldanmaslik, ichki maʼnaviy erkinlikni va Haqqa boʻlgan vafodorlikni har narsadan baland qoʻyish zarur.'
  }
];

