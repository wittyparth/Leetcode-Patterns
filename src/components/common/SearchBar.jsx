import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const SearchBar = ({
    placeholder = "Search...",
    onSearch,
    className = "",
    initialValue = ""
}) => {
    const [searchTerm, setSearchTerm] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        // Debounce search input
        const debounceTimeout = setTimeout(() => {
            onSearch(searchTerm);
        }, 300);

        return () => clearTimeout(debounceTimeout);
    }, [searchTerm, onSearch]);

    return (
        <motion.div
            className={`relative ${className}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className={`relative flex items-center w-full ${isFocused ? 'ring-2 ring-primary-500' : ''}`}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                        className="w-5 h-5 text-base-content/60"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    className="input input-bordered w-full pl-10 pr-12"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                {searchTerm && (
                    <button
                        onClick={() => {
                            setSearchTerm('');
                            inputRef.current?.focus();
                        }}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-base-content/60 hover:text-base-content"
                    >
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default SearchBar;
