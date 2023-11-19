const anDat = [
    {verb: 'ändern', prep: 'an', kasus: 'dat', ubersetz: 'змінювати', sich: 'no'},
    {verb: 'erkennen (-,a,o)', prep: 'an', kasus: 'dat', ubersetz: 'впізнавати', sich: 'no'},
    {verb: 'erkranken', prep: 'an', kasus: 'dat', ubersetz: 'хворіти на', sich: 'no'},
    {verb: 'fehlen', prep: 'an', kasus: 'dat', ubersetz: 'падати', sich: 'no'},
    {verb: 'arbeiten', prep: 'an', kasus: 'dat', ubersetz: 'працювати', sich: 'no'},
    {verb: 'forschen', prep: 'an', kasus: 'dat', ubersetz: 'досліджувати', sich: 'no'},
    {verb: 'gewinnen (-,a,o)', prep: 'an', kasus: 'dat', ubersetz: 'підвищувати', sich: 'no'},
    {verb: 'hindern', prep: 'an', kasus: 'dat', ubersetz: 'заважати', sich: 'no'},
    {verb: 'leiden', prep: 'an', kasus: 'dat', ubersetz: 'хворіти на', sich: 'no'},
    {verb: 'liegen (-,a,a)', prep: 'an', kasus: 'dat', ubersetz: 'залежити від', sich: 'no'},
    {verb: 'mangeln', prep: 'an', kasus: 'dat', ubersetz: 'невистачати', sich: 'no'},
    {verb: 'mitwirken', prep: 'an', kasus: 'dat', ubersetz: 'сприяти', sich: 'no'},
    {verb: 'sich beteiligen', prep: 'an', kasus: 'dat', ubersetz: 'брати участь у', sich: 'yes'},
    {verb: 'sich erfreuen', prep: 'an', kasus: 'dat', ubersetz: 'насолоджуватися чимось, радіти чомусь', sich: 'yes'},
    {verb: 'sich orientiren', prep: 'an', kasus: 'dat', ubersetz: 'орієнтуватися', sich: 'yes'},
    {verb: 'sich rächen', prep: 'an', kasus: 'dat', ubersetz: 'відплачувати комусь', sich: 'yes'},
    {verb: 'schreiben (-,ie,ie)', prep: 'an', kasus: 'dat', ubersetz: 'писати комусь', sich: 'no'},
    {verb: 'sterben (i,a,o)', prep: 'an', kasus: 'dat', ubersetz: 'помирати від чогось', sich: 'no'},
    {verb: 'teilhaben (i,a,o)', prep: 'an', kasus: 'dat', ubersetz: 'брати участь у', sich: 'no'},
    {verb: 'teilnehmen (i,a,o)', prep: 'an', kasus: 'dat', ubersetz: 'брати участь у', sich: 'no'},
    {verb: 'zunehmen', prep: 'an', kasus: 'dat', ubersetz: 'збільшуватися на', sich: 'no'},
    {verb: 'zweifeln', prep: 'an', kasus: 'dat', ubersetz: 'сумніватися у', sich: 'no'}
];

const anAkk = [
    {verb: 'anpassen', prep: 'an', kasus: 'akk', ubersetz: 'пристосовуватися до', sich: 'no'},
    {verb: 'appelieren', prep: 'an', kasus: 'akk', ubersetz: 'апелювати до', sich: 'no'},
    {verb: 'denken (-,a,a)', prep: 'an', kasus: 'akk', ubersetz: 'думати про', sich: 'no'},
    {verb: 'sich halten (ä,ie,a)', prep: 'an', kasus: 'akk', ubersetz: 'дотримуватися', sich: 'yes'},
    {verb: 'liefern', prep: 'an', kasus: 'akk', ubersetz: 'доставляти', sich: 'no'},
    {verb: 'sich machen', prep: 'an', kasus: 'akk', ubersetz: 'братися до, за', sich: 'yes'},
    {verb: 'richten', prep: 'an', kasus: 'akk', ubersetz: 'адреcувати до', sich: 'no'},
    {verb: 'schicken', prep: 'an', kasus: 'akk', ubersetz: 'відправляти (пошту)', sich: 'no'},
    {verb: 'senden', prep: 'an', kasus: 'akk', ubersetz: 'надсилати', sich: 'no'},
    {verb: 'schreiben', prep: 'an', kasus: 'akk', ubersetz: 'писати', sich: 'no'},
    {verb: 'sich wenden', prep: 'an', kasus: 'akk', ubersetz: 'звертатися до', sich: 'yes'}
];

