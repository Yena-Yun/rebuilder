import { ObserverUIContainer } from '../ObserverUIContainer';
import translation from 'locales/en/sentences.json';

const Section4 = () => {
  return (
    <ObserverUIContainer
      order={4}
      content={{
        head: translation.section4.head,
        body: translation.section4.body,
      }}
    />
  );
};

export default Section4;
