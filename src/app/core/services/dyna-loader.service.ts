import { Injectable, ComponentFactoryResolver, Inject, ViewContainerRef } from '@angular/core';
import { AlertsComponent } from '../../accessibility/alerts/alerts.component';

@Injectable({
  providedIn: 'root'
})
export class DynaLoaderService {
  factoryResolver:ComponentFactoryResolver;
  eleViewContainer:ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }
  seteleViewContainerRef(viewContainerRef:ViewContainerRef) {
    this.eleViewContainer = viewContainerRef
  }

  createDynaComponentInstance(dynaComp:any){
    const factory = this.factoryResolver.resolveComponentFactory(dynaComp)
    let component = factory.create(this.eleViewContainer.parentInjector);
    return component;
  }

  insertDynaComponent(dynaComp:any){
    this.eleViewContainer.insert(dynaComp.hostView);
  }
  addDynamicComponent(dynaComp:any) {
    const factory = this.factoryResolver
                        .resolveComponentFactory(dynaComp)
    const component = factory
      .create(this.eleViewContainer.parentInjector)
    this.eleViewContainer.insert(component.hostView)
  }

  clearComponents(){
    this.eleViewContainer.clear();
  }
}
