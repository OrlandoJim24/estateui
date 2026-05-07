import './searchBar.scss'

const types = ['buy', 'rent']

function SearchBar(){
    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0
    })
    const switchType = (type) => {
    }
  return (
    <div className='searchBar'>
        <div className="type">
            {types.map((type) => (
                <button onClick={() =>switchType(type)}>{type}</button>
            ))}
            <button onClick={() =>switchType('buy')}>Buy</button>
            <button onClick={() =>switchType('rent')}>Rent</button>
        </div>
        <form >
            <input type="text" name= "location" placeholder="City Location" />
            <input type="number" name= "minPrice" min={0} max={10000000} placeholder="Min Price" />
            <input type="number" name= "maxPrice" min={0} max={10000000} placeholder="Max Price" />
        <button>
            <img src="/search.png" alt="" />
        </button>
        
        </form>
    </div>
  )
}

export default SearchBar