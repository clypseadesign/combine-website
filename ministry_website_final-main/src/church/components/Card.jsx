import React from 'react';

// Reusable List Card Component
const Card = ({ title, items, columns = 3 }) => {
    return (
        <div style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fde68a',
            borderRadius: '24px',
            padding: '40px 30px',
            marginBottom: '40px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
            <style>{`
                @media (max-width: 700px) {
                    .evils-grid-cols-${columns} { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 480px) {
                    .evils-grid-cols-${columns} { grid-template-columns: 1fr !important; }
                }
            `}</style>
            <h3 style={{
                fontSize: '22px',
                fontFamily: "Anastasia",
                fontWeight: '900',
                color: '#b45309',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginBottom: '35px'
            }}>
                {title}
            </h3>

            <div className={`evils-grid-cols-${columns}`} style={{
                display: 'grid',
                gridTemplateColumns: columns === 1 ? '1fr' : `repeat(${columns}, 1fr)`,
                gap: '15px 30px',
                maxWidth: columns === 1 ? '320px' : '900px',
                margin: '0 auto'
            }}>
                {items.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: '#d97706', fontSize: '12px', marginTop: '2px' }}>&bull;</span>
                        <span style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function WhyNeeded() {
    const painfulConditions = [
        "Painful conditions from birth to death",
        "Fear and insecurity",
        "Sickness and disease",
        "Stress and burnout",
        "Disabilities",
        "Mental breakdown",
        "Mental illness",
        "Self-harm",
        "Depression",
        "Suicide",
        "Anxiety",
        "Untold torture",
        "Loneliness",
        "Homelessness",
        "Grief and sorrow",
        "Neglect",
        "Social isolation"
    ];

    const sinsOfTheHeart = [
        "Pride", "Evil desires", "Anger", "Boastfulness",
        "Selfishness", "Evil imaginations", "Wrath", "High-mindedness",
        "Self-centeredness", "Evil thoughts", "Unforgiveness", "Individualism",
        "Covetousness", "Envy", "Stubbornness", "Apathy",
        "Greed", "Jealousy", "Rebellion", "Hardness of heart",
        "Love of riches", "Hatred", "Presumption", "Lack of compassion",
        "Love of money", "Bitterness", "Hypocrisy", "Foolishness",
        "Materialism", "Malice", "Vanity", "Spiritual blindness",
        "Lust", "Revenge", "Arrogance"
    ];
    const categories = [
        "Lying",
        "False witness",
        "False accusations",
        "Gossip",
        "Backbiting",
        "Slander",
        "Defamation",
        "Blasphemy",
        "Profanity",
        "Cursing",
        "Verbal abuse",
        "Hate speech",
        "Rumor spreading",
        "Deception",
        "Manipulation",
        "Mockery",
        "Ridicule"
    ];
    const sinsOfSpeech = [
        "Lying",
        "False witness",
        "False accusations",
        "Gossip",
        "Backbiting",
        "Slander",
        "Defamation",
        "Blasphemy",
        "Profanity",
        "Cursing",
        "Verbal abuse",
        "Hate speech",
        "Rumor spreading",
        "Deception",
        "Manipulation",
        "Mockery",
        "Ridicule"
    ];
    const cat1 = [
        "Cheating",
        "Fraud",
        "Dishonesty",
        "Theft",
        "Robbery",
        "Burglary",
        "Motor vehicle theft",
        "Shoplifting",
        "Bribery"
    ];

    const cat2 = [
        "Fornication",
        "Adultery",
        "Prostitution",
        "Forced prostitution",
        "Human trafficking",
        "Sexual abuse",
        "Sexual harassment",
        "Child sexual abuse",
        "Incest",
        "Rape",
        "Gang rape",
        "Molestation",
        "Sexual exploitation",
        "Pornography",
        "Sextortion",
        "Voyeurism",
        "Lasciviousness",
        "Lewdness",
        "Promiscuity",
        "Polygamy",
        "Obscenity",
        "Indecent or provocative dressing",
        "Revenge pornography",
        "Online sexual exploitation"
    ];
    const cat3 = [
        "Murder",
        "Hands that shed innocent blood",
        "Aggravated assault",
        "Domestic violence",
        "Child abuse",
        "Elder abuse",
        "Abuse of persons with disabilities",
        "Torture",
        "Kidnapping",
        "Abduction",
        "Human sacrifice",
        "Barbarism",
        "Honour killings",
        "Terrorism",
        "War",
        "Genocide",
        "Ethnic cleansing",
        "Violence against women",
        "Violence against children",
        "School violence",
        "Workplace violence",
        "Mob violence",
        "Organized crime"
    ];

    const cat4 = [
        "Disobedience to parents",
        "Unfaithfulness",
        "Divorce",
        "Broken families",
        "Child neglect",
        "Domestic abuse",
        "Marital conflict",
        "Elder neglect",
        "Child abandonment",
        "Family breakdown",
        "Parenting failures"
    ];
    const cat5 = [
        "Poverty",
        "Inequality",
        "Gender inequality",
        "Low status of women",
        "Female infanticide",
        "Child marriage",
        "Dowry",
        "Child labour",
        "Child exploitation",
        "Human trafficking",
        "Beggary",
        "Ragging",
        "Harassment",
        "Bullying",
        "Social discrimination",
        "Racism",
        "Untouchability",
        "Caste discrimination",
        "Religious discrimination",
        "Class discrimination",
        "Crimes against youth",
        "Violence in educational institutions",
        "Juvenile delinquency",
        "Population challenges",
        "Unemployment",
        "Inflation",
        "Illiteracy",
        "Poor sanitation",
        "Lack of clean drinking water",
        "Food adulteration",
        "Poor healthcare",
        "Poor housing",
        "Urban crime",
        "Rural deprivation"
    ];

    const cat6 = [
        "Crime",
        "Organized crime",
        "Smuggling",
        "Drug trafficking",
        "Human trafficking",
        "Arms trafficking",
        "Money laundering",
        "Counterfeiting",
        "Piracy",
        "Arson",
        "Property damage",
        "Vandalism",
        "Rioting",
        "Public disorder",
        "Illegal gambling",
        "Poaching",
        "Environmental crimes"
    ];
    const cat7 = [
        "Alcoholism",
        "Drug abuse",
        "Substance abuse",
        "Tobacco addiction",
        "Gambling addiction",
        "Pornography addiction",
        "Internet addiction",
        "Gaming addiction",
        "Social media addiction",
        "Intemperance",
        "Gluttony"
    ];

    const cat8 = [
        "Lovers of self",
        "Lovers of pleasure",
        "Lovers of money",
        "Unthankfulness",
        "Unholiness",
        "Without natural affection",
        "Covenant breaking",
        "Betrayal",
        "Traitors",
        "False religion",
        "Religious hypocrisy",
        "Religious extremism",
        "Religious conflicts",
        "Profanation",
        "Backsliding",
        "Spiritual indifference",
        "Idolatry",
        "Superstition",
        "Witchcraft",
        "Sorcery",
        "Occult practices",
        "False teachings",
        "Sectarianism",
        "Denominational hatred"
    ];
    const cat9 = [
        "Political corruption",
        "Abuse of power",
        "Oppression",
        "Injustice",
        "Judicial corruption",
        "Election fraud",
        "Misuse of public funds",
        "Nepotism",
        "Dictatorship",
        "Exploitation of the poor",
        "Religious persecution",
        "Human rights violations",
        "Modern slavery"
    ];

    const cat10 = [
        "Pollution",
        "Air pollution",
        "Water pollution",
        "Soil pollution",
        "Deforestation",
        "Illegal mining",
        "Climate change",
        "Environmental degradation",
        "Animal cruelty",
        "Waste mismanagement",
        "Plastic pollution",
        "Destruction of biodiversity"
    ];

    const cat11 = [
        "Cyber crimes",
        "Cyber bullying",
        "Online harassment",
        "Identity theft",
        "Online scams",
        "Fake news",
        "Misinformation",
        "Deepfakes",
        "Privacy violations",
        "Digital addiction",
        "AI misuse",
        "Online radicalization",
        "Digital exploitation"
    ];

    const cat12 = [
        "Wars",
        "Terrorism",
        "Refugee crises",
        "Famine",
        "Pandemics",
        "Epidemics",
        "Natural disasters",
        "Economic collapse",
        "Human trafficking",
        "Slavery",
        "Forced migration",
        "Persecution",
        "Exploitation",
        "Social injustice"
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', fontFamily: '"Century Gothic", sans-serif' }}>
            {/* Main Header */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 style={{ fontSize: '26px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Evils, Sins, and Social Problems Affecting Humanity
                </h2>
                <p style={{ fontSize: '12px', color: '#4b5563', fontStyle: 'italic' }}>
                    (From Birth to Death)
                </p>
            </div>

            {/* Reusable Category Cards */}
            <Card title="The Painful Condition of Human Life" items={painfulConditions} columns={2} />
            <Card title="Sins of the Heart (Inner Character)" items={sinsOfTheHeart} columns={4} />
            <Card title="Sins of the Heart (Inner Character)" items={categories} columns={2} />
            <Card title="Sins of Speech" items={sinsOfSpeech} columns={2} />
            <Card title="Sins of Conduct" items={cat1} columns={1} />
            <Card title="SEXUAL SINS AND EXPLOITATION" items={cat2} columns={3} />
            <Card title="VIOLENCE AGAINST HUMAN LIFE" items={cat3} columns={2} />
            <Card title="FAMILY PROBLEMS" items={cat4} columns={2} />
            <Card title="SOCIAL EVILS" items={cat5} columns={4} />
            <Card title="CRIME AND LAWLESSNESS" items={cat6} columns={2} />
            <Card title="ADDICTIONS AND DESTRUCTIVE HABITS" items={cat7} columns={2} />
            <Card title="MORAL AND SPIRITUAL DECLINE" items={cat8} columns={3} />
            <Card title="GOVERNMENTAL AND NATIONAL EVILS" items={cat9} columns={2} />
            <Card title="ENVIRONMENTAL DESTRUCTION" items={cat10} columns={2} />
            <Card title="TECHNOLOGICAL AND DIGITAL EVILS" items={cat11} columns={2} />
            <Card title="GLOBAL HUMAN SUFFERING" items={cat12} columns={2} />

            <p style={{
                fontSize: '13px',
                color: '#374151',
                textAlign: 'left',
                fontWeight: 'bold',
                marginTop: '10px'
            }}>
                ... AND MUCH MORE
            </p>
        </div>
    );
}