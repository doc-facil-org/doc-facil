import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {OrganizationService} from "./organization.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Observable, of} from "rxjs";
import {Org} from "./organization-types";

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatListModule, MatTableModule, MatProgressSpinnerModule, NgIf],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  providers: [OrganizationService]
})
export class OrganizationComponent implements OnInit {
  private orgService = inject(OrganizationService);
  org$: Observable<Org | null> = of(null);

  tableDisplayedColumns: string[] = ['name', 'email', 'role'];

  ngOnInit(): void {
    this.org$ = this.orgService.getOrganization();
  }

}
