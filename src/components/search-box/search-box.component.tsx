import './search-box.styles.css'

const name: string = '123'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHandler} // No more reinitializing anonymous function
    />
)

export default SearchBox;