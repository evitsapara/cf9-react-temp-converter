type TempResultProps = {
    celsius: number | string;
}

const TempResult = ({celsius} : TempResultProps) => {
    const fahrenheit = ((celsius * 9 ) / 5 + 32).toFixed(1);

    return (
        <>
            <div className="mt-3 p-4 bg-blue-300 rounded-xl border border-blue-100 text-center">
                <p className="font-bold text-xs tracking-widest">FAHRENHEIT</p>
                <h1 className="text-5xl font-black text-white drop-shadow-md">{fahrenheit}°F</h1>
            </div>
        </>
    );
}
export default TempResult;