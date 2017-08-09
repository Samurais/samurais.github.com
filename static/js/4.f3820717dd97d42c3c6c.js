webpackJsonp([4,49],{337:function(n,o){n.exports={rawContent:"\n\n## random\n\n### 正态分布\n\nnumpy.random.randn(d0, d1, ..., dn) 这个函数的作用就是从[标准正态分布](https://baike.baidu.com/item/%E6%A0%87%E5%87%86%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83)中返回一个或多个样本值。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/08/numpy-randn.png)\n\n如果想要从非标准正态分布中产生随机样本，咋办？比如下面这个正态分布：\n\n```\n2.5 * np.random.randn(2, 4) + 3\n```\n\n### range随机\nrandom.random() 用于生成一个0到1的随机符点数: 0 <= n < 1.0\n\nrandom.uniform(a, b) 用于生成一个指定范围内的随机符点数，两个参数其中一个是上限，一个是下限。如果a > b，则生成的随机数n: a <= n <= b。如果 a <b， 则 b <= n <= a。\n\nrandom.randint(a, b)，用于生成一个指定范围内的整数。其中参数a是下限，参数b是上限，生成的随机数n: a <= n <= b\n\n```python\nprint random.randint(12, 20)  #生成的随机数n: 12 <= n <= 20  \nprint random.randint(20, 20)  #结果永远是20  \n```\n\nrandom.randrange的函数原型为：random.randrange([start], stop[, step])，从指定范围内，按指定基数递增的集合中 获取一个随机数。如：\n\n```python\nrandom.randrange(10, 100, 2) # 结果相当于从[10, 12, 14, 16, ... 96, 98]序列中获取一个随机数。\nrandom.randrange(10, 100, 2) # 在结果上与 random.choice(range(10, 100, 2) 等效。\n```\n\n### 随机获取\nrandom.choice从序列中获取一个随机元素。其函数原型为：random.choice(sequence)。参数sequence表示一个有序类型。这里要说明 一下：sequence在python不是一种特定的类型，而是泛指一系列的类型。list, tuple, 字符串都属于sequence。有关sequence可以查看python手册数据模型这一章。下面是使用choice的一些例子：\n\n```python\nprint random.choice(\"学习Python\")   # error\nprint random.choice([\"JGood\", \"is\", \"a\", \"handsome\", \"boy\"])  \nprint random.choice((\"Tuple\", \"List\", \"Dict\"))  \n```\n\n随机字符：\n\n```python\n>>> import random\n>>> random.choice(list('abcdefg&#%^*f'))\n'd'\n```\n\n随机浮点数：\n\n```python\n>>> import random\n>>> random.random() \n0.85415370477785668\n>>> random.uniform(1, 10)\n5.4221167969800881\n```\n\n多个字符中选取特定数量的字符：\n\n```python\n>>> import random\nrandom.sample('abcdefghij',3) \n['a', 'd', 'b']\n```\n\n多个字符中选取特定数量的字符组成新字符串：\n\n```python\n>>> import random\n>>> import string\n>>> string.join(random.sample(['a','b','c','d','e','f','g','h','i','j'], 3)).r\neplace(\" \",\"\")\n'fih'\n```\n\n随机选取字符串：\n\n```python\n>>> import random\n>>> random.choice ( ['apple', 'pear', 'peach', 'orange', 'lemon'] )\n'lemon'\n```\n\n### 洗牌\nrandom.shuffle的函数原型为：random.shuffle(x[, random])，用于将一个列表中的元素打乱。如:\n\n```python\np = [\"Python\", \"is\", \"powerful\", \"simple\", \"and so on...\"]  \nrandom.shuffle(p)  \nprint p\n```\n\nrandom.sample的函数原型为：random.sample(sequence, k)，从指定序列中随机获取指定长度的片断。sample函数不会修改原有序列。\n\n```python\nlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  \nslice = random.sample(list, 5)  #从list中随机获取5个元素，作为一个片断返回  \nprint slice  \nprint list #原有序列并没有改变。  \n```\n\n## 参考\nhttp://www.cnblogs.com/yd1227/archive/2011/03/18/1988015.html\nhttps://sanwen8.cn/p/2941oU7.html",metaData:{layout:"post",title:"Numpy Get started - random",excerpt:"Numpy是Python的一个科学计算的库，提供了矩阵运算的功能，其一般与Scipy、matplotlib一起使用。其实，list已经提供了类似于矩阵的表示形式，不过numpy为我们提供了更多的函数。",category:"development",tags:["deeplearning","utilities"],disqus:!0}}}});