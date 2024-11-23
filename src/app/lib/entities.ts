interface LangContent {
    name: string;
    pronunce: string;
    quote: string;
    story: string;
    founder: string;
    yearEstablished: string;
    contact: string[];
    discord: string;
}

interface Lang {
    th: LangContent;
    en: LangContent;
}

export interface ImageData {
    year: string;
    logo: string;
    cover?: string;
}

export interface Data18kRadio {
    lang: Lang;
    images: ImageData[];
}
