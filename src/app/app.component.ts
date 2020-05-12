import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { HelloComponent } from './hello.component';
import { GoodbyeComponent } from './goodbye.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  entryComponents: [HelloComponent, GoodbyeComponent]
})

export class AppComponent  {
  name = 'Angular 6';

  private helloRef: ComponentRef<HelloComponent>;
  private byeRef: ComponentRef<GoodbyeComponent>;
  private helloCopyRef: ComponentRef<HelloComponent>;

  @ViewChild('host', {read: ViewContainerRef}) theHost: ViewContainerRef;
  
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector) { }

  ngOnInit(): void {
    let factory = this.resolver.resolveComponentFactory(HelloComponent);
    this.helloRef = factory.create(this.injector);
    this.helloCopyRef = factory.create(this.injector);

    factory = this.resolver.resolveComponentFactory(GoodbyeComponent);
    this.byeRef = factory.create(this.injector);
  }

  show(){
    this.theHost.detach();
    this.theHost.insert(this.helloRef.hostView);
    this.theHost.insert(this.byeRef.hostView);
    this.theHost.insert(this.helloCopyRef.hostView);
  }
}
