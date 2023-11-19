import React from 'react';

interface AdditionalInfoProps {
  content: string;
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