const aufDat = [
    {verb: 'basieren', prep: 'auf', kasus: 'dat', ubersetz: 'базуватися на', sich: 'no'},
    {verb: 'baharren', prep: 'auf', kasus: 'dat', ubersetz: 'наполягати на', sich: 'no'},
    {verb: 'beruhen', prep: 'auf', kasus: 'dat', ubersetz: 'грунтуватися на', sich: 'no'},
    {verb: 'bestehen (-,a,a)', prep: 'auf', kasus: 'dat', ubersetz: 'наполягати, виманати', sich: 'no'},
    {verb: 'ruhen', prep: 'auf', kasus: 'dat', ubersetz: 'грунтуватися на', sich: 'no'}
];

const aufAkk = [
    {verb: 'achten', prep: 'auf', kasus: 'akk', ubersetz: 'звертати увагу на', sich: 'no'},
    {verb: 'ankommen (-,a,o)', prep: 'auf', kasus: 'akk', ubersetz: 'залежити від', sich: 'no'},
    {verb: 'anspielen', prep: 'auf', kasus: 'akk', ubersetz: 'натякати на', sich: 'no'},
    {verb: 'antworten', prep: 'auf', kasus: 'akk', ubersetz: 'відповідати на', sich: 'no'},
    {verb: 'aufpassen', prep: 'auf', kasus: 'akk', ubersetz: 'турбуватися через', sich: 'no'},
    {verb: 'sich belaufen (ä,ief,a)', prep: 'auf', kasus: 'akk', ubersetz: 'складатися з', sich: 'yes'},
    {verb: 'sich berufen (-,ie,u)', prep: 'auf', kasus: 'akk', ubersetz: 'посилатися на', sich: 'yes'},
    {verb: 'sich beschränken', prep: 'auf', kasus: 'akk', ubersetz: 'обмежувати до', sich: 'yes'},
    {verb: 'sich besinnen (-,a,o)', prep: 'auf', kasus: 'akk', ubersetz: 'роздумувати над', sich: 'yes'},
    {verb: 'sich beziehen (-,о,o)', prep: 'auf', kasus: 'akk', ubersetz: 'посилатися на', sich: 'yes'},
    {verb: 'bringen (-,a,а)', prep: 'auf', kasus: 'akk', ubersetz: 'спонукати до', sich: 'no'},
    {verb: 'drängen', prep: 'auf', kasus: 'akk', ubersetz: 'наполягати на', sich: 'no'},
    {verb: 'eingehen (-,i,a)', prep: 'auf', kasus: 'akk', ubersetz: 'відповідати на, реагувати', sich: 'no'},
    {verb: 'sich einigen', prep: 'auf', kasus: 'akk', ubersetz: 'досягати угоди', sich: 'yes'},
    {verb: 'einladen (ä,u,a)', prep: 'auf', kasus: 'akk', ubersetz: 'запрошувати на щось', sich: 'no'},
    {verb: 'sich einlassen (ä,ie,a)', prep: 'auf', kasus: 'akk', ubersetz: 'згодитися на', sich: 'yes'},
    {verb: 'sich einstellen', prep: 'auf', kasus: 'akk', ubersetz: 'налаштовуватися на ', sich: 'yes'},
    {verb: 'erhöhen', prep: 'auf', kasus: 'akk', ubersetz: 'підвишувати до', sich: 'no'},
    {verb: 'sich freuen', prep: 'auf', kasus: 'akk', ubersetz: 'радіти чомусь у майбутьньому', sich: 'no'},
    {verb: 'hinweisen (-,ie,ie)', prep: 'auf', kasus: 'akk', ubersetz: 'вказувати на', sich: 'no'},
    {verb: 'hoffen', prep: 'auf', kasus: 'akk', ubersetz: 'сподіватися на', sich: 'no'},
    {verb: 'hören', prep: 'auf', kasus: 'akk', ubersetz: 'слухати', sich: 'no'},
    {verb: 'kommen (-,a,o)', prep: 'auf', kasus: 'akk', ubersetz: 'прийти до', sich: 'no'},
    {verb: 'sich konzentrieren', prep: 'auf', kasus: 'akk', ubersetz: 'концетруватися на', sich: 'yes'},
    {verb: 'reagieren', prep: 'auf', kasus: 'akk', ubersetz: 'реагувати на', sich: 'no'},
    {verb: 'richten', prep: 'auf', kasus: 'akk', ubersetz: 'націлюватися на', sich: 'no'},
    {verb: 'schießen (-,о,o)', prep: 'auf', kasus: 'akk', ubersetz: 'стріляти в', sich: 'no'},
    {verb: 'schimpfen', prep: 'auf', kasus: 'akk', ubersetz: 'лаятися на', sich: 'no'},
    {verb: 'schwören (-,о,o)', prep: 'auf', kasus: 'akk', ubersetz: 'клястися у чьомусь', sich: 'no'},
    {verb: 'sinken (-,a,u)', prep: 'auf', kasus: 'akk', ubersetz: 'понизитися до', sich: 'no'},
    {verb: 'sich spezialisieren', prep: 'auf', kasus: 'akk', ubersetz: 'спеціалізуватися на', sich: 'yes'},
    {verb: 'stehen (-,a,а)', prep: 'auf', kasus: 'akk', ubersetz: 'цінувати', sich: 'no'},
    {verb: 'steigen (-,ie,ie)', prep: 'auf', kasus: 'akk', ubersetz: 'підніматися на', sich: 'no'},
    {verb: 'sich verlassen (ä,ieß,assen)', prep: 'auf', kasus: 'akk', ubersetz: 'довіряти', sich: 'yes'},
    {verb: 'verschieben (-,о,o)', prep: 'auf', kasus: 'akk', ubersetz: 'перенусти на', sich: 'no'},
    {verb: 'vertrauen', prep: 'auf', kasus: 'akk', ubersetz: 'довіряти кому небудь', sich: 'no'},
    {verb: 'verzichten', prep: 'auf', kasus: 'akk', ubersetz: 'відмовлятися від', sich: 'no'},
    {verb: 'sich vorbereiten', prep: 'auf', kasus: 'akk', ubersetz: 'готуватися', sich: 'yes'},
    {verb: 'warten', prep: 'auf', kasus: 'akk', ubersetz: 'чекати', sich: 'no'},
    {verb: 'wirken', prep: 'auf', kasus: 'akk', ubersetz: 'впливати на', sich: 'no'},
    {verb: 'zählen', prep: 'auf', kasus: 'akk', ubersetz: 'розраховувати на', sich: 'no'},
    {verb: 'zugehen (-,i,a)', prep: 'auf', kasus: 'akk', ubersetz: 'підходити до', sich: 'no'},
    {verb: 'zurückkommen (-,a,o)', prep: 'auf', kasus: 'akk', ubersetz: 'повертитися до', sich: 'no'}
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
        {verb: 'beurteilen', prep: 'nach', kasus: 'dat', ubersetz: 'оцінювати', sich: 'no'},
        {verb: 'duften', prep: 'nach', kasus: 'dat', ubersetz: 'пахнути чимось', sich: 'no'},
        {verb: 'sich erkundigen', prep: 'nach', kasus: 'dat', ubersetz: 'питати при', sich: 'yes'},
        {verb: 'fahnden', prep: 'nach', kasus: 'dat', ubersetz: 'шукати', sich: 'no'},
        {verb: 'forschen', prep: 'nach', kasus: 'dat', ubersetz: 'досліджувати що небудь', sich: 'no'},
        {verb: 'fragen', prep: 'nach', kasus: 'dat', ubersetz: 'запитивати при', sich: 'no'},
        {verb: 'greifen (-,if,if)', prep: 'nach', kasus: 'dat', ubersetz: 'схоплювати', sich: 'no'},
        {verb: 'sich richten', prep: 'nach', kasus: 'dat', ubersetz: 'керувати чимось', sich: 'yes'},
        {verb: 'riechen (-,o,o)', prep: 'nach', kasus: 'dat', ubersetz: 'пахнути чимось', sich: 'no'},
        {verb: 'rufen (-,ie,u)', prep: 'nach', kasus: 'dat', ubersetz: 'кричати на', sich: 'no'},
        {verb: 'schmecken', prep: 'nach', kasus: 'dat', ubersetz: 'смакувати як', sich: 'no'},
        {verb: 'sich sehnen', prep: 'nach', kasus: 'dat', ubersetz: 'прагнути до, тужити за', sich: 'yes'},
        {verb: 'stinken (-,a,u)', prep: 'nach', kasus: 'dat', ubersetz: 'смердіти як', sich: 'no'},
        {verb: 'streben', prep: 'nach', kasus: 'dat', ubersetz: 'прагнути до', sich: 'no'},
        {verb: 'suchen', prep: 'nach', kasus: 'dat', ubersetz: 'шукати', sich: 'no'},
        {verb: 'tasten', prep: 'nach', kasus: 'dat', ubersetz: 'доторкатися до', sich: 'no'},
        {verb: 'sich unterscheiden (-,ie,ie)', prep: 'nach', kasus: 'dat', ubersetz: 'відрізнятися від', sich: 'yes'},
        {verb: 'urteilen', prep: 'nach', kasus: 'dat', ubersetz: 'судити за', sich: 'no'},
        {verb: 'verlangen', prep: 'nach', kasus: 'dat', ubersetz: 'прагнути, вимагати', sich: 'no'}
];
const uberAkk = [
        {verb: 'sich ärgern', prep: 'uber', kasus: 'akk', ubersetz: 'злитися через', sich: 'yes'},
        {verb: 'sich beschweren', prep: 'uber', kasus: 'akk', ubersetz: 'скаржитися через', sich: 'yes'},
        {verb: 'diskutieren', prep: 'uber', kasus: 'akk', ubersetz: 'дискутувати через', sich: 'no'},
        {verb: 'sprechen (i,a,o)', prep: 'uber', kasus: 'akk', ubersetz: 'розмовляти о', sich: 'no'},
        {verb: 'sich freuen', prep: 'uber', kasus: 'akk', ubersetz: 'радіти тому що вже є', sich: 'yes'},
        {verb: 'sich informieren', prep: 'uber', kasus: 'akk', ubersetz: 'інформуватися', sich: 'yes'},
        {verb: 'nachdenken (-,a,acht)', prep: 'uber', kasus: 'akk', ubersetz: 'роздумувати', sich: 'no'},
        {verb: 'reden', prep: 'uber', kasus: 'akk', ubersetz: 'розмовляти', sich: 'no'},
        {verb: 'sich streiten (-,i,i)', prep: 'uber', kasus: 'akk', ubersetz: 'сваритися через', sich: 'yes'},
        {verb: 'sich unterhalten (ä,ie,a)', prep: 'uber', kasus: 'akk', ubersetz: 'розмовляти', sich: 'yes'},
        {verb: 'lachen', prep: 'uber', kasus: 'akk', ubersetz: 'сміятися', sich: 'no'},
        {verb: 'sich aufreden', prep: 'uber', kasus: 'akk', ubersetz: 'збуджуватися через', sich: 'yes'},
        {verb: 'sich austauschen', prep: 'uber', kasus: 'akk', ubersetz: 'обговорювати щось, знайомитися', sich: 'yes'},
        {verb: 'sich beklagen', prep: 'uber', kasus: 'akk', ubersetz: 'скаржитися', sich: 'yes'},
        {verb: 'berichten', prep: 'uber', kasus: 'akk', ubersetz: 'повідомляти при', sich: 'no'},
        {verb: 'sich entrüsten', prep: 'uber', kasus: 'akk', ubersetz: 'обурюватися через', sich: 'yes'},
        {verb: 'sich erregen', prep: 'uber', kasus: 'akk', ubersetz: 'збуджуватися через', sich: 'yes'},
        {verb: 'sich erschrecken (i,a,o)', prep: 'uber', kasus: 'akk', ubersetz: 'лякатися через', sich: 'yes'},
        {verb: 'herrschen', prep: 'uber', kasus: 'akk', ubersetz: 'панувати над', sich: 'no'},
        {verb: 'jammern', prep: 'uber', kasus: 'akk', ubersetz: 'скаржитися на', sich: 'no'},
        {verb: 'jubeln', prep: 'uber', kasus: 'akk', ubersetz: 'радіти через', sich: 'no'},
        {verb: 'klagen', prep: 'uber', kasus: 'akk', ubersetz: 'скаржитись на', sich: 'no'},
        {verb: 'referieren', prep: 'uber', kasus: 'akk', ubersetz: 'доповідати про', sich: 'no'},
        {verb: 'schimpfen', prep: 'uber', kasus: 'akk', ubersetz: 'гомонити, лаяти', sich: 'no'},
        {verb: 'siegen', prep: 'uber', kasus: 'akk', ubersetz: 'перемогати над', sich: 'no'},
        {verb: 'spotten', prep: 'uber', kasus: 'akk', ubersetz: 'насміхатися', sich: 'no'},
        {verb: 'urteilen', prep: 'uber', kasus: 'akk', ubersetz: 'судити при', sich: 'no'},
        {verb: 'verfügen', prep: 'uber', kasus: 'akk', ubersetz: 'мати ресурс', sich: 'no'},
        {verb: 'weinen', prep: 'uber', kasus: 'akk', ubersetz: 'плакати', sich: 'no'},
        {verb: 'sich wundern', prep: 'uber', kasus: 'akk', ubersetz: 'дивуватися чомусь', sich: 'yes'},
        {verb: 'schreiben', prep: 'uber', kasus: 'akk', ubersetz: 'писати при', sich: 'no'}
    ];
