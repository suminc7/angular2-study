



####Controlling Rendering HTML
- ngIf
- ngSwitch
- ngFor
- Pipes
- Creating Custom Pipes
- ngClass

Showing / hiding elements
```typescript
<div [hidden]=“courses.length == 0”></div>	
<div *ngIf=“courses.length	> 0”></div>	
<div [ngSwitch]=“viewMode”>
					<template [ngSwitchWhen]=“‘map’” ngSwitchDefault>
								…
					</template>
					<template [ngSwitchWhen]=“‘list’”>
								…
					</template>
</div>	
```