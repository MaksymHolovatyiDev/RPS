import { paper, rock, scissors } from 'assets/img/svg';
import { styleBase } from '@/stylesBase';
import { styles } from './RPS.styles';

export const items = [
  {
    key: 'Rock',
    colors: styleBase.RockGradient,
    style: styles.rock,
    xml: rock,
  },
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
];
