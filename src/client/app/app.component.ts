import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { AboutComponent } from './+about/index';
import { HomeComponent } from './+home/index';
import { PertComponent } from './+pert/index';
import { ThreePointComponent} from './+threepoint/index';
import { ComparisonComponent} from './+comparison/index';
import { MonteCarloComponent} from './+montecarlo/index';


import { NameListService, NavbarComponent, ToolbarComponent } from './shared/index';
//import {ThreePointComponent} from './+three-point/index';



@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@Routes([
  {
    path: '/',
    component: PertComponent
  },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/pert',
    component: PertComponent
  },
  {
    path: '/three-point',
    component: ThreePointComponent
  },
  {
    path: '/comparison',
    component: ComparisonComponent
  },
  {
    path: '/montecarlo',
    component: MonteCarloComponent
  }
])
/**
 * This class represents the main application component.
 * Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy
 * loaded components (HomeComponent, AboutComponent).
 */
export class AppComponent {}
