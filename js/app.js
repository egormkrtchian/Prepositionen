const anDat = [
    {verb: 'ändern', prep: 'an', kasus: 'dat', ubersetz: 'змінювати', sich: 'no'},
    {verb: 'erkennen', prep: 'an', kasus: 'dat', ubersetz: 'впізнавати', sich: 'no'},
    {verb: 'erkranken', prep: 'an', kasus: 'dat', ubersetz: 'хворіти на', sich: 'no'},
    {verb: 'fehlen', prep: 'an', kasus: 'dat', ubersetz: 'падати', sich: 'no'},
    {verb: 'arbeiten', prep: 'an', kasus: 'dat', ubersetz: 'працювати', sich: 'no'},
    {verb: 'forschen', prep: 'an', kasus: 'dat', ubersetz: 'досліджувати', sich: 'no'},
    {verb: 'gewinnen', prep: 'an', kasus: 'dat', ubersetz: 'підвищувати', sich: 'no'},
    {verb: 'hindern', prep: 'an', kasus: 'dat', ubersetz: 'заважати', sich: 'no'},
    {verb: 'leiden', prep: 'an', kasus: 'dat', ubersetz: 'залежити від', sich: 'no'},
    {verb: 'mangeln', prep: 'an', kasus: 'dat', ubersetz: 'невистачати', sich: 'no'},
    {verb: 'mitwirken', prep: 'an', kasus: 'dat', ubersetz: 'сприяти', sich: 'no'},
    {verb: 'sich beteiligen', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'yes'},
    {verb: 'sich erfreuen', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'yes'},
    {verb: 'sich orientiren', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'yes'},
    {verb: 'sich rächen', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'yes'},
    {verb: 'schreiben', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'sterben', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'teilhaben', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'teilnehmen', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'zunehmen', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'zweifeln', prep: 'an', kasus: 'dat', ubersetz: '', sich: 'no'}
];

