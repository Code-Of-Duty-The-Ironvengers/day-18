Basic queries
{field: value}

```js
const example = { year : "1994"}
```

<!-- returns every movie releasedin 1994 -->

```js
const example = { director :"Quentin Tarantino", year: "1994" }
```

<!-- returns every movie released in 1994 with the director Quentin Tarantino -->

## Logical Operators
<!-- && || ?? -->

#### $and

```js
{
	$and: [{year: 2000}, {rate: "8.3"}]
}
```


#### $or
```js
{
	$or: [{year: "1994"}, {rate: "8.5"}]
}

```

#### $nor
<!-- neither of the queries -->

```js
{
	$nor: [{year: "2000"}, {year: "1994"}, {rate: "8.5"}, {director: "Quentin Tarantino"}, {director: "James Cameron"}],
}
```


### Project section
```js
{title: 1, director:1}
```
Shows every movie byt only title and director


#### $gt, $gte, $lt, $lte
Greater Than
Greater (or Equal) Then

Less Than
Less (or Equal) Then
```js
{property: {$gt: 2}}
```


#### $ne and $eq

Not Equal, Equal


#### $in and $nin
```js
{
	{director: {$(n)in: ["Christopher Nolan", "James Cameron"]}}
}
```

if the director is inside that array, show


#### $all

```js
{genre: {$all: ["Crime", "Drama", "Thriller"]}}

```
### $exists

```js
{
	rating: {$exists: true}
}
```