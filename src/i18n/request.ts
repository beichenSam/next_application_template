import {getRequestConfig} from 'next-intl/server';
import {locales, routing} from './routing';
import { notFound } from 'next/navigation';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const locale = await requestLocale;
//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;
    
    if(!locales.includes(locale as any)) notFound();
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});