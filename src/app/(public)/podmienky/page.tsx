import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
export const metadata = {title:" Podmienky | MojaAppl"};

export default function TermsConditions() {
    return (
        <Box sx={{ m: 2, textAlign: 'center' }}>
        <Typography component="div">
        <Typography variant="h4" gutterBottom>
          <strong>Podmienky používania</strong>
        </Typography>
  
        <Typography variant="body1">
          Tieto podmienky upravujú vaše používanie platformy <strong>ZoškaSnap</strong>. Prístupom alebo používaním našej platformy súhlasíte s týmito podmienkami. Ak nesúhlasíte, musíte okamžite prestať používať platformu.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          1. Registrácia účtu
        </Typography>
        <Typography variant="body1">
          - Pri vytváraní účtu musíte poskytnúť presné a úplné informácie. <br />
          - Ste zodpovední za zabezpečenie vášho účtu a hesla. <br />
          - Vyhradzujeme si právo pozastaviť alebo zrušiť účty, ktoré porušujú tieto podmienky.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          2. Akceptovateľné použitie
        </Typography>
        <Typography variant="body1">
          - Súhlasíte s tým, že platformu budete používať zákonným spôsobom. <br />
          - Nesmiete zverejňovať škodlivý, nezákonný alebo zavádzajúci obsah. <br />
          - Akýkoľvek pokus o narušenie platformy alebo ohrozenie bezpečnosti je prísne zakázaný.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          3. Zásady ochrany osobných údajov
        </Typography>
        <Typography variant="body1">
          Vaše používanie platformy <strong>ZoškaSnap</strong> sa riadi aj našimi <strong>Zásadami ochrany osobných údajov</strong>, ktoré popisujú, ako zbierame, používame a chránime vaše údaje.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          4. Duševné vlastníctvo
        </Typography>
        <Typography variant="body1">
          - Všetok obsah a materiály na platforme sú majetkom <strong>ZoškaSnap</strong> alebo jeho licencovateľov. <br />
          - Nemáte právo kopírovať, distribuovať ani upravovať obsah bez výslovného povolenia.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          5. Obmedzenie zodpovednosti
        </Typography>
        <Typography variant="body1">
          - Nie sme zodpovední za žiadne škody alebo straty vzniknuté používaním našej platformy. <br />
          - Nezaručujeme nepretržitú alebo bezchybné fungovanie služby.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          6. Ukončenie
        </Typography>
        <Typography variant="body1">
          Vyhradzujeme si právo pozastaviť alebo ukončiť prístup na našu platformu kedykoľvek, s alebo bez predchádzajúceho upozornenia, z akéhokoľvek dôvodu porušenia týchto podmienok.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          7. Zmeny podmienok
        </Typography>
        <Typography variant="body1">
          Tieto podmienky môžeme občas aktualizovať. Pokračovanie v používaní platformy po vykonaní zmien znamená akceptáciu revidovaných podmienok.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          8. Kontaktné informácie
        </Typography>
        <Typography variant="body1">
          Ak máte akékoľvek otázky týkajúce sa týchto podmienok, kontaktujte nás na <strong>masurik1@gmail.com</strong>.
        </Typography>
  
        <Typography variant="h6" color="primary">
          Naposledy aktualizované: 6. 7. 1921
        </Typography>
        </Typography>
        </Box>
    );
}
