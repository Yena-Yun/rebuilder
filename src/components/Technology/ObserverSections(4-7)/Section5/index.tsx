import { ObserverUIContainer } from '../ObserverUIContainer';
import translation from 'locales/en/sentences.json';

const Section5 = () => {
  return (
    <ObserverUIContainer
      order={5}
      content={{
        head: translation.section5.head,
        body: translation.section5.body,
      }}
    />
  );
};

export default Section5;
