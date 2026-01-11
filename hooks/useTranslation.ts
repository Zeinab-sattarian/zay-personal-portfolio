import en from '../locales/en/common.json';
import fr from '../locales/fr/common.json';
import { useRouter } from 'next/router';

const map: Record<string, any> = { en, fr };

export function useTranslation() {
  const { locale } = useRouter();
  return map[locale ?? 'en'];
}
