webpackJsonp([1,43],{328:function(n,t){n.exports={rawContent:"\nThe HMM is a generative probabilistic model, in which a sequence of observable **X** variables is generated by a sequence of internal hidden states **Z**. The hidden states are not be observed directly. The transitions between hidden states are assumed to have the form of a (first-order) Markov chain. They can be specified by the start probability vector **π** and a transition probability matrix **A**. The emission probability of an observable can be any distribution with parameters **B** conditioned on the current hidden state. The HMM is completely determined by **π**, **A** and **B**.\n\n> From http://hmmlearn.readthedocs.io/en/latest/tutorial.html\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-hidden-weather-example.gif)\n\n举例来说，假设对于隐居室内的人，天气是隐含状态，海藻是可观察状态，海藻的状态和天气之间存在联系，通过观察海藻的状态来预测天气的状态。\n\n如果使用HMM模型，我们需要知道天气的初始状态，天气的状态转移矩阵和海藻的状态转移矩阵。\n\n## 概念\n* A - 隐含状态转移概率矩阵。\n描述了HMM模型中各个状态之间的转移概率。其中Aij = P( Sj | Si ),1≤i,,j≤N，表示在 t 时刻、状态为 Si 的条件下，在 t+1 时刻状态是 Sj 的概率。\n\n* B - 观测状态转移概率矩阵，也称为混淆矩阵\n令N代表隐含状态数目，M代表可观测状态数目，则：Bij = P( Oi | Sj ), 1≤i≤M,1≤j≤N，表示在 t 时刻、隐含状态是 Sj 条件下，观察状态为 Oi 的概率。\n\n* π - 初始状态概率矩阵\n表示隐含状态在初始时刻t=1的概率矩阵，(例如t=1时，P(S1)=p1、P(S2)=P2、P(S3)=p3，则初始状态概率矩阵 π=[ p1 p2 p3 ].\n\n对于包含M个客观察状态和N个隐含状态的HMM模型来说，用**λ={ π, A, B }**来表示HMM的参数。\n\n## HMM可以解决的问题\n\n* 根据可观察状态的序列找到一个最可能的隐藏状态序列\n\n一个广泛使用的例子，就是使用HMM+Viterbi算法完成词性标注任务。\n\n* 已知模型参数，计算某一给定可观察状态序列的概率\n\n*  根据观察到的序列集来找到一个最有可能的 HMM\nGiven just the observed data, estimate the model parameters.\n\nThe first and the second problem can be solved by the dynamic programming algorithms known as the Viterbi algorithm and the Forward-Backward algorithm, respectively. The last one can be solved by an iterative Expectation-Maximization (EM) algorithm, known as the Baum-Welch algorithm.\n\n\n## 三个重要假设\n这三个假设并不现实。\n\n假设1：马尔可夫假设（状态构成一阶马尔可夫链）\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-hidden-1.png)\n\n假设2：不动性假设（状态与具体时间无关）\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-hidden-2.png)\n\n假设3：输出独立性假设（输出仅与当前状态有关）\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-hidden-3.png)\n\n\n## 举例说明\n\n医生给村民看病，不能直接确定是\"感冒\"还是\"健康\"，医生问诊村民有三种结果：正常，冷和发烧。\n\n有没有病和村民的回答有关联，已知在有病的情况下，村民感觉正常，冷和发烧的概率。也知道在没病情况下对应的正常，冷和发烧的概率。\n\n村民也告知了医生过去三天的情况是：正常，冷，发烧。\n\n问题：过去三天，村民的健康状况？\n\n### 分析\n\n假设时间序列为t0, t1, t2. 那么有病和没病可以获得的可观察状态为:\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-viterbi-2.png)\n\n每天可计算出六个概率，由\"有病\"导致的\"正常\"或者\"无病\"导致的\"正常\"会有两个概率，这时我们选择概率较大的作为第一天的状态。然后，计算t1。\n\n根据马尔可夫链原则，t1只和t0的状态有关，对所有状态进行遍历，求从前一时刻的状态过渡到遍历状态，并且输出了观察状态的概率。\n\n对每一个当前时刻的遍历状态：\np = 前一时刻某一状态的概率 X 状态转移矩阵中前一时刻某一状态的转移概率 X 发射矩阵中输出观察状态的概率\n\nmax(p) = 对前一时刻各种状态按上公式求概率，然后使用最大值。在求最大值的同时也就确定了路径。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-viterbi-3.png)\n\nCodes: [Github](https://gist.github.com/Samurais/45feddc96d6b49f8315ed8771a14fa85)\n\n```python\n# -*- coding: utf-8 -*-\n# Python3\nstates = ('Healthy', 'Fever')\nobservations = ('normal', 'cold', 'dizzy')\nstart_probability = {'Healthy': 0.6, 'Fever': 0.4}\n \ntransition_probability = {\n   'Healthy' : {'Healthy': 0.7, 'Fever': 0.3},\n   'Fever' : {'Healthy': 0.4, 'Fever': 0.6},\n   }\n \nemission_probability = {\n   'Healthy' : {'normal': 0.5, 'cold': 0.4, 'dizzy': 0.1},\n   'Fever' : {'normal': 0.1, 'cold': 0.3, 'dizzy': 0.6},\n   }\n\n# Helps visualize the steps of Viterbi.\ndef print_dptable(V):\n    print(\"    \"),\n    for i in range(len(V)): print(\"%7d\" % i,)\n\n    for y in V[0].keys():\n        print(\"%.6s: \" % y,)\n        for t in range(len(V)):\n            print(\"%.7s\" % (\"%f\" % V[t][y]),)\n        print\n\ndef viterbi(obs, states, start_p, trans_p, emit_p):\n    V = [{}]\n    path = {}\n\n    # Initialize base cases (t == 0)\n    for y in states:\n        V[0][y] = start_p[y] * emit_p[y][obs[0]]\n        path[y] = [y]\n\n    # Run Viterbi for t > 0\n    for t in range(1,len(obs)):\n        V.append({})\n        newpath = {}\n\n        for y in states:\n            (prob, state) = max([(V[t-1][y0] * trans_p[y0][y] * emit_p[y][obs[t]], y0) for y0 in states])\n            V[t][y] = prob\n            newpath[y] = path[state] + [y]\n\n        print(\"t%d's path\" % t, newpath)\n        # Don't need to remember the old paths\n        path = newpath\n\n    print_dptable(V)\n    (prob, state) = max([(V[len(obs) - 1][y], y) for y in states])\n    return (prob, path[state])\n\ndef example():\n    return viterbi(observations,\n                   states,\n                   start_probability,\n                   transition_probability,\n                   emission_probability)\nprint(example())\n```\n\n运行结果:\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/06/hmm-viterbi-1.png)\n\n## 通俗理解\nA序列是已知的，状态有限，比如：a1, a2, a1, a3。B序列也是状态有限，但是不知道B序列的排列。A序列及B序列内在有联系，得知在B序列状态转移会对应A序列状态转移的一个概率矩阵。维特比就是计算在这种情况下，B序列的最大可能序列。\n\n维特比算法依赖于假设条件：A，B序列中每个值只和它前一个值相关，也就是A，B序列都是一阶马尔可夫链。从B状态观察A的状态和时间无关。\n\n# Refers\n\n[Rabiner89]\t Lawrence R. Rabiner “A tutorial on hidden Markov models and selected applications in speech recognition”, Proceedings of the IEEE 77.2, pp. 257-286, 1989.\n\n[Bilmes98]\tJeff A. Bilmes, “A gentle tutorial of the EM algorithm and its application to parameter estimation for Gaussian mixture and hidden Markov models.”, 1998.\n\n[维特比算法](https://zh.wikipedia.org/wiki/%E7%BB%B4%E7%89%B9%E6%AF%94%E7%AE%97%E6%B3%95)\n\n[隐马尔可夫模型（HMM）攻略](http://blog.csdn.net/likelet/article/details/7056068)",metaData:{layout:"post",title:"隐马尔科夫模型和维特比算法",excerpt:"隐马尔可夫模型（Hidden Markov Model，HMM）是统计模型，它用来描述一个含有隐含未知参数的马尔可夫过程。其难点是从可观察的参数中确定该过程的隐含参数。然后利用这些参数来作进一步的分析，例如模式识别。",category:"research",tags:["probability","algorithm"],disqus:!0}}}});