const umAkk = [
    {verb: 'sich bewerben (i,a,o)', prep: 'um', kasus: 'akk', ubersetz: 'подовати заявку до', sich: 'yes'},
    {verb: 'bitten (-,a,o)', prep: 'um', kasus: 'akk', ubersetz: 'присити про', sich: 'no'},
    {verb: 'sich kümmern', prep: 'um', kasus: 'akk', ubersetz: 'піклуватися за', sich: 'yes'},
    {verb: 'sich ängstigen', prep: 'um', kasus: 'akk', ubersetz: 'турбуватися за', sich: 'yes'},
    {verb: 'sich bemühen', prep: 'um', kasus: 'akk', ubersetz: 'прагнути до', sich: 'yes'},
    {verb: 'beneiden', prep: 'um', kasus: 'akk', ubersetz: 'заздрити', sich: 'no'},
    {verb: 'betrügen (-,o,o)', prep: 'um', kasus: 'akk', ubersetz: 'обманювати', sich: 'no'},
    {verb: 'betteln', prep: 'um', kasus: 'akk', ubersetz: 'просити за', sich: 'no'},
    {verb: 'sich drehen', prep: 'um', kasus: 'akk', ubersetz: 'обертатися навколо', sich: 'yes'},
    {verb: 'erhöhen', prep: 'um', kasus: 'akk', ubersetz: 'збільшуватися на, підвишуватися', sich: 'no'},
    {verb: 'gehen (-,i,a)', prep: 'um', kasus: 'akk', ubersetz: 'йтися при', sich: 'no'},
    {verb: 'sich handeln', prep: 'um', kasus: 'akk', ubersetz: 'йдеться при, мати справу', sich: 'yes'},
    {verb: 'kämpfen', prep: 'um', kasus: 'akk', ubersetz: 'боротися за', sich: 'no'},
    {verb: 'sich schlagen (ä,u,a)', prep: 'um', kasus: 'akk', ubersetz: 'боротися за, схилятися', sich: 'yes'},
    {verb: 'sich sorgen', prep: 'um', kasus: 'akk', ubersetz: 'турбуватися про', sich: 'yes'},
    {verb: 'spielen', prep: 'um', kasus: 'akk', ubersetz: 'грати за, на', sich: 'no'},
    {verb: 'streiten (-,i,i)', prep: 'um', kasus: 'akk', ubersetz: 'сваритися через', sich: 'no'},
    {verb: 'steigen', prep: 'um', kasus: 'akk', ubersetz: 'зростати', sich: 'no'},
    {verb: 'vermindern', prep: 'um', kasus: 'akk', ubersetz: 'зменшитися на', sich: 'no'},
    {verb: 'verringern', prep: 'um', kasus: 'akk', ubersetz: 'зменшитися на', sich: 'no'},
    {verb: 'werfen (i,a,o)', prep: 'um', kasus: 'akk', ubersetz: 'заохочувати, рекламувати', sich: 'no'},
    {verb: 'wetten', prep: 'um', kasus: 'akk', ubersetz: 'ставити на щоць, закладитися', sich: 'no'},
    {verb: 'wissen (ei,u,u)', prep: 'um', kasus: 'akk', ubersetz: 'знати при', sich: 'no'}
];


