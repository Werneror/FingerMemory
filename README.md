# 手指记忆

## 简介

最近我在学习五笔输入法。使用一个输入法，我需要能够做到不过脑子，下意识地便能进行正确的输入。这需要大量的练习，让自己的手指“记住”五笔输入法才行。大脑记住某个东西尚且需要重复，手指“记住”某个东西非有大量练习不可。

我在学习时使用金山打字通作为训练教程。使用后发现金山打字通训练时字根或汉字的出现是固定的。无论我对某个字根或汉字的输入多么熟悉，它出现的频率也不会减少；无论我对某个字根或汉字的输入多么陌生，它出现的频率也不会增加。我一遍又一遍的训练，熟悉的还是熟悉，陌生的依旧陌生。

我发现这是不符合[刻意练习原则](https://baike.baidu.com/item/%E5%88%BB%E6%84%8F%E8%AE%AD%E7%BB%83%E7%90%86%E8%AE%BA/19845073)的。我们应该花更多的时间刻意地练习自己不熟悉的部分。所以一个好的五笔输入法训练系统应该能够记录练习者的练习情况，根据其掌握程度动态地制定训练任务，更多地训练练习者不熟悉的字根或汉字。

我想要寻找一个这样的、符合刻意练习原则的五笔输入法训练系统，却没能找到。于是决定自己动手实现，便有了这个项目。

本项目是以刻意练习理论为指导、根据练习者掌握情况动态生成训练内容、优先训练练习者掌握不佳内容的五笔输入法训练系统。

本项目是一个**纯前端**项目，没有服务器端，所有用户数据都保存在浏览器中。


## 关卡设置

- 第零关：指法练习
- 第一关：字根输入
- 第二关：一级简码
- 第三关：键名汉字
- 第四关：二级简码
- 第五关：三级简码（部分）

关卡写在文件[statics/js/data.js](statics/js/data.js)中。

## 算法

### 显示与输入

在“第一关：字根输入”中，我们会在屏幕上显示一个字根，如“礻”，用户看到这个字根后应该按下这个字根所在按键“p”。在这个过程中，我们称字根“礻”为`显示`（display），按键“p”为`输入`（input）。`显示`的取值范围是任意的，如在第零关中它是字母，在第一关中它是字根。`输入`的取值只能是可以用键盘输入的东西，如字母或汉字。一个`显示`对应且仅对应一个`输入`，一个`输入`可以对应多个`显示`。我们称一对`显示`-`输入`为一个训练元。关卡便是一些训练元的集合。

### 不熟练度度量

设从`显示`显示在屏幕上到用户输入`输入`经历的时间为`T`（单位：秒），则不熟练度`U`为：

```
U = T^0.5
```

这个函数不收敛，所以需要指定一个时间最大值，当输入错误或`T`超过时间最大值时，将`T`置为时间最大值。

每个训练元都对应一个不熟练度，初始时不熟练度为时间最大值对应的不熟练度。练习者的每次练习都会更新相应训练元的不熟练度。

下表是一些`T`和`U`的对应：

T   | U
:--:| :-:
0.0 | 0.00
0.1 | 0.32
0.2 | 0.45
0.5 | 0.71
1.0 | 1.00
1.5 | 1.22
5.0 | 2.23
5.0 | 2.23
10  | 3.16
60  | 7.75


### 训练元选择器

每一个关卡都有一个训练元集合，训练元选择器的作用是从训练元集合中选取一个训练元，将训练元的`显示`显示在屏幕上，然后等待用户输入。

如何选择呢？我们按照不熟练度加权进行随机选取。设训练元集合中的训练元的不熟练度之和为`S`，其中第`i`个训练元的不熟练度为`Ui`，则选择第`i`个训练元的概率为：

```
P(i) = Ui / S
```

显然，所有训练元被选择的概率之和为1，每次必有一个训练元被选中。

### 过关条件

每一关都定义一个过关条件`condition`。当一个训练元的不熟练度小于或等于`condition`时，我们认为用户对该训练元足够熟悉。当某一关的训练元集合中所有训练元的不熟练度均小于或等于`condition`时我们认为练习者通过此关。

## TODO

- [ ] 不熟练度度量函数过于简单，不够理想，有待探索
- [ ] 过关条件`condition`等参数还需调整
- [ ] 编写帮助页面
- [ ] 界面很简陋，有待完善
- [x] 添加关卡选择功能

## 开源证书

GNU General Public License v3.0
