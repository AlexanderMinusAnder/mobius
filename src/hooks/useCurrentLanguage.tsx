import { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import languages from "../utils/languages";

function useCurrentLanguage() {

    let language  = useContext(LanguageContext);

    // if (language === "") {
    //     language = "fr";
    // }

    // console.log(languages[language])

    // return languages[language];

    console.log(language)

    return language
}

export default useCurrentLanguage;