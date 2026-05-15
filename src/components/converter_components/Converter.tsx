import {useState} from "react";
import TempInput from "./TemperatureInput.tsx";
import TempResult from "./TemperatureResult.tsx";

type ConverterState = {
    celsius: number;
}

const InitialState = {
    celsius: 0,
}

const Converter = () => {

    const [state, setState] = useState<ConverterState>(InitialState);

    const handleValueChange = (newValue: number) => {
        setState({
            celsius: newValue
        });
    };

    return (
        <>
            <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h1 className="text-center text-xl font-bold mb-3">Temperature Converter</h1>
                <TempInput
                    value={state.celsius}
                    onValueChange={handleValueChange}
                    />
                <TempResult
                    celsius={state.celsius}
                    />
            </div>
        </>
    )
 }
 export default Converter;