import { ObserverUIContainer } from '../ObserverUIContainer';
import translation from 'locales/en/sentences.json';

const Section6 = () => {
  return (
    <ObserverUIContainer
      order={6}
      content={{
        head: translation.section6.head,
        body: translation.section6.body,
      }}
    />
  );
};

export default Section6;
