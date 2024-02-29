import { ObserverUIContainer } from '../ObserverUIContainer';
import translation from 'locales/en/sentences.json';

const Section7 = () => {
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

export default Section7;
