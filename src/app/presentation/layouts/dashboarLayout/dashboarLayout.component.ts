import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboar-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboarLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboarLayoutComponent {}
