import { Injectable, ComponentFactoryResolver, Inject, ViewContainerRef } from '@angular/core';
import { AlertsComponent } from '../../accessibility/alerts/alerts.component';

@Injectable({
  providedIn: 'root'
})
export class DynaLoaderService {
  factoryResolver:ComponentFactoryResolver;
  rootViewContainer:ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }
  setRootViewContainerRef(viewContainerRef:ViewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  createDynaComponentInstance(dynaComp:any){
    const factory = this.factoryResolver.resolveComponentFactory(dynaComp)
    let component = factory.create(this.rootViewContainer.parentInjector);
    return component;
  }

  insertDynaComponent(dynaComp:any){
    this.rootViewContainer.insert(dynaComp.hostView);
  }
  addDynamicComponent(dynaComp:any) {
    const factory = this.factoryResolver
                        .resolveComponentFactory(dynaComp)
    const component = factory
      .create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  }
}
