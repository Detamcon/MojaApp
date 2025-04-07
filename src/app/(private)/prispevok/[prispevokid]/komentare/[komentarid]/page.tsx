// src/app/prispevok/[id]/komentare/[komentarid]/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = {title:" Detail komentaru| MojaAppl"};

export default function CommentDetail({
    params,

}: {
    params: {
        prispevokid:string;
        komentarid: string;
    };

}) {
    return (
        <Typography>Komentar: {params.komentarid}  prispevok: {params.prispevokid}</Typography>
    );
}