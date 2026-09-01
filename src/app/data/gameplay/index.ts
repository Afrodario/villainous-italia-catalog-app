import { ACTIVATE } from './actions/activate-action';
import { BREW_POISON } from './actions/brew-poison-action';
import { DISCARD } from './actions/discard-action';
import { FATE } from './actions/fate-action';
import { GAIN_POWER } from './actions/gain-power-action';
import { MOVE_A_HERO } from './actions/move-a-hero-action';
import { MOVE_ITEM_OR_ALLY } from './actions/move-item-or-ally-action';
import { PLAY_A_CARD } from './actions/play-a-card-action';
import { VANQUISH } from './actions/vanquish-action';
import { ALLY } from './card-types/ally-card-type';
import { CURSE } from './card-types/curse-card-type';
import { DEFEAT } from './keywords/defeat-keyword';
import { DISCARD_KW } from './keywords/discard-keyword';

export const ALL_ACTIONS = [
  GAIN_POWER,
  PLAY_A_CARD,
  ACTIVATE,
  DISCARD,
  VANQUISH,
  FATE,
  MOVE_ITEM_OR_ALLY,
  MOVE_A_HERO,
  BREW_POISON,
];
export const ALL_CARD_TYPES = [ALLY, CURSE];

export const ALL_KEYWORDS = [DEFEAT, DISCARD_KW];
