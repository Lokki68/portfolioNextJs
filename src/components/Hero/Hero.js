import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';
import {useRouter} from "next/router";


const Hero = () => {
  const router = useRouter()

  return (

    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenue sur <br />
          mon Portfolio
        </SectionTitle>
        <SectionText>
          Je m'appelle Brice, je suis développeur FullStack. En reconversion professionnelle.
        </SectionText>
        <Button onClick={() => router.push('mailto:bricel67@gmail.com')}>En savoir plus</Button>
      </LeftSection>
    </Section>

  );
}

export default Hero;
