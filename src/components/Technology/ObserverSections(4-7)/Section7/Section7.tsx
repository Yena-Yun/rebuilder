import { ObserverUIContainer } from '../ObserverUIContainer/ObserverUIContainer';
import translation from 'locales/en/sentences.json';

export const Section7 = () => {
  return (
    <ObserverUIContainer
      order={7}
      isLastSection
      content={{
        head: translation.section7.head,
        body: translation.section7.body,
      }}
    />
  );
};
