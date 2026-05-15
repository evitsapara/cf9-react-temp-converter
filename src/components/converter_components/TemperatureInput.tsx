type TempInputProps = {
    value: number;
    onValueChange: (newValue: number) => void;
    label?: string;
}

const TempInput = ({ value, onValueChange, label = "Celsius" }: TempInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);

        onValueChange(newValue);
    };

    return (
        <>
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-gray-600 font-semibold">{label}</h1>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                />
            </div>
        </>
    )
}
export default TempInput;