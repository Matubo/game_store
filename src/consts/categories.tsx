import playstationIcon from '../assets/img/header_icons/playstation.png';
import pcIcon from '../assets/img/header_icons/pc.png';
import xboxIcon from '../assets/img/header_icons/xbox.png';

enum CategoryLink {
  playstation = 'category/playstation',
  xbox = 'category/xbox',
  pc = 'category/pc'
}

export const categories = [
  { link: CategoryLink.pc, text: 'pc', iconSrc: pcIcon },
  { link: CategoryLink.xbox, text: 'xbox', iconSrc: xboxIcon },
  { link: CategoryLink.playstation, text: 'playstation', iconSrc: playstationIcon }
];
