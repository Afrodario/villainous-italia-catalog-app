import { Component } from '@angular/core';
import { VillainProgressComponent } from '../villain-progress/villain-progress.component';
import { Villain } from '../../models/villain.model';
import { VillainRepository } from '../../repositories/villain.repository';
import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';
import { VillainProgressionRepository } from '../../repositories/villain-progression.repository';

@Component({
  selector: 'app-progression',
  standalone: true,
  imports: [VillainProgressComponent],
  templateUrl: './progression.component.html',
})
export class ProgressionComponent {
  villains: Villain[] = [];
  selectedVillain: Villain | null = null;
  selectedProgression: VillainProgression | null = null;

  constructor(
    private readonly villainRepository: VillainRepository,
    private readonly progressionRepository: VillainProgressionRepository,
  ) {
    this.villains = this.villainRepository.getAll();
  }

  selectVillain(villain: Villain): void {
    this.selectedVillain = villain;

    this.selectedProgression = this.progressionRepository.getByVillainId(
      villain.id,
    );

    console.log('Cattivo selezionato:', this.selectedVillain);
    console.log('Progressione trovata:', this.selectedProgression);

    setTimeout(() => {
      document.getElementById('villain-progression')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
