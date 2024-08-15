import { customPlaceholders } from '@/constants/inputPhone';
import { Iti } from 'intl-tel-input';

export const updatePlaceholder = (input: HTMLInputElement, iti: Iti) => {
  const countryData = iti.getSelectedCountryData();

  const fullNumber = customPlaceholders[countryData.iso2?.toUpperCase() as keyof typeof customPlaceholders];

  input.setAttribute('placeholder', `+${countryData.dialCode}${fullNumber}`);
};