const vonDat = [
    {verb: 'ausgehen (-,ing,ang)', prep: 'von', kasus: 'dat', ubersetz: 'припускати', sich: 'no'},
    {verb: 'erzählen', prep: 'von', kasus: 'dat', ubersetz: 'розповідати, пояснувати', sich: 'no'},
    {verb: 'sprechen (i,a,o)', prep: 'von', kasus: 'dat', ubersetz: 'розмовляти при', sich: 'no'},
    {verb: 'reden', prep: 'von', kasus: 'dat', ubersetz: 'розмовляти про', sich: 'no'},
    {verb: 'träumen', prep: 'von', kasus: 'dat', ubersetz: 'мріяти про', sich: 'no'},
    {verb: 'abhängen', prep: 'von', kasus: 'dat', ubersetz: 'залежити від', sich: 'no'},
    {verb: 'ablenken', prep: 'von', kasus: 'dat', ubersetz: 'відволікатся від', sich: 'no'},
    {verb: 'abschreiben (-,ie,ie)', prep: 'von', kasus: 'dat', ubersetz: 'скапіювати з чогось', sich: 'no'},
    {verb: 'absehen', prep: 'von', kasus: 'dat', ubersetz: 'утвиматися від', sich: 'no'},
    {verb: 'sich abwenden', prep: 'von', kasus: 'dat', ubersetz: 'відвернутися від', sich: 'yes'},
    {verb: 'sich ausruhen', prep: 'von', kasus: 'dat', ubersetz: 'відпочивати від', sich: 'yes'},
    {verb: 'befreien', prep: 'von', kasus: 'dat', ubersetz: 'звільняти від', sich: 'no'},
    {verb: 'berichten', prep: 'von', kasus: 'dat', ubersetz: 'повідомляти при', sich: 'no'},
    {verb: 'sich distanzieren', prep: 'von', kasus: 'dat', ubersetz: 'дистанціватися від', sich: 'yes'},
    {verb: 'erfahren (ä,u,a)', prep: 'von', kasus: 'dat', ubersetz: 'дізнаватися при', sich: 'no'},
    {verb: 'sich erholen', prep: 'von', kasus: 'dat', ubersetz: 'відпочивати від', sich: 'yes'},
    {verb: 'sich ernähren', prep: 'von', kasus: 'dat', ubersetz: 'харчуватися чимось', sich: 'yes'},
    {verb: 'erwarten', prep: 'von', kasus: 'dat', ubersetz: 'очікувати від', sich: 'no'},
    {verb: 'halten (ä,ie,a)', prep: 'von', kasus: 'dat', ubersetz: 'мати думку про', sich: 'no'},
    {verb: 'handeln', prep: 'von', kasus: 'dat', ubersetz: 'йти при', sich: 'no'},
    {verb: 'hören', prep: 'von', kasus: 'dat', ubersetz: 'слухати при', sich: 'no'},
    {verb: 'leben', prep: 'von', kasus: 'dat', ubersetz: 'жити, утримувати з', sich: 'no'},
    {verb: 'loskommen (-,a,o)', prep: 'von', kasus: 'dat', ubersetz: 'позбавитися від', sich: 'no'},
    {verb: 'sagen', prep: 'von', kasus: 'dat', ubersetz: 'говрити при', sich: 'no'},
    {verb: 'schreiben (-,ie,ie)', prep: 'von', kasus: 'dat', ubersetz: 'писати про', sich: 'no'},
    {verb: 'überzeugen', prep: 'von', kasus: 'dat', ubersetz: 'заохочувати до', sich: 'no'},
    {verb: 'sich unterschreiben (-,ie,ie)', prep: 'von', kasus: 'dat', ubersetz: 'відрізнятися', sich: 'yes'},
    {verb: 'verlangen', prep: 'von', kasus: 'dat', ubersetz: 'вимагати від, просити при', sich: 'no'},
    {verb: 'verstehen (-,a,a)', prep: 'von', kasus: 'dat', ubersetz: 'розумітися у', sich: 'no'},
    {verb: 'wissen (-,u,u)', prep: 'von', kasus: 'dat', ubersetz: 'знати про', sich: 'no'},
    {verb: 'erzählen', prep: 'von', kasus: 'dat', ubersetz: 'розповідати про', sich: 'no'}
]

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

