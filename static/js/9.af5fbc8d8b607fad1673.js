webpackJsonp([9,49],{332:function(n,t){n.exports={rawContent:"\n# 定义\n[马尔可夫链](http://baike.baidu.com/item/%E9%A9%AC%E5%B0%94%E5%8F%AF%E5%A4%AB%E9%93%BE)是满足马尔可夫性质的随机过程。马尔可夫链描述了一种状态序列，其每个状态值取决于前面有限个状态。一阶马尔可夫过程就是下一个状态的的转移只依赖于当前状态。\n\n# 举例\n假设一个集合具有状态S[1-6], 每个状态的表示：\n**S1 = {AA, AA}**, \n**S2 = {AA, Aa}**\n**S3 = {AA, aa}** \n**S4 = {Aa, Aa}** \n**S5 = {Aa, aa}** \n**S6 = {aa, aa}**.\n\n每个状态是包含两个元素的集合，通过集合内的元素，可以其他状态，比如*S2*可以重组为**{AA, Aa}**, **{AA, AA}**, **{Aa, Aa}**。\n\n规定状态转移矩阵为：\n\n| State | Next(**S1**) | Next(**S2**) | Next(**S3**) | Next(**S4**) | Next(**S5**) | Next(**S6**) |\n| --- | --- | --- | --- | --- | --- | --- | \n| **Current(S1)**&nbsp; | 1 | 0 | 0 | 0 | 0 | 0 | \n| **Current(S2)**&nbsp; | 1/4 | 1/2 | 0 | 1/4 | 0 | 0 |\n| **Current(S3)**&nbsp; | 0 | 0 | 0 | 1 | 0 | 0 | \n| **Current(S4)**&nbsp; | 1/16 | 1/4 | 1/8 | 1/4 | 1/4 | 1/16 | \n| **Current(S5)**&nbsp; | 0 | 0 | 0 | 1/4 | 1/2 | 1/4 | \n| **Current(S6)**&nbsp; | 0 | 0 | 0 | 0 | 0 | 1 | \n\n上图中，每一行代表的是当前状态的一下一步转移到不同状态的概率。注意一个含有M个状态的一阶过程有M的平方个状态转移。\n\n基于以上的信息，我们再定义一个当前状态为**S3**，那么如何预测接下来10步的状态情况?\n\n\n## 应用马尔可夫链\n\n如果当前状态是 *S3*, 那么连续的计算10步。\n\n```python\n#!/usr/bin/env python\n\nimport numpy as np\nfrom matplotlib import pyplot\n\n# state transition matrix\nP = np.matrix([[1., 0., 0., 0., 0., 0.],\n               [1./4, 1./2, 0., 1./4, 0., 0.],\n               [0., 0., 0., 1., 0., 0.],\n               [1./16, 1./4, 1./8, 1./4, 1./4, 1./16],\n               [0., 0., 0., 1./4, 1./2, 1./4],\n               [0., 0., 0., 0., 0., 1.]])\n\n# Init state\nv = np.matrix([[0, 0, 1, 0, 0, 0]]) \n\n# Get the data\nplot_data = []\nfor step in range(5):\n    result = v * P**step\n    plot_data.append(np.array(result).flatten())\n\n# Convert the data format\nplot_data = np.array(plot_data)\n\n# Create the plot\npyplot.figure(1)\npyplot.xlabel('Steps')\npyplot.ylabel('Probability')\nlines = []\nfor i, shape in zip(range(6), ['x', 'h', 'H', 's', '8', 'r+']):\n    line, = pyplot.plot(plot_data[:, i], shape, label=\"S%i\" % (i+1))\n    lines.append(line)\npyplot.legend(handles=lines, loc=1)\npyplot.show()\n```\n\n* 运行：\n\n```\npip install numpy matplotlib\npython markov_chain_example.py\n```\n\n* 结果：\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/markov_chain_example_5_steps.png)\n\n从上图可以注意到：\n第0步**S3**为1， 其他状态为0。\n第1步，根据状态转移矩阵，**S4**为1，其他状态为0。\n第2步，根据状态转移矩阵，各状态均有可能。\n...\n\n## 结论\n马尔可夫链可以用来生成预测的序列。此外，我们注意到，有下面两个问题：\n\n### 矩阵运算\n\n在代码中，我们注意到，\n\n```\nresult = v * P**step\n```\n\n其中，**P\\*\\*N**是对**状态转移矩阵P** [取**N次方**(numpy.linalg.matrix_power)](https://docs.scipy.org/doc/numpy/reference/generated/numpy.linalg.matrix_power.html)。\n\n### 为什么状态转移矩阵的列求和不为1\n首先，当前状态为不同状态时，并不能保证下一状态都转移到**S1**或者某一特定的状态，因此，每列的和应该是**0~状态的数量**。\n\n# Refers\n[隐马尔可夫模型（HMM）攻略](http://blog.csdn.net/likelet/article/details/7056068)\n\n[Python Markov Chain Packages](https://martin-thoma.com/python-markov-chain-packages/)\n",metaData:{layout:"post",title:"马尔可夫链",excerpt:"马尔可夫链通常用来建模排队理论和统计学中的建模，还可作为信号模型用于熵编码技术，如算法编码。",category:"research",tags:["probability","algorithm"],disqus:!0}}}});