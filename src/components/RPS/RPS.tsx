import { useRPS } from '@/Provider/Provider';
import RPSDefault from '@/components/RPSDefault/RPSDefault';
import RPSPicked from '@/components/RPSPicked/RPSPicked';

export default function RPS() {
  const { picked } = useRPS();

  return picked ? <RPSPicked /> : <RPSDefault />;
}
