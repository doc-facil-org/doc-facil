import { Pipe, PipeTransform } from '@angular/core';
import {CLIENT_STATUS_ENUM} from "../pages/clients/clients-types";

@Pipe({
  name: 'jobStatus',
  standalone: true
})
export class JobStatusPipe implements PipeTransform {

  transform(value: CLIENT_STATUS_ENUM): string {
    switch (value) {
      case CLIENT_STATUS_ENUM.IDLE: { return 'inativo'; }
      case CLIENT_STATUS_ENUM.QUEUED: { return 'aguardando na fila'; }
      case CLIENT_STATUS_ENUM.RUNNING: { return 'em execução'; }
      case CLIENT_STATUS_ENUM.ERROR: { return 'erro'; }
      case CLIENT_STATUS_ENUM.SUCCESS: { return 'finalizado'; }
      default: { return 'status desconhecido'; }
    }
  }

}
