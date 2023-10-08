import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLIENT_STATUS_ENUM } from '../../clients-types';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

interface StatusIcon {
  tooltip: string,
  image: string,
}
@Component({
  selector: 'app-status-view',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule],
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.scss']
})
export class StatusViewComponent {
  @Input() status: string = ""
  statusIcon: StatusIcon = { image: "", tooltip: "" }

  ngOnChanges() {
    switch (this.status) {
      case CLIENT_STATUS_ENUM.IDLE: {
        this.statusIcon = { image: "remove", tooltip: "" }; break
      } case CLIENT_STATUS_ENUM.QUEUED: {
        this.statusIcon = { image: "alarm_on", tooltip: "Download agendado; iniciado em breve" }; break
      } case CLIENT_STATUS_ENUM.RUNNING: {
        this.statusIcon = { image: "running", tooltip: "Baixando documentos." }; break
      } case CLIENT_STATUS_ENUM.SUCCESS: {
        this.statusIcon = { image: "check_circle", tooltip: "Documentos baixados para o mes pasado." }; break
      } default: {
        this.statusIcon = { image: "error", tooltip: "Erro durante o download." }; break
      }
    }
  }
}
