// src/app/prispevok/[id]/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = {title:" Detail prispevku| MojaAppl"};

export default function PostDetail({
    params,

}: {
    params: {
        prispevokid:string;
    };

}) {
    return (
        <Typography variant='h1'>Detail prispevoku {params.prispevokid}</Typography>
    );
}