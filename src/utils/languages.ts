type langObject = {
    navbar: string,
    home: {
        title: string,
        article: {
            article1: string,
            article2: string,
            article3: string,
            article4: string
        }
        realization_title: string,
        realization_text: string
    },
    members: {
        title: string,
        kenny: string,
        rox: string,
        drayven: string,
        nathan: string
    }
}

interface Languages {
    [key: string]: langObject;
}

const languages: Languages = {
    "fr": {
        "navbar": "En mathématiques, une bande de Möbius est une surface que l'on obtient en joignant les extrémités d'une bande de papier en effectuant un demi-tour.",
        "home": {
            "title": "Présentation du groupe",
            "article": {
                "article1": "Dans l'univers du metal, Möbius apporte une touche d'optimisme et une énergie nouvelle au genre.",
                "article2": "Fondé en 2025, le groupe prône l'importance de la persévérance, de l'unité et de la confiance en soi à travers sa discographie variée et puissante.",
                "article3": "Un mélange de riffs puissants, de lignes de basse entraînantes, de blast beats endiablés et de mélodies intenses.",
                "article4": "Mobius est la réponse à la sombre dystopie dans laquelle nous vivons."
            },
            "realization_title": "Nos réalisations",
            "realization_text": "Retrouvez nos autres réalisations sur notre "
        },
        "members": {
            "title": "Qui sont les membres de Möbius",
            "kenny": "Le leader, auteur-compositeur principal et membre fondateur de Möbius. Ses riffs précis et incisifs, associés à sa voix puissante, propulsent la musique du groupe dans une nouvelle ère de puissance. Il cache son front et ses yeux, ce qui le rend assez insaisissable.",
            "rox": "Le bassiste de Möbius. Ses lignes de basse groovy, graves et puissantes contrastent avec son attitude calme et sereine. Que ce soit sur scène ou en studio, il garde toujours son sang-froid… et son chapeau.",
            "drayven": "Un guitariste soliste qui manie sa guitare comme une puissante épée. Son style apporte une touche de power metal épique au son de Möbius. Son jeu rapide et technique s'harmonisent parfaitement avec les riffs agressifs de Kenny et les lignes de basse groovy de Rox.",
            "nathan": "Nathan est le batteur du coin. Dites bonjour à Nathan !"
        }
    },
    "en": {
        "navbar": "In mathematics, a Möbius band is a surface that can be formed by attaching the ends of a strip of paper together with a half-twist.",
        "home": {
            "title": "Introduction to the band",
            "article": {
                "article1": "In the world of metal, Mobius is an optimistic, more energetic take on the genre.",
                "article2": "Having been founded in 2025, the band preaches the importance of perseverance, unity, and faith-in oneself into its varied and heavy discography.",
                "article3": "Loaded with heavy riffs, groovy basslines, frenetic blast-beats, and intense melodies.",
                "article4": "Mobius is the answer to the grim dystopia we live in."
            },
            "realization_title": "Our realizations",
            "realization_text": "Find our other realizations on our "
        },
        "members": {
            "title": "Who are the members of Möbius",
            "kenny": "The leader, the lyricist, main composer and the founding member of Möbius. His precise and sharp riffs coupled with his powerful voice propel the music of the band into a new era of heaviness. He keeps his forehead and eyes hidden, making him quite elusive.",
            "rox": "The bassist of Möbius. His groovy, low and heavy basslines contrast with his calm and tranquil way of being. Be it on stage or in the studio, he always keeps his cool, and his hat on.",
            "drayven": "A solo guitarist who wields his guitar like a mighty sword. His style brings an epic power metal side to the sound of Möbius. His fast playing and insane technicality harmonises with Kenny's aggressive riffs and Rox's groovy basslines",
            "nathan": "Nathan's the local drummer. Say hi to Nathan everyone!"
        }
    }
}

export default languages