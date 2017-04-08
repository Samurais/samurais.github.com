webpackJsonp([9,19],{270:function(n,t){n.exports={rawContent:'\n>  声明：请尊重原创，转载注明来源网站[Chatbot Master](http://blog.chatbot.io)\n\n<!-- 概述聊天机器人 -->\n目前机器学习，尤其是深度学习，已经成功的解决了图像识别的问题。从IMAGENET大赛的近几年成绩看，识别类问题准确度已经接近100%。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/01/Screen-Shot-2017-01-01-at-20.44.22.png)\n\n与此同时，机器学习在解决“语音到文字”(Speech to Text)以及“文字到语音” (Text to Speech)方面也有了飞跃。\n\n而一群更加疯狂的人在尝试用机器学习解决自然语音理解，甚至在自然语言理解的基础上，开发聊天机器人。\n\n<table style="width:100%">\n  <tr>\n    <th>服务</th>\n    <th>描述</th> \n    <th>地址</th>\n  </tr>\n  <tr>\n    <td>Botframework by Microsoft</td>\n    <td>提供会话管理，跨平台连接方案</td> \n    <td>https://dev.botframework.com/</td>\n  </tr>\n  <tr>\n    <td>API.AI</td>\n    <td>会话训练，会话管理，语音识别，意图识别，一系列训练好的主题</td> \n    <td>https://api.ai/</td>\n  </tr>\n  <tr>\n    <td>Telegram Bot Store</td>\n    <td>聊天机器人应用商店</td> \n    <td>https://storebot.me/</td>\n  </tr>\n</table>\n\n通过这三个服务, 就可以构建聊天机器人并且发布上线。\n\n* Step 1 - 在Telegram上注册账号\n\n通过 BotFather创建Bot。\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/01/Screen-Shot-2017-01-01-at-21.12.20.png)\n\n* Step 2 - 在Botframework上注册账号\n\n创建一个Bot, 同时下载Botframework提供的SDK／Sample( Node.js|C#)，连接到Telegram。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/01/Screen-Shot-2017-01-01-at-21.16.22.png)\n\n基于Botframework的对话，要写很多代码实现，这样我们更需要一个连接到已经提供一些对话的服务上。\n\n\n* Step 3 - 接入 API.AI\n\nAPI.AI可以提供标注对话，开放域对话和语音识别，意图识别等功能。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/01/Screen-Shot-2017-01-01-at-21.24.34.png)\n\n* Step 4 - 服务发布\n\nTelegram是一个神奇的IM，它提供了[聊天机器人应用商店](https://storebot.me/)。使用Telegram IM的用户可以快速体验和使用这些Bot。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/01/Screen-Shot-2017-01-01-at-21.34.12.png)\n\n\n一些Bot的体验真的很棒，尤其是使用了人工智能技术的Bot，以至于会出现下面的[评论](https://storebot.me/bot/andyrobot)。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/01/Screen-Shot-2017-01-01-at-21.35.47.png)\n\n\n还有其他聊天机器人的玩家：*wit.ai*, *Chatfuel*, *Facebook Messager*, *Apple Siri*, *[腾讯机器人平台](http://bot.qq.com/)*, *Microsoft LUIS.AI*, etc.\n\n不管是像微软这样的大公司，还是像[Operator](https://operator.com/)在垂直领域提供服务的创业公司，都将聊天机器人看成是==下一代人机交互的服务形态==，==聊天机器人不单纯的提供了一个新的服务渠道，它还改变了服务本身==，即通过历史数据训练Language Model，来部分取代人的作用，聊天机器人对信息的组织和处理能力，在搜索引擎基础上，又往前迈了一大步。比如，[京东JIMI依靠DeepQA系统，实现“最强大脑”](http://mp.weixin.qq.com/s/qZ6tagsz_2PICS15hP5erw)，JIMI就是聊天机器人的一个形态。\n\n# 聊天机器人模型分类\n\n## 基于检索的模型\n\n回答是提前定义的，使用规则引擎、正则匹配或者深度学习训练好的分类器从数据库中挑选一个最佳的回复。\n\n## 基于生成的模型\n\n不依赖于提前定义的回答，但是在训练的过程中，需要大量的语料，语料包含了*context*和*response* 。当下流行使用**LSTM**和 **RNN**训练生成的模型，这种方法最早用来完成机器翻译的任务 - [Sequence to Sequence Learning with Neural Networks](http://git.oschina.net/ubiware/tech-books/raw/master/machine-learning-papers/1409.3215v3.pdf)。\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/01/Screen-Shot-2017-01-01-at-21.59.14.png)\n\n目前，在生产环境下，提供聊天服务的，一般都是基于检索的模型，而**Seq2Seq**的出现，有可能使基于生成的模型成为主流，因为**Seq2Seq**在长对话的情况下，依然可以表现的很好。\n\n## 长对话和短对话\n\n长对话需要考虑的因素更多，就像目前API.AI提供的服务中，要完成一个任务，比如预定酒店。\n\n> 小明: 帮我订今天晚上，上海浦东香格里拉酒店。\n\n这时，API.AI得到了时间，地点和人员。它可能正好检索到了我们在**订酒店故事**里的一条被标注的记录。*Intent*, *Entity*确定了， *Action*就被确定了。\n\n可是，如果是下面：\n\n> 小明: 帮我订今天晚上，上海的酒店。\n\nChatbot就要询问：\n\n> Bot: 你需要订哪家酒店？\n\n长对话，其实就是能在用户场景下对话，要识别场景，就需要考虑时间、地点、刚刚用户都说了什么以，用户和Bot的关系。\n\n"订酒店"属于个人助理类服务，目前，api.ai已经支持了这种“追问用户更多信息”的功能，属于简单的问题。\n\n而类似于客服机器人，更多情况是多问题-多交织的对话，就是长对话中，很难解决的问题。\n\n所以，当下，大量机器人是面向短对话的。比如，微软小冰，小娜，图灵机器人, etc.\n\n## 开放领域和封闭领域\n这两个主要从话题层面进行区分。在开放语境下，用户可以和聊天机器人聊任何话题。在封闭语境下，只能聊机器人设定的主题。\n\n这主要取决于数据：有什么数据，就能聊什么主题。\n\n比如在车载系统中，对话的机器人一般都是十个左右的意图，围绕意图进行训练聊天主题。\n\n老司机一般都聊什么？\n\n* 服务区还有多远？\n* 我买的股票怎么样？\n* 播放一个音乐\n* 听交通台\n* 呼叫一个电话\n* ...\n\n# 挑战\n\n## 关联上下文\n<!-- \nBut on the subject, I really like the idea of a hybrid retrieval/generative model. Using a LSTM to retrieve a thought vector and than generating the reply based on parameters <P, U, L>  Personality matrix, User Relationship with Bot and Lexicon. \n-->\n\n关联上下文，就需要在设计机器人的时候，给它一个问题，获得一个回复。生成回复的时候，要考虑 P, U, L.\n\n* P - Personality matrix\n* U - User Relationship with Bot\n* L - Lexicon \n\n这需要在训练LSTM Net的时候，要将更多信息注入，而且也更像是将基于检索的模型和基于生成的模式混合起来完成。\n\n## 意图识别\n就像API.AI， 及其WIT.AI, LUIS.AI们构想的一样，要完成有效的对话，先要搞清楚用户在表达什么意图。但是目前API.AI们提供的方案需要人工标注Entity和Intent，这种工作很繁琐，效率低。\n\n能通过历史数据，无监督或者半监督的完成意图的分类模型是亟须解决的一个挑战。\n\n## 如何判断一个模型的好坏\n在使用LSTM训练基于生成的模型的过程中，一个很大的挑战就是没有自动化的量化的标准：除了人工的和模型对话意外，不确定模型间的好坏。\n\n这个问题的解决办法，应该是在训练时，就同时训练正确的回答和错误的回答，然后使用[**recall@k**](http://www.wildml.com/2016/07/deep-learning-for-chatbots-2-retrieval-based-model-tensorflow)机制验证。\n\n# 一种设想\n<!-- 介绍基于Rule Based Engine + Language Model下的机器人 -->\n\n在经过了很多调研和尝试后，一种比较Smart的机器人的实现方案可能是下面这个样子：\n\n![](http://7xkeqi.com1.z0.glb.clouddn.com/chatbot/images/2017/01/Screen-Shot-2017-01-01-at-23.13.23.png)\n\n* 从社交网络上对接到服务需要走InboundMessage, 从OutboundMessage中异步获取回复。\n\n* Bot Engine 处理session, context, personality，知识图谱，对话规则和主题。\n\n对话主题是基于人工经验制作的。除了包括引导用户做自我介绍类的"系统对话"，还要包括实现业务价值的"服务对话"，比如“学习英语单词”，还要有“日常对话”，比如打招呼，询问最近看的电影等生活场景。\n\n* Bot Engine不能做到回复所有问题，因为基于规则的原因，能覆盖的聊天内容范围小，当在Bot Engine中，得不到好的答案或者没有命中一个规则时，就请求背后的Bot Model.\n\nBot Model是通过深度神经网络训练而来，可以回答任何问题。\n\n* 在对话服务过程中，会产生新的数据，使用强化学习，给Bot Model正向的激励。\n\n* 使用知识图谱记录Bot，User, World三层知识。\n\n作为这个系列文章的第一篇，主要是介绍聊天机器人目前发展的状况和分类，在后面几篇中，将对上图所设想的方案做更多描述。\n\n* [Approaching a Chatbot Service - Part 2: Bot Engine](http://blog.chatbot.io/development/2017/01/02/approaching-a-chatbot-service-part-2-bot-engine/)\n\n* [Approaching a Chatbot Service - Part 3: Bot Model](http://blog.chatbot.io/development/2017/02/07/approaching-a-chatbot-service-part-3-bot-model/)\n',metaData:{layout:"post",title:"Approaching a Chatbot Service - Part 1: Introduction",excerpt:"介绍了聊天机器人目前的发展。",category:"development",tags:["thoughts"],disqus:!0}}}});