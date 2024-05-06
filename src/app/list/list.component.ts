import { Component, OnDestroy, OnInit } from '@angular/core';
import { LIST_TAB_ITEMS } from '../shared/constants/list-tab-items.const';
import { ProjectTabsComponent } from '../shared/components/project-tabs/project-tabs.component';
import { ITabItem } from '../shared/interfaces/tab-item.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProjectTabsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, OnDestroy {
  tabs: ITabItem[] = LIST_TAB_ITEMS;
  sub: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

 async ngOnInit(): Promise<void> {
    this.sub = this._route.queryParams.subscribe(async data => {
      // First we check whether there is a list tab param in the URL
      // and if no, loop through the tabs array to see if there is a 'selected' tab there
      // and if no we make the first tab the selected one
      if (Object.keys(data).length === 0) {
        const selected = this.tabs.find((t: ITabItem) => t.selected === true) as ITabItem || this.tabs[0];
        // Finally we put necessary value into URL param
        this._handleUrlChange(selected.key);
      } else {
        this.tabs.forEach((t: ITabItem) => {
          t.selected = false;
          if (t.key === data['tab']) {
            t.selected = true;
          } 
        });
      };
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  async handleTabSelection(tab: number): Promise<void> {
    this.tabs.forEach(t => t.selected = false);
    this.tabs[tab].selected = true;
    await this._handleUrlChange(this.tabs[tab].key)
  }

   /**
   * Changes the route without moving from the current view or triggering a navigation event
   */
  private async _handleUrlChange(value: string): Promise<void> {
    await this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { tab: value },
      queryParamsHandling: 'merge',
      skipLocationChange: false
    });
  }
}
