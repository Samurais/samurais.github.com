webpackJsonp([13,43],{316:function(n,t){n.exports={rawContent:'\n如果我们有一篇很长的文章，如何获得关键词呢？\n根据信息熵理论，一个词出现的次数越多，这个词包含的信息量就越小。可以说，TF-IDF算法就是基于这一理论的。\n\n这篇文章我们称之为Document, 这篇文章属于一个 Collection(集合)。\n\nTF, Term Frequency, 词频 \nIDF, Inverse Document Frequency, 逆文档频率\n\n## 处理\n\n将Document进行[分词](http://nlp.chatbot.io/public/index.html)，去停留词。\n\n1) 计算TF\n词频(TF) = 某个词在文章中出现次数\n\n> 标准化：词频(TF) = 某个词在文章中出现的次数 / 文章的总词数\n\n2) 计算IDF\n\n逆文档频率(IDF) = log(collection总文档数 / (包含该词的文档数 + 1))\n\n> 使用了 add-1 方法，避免 0 分母\n\n3) 计算TF-IDF值\n\nTF-IDF = TF x IDF\n\nTF-IDF与一个词在Document中出现的次数成正比，与该词在Collection中出现的次数成反比。\n\n## 提取关键词\n设定一个Collection, 比如使用Google进行检索。\n对Document的每个词做TF-IDF，降序排列。排在前面的就是关键词。\n\n> 如果我们只想分析一个词的重要性，而不针对文章，我们可以单独的使用IDF值。\n\n## 自动摘要\n[TF-IDF与余弦相似性的应用（三）：自动摘要](http://itindex.net/detail/43346-tf-idf-%E4%BD%99%E5%BC%A6)\n\n## 缺点\n单纯以"词频"为基础计算一个词的重要性。\n\n\n## 参考\n[TF-IDF与余弦相似性的应用（一）：自动提取关键词](http://www.ruanyifeng.com/blog/2013/03/tf-idf.html)\n\n',metaData:{layout:"post",title:"TF-IDF",excerpt:"词频和逆文档频率算法简单快速，结果处理符合实际情况，可以用在关键词提取，信息检索等很多地方。",category:"development",tags:["nlp"],disqus:!0}}}});