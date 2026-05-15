const Header = () => {
    return (
        <>
            <header className="bg-cf-gray fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <a href="/">
                        <img src="https://www.pngkey.com/png/detail/297-2976588_temperature-conversion-convert-temperature-icon.png" alt="Temperature Conversion" className="my-4 h-16"/>
                    </a>
                    <nav className="flex gap-4 text-black font-semibold text-lg">
                        <a href="/">Temperature Converter App</a>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;