import './TranslateToggle.css'

// A small English / हिन्दी switch. Controlled: the parent owns the `lang` state
// and re-renders its description in the chosen language.
function LanguageToggle({ lang, onChange, label = 'Choose page language' }) {
  return (
    <div className="translate__controls" role="group" aria-label={label}>
      <button
        type="button"
        className="translate__btn"
        aria-pressed={lang === 'en'}
        onClick={() => onChange('en')}
      >
        English
      </button>
      <button
        type="button"
        className="translate__btn"
        aria-pressed={lang === 'hi'}
        lang="hi"
        onClick={() => onChange('hi')}
      >
        हिन्दी
      </button>
    </div>
  )
}

export default LanguageToggle
