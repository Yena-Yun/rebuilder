import styled from 'styled-components';
import i18next, { changeLanguage } from 'i18next';
import { Flex } from 'styles/flex';
import { LANGUAGES } from '../constants';

interface LanguageSelectorProps {
  language?: string;
  selectedGroup?: {
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
  };
  hideMenu: () => void;
}

export const LanguageSelector = ({ hideMenu }: LanguageSelectorProps) => {
  return (
    <Flex>
      {LANGUAGES.map(({ code, display }) => (
        <>
          <Label
            onClick={() => {
              changeLanguage(code);
              hideMenu();
            }}
            $isSelectedLanguage={i18next.language === code}
          >
            {display}
          </Label>
          {code === 'ko' && (
            <Bar>
              <hr />
            </Bar>
          )}
        </>
      ))}
    </Flex>
  );
};

const Label = styled.span<{ $isSelectedLanguage: boolean }>`
  color: ${({ $isSelectedLanguage, theme }) =>
    $isSelectedLanguage ? theme.color.white : theme.color.gray4};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 19px;
  cursor: pointer;
`;

const Bar = styled(Flex)`
  height: 12px;
  background-color: ${({ theme }) => theme.color.gray4};
  margin: 3px 8px;

  & hr {
    flex-shrink: 0;
    align-self: stretch;
    height: auto;
    margin: 8px 0;
    border-width: 0 thin 0 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.lightBlack2};
  }
`;
