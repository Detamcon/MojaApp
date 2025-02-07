// src/app/o-nas/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = {title:" O nás | MojaAppl"};

export default function About() {
    return (
        <Typography component="div">
        <Typography variant="h4" gutterBottom>
          <strong>O nás</strong>
        </Typography>
        <Typography variant="body1">
          V <strong>ZoškaSnap</strong> sme nadšení tvorbou digitálneho priestoru, kde sa ľudia môžu skutočne spojiť, zdieľať a zapájať. Našou misiou je zjednotiť komunity a urobiť online interakcie významnejšími.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Naša misia
        </Typography>
        <Typography variant="body1">
          Veríme, že sociálne médiá by mali byť viac než len scrollovaní—mali by byť o skutočných spojeniach. Preto sme vytvorili platformu, ktorá vás podporí v:
        </Typography>
        <Typography variant="body1">
          🌍 <strong>Spojiť</strong> sa s ľuďmi, ktorí zdieľajú vaše záujmy. <br />
          💡 <strong>Inšpirovať</strong> a byť inšpirovaní novými nápadmi a obsahom. <br />
          🔒 <strong>Byť v bezpečí</strong> s bezpečným a vítajúcim prostredím. <br />
          🚀 <strong>Rásť</strong> vo vašej sieti a rozširovať svoj vplyv.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Prečo si vybrať nás?
        </Typography>
        <Typography variant="body1" >
          Na rozdiel od iných platforiem sa zameriavame na budovanie **skutočných vzťahov, podporu pozitívnosti a zaručenie ochrany súkromia používateľov.** Či už chcete zdieľať svoju cestu, objavovať nové komunity, alebo sa jednoducho zabávať, sme tu, aby sme váš zážitok spravili príjemným a hodnotným.
        </Typography>
        <Typography variant="h6" color="primary">
          Pridajte sa k nám a buďte súčasťou budúcnosti sociálnych spojení!
        </Typography>
        </Typography>
    );
}
