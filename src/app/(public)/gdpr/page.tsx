// src/app/gdpr/page.tsx

import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
export const metadata = {title:" GDPR | MojaAppl"};

export default function GDPR() {
    return (
        <Box sx={{ m: 2, textAlign: 'center' }}>
        <Typography component="div">
      <Typography variant="h4" gutterBottom>
        <strong>GDPR</strong>
      </Typography>

      <Typography variant="body1">
        V spoločnosti <strong>ZoškaSnap</strong> sa zaväzujeme chrániť vaše súkromie a zabezpečiť, aby vaše osobné údaje boli spracovávané bezpečne a v súlade s Všeobecným nariadením o ochrane osobných údajov (GDPR).
      </Typography>

      <Typography variant="h5" gutterBottom>
        Vaše práva podľa GDPR
      </Typography>
      <Typography variant="body1">
        Ako používateľ máte nasledujúce práva týkajúce sa vašich osobných údajov:
      </Typography>
      <Typography variant="body1">
        - Právo na prístup k vašim osobným údajom. <br />
        - Právo požiadať o opravu nepresných alebo neúplných údajov. <br />
        - Právo požiadať o vymazanie vašich údajov za určitých podmienok. <br />
        - Právo na obmedzenie spracovania vašich údajov. <br />
        - Právo na prenosnosť údajov, ktoré vám umožňuje získať a znovu použiť vaše údaje. <br />
        - Právo namietať proti spracovaniu vašich údajov na určité účely. <br />
        - Právo odvolať súhlas kedykoľvek, ak je spracovanie založené na súhlase.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Zber a používanie údajov
      </Typography>
      <Typography variant="body1">
        Zhromažďujeme a spracovávame iba údaje nevyhnutné na poskytovanie našich služieb. To zahŕňa:
      </Typography>
      <Typography variant="body1">
        - Informácie o účte ako meno, e-mail a detaily profilu. <br />
        - Údaje o používaní na zlepšenie používateľskej skúsenosti a výkonu platformy. <br />
        - Súbory cookies a podobné sledovacie technológie na analýzu a personalizáciu. <br />
        - Komunikácie a interakcie s podporou.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Bezpečnosť údajov
      </Typography>
      <Typography variant="body1">
        Zavádzame vhodné technické a organizačné opatrenia na ochranu vašich osobných údajov pred neoprávneným prístupom, stratou alebo zneužitím. To zahŕňa šifrovanie, kontrolu prístupu a pravidelné bezpečnostné hodnotenia.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Uchovávanie údajov
      </Typography>
      <Typography variant="body1">
        Vaše osobné údaje sú uchovávané iba po dobu, ktorá je nevyhnutná na splnenie účelov, na ktoré boli zhromaždené, alebo pokiaľ to vyžaduje právna a regulačná povinnosť.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Kontaktujte nás
      </Typography>
      <Typography variant="body1">
        Ak máte akékoľvek otázky týkajúce sa spracovania vašich údajov alebo si prajete využiť svoje práva podľa GDPR, kontaktujte nás na <strong>masurik1@gmail.com</strong>.
      </Typography>

      <Typography variant="h6" color="primary">
        Posledná aktualizácia: 4. 5. 1865
      </Typography>
        </Typography>
        </Box>
    );
}
