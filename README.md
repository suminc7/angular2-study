



####Controlling Rendering HTML
- ngIf
- ngSwitch
- ngFor
- Pipes
- Creating Custom Pipes
- ngClass

## Showing / hiding elements
```typescript
<div [hidden]="courses.length == 0"></div>	
<div *ngIf="courses.length	> 0"></div>	
<div [ngSwitch]="viewMode">
    <template [ngSwitchWhen]="'map'" ngSwitchDefault>
        ...
    </template>
    <template [ngSwitchWhen]="'list'">
        ...
    </template>
</div>	
```

## Pipes
```typescript
{{	course.title	|	uppercase	}}	->	ANGULAR	COURSE
{{	course.students	|	number	}}	->	1,234
{{	course.rating	|	number:’2.2-2’	}}	->	04.97
{{	course.price	|	currency:’USD’:true	}}	->	$99.95
{{	course.releaseDate	|	date:’MMM	yyyy’	}}	->	Mar	2016
{{	course	|	json	}}
```


## Creating Custom Pipes
```typescript
import {Pipe, PipeTransform} from ‘angular2/core’;	
@Pipe({	name: ‘summary’	})
export	class	SummaryPipe	implements	PipeTransform	{
    transform(value:	string,	args:	string[])	{
    }
}
```

#### In the host component
```typescript
@Component({
    pipes: [SummaryPipe]
})
```

## Applying multiple classes dynamically
```typescript
<i [ngClass]=“{
    active: isActive,
    disabled: isDisabled
}”></i>	
```


## Applying multiple styles dynamically
```typescript
<button	
    [ngStyle]=“{
    backgroundColor:	canSave	?	‘blue’:	‘gray’,
    color:	canSave	?	‘white’	:	‘black’
}”></button>
```

## Elvis operator
```typescript
{{	task.assignee?.role?.name	}}
```

## Inserting content from the outside
```typescript
<ng-content></ng-content>	
Multiple content placeholders
<ng-content	select=“.heading”></ng-content>
<ng-content	select=“.body”></ng-content>
```