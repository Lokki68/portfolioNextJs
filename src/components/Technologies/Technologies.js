import React from 'react';
import {
  DiHtml5,
  DiAngularSimple,
  DiSass,
  DiJsBadge,
  DiReact,
  DiCss3,
  DiMongodb,
  DiMysql,
  DiNodejsSmall, DiGithubBadge, DiUbuntu, DiPhp
} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle, ListCard, ListContent} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Voici les technologies que j'utilise pour réaliser mes projets. Et surtout les technologies qui me tienne à cœur,
      et que je continue d'apprendre.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListContent>
            <ListCard>
              <DiHtml5 size='4rem' />
              <ListParagraph>Html</ListParagraph>
            </ListCard>
            <ListCard>
              <DiCss3 size='4rem' />
              <ListParagraph>Css</ListParagraph>
            </ListCard>
            <ListCard>
              <DiSass size='4rem' />
              <ListParagraph>Sass</ListParagraph>
            </ListCard>
            <ListCard>
              <DiJsBadge size='4rem' />
              <ListParagraph>JavaScript</ListParagraph>
            </ListCard>
            <ListCard>
              <DiReact size='4rem' />
              <ListParagraph>ReactJS</ListParagraph>
            </ListCard>
            <ListCard>
              <DiAngularSimple size='4rem' />
              <ListParagraph>Angular</ListParagraph>
            </ListCard>
          </ListContent>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListContent>
            <ListCard>
              <DiMongodb size='4rem' />
              <ListParagraph>MongoDb</ListParagraph>
            </ListCard>
            <ListCard>
              <DiNodejsSmall size='4rem' />
              <ListParagraph>NodeJs</ListParagraph>
            </ListCard>
            <ListCard>
              <DiMysql size='4rem' />
              <ListParagraph>MySql</ListParagraph>
            </ListCard>
          </ListContent>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Divers</ListTitle>
          <ListContent>
            <ListCard>
              <DiGithubBadge size='4rem' />
              <ListParagraph>GitHub</ListParagraph>
            </ListCard>
            <ListCard>
              <DiUbuntu size='4rem' />
              <ListParagraph>Ubuntu</ListParagraph>
            </ListCard>
            <ListCard>
              <DiPhp size='4rem' />
              <ListParagraph>PhpStorm</ListParagraph>
            </ListCard>
          </ListContent>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
