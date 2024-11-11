export default function SearchBar() {
    return(
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-row justify-between items-center w-full md:w-[588px] h-[56px] rounded-xl border border-solid border-border1 p-4">
                <input 
                    className="w-[95%] outline-none h-full"
                    id="search-bar"
                    name="search-bar"
                    type="text" 
                    placeholder="ابحث عن كلمات مفتاحية أو مواضيع..."
                />
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 26L21.3333 21.3333M20.6667 11.3333C20.6667 12.559 20.4253 13.7727 19.9562 14.905C19.4872 16.0374 18.7997 17.0663 17.933 17.933C17.0663 18.7997 16.0374 19.4872 14.905 19.9562C13.7727 20.4253 12.559 20.6667 11.3333 20.6667C10.1077 20.6667 8.89399 20.4253 7.76162 19.9562C6.62925 19.4872 5.60035 18.7997 4.73367 17.933C3.86699 17.0663 3.1795 16.0374 2.71046 14.905C2.24141 13.7727 2 12.559 2 11.3333C2 8.85798 2.98333 6.48401 4.73367 4.73367C6.48401 2.98333 8.85798 2 11.3333 2C13.8087 2 16.1827 2.98333 17.933 4.73367C19.6833 6.48401 20.6667 8.85798 20.6667 11.3333Z" stroke="#B0438A" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
}