import {lizard, paper, rock, scissors, spock} from 'assets/img/svg';
import {styleBase} from '@/stylesBase';
import {styles} from './RPS.styles';

export const items = [
  {
    key: 'Scissors',
    colors: styleBase.ScissorsGradient,
    style: styles.scissors,
    xml: scissors,
  },
  {
    key: 'Paper',
    colors: styleBase.PaperGradient,
    style: styles.paper,
    xml: paper,
  },
  {
    key: 'Rock',
    colors: styleBase.RockGradient,
    style: styles.rock,
    xml: rock,
  },
  {
    key: 'Lizard',
    colors: styleBase.LizardGradient,
    style: styles.lizard,
    xml: lizard,
  },
  {
    key: 'Spock',
    colors: styleBase.Cyan,
    style: styles.spock,
    xml: spock,
  },
];