const anAkk = [
    {verb: 'anpassen', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'appelieren', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'denken', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich halten', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'liefern', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich machen', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'richten', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'schicken', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'senden', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'schreiben', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich wenden', prep: 'an', kasus: 'akk', ubersetz: '', sich: 'yes'}
];

const aufDat = [
    {verb: 'basieren', prep: 'auf', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'baharren', prep: 'auf', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'beruhen', prep: 'auf', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'bestehen', prep: 'auf', kasus: 'dat', ubersetz: '', sich: 'no'},
    {verb: 'rufen', prep: 'auf', kasus: 'dat', ubersetz: '', sich: 'no'}
];

const aufAkk = [
    {verb: 'achten', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'ankommen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'anspielen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'antworten', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'aufpassen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich belaufen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'sich berufen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'sich beschränken', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'sich besinnen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'sich beziehen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'bringen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'drängen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'eingehen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich einigen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'einladen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich einlassen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'sich einstellen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'erhöhen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich freuen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'hinweisen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'hoffen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'hören', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'kommen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich konzentrieren', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'reagieren', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'richten', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'schießen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'schimpfen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'schwören', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sinken', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich spezialisieren', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'stehen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'steigen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich verlassen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'verschieben', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'vertrauen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'berzichten', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'sich vorbereiten', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'yes'},
    {verb: 'warten', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'wirken', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'zählen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'zugehen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'},
    {verb: 'zurückkommen', prep: 'auf', kasus: 'akk', ubersetz: '', sich: 'no'}
];

const ausDat = [
    {verb: 'bestehen (-,a,a)', prep: 'aus', kasus: 'dat', ubersetz: 'складатися з', sich: 'no'},
    {verb: 'sich ergeben (i,a,e)', prep: 'aus', kasus: 'dat', ubersetz: 'випливає з', sich: 'yes'},
    {verb: 'ersehen (ie,a,e)', prep: 'aus', kasus: 'dat', ubersetz: 'видно з', sich: 'no'},
    {verb: 'folgen', prep: 'aus', kasus: 'dat', ubersetz: 'висновувати з', sich: 'no'},
    {verb: 'machen', prep: 'aus', kasus: 'dat', ubersetz: 'стврорювати з', sich: 'no'},
    {verb: 'resultieren', prep: 'aus', kasus: 'dat', ubersetz: 'рузультувати з', sich: 'no'},
    {verb: 'schließen', prep: 'aus', kasus: 'dat', ubersetz: 'висновувати з', sich: 'no'},
    {verb: 'übersetzen', prep: 'aus', kasus: 'dat', ubersetz: 'перекладати з', sich: 'no'}
];

const beiDat = [
    {verb: 'arbeiten', prep: 'bei', kasus: 'dat', ubersetz: 'працюівани на', sich: 'no'},
    {verb: 'sich bedanken', prep: 'bei', kasus: 'dat', ubersetz: 'подякувати комусь', sich: 'yes'},
    {verb: 'sich beklagen', prep: 'bei', kasus: 'dat', ubersetz: 'скаржитись', sich: 'yes'},
    {verb: 'sich beschweren', prep: 'bei', kasus: 'dat', ubersetz: 'скаржитись', sich: 'yes'},
    {verb: 'sich erkundigen', prep: 'bei', kasus: 'dat', ubersetz: 'дізнаватися у когось', sich: 'yes'},
    {verb: 'helfen (i,a,o)', prep: 'bei', kasus: 'dat', ubersetz: 'допомогати з', sich: 'no'},
    {verb: 'sich informieren', prep: 'bei', kasus: 'dat', ubersetz: 'інформуватися у когось', sich: 'yes'},
    {verb: 'mitmachen', prep: 'bei', kasus: 'dat', ubersetz: 'брати учвсть у', sich: 'no'},
    {verb: 'mitwirken', prep: 'bei', kasus: 'dat', ubersetz: 'брати учвсть у', sich: 'no'},
    {verb: 'stören', prep: 'bei', kasus: 'dat', ubersetz: 'бути незручним комусь', sich: 'no'},
    {verb: 'unterstützen', prep: 'bei', kasus: 'dat', ubersetz: 'підтримувати у', sich: 'no'},
    {verb: 'zörgen', prep: 'bei', kasus: 'dat', ubersetz: 'вагатися перед', sich: 'no'},
    {verb: 'zugucken', prep: 'bei', kasus: 'dat', ubersetz: 'давитися на щось під час', sich: 'no'},
    {verb: 'zuschauen', prep: 'bei', kasus: 'dat', ubersetz: 'спостерігати за чимось', sich: 'no'},
    {verb: 'zusehen (ie,a,e)', prep: 'bei', kasus: 'dat', ubersetz: 'спостерігати за чимось', sich: 'no'}
];

const gegenAkk = [
    {verb: 'antreten (i,a,e)', prep: 'gegen', kasus: 'akk', ubersetz: 'змагатися', sich: 'no'},
    {verb: 'demonstrieren', prep: 'gegen', kasus: 'akk', ubersetz: 'демотструвати прити', sich: 'no'},
    {verb: 'sich entscheiden (-,ie,ie)', prep: 'gegen', kasus: 'akk', ubersetz: 'відхилити, голосувати проти', sich: 'yes'},
    {verb: 'gewinnen (-,a,o)', prep: 'gegen', kasus: 'akk', ubersetz: 'перемогати прити', sich: 'no'},
    {verb: 'handeln', prep: 'gegen', kasus: 'akk', ubersetz: 'діяти проти', sich: 'no'},
    {verb: 'kämpfen', prep: 'gegen', kasus: 'akk', ubersetz: 'боротися прити, воювати проти', sich: 'no'},
    {verb: 'protestieren', prep: 'gegen', kasus: 'akk', ubersetz: 'протестувати проти', sich: 'no'},
    {verb: 'sein', prep: 'gegen', kasus: 'akk', ubersetz: 'бути проти', sich: 'no'},
    {verb: 'siegen', prep: 'gegen', kasus: 'akk', ubersetz: 'перемогати проти', sich: 'no'},
    {verb: 'sprechen (i,a,o)', prep: 'gegen', kasus: 'akk', ubersetz: 'говорити проти', sich: 'no'},
    {verb: 'stimmen', prep: 'gegen', kasus: 'akk', ubersetz: 'голосувати проти', sich: 'no'},
    {verb: 'stoßen (ö,ie,o)', prep: 'gegen', kasus: 'akk', ubersetz: 'зіткнутися з', sich: 'no'},
    {verb: 'sich sträuben', prep: 'gegen', kasus: 'akk', ubersetz: 'притивитися', sich: 'yes'},
    {verb: 'tretten (i,a,e)', prep: 'gegen', kasus: 'akk', ubersetz: 'кидати виклик', sich: 'no'},
    {verb: 'verstoßen (ö,ie,o)', prep: 'gegen', kasus: 'akk', ubersetz: 'порушувати', sich: 'no'},
    {verb: 'sich verteidigen', prep: 'gegen', kasus: 'akk', ubersetz: 'захищатися від', sich: 'yes'},
    {verb: 'sich wehren', prep: 'gegen', kasus: 'akk', ubersetz: 'боротися проти', sich: 'yes'}
];

const furAkk = [
    {verb: 'sich anmelden', prep: 'für', kasus: 'akk', ubersetz: 'подавати заявку', sich: 'yes'},
    {verb: 'sich engagiren', prep: 'für', kasus: 'akk', ubersetz: "забов'язуватися", sich: 'yes'},
    {verb: 'sich entscheiden (-,ie,ie)', prep: 'für', kasus: 'akk', ubersetz: 'вирішити', sich: 'yes'},
    {verb: 'sich entschuldigen', prep: 'für', kasus: 'akk', ubersetz: 'вибачатися', sich: 'yes'},
    {verb: 'sich interessieren', prep: 'für', kasus: 'akk', ubersetz: 'цікавитися', sich: 'yes'},
    {verb: 'arbeiten', prep: 'für', kasus: 'akk', ubersetz: 'працювати', sich: 'no'},
    {verb: 'danken', prep: 'für', kasus: 'akk', ubersetz: 'дякувати за', sich: 'no'},
    {verb: 'sein', prep: 'für', kasus: 'akk', ubersetz: 'підтримувати', sich: 'no'},
    {verb: 'ausgeben (i,a,e)', prep: 'für', kasus: 'akk', ubersetz: "витрачатися на", sich: 'no'},
    {verb: 'sich bedanken', prep: 'für', kasus: 'akk', ubersetz: 'вдячний за', sich: 'yes'},
    {verb: 'demonstrieren', prep: 'für', kasus: 'akk', ubersetz: 'думонструвати', sich: 'no'},
    {verb: 'kämpfen', prep: 'für', kasus: 'akk', ubersetz: 'боротися за', sich: 'no'},
    {verb: 'sorgen', prep: 'für', kasus: 'akk', ubersetz: 'пілкуватися за', sich: 'no'},
    {verb: 'sprechen (i,a,o)', prep: 'für', kasus: 'akk', ubersetz: 'говорити за', sich: 'no'},
    {verb: 'stimmen', prep: 'für', kasus: 'akk', ubersetz: 'голосувати за', sich: 'no'},
    {verb: 'werben', prep: 'für', kasus: 'akk', ubersetz: 'рекламувати', sich: 'no'},
    {verb: 'begeistern', prep: 'für', kasus: 'akk', ubersetz: 'захоплюватися для', sich: 'no'},
    {verb: 'sich einsetzen', prep: 'für', kasus: 'akk', ubersetz: 'застосовувати зусилля за', sich: 'yes'},
    {verb: 'eintreten (i,a,e)', prep: 'für', kasus: 'akk', ubersetz: 'віддавати підтримку', sich: 'no'},
    {verb: 'entschädigen', prep: 'für', kasus: 'akk', ubersetz: 'компенсувати за', sich: 'no'},
    {verb: 'sich halten (ä,ie,a)', prep: 'für', kasus: 'akk', ubersetz: 'приймати за', sich: 'yes'},
    {verb: 'sich schämen', prep: 'für', kasus: 'akk', ubersetz: 'соромитися за', sich: 'yes'},
    {verb: 'verurteilen', prep: 'für', kasus: 'akk', ubersetz: 'засуджувати за', sich: 'no'},
    {verb: 'verwenden', prep: 'für', kasus: 'akk', ubersetz: 'використовувати для', sich: 'no'},
    {verb: 'sich eignen', prep: 'für', kasus: 'akk', ubersetz: 'підходити', sich: 'yes'},
    {verb: 'geradestehen (-,a,a)', prep: 'für', kasus: 'akk', ubersetz: 'нести відповідальність за', sich: 'no'},
    {verb: 'sich rächen', prep: 'für', kasus: 'akk', ubersetz: 'мститися за', sich: 'yes'},
    {verb: 'stehen(-,a,a)', prep: 'für', kasus: 'akk', ubersetz: 'відомий як', sich: 'no'}
];


const inDat = [
    {verb: 'bestehen', prep: 'in', kasus: 'dat', ubersetz: 'складатися в', sich: 'no'},
    {verb: 'sich irren', prep: 'in', kasus: 'dat', ubersetz: 'помилятися в', sich: 'yes'},
    {verb: 'sich täuschen', prep: 'in', kasus: 'dat', ubersetz: 'помилятися щодо', sich: 'yes'},
    {verb: 'sich üben', prep: 'in', kasus: 'dat', ubersetz: 'тренуватися в', sich: 'yes'},
    {verb: 'unterrichten', prep: 'in', kasus: 'dat', ubersetz: 'викладати в', sich: 'no'},
    {verb: 'übertreffen (i,a,o)', prep: 'in', kasus: 'dat', ubersetz: 'перевершити в', sich: 'no'}
];
    const mitDat = [
        {verb: 'sich beschäftigen', prep: 'mit', kasus: 'dat', ubersetz: 'займатися чимось', sich: 'yes'},
        {verb: 'diskutieren', prep: 'mit', kasus: 'dat', ubersetz: 'діскусувати з', sich: 'no'},
        {verb: 'sprechen', prep: 'mit', kasus: 'dat', ubersetz: 'розмовляти з', sich: 'no'},
        {verb: 'reden', prep: 'mit', kasus: 'dat', ubersetz: 'балакати з', sich: 'no'},
        {verb: 'telefonieren', prep: 'mit', kasus: 'dat', ubersetz: 'розмовляти по телефону з', sich: 'no'},
        {verb: 'sich treffen (i,a,o)', prep: 'mit', kasus: 'dat', ubersetz: "зустрічатися з", sich: 'no'},
        {verb: 'sich unterhalten (ä,ie,a)', prep: 'mit', kasus: 'dat', ubersetz: 'спілкуватися', sich: 'yes'},
        {verb: 'sich verabreden', prep: 'mit', kasus: 'dat', ubersetz: 'домовлятися про зустріч з', sich: 'yes'},
        {verb: 'anfangen', prep: 'mit', kasus: 'dat', ubersetz: 'розпочинати з', sich: 'no'},
        {verb: 'aufhören', prep: 'mit', kasus: 'dat', ubersetz: 'закінчувати з', sich: 'no'},
        {verb: 'sich austauschen', prep: 'mit', kasus: 'dat', ubersetz: 'спілкуватися з', sich: 'yes'},
        {verb: 'beauftrgen', prep: 'mit', kasus: 'dat', ubersetz: 'поручати, наказувати', sich: 'no'},
        {verb: 'sich belassen', prep: 'mit', kasus: 'dat', ubersetz: 'займатися чимось', sich: 'yes'},
        {verb: 'beginnen (-,a,o)', prep: 'mit', kasus: 'dat', ubersetz: 'починати з', sich: 'no'},
        {verb: 'sich begnügen', prep: 'mit', kasus: 'dat', ubersetz: 'задовольнитися чимось', sich: 'yes'},
        {verb: 'sich einigen', prep: 'mit', kasus: 'dat', ubersetz: 'домовитися з', sich: 'yes'},
        {verb: 'enden', prep: 'mit', kasus: 'dat', ubersetz: 'закінчувати', sich: 'no'},
        {verb: 'experimentieren', prep: 'mit', kasus: 'dat', ubersetz: 'експерементувати', sich: 'no'},
        {verb: 'handeln', prep: 'mit', kasus: 'dat', ubersetz: 'займатися торгівлею', sich: 'no'},
        {verb: 'kämpfen', prep: 'mit', kasus: 'dat', ubersetz: 'боротися з, воювати з', sich: 'no'},
        {verb: 'multiplizieren', prep: 'mit', kasus: 'dat', ubersetz: 'множити на', sich: 'no'},
        {verb: 'rechnen', prep: 'mit', kasus: 'dat', ubersetz: 'розраховувати на', sich: 'no'},
        {verb: 'schimpfen', prep: 'mit', kasus: 'dat', ubersetz: 'сердитися на', sich: 'no'},
        {verb: 'sich schlagen (ä,u,a)', prep: 'mit', kasus: 'dat', ubersetz: 'боротися з', sich: 'yes'},
        {verb: 'spielen', prep: 'mit', kasus: 'dat', ubersetz: 'гратися з', sich: 'no'},
        {verb: 'streiten (ei,i,i)', prep: 'mit', kasus: 'dat', ubersetz: 'зваритися з', sich: 'no'},
        {verb: 'zu tun habe', prep: 'mit', kasus: 'dat', ubersetz: 'мати справу', sich: 'no'},
        {verb: 'umgehen (-,ing,gegangen)', prep: 'mit', kasus: 'dat', ubersetz: 'обходитися з', sich: 'no'},
        {verb: 'vereinbaren', prep: 'mit', kasus: 'dat', ubersetz: 'домовлятися з, узгоджувати з', sich: 'no'},
        {verb: 'verheireten', prep: 'mit', kasus: 'dat', ubersetz: 'одружуватися', sich: 'no'},
        {verb: 'sich verstehen (-,a,a)', prep: 'mit', kasus: 'dat', ubersetz: 'розумітися з', sich: 'yes'},
        {verb: 'sich vertragen (ä,u,a)', prep: 'mit', kasus: 'dat', ubersetz: 'ладити з', sich: 'yes'},
        {verb: 'verwechseln', prep: 'mit', kasus: 'dat', ubersetz: 'плутати, перемішувати', sich: 'no'},
        {verb: 'zögern', prep: 'mit', kasus: 'dat', ubersetz: 'вагатися з, тягнути час', sich: 'no'},
        {verb: 'zusammenstoßen (ö,ie,o)', prep: 'mit', kasus: 'dat', ubersetz: 'зіткнутися з', sich: 'no'}
    ];
    const nachDat = [
        {verb: '', prep: 'nach', kasus: 'dat', ubersetz: 'змінювати', sich: 'no'},
        {verb: '', prep: 'nach', kasus: 'dat', ubersetz: 'впізнавати', sich: 'no'}
    ];
    const uberAkk = [
        {verb: '', prep: 'uber', kasus: 'akk', ubersetz: '', sich: 'no'},
        {verb: '', prep: 'uber', kasus: 'akk', ubersetz: '', sich: 'no'}
    ];
    const umAkk = [
        {verb: '', prep: 'um', kasus: 'akk', ubersetz: '', sich: 'no'},
        {verb: '', prep: 'um', kasus: 'akk', ubersetz: '', sich: 'no'}
    ];

    const vonDat = [
        {verb: '', prep: 'von', kasus: 'dat', ubersetz: '', sich: 'no'},
    ];
const vorDat = [
    {verb: 'sich ängstigen', prep: 'vor', kasus: 'dat', ubersetz: 'лякатися перед', sich: 'yes'},
    {verb: 'sich ekeln', prep: 'vor', kasus: 'dat', ubersetz: 'відчувати огиду перед', sich: 'yes'},
    {verb: 'fliehen (-,o,o)', prep: 'vor', kasus: 'dat', ubersetz: 'втікати від', sich: 'no'},
    {verb: 'sich fürchten', prep: 'vor', kasus: 'dat', ubersetz: 'боятися перед', sich: 'yes'},
    {verb: 'grauen', prep: 'vor', kasus: 'dat', ubersetz: 'жахатися перед', sich: 'no'},
    {verb: 'sich hüten', prep: 'vor', kasus: 'dat', ubersetz: 'стерегтися перед', sich: 'yes'},
    {verb: 'sich schämen', prep: 'vor', kasus: 'dat', ubersetz: 'соромитися перед', sich: 'yes'},
    {verb: 'schützen', prep: 'vor', kasus: 'dat', ubersetz: 'захищатися від', sich: 'no'},
    {verb: 'verstecken', prep: 'vor', kasus: 'dat', ubersetz: 'ховатися від', sich: 'no'},
    {verb: 'warnen', prep: 'vor', kasus: 'dat', ubersetz: 'попереджати від', sich: 'no'}
];

const zuDat = [
    {verb: 'anhalten (ä,ie,a)', prep: 'zu', kasus: 'dat', ubersetz: 'зупинитися щоб', sich: 'no'},
    {verb: 'anmerken', prep: 'zu', kasus: 'dat', ubersetz: 'зауважити до', sich: 'no'},
    {verb: 'aufrufen (-,ie.u)', prep: 'zu', kasus: 'dat', ubersetz: 'закликати до', sich: 'no'},
    {verb: 'beglückwünschen', prep: 'zu', kasus: 'dat', ubersetz: 'вітати з', sich: 'no'},
    {verb: 'beitragen (ä,u,a)', prep: 'zu', kasus: 'dat', ubersetz: 'допомогати до', sich: 'no'},
    {verb: 'bestimmen', prep: 'zu', kasus: 'dat', ubersetz: 'визначати для', sich: 'no'},
    {verb: 'bewegen(-,o,o)', prep: 'zu', kasus: 'dat', ubersetz: 'переконувати до', sich: 'no'},
    {verb: 'bringen (-,a,a)', prep: 'zu', kasus: 'dat', ubersetz: 'призводити до', sich: 'no'},
    {verb: 'dienen', prep: 'zu', kasus: 'dat', ubersetz: 'служити для', sich: 'no'},
    {verb: 'drängen', prep: 'zu', kasus: 'dat', ubersetz: 'натискати на', sich: 'no'},
    {verb: 'sich entschließen (-,o,o)', prep: 'zu', kasus: 'dat', ubersetz: 'вирішитися на', sich: 'yes'},
    {verb: 'einladen (ä,u,a)', prep: 'zu', kasus: 'dat', ubersetz: 'запрошувати до', sich: 'no'},
    {verb: 'sich entscheiden (-,ie,ie)', prep: 'zu', kasus: 'dat', ubersetz: 'вирішуватися на', sich: 'yes'},
    {verb: 'ermahren', prep: 'zu', kasus: 'dat', ubersetz: 'нагадати про', sich: 'no'},
    {verb: 'ermutigen', prep: 'zu', kasus: 'dat', ubersetz: 'заохочувати до', sich: 'no'},
    {verb: 'erziehen (-,o,o)', prep: 'zu', kasus: 'dat', ubersetz: 'виховувати до', sich: 'no'},
    {verb: 'führen', prep: 'zu', kasus: 'dat', ubersetz: 'призводити до', sich: 'no'},
    {verb: 'gehören', prep: 'zu', kasus: 'dat', ubersetz: 'належити до', sich: 'no'},
    {verb: 'verurteilen', prep: 'zu', kasus: 'dat', ubersetz: 'засудити до', sich: 'no'},
    {verb: 'gratulieren', prep: 'zu', kasus: 'dat', ubersetz: 'вітити з', sich: 'no'},
    {verb: 'halten (ä,ie,a)', prep: 'zu', kasus: 'dat', ubersetz: 'тримати за', sich: 'no'},
    {verb: 'herausfordern', prep: 'zu', kasus: 'dat', ubersetz: 'викликати до', sich: 'no'},
    {verb: 'kommen (-,a.o)', prep: 'zu', kasus: 'dat', ubersetz: 'приходити до', sich: 'no'},
    {verb: 'neigen', prep: 'zu', kasus: 'dat', ubersetz: 'схилятися до', sich: 'no'},
    {verb: 'passen', prep: 'zu', kasus: 'dat', ubersetz: 'підходити до', sich: 'no'},
    {verb: 'raten (ä,ie,a)', prep: 'zu', kasus: 'dat', ubersetz: 'рекомендувати', sich: 'no'},
    {verb: 'rechen', prep: 'zu', kasus: 'dat', ubersetz: 'відносити до', sich: 'no'},
    {verb: 'sagen', prep: 'zu', kasus: 'dat', ubersetz: 'погоджуватися з', sich: 'no'},
    {verb: 'schicken', prep: 'zu', kasus: 'dat', ubersetz: 'надсилати до', sich: 'no'},
    {verb: 'taugen', prep: 'zu', kasus: 'dat', ubersetz: 'підходити для', sich: 'no'},
    {verb: 'tendieren', prep: 'zu', kasus: 'dat', ubersetz: 'мати тендунцію до', sich: 'no'},
    {verb: 'überreden', prep: 'zu', kasus: 'dat', ubersetz: 'переконувати', sich: 'no'},
    {verb: 'sich verabreden', prep: 'zu', kasus: 'dat', ubersetz: 'домовлятися при', sich: 'yes'},
    {verb: 'veranlassen', prep: 'zu', kasus: 'dat', ubersetz: 'змушувати до', sich: 'no'},
    {verb: 'verwenden', prep: 'zu', kasus: 'dat', ubersetz: 'використовувати для', sich: 'no'},
    {verb: 'verführen', prep: 'zu', kasus: 'dat', ubersetz: 'спокушати до', sich: 'no'},
    {verb: 'verleiten', prep: 'zu', kasus: 'dat', ubersetz: 'спокушати до', sich: 'no'},
    {verb: 'verpflichten', prep: 'zu', kasus: 'dat', ubersetz: "зв'язуватися", sich: 'no'},
    {verb: 'wählen', prep: 'zu', kasus: 'dat', ubersetz: 'вибирати на', sich: 'no'},
    {verb: 'werden (i,u,o)', prep: 'zu', kasus: 'dat', ubersetz: 'становитися чимось', sich: 'no'},
    {verb: 'zählen', prep: 'zu', kasus: 'dat', ubersetz: 'налужити до', sich: 'no'},
    {verb: 'zwingen (-,a,u)', prep: 'zu', kasus: 'dat', ubersetz: 'змушувати до', sich: 'no'}
];
const unterDat = [
    {verb: 'leiden (-,i,i)', prep: 'unter', kasus: 'dat', ubersetz: 'страждати від', sich: 'no'},
    {verb: 'stehen (-,a,a)', prep: 'unter', kasus: 'dat', ubersetz: 'бути під впливом', sich: 'no'},
    {verb: 'verstehen (-,a,a)', prep: 'unter', kasus: 'dat', ubersetz: 'роздумувати як', sich: 'no'}
];

const zwischenDat = [
    {verb: 'unterscheiden', prep: 'zwischen', kasus: 'dat', ubersetz: 'розділяти між', sich: 'no'},
    {verb: 'vermitteln', prep: 'zwischen', kasus: 'dat', ubersetz: 'посереднецтвувати', sich: 'no'}
];

let resultArray = []; // додаємо сюди обрані частини

const prepositions = ["aus", "bei", "mit", "nach", "von", "zu", "für", "gegen", "um", "an", "auf", "in", "über", "unter", "vor", "zwischen"];
let variantPrapositionArray; // формується в залежності від кількості препозиції

const btnMakeArray = document.querySelector('.makeArray');
btnMakeArray.addEventListener('click', generateArray);

const prepositionsChois = document.querySelector('.prepositionsChois');
const verbElement = document.getElementById('verb');
const prepositionSelect = document.getElementById('preposition');
const checkButton = document.getElementById('checkButton');
const resultElement = document.getElementById('result');
const translate = document.getElementById('translate');

const buttonContainer = document.getElementById('buttonContainer');
const answerButtons = buttonContainer.getElementsByClassName('answerButton');

const box = document.querySelector('.box');
let currentVerbIndex = 0;
let quantityAnsver= 0;
const next = document.getElementById('next');
const newGame = document.getElementById('newGame');
const boxAnswer = document.querySelector('.boxAnswer');


const prepositionenCheckboxes = document.querySelectorAll('.TipePrepositionen');
const allTipePrepositionenCheckButton = document.getElementById('allTipePrepositionen');

allTipePrepositionenCheckButton.addEventListener('click', ()=>{
  // Отримуємо поточний стан кнопки
  const isSelectAll = allTipePrepositionenCheckButton.textContent === 'вибрати всі';
// Змінюємо стан всіх чекбоксів відповідно до значення isSelectAll
  prepositionenCheckboxes.forEach(function(checkbox){
    checkbox.checked = isSelectAll;
  });
  // Змінюємо текст кнопки відповідно до стану
  allTipePrepositionenCheckButton.textContent = isSelectAll ? 'скасувати' : 'вибрати всі';
});

// Додаємо обробник події на кожен чекбокс для оновлення стану кнопки "Вибрати всі"
prepositionenCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', ubdatePrepositionenCheckButton);
});

function ubdatePrepositionenCheckButton() {
  // Перевіряємо, чи всі чекбокси обрані
  const allChecked = Array.from(prepositionenCheckboxes).every(function(checkbox){
    return checkbox.checked;
  });
  allTipePrepositionenCheckButton.textContent = allChecked ? 'скасувати' : 'вибрати всі';
}
// allTipePrepositionenCheckButton.addEventListener('click', selectAll)
//
// function selectAll(){
//   prepositionenCheckbox.forEach(function(checkbox) {
//     checkbox.checked = true;
//   });
//   allTipePrepositionenCheckButton.removeEventListener('click', selectAll);
//   allTipePrepositionenCheckButton.addEventListener('click', deselectAll);
// };
//
// function deselectAll() {
//   prepositionenCheckbox.forEach(function(checkbox) {
//     checkbox.checked = false;
//   });
//   allTipePrepositionenCheckButton.removeEventListener('click', selectAll);
//   allTipePrepositionenCheckButton.addEventListener('click', deselectAll);
// };


next.addEventListener('click', play);


function play(){
  displayNewVerb();
  resultElement.textContent = '';
  let stopClick = false;

  for (const button of answerButtons) {

    button.addEventListener('mouseover', () => {
      button.classList.add('hover'); // Додавання класу "hover" при наведенні
    });

    button.addEventListener('mouseout', () => {
      button.classList.remove('hover'); // Видалення класу "hover" при видаленні наведення
    });

    button.addEventListener('click', () => {
      if (stopClick) {
        return;
      };

      const selectedPreposition = button.textContent; // Отримуємо текст кнопки
      const currentVerb = resultArray[currentVerbIndex - 1];
      console.log('click');

      if (selectedPreposition === currentVerb.prep) {
        resultElement.textContent = 'Вірно! Правильний прийменник.';
        button.classList.add('rightAnswer');
        stopClick = true;
      } else {
        resultElement.textContent = 'Неправильно. Правильний прийменник: ' + currentVerb.prep;
        //button.style.border = '4px solid red';
        button.classList.add('wrongAnswer');
        for(btn of answerButtons) {
          if (btn.textContent === currentVerb.prep) {
            btn.classList.add('rightAnswer');
          };
        };
        stopClick = true;
      };
    });
  };

};

function displayNewVerb() {
    if (currentVerbIndex < resultArray.length) {
        const currentVerb = resultArray[currentVerbIndex];
        verbElement.textContent = `Дієслово: ${currentVerb.verb}`;
        translate.textContent = `Переклад: ${currentVerb.ubersetz}`;
        // запускаємо формування радіокнопо
        varianteAntwort(prepositions, currentVerb.prep, quantityAnsver );
        createButton(variantPrapositionArray);
        //console.log(prepositions, currentVerb.prep, quantityAnsvers, variantPrapositionArray);
        currentVerbIndex++;
    } else {
        // Якщо всі глаголи використано
        verbElement.textContent = 'Гра закінчена';
        // prepositionSelect.style.display = 'none';
        translate.style.display = 'none';
        box.style.display = 'none';
        next.style.display = 'none';
        newGame.style.display = 'block'
        resultElement.textContent = 'Гра завершена. Дякуємо за гру!';
    };
};

function generateArray() {
    // Отримати значення з чекбоксів та радіокнопок
    const prepositions = Array.from(document.querySelectorAll('input[name="TipePrepositionen"]:checked')).map(input => input.value); // які препозиції
    const quantityAnsvers = document.querySelector('input[name="QuantityAnsvers"]:checked').value; // віріанти відповідей
    const quantityKasus = document.querySelector('input[name="QuantityKasus"]:checked').value; // вибір падежів
    const sichToUse = document.querySelector('input[name="SichToUse"]:checked').value; // використання Sich
    const quantityQuestions = document.querySelector('input[name="QuantityQuestions"]:checked').value; // кількість питаннь
    //console.log("які обрані", prepositions);
// Цикл, який перебирає префікси та додає відповідні елементи зі відповідних масивів до resultArray на основі вибору в налаштуваннях
    for (const preposition of prepositions) {
    switch (preposition) {
        case 'an':
            resultArray = resultArray.concat(anDat);
            resultArray = resultArray.concat(anAkk);
        case 'auf':
            resultArray = resultArray.concat(aufDat);
            resultArray = resultArray.concat(aufAkk);
        case 'aus':
            resultArray = resultArray.concat(ausDat);
            break;
        case 'bei':
            resultArray = resultArray.concat(beiDat);
            break;
        case 'fur':
            resultArray = resultArray.concat(furAkk);
            break;
        case 'gegen':
            resultArray = resultArray.concat(gegenAkk);
            break;
        case 'in':
            resultArray = resultArray.concat(inDat);
            break;
        case 'mit':
            resultArray = resultArray.concat(mitDat);
            break;
        case 'nach':
            resultArray = resultArray.concat(nachDat);
            break;
        case 'uber':
            resultArray = resultArray.concat(uberAkk);
            break;
        case 'um':
            resultArray = resultArray.concat(umAkk);
            break;
        case 'unter':
            resultArray = resultArray.concat(unterDat);
            break;
        case 'von':
            resultArray = resultArray.concat(vonDat);
            break;
        case 'vor':
            resultArray = resultArray.concat(vorDat);
            break;
        case 'zu':
            resultArray = resultArray.concat(zuDat);
            break;
        case 'zwischen':
            resultArray = resultArray.concat(zwischenDat);
            break;
        default:
            break;
        };
    };
    // filter
    let filterOptions = {};
    //якщо не усі падежі
    if (quantityKasus != 'all') { // dat // akk
        filterOptions.kasus = quantityKasus;
        resultArray = filterArray(resultArray, filterOptions);
    };
    // якщо без sich
    if (sichToUse != 'all') {
        filterOptions.sich = sichToUse;
        resultArray = filterArray(resultArray, filterOptions); // yes || no
    };
    // якщо не усі разом
    if (quantityQuestions != 'all') {
        resultArray = getRandomElementsFromArray(resultArray, quantityQuestions);
    };
    console.log("вивидимо відсортований масив", resultArray);
    // запускаємо гру
    prepositionsChois.style.display = 'none';
    boxAnswer.style.display = 'block';
    quantityAnsver = quantityAnsvers;
    play();
};

// фільтруємо сформований масив
function filterArray(resultArray, filterOptions) {
    return resultArray.filter(item => {
        if (filterOptions.verb && item.verb !== filterOptions.verb) {
            return false;
        };
        if (filterOptions.prep && item.prep !== filterOptions.prep) {
            return false;
        };
        if (filterOptions.kasus && item.kasus !== filterOptions.kasus) {
            return false;
        };
        if (filterOptions.ubersetz && item.ubersetz !== filterOptions.ubersetz) {
            return false;
        };
        if (filterOptions.sich && item.sich !== filterOptions.sich) {
            return false;
        };
        return true;
    });
};

function getRandomElementsFromArray(array, n) {
    if (n >= array.length) {
      return array.slice(); // Повертаємо копію всього масиву, якщо n більше або рівне довжині масиву
    } else {
      let newMiwedArray = array.slice(); // Копія масиву, яку будемо перемішувати Повертаємо перші n елементів
      mixArray(newMiwedArray);
      newMiwedArray = newMiwedArray.slice(0, n);
      return newMiwedArray;
    };
};
//переродляє масив, правильна відповідь на першому місці
function varianteAntwort(array, prepositionRight, n) {
  const index = array.indexOf(prepositionRight);
  let arrayPraposition;
  if (index !== -1) {
    array.splice(index, 1); // видаляємо
    array.unshift(prepositionRight) // додаємо
  };
  variantPrapositionArray = array.slice(0, n); // зрізаєто до потрібної кількості елементів
  variantPrapositionArray = mixArray(variantPrapositionArray) // міксуємо
};

// Перемішуємо елементи масива
function mixArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  };
  return array;
};

// створюєто кнопки відповідей з масива препозиції
function createButton(array) {
  // Очищаємо контейнер перед додаванням нових кнопок
 box.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const button = document.createElement("button");
    button.classList.add("answerButton");
    button.textContent = array[i]; // Встановлюємо текст кнопки з елемента масиву
    box.appendChild(button); // Додаємо кнопку до контейнера
  };
};
