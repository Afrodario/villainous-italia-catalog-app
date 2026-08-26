import { ACTIVATE } from './actions/activate-action';
import { GAIN_POWER } from './actions/gain-power-action';
import { PLAY_A_CARD } from './actions/play-a-card-action';
import { ALLY } from './card-types/ally-card-type';
import { CURSE } from './card-types/curse-card-type';

export const ALL_ACTIONS = [GAIN_POWER, PLAY_A_CARD, ACTIVATE];
export const ALL_CARD_TYPES = [ALLY, CURSE];
