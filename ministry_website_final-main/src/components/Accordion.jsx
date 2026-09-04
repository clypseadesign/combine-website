import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion-wrapper">
      {items.map((item, idx) => (
        <div key={idx} className="accordion-item">
          <button 
            className="accordion-header" 
            onClick={() => toggleItem(idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{item.title}</span>
            <ChevronDown 
              size={22} 
              style={{ 
                transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0)', 
                transition: 'transform 0.3s ease' 
              }} 
            />
          </button>
          {openIndex === idx && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
