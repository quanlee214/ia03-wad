import React, { useState } from 'react';

/**
 * SumCalculator Component
 * Allows user to input two numbers and calculates their sum.
 * Handles validation and displays error messages.
 */
const SumCalculator: React.FC = () => {
    // State for input values
    const [number1, setNumber1] = useState<string>('');
    const [number2, setNumber2] = useState<string>('');
    // State for result and error
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string>('');

    // Handle input changes
    const handleNumber1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber1(e.target.value);
        setError('');
        setResult(null);
    };
    const handleNumber2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber2(e.target.value);
        setError('');
        setResult(null);
    };

    // Handle sum calculation
    const handleCalculate = () => {
        // Validation: check if inputs are not empty and are valid numbers
        if (number1.trim() === '' || number2.trim() === '') {
            setError('Please enter both numbers.');
            setResult(null);
            return;
        }
        const num1 = Number(number1);
        const num2 = Number(number2);
        if (isNaN(num1) || isNaN(num2)) {
            setError('Inputs must be valid numbers.');
            setResult(null);
            return;
        }
        setResult(num1 + num2);
        setError('');
    };


    // Handle Enter key for calculation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCalculate();
        }
    };

    return (
        <div className="w-[300px] md:w-[350px] mx-auto mt-10 p-8 border-2 border-gray-200 rounded-xl bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Sum Calculator</h2>
            <div className="mb-4">
                <label htmlFor="number1" className="block mb-1 font-medium">Number 1:</label>
                <input
                    id="number1"
                    type="text"
                    value={number1}
                    onChange={handleNumber1Change}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter first number"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="number2" className="block mb-1 font-medium">Number 2:</label>
                <input
                    id="number2"
                    type="text"
                    value={number2}
                    onChange={handleNumber2Change}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter second number"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <button
                onClick={handleCalculate}
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition mb-4"
            >
                Calculate Sum
            </button>
            <div className="min-h-[32px] text-center">
                {error && <span className="text-red-600 font-medium">{error}</span>}
                {result !== null && !error && (
                    <span className="text-green-600 font-semibold text-lg">Result: {result}</span>
                )}
            </div>
        </div>
    );
};

export default SumCalculator;
