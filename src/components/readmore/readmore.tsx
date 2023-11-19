import React, { useState } from 'react';
import { ContentContainer, LerMaisButton, LerMenosButton } from './styles';

interface ReadMoreProps {
  content: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {expanded ? (
        <ContentContainer>
          {content}
          <LerMenosButton onClick={toggleExpanded}></LerMenosButton>
        </ContentContainer>
      ) : (
        <div>
          {content.substring(0, 0)} {/* Mostre apenas os primeiros 100 caracteres ou ajuste conforme necessário */}
          <LerMaisButton onClick={toggleExpanded}></LerMaisButton>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
