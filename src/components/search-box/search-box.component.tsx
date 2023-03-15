import { ChangeEvent } from 'react';

import './search-box.styles.css'

/** 
 * 
 * // Interface = Object Oriented Style
 * // Extensible like class components
 * interface ISearchBoxProps extends IChangeHandlerProps { // putting extends adds the interface
 *  // Shape of actual object
 *  className: string;
 *  placeholder?: string; // ? is optional either string or null
 * }
 * 
 * interface IChangeHandlerProps { // having the same interface name also combines them called Overloading
 *  onChangeHandler: (a: string) => void
 * }
 * 
 */

// Types = Functional Programming Style

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

/** 
// This is for union
// What the diff.. allows union or a combination of types
type CanadianAddress = {
    street: string;
    province: string;
}

type USAddress = {
    street: string;
    state: string;
}

type ItalianAddress = {
    street: string;
    region: string;
}

type WesternAddress = CanadianAddress | USAddress | ItalianAddress;

const Address: WesternAddress = {
    street: 'asdw',
    state: 'wafasda',
    province: 'awdaf',
    region: 'asdwa'
}
*/

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
    <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHandler} // No more reinitializing anonymous function
    />
);

export default SearchBox;