let game;
const btnMakeArray = document.querySelector('.play');
btnMakeArray.addEventListener('click', ()=>{
  game = 'play';
  generateArray();
  btnBack.style.display = 'block';
  play();
});

const btnLern = document.querySelector('.lern');
btnLern.addEventListener('click', ()=>{
  game = 'lern';
  generateArray();
  btnBack.style.display = 'block';
  displayNewVerbLern();
})

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

const borderCheckBox = document.querySelector('.df');

const prepositionenCheckboxes = document.querySelectorAll('.TipePrepositionen');
const allTipePrepositionenCheckButton = document.getElementById('allTipePrepositionen');

allTipePrepositionenCheckButton.addEventListener('click', ()=>{
  btnBack.style.display = 'block'; // add style to button hover
  // Отримуємо поточний стан кнопки
  const isSelectAll = allTipePrepositionenCheckButton.textContent === 'вибрати всі';
  borderCheckBox.style.border = '2px solid grey';
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


next.addEventListener('click', ()=>{
  if (game === 'plat')  {
    play();
  } else {
    displayNewVerbLern();
  }
});


function play(){
  // btnBack.style.display = 'block';
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
        // resultElement.textContent = 'Вірно! Правильний прийменник.';
        button.classList.add('rightAnswer');
        stopClick = true;
      } else {
        // resultElement.textContent = 'Неправильно. Правильний прийменник: ' + currentVerb.prep;
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
const textWork = document.getElementById('textWork');
function displayNewVerb() {
    textWork.textContent = "Оберіть правильний прийменник";
    if (currentVerbIndex < resultArray.length) {
        const currentVerb = resultArray[currentVerbIndex];
        verbElement.textContent = `${currentVerb.verb}`;
        translate.textContent = `${currentVerb.ubersetz}`;
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

const useMitText = document.getElementById('useMitText');
const useMitKasus = document.getElementById('useMitKasus');

function displayNewVerbLern() {
    useMitText.style.display = 'block';
    textWork.textContent = "Вчимо";

    if (currentVerbIndex < resultArray.length) {
        const currentVerb = resultArray[currentVerbIndex];
        let kasusFull;
        if (currentVerb.kasus === "akk") {
          kasusFull = "Akkusativ";
        } else {
          kasusFull = "Dativ";
        };
        verbElement.textContent = `${currentVerb.verb} ${currentVerb.prep}`;
        // useMitText.textContent = "Використовується з: ";
        useMitKasus.textContent = kasusFull;
        translate.textContent = `${currentVerb.ubersetz}`;
        // запускаємо формування радіокнопо
        // varianteAntwort(prepositions, currentVerb.prep, quantityAnsver );
        // createButton(variantPrapositionArray);
        //console.log(prepositions, currentVerb.prep, quantityAnsvers, variantPrapositionArray);
        currentVerbIndex++;
    } else {
        // Якщо всі глаголи використано
        verbElement.textContent = 'Гра закінчена';
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

    if (resultArray.length === 0) { // if array hat keine element

        borderCheckBox.style.border = '2px solid red';
        console.log("array = 0");
    } else {
        mixArray(resultArray);
        // якщо не усі разом
      //  resultArray = getRandomElementsFromArray(resultArray, quantityQuestions !== 'all' ? quantityQuestions : resultArray.length);
        resultArray = quantityQuestions != 'all' ? resultArray.slice(0, quantityQuestions) : resultArray;
        // if (quantityQuestions != 'all') {
        //     resultArray = cutArray(resultArray, quantityQuestions);
        // };

        console.log("вивидимо відсортований масив", resultArray);
        // запускаємо гру
        prepositionsChois.style.display = 'none';
        boxAnswer.style.display = 'block';
        quantityAnsver = quantityAnsvers;
        // play();
    }
};

const checkboxes = document.querySelectorAll('.TipePrepositionen');
const btnBack = document.getElementById('btnBack');

checkboxes.forEach(function(checkbox) { // change  border zurück
  checkbox.addEventListener('change', function(event) {
    borderCheckBox.style.border = '2px solid grey';
    btnBack.style.display = 'block'; // add style button in hover
  });
});

// add style to button hover
const allQuantityAnsver = document.querySelectorAll('.allQuantityAnsver');
const allQuantityKasus = document.querySelectorAll('.allQuantityKasus');
const allSichToUse = document.querySelectorAll('.allSichToUse');
const allQuantityQuestions = document.querySelectorAll('.allQuantityQuestions');

allQuantityAnsver.forEach(checkbox => {
  addStyleToBtnHover(checkbox);
});

allQuantityKasus.forEach(checkbox => {
  addStyleToBtnHover(checkbox);
});

allSichToUse.forEach(checkbox => {
  addStyleToBtnHover(checkbox);
});

allQuantityQuestions.forEach(checkbox => {
  addStyleToBtnHover(checkbox);
});

function addStyleToBtnHover(checkbox) {
  checkbox.addEventListener('change', ()=>{
    btnBack.style.display = 'block'; // add style to button hover
  })
}

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


// const getRandomElementsFromArray = (array, n) => {
//   if (n >= array.length) {
//     return array.slice(); // Повертаємо копію всього масиву, якщо n більше або рівне довжині масиву
//   } else {
//     const shuffledArray = array.slice(); // Копія масиву, яку будемо перемішувати
//     shuffle(shuffledArray);
//     return shuffledArray.slice(0, n); // Повертаємо перші n елементів
//   }
// };

// function cutArray(array,n) {
//   if (n >= array.length) {
//     return array.slice(); // Повертаємо копію всього масиву, якщо n більше або рівне довжині масиву
//   } else {
//     return array.slice(0, n);
//   }
// }
// Алгоритм тасування Fisher-Yates
// const shuffle = (array) => {
//   let m = array.length, t, i;
//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//   return array;
// };
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

// Перемішуємо елементи масива  Алгоритм тасування Fisher-Yates
function mixArray(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
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
