import {useRef} from 'react'

interface AutocompleteProps {
    placeholder: string
    onSubmit: (value: string) => void
    fetchSuggestion: (value: string) => void
    onFocus: () => void
    onBlur: () => void
    filterAtrr?: string
    
}
const Autocomplete = ({placeholder, fetchSuggestion, onFocus, onBlur, onSubmit}: AutocompleteProps) => {
  const ref= useRef<HTMLInputElement>(null)
  return (
    <div>
        <input className="inputbox" ref={ref} type='text' placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} onChange={() => fetchSuggestion(ref.current?.value ?? '')} />
        <button type='submit' onClick={() => fetchSuggestion(ref.current?.value ?? '')} onSubmit={() => onSubmit(ref.current?.value ?? '')}>Submit</button>
    </div>
  )
}

export default Autocomplete