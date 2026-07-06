import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { MdOutlineLock } from 'react-icons/md';
import { RiCompass3Line, RiTimerLine } from 'react-icons/ri';
import { validateApiGame } from './validators/gameValidator';
const RATING_VARIANT = {
  '3+': 'rating-3',
  '7+': 'rating-7',
  '13+': 'rating-13',
  '15+': 'rating-15',
  '18+': 'rating-18',
};

const AGE_LABEL = {
  '3+': 'Semua Usia',
  '7+': 'Anak',
  '13+': 'Remaja',
  '15+': 'Remaja',
  '18+': 'Dewasa',
};

function parseGallery(galleryUrls, title) {
  if (!galleryUrls) return [];
  try {
    let urls;
    if (typeof galleryUrls === 'string') {
      const trimmed = galleryUrls.trim();
      if (trimmed.startsWith('[')) {
        urls = JSON.parse(trimmed);
      } else {
        urls = trimmed.split(/\s+/).filter(Boolean);
      }
    } else {
      urls = galleryUrls;
    }
    return (Array.isArray(urls) ? urls : [])
      .filter((src) => typeof src === 'string' && (src.startsWith('/') || src.startsWith('https://')))
      .map((src, i) => ({
        src,
        alt: `${title} Screenshot ${i + 1}`,
      }));
  } catch {
    return [];
  }
}
export function mapGameListItem(game) {
  const validated = validateApiGame(game);
  if (!validated) return null;

  const code = validated.rating?.code ?? '13+';
  return {
    id: String(validated.id),
    title: validated.title,
    rating: code,
    ratingVariant: RATING_VARIANT[code] ?? 'rating-13',
    tags: validated.genres.map((g) => g.name),
    img: validated.logoUrl,
  };
}

export function mapGameDetail(game) {
  const validated = validateApiGame(game);
  if (!validated) return null;

  const code = validated.rating?.code ?? '13+';
  const gallery = parseGallery(validated.galleryUrls, validated.title);

  const parentalTips = [
    { icon: RiTimerLine, title: validated.tipsWaktuLayarTitle, desc: validated.tipsWaktuLayarDesc },
    { icon: MdOutlineLock, title: validated.tipsPembayaranTitle, desc: validated.tipsPembayaranDesc },
  ];

  if (validated.tipsFiturChatTitle) {
    parentalTips.push({
      icon: HiOutlineChatAlt2,
      title: validated.tipsFiturChatTitle,
      desc: validated.tipsFiturChatDesc,
    });
  } else if (validated.tipsInteraksiTitle) {
    parentalTips.push({
      icon: HiOutlineChatAlt2,
      title: validated.tipsInteraksiTitle,
      desc: validated.tipsInteraksiDesc,
    });
  }

  const descriptionSections = [
    {
      title: 'Deskripsi Gim',
      icon: RiCompass3Line,
      body: validated.description,
      image: gallery[0]?.src ?? validated.logoUrl,
    },
  ];

  if (validated.evolutionTitle) {
    descriptionSections.push({
      title: validated.evolutionTitle,
      icon: 'group',
      body: validated.evolutionDesc,
      image: gallery[1]?.src ?? validated.logoUrl,
    });
  }

  return {
    id: String(validated.id),
    title: validated.title,
    developer: validated.developer,
    cover: validated.logoUrl,
    rating: code,
    ageLabel: AGE_LABEL[code] ?? 'Remaja',
    ratingDesc: validated.rating?.description ?? '',
    tags: validated.genres.map((g) => g.name),
    platforms: validated.platforms.map((p) => p.name),
    releaseDate: validated.releaseDate,
    descriptionSections,
    parentalTips: parentalTips.filter((t) => t.title),
    psychNote: validated.saranPsikologis,
    gallery,
  };
}