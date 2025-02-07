'use client'

import { useSession } from "next-auth/react"
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

export default function AuthHomeView() {
  const { data: session } = useSession()

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" component="div" gutterBottom>
        <strong>Vitajte, {session?.user?.name}!</strong>
        <Typography variant="body1">
          Rádi vás opäť vidíme! Buďte v kontakte so svojimi priateľmi, objavujte nové komunity a buďte informovaní o najnovších trendoch.
        </Typography>
        <Typography variant="body1">
          🌍 <strong>Obnovte kontakt</strong> s vašimi obľúbenými ľuďmi a skupinami. <br />
          📸 <strong>Zdieľajte</strong> svoje najnovšie zážitky a momenty. <br />
          💬 <strong>Zapojujte sa</strong> do zmysluplných rozhovorov a diskusií. <br />
          🔎 <strong>Objavujte</strong> nový obsah prispôsobený práve pre vás.
        </Typography>
        <Typography variant="body1">
          Ponorte sa späť do rozhovorov, objavujte trending témy a dajte o sebe vedieť. Vaša komunita vás čaká!
        </Typography>
        <Typography variant="h6" color="primary">
          🚀 Začnite objavovať teraz!
        </Typography>
      </Typography>
    </Box>
  )
}
