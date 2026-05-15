type TempInputProps = {
    value: number | string;
    onValueChange: (newValue: number | string) => void;
    label?: string;
}

const TempInput = ({ value, onValueChange, label = "CELSIUS" }: TempInputProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emptyValue = (event.target.value);

        if (emptyValue === "") {
            onValueChange("");
            return;
        }
        const newValue = Number(emptyValue);
        onValueChange(newValue);
    };

    return (
        <>
            <div className="flex flex-col gap-2 text-center mt-6 p-4 bg-blue-100 rounded-xl border border-blue-100 shadow-lg">
                <h1 className="font-bold uppercase text-xs tracking-widest">{label}</h1>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    placeholder="Please enter a temperature"
                    className="p-4 bg-white border-blue-100 rounded-xl focus:border-blue-500 focus:ring-blue focus:outline-none text-xl font-medium shadow-sm"                />
            </div>
        </>
    )
}
export default TempInput;