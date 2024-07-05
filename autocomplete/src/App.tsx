import Autocomplete from './components/Autocomplete'
import './App.css'

function App() {
  const fetchSuggestion = (value: string) => {
    
  }

  return (
    <>
    <Autocomplete 
      placeholder="Search for a text"
      filterAttr="name"
      onSubmit={(value: string) => console.log(value)}
      fetchSuggestion={(value: string) => {
        fetchSuggestion(value)
      }}
      onFocus={() => console.log('onFocus')}
      onBlur={() => console.log('onBlur')}
    />
    </>
  )
}

export default App
