import { Component, OnDestroy, OnInit } from '@angular/core';
import { LIST_TAB_ITEMS } from '../shared/constants/list-tab-items.const';
import { ProjectTabsComponent } from '../shared/components/project-tabs/project-tabs.component';
import { ITabItem } from '../shared/interfaces/tab-item.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GetTodos } from '../store/todos/todos.actions';
import { selectTodos } from '../store/todos/todos.selector';
import { ITodo } from '../shared/interfaces/todo.interface';
import { AsyncPipe } from '@angular/common';
import { BoardComponent } from './pages/board/board.component';
import { ListComponent } from './pages/list/list.component';
import { TableComponent } from './pages/table/table.component';
import { TilesComponent } from './pages/tiles/tiles.component';


@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
    imports: [ProjectTabsComponent, AsyncPipe, BoardComponent, ListComponent, TableComponent, TilesComponent]
})
export class TodosComponent implements OnInit, OnDestroy {
  tabs: ITabItem[] = LIST_TAB_ITEMS;
  selectedTab: ITabItem;
  sub: Subscription;
  todos$: Observable<ITodo[]>;

  constructor(private _route: ActivatedRoute, private _router: Router, private _store: Store<any>) {
    this._store.dispatch(GetTodos());

  }

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
    this.todos$ = this._store.pipe<ITodo[]>(select(selectTodos));
    this.selectedTab = this.tabs.find((t: ITabItem) => t.selected === true) as ITabItem || this.tabs[0];
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  async handleTabSelection(tab: number): Promise<void> {
    this.tabs.forEach(t => t.selected = false);
    this.tabs[tab].selected = true;
    this.selectedTab = this.tabs[tab];
    await this._handleUrlChange(this.selectedTab.key)
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
