import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About us',
      
      links: [
        {text:'Chi siamo', href: '#features'},
        {text:'Partner', href: '#partner'},
        {text:'FAQ', href: '#faq'}
      ]
    },
    {
      text: 'Servizi',
      href: '#servizi'
    },
    {
      text: 'Mission',
      href: '#mission'
    },
  ],
  actions: [{ text: 'Contattaci', href: '#form' }],
};

export const footerData = {
  links: [
    {
      title: 'Home',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Contacts', href: '#form' },
        { text: 'Chi siamo', href: '#features' },
        { text: 'Partners', href: '#partner' },
      ],
    },
    {
      title: '#',
      links: [
        { text: 'Servizi', href: '#servizi' },
        { text: 'FAQ', href: '#faq' },
        { text: 'Mission', href: '#mission' },
      ],
    },
    /*{
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },*/
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/ForgiaLabs', target: '_blank' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://medium.com/@forgialabs', target: '_blank' },
  ],
  footNote: `
    Forgia Labs &eacute; un brand di Forgia S.r.l. - Via Campi d’Annibale 185, 00040, Rocca di papa (RM) - P.Iva: IT17244451005, REA: RM - 1705619
  `,
};
