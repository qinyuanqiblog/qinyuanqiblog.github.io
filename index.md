# angularjs 不完全指南

* [angularjs官网](https://docs.angularjs.org)

* [Awesome AngularJS](https://github.com/gianarb/awesome-angularjs)

* [angularjs菜鸟学院](http://www.runoob.com/angularjs)

* [angular 中文网](http://www.angularjs.cn/)

## angular 表达式

## angular  常用指令

[angular所有指令大全](http://www.runoob.com/angularjs/angularjs-reference.html)

* __ng-app__ 指令初始化一个AngularJS应用程序

* __ng-init__ 指令初始化应用程序数据

* __ng-bind__ 绑定 HTML 元素到应用程序数据

* __ng-model__ 双向绑定数据

> ng-model 指令可以为应用数据提供状态值(invalid, dirty, touched, error)

```html
<form ng-app="" name="myForm" ng-init="myText = 'test@runoob.com'">
    Email:
    <input type="email" name="myAddress" ng-model="myText" required></p>
    <h1>状态</h1>
    {{myForm.myAddress.$valid}}
    {{myForm.myAddress.$dirty}}
    {{myForm.myAddress.$touched}}
</form>
```

* __ng-repeat__ for 循环遍历数据

```html
<div ng-app="" ng-init="names=[
{name:'Jani',country:'Norway'},
{name:'Hege',country:'Sweden'},
{name:'Kai',country:'Denmark'}]">
<p>循环对象：</p>
<ul>
  <li ng-repeat="x in names">
    {{ x.name + ', ' + x.country }}
  </li>
</ul>
</div>
```

* __ng-show__ 和 __ng-hide__  显示或隐藏 HTML 元素

* __ng-class__

```html
<!--作为属性-->
<div ng-class="key === isShow ? 'active' : ''"></div>
```

```html
<!--作为css类-->
<div class="ng-class:key === isShow ? 'active' : ''"></div>
```

```html
<!--另一种写法-->
<div ng-class="{ture: 'active', false: ''}[isShow]"></div>
```

* __ng-controller__   控制器

```html
<div ng-app="app" ng-controller='myCtrl'> {{myName}} </div>
```

```js
angular.moduele('app', []).controller('myCtrl', function ($scope, $rootScope){
  $.scope.myName = '我的名字是xxxx';
  // $rootScope  可以在多个控制器中使用
})
```

* __ng-include__
> 如果是要引入外部文件的话，那么 需要把这个路径变成一个字符串类型的，如下

```html
<div ng-app="">
    <div ng-include="'example.html'"></div>
</div>
```

## angular 自定义指令

```html
<div ng-app="angular" ng-controller="Controller">
  <div my-customer></div>
</div>
```

```js
angular.module('angular', [])
    .controller('Controller', function($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    })
    .directive('myCustomer', function() {
        return {
            restrict : 'A',
            replace : true,
            templateUrl: 'my-customer.html'
        };
});
```

* __directive常用设置__

> [官网API](https://docs.angularjs.org/guide/directive)
> [中文API](http://haodetong.github.io/2016/05/20/angular-directive/)

**(1)** restrict

> 'A' - 仅匹配属性指令

```html
    <!--属性指令-->
    <div my-directive></div>
```

> 'E' - 仅匹配标签指令

```html
    <!--标签指令-->
    <my-directive></my-directive>
```

> 'C' - 只匹配类名指令


```html
    <!--类名指令-->
    <div class="my-directive"></div>
```

> 'M' - 只匹配注释指令

```html
    <!--注释指令-->
    <!-- directive:my-directive -->
    <div></div>
```

> 默认是 'AE', 表示匹配属性或标签名, 可以根据需要进行拼接


**(2)** replace

> true:  生成的html内容会替换掉定义此指令的html
> false: 生成的html内容会插入到定义此指令的元素中
> 默认值是 false

**(3)** transclude
> 允许在自定义指令内继续嵌套
> 在下面的例子中没有tansclude属性的话，hello指令下面的别的标签就都被覆盖了

```html
<body>
  <hello>
    <p>asdjlkfjaksdfjlsdajf</p>
    <div>
      123131321
    </div>
    <strong>54664456</strong>
  </hello>
</body>
<script>
  angular.module('angular', []).directive('hello', function() {
    return {
      replace: true,
      transclude: true,
      template: '<h1>hellow  angular <p ng-transclude></p> </h1>',
    }
  });
  angular.bootstrap(document, ['angular']);
</script>
```

**(4)** controller  内部的控制器，可以把方法暴露到外部，给外部使用

**(5)** scope   独立的作用域
> 让指令有自己的作用域

```js
    angular.module('app', []).directive('hello', function (){
        return {
            scope: {}
        }
    })
```

**(5.1)** scope 的绑定策略

* @ 把当前的属性作为自字符串传递，还可以绑定来自外层的scope的值,在属性之中插入{{}}即可
* = 与父元素的属性进行双向绑定
* & 传递一个来自父scope的函数，稍后调用
> [详解](http://www.imooc.com/video/3085)

**(6)** link  对dom进行操作 [官网api](https://docs.angularjs.org/guide/directive)  一般接收的参数
> scope 控制器中的 $scope
> element 将原始的DOM元素或HTML字符串包装为jQuery元素 
> [支持jquery的方法有](https://docs.angularjs.org/api/ng/function/angular.element)
> attr attrs 是具有标准化属性名称及其对应属性值


**(6)** require 指令于控制器的交互
>（1）require的值用？、^、或者？^修饰。
>（2）如果不用任何修饰，则在当前指令中进行查找控制器。
>（3）如果用^修饰，则在当前指令的父指令进行查找控制器，若未找到，则会抛出异常。
>（4）如果用？修饰，则说明在当前指令中未找到控制器，此时将以null作为第四个参数。
>（5）如果需要交互多个指令，则以数组形式给出，如：[^?a，^?b]。
> 鉴于此，为了不抛出异常，我们一般以^？来进行修饰。





## angular  常用服务(函数) [可以自定义服务]

> 在 AngularJS 中，服务是一个函数或对象，可在你的 AngularJS 应用中使用, 简单的说，就是angular自带的方法
* __为啥一定要使用这些服务__
> 在很多服务中，比如 $location 服务，它可以使用 DOM 中存在的对象，类似 window.location 对象，但 window.location 对象在 AngularJS 应用中有一定的局限性。
> AngularJS 会一直监控应用，处理事件变化， AngularJS 使用 $location 服务比使用 window.location 对象更好

* [$location](http://www.runoob.com/angularjs/angularjs-http.html)

```js
$location.absUrl() //获取当前页面的地址
```

* [$http](https://docs.angularjs.org/api/ng/service/$http)

```js
//AngularJS1.5 以上版本的写法
$http({
    method: 'GET',
    url: 'angular_demo.html'
}).then(function successCallback(response){
    //请求成功执行的代码
}, function errorCallback(response){
    //请求失败执行的代码
});
```

* [$timeout](https://docs.angularjs.org/api/ngMock/service/$timeout)

```js
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
    $scope.myHeader = "Hello World!";
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);
});
```

* [$interval](https://docs.angularjs.org/api/ng/service/$interval)   同 $timeout 的做法差不多

* [select](https://docs.angularjs.org/api/ng/directive/ngSelected)  angular select[也可以是用ng-repeat来进行for循环]

```html
<div ng-app="myApp" ng-controller="myCtrl">
    <select ng-init="selectedName" ng-model="selectedName" ng-options="value for (key, value) in names">
    </select>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["Google", "Runoob", "Taobao"];
    $scope.selectdName = names[0];
});
</script>
```

* [tabel](http://www.runoob.com/angularjs/angularjs-tables.html)   tabel 的相关使用

## angular 常用全局方法

* [angular 所有的方法](https://docs.angularjs.org/api/ng/function)

* __angular.lowercase()__  转换字符串为小写
* __angular.uppercase()__  转换字符串为大写
* __angular.isString()__   判断是否是一个字符串，如果是则返回true
* __angular.isNumber()__   判断是否是一个数组，如果是则返回false

```js
angular.module('', []).controller('', function ($scope){
    $scope.name = 'string';
    $scope.name = angular.lowercase($scope.name); //把当前字符串转换为小写
})
```

* __angular.bootstrap__  手动启动AngularJS 程序
> [官网API](https://docs.angularjs.org/api/ng/function/angular.bootstrap)
> angular.bootstrap(element, [modules], [config]);
> 其中第一个参数element:是绑定ng-app的dom元素；
> modules：绑定的模块名字
> config：附加的配置

* __angular service__    service 里面是不能直接注入$scope的

```js
    //定义一个service, 按照api 的说法，service的第二个参数放的是一个构造函数，当angular 调用service的时候会自己去实例化它
    angular.module('app', []).service('getName', GetName).controller('myCtrl', function($scope, getName){
        getName.showName();//ben
    })

    function GetName (){
        this.name = "ben"
    }

    GetName.prototype.showName = fuunction (){
        console.log(this.name)
    }
```

* __angular factory__

 ```js
 //定义一个factory,
    angular.module('app', []).factory('getName', function (getName){
        var getName = {
                showName: function () {
                    alert(1);
                }
            }
            return getName;
    })
 ```

## [Service和Factory等的区别](https://segmentfault.com/a/1190000003096933#articleHeader0)

> [stack_overflow的回答](http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory)

## angular  依赖注入


## angular  路由


* __ngRouter和ui-router__的区别

[详细攻略](http://yijiebuyi.com/blog/3aab7ad8bccb22b4a881849c0593d5e2.html)

* __ui-view__ 的三种调用方式

> __(1)__ <ui-view></ui-view>
> __(2)__ <div ui-view></div>
> __(3)__ <div class="ui-view"></div>

* __ui-router__ 的一些使用
> [官网API](https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router)

```html
<!doctype html>
<html ng-app="myApp">
<head>
  <script src="js/angular.js"></script>
  <!-- Include the ui-router script -->
  <script src="js/angular-ui-router.min.js"></script>
  <script>
    // ...and add 'ui.router' as a dependency
    var myApp = angular.module('myApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('box', {
            url: '/box', // 父路由,路径调用的形式  #/box
            templateUrl: 'example.html',
            controller: 'myCtrl', //这里可以放一个控制器的名称或者是一个方法
        })
        .state('box.children', {
            url: '/children',
            templateUrl: 'children.html', //子路由，路径调用的形式  #/box/children
            controller: 'childrenCtrl'
        })
    });
  </script>
</head>
<body>
</body>
</html>
```



