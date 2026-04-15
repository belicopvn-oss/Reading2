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
    title: "Phần 1: Cấu tạo từ",
    exercises: [
      {
        id: "1.1",
        title: "Personality types",
        type: "part3",
        passage: "It’s often said that no two people are exactly (0) alike, but according to one {{gap:11}} (PSYCHOLOGY) theory, we all share one of 16 distinct personality types, which are formed by several {{gap:12}} (COMBINE) of personality traits. {{gap:13}} (COMPARE) can be made between personality and left- or right-handedness. Most people are born with a {{gap:14}} (PREFER) for one hand, and all of us are born with a personality type. Experts say that we {{gap:15}} (TYPICAL) develop our personality type through the course of our lives in {{gap:16}} (RESPOND) to our {{gap:17}} (SURROUND) and experiences – school or work, for example.\nHowever, it should be {{gap:18}} (EMPHASIZE) that personality type doesn’t explain everything about us and that the {{gap:19}} (BEHAVE) of people with the same personality type can differ {{gap:20}} (HUGE).",
        questions: [
          { id: 11, answer: "psychological", hint: "11. psychological" },
          { id: 12, answer: "combinations", hint: "12. combinations" },
          { id: 13, answer: "Comparisons", hint: "13. Comparisons" },
          { id: 14, answer: "preference", hint: "14. preference" },
          { id: 15, answer: "typically", hint: "15. typically" },
          { id: 16, answer: "response", hint: "16. response" },
          { id: 17, answer: "surroundings", hint: "17. surroundings" },
          { id: 18, answer: "emphasized", hint: "18. emphasized" },
          { id: 19, answer: "behaviour", hint: "19. behaviour" },
          { id: 20, answer: "hugely", hint: "20. hugely" },
        ]
      },
      {
        id: "1.2",
        title: "Designer labels",
        type: "part3",
        passage: "The biggest and most (0) profitable companies have large advertising budgets which they use to make their name familiar. When we are looking for new trainers, clothes or household goods and we have a {{gap:11}} (CHOOSE) between two different products – one with a label we have heard of and one which by contrast is {{gap:12}} (KNOW) to us – we often decide on the product whose name we recognise. It makes us think that we are buying something of {{gap:13}} (REASON) quality which we can trust. However, if we looked {{gap:14}} (CARE) at them, we might find the number of {{gap:15}} (SIMILAR) between the two products quite {{gap:16}} (SURPRISE). We often willingly pay extra for the name of the designer or company without {{gap:17}} (ACTUAL) gaining very much in quality or style. If we are {{gap:18}} (SENSE), we should therefore not be persuaded that something is better because of the label on it. But {{gap:19}} (ADVERTISE) is very effective and, however hard we try, it is always going to influence our {{gap:20}} (DECIDE).",
        questions: [
          { id: 11, answer: "choice", hint: "11. choice" },
          { id: 12, answer: "unknown", hint: "12. unknown" },
          { id: 13, answer: "reasonable", hint: "13. reasonable" },
          { id: 14, answer: "carefully", hint: "14. carefully" },
          { id: 15, answer: "similarities", hint: "15. similarities" },
          { id: 16, answer: "surprising", hint: "16. surprising" },
          { id: 17, answer: "actually", hint: "17. actually" },
          { id: 18, answer: "sensible", hint: "18. sensible" },
          { id: 19, answer: "advertising", hint: "19. advertising" },
          { id: 20, answer: "decisions", hint: "20. decisions" },
        ]
      },
      {
        id: "1.3",
        title: "Is there a doctor on board",
        type: "part3",
        passage: "You’re on a plane in mid-air. You (0) undo your seatbelt and begin to relax when you hear an {{gap:11}} (EXPECT) announcement: “Is there a doctor on board?”\nAs we all know, air travel can be an extremely {{gap:12}} (STRESS) experience, especially after going through airport security checks. Studies of airline passengers reveal that we all {{gap:13}} (OCCASION) worry that we or another passenger may have a {{gap:14}} (MEDICINE) problem far from a hospital at a {{gap:15}} (HIGH) of 10,000 metres.\nWell, now Lufthansa, the German airline, has made the {{gap:16}} (CALCULATE) that on 80% of its flights, there is in fact a doctor amongst the passengers. Having {{gap:17}} (PREVIOUS) obtained the doctor’s {{gap:18}} (AGREE), when there’s a medical emergency on board, one of the cabin staff will discreetly ask for his or her {{gap:19}} (ASSIST). It is hoped that in the future, this system will avoid making the other passengers {{gap:20}} (EASY) when these situations arise.",
        questions: [
          { id: 11, answer: "unexpected", hint: "11. unexpected" },
          { id: 12, answer: "stressful", hint: "12. stressful" },
          { id: 13, answer: "occasionally", hint: "13. occasionally" },
          { id: 14, answer: "medical", hint: "14. medical" },
          { id: 15, answer: "height", hint: "15. height" },
          { id: 16, answer: "calculation", hint: "16. calculation" },
          { id: 17, answer: "previously", hint: "17. previously" },
          { id: 18, answer: "agreement", hint: "18. agreement" },
          { id: 19, answer: "assistance", hint: "19. assistance" },
          { id: 20, answer: "uneasy", hint: "20. uneasy" },
        ]
      },
      {
        id: "1.4",
        title: "Taking care of nurses",
        type: "part3",
        passage: "It’s a nurse’s (0) responsibility to care for her patients and help them recover from their illness. This doesn’t just mean giving patients medicine. Part of the {{gap:11}} (TREAT) may involve giving them advice on improving their diet and exercise routines so they can increase their {{gap:12}} (STRONG) and avoid {{gap:13}} (BECOME) ill again. But who looks after the well-being and {{gap:14}} (FIT) of nurses?\nWhile trying to satisfy the demands of a busy schedule, some nurses find it difficult to take the time to take care of themselves. This is {{gap:15}} (SPECIAL) true of young, inexperienced nurses.\nBecause nurses have a very {{gap:16}} (ACTION) lifestyle and are constantly rushed off their feet, they’re unlikely to need any {{gap:17}} (ADD) exercise. However, many nurses often don’t have a {{gap:18}} (BALANCE) diet because they’re too busy to eat {{gap:19}} (PROPER) during the working day. This can mean relying on snacks instead of having {{gap:20}} (HEALTH) meals. So some nurses may not be getting the nutrition they need to maintain energy levels or fight off infectious diseases.",
        questions: [
          { id: 11, answer: "treatment", hint: "11. treatment" },
          { id: 12, answer: "strength", hint: "12. strength" },
          { id: 13, answer: "becoming", hint: "13. becoming" },
          { id: 14, answer: "fitness", hint: "14. fitness" },
          { id: 15, answer: "especially", hint: "15. especially" },
          { id: 16, answer: "active", hint: "16. active" },
          { id: 17, answer: "additional", hint: "17. additional" },
          { id: 18, answer: "balanced", hint: "18. balanced" },
          { id: 19, answer: "properly", hint: "19. properly" },
          { id: 20, answer: "healthy", hint: "20. healthy" },
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
        passage: "This summer, a group of 16-year-old students are taking (0) part in a three-week programme designed to teach them new skills and get them used {{gap:1}} working with people they have never met before. {{gap:2}} things go according to plan, in two years’ time, nearly one in six teenagers will be involved in the programme with {{gap:3}} eventual aim of offering it to {{gap:4}} young person in the country. So {{gap:5}}, our group has spent two weeks living {{gap:6}} from home (many for the first time), initially on an outdoor course, with activities such {{gap:7}} rock climbing, rafting and trekking, and then spending a week in self-catering accommodation where they are planning and setting {{gap:8}} a volunteering project. At {{gap:9}} moment, the students are putting their plans into action not just by cooking for, but also by organising a night outside sleeping rough {{gap:10}} order to raise money for a local homeless shelter.",
        questions: [
          { id: 1, answer: "to" },
          { id: 2, answer: "If" },
          { id: 3, answer: "the" },
          { id: 4, answer: "every" },
          { id: 5, answer: "far" },
          { id: 6, answer: "away" },
          { id: 7, answer: "as" },
          { id: 8, answer: "up" },
          { id: 9, answer: "the" },
          { id: 10, answer: "in" },
        ]
      },
      {
        id: "2.2",
        title: "What is ski touring",
        type: "part2",
        passage: "Ski touring is exactly that – touring on skis. It combines (0) the best bits of skiing and mountaineering and provides the perfect way to explore the mountains {{gap:1}} winter. The advantages {{gap:2}} ski touring are that you can really escape the crowds, enjoy {{gap:3}} solitude of the mountains and get rewarded with breathtaking views and exhilarating descents. Ski touring involves {{gap:4}} going up and down the mountain, so even for experienced skiers new skills have to be acquired. {{gap:5}} is much to learn about ‘skinning up’ (getting up the mountain) {{gap:6}} improves efficiency and saves energy. Similarly, you want to be able to enjoy going down, {{gap:7}} means learning to cope with the variety of snow conditions you will encounter off-piste. {{gap:8}} all ski touring is very demanding, you must be {{gap:9}} good physical condition. The fitter you are, the better fun you will {{gap:10}}.",
        questions: [
          { id: 1, answer: "in" },
          { id: 2, answer: "of" },
          { id: 3, answer: "the" },
          { id: 4, answer: "both" },
          { id: 5, answer: "There" },
          { id: 6, answer: "that/which" },
          { id: 7, answer: "Which" },
          { id: 8, answer: "Because/Since/As" },
          { id: 9, answer: "in" },
          { id: 10, answer: "have" },
        ]
      },
      {
        id: "2.3",
        title: "The happiest day of the year",
        type: "part2",
        passage: "A British psychologist says he can prove that the last Friday in June is the happiest day of the year. Cliff Arnall, a University of Cardiff psychologist specialising (0) in seasonal disorders, {{gap:1}} created a formula for finding happiness. The research looks at everything {{gap:2}} increased outdoor activity and rising energy levels, to picnics and beach trips with families. Mr Arnall’s happiness formula depends {{gap:3}} six factors: outdoor activity, nature, social interaction, positive memories {{gap:4}} childhood summers, temperature, and holidays and anticipation of time off. ‘At the end of June, the days are at their longest {{gap:5}} means there are more hours of sunshine to enjoy. It’s when people tend to have {{gap:6}} of gatherings with friends and family,’ Mr Arnall said. ‘Happiness is associated {{gap:7}} many things in life and can {{gap:8}} triggered by a variety of events. {{gap:9}} it’s a sunny day or a childhood memory that triggers a feeling of happiness, I think this formula proves that the path to finding happiness is very often simpler {{gap:10}} people imagine.’",
        questions: [
          { id: 1, answer: "has" },
          { id: 2, answer: "from" },
          { id: 3, answer: "on" },
          { id: 4, answer: "of" },
          { id: 5, answer: "which" },
          { id: 6, answer: "lots" },
          { id: 7, answer: "with" },
          { id: 8, answer: "be" },
          { id: 9, answer: "When" },
          { id: 10, answer: "than" },
        ]
      },
      {
        id: "2.4",
        title: "Shopping online versus shopping locally",
        type: "part2",
        passage: "Most people want a busy shopping street (0) in their town with butchers, bookshops, boutiques, cafés and restaurants, which makes {{gap:1}} depressing to see so {{gap:2}} shops becoming vacant. Experts predict that {{gap:3}} to 40% of shops will be forced to close in the next five years. No one wants to see their high-street shops disappear, {{gap:4}} why would people want to shop locally? Internet shopping sites offer discount prices along with 24/7 shopping and deliveries. {{gap:5}} to a recent report, some products, {{gap:6}} as toys, are as much as 60% cheaper online. Local shops should be more like clubs {{gap:7}} provide personal service and social relationships, and each shop should be seen {{gap:8}} something unique. To meet this need, in some parts of {{gap:9}} world shops shut for hours during the day, then do excellent business in {{gap:11}} evening, when they aim to give customers a {{gap:10}} satisfying experience than they would ever have from shopping online.",
        questions: [
          { id: 1, answer: "it" },
          { id: 2, answer: "many" },
          { id: 3, answer: "up" }, // Note: 3a is up, 3b is next. I'll map them to sequential IDs if needed, but here I'll use strings or combined.
          { id: 4, answer: "but" },
          { id: 5, answer: "According" },
          { id: 6, answer: "such" },
          { id: 7, answer: "which" },
          { id: 8, answer: "as" },
          { id: 9, answer: "the" },
          { id: 11, answer: "the" },
          { id: 10, answer: "more" },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Phần 3: Điền từ vào chỗ trống",
    exercises: [
      {
        id: "3.1",
        title: "Planning an adventure trip",
        type: "part2",
        passage: "Researching your destination properly will (0) all aspects of your adventure trip easier, as well as helping you to {{gap:21}} the most out of the experience. Research will help you pick the best places to go but you’ll also learn what you need to pack, and also what cultural (and sometimes political) issues you should be {{gap:22}} of. Climate and seasonal pricing are important {{gap:23}} in your decision about when to go. For adventure travel, bad weather or weather you’re not {{gap:24}} for can ruin the trip. While you can’t predict what the {{gap:25}} weather will be, find out as much as you can about the climate {{gap:26}} advance. While some research is absolutely {{gap:27}}, don’t plan every moment of your trip in advance. Over-planning tends to make people less {{gap:28}} to take part in the surprising and spontaneous {{gap:29}} that are part of any sort of adventure travel. It’s really important to keep a big reserve of {{gap:30}} and energy ready for the unpredictable.",
        questions: [
          { id: 21, answer: "get" },
          { id: 22, answer: "aware" },
          { id: 23, answer: "factors" },
          { id: 24, answer: "prepared" },
          { id: 25, answer: "exact" },
          { id: 26, answer: "in" },
          { id: 27, answer: "essential" },
          { id: 28, answer: "willing" },
          { id: 29, answer: "events" },
          { id: 30, answer: "excitement" },
        ]
      },
      {
        id: "3.2",
        title: "Youtube millionaire celebrities",
        type: "part2",
        passage: "Geeks, musicians, teenage boys in their bedrooms - (0) can now become a global internet sensation and a millionaire in the {{gap:21}}. In between the amusing videos of animals doing strange things and skateboarding accidents, people are building {{gap:22}} by uploading videos. In {{gap:23}} years, there have been many success stories of people {{gap:24}} started at home with just a webcam and have now huge followings. With over 100 million visitors to YouTube every month, advertisers have started {{gap:25}} on the most popular video makers to take advantage of their loyal {{gap:26}}. Last year, ‘YouTuber’ Michael Buckley {{gap:27}} that he was making over $100,000 a year from YouTube advertisements alone. The YouTube payment system works on a pay-per-click basis. {{gap:28}}, the amount of money you {{gap:29}} is determined by the number of views you get. A video of around a million views, which is {{gap:30}} about a thousand dollars for popular YouTubers, may bring in about a thousand dollars.",
        questions: [
          { id: 21, answer: "process" },
          { id: 22, answer: "careers" },
          { id: 23, answer: "recent" },
          { id: 24, answer: "who" },
          { id: 25, answer: "focusing" },
          { id: 26, answer: "public" },
          { id: 27, answer: "announced" },
          { id: 28, answer: "effectively" },
          { id: 29, answer: "earn" },
          { id: 30, answer: "typical" },
        ]
      },
      {
        id: "3.3",
        title: "Teenagers and Price",
        type: "part2",
        passage: "According to recent research, teenagers are very (0) to price. They hunt for {{gap:21}} and consider high prices a personal insult. They plan their shopping and do not just {{gap:22}} into shops and buy on impulse. Interestingly, parents have a lot of {{gap:23}} both over how much teenagers spend {{gap:24}} clothes and what they buy, even if the teenagers have {{gap:25}} the money themselves from a part-time job; {{gap:26}} short, teenagers worry about their parents’ reaction to the clothes they {{gap:27}}. Shops operate in a highly {{gap:28}} environment, so they make sure to {{gap:29}} for young people’s tastes by having a wide range of fashion clothes in {{gap:30}} at any one time.",
        questions: [
          { id: 21, answer: "bargains" },
          { id: 22, answer: "pop" },
          { id: 23, answer: "influence" },
          { id: 24, answer: "on" },
          { id: 25, answer: "earned" },
          { id: 26, answer: "in" },
          { id: 27, answer: "purchase" },
          { id: 28, answer: "competitive" },
          { id: 29, answer: "cater" },
          { id: 30, answer: "stock" },
        ]
      },
      {
        id: "3.4",
        title: "My sister’s circus",
        type: "part2",
        passage: "My sister and brother-in-law, Nell and Toti, (0) a circus. It is {{gap:21}} Giffords Circus, and it tours some of the {{gap:22}} parts of south-west England. Circuses have always been a part of Nell’s life, even when we were children. When she {{gap:23}} Toti, she had already worked in {{gap:24}} circuses in Britain and Europe. She had ridden elephants, but what she really {{gap:25}} for was a circus of her own. If the word ‘circus’ {{gap:26}} you of clowns and lions, think again. The show is {{gap:27}} on traditional travelling circuses and aimed at a rural {{gap:28}}. There {{gap:29}} no wild animals, but horses play a leading role in performances, which are a mixture of theatre, dance, traditional circus acts and clowns. I had visited Nell at the circus a lot, but this time I was going to {{gap:30}} the summer there.",
        questions: [
          { id: 21, answer: "called" },
          { id: 22, answer: "loveliest" },
          { id: 23, answer: "met" },
          { id: 24, answer: "several" },
          { id: 25, answer: "longed" },
          { id: 26, answer: "reminds" },
          { id: 27, answer: "based" },
          { id: 28, answer: "audience" },
          { id: 29, answer: "are" },
          { id: 30, answer: "spend" },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Phần 4: Nối thông tin",
    exercises: [
      {
        id: "4.1",
        title: "My nightmare holiday!",
        type: "part5",
        questions: [
          { id: 1, text: "Had to hide from danger? (đã phải trốn khỏi nguy hiểm?)", answer: "B" },
          { id: 2, text: "Found an employee intimidating? (cảm thấy một nhân viên thật đáng sợ?)", answer: "C" },
          { id: 3, text: "Was not pleased to spend so long somewhere? (không hài lòng khi phải dành quá nhiều thời gian ở một nơi?)", answer: "C" },
          { id: 4, text: "Had visited the country on a previous occasion? (đã từng đến quốc gia này trong một dịp trước đó?)", answer: "D" },
          { id: 5, text: "Worried about how strong something was? (lo lắng về độ vững chãi/chắc chắn của một thứ gì đó?)", answer: "B" },
          { id: 6, text: "Missed speaking to people? (nhớ/thiếu vắng việc được nói chuyện với mọi người?)", answer: "D" },
          { id: 7, text: "Had a painful experience? (có một trải nghiệm đau đớn?)", answer: "A" },
          { id: 8, text: "Travelled with an ex-criminal? (đi du lịch cùng một cựu tù nhân?)", answer: "C" },
          { id: 9, text: "Was unaware of the danger in what they were doing? (không nhận thức được nguy hiểm trong việc mình đang làm?)", answer: "A" },
          { id: 10, text: "Realised the holiday might be a mistake before arriving? (nhận ra kỳ nghỉ có thể là một sai lầm ngay từ trước khi đến nơi?)", answer: "D" },
        ]
      },
      {
        id: "4.2",
        title: "Five young actors",
        type: "part5",
        questions: [
          { id: 1, text: "Believes actors must be ready to accept negative comments? (tin rằng diễn viên phải sẵn sàng chấp nhận những lời nhận xét tiêu cực?)", answer: "E" },
          { id: 2, text: "Feels that they have learned a lot from people already working in the theatre and tv? (cảm thấy họ đã học được rất nhiều từ những người đang làm việc trong ngành sân khấu và truyền hình?)", answer: "D" },
          { id: 3, text: "Says that listening to other people’s suggestions improves their acting? (nói rằng việc lắng nghe góp ý của người khác giúp cải thiện kỹ năng diễn xuất của họ?)", answer: "E" },
          { id: 4, text: "Has always been excited by having people watching their acting? (luôn cảm thấy phấn khích khi có người xem mình diễn xuất?)", answer: "B" },
          { id: 5, text: "Had planned to enter a different profession before training to become an actor? (đã lên kế hoạch theo đuổi một nghề nghiệp khác trước khi được đào tạo thành diễn viên?)", answer: "C" },
          { id: 6, text: "Prefers working in theatre rather than in cinema or television? (thích làm việc ở sân khấu kịch hơn là điện ảnh hay truyền hình?)", answer: "C" },
          { id: 7, text: "Did not want to work outside the theatre initially? (ban đầu không muốn làm việc ngoài môi trường sân khấu kịch?)", answer: "A" },
          { id: 8, text: "Feels worried about performing in front of some important people? (cảm thấy lo lắng khi phải biểu diễn trước mặt một số nhân vật quan trọng?)", answer: "A" },
          { id: 9, text: "Originally tried to train as an actor somewhere else? (ban đầu đã cố gắng để được đào tạo diễn xuất ở một nơi khác?)", answer: "D" },
          { id: 10, text: "Wasn’t so interested in acting in the theatre initially? (ban đầu không mấy hứng thú với việc diễn xuất trên sân khấu kịch?)", answer: "B" },
        ]
      },
      {
        id: "4.3",
        title: "Working in the news",
        type: "part5",
        questions: [
          { id: 1, text: "They had a particular advantage when applying for one job? (họ có một lợi thế cụ thể khi xin vào một công việc?)", answer: "C" },
          { id: 2, text: "Time for research is often limited? (thời gian để nghiên cứu/tìm hiểu thường bị giới hạn?)", answer: "A" },
          { id: 3, text: "Their present job is good training for their future career? (công việc hiện tại là sự rèn luyện tốt cho sự nghiệp tương lai của họ?)", answer: "B" },
          { id: 4, text: "They find it difficult when they are not permitted to finish something? (họ cảm thấy khó chịu khi không được phép hoàn thành một việc gì đó?)", answer: "D" },
          { id: 5, text: "It is important to take advantage of subject areas you know a lot about? (việc tận dụng những lĩnh vực mà bạn biết nhiều là rất quan trọng?)", answer: "C" },
          { id: 6, text: "A wide range of general knowledge is important? (vốn kiến thức chung rộng là rất quan trọng?)", answer: "A" },
          { id: 7, text: "It is important not to make mistakes? (điều quan trọng là không được mắc sai lầm?)", answer: "B" },
          { id: 8, text: "They have not advanced steadily in their career? (họ đã không thăng tiến đều đặn trong sự nghiệp của mình?)", answer: "C" },
          { id: 9, text: "It is important for them to build links with the community? (việc xây dựng các mối liên kết với cộng đồng là rất quan trọng đối với họ?)", answer: "D" },
          { id: 10, text: "That journalists should not let their own point of view influence what they write? (các nhà báo không nên để quan điểm cá nhân ảnh hưởng đến những gì họ viết?)", answer: "A" },
        ]
      },
      {
        id: "4.4",
        title: "Surviving an animal attack",
        type: "part5",
        questions: [
          { id: 1, text: "didn’t immediately realise he’d been injured? (không nhận ra ngay là mình đã bị thương?)", answer: "B" },
          { id: 2, text: "was unwilling to injure the animal? (không muốn làm con vật bị thương?)", answer: "C" },
          { id: 3, text: "believes his behaviour caused the attack? (tin rằng hành vi của mình là nguyên nhân gây ra cuộc tấn công?)", answer: "D" },
          { id: 4, text: "gave advice which was ignored? (đã đưa ra lời khuyên nhưng bị phớt lờ?)", answer: "A" },
          { id: 5, text: "was with people who lacked the knowledge to help him? (đi cùng những người không có kiến thức để giúp đỡ mình?)", answer: "B" },
          { id: 6, text: "was considered to have missed an opportunity? (bị cho là đã bỏ lỡ một cơ hội tốt?)", answer: "B" },
          { id: 7, text: "regrets the result of his encounter? (hối hận về hậu quả của cuộc chạm trán?)", answer: "D" },
          { id: 8, text: "thinks he might not have been injured at another time of day? (nghĩ rằng mình có thể đã không bị thương nếu đó là một thời điểm khác trong ngày?)", answer: "B" },
          { id: 9, text: "was happy at first to see the animal which later attacked him? (lúc đầu rất vui khi nhìn thấy con vật sau đó tấn công mình?)", answer: "D" },
          { id: 10, text: "was surprised to eventually escape? (ngạc nhiên vì cuối cùng đã trốn thoát được?)", answer: "A" },
        ]
      }
    ]
  }
];
