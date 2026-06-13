import { useState } from 'react'
import './TranslateToggle.css'

function toParagraphs(text) {
  return Array.isArray(text) ? text : [text]
}

// Accessible English / हिन्दी switch for a block of descriptive text. The
// chosen language's paragraphs are rendered with the correct `lang` attribute.
function TranslateToggle({ en, hi, label = 'Description language' }) {
  const [lang, setLang] = useState('en')
  const text = lang === 'en' ? en : hi

  return (
    <div className="translate">
      <div className="translate__controls" role="group" aria-label={label}>
        <button
          type="button"
          className="translate__btn"
          aria-pressed={lang === 'en'}
          onClick={() => setLang('en')}
        >
          English
        </button>
        <button
          type="button"
          className="translate__btn"
          aria-pressed={lang === 'hi'}
          lang="hi"
          onClick={() => setLang('hi')}
        >
          हिन्दी
        </button>
      </div>
      <div className="translate__text" lang={lang}>
        {toParagraphs(text).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default TranslateToggle
