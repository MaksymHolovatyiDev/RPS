import { useRPS } from '../../Provider/Provider';
import RPSDefault from '../RPSDefault/RPSDefault';
import RPSPicked from '../RPSPicked/RPSPicked';

export default function RPS() {
  const { picked } = useRPS();

  return picked ? <RPSPicked /> : <RPSDefault />;
}
