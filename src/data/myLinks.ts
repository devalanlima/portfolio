import IconsFilePDF from "../Components/Icons/IconsFilePDF";
import IconsGithub from "../Components/Icons/IconsGithub";
import IconsLinkedin from "../Components/Icons/IconsLinkedin";
import IconsWhatsapp from "../Components/Icons/IconsWhatsapp";
import { LinkIcon } from "../types/linkIcon";

export const links: Array<LinkIcon> = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/devalanlima/',
    icon: IconsLinkedin,
  },
  {
    name: 'whatsapp',
    url: 'https://wa.me/55021996058924',
    icon: IconsWhatsapp,
  },
  {
    name: 'github',
    url: 'https://github.com/devalanlima',
    icon: IconsGithub,
  },
  {
    name: 'curriculo',
    url: 'https://devalanlima.github.io/portfolio/assets/Alan-Lima-Curriculo.pdf',
    icon: IconsFilePDF,
  },
];