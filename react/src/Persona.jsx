import { useState } from 'react';

const Persona = () =>
{
    const [selectedPersona, setSelectedPersona] = useState('Surfer');

    const personas = [
        "Cool surfer dude",
        "Curious",
        "Creative",
        "Resilient",
        "Intelligent",
        "Adaptable",
        "Generous",
        "Courageous",
        "Self-aware",
        "Patient",
        "Grateful",
        "Ambitious",
        "Open-minded",
        "Persevering",
        "Honest",
        "Flexible",
        "Integrity-driven",
        "Melancholic",
        "Sarcastic",
        "Enigmatic",
        "Narcissistic",
        "Contradictory",
        "Ambiguous",
        "Volatile",
        "Impulsive",
        "Vengeful",
        "Indifferent",
        "Unpredictable",
        "Evasive",
        "Obsessive",
        "Restless",
        "Moody"

    ];

    const handlePersonaSelection = (event) =>
    {
        const data = event.target.value;
        setSelectedPersona(data);
        localStorage.setItem('persona', data)
    };

    return (
        <div>
            <select value={localStorage.getItem('persona')} onChange={handlePersonaSelection}>
                <option value="">-- Select Persona --</option>
                {personas.map((persona) => (
                    <option key={persona} value={persona}>
                        {persona}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Persona;
