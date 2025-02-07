import { Typography } from '@mui/material'
import { Box } from '@mui/material'

export default function NonAuthHomeView() {
    return (
      <Box sx={{ m: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          <strong>Vitajte na ZoškaSnap</strong>
          <Typography variant="body1">
            V ZoškaSnap veríme v zbližovanie ľudí. Či už ste tu na to, aby ste sa spojili s priateľmi, zdieľali svoje vášne, alebo objavovali nové komunity, naša platforma je navrhnutá tak, aby uľahčila, spríjemnila a dala zmysel socializácii.
          </Typography>
          <Typography variant="body1">
            🌍 <strong>Spojte sa</strong> s ľuďmi, ktorí majú rovnaké záujmy. <br />
            📸 <strong>Zdieľajte</strong> svoje momenty prostredníctvom príspevkov, príbehov a videí. <br />
            💬 <strong>Zapájajte sa</strong> do diskusií a rozhovorov v reálnom čase. <br />
            🔎 <strong>Objavujte</strong> trending témy, udalosti a komunity, ktoré sú pre vás dôležité.
          </Typography>
          <Typography variant="body1">
            Pridajte sa k nám dnes a staňte sa súčasťou dynamického, inkluzívneho a vzrušujúceho online priestoru, kde váš hlas má význam. <strong>Urobme sociálne médiá viac sociálnymi!</strong>
          </Typography>
          <Typography variant="h6" color="primary">
            🚀 Zaregistrujte sa a začnite svoju cestu!
          </Typography>
      </Typography>
      </Box>
    )
}
