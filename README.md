## FEPre
可以在开发环境预编译html文件，实现公共html复用
模板引擎选用ejs,可以根据./config/下的customization.json文件配置渲染每个页面所需要的不同脚本和样式
安装依赖后，可以直接运行
```
gulp
```
此时gulp的watch模式开启，在配置文件或者模板文件中的所有修改都会自动编译

生成的html文件在./dist中。此文件夹可以随意删除或者清空
