---
layout: post
title: "RNN, LSTM and Sequence2Sequence"
excerpt: "Recurrent Neural Networks不仅会学习当前时刻的信息，也会依赖之前的序列信息。由于其特殊的网络模型结构解决了信息保存的问题。"
category: research
tags: [rnn, lstm,seq2seq]
disqus: true
---

### RNN
RNN（Recurrent Neural Networks,循环神经网络）不仅会学习当前时刻的信息，也会依赖之前的序列信息。由于其特殊的网络模型结构解决了信息保存的问题。所以RNN对处理时间序列和语言文本序列问题有独特的优势。递归神经网络都具有一连串重复神经网络模块的形式。在标准的RNNs中，这种重复模块有一种非常简单的结构。
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-15-46-56.png)
那么`S(t+1) = tanh( U*X(t+1) + W*S(t))`。
tanh激活函数图像如下：
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-16-55-01.png)
激活函数tanh把状态S值映射到-1和1之间.

RNN通过BPTT算法反向传播误差，它与BP相似，只不过与时间有关。RNN同样通过随机梯度下降(Stochastic gradient descent)算法使得代价函数(损失函数)值达到最小。
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-16-44-20.png)
BBPT算法规则如下：
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-16-22-54.png)


但是随着时间间隔不断增大时，RNN会丧失学习到连接很远的信息能力(梯度消失)。原因如下：
RNN的激活函数tanh可以将所有值映射到-1至1之间，以及在利用梯度下降算法调优时利用链式法则，那么会造成很多个小于1的项连乘就很快的逼近零。

依赖于我们的激活函数和网络参数，也可能会产生梯度爆炸（如激活函数是Relu，而LSTM采用的激活函数是sigmoid和tanh，从而避免了梯度爆炸的情况）。一般靠裁剪后的优化算法即可解决，比如gradient clipping（如果梯度的范数大于某个给定值，将梯度同比收缩）。

合适的初始化矩阵W可以减小梯度消失效应，正则化也能起作用。更好的方法是选择ReLU而不是sigmoid和tanh作为激活函数。ReLU的导数是常数值0或1，所以不可能会引起梯度消失。更通用的方案时采用长短时记忆（LSTM）或门限递归单元（GRU）结构。

**那么，接下来我们来了解LSTM是如何解决梯度消失问题的**
### LSTM
LSTM (Long Short Term Memory networks)的“门”结构可以截取“不该截取的信息”，结构如下：
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-17-38-08.png)
在上面的图中，每条线表示一个完整向量，从一个节点的输出到其他节点的输入。粉红色圆圈代表逐点操作，比如向量加法，而黄色框框表示的是已学习的神经网络层。线条合并表示串联，线条分叉表示内容复制并输入到不同地方。
##### LSTMs核心理念
LSTMs的关键点是细胞状态，就是穿过图中的水平线。

单元状态有点像是个传送带。它贯穿整个链条，只有一些线性相互作用。这很容易让信息以不变的方式向下流动。
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-20-31-08.png)

其中，C(t-1)相当于上面我们讲的RNN中的S（t-1）, C(t)相当于S(t).

LSTM有能力向单元状态中移除或添加信息，通过门结构来管理，包括“遗忘门”，“输出门”，“输入门”。通过门让信息选择性通过，来去除或增加信息到细胞状态. 模块中sigmoid层输出0到1之间的数字，描述了每个成分应该通过门限的程度。0表示“不让任何成分通过”，而1表示“让所有成分通过！”
##### 第一步
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-20-49-39.png)

上图是遗忘门的展示，首先将上一时刻的输出h(t-1)和这一时刻的输入进x(t)行拼接（concat），然后判断以多大的程度来保留这部分信息（得到概率值）.
##### 第二步
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-21-06-31.png)
上图是输入门结构，i(t)等式表达的是我们以多大概率来更新信息，
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-21-23-49.png)表示现在的全部信息。
##### 第三步
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-21-25-43.png)

首先把旧状态与f(t)相乘，就丢弃掉我们确定需要丢弃的信息，然后将
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-23-21-32-40.png)以确定要更新的信息，通过相加操作得到新的细胞状态Ct.

##### 第四步
![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-24-11-53-30.png)
LSTM和RNN相同都是利用BPTT传播和随机梯度或者其他优化算法来拟合参数。

至此，我们在这里再次强调一下**LSTM是如何解决长时依赖问题的**:
在RNN中，当前状态值S（t）= tanh(x(t) * U + W * S(t-1))，正如上面所述在利用梯度下降算法链式求导时是连乘的形式，若其中只要有一个是接近零的，那么总体值就容易为0，导致梯度消失，不能解决长时依赖问题。

而LSTM更新状态值：![](https://static-public.chatopera.com/backlog/chatbot/images/2016/12/Screenshot-from-2016-12-24-15-50-41.png) 是相加的形式，所以不容易出现状态值逐渐接近0的情况。

### Reference
* [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)


