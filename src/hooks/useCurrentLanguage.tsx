import { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import languages from "../utils/languages";

function useCurrentLanguage() {

    let language  = useContext(LanguageContext).language;

    console.log(languages[language])

    return languages[language]
}

export default useCurrentLanguage;