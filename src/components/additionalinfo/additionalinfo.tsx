import React from 'react';

interface AdditionalInfoProps {
  content: string; // Defina o tipo apropriado aqui
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ content }) => {
  return (
    <div>
      <p>{content}</p>
      {/* Outros elementos e lógica específica para AdditionalInfo */}
    </div>
  );
}

export default AdditionalInfo;
