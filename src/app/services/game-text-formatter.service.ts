import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameTextFormatterService {
  format(text: string): string {
    if (!text) {
      return '';
    }

    return text
      .replace(
        /\bHero\b/g,
        '<span class="font-bold text-yellow-400">Hero</span>',
      )
      .replace(
        /\bHeroes\b/g,
        '<span class="font-bold text-yellow-400">Heroes</span>',
      )
      .replace(
        /\bEroe\b/g,
        '<span class="font-bold text-yellow-400">Eroe</span>',
      )
      .replace(
        /\bEroi\b/g,
        '<span class="font-bold text-yellow-400">Eroi</span>',
      )
      .replace(/\bAlly\b/g, '<span class="font-bold text-red-400">Ally</span>')
      .replace(
        /\bAllies\b/g,
        '<span class="font-bold text-red-400">Allies</span>',
      )
      .replace(
        /\bAlleato\b/g,
        '<span class="font-bold text-red-400">Alleato</span>',
      )
      .replace(
        /\bAlleati\b/g,
        '<span class="font-bold text-red-400">Alleati</span>',
      )
      .replace(/\bItem\b/g, '<span class="font-bold text-sky-400">Item</span>')
      .replace(
        /\bItems\b/g,
        '<span class="font-bold text-sky-400">Items</span>',
      )
      .replace(
        /\bOggetto\b/g,
        '<span class="font-bold text-sky-400">Oggetto</span>',
      )
      .replace(
        /\bOggetti\b/g,
        '<span class="font-bold text-sky-400">Oggetti</span>',
      )
      .replace(
        /\bEffect\b/g,
        '<span class="font-bold text-green-400">Effect</span>',
      )
      .replace(
        /\bEffects\b/g,
        '<span class="font-bold text-green-400">Effects</span>',
      )
      .replace(
        /\bEffetto\b/g,
        '<span class="font-bold text-green-400">Effetto</span>',
      )
      .replace(
        /\bEffetti\b/g,
        '<span class="font-bold text-green-400">Effetti</span>',
      )
      .replace(
        /\bCondition\b/g,
        '<span class="font-bold text-pink-400">Condition</span>',
      )
      .replace(
        /\bConditions\b/g,
        '<span class="font-bold text-pink-400">Conditions</span>',
      )
      .replace(
        /\bCondizione\b/g,
        '<span class="font-bold text-pink-400">Condizione</span>',
      )
      .replace(
        /\bCondizioni\b/g,
        '<span class="font-bold text-pink-400">Condizioni</span>',
      )
      .replace(
        /\bMaledizione\b/g,
        '<span class="font-bold text-purple-400">Maledizione</span>',
      )
      .replace(
        /\bMaledizioni\b/g,
        '<span class="font-bold text-purple-400">Maledizioni</span>',
      )
        .replace(
        /\bCurse\b/g,
        '<span class="font-bold text-purple-400">Curse</span>',
      )
        .replace(
        /\bCurses\b/g,
        '<span class="font-bold text-purple-400">Curses</span>',
      );
  }
}
