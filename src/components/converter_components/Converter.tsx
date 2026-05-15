import {useState} from "react";
import TempInput from "./TemperatureInput.tsx";
import TempResult from "./TemperatureResult.tsx";

type ConverterState = {
    celsius: number | string;
}

const InitialState = {
    celsius: "",
}

const Converter = () => {

    const [state, setState] = useState<ConverterState>(InitialState);

    const handleValueChange = (newValue: number | string) => {
        setState({
            celsius: newValue
        });
    };

    return (
        <>
            <div className="max-w-md mx-auto bg-white backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white">
                <h1 className="text-center text-3xl font-extrabold text-slate-800 mb-8 tracking-tight">
                    Temperature Converter</h1>
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