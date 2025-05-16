import React from 'react';
import PayStackButtonComponent from './components/PayStackButton';

const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="mb-8">
                <h1 className="text-2xl font-semibold">
                    Paystack Integration Testing (TypeScript)
                </h1>
            </header>
            <section>
                <PayStackButtonComponent />
            </section>
        </div>
    );
};

export default App;
