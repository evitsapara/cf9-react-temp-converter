type TempResultProps = {
    celsius: number;
}

const TempResult = ({celsius} : TempResultProps) => {
    const fahrenheit = (celsius * 9 / 5 + 32).toFixed(1);

    return (
        <>
            <div className="mt-6 p-4 bg-blue-300 rounded-xl border border-blue-100 text-center">
                <p className="text-gray-600 font-semibold">Fahrenheit</p>
                <h1 className="text-3xl font-bold p-5">{fahrenheit}°F</h1>
            </div>
        </>
    );
}
export default TempResult;