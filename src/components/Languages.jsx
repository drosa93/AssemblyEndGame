import React from 'react'
import { languages } from '../languages'

export default function LanguagesFrame(props) {

    const mapedLanguages = languages.map((language, index) =>{
        const isLanguageLost = index < props.wrongGuessCount
        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }
    return(
    <span
        className={`languageNames ${isLanguageLost ? 'lost' : ''}`}
        style={styles}
        key={language.name}
        >
            {language.name}
        </span>

    )
});

  return (
    <section className='languages'>
        {mapedLanguages}
    </section>
  )
}
