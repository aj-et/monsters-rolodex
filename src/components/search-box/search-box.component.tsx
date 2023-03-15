import './search-box.styles.css'

// Extensible like class components
interface ISearchBoxProps extends IChangeHandlerProps { // putting extends adds the interface
    // Shape of actual object
    className: string;
    placeholder?: string; // ? is optional either string or null
}

interface IChangeHandlerProps { // having the same interface name also combines them called Overloading
    onChangeHandler: (a: string) => void
}

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProps) => (
    <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e)} // No more reinitializing anonymous function
    />
);

export default SearchBox;