# OS系统 Sublime3 Emmet插件自动闭合标签以及自定义模版的步骤

## 1.Emmet自动闭合标签
  很多人都喜欢用sublime编辑器来写代码，我也不例外，它给我的感觉都如同一个未被开发的处女地————没有太多华丽的效果和炫酷的功能，不过却能让你肆意任性的摆弄：那些强悍的插件能让你“办事的”效率事半功倍，就算没有你想要的“姿势”和“体位”，这也不能妨碍你自己开发一套符合自己口味的“绝世神功”。
  
  当然了，我还没到那个境界，单单是sublime提供的插件，就能很好的满足我的开发需求，这其中用的最多的就是emmet这个神器了，不过呢，这个插件也有很多不完美的地方，比如在写html5中的单标签时，不会自动补全后面的“/”，当然了，浏览器解析时会自动帮我们补全，看上去也没什么太大的影响，但是我这个人有些强迫症，做事情非能够完美的绝对不偷懒，于是每次都要自己手动补上那个“/”，时间一长，心生怨恨，逐用搜索引擎解决了这个毛病：
  
  打开sublime3，左上角点Sublime Text，下拉菜单鼠标移入Preferences ---> Package Settings ---> Emmet ---> Settings-User(如何安装插件可以问搜索引擎，如果你真的很懒，[那就点我](http://jingyan.baidu.com/article/4d58d541caeeaa9dd4e9c093.html))
  
  直接在打开的界面中把下面的代码粘贴进去，重启sublime，然后一切搞定：

`
{
"syntaxProfiles": {
   "html": "xhtml",
   "xml": {
       "tag_case": "upper",
       "attr_quotes": "single"
   }
	}
}`

## 2.为Emmet添加个性化的json或js文件
先来看看Emmet里面的README怎么说的：
> Extensions support

> You can easily extend Emmet with new actions and filters or customize existing ones. In Emmet.sublime-settings, define   extensions_path setting and Emmet will load all .js and .json files in specified folder at startup.

> The default value of extensions_path is ~/emmet, which points to emmet folder inside your OS user’s home folder.

> Also, you can create sections named as extension files (e.g. snippets, preferences and syntaxProfiles) inside user’s Emmet.sublime-settings file and write your customizations there. See original settings file for examples.

大概的意思是：当你设置了个性化文件（.js and .json）的路径时，每次Emmet启动都会读取它，而个性化文件的路径默认为~/emmet；
因此我们要做的是建立一个用来存放个性化文件的文件夹，并往里面放进入js或者json文件，然后把路径设置好，这样每次启动时就能够读取它了。
以桌面一个名为lib的文件夹为例，假设已经在文件夹中放入了你所需要的js或json文件：
该文件的路径为:/Users/han/Desktop/lib
老规矩：上角点Sublime Text，下拉菜单鼠标移入Preferences ---> Package Settings ---> Emmet ---> Settings-User
那现在只需要把下面的代码复制到页面中，就能引用桌面的lib文件夹里面的东东了：

`{"extensions_path": "/Users/han/Desktop/lib",}`

## 3.自定义的json模板的解释
这份文件是我从Emmet的snippets.json里面拷贝过来的；

打开snippet.json文件(切记不能把名字修改成其他，笔者亲试，这样做有可能会导致插件无法识别)；

第5行，我将UTF-8设置成了uft-8，此时对应插件使用charset属性时，属性值都变成了小写的状态；

第674行，我将"profile": "html"修改为"profile": "xhtml"，表示能够在h5的文件格式中使用xhtml的语法；

第676行，我将"!!!":    "<!DOCTYPE html>"修改为"!!!":    "<!doctype html>" ,此时h5的文档声明都变成了小些；

第691——697行，是我自定义的内容，比如“!!”是我自定义的模版，适用于个人使用；

第863——864行，我添加了"tag_case": "upper","attr_quotes": "single"两行代码，即意味着xhtml能够自动闭合单标签，配合第674行的代码，就能够做到在h5的语法状态下实现单标签的自动闭合。


[自定义的 snippets.json 的地址](http://github.com/Bobby90622/Emmet-In-Sublime3/blob/master/snippets.json)
