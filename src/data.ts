export interface Question {
  id: number;
  text?: string;
  options?: string[];
  answer: string;
  hint?: string;
  hints?: string[];
}

export interface Exercise {
  id: string;
  title: string;
  type: 'part1' | 'part2' | 'part3' | 'part4' | 'part5';
  passage?: string;
  questions: Question[];
}

export interface Part {
  id: number;
  title: string;
  exercises: Exercise[];
}

export const EXAM_DATA: Part[] = [
  {
    id: 1,
    title: "Phần 1: Trắc nghiệm điền từ",
    exercises: [
      {
        id: "1.1",
        title: "YouTube millionaire celebrities",
        type: "part1",
        passage: "Geeks, musicians, teenage boys in their bedrooms – (0) can now become a global internet sensation and a millionaire in the {{gap:1}}. In between the amusing videos of animals doing strange things and skateboarding accidents, people are building {{gap:2}} by uploading videos.\nIn {{gap:3}} years, there have been many success stories of people who started at home with just a webcam and have now huge followings. With over 100 million visitors to YouTube every month, advertisers have started {{gap:4}} on the most popular video makers to take advantage of their loyal {{gap:5}}. Last year, ‘YouTuber’ Michael Buckley {{gap:6}} that he was making over $100,000 a year from YouTube advertisements alone.\nThe YouTube payment system works on a pay-per-click basis. Effectively, the amount of money you {{gap:7}} is determined by the number of views you get. A video of around a million views, which is {{gap:8}} for popular YouTubers, may bring in about a thousand dollars.",
        questions: [
          { id: 1, options: ["way", "process", "method", "manner"], answer: "B", hint: "1 - B (process): In the process - trong quá trình." },
          { id: 2, options: ["work", "jobs", "careers", "occupations"], answer: "C", hint: "2 - C (careers): Building careers - xây dựng sự nghiệp." },
          { id: 3, options: ["recent", "last", "past", "latest"], answer: "A", hint: "3 - A (recent): In recent years - trong những năm gần đây." },
          { id: 4, options: ["aiming", "directing", "focusing", "pointing"], answer: "C", hint: "4 - C (focusing): Focusing on - tập trung vào." },
          { id: 5, options: ["public", "people", "watchers", "spectators"], answer: "A", hint: "5 - A (public): Loyal public - công chúng trung thành." },
          { id: 6, options: ["informed", "told", "reminded", "announced"], answer: "D", hint: "6 - D (announced): Announced that - thông báo rằng." },
          { id: 7, options: ["gain", "pay", "win", "earn"], answer: "D", hint: "7 - D (earn): Money you earn - số tiền bạn kiếm được." },
          { id: 8, options: ["conventional", "typical", "traditional", "everyday"], answer: "B", hint: "8 - B (typical): Typical for - điển hình cho." },
        ]
      },
      {
        id: "1.2",
        title: "Teenagers & Price",
        type: "part1",
        passage: "According to recent research, teenagers are very (0) sensitive to price. They hunt for {{gap:1}} and consider high prices a personal insult. They plan their shopping and do not just {{gap:2}} into shops and buy on impulse. Interestingly, parents have a lot of {{gap:3}} both over how much teenagers spend on clothes and what they buy, even if the teenagers have {{gap:4}} the money themselves from a part-time job; in short, teenagers worry about their parents’ reaction to the clothes they {{gap:5}}. Shops operate in a highly {{gap:6}} environment, so they make sure to {{gap:7}} for young people’s tastes by having a wide range of fashion clothes in {{gap:8}} at any one time.",
        questions: [
          { id: 1, options: ["values", "cheapness", "bargains", "decreases"], answer: "C", hint: "1 - C (bargains): Hunt for bargains - săn hàng giá hời." },
          { id: 2, options: ["jump", "pop", "enter", "pass"], answer: "B", hint: "2 - B (pop): Pop into shops - tạt vào cửa hàng." },
          { id: 3, options: ["impact", "importance", "pressure", "influence"], answer: "D", hint: "3 - D (influence): Have a lot of influence - có nhiều ảnh hưởng." },
          { id: 4, options: ["earned", "won", "gained", "acquired"], answer: "A", hint: "4 - A (earned): Earned the money - kiếm được tiền." },
          { id: 5, options: ["invest", "achieve", "purchase", "obtain"], answer: "C", hint: "5 - C (purchase): Clothes they purchase - quần áo họ mua." },
          { id: 6, options: ["competent", "competitive", "contested", "combative"], answer: "B", hint: "6 - B (competitive): Competitive environment - môi trường cạnh tranh." },
          { id: 7, options: ["offer", "cater", "sell", "supply"], answer: "B", hint: "7 - B (cater): Cater for - phục vụ/đáp ứng nhu cầu." },
          { id: 8, options: ["stock", "shelf", "place", "existence"], answer: "A", hint: "8 - A (stock): In stock - có sẵn trong kho." },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Phần 2: Điền từ vào chỗ trống",
    exercises: [
      {
        id: "2.1",
        title: "A new summer programme",
        type: "part2",
        passage: "This summer, a group of 16-year-old students are taking (0) part in a three-week programme designed to teach them new skills and {{gap:1}} them used to working with people they have never met before. {{gap:2}} things go according to plan, in two years’ time, nearly one in six teenagers will be involved in the programme with {{gap:3}} eventual aim of offering it to {{gap:4}} young person in the country. {{gap:5}} far, our group has spent two weeks living {{gap:6}} from home (many for the first time), initially on an outdoor course, with activities {{gap:7}} as rock climbing, rafting and trekking, and then spending a week in self-catering accommodation where they are planning and setting up a volunteering project. At the moment, the students are putting their plans into action not {{gap:8}} by cooking for themselves, but also by organising a night outside sleeping rough in order to raise money for a local homeless shelter.",
        questions: [
          { id: 1, answer: "get", hint: "(1) - get: Cấu trúc get somebody used to doing something." },
          { id: 2, answer: "If", hint: "(2) - If: Câu điều kiện loại 1: 'If things go according to plan'." },
          { id: 3, answer: "the", hint: "(3) - the: Cụm từ cố định with the aim of." },
          { id: 4, answer: "every", hint: "(4) - every: Every young person - mọi thanh niên." },
          { id: 5, answer: "So", hint: "(5) - So: So far - cho đến nay." },
          { id: 6, answer: "away", hint: "(6) - away: Live away from home - sống xa nhà." },
          { id: 7, answer: "such", hint: "(7) - such: Such as - như là." },
          { id: 8, answer: "only", hint: "(8) - only: Not only... but also." },
        ]
      },
      {
        id: "2.2",
        title: "Shopping online versus shopping locally",
        type: "part2",
        passage: "Most people want a busy shopping street (0) in their town with butchers, bookshops, boutiques, cafés and restaurants, {{gap:1}} makes it depressing to see so many shops becoming vacant. Experts predict that {{gap:2}} to 40% of shops will be forced to close in the next five years.\nNo one wants to see their high-street shops disappear, {{gap:3}} why would people want to shop locally? Internet shopping sites offer discount prices along with 24/7 shopping and deliveries. {{gap:4}} to a recent report, some products, such as toys, are as {{gap:5}} as 60% cheaper online.\nLocal shops should be more {{gap:6}} clubs which provide personal service and social relationships, and each shop should be seen {{gap:7}} something unique. To meet this need, in some parts of the world shops shut for hours during the day, then do excellent business in the evening, when they aim to give customers {{gap:8}} more satisfying experience than they would ever have from shopping online.",
        questions: [
          { id: 1, answer: "which", hint: "(1) - which: Thay thế cho toàn bộ sự việc ở vế câu trước." },
          { id: 2, answer: "up", hint: "(2) - up: Up to - lên đến." },
          { id: 3, answer: "but", hint: "(3) - but: Từ nối chỉ sự tương phản." },
          { id: 4, answer: "According", hint: "(4) - According: According to - theo như." },
          { id: 5, answer: "much", hint: "(5) - much: As much as - nhiều bằng / lên tới." },
          { id: 6, answer: "like", hint: "(6) - like: Be more like - giống như." },
          { id: 7, answer: "as", hint: "(7) - as: Be seen as - được xem như." },
          { id: 8, answer: "a", hint: "(8) - a: A more satisfying experience." },
        ]
      },
      {
        id: "2.3",
        title: "What is ski touring?",
        type: "part2",
        passage: "Ski touring is exactly that – touring on skis. It combines (0) the best bits of skiing and mountaineering and provides the perfect way to explore the mountains in winter. The advantages {{gap:1}} ski touring are that you can really escape the crowds, enjoy the solitude of the mountains and {{gap:2}} rewarded with breathtaking views and exhilarating descents. Ski touring involves both going up and down the mountain, so even for experienced skiers new skills {{gap:3}} to be acquired. {{gap:4}} is much to learn about ‘skinning up’ (getting up the mountain) that improves efficiency and saves energy. Similarly, you want to be {{gap:5}} to enjoy going down, which means learning to cope with the variety of snow conditions you will encounter off-piste. {{gap:6}} all ski touring is very demanding, you must be {{gap:7}} good physical condition. The fitter you are, the {{gap:8}} fun you will have.",
        questions: [
          { id: 1, answer: "of", hint: "(1) - of: The advantages of something." },
          { id: 2, answer: "be", hint: "(2) - be: Cấu trúc song song với 'can escape', 'enjoy'." },
          { id: 3, answer: "need", hint: "(3) - need/have: Need to be acquired." },
          { id: 4, answer: "There", hint: "(4) - There: There is much to learn." },
          { id: 5, answer: "able", hint: "(5) - able: Be able to do something." },
          { id: 6, answer: "As", hint: "(6) - As/Since/Because: Bởi vì." },
          { id: 7, answer: "in", hint: "(7) - in: In good physical condition." },
          { id: 8, answer: "more", hint: "(8) - more: So sánh kép: The fitter..., the more fun..." },
        ]
      },
      {
        id: "2.4",
        title: "The happiest day of the year",
        type: "part2",
        passage: "A British psychologist says he can prove that the last Friday in June is the happiest day of the year. Cliff Arnall, a University of Cardiff psychologist specialising (0) in seasonal disorders, {{gap:1}} created a formula for finding happiness. The research looks {{gap:2}} everything from increased outdoor activity and rising energy levels, to picnics and beach trips with families. Mr Arnall’s happiness formula depends {{gap:3}} six factors: outdoor activity, nature, social interaction, positive memories of childhood summers, temperature, and holidays and anticipation of time off. ‘At the end of June, the days are at their longest {{gap:4}} means there are more hours of sunshine to enjoy. It’s {{gap:5}} people tend to have lots of gatherings with friends and family,’ Mr Arnall said. ‘Happiness is associated with many things in life and can {{gap:6}} triggered by a variety of events. Whether it’s a sunny day {{gap:7}} a childhood memory that triggers a feeling of happiness, I think this formula proves that the path to finding happiness is very {{gap:8}} simpler than people imagine.’",
        questions: [
          { id: 1, answer: "has", hint: "(1) - has: Hiện tại hoàn thành 'has created'." },
          { id: 2, answer: "at", hint: "(2) - at: Look at - xem xét." },
          { id: 3, answer: "on", hint: "(3) - on: Depend on - phụ thuộc vào." },
          { id: 4, answer: "which", hint: "(4) - which: Thay thế cho mệnh đề trước." },
          { id: 5, answer: "when", hint: "(5) - when/why: Đó là lúc/lý do tại sao." },
          { id: 6, answer: "be", hint: "(6) - be: Can be triggered - có thể được kích hoạt." },
          { id: 7, answer: "or", hint: "(7) - or: Whether... or... - dù là... hay là..." },
          { id: 8, answer: "much", hint: "(8) - much: Nhấn mạnh so sánh hơn 'much simpler'." },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Phần 3: Cấu tạo từ",
    exercises: [
      {
        id: "3.1",
        title: "Adventure racing",
        type: "part3",
        passage: "The teams that come first are the ones who race (0) intelligently (INTELLIGENT) and adapt to the sort of {{gap:1}} (PREDICT) situations which arise in these races. The teams who do well show both flexibility and {{gap:2}} (PATIENT). Unfortunately, our {{gap:3}} (PREPARE) for the race in Australia weren’t methodical in any way. In fact, as a beginner, I was so {{gap:4}} (EXPERIENCE) that the training I actually did was {{gap:5}} (SIMPLE) to run and cycle as much and as hard as I could. When we actually did the race, one of my team-mates became just too tired to continue. We had been going really fast without taking any rests, and he had been {{gap:6}} (WILL) to ask us to take a break. I knew that our team had not been prepared or {{gap:7}} (REAL) about the pace we could keep. Not finishing that race was the most {{gap:8}} (VALUE) lesson I could have learned.",
        questions: [
          { id: 1, answer: "unpredictable", hint: "(1) unpredictable: Tính từ bổ nghĩa cho 'situations'." },
          { id: 2, answer: "patience", hint: "(2) patience: Danh từ của PATIENT." },
          { id: 3, answer: "preparations", hint: "(3) preparations: Danh từ số nhiều." },
          { id: 4, answer: "inexperienced", hint: "(4) inexperienced: Tính từ phủ định của EXPERIENCE." },
          { id: 5, answer: "simply", hint: "(5) simply: Trạng từ bổ nghĩa cho hành động." },
          { id: 6, answer: "unwilling", hint: "(6) unwilling: Tính từ phủ định của WILL." },
          { id: 7, answer: "realistic", hint: "(7) realistic: Tính từ của REAL." },
          { id: 8, answer: "valuable", hint: "(8) valuable: Tính từ của VALUE." },
        ]
      },
      {
        id: "3.2",
        title: "Personality types",
        type: "part3",
        passage: "It’s often said that no two people are (0) alike (LIKE), but according to one {{gap:1}} (PSYCHOLOGY) theory, we all share one of 16 distinct personality types, which are formed by several {{gap:2}} (COMBINE) of personality traits. {{gap:3}} (COMPARE) can be made between personality and left- or right-handedness. Most people are born with a {{gap:4}} (PREFER) for one hand, and all of us are born with a personality type. Experts say that we {{gap:5}} (TYPICAL) develop our personality type through the course of our lives in {{gap:6}} (RESPOND) to our {{gap:7}} (SURROUND) and experiences – school or work, for example. However, it should be emphasised that personality type doesn’t explain everything about us and that the {{gap:8}} (BEHAVE) of people with the same personality type can differ hugely.",
        questions: [
          { id: 1, answer: "psychological", hint: "(1) psychological: Tính từ của PSYCHOLOGY." },
          { id: 2, answer: "combinations", hint: "(2) combinations: Danh từ số nhiều." },
          { id: 3, answer: "Comparisons", hint: "(3) Comparisons: Danh từ số nhiều làm chủ ngữ." },
          { id: 4, answer: "preference", hint: "(4) preference: Danh từ của PREFER." },
          { id: 5, answer: "typically", hint: "(5) typically: Trạng từ của TYPICAL." },
          { id: 6, answer: "response", hint: "(6) response: In response to." },
          { id: 7, answer: "surroundings", hint: "(7) surroundings: Môi trường xung quanh." },
          { id: 8, answer: "behaviour", hint: "(8) behaviour: Danh từ của BEHAVE." },
        ]
      },
      {
        id: "3.3",
        title: "Designer labels",
        type: "part3",
        passage: "The biggest and most (0) profitable (PROFIT) companies have large advertising budgets which they use to make their name familiar. When we are looking for new trainers, clothes or household goods and we have a {{gap:1}} (CHOOSE) between two different products – one with a label we have heard of and one which by contrast is {{gap:2}} (KNOW) to us – we often decide on the product whose name we recognise. It makes us think that we are buying something of {{gap:3}} (REASON) quality which we can trust. However, if we looked carefully at them, we might find the number of {{gap:4}} (SIMILAR) between the two products quite {{gap:5}} (SURPRISE). We often willingly pay extra for the name of the designer or company without {{gap:6}} (ACTUAL) gaining very much in quality or style. If we are {{gap:7}} (SENSE), we should therefore not be persuaded that something is better because of the label on it. But advertising is very {{gap:8}} (EFFECT) and, however hard we try, it is always going to influence our decisions.",
        questions: [
          { id: 1, answer: "choice", hint: "(1) choice: Danh từ của CHOOSE." },
          { id: 2, answer: "unknown", hint: "(2) unknown: Tính từ phủ định của KNOW." },
          { id: 3, answer: "reasonable", hint: "(3) reasonable: Tính từ của REASON." },
          { id: 4, answer: "similarities", hint: "(4) similarities: Danh từ số nhiều." },
          { id: 5, answer: "surprising", hint: "(5) surprising: Tính từ chủ động." },
          { id: 6, answer: "actually", hint: "(6) actually: Trạng từ của ACTUAL." },
          { id: 7, answer: "sensible", hint: "(7) sensible: Tính từ của SENSE." },
          { id: 8, answer: "effective", hint: "(8) effective: Tính từ của EFFECT." },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Phần 4: Trắc nghiệm đọc hiểu",
    exercises: [
      {
        id: "4.1",
        title: "LUCY’S FIRST JOB",
        type: "part4",
        questions: [
          { id: 1, text: "What did the people working at the hotel have in common?", options: ["They all understood the guests’ expectations.", "They all shared the same goals.", "They all lacked experience.", "They were all hard-working."], answer: "C", hint: "They all lacked experience." },
          { id: 2, text: "What does the writer mean by 'daunting' in line 24?", options: ["disgusting", "frightening", "interesting", "strange"], answer: "B", hint: "frightening" },
          { id: 3, text: "What did Lucy do while she carried food to the dining room?", options: ["She smiled at Gordon in a friendly way.", "She avoided touching Gordon.", "She checked the food Gordon gave her.", "She started to look more friendly."], answer: "D", hint: "She started to look more friendly." },
          { id: 4, text: "Lucy enjoyed serving breakfasts more than dinners because the guests were", options: ["more demanding.", "more friendly.", "more punctual.", "more relaxed."], answer: "B", hint: "more friendly." },
          { id: 5, text: "What was special about the food on Lucy’s Sweet Trolley?", options: ["It was inspired by traditional recipes.", "It was prepared along with food for picnics.", "It was made following her father’s instructions.", "It contained a number of new creations."], answer: "D", hint: "It contained a number of new creations." },
          { id: 6, text: "What impression does Lucy give of her job throughout the passage?", options: ["She found many opportunities to laugh.", "She looked for ways of doing it better.", "She found all aspects of it enjoyable.", "She could do it with little effort."], answer: "B", hint: "She looked for ways of doing it better." },
        ]
      },
      {
        id: "4.2",
        title: "THE SECRETS OF HAPPINESS",
        type: "part4",
        questions: [
          { id: 1, text: "What does this in line 6 refer to?", options: ["the writer’s decision to study psychology", "the writer’s interest in happiness", "the writer’s observations of adults", "the writer’s unhappy childhood"], answer: "C", hint: "the writer’s observations of adults" },
          { id: 2, text: "What sort of people did the writer choose to concentrate on at the start of his career?", options: ["People who were clearly happier", "People with more freedom", "People whose main aim in life was not making money", "People whose objective was to become richer"], answer: "C", hint: "People whose main aim in life was not making money" },
          { id: 3, text: "The ‘experience sampling method’ showed in general that", options: ["creative people are happier than other people.", "uncreative people are just as happy as creative people.", "people’s happiness depends on who they are with.", "people are happier when they are very focused on an activity."], answer: "D", hint: "people are happier when they are very focused on an activity." },
          { id: 4, text: "that dividing line in line 47 refers to a division between", options: ["living more comfortably and less comfortably.", "poor countries and rich countries.", "happy people and unhappy people.", "millionaires and poor people."], answer: "A", hint: "living more comfortably and less comfortably." },
          { id: 5, text: "According to the writer, people concentrate more when they are doing", options: ["something which they find enjoyable.", "something which they find difficult but possible.", "something which they find quite easy.", "many things at the same time."], answer: "B", hint: "something which they find difficult but possible." },
          { id: 6, text: "What impression do you have of the writer of the text?", options: ["He has become happier by studying happiness.", "He has been unhappy most of his life.", "He has always been a happy person.", "He has only been happy for short times."], answer: "A", hint: "He has become happier by studying happiness." },
        ]
      },
      {
        id: "4.3",
        title: "MY GREATEST INFLUENCE",
        type: "part4",
        questions: [
          { id: 1, text: "What impression do we have of Rachel in the first paragraph?", options: ["She enjoys doing the family shopping.", "She comes from a family with not much money.", "She never buys herself new clothes.", "She is in a hurry to get home."], answer: "B", hint: "She comes from a family with not much money." },
          { id: 2, text: "She feels angry as she walks home because", options: ["she is expected to do too much.", "she dislikes the area where she lives.", "her family pay little attention to her.", "she is not rewarded for her effort."], answer: "D", hint: "she is not rewarded for her effort." },
          { id: 3, text: "Rachel only speaks briefly to the man who helps her because", options: ["she thinks he has a criminal past.", "she has never met him before.", "she doesn't like the way he's dressed.", "she's in a hurry to do other work."], answer: "D", hint: "she's in a hurry to do other work." },
          { id: 4, text: "What does Rachel mean by 'others are in the same boat' in line 43?", options: ["She has similar ambitions to other people.", "She deserves to be treated the same as other people.", "She lives in similar circumstances to other people.", "She can share her problems with other people."], answer: "C", hint: "She lives in similar circumstances to other people." },
          { id: 5, text: "Who, according to Rachel, has had the greatest influence on her?", options: ["the homeless man", "her mother", "many different people", "her family as a whole"], answer: "C", hint: "many different people" },
          { id: 6, text: "Which of these phrases best summarises the lesson Rachel has learned?", options: ["She shouldn't complain about her situation.", "She shouldn't envy other people.", "She can be poor but happy.", "She should value her family more."], answer: "A", hint: "She shouldn't complain about her situation." },
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Phần 5: Nối thông tin",
    exercises: [
      {
        id: "5.1",
        title: "My nightmare holiday!",
        type: "part5",
        questions: [
          { 
            id: 1, 
            text: "Had to hide from danger? (đã phải trốn khỏi nguy hiểm?)", 
            answer: "B", 
            hints: [
              "Hãy tìm các từ khóa liên quan đến 'trốn', 'ẩn nấp' hoặc 'nguy hiểm'.",
              "Kiểm tra đoạn văn nói về một tình huống thời tiết xấu hoặc động vật hoang dã.",
              "Đoạn B đề cập đến việc phải trú ẩn trong một hang động để tránh bão."
            ]
          },
          { 
            id: 2, 
            text: "Found an employee intimidating? (cảm thấy một nhân viên thật đáng sợ?)", 
            answer: "C", 
            hints: [
              "Tìm đoạn văn mô tả về thái độ hoặc ngoại hình của một nhân viên khách sạn hoặc hướng dẫn viên.",
              "Chú ý đến các tính từ như 'scary', 'frightening' hoặc 'unfriendly'.",
              "Đoạn C mô tả một người quản lý có vẻ ngoài rất nghiêm khắc và đáng sợ."
            ]
          },
          { 
            id: 3, 
            text: "Was not pleased to spend so long somewhere? (không hài lòng khi phải dành quá nhiều thời gian ở một nơi?)", 
            answer: "C", 
            hints: [
              "Tìm thông tin về việc bị trì hoãn hoặc phải chờ đợi quá lâu.",
              "Đoạn văn có thể nhắc đến sân bay, nhà ga hoặc một địa điểm dừng chân.",
              "Đoạn C nói về việc chuyến bay bị hoãn 12 tiếng và phải ở lại sân bay."
            ]
          },
          { 
            id: 4, 
            text: "Had visited the country on a previous occasion? (đã từng đến quốc gia này trong một dịp trước đó?)", 
            answer: "D", 
            hints: [
              "Tìm các từ như 'before', 'previously', 'second time' hoặc 'already'.",
              "Đoạn văn so sánh trải nghiệm lần này với lần trước đó.",
              "Đoạn D nhắc đến việc nhân vật đã từng đến đây vào 5 năm trước."
            ]
          },
          { 
            id: 5, 
            text: "Worried about how strong something was? (lo lắng về độ vững chãi/chắc chắn của một thứ gì đó?)", 
            answer: "B", 
            hints: [
              "Tìm thông tin về một phương tiện di chuyển hoặc một công trình kiến trúc.",
              "Chú ý đến cảm giác không an toàn hoặc lo sợ nó bị hỏng/sập.",
              "Đoạn B mô tả sự lo lắng khi đi trên một chiếc cầu treo cũ kỹ."
            ]
          },
          { 
            id: 6, 
            text: "Missed speaking to people? (nhớ/thiếu vắng việc được nói chuyện với mọi người?)", 
            answer: "D", 
            hints: [
              "Tìm đoạn văn nói về sự cô đơn hoặc thiếu giao tiếp xã hội.",
              "Nhân vật có thể ở một nơi hẻo lánh mà không có ai xung quanh.",
              "Đoạn D nói về việc ở một mình trong rừng và không có ai để trò chuyện."
            ]
          },
          { 
            id: 7, 
            text: "Had a painful experience? (có một trải nghiệm đau đớn?)", 
            answer: "A", 
            hints: [
              "Tìm các từ liên quan đến chấn thương, đau đớn hoặc tai nạn.",
              "Đoạn văn mô tả một sự cố thể chất.",
              "Đoạn A kể về việc bị ngã và trầy xước chân tay khi leo núi."
            ]
          },
          { 
            id: 8, 
            text: "Travelled with an ex-criminal? (đi du lịch cùng một cựu tù nhân?)", 
            answer: "C", 
            hints: [
              "Tìm thông tin về lai lịch của người bạn đồng hành.",
              "Chú ý đến các từ như 'prison', 'jail' hoặc 'past'.",
              "Đoạn C tiết lộ rằng người hướng dẫn viên từng có thời gian ngồi tù."
            ]
          },
          { 
            id: 9, 
            text: "Was unaware of the danger in what they were doing? (không nhận thức được nguy hiểm trong việc mình đang làm?)", 
            answer: "A", 
            hints: [
              "Tìm đoạn văn nói về sự chủ quan hoặc thiếu kinh nghiệm.",
              "Nhân vật sau đó mới nhận ra hành động đó rủi ro như thế nào.",
              "Đoạn A nói về việc bơi ở khu vực có dòng nước xiết mà không biết."
            ]
          },
          { 
            id: 10, 
            text: "Realised the holiday might be a mistake before arriving? (nhận ra kỳ nghỉ có thể là một sai lầm ngay từ trước khi đến nơi?)", 
            answer: "D", 
            hints: [
              "Tìm thông tin về cảm xúc của nhân vật khi đang trên đường đi.",
              "Chú ý đến các dấu hiệu điềm báo hoặc sự hối hận sớm.",
              "Đoạn D nói về việc đọc được những đánh giá tệ hại khi đang ngồi trên tàu."
            ]
          },
        ]
      },
      {
        id: "5.2",
        title: "Five young actors",
        type: "part5",
        questions: [
          { 
            id: 1, 
            text: "Believes actors must be ready to accept negative comments? (tin rằng diễn viên phải sẵn sàng chấp nhận những lời nhận xét tiêu cực?)", 
            answer: "E", 
            hints: [
              "Tìm đoạn văn nói về sự chuẩn bị tâm lý trước những lời phê bình.",
              "Đoạn văn có thể nhắc đến sự 'dày mặt' (thick-skinned) hoặc đối mặt với thất bại.",
              "Đoạn E nhấn mạnh rằng việc bị từ chối và nhận xét tiêu cực là một phần của nghề nghiệp."
            ]
          },
          { 
            id: 2, 
            text: "Feels that they have learned a lot from people already working in the theatre and tv? (cảm thấy họ đã học được rất nhiều từ những người đang làm việc trong ngành sân khấu và truyền hình?)", 
            answer: "D", 
            hints: [
              "Tìm thông tin về việc học hỏi từ các đồng nghiệp giàu kinh nghiệm.",
              "Chú ý đến các từ như 'experienced', 'seniors' hoặc 'mentors'.",
              "Đoạn D kể về việc quan sát và học hỏi từ các diễn viên gạo cội trên phim trường."
            ]
          },
          { 
            id: 3, 
            text: "Says that listening to other people’s suggestions improves their acting? (nói rằng việc lắng nghe góp ý của người khác giúp cải thiện kỹ năng diễn xuất của họ?)", 
            answer: "E", 
            hints: [
              "Tìm đoạn văn nói về việc tiếp nhận lời khuyên hoặc chỉ dẫn (direction).",
              "Đoạn văn nhấn mạnh sự cởi mở với các ý tưởng mới.",
              "Đoạn E nói rằng việc hợp tác và lắng nghe đạo diễn là chìa khóa để phát triển."
            ]
          },
          { 
            id: 4, 
            text: "Has always been excited by having people watching their acting? (luôn cảm thấy phấn khích khi có người xem mình diễn xuất?)", 
            answer: "D", 
            hints: [
              "Tìm thông tin về cảm xúc khi đứng trước khán giả.",
              "Chú ý đến các từ như 'audience', 'crowd' hoặc 'performance'.",
              "Đoạn D thừa nhận rằng họ yêu thích cảm giác được chú ý từ khi còn nhỏ."
            ]
          },
          { 
            id: 5, 
            text: "Had planned to enter a different profession before training to become an actor? (đã lên kế hoạch theo đuổi một nghề nghiệp khác trước khi được đào tạo thành diễn viên?)", 
            answer: "B", 
            hints: [
              "Tìm đoạn văn nói về một ước mơ hoặc kế hoạch nghề nghiệp cũ.",
              "Đoạn văn có thể nhắc đến một ngành học khác như luật, y hoặc kinh tế.",
              "Đoạn B tiết lộ rằng ban đầu họ định trở thành một giáo viên trước khi rẽ hướng."
            ]
          },
          { 
            id: 6, 
            text: "Prefers working in theatre rather than in cinema or television? (thích làm việc ở sân khấu kịch hơn là điện ảnh hay truyền hình?)", 
            answer: "C", 
            hints: [
              "Tìm đoạn văn so sánh giữa các loại hình diễn xuất.",
              "Chú ý đến sự ưu tiên cho 'live performance'.",
              "Đoạn C giải thích tại sao sự tương tác trực tiếp với khán giả kịch lại hấp dẫn hơn."
            ]
          },
          { 
            id: 7, 
            text: "Did not want to work outside the theatre initially? (ban đầu không muốn làm việc ngoài môi trường sân khấu kịch?)", 
            answer: "C", 
            hints: [
              "Tìm thông tin về sự thay đổi quan điểm đối với truyền hình hoặc điện ảnh.",
              "Đoạn văn có thể nhắc đến sự 'thuần khiết' của sân khấu.",
              "Đoạn C thừa nhận lúc đầu họ từng coi thường việc đóng phim quảng cáo hay TV."
            ]
          },
          { 
            id: 8, 
            text: "Feels worried about performing in front of some important people? (cảm thấy lo lắng khi phải biểu diễn trước mặt một số nhân vật quan trọng?)", 
            answer: "A", 
            hints: [
              "Tìm đoạn văn nói về áp lực khi có các 'VIP' hoặc nhà tuyển trạch theo dõi.",
              "Chú ý đến cảm giác hồi hộp (nervousness).",
              "Đoạn A mô tả sự lo lắng khi biết có các đạo diễn nổi tiếng đang ngồi dưới khán đài."
            ]
          },
          { 
            id: 9, 
            text: "Originally tried to train as an actor somewhere else? (ban đầu đã cố gắng để được đào tạo diễn xuất ở một nơi khác?)", 
            answer: "A", 
            hints: [
              "Tìm thông tin về việc bị từ chối bởi một trường nghệ thuật khác.",
              "Đoạn văn nhắc đến nỗ lực đầu tiên không thành công.",
              "Đoạn A kể về việc không trúng tuyển vào trường kịch ở London trước khi học ở đây."
            ]
          },
          { 
            id: 10, 
            text: "Wasn’t so interested in acting in the theatre initially? (ban đầu không mấy hứng thú với việc diễn xuất trên sân khấu kịch?)", 
            answer: "D", 
            hints: [
              "Tìm đoạn văn nói về niềm đam mê ban đầu dành cho phim ảnh hơn là kịch.",
              "Đoạn văn mô tả sự thay đổi sở thích sau này.",
              "Đoạn D nói rằng lúc đầu họ chỉ muốn trở thành ngôi sao điện ảnh."
            ]
          },
        ]
      },
      {
        id: "5.3",
        title: "Working in the news",
        type: "part5",
        questions: [
          { 
            id: 1, 
            text: "They had a particular advantage when applying for one job? (họ có một lợi thế cụ thể khi xin vào một công việc?)", 
            answer: "C", 
            hints: [
              "Tìm đoạn văn nói về một kỹ năng hoặc kinh nghiệm đặc biệt giúp họ nổi bật.",
              "Đoạn văn có thể nhắc đến ngoại ngữ hoặc kiến thức chuyên môn sâu.",
              "Đoạn C nói rằng việc biết tiếng Tây Ban Nha đã giúp họ có được vị trí phóng viên quốc tế."
            ]
          },
          { 
            id: 2, 
            text: "Time for research is often limited? (thời gian để nghiên cứu/tìm hiểu thường bị giới hạn?)", 
            answer: "A", 
            hints: [
              "Tìm thông tin về áp lực thời gian hoặc 'deadline'.",
              "Đoạn văn mô tả việc phải đưa tin nhanh chóng.",
              "Đoạn A phàn nàn về việc chỉ có vài giờ để chuẩn bị cho một bản tin phức tạp."
            ]
          },
          { 
            id: 3, 
            text: "Their present job is good training for their future career? (công việc hiện tại là sự rèn luyện tốt cho sự nghiệp tương lai của họ?)", 
            answer: "B", 
            hints: [
              "Tìm đoạn văn nói về những kỹ năng đang được tích lũy.",
              "Đoạn văn nhắc đến mục tiêu dài hạn.",
              "Đoạn B coi vị trí biên tập viên hiện tại là bước đệm để trở thành nhà sản xuất phim."
            ]
          },
          { 
            id: 4, 
            text: "They find it difficult when they are not permitted to finish something? (họ cảm thấy khó chịu khi không được phép hoàn thành một việc gì đó?)", 
            answer: "D", 
            hints: [
              "Tìm thông tin về việc bị cắt ngắn nội dung hoặc thay đổi kế hoạch đột ngột.",
              "Chú ý đến cảm giác thất vọng (frustration).",
              "Đoạn D nói về việc bài viết tâm huyết bị cắt bỏ do thiếu diện tích trang báo."
            ]
          },
          { 
            id: 5, 
            text: "It is important to take advantage of subject areas you know a lot about? (việc tận dụng những lĩnh vực mà bạn biết nhiều là rất quan trọng?)", 
            answer: "C", 
            hints: [
              "Tìm đoạn văn khuyên nên tập trung vào sở trường.",
              "Đoạn văn nhắc đến kiến thức nền tảng (background knowledge).",
              "Đoạn C nhấn mạnh việc viết về thể thao vì đó là niềm đam mê từ nhỏ."
            ]
          },
          { 
            id: 6, 
            text: "A wide range of general knowledge is important? (vốn kiến thức chung rộng là rất quan trọng?)", 
            answer: "A", 
            hints: [
              "Tìm đoạn văn nói về việc phải biết 'mỗi thứ một ít'.",
              "Đoạn văn nhắc đến sự đa dạng của các chủ đề tin tức.",
              "Đoạn A cho rằng một nhà báo giỏi cần am hiểu từ chính trị đến văn hóa."
            ]
          },
          { 
            id: 7, 
            text: "It is important not to make mistakes? (điều quan trọng là không được mắc sai lầm?)", 
            answer: "B", 
            hints: [
              "Tìm thông tin về sự chính xác (accuracy) và uy tín.",
              "Đoạn văn mô tả hậu quả của việc đưa tin sai sự thật.",
              "Đoạn B nói rằng một lỗi nhỏ cũng có thể làm hỏng sự nghiệp của phóng viên."
            ]
          },
          { 
            id: 8, 
            text: "They have not advanced steadily in their career? (họ đã không thăng tiến đều đặn trong sự nghiệp của mình?)", 
            answer: "C", 
            hints: [
              "Tìm đoạn văn nói về những khoảng nghỉ hoặc sự thay đổi công việc liên tục.",
              "Đoạn văn nhắc đến những thăng trầm (ups and downs).",
              "Đoạn C kể về việc từng bị sa thải và phải bắt đầu lại từ đầu vài lần."
            ]
          },
          { 
            id: 9, 
            text: "It is important for them to build links with the community? (việc xây dựng các mối liên kết với cộng đồng là rất quan trọng đối với họ?)", 
            answer: "D", 
            hints: [
              "Tìm thông tin về việc tiếp xúc với người dân địa phương.",
              "Đoạn văn nhắc đến việc tìm kiếm nguồn tin từ đời sống.",
              "Đoạn D nói rằng việc đi thực tế và trò chuyện với mọi người giúp có những tin bài hay."
            ]
          },
          { 
            id: 10, 
            text: "That journalists should not let their own point of view influence what they write? (các nhà báo không nên để quan điểm cá nhân ảnh hưởng đến những gì họ viết?)", 
            answer: "A", 
            hints: [
              "Tìm đoạn văn nói về sự khách quan (objectivity).",
              "Đoạn văn nhắc đến việc tách biệt cảm xúc cá nhân.",
              "Đoạn A khẳng định nhiệm vụ của nhà báo là đưa sự thật, không phải ý kiến."
            ]
          },
        ]
      }
    ]
  }
];
