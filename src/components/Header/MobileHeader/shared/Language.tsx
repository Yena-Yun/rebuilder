import styled from 'styled-components';
import i18next, { changeLanguage } from 'i18next';
import { Flex } from '../../../../styles/flex';
import { LANG } from '../../constants';

interface LanguageProps {
  language?: string;
  selectedGroup?: {
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
  };
  hideMenu: () => void;
}

export const Language = ({ hideMenu }: LanguageProps) => {
  return (
    <Flex>
      <LanguageText
        onClick={() => {
          changeLanguage(LANG.KOR.code);
          hideMenu();
        }}
        $isSelectedLanguage={i18next.language === LANG.KOR.code}
      >
        {LANG.KOR.text}
      </LanguageText>
      <Bar>
        <hr />
      </Bar>
      <LanguageText
        onClick={() => {
          changeLanguage(LANG.ENG.code);
          hideMenu();
        }}
        $isSelectedLanguage={i18next.language === LANG.ENG.code}
      >
        {LANG.ENG.text}
      </LanguageText>
    </Flex>
  );
};

const LanguageText = styled.span<{ $isSelectedLanguage: boolean }>`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${({ $isSelectedLanguage }) =>
    $isSelectedLanguage ? 'rgb(255, 255, 255)' : 'rgb(111, 117, 123)'};
  cursor: pointer;
`;

const Bar = styled(Flex)`
  height: 12px;
  background-color: rgb(111, 117, 123);
  margin: 3px 8px;

  & hr {
    height: auto;
    margin: 8px 0;
    flex-shrink: 0;
    align-self: stretch;
    border-width: 0 thin 0 0;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
  }
`;
