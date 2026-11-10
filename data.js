/* ==========================================================================
   IELTS Vocabulary Lab — data.js
   Nguồn: 4000 Essential English Words – Book 2 (Paul Nation, Compass Publishing)

   CẤU TRÚC (dễ mở rộng):
   - Muốn thêm Unit mới: copy một object trong mảng `units`, đổi id/title/
     storyTitle/story/words. Đặt id = số thứ tự Unit (3, 4, ... 30).
   - Mỗi từ có id dạng "<unitId>-<số thứ tự>" (VD: "1-1", "2-20").
     ID này là khóa lưu tiến độ trong localStorage -> KHÔNG ĐỔI sau khi
     người dùng đã học, nếu không tiến độ sẽ bị lệch.
   - Các Unit chưa có trong mảng `units` sẽ được app.js hiển thị là
     placeholder ("Sắp ra mắt") dựa trên `totalUnits`.

   TRƯỜNG DỮ LIỆU CỦA TỪ:
   - word        : từ mục tiêu (dạng gốc)
   - ipa         : phiên âm IPA (kiểu Anh-Mỹ, theo sách, chuẩn hóa ký hiệu)
   - pos         : từ loại (n., v., adj., adv.)
   - definition  : định nghĩa tiếng Anh (theo sách)
   - example     : câu ví dụ (theo sách) — dùng cho Cloze Quiz
   - examples    : 2 câu ví dụ thông dụng bổ sung (tự viết, không nằm trong sách).
                   Mỗi câu phải chứa một dạng trong `forms` để app in đậm được từ.
                   Có thể để trống hoặc bỏ hẳn trường này; app vẫn chạy bình thường.
   - vi          : nghĩa tiếng Việt ngắn gọn (phần bổ sung)
   - forms       : các dạng biến đổi xuất hiện trong câu chuyện / ví dụ.
                   Dùng cho: (1) highlight trong Story Mode,
                   (2) tạo câu Cloze (che đúng dạng từ trong example).
                   Luôn gồm cả dạng gốc. Nên liệt kê dạng dài trước khi
                   so khớp (VD: "possessed" trước "possess").
   ========================================================================== */

const vocabularyData = {
  bookTitle: "4000 Essential English Words - Book 2",
  totalUnits: 30,
  units: [
    /* ======================================================================
       UNIT 1
       ====================================================================== */
    {
      id: 1,
      title: "Unit 1",
      storyTitle: "The Twelve Months",
      story: `An awful woman lived with her daughter and stepdaughter in her household. She possessed feelings of hate for her stepdaughter, Anna. Anna worked while her stepsister did nothing. On a cold January night, Anna's stepmother remarked, "Your stepsister desires flowers. Go and find some."

Anna wasn't anxious to walk through the chilled landscape. The cold air made her lungs burn. She walked at a slow pace because of the snow. Soon she saw a group of people. It consisted of twelve men. Anna told them about the flowers.

One of the man said they were the twelve months and that they would help Anna. January walked to her and made a motion with his hand. The days of the month passed rapidly until it was February's turn. February also made the month speed up. Then March made the sun shine and flowers grew in the field.

Anna loaded her basket with so many flowers that she could hardly lift it. Then she gave a quick but polite "thank you" to the twelve men and returned home. She was very eager to show her stepmother all the flowers. Back at the house, she spilled the flowers onto the table. Then she told her stepmother about the twelve men. Anna's stepmother and stepsister went to seek the twelve months. Their intent was to ask for gifts. They looked and looked. They became very lost and never found their way home. Anna lived happily by herself.`,
      words: [
        {
          id: "1-1",
          word: "anxious",
          ipa: "/ˈæŋkʃəs/",
          pos: "adj.",
          definition: "When a person is anxious, they worry that something bad will happen.",
          example: "She was anxious about not making her appointment on time.",
          examples: ["I felt anxious before my first job interview.", "Are you anxious about the exam results?"],
          vi: "lo lắng, bồn chồn",
          forms: ["anxious"]
        },
        {
          id: "1-2",
          word: "awful",
          ipa: "/ˈɔːfəl/",
          pos: "adj.",
          definition: "When something is awful, it is very bad.",
          example: "Her performance last night was awful.",
          examples: ["The soup tasted awful, so I didn't finish it.", "We had an awful day because of the heavy rain."],
          vi: "tồi tệ, kinh khủng",
          forms: ["awful"]
        },
        {
          id: "1-3",
          word: "consist",
          ipa: "/kənˈsɪst/",
          pos: "v.",
          definition: "To consist of is to be made of parts or things.",
          example: "Today's choices for lunch consisted of pizza, hamburgers, and hot dogs.",
          examples: ["A football team consists of eleven players.", "The course consists of ten short lessons."],
          vi: "bao gồm, gồm có",
          forms: ["consisting", "consisted", "consists", "consist"]
        },
        {
          id: "1-4",
          word: "desire",
          ipa: "/dɪˈzaɪər/",
          pos: "v.",
          definition: "To desire is to want something.",
          example: "My sister desires a big house and lots of money.",
          examples: ["Many students desire a chance to study abroad.", "She desires a quiet life in the countryside."],
          vi: "khao khát, mong muốn",
          forms: ["desiring", "desired", "desires", "desire"]
        },
        {
          id: "1-5",
          word: "eager",
          ipa: "/ˈiːɡər/",
          pos: "adj.",
          definition: "When a person is eager about something, they are excited about it.",
          example: "The man was eager to talk about the good news.",
          examples: ["The children were eager to open their presents.", "He is eager to learn how to drive."],
          vi: "háo hức, hăm hở",
          forms: ["eager"]
        },
        {
          id: "1-6",
          word: "household",
          ipa: "/ˈhaʊshoʊld/",
          pos: "n.",
          definition: "A household is all the people who live in one house.",
          example: "Our household is made up of my father, my mother and me.",
          examples: ["Every household in the village has a small garden.", "Our household uses a lot of water in summer."],
          vi: "hộ gia đình",
          forms: ["households", "household"]
        },
        {
          id: "1-7",
          word: "intent",
          ipa: "/ɪnˈtent/",
          pos: "n.",
          definition: "An intent is a plan to do something.",
          example: "Her intent is to visit Italy next summer.",
          examples: ["His intent was to surprise his parents.", "She said she had no intent to hurt anyone."],
          vi: "ý định, mục đích",
          forms: ["intents", "intent"]
        },
        {
          id: "1-8",
          word: "landscape",
          ipa: "/ˈlændskeɪp/",
          pos: "n.",
          definition: "A landscape is how an area of land looks.",
          example: "The landscape of the country is very green.",
          examples: ["The mountain landscape looks beautiful in the morning.", "He paints the landscape near his hometown."],
          vi: "phong cảnh, cảnh quan",
          forms: ["landscapes", "landscape"]
        },
        {
          id: "1-9",
          word: "lift",
          ipa: "/lɪft/",
          pos: "v.",
          definition: "To lift something is to move it higher.",
          example: "The man tried to lift the box.",
          examples: ["Can you help me lift this heavy table?", "She lifted the baby into her arms."],
          vi: "nâng lên, nhấc lên",
          forms: ["lifting", "lifted", "lifts", "lift"]
        },
        {
          id: "1-10",
          word: "load",
          ipa: "/loʊd/",
          pos: "v.",
          definition: "To load is to put objects into something.",
          example: "The man loaded the boxes into a truck.",
          examples: ["They loaded the suitcases into the car.", "Please load the dishes into the dishwasher."],
          vi: "chất (hàng) lên, xếp lên",
          forms: ["loading", "loaded", "loads", "load"]
        },
        {
          id: "1-11",
          word: "lung",
          ipa: "/lʌŋ/",
          pos: "n.",
          definition: "A lung is the organ in the body that fills with air when breathing.",
          example: "Having strong lungs is necessary for a healthy life.",
          examples: ["Smoking can seriously damage your lungs.", "Swimming makes my lungs stronger."],
          vi: "lá phổi",
          forms: ["lungs", "lung"]
        },
        {
          id: "1-12",
          word: "motion",
          ipa: "/ˈmoʊʃən/",
          pos: "n.",
          definition: "A motion is a movement that someone makes.",
          example: "The police officer made a motion with his hand.",
          examples: ["The dancer's motion was smooth and graceful.", "With a motion of his hand, he asked the waiter for the bill."],
          vi: "cử động, chuyển động",
          forms: ["motions", "motion"]
        },
        {
          id: "1-13",
          word: "pace",
          ipa: "/peɪs/",
          pos: "n.",
          definition: "The pace of something is the speed at which it happens.",
          example: "I ran the race at a slower pace than my friend.",
          examples: ["She walks at a fast pace every morning.", "The students learn at their own pace."],
          vi: "tốc độ, nhịp độ",
          forms: ["paces", "pace"]
        },
        {
          id: "1-14",
          word: "polite",
          ipa: "/pəˈlaɪt/",
          pos: "adj.",
          definition: "When someone is polite, they are acting in a thoughtful way.",
          example: "The boy was very polite: he behaved very thoughtfully.",
          examples: ["It is polite to say thank you.", "The waiter was very polite to every customer."],
          vi: "lịch sự, lễ phép",
          forms: ["polite"]
        },
        {
          id: "1-15",
          word: "possess",
          ipa: "/pəˈzes/",
          pos: "v.",
          definition: "To possess something is to have it or own it.",
          example: "My uncle possesses three sheep, a chicken, a cow and a dog.",
          examples: ["Our school possesses a large library.", "He possessed nothing but an old bicycle."],
          vi: "sở hữu, có",
          forms: ["possessing", "possessed", "possesses", "possess"]
        },
        {
          id: "1-16",
          word: "rapidly",
          ipa: "/ˈræpɪdli/",
          pos: "adv.",
          definition: "When something happens rapidly, it happens very fast.",
          example: "The train moved rapidly on the tracks.",
          examples: ["The city is growing rapidly.", "She rapidly finished her homework and went out."],
          vi: "nhanh chóng, mau lẹ",
          forms: ["rapidly"]
        },
        {
          id: "1-17",
          word: "remark",
          ipa: "/rɪˈmɑːrk/",
          pos: "v.",
          definition: "To remark is to say something.",
          example: "The teacher remarked on how quickly the students were learning.",
          examples: ["She remarked that the soup was too salty.", "He remarked on how quiet the street was."],
          vi: "nhận xét, nói rằng",
          forms: ["remarking", "remarked", "remarks", "remark"]
        },
        {
          id: "1-18",
          word: "seek",
          ipa: "/siːk/",
          pos: "v.",
          definition: "To seek is to look for something.",
          example: "If I have a problem, I seek my sister's advice.",
          examples: ["Many people seek help from doctors when they are ill.", "He is seeking a new job in the city."],
          vi: "tìm kiếm",
          forms: ["seeking", "sought", "seeks", "seek"]
        },
        {
          id: "1-19",
          word: "shine",
          ipa: "/ʃaɪn/",
          pos: "v.",
          definition: "To shine is to make a bright light.",
          example: "The candles are shining in the dark room.",
          examples: ["The sun shines brightly in summer.", "The stars shine at night."],
          vi: "chiếu sáng, tỏa sáng",
          forms: ["shining", "shone", "shines", "shine"]
        },
        {
          id: "1-20",
          word: "spill",
          ipa: "/spɪl/",
          pos: "v.",
          definition: "To spill is to have something fall out of its container.",
          example: "I spilled the coffee on the table.",
          examples: ["Be careful not to spill your tea.", "He spilled juice on his new shirt."],
          vi: "làm đổ, làm tràn",
          forms: ["spilling", "spilled", "spills", "spill"]
        }
      ]
    },

    /* ======================================================================
       UNIT 2
       ====================================================================== */
    {
      id: 2,
      title: "Unit 2",
      storyTitle: "The Dragon",
      story: `An evil dragon lived in a castle in the remote southern mountains.

One day the monster landed in a town. The dragon commanded the people, "Give me food now, or I will eat you!" The dragon lifted its wings so that its lungs could be completely filled with hot steam, and breathed it upon the people. A man turned into a stone statue!

The people submitted and brought food. The dragon ate all of it and left.

The people sent a boy to ask for help from a wise old man. He resided in a temple.

The boy told the old man about the dragon. Then, the old man counseled the boy. "A meteor will fall in the northern sky. It will make a huge explosion. Find the meteor and bring it to me. I will use it to make a sword for you."

The boy did as the old man said. Soon, the sword was ready.

"Use this to kill the dragon. But be careful. You must cover yourself with weeds that smell bad. That will ensure that he does not smell you," the man said.

The boy traveled for many days to find the castle. He went to the upper level and opened a door. He could see the dragon's tail. It was sleeping, so the boy killed it. Then, he took the dragon's gold and jewelry and returned to his town. The people were happy.`,
      words: [
        {
          id: "2-1",
          word: "bring",
          ipa: "/brɪŋ/",
          pos: "v.",
          definition: "To bring means to take someone or something to a person or place.",
          example: "Oscar will bring in all the boxes.",
          examples: ["Please bring your notebook to class tomorrow.", "She brought a cake to the party."],
          vi: "mang đến, đem lại",
          forms: ["bringing", "brought", "brings", "bring"]
        },
        {
          id: "2-2",
          word: "castle",
          ipa: "/ˈkæsəl/",
          pos: "n.",
          definition: "A castle is a building with strong walls where royalty usually lives.",
          example: "The castle was built many years ago.",
          examples: ["We visited an old castle on our trip to Scotland.", "The king lived in a huge stone castle."],
          vi: "lâu đài",
          forms: ["castles", "castle"]
        },
        {
          id: "2-3",
          word: "command",
          ipa: "/kəˈmænd/",
          pos: "v.",
          definition: "To command someone is to tell them to do something.",
          example: "The general commanded his army to attack.",
          examples: ["The captain commanded the crew to turn the ship around.", "The general commands thousands of soldiers."],
          vi: "ra lệnh, chỉ huy",
          forms: ["commanding", "commanded", "commands", "command"]
        },
        {
          id: "2-4",
          word: "counsel",
          ipa: "/ˈkaʊnsəl/",
          pos: "v.",
          definition: "To counsel someone is to listen and give advice about a problem.",
          example: "The teacher counseled the girl about her troubles.",
          examples: ["The doctor counseled him about healthy eating.", "She counsels students who have problems at school."],
          vi: "tư vấn, khuyên bảo",
          forms: ["counseling", "counseled", "counsels", "counsel"]
        },
        {
          id: "2-5",
          word: "ensure",
          ipa: "/ɪnˈʃʊər/",
          pos: "v.",
          definition: "To ensure is to make certain that something happens.",
          example: "Eating good food ensures that we stay healthy.",
          examples: ["Please ensure that all the windows are closed.", "Regular exercise ensures good health."],
          vi: "đảm bảo, bảo đảm",
          forms: ["ensuring", "ensured", "ensures", "ensure"]
        },
        {
          id: "2-6",
          word: "explosion",
          ipa: "/ɪkˈsploʊʒən/",
          pos: "n.",
          definition: "An explosion is a violent burst, usually with a loud sound.",
          example: "A nuclear explosion can cause great damage.",
          examples: ["We heard a loud explosion near the factory.", "The explosion shook all the windows in the street."],
          vi: "vụ nổ, sự nổ",
          forms: ["explosions", "explosion"]
        },
        {
          id: "2-7",
          word: "jewelry",
          ipa: "/ˈdʒuːəlri/",
          pos: "n.",
          definition: "Jewelry is something that people wear like earrings or necklaces.",
          example: "The woman looked beautiful with her nice dress and jewelry.",
          examples: ["She keeps her jewelry in a small wooden box.", "The shop sells beautiful silver jewelry."],
          vi: "trang sức, đồ trang sức",
          forms: ["jewelry"]
        },
        {
          id: "2-8",
          word: "land",
          ipa: "/lænd/",
          pos: "v.",
          definition: "To land means to come to the ground usually from a ship or aircraft.",
          example: "The parachutist landed safely on the ground.",
          examples: ["The plane will land in ten minutes.", "The birds landed on the roof."],
          vi: "hạ cánh, đáp xuống",
          forms: ["landing", "landed", "lands", "land"]
        },
        {
          id: "2-9",
          word: "meteor",
          ipa: "/ˈmiːtiər/",
          pos: "n.",
          definition: "A meteor is a rock from outer space that falls to Earth.",
          example: "We saw a meteor in the sky last night.",
          examples: ["A bright meteor crossed the night sky.", "He made a wish when he saw the meteor."],
          vi: "thiên thạch, sao băng",
          forms: ["meteors", "meteor"]
        },
        {
          id: "2-10",
          word: "monster",
          ipa: "/ˈmɑːnstər/",
          pos: "n.",
          definition: "A monster is any imaginary frightening creature that looks strange.",
          example: "The monster scared everyone in the village.",
          examples: ["The children were afraid of the monster in the movie.", "In the story, a green monster lives under the bridge."],
          vi: "quái vật",
          forms: ["monsters", "monster"]
        },
        {
          id: "2-11",
          word: "northern",
          ipa: "/ˈnɔːrðərn/",
          pos: "adj.",
          definition: "If something is northern, it is in the direction of north.",
          example: "It is much colder in northern countries than it is here.",
          examples: ["Northern Vietnam is cold in winter.", "They live in a small town in the northern part of the country."],
          vi: "thuộc phía bắc",
          forms: ["northern"]
        },
        {
          id: "2-12",
          word: "remote",
          ipa: "/rɪˈmoʊt/",
          pos: "adj.",
          definition: "If something is remote, it is very far away and difficult to get to.",
          example: "It took many days to get to the remote island.",
          examples: ["They live in a remote village in the mountains.", "It is difficult to get a signal in such a remote area."],
          vi: "xa xôi, hẻo lánh",
          forms: ["remote"]
        },
        {
          id: "2-13",
          word: "southern",
          ipa: "/ˈsʌðərn/",
          pos: "adj.",
          definition: "If something is southern, it is in the direction of south.",
          example: "Taegu is located in the southern part of the Korean peninsula.",
          examples: ["Southern Vietnam is warm all year.", "We spent our holiday on the southern coast."],
          vi: "thuộc phía nam",
          forms: ["southern"]
        },
        {
          id: "2-14",
          word: "statue",
          ipa: "/ˈstætʃuː/",
          pos: "n.",
          definition: "A statue is an image of a person or animal made of stone or metal.",
          example: "I saw a beautiful statue of a lion today.",
          examples: ["There is a big statue in the middle of the park.", "Tourists take photos next to the statue."],
          vi: "bức tượng",
          forms: ["statues", "statue"]
        },
        {
          id: "2-15",
          word: "steam",
          ipa: "/stiːm/",
          pos: "n.",
          definition: "Steam is water that has become hot and has turned into a misty gas.",
          example: "We could see the steam rise from the boiling water.",
          examples: ["Steam came out of the hot soup.", "The kettle made steam when the water boiled."],
          vi: "hơi nước",
          forms: ["steam"]
        },
        {
          id: "2-16",
          word: "submit",
          ipa: "/səbˈmɪt/",
          pos: "v.",
          definition: "To submit to someone is to agree to do what they tell you to do.",
          example: "She submitted to her mother's wishes and did her homework.",
          examples: ["You must submit your homework by Friday.", "The workers submitted to the new rules."],
          vi: "phục tùng, chịu khuất phục",
          forms: ["submitting", "submitted", "submits", "submit"]
        },
        {
          id: "2-17",
          word: "temple",
          ipa: "/ˈtempəl/",
          pos: "n.",
          definition: "A temple is a building that is used for religious purposes.",
          example: "The people visited the temple to pray.",
          examples: ["Many people visit the temple on holidays.", "The old temple is on top of the hill."],
          vi: "ngôi đền, chùa",
          forms: ["temples", "temple"]
        },
        {
          id: "2-18",
          word: "upper",
          ipa: "/ˈʌpər/",
          pos: "adj.",
          definition: "Upper means higher in position or place.",
          example: "A home's attic is at the upper part of the structure.",
          examples: ["My room is on the upper floor of the house.", "He kept his books on the upper shelf."],
          vi: "ở phía trên, cao hơn",
          forms: ["upper"]
        },
        {
          id: "2-19",
          word: "weed",
          ipa: "/wiːd/",
          pos: "n.",
          definition: "A weed is a plant, especially one that is not useful or wanted.",
          example: "The yard of the house was full of ugly weeds.",
          examples: ["He pulled the weeds out of the garden.", "Weeds grew quickly after the rain."],
          vi: "cỏ dại",
          forms: ["weeds", "weed"]
        },
        {
          id: "2-20",
          word: "wing",
          ipa: "/wɪŋ/",
          pos: "n.",
          definition: "A wing is the part of an animal that lets it fly.",
          example: "The bird used its wings to fly across the water.",
          examples: ["The bird couldn't fly because of its injured wing.", "Butterflies have two pairs of wings."],
          vi: "cánh (chim, côn trùng)",
          forms: ["wings", "wing"]
        }
      ]
    },

    /* ======================================================================
       UNIT 3
       ====================================================================== */
    {
      id: 3,
      title: "Unit 3",
      storyTitle: "The Battle of Thermopylae",
      story: `This is a true story. It happened long ago in Greece....

"We must fight," the Spartan* chief told his small army of brave men. They were at a great disadvantage. There were only three hundred of them. The Persian military had hundreds of thousands of men.

They were going to lose unless they could secure a small entrance. The enemy couldn't move through it easily. They intended to stop the enemy here. The chief and his men got ready for the battle.

Soon, long lines of the enemy's army twisted around the hills. The chief met the enemy with laughter. He knew that his men's weapons and skills were better. The Spartans trusted their leader and obeyed him.

First, the enemy soldiers shot arrows from their bows. The chief told his men to lift their shields*. The arrows stuck into the shields but did not hurt any of the men.

Then the enemy's soldiers attacked the Spartans with long spears. The chief surprised them. His troops rolled logs down on the enemy.

They fought for three days. Though they hardly slept at all, the chief and his men remained steady.

But the enemy found a way to beat the Spartans. The chief and all of his men were killed. Even though they lost, the Battle of Thermopylae is one of the most famous battles in history.

* Spartan - a soldier from the city of Sparta in Greece

* shield - a piece of wood or metal that soldiers carried to protect themselves`,
      words: [
        {
          id: "3-1",
          word: "arrow",
          ipa: "/ˈæroʊ/",
          pos: "n.",
          definition: "An arrow is a thin, straight stick shot from a bow.",
          example: "The arrow flew through the air and hit the target.",
          examples: ["The hunter shot an arrow at the deer.", "Follow the arrow on the sign to find the exit."],
          vi: "mũi tên",
          forms: ["arrows", "arrow"]
        },
        {
          id: "3-2",
          word: "battle",
          ipa: "/ˈbætl/",
          pos: "n.",
          definition: "A battle is a fight between two armies during a war.",
          example: "The battle lasted for many days.",
          examples: ["The two armies fought a long battle.", "She won the battle against her illness."],
          vi: "trận chiến",
          forms: ["battles", "battle"]
        },
        {
          id: "3-3",
          word: "bow",
          ipa: "/boʊ/",
          pos: "n.",
          definition: "A bow is a weapon made of curved wood and string that shoots arrows.",
          example: "He went hunting with a bow and arrow.",
          examples: ["The archer pulled back the string of his bow.", "She learned to shoot a bow when she was ten."],
          vi: "cây cung",
          forms: ["bows", "bow"]
        },
        {
          id: "3-4",
          word: "brave",
          ipa: "/breɪv/",
          pos: "adj.",
          definition: "When people are brave, they are not afraid to face pain or danger.",
          example: "The brave firefighter saved the girl from the burning building.",
          examples: ["It was brave of him to speak in front of everyone.", "The brave boy jumped into the river to save his dog."],
          vi: "dũng cảm",
          forms: ["brave"]
        },
        {
          id: "3-5",
          word: "chief",
          ipa: "/tʃiːf/",
          pos: "n.",
          definition: "A chief is the leader of a group of people.",
          example: "The chief led the people through the mountains.",
          examples: ["The chief of the village welcomed the visitors.", "The chief of police spoke on TV last night."],
          vi: "thủ lĩnh, tù trưởng",
          forms: ["chiefs", "chief"]
        },
        {
          id: "3-6",
          word: "disadvantage",
          ipa: "/ˌdɪsədˈvæntɪdʒ/",
          pos: "n.",
          definition: "A disadvantage is a situation where someone is likely to lose.",
          example: "Mike had a disadvantage in the race since he hurt his knee.",
          examples: ["Being short is a disadvantage in basketball.", "Not speaking English is a big disadvantage when you travel."],
          vi: "bất lợi, thế yếu",
          forms: ["disadvantages", "disadvantage"]
        },
        {
          id: "3-7",
          word: "enemy",
          ipa: "/ˈenəmi/",
          pos: "n.",
          definition: "An enemy is a country that is fighting another country during a war.",
          example: "The enemy prepared to attack the kingdom.",
          examples: ["The two countries were enemies for many years.", "The army hid from the enemy in the forest."],
          vi: "kẻ thù, quân địch",
          forms: ["enemies", "enemy"]
        },
        {
          id: "3-8",
          word: "entrance",
          ipa: "/ˈentrəns/",
          pos: "n.",
          definition: "An entrance is a place where someone can enter an area.",
          example: "The gate was locked, so Bill had to find a different entrance.",
          examples: ["Meet me at the main entrance of the mall.", "There is a long line at the entrance to the museum."],
          vi: "lối vào, cổng vào",
          forms: ["entrances", "entrance"]
        },
        {
          id: "3-9",
          word: "hardly",
          ipa: "/ˈhɑːrdli/",
          pos: "adv.",
          definition: "If something hardly happens, it almost does not happen at all.",
          example: "I hardly saw the concert since I had to leave early.",
          examples: ["I could hardly hear him because of the noise.", "She hardly ever eats meat."],
          vi: "hầu như không",
          forms: ["hardly"]
        },
        {
          id: "3-10",
          word: "intend",
          ipa: "/ɪnˈtend/",
          pos: "v.",
          definition: "To intend to do something means to plan to do it.",
          example: "I intend to finish college in three years.",
          examples: ["I intend to call her tonight.", "We intended to leave early, but it rained."],
          vi: "có ý định, dự định",
          forms: ["intending", "intended", "intends", "intend"]
        },
        {
          id: "3-11",
          word: "laughter",
          ipa: "/ˈlæftər/",
          pos: "n.",
          definition: "Laughter is the sound produced by laughing about something funny.",
          example: "Susan's joke made her classmates burst into laughter.",
          examples: ["The room was full of laughter.", "We heard the children's laughter from the garden."],
          vi: "tiếng cười",
          forms: ["laughter"]
        },
        {
          id: "3-12",
          word: "log",
          ipa: "/lɔːɡ/",
          pos: "n.",
          definition: "A log is a thick piece of wood that is cut from a tree.",
          example: "The fire was too small, so we added another log to it.",
          examples: ["He put another log on the fire.", "We sat on a log by the river."],
          vi: "khúc gỗ",
          forms: ["logs", "log"]
        },
        {
          id: "3-13",
          word: "military",
          ipa: "/ˈmɪləteri/",
          pos: "n.",
          definition: "The military is the armed forces of a country.",
          example: "I joined the military after I finished high school.",
          examples: ["He served in the military for five years.", "The military helps people after floods."],
          vi: "quân đội",
          forms: ["military"]
        },
        {
          id: "3-14",
          word: "obey",
          ipa: "/oʊˈbeɪ/",
          pos: "v.",
          definition: "To obey means to follow what a law or a person says you must do.",
          example: "My little sister did not obey my mother. Now she is in trouble.",
          examples: ["Dogs should obey their owners.", "Drivers must obey the traffic laws."],
          vi: "vâng lời, tuân theo",
          forms: ["obeying", "obeyed", "obeys", "obey"]
        },
        {
          id: "3-15",
          word: "secure",
          ipa: "/sɪˈkjʊr/",
          pos: "v.",
          definition: "To secure something means to get it after a lot of effort.",
          example: "I was able to secure a good grade on my test after weeks of studying.",
          examples: ["He worked hard to secure a place at university.", "The company secured a big contract last week."],
          vi: "giành được, đạt được",
          forms: ["securing", "secured", "secures", "secure"]
        },
        {
          id: "3-16",
          word: "steady",
          ipa: "/ˈstedi/",
          pos: "adj.",
          definition: "When someone or something is steady, they are under control.",
          example: "The problem was hard but she remained steady and solved it.",
          examples: ["Keep the ladder steady while I climb.", "She has a steady job at a bank."],
          vi: "vững vàng, bình tĩnh",
          forms: ["steady"]
        },
        {
          id: "3-17",
          word: "trust",
          ipa: "/trʌst/",
          pos: "v.",
          definition: "To trust is to believe that someone is honest and will do what is right.",
          example: "I trust my friends; they don't tell my secrets to other people.",
          examples: ["You can trust her to keep a secret.", "I don't trust people who lie."],
          vi: "tin tưởng, tin cậy",
          forms: ["trusting", "trusted", "trusts", "trust"]
        },
        {
          id: "3-18",
          word: "twist",
          ipa: "/twɪst/",
          pos: "v.",
          definition: "To twist something is to wrap it around itself or another thing.",
          example: "She twisted the spaghetti around her fork.",
          examples: ["Twist the lid to open the jar.", "He twisted his ankle while playing football."],
          vi: "xoắn, quấn, vặn",
          forms: ["twisting", "twisted", "twists", "twist"]
        },
        {
          id: "3-19",
          word: "unless",
          ipa: "/ənˈles/",
          pos: "conj.",
          definition: "Unless means if not or except when.",
          example: "Unless you clean your room, you cannot play with your friends.",
          examples: ["We will go to the beach unless it rains.", "Don't call me unless it's important."],
          vi: "trừ khi, nếu không",
          forms: ["unless"]
        },
        {
          id: "3-20",
          word: "weapon",
          ipa: "/ˈwepən/",
          pos: "n.",
          definition: "A weapon is an object that can be used to hurt people.",
          example: "Swords have been used as weapons for thousands of years.",
          examples: ["The police found a weapon in the car.", "A knife can be a dangerous weapon."],
          vi: "vũ khí",
          forms: ["weapons", "weapon"]
        }
      ]
    },

    /* ======================================================================
       UNIT 4
       ====================================================================== */
    {
      id: 4,
      title: "Unit 4",
      storyTitle: "The Deer and His Image",
      story: `A deer told himself every day, "I am the most handsome deer in the forest. My large chest is a symbol of my power. And my beautiful horns impress other animals."

But he did not like his legs and hooves*. "My legs are narrow, and my hooves are ugly. They do not satisfy me."

One day, the deer saw a big dog. The deer made some noise and disturbed the dog. The dog woke up and chased him. The deer felt terror. He screamed. He did not want to be a victim, so he ran into the forest. His strong legs helped him run fast. His pale brown hooves were hard, so they were not sensitive to rough rocks. However, his horns got caught in branches, slowing him down. His large chest could not fit between thick trees.

The deer estimated that he ran for an hour. He felt like he was running a marathon. In the end, the deer escaped the threat of the dog. He sat in the shade of a tree. "That was almost a disaster! I almost did not escape because of my chest and horns. My legs and hooves saved me." As a consequence, the deer learned to honor his fast legs and have confidence in his strong hooves. "Pretty things only supplement important things," he thought.

*hooves - the feet of animals like deer and horses`,
      words: [
        {
          id: "4-1",
          word: "chest",
          ipa: "/tʃest/",
          pos: "n.",
          definition: "The chest is the front part of a person's body under the neck.",
          example: "The water in the lake was as high as my chest.",
          examples: ["He felt a sharp pain in his chest.", "The baby slept on her father's chest."],
          vi: "ngực",
          forms: ["chests", "chest"]
        },
        {
          id: "4-2",
          word: "confidence",
          ipa: "/ˈkɑːnfɪdəns/",
          pos: "n.",
          definition: "If you have confidence about something, you are sure of it.",
          example: "I have confidence that I did well on the test.",
          examples: ["She spoke with confidence in front of the class.", "I have confidence in my team."],
          vi: "sự tự tin, niềm tin",
          forms: ["confidence"]
        },
        {
          id: "4-3",
          word: "consequence",
          ipa: "/ˈkɑːnsɪkwens/",
          pos: "n.",
          definition: "A consequence is a result of a choice or action.",
          example: "As a consequence of missing my bus, I had to find another way to work.",
          examples: ["Every choice has a consequence.", "He failed the test as a consequence of not studying."],
          vi: "hậu quả, kết quả",
          forms: ["consequences", "consequence"]
        },
        {
          id: "4-4",
          word: "disaster",
          ipa: "/dɪˈzæstər/",
          pos: "n.",
          definition: "A disaster is a really bad thing that happens.",
          example: "When the car crashed, it was a disaster.",
          examples: ["The flood was a terrible disaster for the town.", "The party was a disaster because nobody came."],
          vi: "thảm họa, tai họa",
          forms: ["disasters", "disaster"]
        },
        {
          id: "4-5",
          word: "disturb",
          ipa: "/dɪˈstɜːrb/",
          pos: "v.",
          definition: "To disturb someone means to upset them.",
          example: "The loud noise disturbed me while I was working.",
          examples: ["Please don't disturb me while I'm studying.", "The noise from the street disturbed the whole class."],
          vi: "làm phiền, quấy rầy",
          forms: ["disturbing", "disturbed", "disturbs", "disturb"]
        },
        {
          id: "4-6",
          word: "estimate",
          ipa: "/ˈestɪmeɪt/",
          pos: "v.",
          definition: "To estimate something means to make a guess about it.",
          example: "The boy estimated that he was one meter tall.",
          examples: ["I estimate that the trip will take two hours.", "They estimated the cost of the repairs."],
          vi: "ước tính, ước lượng",
          forms: ["estimating", "estimated", "estimates", "estimate"]
        },
        {
          id: "4-7",
          word: "honor",
          ipa: "/ˈɑːnər/",
          pos: "v.",
          definition: "When you honor people or things, you show respect for them.",
          example: "I honor my science teacher by working hard in class.",
          examples: ["We honor our teachers on Teachers' Day.", "They honored the soldiers with a ceremony."],
          vi: "tôn vinh, kính trọng",
          forms: ["honoring", "honored", "honors", "honor"]
        },
        {
          id: "4-8",
          word: "impress",
          ipa: "/ɪmˈpres/",
          pos: "v.",
          definition: "To impress someone means to make that person proud.",
          example: "He was able to impress the girls with his new dance.",
          examples: ["She wanted to impress her new boss.", "His speech impressed everyone in the room."],
          vi: "gây ấn tượng",
          forms: ["impressing", "impressed", "impresses", "impress"]
        },
        {
          id: "4-9",
          word: "marathon",
          ipa: "/ˈmærəθɑːn/",
          pos: "n.",
          definition: "A marathon is a very long foot race just over 42 kilometers.",
          example: "I ran a marathon, and now my legs are tired.",
          examples: ["He trained for months to run the marathon.", "My aunt finished her first marathon last year."],
          vi: "cuộc chạy marathon",
          forms: ["marathons", "marathon"]
        },
        {
          id: "4-10",
          word: "narrow",
          ipa: "/ˈnæroʊ/",
          pos: "adj.",
          definition: "When something is narrow, it is very thin.",
          example: "The bridge is too narrow for a car to drive over.",
          examples: ["The street is too narrow for big trucks.", "We walked along a narrow path by the river."],
          vi: "hẹp, thon",
          forms: ["narrow"]
        },
        {
          id: "4-11",
          word: "pale",
          ipa: "/peɪl/",
          pos: "adj.",
          definition: "When something is pale, it does not have a bright color.",
          example: "The girl's skin was very pale.",
          examples: ["She looked pale after the long flight.", "He painted the walls a pale blue."],
          vi: "nhợt nhạt, nhạt màu",
          forms: ["pale"]
        },
        {
          id: "4-12",
          word: "rough",
          ipa: "/rʌf/",
          pos: "adj.",
          definition: "When something is rough, it is not even or smooth.",
          example: "The rough ground hurt my feet.",
          examples: ["The sea was rough, so the boat shook a lot.", "His hands were rough from hard work."],
          vi: "gồ ghề, thô ráp",
          forms: ["rough"]
        },
        {
          id: "4-13",
          word: "satisfy",
          ipa: "/ˈsætɪsfaɪ/",
          pos: "v.",
          definition: "To satisfy someone means to make them happy.",
          example: "It will satisfy my teacher if I finish all my homework.",
          examples: ["Nothing could satisfy his hunger after the long walk.", "The new menu satisfies all kinds of customers."],
          vi: "làm hài lòng, thỏa mãn",
          forms: ["satisfying", "satisfied", "satisfies", "satisfy"]
        },
        {
          id: "4-14",
          word: "scream",
          ipa: "/skriːm/",
          pos: "v.",
          definition: "To scream means to make a loud noise with your mouth.",
          example: "The girl saw a spider and screamed.",
          examples: ["She screamed when she saw the snake.", "The children scream with joy on the roller coaster."],
          vi: "hét lên, la hét",
          forms: ["screaming", "screamed", "screams", "scream"]
        },
        {
          id: "4-15",
          word: "sensitive",
          ipa: "/ˈsensətɪv/",
          pos: "adj.",
          definition: "When someone or something is sensitive, they are easily hurt.",
          example: "My teeth are sensitive to cold things.",
          examples: ["My skin is sensitive to the sun.", "He is very sensitive and cries easily."],
          vi: "nhạy cảm, dễ tổn thương",
          forms: ["sensitive"]
        },
        {
          id: "4-16",
          word: "shade",
          ipa: "/ʃeɪd/",
          pos: "n.",
          definition: "The shade is a dark area that something makes when it blocks the sun.",
          example: "It was hot outside, so the boy sat in the shade of a tree.",
          examples: ["We rested in the shade of a big tree.", "It is cooler in the shade than in the sun."],
          vi: "bóng râm, bóng mát",
          forms: ["shades", "shade"]
        },
        {
          id: "4-17",
          word: "supplement",
          ipa: "/ˈsʌpləment/",
          pos: "v.",
          definition: "To supplement something is to add something else to it in a good way.",
          example: "He supplements his diet with fresh fruits.",
          examples: ["She supplements her income by teaching at night.", "He supplemented his lunch with some fruit."],
          vi: "bổ sung",
          forms: ["supplementing", "supplemented", "supplements", "supplement"]
        },
        {
          id: "4-18",
          word: "terror",
          ipa: "/ˈterər/",
          pos: "n.",
          definition: "When someone feels terror, they are scared.",
          example: "I felt a sense of terror when the tiger chased me.",
          examples: ["The children screamed in terror.", "Terror filled her eyes when the lights went out."],
          vi: "nỗi kinh hoàng, sự khiếp sợ",
          forms: ["terror"]
        },
        {
          id: "4-19",
          word: "threat",
          ipa: "/θret/",
          pos: "n.",
          definition: "A threat is something bad that might happen.",
          example: "Due to the dark clouds, there was a threat of a bad storm.",
          examples: ["Pollution is a serious threat to our health.", "There is no threat of danger here."],
          vi: "mối đe dọa, nguy cơ",
          forms: ["threats", "threat"]
        },
        {
          id: "4-20",
          word: "victim",
          ipa: "/ˈvɪktɪm/",
          pos: "n.",
          definition: "A victim is a person that had something bad happen to them.",
          example: "I was a victim of a robbery.",
          examples: ["The victim of the accident was taken to the hospital.", "Many people became victims of the flood."],
          vi: "nạn nhân",
          forms: ["victims", "victim"]
        }
      ]
    },

    /* ======================================================================
       UNIT 5
       ====================================================================== */
    {
      id: 5,
      title: "Unit 5",
      storyTitle: "May 29, 1953",
      story: `Today is the most important day of my life. I finally climbed Mt. Everest, the tallest mountain in the world.

The top of the mountain was amazing. It felt like we were close to heaven. The snow was so thick that my boots sank. The air was silent. I looked at the beauty that surrounded me. Maybe my story will be a legend someday.

I want people to remember this forever. I was the senior explorer in my group, and I knew we needed proof of our climb. I took many pictures with my camera. I'll put them in a frame and hang them.

On the mountain, the air was very cold. I wrapped my coat around my body. I looked over the side of the mountaintop. From that angle, I saw the border of the clouds touch the rocks below. The snow was thick. It looked pure. There was no sign of modern life. Thousands of years ago, my ancestors saw the world this way.

After fifteen minutes, I knew it was time to proceed down the mountain. The whole team congratulated us. My superior, John Hunt, praised us all. I sent messages to my relatives to tell them that I was safe. But it was hard to leave the mountain so quickly. I wanted to enjoy the incredible sight even longer.`,
      words: [
        {
          id: "5-1",
          word: "ancestor",
          ipa: "/ˈænsestər/",
          pos: "n.",
          definition: "An ancestor is a family member from the past.",
          example: "My ancestors came from Germany.",
          examples: ["Her ancestors lived in this village for centuries.", "He is proud of his ancestors."],
          vi: "tổ tiên",
          forms: ["ancestors", "ancestor"]
        },
        {
          id: "5-2",
          word: "angle",
          ipa: "/ˈæŋɡl/",
          pos: "n.",
          definition: "An angle is the direction from which you look at something.",
          example: "The giraffe turned its head to see from another angle.",
          examples: ["The picture looks better from this angle.", "She tilted her head at an angle to see better."],
          vi: "góc nhìn, góc",
          forms: ["angles", "angle"]
        },
        {
          id: "5-3",
          word: "boot",
          ipa: "/buːt/",
          pos: "n.",
          definition: "A boot is a heavy shoe that goes over your ankle.",
          example: "He wore boots so that his feet wouldn't get wet.",
          examples: ["I need a new pair of boots for the winter.", "He cleaned the mud off his boots."],
          vi: "giày ống, ủng",
          forms: ["boots", "boot"]
        },
        {
          id: "5-4",
          word: "border",
          ipa: "/ˈbɔːrdər/",
          pos: "n.",
          definition: "A border is the edge of an area.",
          example: "The postcard had a pretty green border of pine needles.",
          examples: ["The road crosses the border between two countries.", "They live near the border."],
          vi: "đường viền, ranh giới",
          forms: ["borders", "border"]
        },
        {
          id: "5-5",
          word: "congratulate",
          ipa: "/kənˈɡrætʃəleɪt/",
          pos: "v.",
          definition: "To congratulate someone is to tell them that you are happy for them.",
          example: "Bill and Angela congratulated each other on a job well done.",
          examples: ["Let me congratulate you on your new job.", "Her friends congratulated her after the game."],
          vi: "chúc mừng",
          forms: ["congratulating", "congratulated", "congratulates", "congratulate"]
        },
        {
          id: "5-6",
          word: "frame",
          ipa: "/freɪm/",
          pos: "n.",
          definition: "A frame is a border for a picture or mirror.",
          example: "I have to get a frame for my friend's picture.",
          examples: ["She put the photo in a wooden frame.", "The window frame needs to be painted."],
          vi: "khung (ảnh, gương)",
          forms: ["frames", "frame"]
        },
        {
          id: "5-7",
          word: "heaven",
          ipa: "/ˈhevən/",
          pos: "n.",
          definition: "Heaven is the place that some people believe people go when they die.",
          example: "When I die, I hope that I go to heaven.",
          examples: ["The children believe their grandfather is in heaven.", "After the long walk, the cold drink tasted like heaven."],
          vi: "thiên đường",
          forms: ["heavens", "heaven"]
        },
        {
          id: "5-8",
          word: "incredible",
          ipa: "/ɪnˈkredəbl/",
          pos: "adj.",
          definition: "If someone or something is incredible, it is hard to believe they are true.",
          example: "I have an incredible story to tell you about my vacation.",
          examples: ["The view from the top was incredible.", "It's incredible that she learned English in one year."],
          vi: "khó tin, phi thường",
          forms: ["incredible"]
        },
        {
          id: "5-9",
          word: "legend",
          ipa: "/ˈledʒənd/",
          pos: "n.",
          definition: "A legend is a story from the past.",
          example: "There is a well-known legend about a king and his queen.",
          examples: ["The legend says a dragon lives in the lake.", "That singer is a living legend."],
          vi: "huyền thoại, truyền thuyết",
          forms: ["legends", "legend"]
        },
        {
          id: "5-10",
          word: "praise",
          ipa: "/preɪz/",
          pos: "v.",
          definition: "To praise is to show that you like someone or something.",
          example: "The coach praised both athletes after a good practice.",
          examples: ["The teacher praised him for his hard work.", "Parents should praise their children when they try hard."],
          vi: "khen ngợi, ca ngợi",
          forms: ["praising", "praised", "praises", "praise"]
        },
        {
          id: "5-11",
          word: "proceed",
          ipa: "/prəˈsiːd/",
          pos: "v.",
          definition: "To proceed is to go in a certain direction.",
          example: "My son and I proceeded to the beach so we could go fishing.",
          examples: ["Please proceed to gate twelve.", "After the break, we proceeded with the lesson."],
          vi: "tiến hành, tiếp tục đi",
          forms: ["proceeding", "proceeded", "proceeds", "proceed"]
        },
        {
          id: "5-12",
          word: "pure",
          ipa: "/pjʊr/",
          pos: "adj.",
          definition: "If something is pure, it is very clear and beautiful.",
          example: "The rose was pure. It had no dirt or imperfections.",
          examples: ["This bottle of water is pure and clean.", "The ring is made of pure gold."],
          vi: "tinh khiết, trong sạch",
          forms: ["pure"]
        },
        {
          id: "5-13",
          word: "relative",
          ipa: "/ˈrelətɪv/",
          pos: "n.",
          definition: "A relative is a family member.",
          example: "My relatives came by to see the new baby.",
          examples: ["I visited my relatives during the holidays.", "A distant relative gave us a gift."],
          vi: "họ hàng, người thân",
          forms: ["relatives", "relative"]
        },
        {
          id: "5-14",
          word: "senior",
          ipa: "/ˈsiːnjər/",
          pos: "adj.",
          definition: "If one is senior, they are the oldest or have been there the longest.",
          example: "Because he got his job first, Bob is the senior chef.",
          examples: ["He is the senior doctor in the hospital.", "My sister is a senior student at the university."],
          vi: "cấp cao, lâu năm",
          forms: ["senior"]
        },
        {
          id: "5-15",
          word: "silent",
          ipa: "/ˈsaɪlənt/",
          pos: "adj.",
          definition: "If someone or something is silent, they make no sound.",
          example: "Since no one was home, the house was silent.",
          examples: ["The library was silent.", "He stayed silent during the meeting."],
          vi: "im lặng, yên tĩnh",
          forms: ["silent"]
        },
        {
          id: "5-16",
          word: "sink",
          ipa: "/sɪŋk/",
          pos: "v.",
          definition: "To sink into something is to slowly fall into it.",
          example: "The boat had a hole in it, and it sank into the ocean.",
          examples: ["The ship began to sink in the storm.", "My feet sank into the soft sand."],
          vi: "chìm, lún xuống",
          forms: ["sinking", "sank", "sunk", "sinks", "sink"]
        },
        {
          id: "5-17",
          word: "superior",
          ipa: "/səˈpɪriər/",
          pos: "adj.",
          definition: "If someone or something is superior, they are better than another.",
          example: "I think cooking outdoors is superior to cooking indoors.",
          examples: ["This phone is superior to my old one.", "Their products are superior in quality."],
          vi: "vượt trội, tốt hơn; cấp trên",
          forms: ["superior"]
        },
        {
          id: "5-18",
          word: "surround",
          ipa: "/səˈraʊnd/",
          pos: "v.",
          definition: "To surround something is to close in on it from all sides.",
          example: "We surrounded the suspect on all four sides.",
          examples: ["A high wall surrounds the garden.", "Mountains surround the small town."],
          vi: "bao vây, bao quanh",
          forms: ["surrounding", "surrounded", "surrounds", "surround"]
        },
        {
          id: "5-19",
          word: "thick",
          ipa: "/θɪk/",
          pos: "adj.",
          definition: "If something is thick, it is wide and solid.",
          example: "The fog was so thick that I couldn't see through it.",
          examples: ["He wore a thick coat in the snow.", "I cut a thick slice of bread."],
          vi: "dày, đặc",
          forms: ["thick"]
        },
        {
          id: "5-20",
          word: "wrap",
          ipa: "/ræp/",
          pos: "v.",
          definition: "To wrap is to cover something on all sides.",
          example: "I wrapped his gift and put a bow on it.",
          examples: ["Please wrap the gift in red paper.", "She wrapped a scarf around her neck."],
          vi: "gói, quấn, bọc",
          forms: ["wrapping", "wrapped", "wraps", "wrap"]
        }
      ]
    },

    /* ======================================================================
       UNIT 6
       ====================================================================== */
    {
      id: 6,
      title: "Unit 6",
      storyTitle: "The Frog Prince",
      story: `A lovely princess sat by the pool and played with a sculpture of a bear. Suddenly, she dropped it, and it rolled away. She chased it, but it fell into the water. She began to cry. A large, ugly frog asked, "Why are you crying?" After the princess told him, the frog said, "I can get the sculpture. What will you give me in exchange for the favor?"

"I can pay you a fee in gold," she said.

But the frog protested. "I want to sleep in your bed, and you must kiss me in the morning."

"He'd die without water. So, I don't have to keep my promise," she thought.

The frog dove for a brief moment and got the sculpture. Then the princess ran away with it. Later, the frog went to the palace. The king told her to keep her promise. This put the princess in a bad mood. She permitted the frog to sleep on her pillow. In the morning, she gave him a kiss.

Suddenly, he turned into a guy. He said, "I'm from a kingdom abroad. In my youth, I angered a tribe of cruel witches, who turned me into a frog."

The princess asked him, "Can I be your bride and stay with you forever?" But the prince said, "No. You disappointed me. You didn't keep your promise."`,
      words: [
        {
          id: "6-1",
          word: "abroad",
          ipa: "/əˈbrɔːd/",
          pos: "adv.",
          definition: "If someone goes or travels abroad, they go to another country.",
          example: "My brother wants to go abroad next year.",
          examples: ["She studied abroad for two years.", "Many people travel abroad in the summer."],
          vi: "ở nước ngoài, ra nước ngoài",
          forms: ["abroad"]
        },
        {
          id: "6-2",
          word: "anger",
          ipa: "/ˈæŋɡər/",
          pos: "v.",
          definition: "To anger someone is to make them mad.",
          example: "It angers me when people are rude.",
          examples: ["The unfair rule angered the students.", "Long delays often anger the passengers."],
          vi: "làm tức giận",
          forms: ["angering", "angered", "angers", "anger"]
        },
        {
          id: "6-3",
          word: "bride",
          ipa: "/braɪd/",
          pos: "n.",
          definition: "A bride is a woman who is getting married or has just gotten married.",
          example: "The bride looked beautiful in her wedding dress.",
          examples: ["The bride wore a long white dress.", "Everyone stood up when the bride arrived."],
          vi: "cô dâu",
          forms: ["brides", "bride"]
        },
        {
          id: "6-4",
          word: "brief",
          ipa: "/briːf/",
          pos: "adj.",
          definition: "If something is brief, it only lasts for a short time.",
          example: "The meeting this afternoon was very brief.",
          examples: ["Let me give you a brief introduction.", "He made a brief phone call."],
          vi: "ngắn ngủi, ngắn gọn",
          forms: ["brief"]
        },
        {
          id: "6-5",
          word: "chase",
          ipa: "/tʃeɪs/",
          pos: "v.",
          definition: "To chase someone or something is to follow them in order to catch them.",
          example: "I was chased by an angry native.",
          examples: ["The dog chased the ball across the yard.", "Police chased the thief down the street."],
          vi: "đuổi theo, rượt đuổi",
          forms: ["chasing", "chased", "chases", "chase"]
        },
        {
          id: "6-6",
          word: "disappoint",
          ipa: "/ˌdɪsəˈpɔɪnt/",
          pos: "v.",
          definition: "To disappoint is to make one feel sad or unsatisfied.",
          example: "I do not want to disappoint my family, so I try to do well at school.",
          examples: ["The movie disappointed many fans.", "Don't disappoint the children; keep your promise."],
          vi: "làm thất vọng",
          forms: ["disappointing", "disappointed", "disappoints", "disappoint"]
        },
        {
          id: "6-7",
          word: "dive",
          ipa: "/daɪv/",
          pos: "v.",
          definition: "To dive is to jump into water.",
          example: "I will dive into the lake once we get there.",
          examples: ["He dived into the pool to cool off.", "They dive in the sea to see colorful fish."],
          vi: "lặn, nhảy xuống nước",
          forms: ["diving", "dived", "dove", "dives", "dive"]
        },
        {
          id: "6-8",
          word: "exchange",
          ipa: "/ɪksˈtʃeɪndʒ/",
          pos: "v.",
          definition: "To exchange means to give something for another thing in return.",
          example: "I exchanged my foreign money for American dollars.",
          examples: ["We exchanged phone numbers after the class.", "You can exchange this shirt for a bigger size."],
          vi: "trao đổi, đổi",
          forms: ["exchanging", "exchanged", "exchanges", "exchange"]
        },
        {
          id: "6-9",
          word: "favor",
          ipa: "/ˈfeɪvər/",
          pos: "n.",
          definition: "A favor is something you do for someone to help them.",
          example: "Can you do me a favor and turn off the lights?",
          examples: ["He asked a favor of his neighbor.", "Thanks for the favor; I owe you one."],
          vi: "sự giúp đỡ, ơn huệ",
          forms: ["favors", "favor"]
        },
        {
          id: "6-10",
          word: "fee",
          ipa: "/fiː/",
          pos: "n.",
          definition: "A fee is an amount of money that a person or company asks for a service.",
          example: "I had to pay an hourly fee to speak with my lawyer.",
          examples: ["The school charges a small fee for the trip.", "There is no entrance fee for children."],
          vi: "phí, lệ phí",
          forms: ["fees", "fee"]
        },
        {
          id: "6-11",
          word: "forever",
          ipa: "/fərˈevər/",
          pos: "adv.",
          definition: "If something lasts forever, it means it lasts for all time.",
          example: "The young couple promised that they would love each other forever.",
          examples: ["I will remember this day forever.", "Nothing lasts forever."],
          vi: "mãi mãi, vĩnh viễn",
          forms: ["forever"]
        },
        {
          id: "6-12",
          word: "guy",
          ipa: "/ɡaɪ/",
          pos: "n.",
          definition: "A guy is an informal way to call a man.",
          example: "The guy at the flower shop was really helpful today.",
          examples: ["That guy over there is my cousin.", "He's a nice guy and everyone likes him."],
          vi: "anh chàng, gã",
          forms: ["guys", "guy"]
        },
        {
          id: "6-13",
          word: "lovely",
          ipa: "/ˈlʌvli/",
          pos: "adj.",
          definition: "If people or things are lovely, they are good-looking or beautiful.",
          example: "The trees look lovely in the fall.",
          examples: ["What a lovely garden!", "She has a lovely voice."],
          vi: "đáng yêu, xinh đẹp",
          forms: ["lovely"]
        },
        {
          id: "6-14",
          word: "mood",
          ipa: "/muːd/",
          pos: "n.",
          definition: "A mood is the way someone is feeling.",
          example: "I am in a good mood because I did well on my math test.",
          examples: ["He is in a bad mood today.", "Music can change your mood quickly."],
          vi: "tâm trạng",
          forms: ["moods", "mood"]
        },
        {
          id: "6-15",
          word: "palace",
          ipa: "/ˈpæləs/",
          pos: "n.",
          definition: "A palace is a very large building. It is often the home of a royal family.",
          example: "The king and queen live in a beautiful palace.",
          examples: ["The king's palace has more than a hundred rooms.", "We took a tour of the old palace."],
          vi: "cung điện",
          forms: ["palaces", "palace"]
        },
        {
          id: "6-16",
          word: "permit",
          ipa: "/pərˈmɪt/",
          pos: "v.",
          definition: "To permit something is to let someone do it.",
          example: "I was sick, so my mother permitted me to stay home from school.",
          examples: ["The school does not permit students to use phones in class.", "Smoking is not permitted in this building."],
          vi: "cho phép",
          forms: ["permitting", "permitted", "permits", "permit"]
        },
        {
          id: "6-17",
          word: "protest",
          ipa: "/prəˈtest/",
          pos: "v.",
          definition: "To protest something is to argue about it with someone.",
          example: "The people protested the decision of the president.",
          examples: ["Workers protested against the low pay.", "The neighbors protested the loud music."],
          vi: "phản đối, biểu tình",
          forms: ["protesting", "protested", "protests", "protest"]
        },
        {
          id: "6-18",
          word: "sculpture",
          ipa: "/ˈskʌlptʃər/",
          pos: "n.",
          definition: "A sculpture is a piece of art that is made from wood, clay, or stone.",
          example: "We saw an old sculpture of Buddha at the museum.",
          examples: ["The artist made a sculpture out of clay.", "A stone sculpture stands in front of the museum."],
          vi: "tác phẩm điêu khắc, bức tượng",
          forms: ["sculptures", "sculpture"]
        },
        {
          id: "6-19",
          word: "tribe",
          ipa: "/traɪb/",
          pos: "n.",
          definition: "A tribe is a group of people who live in the same culture.",
          example: "There's a small tribe of people who live in the mountains of Spain.",
          examples: ["The tribe lives deep in the forest.", "Each tribe has its own language and customs."],
          vi: "bộ tộc, bộ lạc",
          forms: ["tribes", "tribe"]
        },
        {
          id: "6-20",
          word: "youth",
          ipa: "/juːθ/",
          pos: "n.",
          definition: "Youth is a time in people's lives when they are young.",
          example: "My mother wanted to be a nurse in her youth.",
          examples: ["In his youth, he played football every day.", "Many people remember their youth with joy."],
          vi: "tuổi trẻ, thời niên thiếu",
          forms: ["youths", "youth"]
        }
      ]
    },

    /* ======================================================================
       UNIT 7
       ====================================================================== */
    {
      id: 7,
      title: "Unit 7",
      storyTitle: "A Beautiful Bird",
      story: `Dr. Norton's occupation was a scholar of biology. He learned about all animals on a daily basis. One day he met a sailor from a colony overseas. The man told Dr. Norton about a talking bird! The bird fascinated Dr. Norton, so he told his colleagues about it. They debated with him: no one thought a bird could talk. He tried to persuade them, but they laughed at him. Nevertheless, Dr. Norton believed the bird was real. His new mission was to find it. He wanted factual proof.

The next day he departed for the colony. The sailor he had met told him to look for a man named Jai, who would be able to help him in his search. After a month of sailing, Dr. Norton finally reached the colony where he met Jai.

"I can take you to where it lives. It lives by the volcano," Jai said.

They left the next day. A week later, they arrived at the volcano. Every day they walked around and looked for the bird, but they couldn't find it. After one month, Dr. Norton could not find the bird, and this depressed him. He decided to go home. On the route back, he walked past some old ruins. He heard someone say, "Hello."

"Who are you?" he asked. Dr. Norton looked up and saw a bird!

Dr. Norton put the talking bird into a cage. Then he returned home. He had made a significant discovery.`,
      words: [
        {
          id: "7-1",
          word: "basis",
          ipa: "/ˈbeɪsɪs/",
          pos: "n.",
          definition: "To do something on time's basis is how often you do it.",
          example: "My grandfather gets his hearing checked on a yearly basis.",
          examples: ["She goes to the gym on a regular basis.", "We meet on a weekly basis."],
          vi: "cơ sở; (on a daily basis) hằng ngày, theo định kỳ",
          forms: ["basis"]
        },
        {
          id: "7-2",
          word: "biology",
          ipa: "/baɪˈɑːlədʒi/",
          pos: "n.",
          definition: "Biology is the study of living things.",
          example: "We learned about the human heart in biology class.",
          examples: ["Biology is my favorite subject at school.", "She wants to study biology at university."],
          vi: "sinh học",
          forms: ["biology"]
        },
        {
          id: "7-3",
          word: "cage",
          ipa: "/keɪdʒ/",
          pos: "n.",
          definition: "A cage is something that holds an animal so it cannot leave.",
          example: "We put the parrots in their cage at night.",
          examples: ["The bird flew out of the open cage.", "The lion was in a large cage at the zoo."],
          vi: "cái lồng, chuồng",
          forms: ["cages", "cage"]
        },
        {
          id: "7-4",
          word: "colleague",
          ipa: "/ˈkɑːliːɡ/",
          pos: "n.",
          definition: "A colleague is somebody you work with.",
          example: "My colleague helped me finish the job.",
          examples: ["I have lunch with my colleagues every day.", "A colleague gave me a ride home."],
          vi: "đồng nghiệp",
          forms: ["colleagues", "colleague"]
        },
        {
          id: "7-5",
          word: "colony",
          ipa: "/ˈkɑːləni/",
          pos: "n.",
          definition: "A colony is a country controlled by another country.",
          example: "The USA was at one time a colony of Great Britain.",
          examples: ["Australia was once a British colony.", "A colony of ants lives under that tree."],
          vi: "thuộc địa",
          forms: ["colonies", "colony"]
        },
        {
          id: "7-6",
          word: "debate",
          ipa: "/dɪˈbeɪt/",
          pos: "v.",
          definition: "To debate is to seriously discuss something with someone.",
          example: "The husband and wife debated over which TV to buy.",
          examples: ["They debated the problem for an hour.", "Students will debate whether homework is useful."],
          vi: "tranh luận, bàn cãi",
          forms: ["debating", "debated", "debates", "debate"]
        },
        {
          id: "7-7",
          word: "depart",
          ipa: "/dɪˈpɑːrt/",
          pos: "v.",
          definition: "To depart is to leave some place so you can go to another place.",
          example: "The plane departed for Italy at 3:00 this afternoon.",
          examples: ["The train departs at six o'clock.", "We departed early to avoid the traffic."],
          vi: "khởi hành, rời đi",
          forms: ["departing", "departed", "departs", "depart"]
        },
        {
          id: "7-8",
          word: "depress",
          ipa: "/dɪˈpres/",
          pos: "v.",
          definition: "To depress someone is to make them sad.",
          example: "The bad news from work depressed the man.",
          examples: ["Rainy weather often depresses me.", "The sad news depressed everyone in the office."],
          vi: "làm buồn chán, làm chán nản",
          forms: ["depressing", "depressed", "depresses", "depress"]
        },
        {
          id: "7-9",
          word: "factual",
          ipa: "/ˈfæktʃuəl/",
          pos: "adj.",
          definition: "When something is factual, it is true.",
          example: "John learns about history from factual books.",
          examples: ["The report is short and factual.", "Please write a factual story, not a fairy tale."],
          vi: "có thật, dựa trên sự thật",
          forms: ["factual"]
        },
        {
          id: "7-10",
          word: "fascinate",
          ipa: "/ˈfæsəneɪt/",
          pos: "v.",
          definition: "To fascinate someone is to make them really like something.",
          example: "The kitten was fascinated by the ball of yarn.",
          examples: ["Space has always fascinated me.", "The magic show fascinated the children."],
          vi: "làm say mê, thu hút",
          forms: ["fascinating", "fascinated", "fascinates", "fascinate"]
        },
        {
          id: "7-11",
          word: "mission",
          ipa: "/ˈmɪʃən/",
          pos: "n.",
          definition: "A mission is an important job that is sometimes far away.",
          example: "The woman's mission was to help sick people.",
          examples: ["The astronauts completed their mission.", "Her mission is to protect the forest."],
          vi: "nhiệm vụ, sứ mệnh",
          forms: ["missions", "mission"]
        },
        {
          id: "7-12",
          word: "nevertheless",
          ipa: "/ˌnevərðəˈles/",
          pos: "adv.",
          definition: "You use nevertheless to show that something goes against a fact.",
          example: "He is usually friendly. Nevertheless, he wasn't this afternoon.",
          examples: ["It was raining; nevertheless, we went for a walk.", "The test was hard. Nevertheless, she passed."],
          vi: "tuy nhiên, dù vậy",
          forms: ["nevertheless"]
        },
        {
          id: "7-13",
          word: "occupation",
          ipa: "/ˌɑːkjəˈpeɪʃən/",
          pos: "n.",
          definition: "An occupation is a person's job.",
          example: "My father's occupation is a dentist.",
          examples: ["Please write your name and occupation on the form.", "What is your occupation?"],
          vi: "nghề nghiệp",
          forms: ["occupations", "occupation"]
        },
        {
          id: "7-14",
          word: "overseas",
          ipa: "/ˌoʊvərˈsiːz/",
          pos: "adv.",
          definition: "If you go overseas, you go to a country on the other side of an ocean.",
          example: "John often goes overseas for vacations.",
          examples: ["Her brother works overseas.", "We ordered the parts from overseas."],
          vi: "ở nước ngoài, ở hải ngoại",
          forms: ["overseas"]
        },
        {
          id: "7-15",
          word: "persuade",
          ipa: "/pərˈsweɪd/",
          pos: "v.",
          definition: "To persuade someone is to make them agree to do something.",
          example: "The children persuaded their parents to buy them gifts.",
          examples: ["I tried to persuade him to come with us.", "The ad persuaded many people to buy the phone."],
          vi: "thuyết phục",
          forms: ["persuading", "persuaded", "persuades", "persuade"]
        },
        {
          id: "7-16",
          word: "route",
          ipa: "/ruːt/",
          pos: "n.",
          definition: "A route is the way you go from one place to another.",
          example: "I saw many new houses along the route to the city.",
          examples: ["What is the fastest route to the airport?", "We took a different route home."],
          vi: "tuyến đường, lộ trình",
          forms: ["routes", "route"]
        },
        {
          id: "7-17",
          word: "ruins",
          ipa: "/ˈruːɪnz/",
          pos: "n.",
          definition: "Ruins are old buildings that are not used anymore.",
          example: "I visited some interesting ruins in Greece.",
          examples: ["Tourists walk around the ancient ruins.", "The ruins of the castle are on the hill."],
          vi: "tàn tích, phế tích",
          forms: ["ruins", "ruin"]
        },
        {
          id: "7-18",
          word: "scholar",
          ipa: "/ˈskɑːlər/",
          pos: "n.",
          definition: "A scholar is a person who studies something and knows much about it.",
          example: "The scholar knew much about art history.",
          examples: ["She is a famous scholar of history.", "The scholar spent years studying old books."],
          vi: "học giả",
          forms: ["scholars", "scholar"]
        },
        {
          id: "7-19",
          word: "significant",
          ipa: "/sɪɡˈnɪfɪkənt/",
          pos: "adj.",
          definition: "When someone or something is significant, they are important.",
          example: "I read many significant novels as a literature major in university.",
          examples: ["There was a significant change in the weather.", "This is a significant moment for our team."],
          vi: "quan trọng, đáng kể",
          forms: ["significant"]
        },
        {
          id: "7-20",
          word: "volcano",
          ipa: "/vɑːlˈkeɪnoʊ/",
          pos: "n.",
          definition: "A volcano is a mountain with a hole on top where hot liquid comes out.",
          example: "When the volcano erupted, smoke and heat filled the air.",
          examples: ["The volcano last erupted a hundred years ago.", "We climbed to the top of the volcano."],
          vi: "núi lửa",
          forms: ["volcanoes", "volcanos", "volcano"]
        }
      ]
    },

    /* ======================================================================
       UNIT 8
       ====================================================================== */
    {
      id: 8,
      title: "Unit 8",
      storyTitle: "Tricky Turtle",
      story: `Ricky the rabbit and Tera the turtle met by the edge of the river. "No one is capable of beating me in a race!" Ricky said. He was confident—his smile conveyed that.

"I can beat you," Tera said.

Ricky laughed with delight.

Tera said, "We will race tomorrow. The destination is the hill."

Ricky agreed. Tera concentrated on winning the race. She was not faster than Ricky. She needed a definite way to succeed. She told her family about the race, "I have concluded that I have to resort to something bad. I will cheat." She dictated her instructions to them.

At the race, they all wore white feathers. They looked exactly the same! Then, her family members hid in shadows on the path.

The race began. Tera was soon far behind. However, Tera's brother hid behind a bush in the valley below. When Ricky got close, Tera's brother began to run. He looked just like Tera! Ricky ran as fast as he could along the path. But, to him, it seemed like Tera was always ahead. Ricky had used a considerable amount of energy.

He reached the top, but Tera's sister was already there. "Well, you win," Ricky said.

Later, Tera had a broad smile on her face. Ricky never suspected. He had been tricked by a family of slow turtles.`,
      words: [
        {
          id: "8-1",
          word: "broad",
          ipa: "/brɔːd/",
          pos: "adj.",
          definition: "If something is broad, it is wide.",
          example: "The river is very long and broad.",
          examples: ["He has broad shoulders.", "A broad street runs through the town."],
          vi: "rộng, bao la",
          forms: ["broad"]
        },
        {
          id: "8-2",
          word: "bush",
          ipa: "/bʊʃ/",
          pos: "n.",
          definition: "A bush is a plant with many thin branches. It is smaller than a tree.",
          example: "My dad and I planted some small bushes around the house.",
          examples: ["A small bird sat in the bush.", "He cut the bushes in front of the house."],
          vi: "bụi cây, cây bụi",
          forms: ["bushes", "bush"]
        },
        {
          id: "8-3",
          word: "capable",
          ipa: "/ˈkeɪpəbl/",
          pos: "adj.",
          definition: "If someone or something is capable of something, they can do it.",
          example: "The Olympic athlete is capable of lifting a lot of weight.",
          examples: ["She is capable of solving hard problems.", "He is a capable teacher."],
          vi: "có khả năng, có năng lực",
          forms: ["capable"]
        },
        {
          id: "8-4",
          word: "cheat",
          ipa: "/tʃiːt/",
          pos: "v.",
          definition: "To cheat is to be dishonest so that you can win or do well.",
          example: "They cheated on the test by sharing answers.",
          examples: ["It is wrong to cheat in an exam.", "He cheated at cards."],
          vi: "gian lận, lừa dối",
          forms: ["cheating", "cheated", "cheats", "cheat"]
        },
        {
          id: "8-5",
          word: "concentrate",
          ipa: "/ˈkɑːnsəntreɪt/",
          pos: "v.",
          definition: "To concentrate on someone or something is to give your full attention.",
          example: "I could not concentrate on my homework because the room was so loud.",
          examples: ["It's hard to concentrate when it's noisy.", "Please concentrate on the road while driving."],
          vi: "tập trung",
          forms: ["concentrating", "concentrated", "concentrates", "concentrate"]
        },
        {
          id: "8-6",
          word: "conclude",
          ipa: "/kənˈkluːd/",
          pos: "v.",
          definition: "To conclude is to arrive at a logical end by looking at evidence.",
          example: "I saw crumbs on my dog's face, so I concluded that he ate my cookie.",
          examples: ["The scientists concluded that the water was safe.", "We concluded the meeting at noon."],
          vi: "kết luận, suy ra",
          forms: ["concluding", "concluded", "concludes", "conclude"]
        },
        {
          id: "8-7",
          word: "confident",
          ipa: "/ˈkɑːnfɪdənt/",
          pos: "adj.",
          definition: "Confident means that one believes they can do something without failing.",
          example: "She was confident she could climb the mountain due to her training.",
          examples: ["He felt confident before the speech.", "Be confident and speak clearly."],
          vi: "tự tin, chắc chắn",
          forms: ["confident"]
        },
        {
          id: "8-8",
          word: "considerable",
          ipa: "/kənˈsɪdərəbl/",
          pos: "adj.",
          definition: "If something is considerable, it is large in size, amount or extent.",
          example: "They paid a considerable amount of money for that car.",
          examples: ["She spent a considerable amount of time on the project.", "The storm caused considerable damage."],
          vi: "đáng kể, to lớn",
          forms: ["considerable"]
        },
        {
          id: "8-9",
          word: "convey",
          ipa: "/kənˈveɪ/",
          pos: "v.",
          definition: "To convey is to communicate or make ideas known.",
          example: "That picture of a crying child conveys a feeling of sadness.",
          examples: ["A smile can convey many feelings.", "He couldn't convey his idea clearly."],
          vi: "truyền đạt, thể hiện",
          forms: ["conveying", "conveyed", "conveys", "convey"]
        },
        {
          id: "8-10",
          word: "definite",
          ipa: "/ˈdefɪnət/",
          pos: "adj.",
          definition: "If something is definite, it is certain or sure to be true.",
          example: "There is a definite connection between hard work and success.",
          examples: ["We need a definite answer by Monday.", "There is a definite smell of smoke."],
          vi: "chắc chắn, rõ ràng",
          forms: ["definite"]
        },
        {
          id: "8-11",
          word: "delight",
          ipa: "/dɪˈlaɪt/",
          pos: "n.",
          definition: "Delight is a feeling of being very happy with something.",
          example: "He felt such delight after getting a promotion at work.",
          examples: ["The children screamed with delight.", "To my delight, the train was on time."],
          vi: "niềm vui sướng, sự hân hoan",
          forms: ["delights", "delight"]
        },
        {
          id: "8-12",
          word: "destination",
          ipa: "/ˌdestɪˈneɪʃən/",
          pos: "n.",
          definition: "A destination is the place where someone or something is going to.",
          example: "The destination of this plane is Munich, Germany.",
          examples: ["We reached our destination at noon.", "Paris is a popular tourist destination."],
          vi: "điểm đến, nơi đến",
          forms: ["destinations", "destination"]
        },
        {
          id: "8-13",
          word: "dictate",
          ipa: "/ˈdɪkteɪt/",
          pos: "v.",
          definition: "To dictate something is to read it aloud so it can be written down.",
          example: "He dictated his speech so his secretary could write it down.",
          examples: ["The boss dictated a letter to his secretary.", "The teacher dictated the words to the class."],
          vi: "đọc cho người khác viết",
          forms: ["dictating", "dictated", "dictates", "dictate"]
        },
        {
          id: "8-14",
          word: "edge",
          ipa: "/edʒ/",
          pos: "n.",
          definition: "The edge of something is the part of it that is farthest from the center.",
          example: "He ran to the edge of the cliff.",
          examples: ["Don't stand so close to the edge.", "He put the cup on the edge of the table."],
          vi: "mép, rìa, bờ",
          forms: ["edges", "edge"]
        },
        {
          id: "8-15",
          word: "path",
          ipa: "/pæθ/",
          pos: "n.",
          definition: "A path is a way from one place to another that people can walk along.",
          example: "We followed a path through the woods.",
          examples: ["A narrow path leads to the beach.", "She cleared the snow from the path."],
          vi: "con đường mòn, lối đi",
          forms: ["paths", "path"]
        },
        {
          id: "8-16",
          word: "resort",
          ipa: "/rɪˈzɔːrt/",
          pos: "v.",
          definition: "To resort to something is to depend on it in order to solve a problem.",
          example: "I hope they don't resort to violence to end the argument.",
          examples: ["People sometimes resort to lying when they are afraid.", "As a last choice, they resorted to selling their car."],
          vi: "dùng đến, viện đến",
          forms: ["resorting", "resorted", "resorts", "resort"]
        },
        {
          id: "8-17",
          word: "shadow",
          ipa: "/ˈʃædoʊ/",
          pos: "n.",
          definition: "A shadow is the dark area that is made when something blocks light.",
          example: "The man's shadow was taller than he was.",
          examples: ["The tree made a long shadow on the grass.", "Her shadow followed her down the road."],
          vi: "cái bóng, bóng tối",
          forms: ["shadows", "shadow"]
        },
        {
          id: "8-18",
          word: "succeed",
          ipa: "/səkˈsiːd/",
          pos: "v.",
          definition: "To succeed is to complete something that you planned or tried to do.",
          example: "He will continue to work on the robot until he succeeds.",
          examples: ["If you work hard, you will succeed.", "They succeeded in finishing the project on time."],
          vi: "thành công",
          forms: ["succeeding", "succeeded", "succeeds", "succeed"]
        },
        {
          id: "8-19",
          word: "suspect",
          ipa: "/səˈspekt/",
          pos: "v.",
          definition: "To suspect something is to believe that it is true.",
          example: "I suspect that those kids stole the money.",
          examples: ["I suspect he forgot our meeting.", "The police suspect that someone broke in."],
          vi: "nghi ngờ, ngờ rằng",
          forms: ["suspecting", "suspected", "suspects", "suspect"]
        },
        {
          id: "8-20",
          word: "valley",
          ipa: "/ˈvæli/",
          pos: "n.",
          definition: "A valley is a low area of land between two mountains or hills.",
          example: "We looked at the valley below from the top of the mountain.",
          examples: ["A river runs through the valley.", "Many farms are in the green valley."],
          vi: "thung lũng",
          forms: ["valleys", "valley"]
        }
      ]
    },

    /* ======================================================================
       UNIT 9
       ====================================================================== */
    {
      id: 9,
      title: "Unit 9",
      storyTitle: "The Tale of Bartelby O'Boyle",
      story: `Long ago, there was a clever man by the name of Bartelby O'Boyle. As a boy, he was kept as a slave by the royal family. He saw other children play, but he always had to work. This frustrated him very much. But he was not stupid, and he wanted to change things.

Then one day there was a struggle for authority in the kingdom. There was a division of the people, and one group fought against another group to see which would govern the kingdom. There was disorder in the kingdom. Bartelby ran away. He saw much fighting and destruction. Many people had nothing to eat; Bartelby decided to aid them. He would help them get food. But how?

Bartelby went to the capital to find an answer. There, he met a man named Gilliam. A group of men attempted to hurt Gilliam. Bartelby defended him. Then, he gave Gilliam some food to relieve his hunger. After that, the two became friends. They took food from the rich and gave it to the poor.

Soon, other people cooperated with them. Working together enabled them to take more food. But they only took food from people who had plenty, and they always gave it to those who had none. Because of this, Bartleby gained a reputation across the kingdom. Even today, many people admire him for helping the poor.`,
      words: [
        {
          id: "9-1",
          word: "admire",
          ipa: "/ədˈmaɪər/",
          pos: "v.",
          definition: "To admire someone is to like them for what they do.",
          example: "I admire my brother for his hard work.",
          examples: ["I admire people who tell the truth.", "She admires her teacher's patience."],
          vi: "ngưỡng mộ, khâm phục",
          forms: ["admiring", "admired", "admires", "admire"]
        },
        {
          id: "9-2",
          word: "aid",
          ipa: "/eɪd/",
          pos: "v.",
          definition: "To aid someone is to help them when they need something.",
          example: "The doctor aided the boy after his accident.",
          examples: ["The nurses aided the injured people.", "Volunteers aided the families after the storm."],
          vi: "giúp đỡ, hỗ trợ",
          forms: ["aiding", "aided", "aids", "aid"]
        },
        {
          id: "9-3",
          word: "attempt",
          ipa: "/əˈtempt/",
          pos: "v.",
          definition: "To attempt something is to try to do that thing.",
          example: "I am attempting to learn English.",
          examples: ["He attempted to climb the wall.", "She attempted the test twice."],
          vi: "cố gắng, thử làm",
          forms: ["attempting", "attempted", "attempts", "attempt"]
        },
        {
          id: "9-4",
          word: "authority",
          ipa: "/əˈθɔːrəti/",
          pos: "n.",
          definition: "Authority is the power that someone has because of their position.",
          example: "The policeman has authority on the streets.",
          examples: ["Teachers have authority in the classroom.", "He has the authority to sign the contract."],
          vi: "quyền lực, thẩm quyền",
          forms: ["authorities", "authority"]
        },
        {
          id: "9-5",
          word: "capital",
          ipa: "/ˈkæpɪtl/",
          pos: "n.",
          definition: "A capital is an important city where a country's leaders live and work.",
          example: "We will visit the capital to learn about our government.",
          examples: ["Hanoi is the capital of Vietnam.", "Tokyo is a huge capital city."],
          vi: "thủ đô",
          forms: ["capitals", "capital"]
        },
        {
          id: "9-6",
          word: "cooperate",
          ipa: "/koʊˈɑːpəreɪt/",
          pos: "v.",
          definition: "To cooperate is to work together to do something.",
          example: "The students cooperated to clean up the classroom.",
          examples: ["The two companies agreed to cooperate.", "Neighbors cooperated to clean the street."],
          vi: "hợp tác",
          forms: ["cooperating", "cooperated", "cooperates", "cooperate"]
        },
        {
          id: "9-7",
          word: "defend",
          ipa: "/dɪˈfend/",
          pos: "v.",
          definition: "To defend someone or something is to protect them from attack.",
          example: "The soldiers defended the town from the invaders.",
          examples: ["A good goalkeeper defends the goal well.", "She defended her friend when others laughed."],
          vi: "bảo vệ, phòng thủ",
          forms: ["defending", "defended", "defends", "defend"]
        },
        {
          id: "9-8",
          word: "destruction",
          ipa: "/dɪˈstrʌkʃən/",
          pos: "n.",
          definition: "Destruction is damage to something so bad that it can't be fixed.",
          example: "After the big fire, there was much destruction in the city.",
          examples: ["The storm caused a lot of destruction.", "War brings destruction to many cities."],
          vi: "sự tàn phá, sự hủy diệt",
          forms: ["destruction"]
        },
        {
          id: "9-9",
          word: "disorder",
          ipa: "/dɪsˈɔːrdər/",
          pos: "n.",
          definition: "Disorder is a lack of order, or a complete mess.",
          example: "The teacher's desk had many papers in disorder.",
          examples: ["His room was in complete disorder.", "The crowd fell into disorder after the loud noise."],
          vi: "sự hỗn loạn, sự bừa bộn",
          forms: ["disorders", "disorder"]
        },
        {
          id: "9-10",
          word: "division",
          ipa: "/dɪˈvɪʒən/",
          pos: "n.",
          definition: "A division is the act of making smaller groups out of a larger one.",
          example: "The chart had six divisions which all had different colors.",
          examples: ["There is a division in the class over the plan.", "The company has three divisions."],
          vi: "sự chia rẽ, sự phân chia",
          forms: ["divisions", "division"]
        },
        {
          id: "9-11",
          word: "enable",
          ipa: "/ɪˈneɪbl/",
          pos: "v.",
          definition: "To enable a person is to make it possible for them to do something.",
          example: "Having the key enabled us to open the door.",
          examples: ["A good map enables us to find the way.", "The new app enables you to learn words quickly."],
          vi: "giúp có thể, tạo điều kiện",
          forms: ["enabling", "enabled", "enables", "enable"]
        },
        {
          id: "9-12",
          word: "frustrate",
          ipa: "/ˈfrʌstreɪt/",
          pos: "v.",
          definition: "To frustrate is to prevent someone from fulfilling their desire.",
          example: "The machine frustrated me because I could not fix it.",
          examples: ["Slow internet frustrates me.", "The long wait frustrated the customers."],
          vi: "làm nản lòng, làm bực bội",
          forms: ["frustrating", "frustrated", "frustrates", "frustrate"]
        },
        {
          id: "9-13",
          word: "govern",
          ipa: "/ˈɡʌvərn/",
          pos: "v.",
          definition: "To govern is to control the public business of a country, state, or city.",
          example: "The United States is governed from the White House.",
          examples: ["The mayor governs the city.", "Kings once governed this land."],
          vi: "cai trị, quản lý",
          forms: ["governing", "governed", "governs", "govern"]
        },
        {
          id: "9-14",
          word: "plenty",
          ipa: "/ˈplenti/",
          pos: "n.",
          definition: "To have plenty of something is to have more than you need.",
          example: "The school had plenty of books for the students to read.",
          examples: ["We have plenty of time before the movie.", "There is plenty of food for everyone."],
          vi: "rất nhiều, dồi dào",
          forms: ["plenty"]
        },
        {
          id: "9-15",
          word: "relieve",
          ipa: "/rɪˈliːv/",
          pos: "v.",
          definition: "To relieve someone is to make them feel less pain.",
          example: "The medicine relieved the sick boy.",
          examples: ["This cream will relieve the pain.", "A cold drink relieved my thirst."],
          vi: "làm dịu, xoa dịu, giảm bớt",
          forms: ["relieving", "relieved", "relieves", "relieve"]
        },
        {
          id: "9-16",
          word: "reputation",
          ipa: "/ˌrepjuˈteɪʃən/",
          pos: "n.",
          definition: "Reputation is the opinion that people have about someone.",
          example: "The doctor had a reputation for helping people.",
          examples: ["The restaurant has a good reputation.", "He has a reputation for being honest."],
          vi: "danh tiếng, tiếng tăm",
          forms: ["reputations", "reputation"]
        },
        {
          id: "9-17",
          word: "royal",
          ipa: "/ˈrɔɪəl/",
          pos: "adj.",
          definition: "Royal describes something that belongs to a king or queen.",
          example: "The king sat upon the royal throne.",
          examples: ["The royal family lives in the palace.", "She attended a royal wedding."],
          vi: "thuộc hoàng gia",
          forms: ["royal"]
        },
        {
          id: "9-18",
          word: "slave",
          ipa: "/sleɪv/",
          pos: "n.",
          definition: "A slave is a person who is not free and must work for someone else.",
          example: "The slave worked very hard all day long.",
          examples: ["A slave had no freedom in the past.", "The story is about a slave who became free."],
          vi: "nô lệ",
          forms: ["slaves", "slave"]
        },
        {
          id: "9-19",
          word: "struggle",
          ipa: "/ˈstrʌɡl/",
          pos: "v.",
          definition: "To struggle is to fight against someone or something.",
          example: "The kids struggled with each other for the toy.",
          examples: ["He struggled to carry the heavy bags.", "Many families struggle to pay their bills."],
          vi: "đấu tranh, vật lộn",
          forms: ["struggling", "struggled", "struggles", "struggle"]
        },
        {
          id: "9-20",
          word: "stupid",
          ipa: "/ˈstuːpɪd/",
          pos: "adj.",
          definition: "When someone is stupid, they lack intelligence.",
          example: "He said something stupid that made everyone angry at him.",
          examples: ["That was a stupid mistake.", "I felt stupid when I forgot his name."],
          vi: "ngu ngốc, ngốc nghếch",
          forms: ["stupid"]
        }
      ]
    },

    /* ======================================================================
       UNIT 10
       ====================================================================== */
    {
      id: 10,
      title: "Unit 10",
      storyTitle: "The Giant of the Fog",
      story: `Every citizen of the little town knew the tale of the giant of the fog. When the fog came down from the hills, people said a giant walked among the houses. The town council did not believe it. They declared that the story was only a way to scare children.

One night, a mad old man ran into the square. "I saw him!" he cried. "He has an enormous sword!" Nobody wanted to listen, but a young woman named Tessa decided to find the truth. She set a trap of ropes near the old bridge and waited in the cold.

At dawn, she caught something extraordinary. It was a tall man on stilts with a long wooden sword. He had a violent temper, but he did not resist when Tessa took his arm. At the trial, he revealed his secret. He had no income, and he hoped to rid himself of his debts by scaring the rich. The town ought to have helped him, Tessa thought. At the funeral of the old mayor a week later, the man gave the town an apology. The impression he left was one of sadness, not fear.`,
      words: [
        { id: "10-1", word: "citizen", ipa: "/ˈsɪtɪzn/", pos: "n.", definition: "A citizen is a person who legally belongs to a country or city.", example: "Every citizen has the right to vote.", examples: ["She became a citizen last year.", "The mayor spoke to the citizens of the town."], vi: "công dân", forms: ["citizens", "citizen"] },
        { id: "10-2", word: "council", ipa: "/ˈkaʊnsl/", pos: "n.", definition: "A council is a group of people chosen to make decisions for a town or organization.", example: "The town council met on Monday.", examples: ["The council voted to build a park.", "He is a member of the city council."], vi: "hội đồng", forms: ["councils", "council"] },
        { id: "10-3", word: "declare", ipa: "/dɪˈkler/", pos: "v.", definition: "To declare something is to say it in a clear and official way.", example: "The judge declared him innocent.", examples: ["The country declared its freedom.", "She declared that she would never go back."], vi: "tuyên bố", forms: ["declaring", "declared", "declares", "declare"] },
        { id: "10-4", word: "enormous", ipa: "/ɪˈnɔːrməs/", pos: "adj.", definition: "Something enormous is extremely large.", example: "An enormous tree stood in the yard.", examples: ["The cake was enormous.", "He has an enormous house."], vi: "to lớn, khổng lồ", forms: ["enormous"] },
        { id: "10-5", word: "extraordinary", ipa: "/ɪkˈstrɔːrdneri/", pos: "adj.", definition: "Something extraordinary is very unusual or remarkable.", example: "She has an extraordinary talent for music.", examples: ["It was an extraordinary day.", "He showed extraordinary courage."], vi: "phi thường, đặc biệt", forms: ["extraordinary"] },
        { id: "10-6", word: "fog", ipa: "/fɔːg/", pos: "n.", definition: "Fog is thick cloud near the ground that makes it hard to see.", example: "The fog was so thick that we could not see the road.", examples: ["Morning fog covered the lake.", "Planes stayed on the ground because of the fog."], vi: "sương mù", forms: ["fog"] },
        { id: "10-7", word: "funeral", ipa: "/ˈfjuːnərəl/", pos: "n.", definition: "A funeral is a ceremony held after a person has died.", example: "Many people came to the funeral.", examples: ["The funeral was held on a rainy day.", "She wore black to the funeral."], vi: "đám tang", forms: ["funerals", "funeral"] },
        { id: "10-8", word: "giant", ipa: "/ˈdʒaɪənt/", pos: "n.", definition: "A giant is a very large person in stories.", example: "The giant picked up the boy with one hand.", examples: ["The giant lived on a mountain.", "He read a story about a friendly giant."], vi: "người khổng lồ", forms: ["giants", "giant"] },
        { id: "10-9", word: "impression", ipa: "/ɪmˈpreʃn/", pos: "n.", definition: "An impression is the feeling or idea you have about someone or something.", example: "He made a good impression on the teacher.", examples: ["My first impression of the city was good.", "She gave the impression of being tired."], vi: "ấn tượng", forms: ["impressions", "impression"] },
        { id: "10-10", word: "income", ipa: "/ˈɪnkʌm/", pos: "n.", definition: "Income is the money a person earns.", example: "Her income is low, but she saves a little.", examples: ["The family has a small income.", "He lost his income when the shop closed."], vi: "thu nhập", forms: ["income"] },
        { id: "10-11", word: "mad", ipa: "/mæd/", pos: "adj.", definition: "A mad person is crazy, or very angry.", example: "She was mad at her brother for breaking the toy.", examples: ["Everyone thought the old man was mad.", "Don't get mad at me."], vi: "điên, tức giận", forms: ["mad"] },
        { id: "10-12", word: "ought", ipa: "/ɔːt/", pos: "v.", definition: "Ought to is used to say that something is the right thing to do.", example: "You ought to see a doctor.", examples: ["We ought to leave now.", "He ought to say sorry."], vi: "nên, phải", forms: ["ought"] },
        { id: "10-13", word: "resist", ipa: "/rɪˈzɪst/", pos: "v.", definition: "To resist is to fight against something or refuse to accept it.", example: "I could not resist the cake.", examples: ["The soldiers resisted the attack.", "She resisted the urge to laugh."], vi: "chống cự, cưỡng lại", forms: ["resisting", "resisted", "resists", "resist"] },
        { id: "10-14", word: "reveal", ipa: "/rɪˈviːl/", pos: "v.", definition: "To reveal something is to show what was hidden.", example: "The magician revealed his secret.", examples: ["The test revealed a problem.", "She never revealed her age."], vi: "tiết lộ, để lộ", forms: ["revealing", "revealed", "reveals", "reveal"] },
        { id: "10-15", word: "rid", ipa: "/rɪd/", pos: "v.", definition: "To rid yourself of something is to get free of it.", example: "He wanted to rid his house of mice.", examples: ["She got rid of her old clothes.", "We must rid the town of crime."], vi: "loại bỏ, thoát khỏi", forms: ["ridding", "rid"] },
        { id: "10-16", word: "sword", ipa: "/sɔːrd/", pos: "n.", definition: "A sword is a weapon with a long, sharp blade.", example: "The knight held a sword.", examples: ["The old sword hung on the wall.", "He fought with a wooden sword."], vi: "thanh kiếm", forms: ["swords", "sword"] },
        { id: "10-17", word: "tale", ipa: "/teɪl/", pos: "n.", definition: "A tale is a story, often one that is old or imaginary.", example: "She told a tale about a brave boy.", examples: ["It is a tale of love and war.", "He loves old fairy tales."], vi: "truyện kể", forms: ["tales", "tale"] },
        { id: "10-18", word: "trap", ipa: "/træp/", pos: "n.", definition: "A trap is a device used to catch an animal or a person.", example: "The hunter set a trap in the woods.", examples: ["The mouse was caught in a trap.", "It was a trap to catch the thief."], vi: "cái bẫy", forms: ["traps", "trap"] },
        { id: "10-19", word: "trial", ipa: "/ˈtraɪəl/", pos: "n.", definition: "A trial is a time in court when a judge decides if someone is guilty.", example: "The trial lasted three days.", examples: ["He had a fair trial.", "The trial begins on Monday."], vi: "phiên tòa, cuộc xét xử", forms: ["trials", "trial"] },
        { id: "10-20", word: "violent", ipa: "/ˈvaɪələnt/", pos: "adj.", definition: "Something violent uses strong force to hurt people or things.", example: "A violent storm hit the coast.", examples: ["He has a violent temper.", "The movie was too violent for children."], vi: "bạo lực, dữ dội", forms: ["violent"] }
      ]
    },

    /* ======================================================================
       UNIT 11
       ====================================================================== */
    {
      id: 11,
      title: "Unit 11",
      storyTitle: "The Museum Genius",
      story: `The principal of the school took the class to a museum on a wet morning. Admission was free for students. In the first hall, there was an exhibit of a huge dinosaur. A boy named Omar looked at it with wide eyes. He loved chemistry and astronomy, but geography was his weakest subject.

A guide with a gentle voice led the group down a row of glass cases. On a shelf, there was an old map. "This was drawn by a young genius," she said. "His fame spread across the world, despite his poor family." Omar's friend tried to interfere and touch the glass. The guide spoke lightly, but she was firm. "Please do not, in spite of the temptation."

Omar felt no blame toward his friend. He felt super excited. "I want to be like him," he said. After the visit, he studied the weather forecast for the week and drew his own map. His teacher saw it and smiled.`,
      words: [
        { id: "11-1", word: "admission", ipa: "/ədˈmɪʃn/", pos: "n.", definition: "Admission is the right to enter a place, or the price you pay to enter.", example: "Admission to the museum is free on Sundays.", examples: ["The admission fee is five dollars.", "She got admission to a good school."], vi: "sự cho vào, vé vào cửa", forms: ["admission"] },
        { id: "11-2", word: "astronomy", ipa: "/əˈstrɑːnəmi/", pos: "n.", definition: "Astronomy is the study of stars and planets.", example: "He is interested in astronomy.", examples: ["She studies astronomy at university.", "A telescope is useful for astronomy."], vi: "thiên văn học", forms: ["astronomy"] },
        { id: "11-3", word: "blame", ipa: "/bleɪm/", pos: "n.", definition: "Blame is the feeling that someone is responsible for something bad.", example: "He took the blame for the broken window.", examples: ["Don't put the blame on me.", "She felt no blame toward him."], vi: "sự đổ lỗi, trách nhiệm", forms: ["blame"] },
        { id: "11-4", word: "chemistry", ipa: "/ˈkemɪstri/", pos: "n.", definition: "Chemistry is the science of substances and how they change.", example: "We did an experiment in chemistry class.", examples: ["She is good at chemistry.", "Chemistry explains how soap works."], vi: "hóa học", forms: ["chemistry"] },
        { id: "11-5", word: "despite", ipa: "/dɪˈspaɪt/", pos: "prep.", definition: "Despite means even though something is true.", example: "Despite the rain, we went for a walk.", examples: ["He won despite his injury.", "She smiled despite the bad news."], vi: "mặc dù", forms: ["despite"] },
        { id: "11-6", word: "dinosaur", ipa: "/ˈdaɪnəsɔːr/", pos: "n.", definition: "A dinosaur is a very large animal that lived millions of years ago.", example: "The children loved the dinosaur skeleton.", examples: ["Dinosaurs disappeared long ago.", "He has a toy dinosaur."], vi: "khủng long", forms: ["dinosaurs", "dinosaur"] },
        { id: "11-7", word: "exhibit", ipa: "/ɪɡˈzɪbɪt/", pos: "n.", definition: "An exhibit is something put on show in a museum.", example: "The exhibit shows old coins.", examples: ["We saw a new exhibit at the museum.", "The art exhibit opens today."], vi: "vật trưng bày, triển lãm", forms: ["exhibits", "exhibit"] },
        { id: "11-8", word: "fame", ipa: "/feɪm/", pos: "n.", definition: "Fame is the state of being known by many people.", example: "The singer found fame at a young age.", examples: ["Her fame spread across the country.", "He did not want fame."], vi: "sự nổi tiếng", forms: ["fame"] },
        { id: "11-9", word: "forecast", ipa: "/ˈfɔːrkæst/", pos: "n.", definition: "A forecast is a statement about what will happen, especially with the weather.", example: "The forecast says it will rain tomorrow.", examples: ["I checked the weather forecast.", "The forecast was wrong."], vi: "dự báo", forms: ["forecasts", "forecast"] },
        { id: "11-10", word: "genius", ipa: "/ˈdʒiːnjəs/", pos: "n.", definition: "A genius is a person with an extremely high level of intelligence or skill.", example: "Einstein was a genius.", examples: ["The boy is a math genius.", "It was a stroke of genius."], vi: "thiên tài", forms: ["geniuses", "genius"] },
        { id: "11-11", word: "gentle", ipa: "/ˈdʒentl/", pos: "adj.", definition: "A gentle person is kind and soft in the way they act.", example: "She spoke in a gentle voice.", examples: ["The dog is very gentle with kids.", "A gentle wind blew."], vi: "dịu dàng, nhẹ nhàng", forms: ["gentle"] },
        { id: "11-12", word: "geography", ipa: "/dʒiˈɑːɡrəfi/", pos: "n.", definition: "Geography is the study of the earth, its countries, and its land.", example: "Geography is my favorite subject.", examples: ["She is learning the geography of Asia.", "The teacher showed a map in geography class."], vi: "địa lý", forms: ["geography"] },
        { id: "11-13", word: "interfere", ipa: "/ˌɪntərˈfɪr/", pos: "v.", definition: "To interfere is to get involved in something that is not your business.", example: "Please don't interfere in our argument.", examples: ["Noise interferes with my sleep.", "He always interferes in other people's lives."], vi: "can thiệp, cản trở", forms: ["interfering", "interfered", "interferes", "interfere"] },
        { id: "11-14", word: "lightly", ipa: "/ˈlaɪtli/", pos: "adv.", definition: "To do something lightly is to do it in a soft, gentle way.", example: "She touched the baby lightly on the cheek.", examples: ["Snow fell lightly on the roof.", "He stepped lightly across the floor."], vi: "nhẹ nhàng", forms: ["lightly"] },
        { id: "11-15", word: "principal", ipa: "/ˈprɪnsəpl/", pos: "n.", definition: "A principal is the head of a school.", example: "The principal gave a speech at the school.", examples: ["The principal met the new teacher.", "She was called to the principal's office."], vi: "hiệu trưởng", forms: ["principals", "principal"] },
        { id: "11-16", word: "row", ipa: "/roʊ/", pos: "n.", definition: "A row is a line of people or things next to each other.", example: "They sat in the front row.", examples: ["There is a row of trees by the road.", "The books stand in a neat row."], vi: "hàng, dãy", forms: ["rows", "row"] },
        { id: "11-17", word: "shelf", ipa: "/ʃelf/", pos: "n.", definition: "A shelf is a flat board on a wall for holding things.", example: "He put the book back on the shelf.", examples: ["The top shelf is too high for me.", "There are toys on the shelf."], vi: "cái kệ, giá", forms: ["shelves", "shelf"] },
        { id: "11-18", word: "spite", ipa: "/spaɪt/", pos: "n.", definition: "In spite of means without being stopped by something.", example: "In spite of the cold, they played outside.", examples: ["She went to work in spite of her cold.", "He smiled in spite of his pain."], vi: "(in spite of) bất chấp", forms: ["spite"] },
        { id: "11-19", word: "super", ipa: "/ˈsuːpər/", pos: "adj.", definition: "Something super is excellent or very good.", example: "We had a super time at the party.", examples: ["That is a super idea.", "She did a super job."], vi: "tuyệt vời, siêu", forms: ["super"] },
        { id: "11-20", word: "wet", ipa: "/wet/", pos: "adj.", definition: "Something wet is covered with water or another liquid.", example: "His shoes were wet from the rain.", examples: ["The grass is wet this morning.", "She hung up her wet towel."], vi: "ướt", forms: ["wet"] }
      ]
    },

    /* ======================================================================
       UNIT 12
       ====================================================================== */
    {
      id: 12,
      title: "Unit 12",
      storyTitle: "The Little Bakery",
      story: `Rosa opened a little bakery in her neighborhood. She did not have much money, but she was generous with her customers. She insisted that every loaf be baked fresh. The kitchen was often a mess, with metal bowls on every table and beans soaking in water. A single candle burned on the counter at night.

One year, Rosa fell into debt. The price of her ingredients rose, and the quantity of customers began to decrease. She could not afford a new oven. It was not her fault, but she felt great stress. She decided to convert part of the shop into a small cafe. A friend gave her a fund to start.

A rival baker tried to oppose her plan and even wanted to sue her. Rosa did not feel passive. She stayed calm and used a monitor to watch the shop's sales. She did not suffer abuse from anyone. The cafe was a success, and the old loaf of bread became the shop's best treat.`,
      words: [
        { id: "12-1", word: "abuse", ipa: "/əˈbjuːs/", pos: "n.", definition: "Abuse is cruel treatment, or the wrong use of something.", example: "Child abuse is a serious crime.", examples: ["The abuse of power is dangerous.", "He suffered verbal abuse."], vi: "sự lạm dụng, ngược đãi", forms: ["abuse"] },
        { id: "12-2", word: "afford", ipa: "/əˈfɔːrd/", pos: "v.", definition: "To afford something is to have enough money to buy it.", example: "I cannot afford a new car.", examples: ["They can't afford a vacation.", "Can you afford to lose your job?"], vi: "đủ khả năng chi trả", forms: ["affording", "afforded", "affords", "afford"] },
        { id: "12-3", word: "bake", ipa: "/beɪk/", pos: "v.", definition: "To bake is to cook food in an oven.", example: "She baked a cake for his birthday.", examples: ["He bakes bread every morning.", "Bake the cookies for ten minutes."], vi: "nướng (bánh)", forms: ["baking", "baked", "bakes", "bake"] },
        { id: "12-4", word: "bean", ipa: "/biːn/", pos: "n.", definition: "A bean is a seed that is cooked and eaten as food.", example: "We had rice and beans for dinner.", examples: ["Coffee is made from beans.", "She planted green beans in the garden."], vi: "hạt đậu", forms: ["beans", "bean"] },
        { id: "12-5", word: "candle", ipa: "/ˈkændl/", pos: "n.", definition: "A candle is a stick of wax that gives light when it burns.", example: "She lit a candle on the table.", examples: ["The room was lit by a single candle.", "He blew out the candles on his cake."], vi: "ngọn nến", forms: ["candles", "candle"] },
        { id: "12-6", word: "convert", ipa: "/kənˈvɜːrt/", pos: "v.", definition: "To convert something is to change it into a different form.", example: "They converted the old barn into a house.", examples: ["Convert the dollars into euros.", "The machine converts sunlight into power."], vi: "chuyển đổi", forms: ["converting", "converted", "converts", "convert"] },
        { id: "12-7", word: "debt", ipa: "/det/", pos: "n.", definition: "A debt is money that you owe to someone.", example: "He is in debt to the bank.", examples: ["She paid off her debt.", "The country has a large debt."], vi: "khoản nợ", forms: ["debts", "debt"] },
        { id: "12-8", word: "decrease", ipa: "/dɪˈkriːs/", pos: "v.", definition: "To decrease is to become smaller in amount.", example: "The number of visitors decreased in winter.", examples: ["Prices decreased last month.", "The noise slowly decreased."], vi: "giảm đi", forms: ["decreasing", "decreased", "decreases", "decrease"] },
        { id: "12-9", word: "fault", ipa: "/fɔːlt/", pos: "n.", definition: "A fault is a mistake, or the responsibility for something bad.", example: "It was my fault that we were late.", examples: ["The accident was not his fault.", "The machine has a fault."], vi: "lỗi, khuyết điểm", forms: ["faults", "fault"] },
        { id: "12-10", word: "fund", ipa: "/fʌnd/", pos: "n.", definition: "A fund is an amount of money saved for a special purpose.", example: "They set up a fund for the poor.", examples: ["The school raised a fund for a new library.", "She started a fund for her studies."], vi: "quỹ", forms: ["funds", "fund"] },
        { id: "12-11", word: "generous", ipa: "/ˈdʒenərəs/", pos: "adj.", definition: "A generous person gives freely to others.", example: "He is generous with his time.", examples: ["She gave a generous gift.", "The generous man helped the poor."], vi: "hào phóng", forms: ["generous"] },
        { id: "12-12", word: "ingredient", ipa: "/ɪnˈɡriːdiənt/", pos: "n.", definition: "An ingredient is one of the foods used to make a dish.", example: "Flour is the main ingredient in bread.", examples: ["What ingredients do you need?", "Salt is a key ingredient."], vi: "nguyên liệu", forms: ["ingredients", "ingredient"] },
        { id: "12-13", word: "insist", ipa: "/ɪnˈsɪst/", pos: "v.", definition: "To insist is to say firmly that something must be done.", example: "She insisted on paying for dinner.", examples: ["He insisted that he was right.", "They insisted on staying."], vi: "khăng khăng, nhất quyết", forms: ["insisting", "insisted", "insists", "insist"] },
        { id: "12-14", word: "mess", ipa: "/mes/", pos: "n.", definition: "A mess is a place that is dirty or in disorder.", example: "His room is always a mess.", examples: ["The kids made a mess in the kitchen.", "Clean up this mess, please."], vi: "đống lộn xộn", forms: ["messes", "mess"] },
        { id: "12-15", word: "metal", ipa: "/ˈmetl/", pos: "n.", definition: "Metal is a hard material like iron or gold.", example: "The spoon is made of metal.", examples: ["Metal gets hot in the sun.", "The bridge is built of metal."], vi: "kim loại", forms: ["metals", "metal"] },
        { id: "12-16", word: "monitor", ipa: "/ˈmɑːnɪtər/", pos: "v.", definition: "To monitor something is to watch and check it carefully.", example: "Doctors monitor the patient's heart.", examples: ["The teacher monitored the test.", "They monitor the weather every day."], vi: "giám sát, theo dõi", forms: ["monitoring", "monitored", "monitors", "monitor"] },
        { id: "12-17", word: "oppose", ipa: "/əˈpoʊz/", pos: "v.", definition: "To oppose something is to disagree with it and try to stop it.", example: "Many people opposed the new law.", examples: ["She opposes the plan.", "The group opposed building the road."], vi: "phản đối", forms: ["opposing", "opposed", "opposes", "oppose"] },
        { id: "12-18", word: "passive", ipa: "/ˈpæsɪv/", pos: "adj.", definition: "A passive person does not act but lets things happen.", example: "He was passive during the meeting.", examples: ["Don't be so passive.", "She stayed passive and watched."], vi: "thụ động", forms: ["passive"] },
        { id: "12-19", word: "quantity", ipa: "/ˈkwɑːntəti/", pos: "n.", definition: "A quantity is an amount of something.", example: "A large quantity of rice was sold.", examples: ["The quantity of water is small.", "Quality is more important than quantity."], vi: "số lượng", forms: ["quantities", "quantity"] },
        { id: "12-20", word: "sue", ipa: "/suː/", pos: "v.", definition: "To sue someone is to take them to court to get money.", example: "He sued the company for damages.", examples: ["She threatened to sue the shop.", "They sued the driver after the crash."], vi: "kiện ra tòa", forms: ["suing", "sued", "sues", "sue"] }
      ]
    },

    /* ======================================================================
       UNIT 13
       ====================================================================== */
    {
      id: 13,
      title: "Unit 13",
      storyTitle: "The Tutor on the Peak",
      story: `Ben felt great anxiety as he watched the army of dark clouds move over the peak. He had planned a hike with his old tutor, a woman named Ines. She had once told him a tale about a fortune hidden on this mountain. "It could be a billion coins," she joked. "The potential is huge."

At the initial climb, the wind was intense. Ben wanted to quit, but Ines offered him a map as proof that the path was safe. "I guarantee it," she said. She was a woman of great pride, and she did not like to lend her tools. But she gave Ben her carving knife and told him to carve their names on a rock.

Near the top, a tiny wooden hut stood against the sky. Ines used the radio to consult the weather office. "In an emergency," she said, "never spin around in fear. Stay calm." Ben nodded and the two of them made it to the peak safely.`,
      words: [
        { id: "13-1", word: "anxiety", ipa: "/æŋˈzaɪəti/", pos: "n.", definition: "Anxiety is a feeling of worry or fear.", example: "She felt anxiety before the exam.", examples: ["His anxiety kept him awake.", "Music helps to lower anxiety."], vi: "sự lo âu", forms: ["anxiety"] },
        { id: "13-2", word: "army", ipa: "/ˈɑːrmi/", pos: "n.", definition: "An army is a large group of soldiers.", example: "The army marched through the town.", examples: ["He joined the army at eighteen.", "An army of ants crossed the road."], vi: "quân đội", forms: ["armies", "army"] },
        { id: "13-3", word: "billion", ipa: "/ˈbɪljən/", pos: "n.", definition: "A billion is one thousand million.", example: "The world has about eight billion people.", examples: ["The movie earned a billion dollars.", "A billion stars shine in the galaxy."], vi: "tỷ", forms: ["billions", "billion"] },
        { id: "13-4", word: "carve", ipa: "/kɑːrv/", pos: "v.", definition: "To carve is to cut a shape from wood or stone.", example: "He carved a bird from wood.", examples: ["She carved her name on a tree.", "They carve pumpkins for Halloween."], vi: "khắc, chạm", forms: ["carving", "carved", "carves", "carve"] },
        { id: "13-5", word: "consult", ipa: "/kənˈsʌlt/", pos: "v.", definition: "To consult someone is to ask them for advice.", example: "You should consult a doctor.", examples: ["He consulted a lawyer about the contract.", "I consulted a map to find the road."], vi: "tham khảo ý kiến", forms: ["consulting", "consulted", "consults", "consult"] },
        { id: "13-6", word: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", pos: "n.", definition: "An emergency is a sudden and dangerous situation that needs fast action.", example: "Call 911 in an emergency.", examples: ["The nurse stayed calm in the emergency.", "There was an emergency at the factory."], vi: "tình huống khẩn cấp", forms: ["emergencies", "emergency"] },
        { id: "13-7", word: "fortune", ipa: "/ˈfɔːrtʃən/", pos: "n.", definition: "A fortune is a very large amount of money.", example: "He made a fortune selling cars.", examples: ["She spent a fortune on clothes.", "The old man left his fortune to his niece."], vi: "gia tài, vận may", forms: ["fortunes", "fortune"] },
        { id: "13-8", word: "guarantee", ipa: "/ˌɡærənˈtiː/", pos: "v.", definition: "To guarantee something is to promise that it will happen.", example: "The shop guarantees the quality of its products.", examples: ["I can't guarantee that he will come.", "The watch has a one-year guarantee."], vi: "bảo đảm, cam đoan", forms: ["guaranteeing", "guaranteed", "guarantees", "guarantee"] },
        { id: "13-9", word: "hike", ipa: "/haɪk/", pos: "n.", definition: "A hike is a long walk, usually in the country or mountains.", example: "We went on a hike last weekend.", examples: ["The hike took four hours.", "They love a hike in the hills."], vi: "chuyến đi bộ đường dài", forms: ["hikes", "hike"] },
        { id: "13-10", word: "initial", ipa: "/ɪˈnɪʃl/", pos: "adj.", definition: "Initial means happening at the beginning.", example: "My initial idea was to leave early.", examples: ["The initial cost was low.", "Her initial reaction was shock."], vi: "ban đầu", forms: ["initial"] },
        { id: "13-11", word: "intense", ipa: "/ɪnˈtens/", pos: "adj.", definition: "Something intense is very strong.", example: "The heat was intense.", examples: ["She felt intense pain.", "He had an intense look in his eyes."], vi: "mãnh liệt, dữ dội", forms: ["intense"] },
        { id: "13-12", word: "lend", ipa: "/lend/", pos: "v.", definition: "To lend something is to let someone use it for a short time.", example: "Can you lend me a pen?", examples: ["He lent her some money.", "She never lends her car."], vi: "cho mượn", forms: ["lending", "lent", "lends", "lend"] },
        { id: "13-13", word: "peak", ipa: "/piːk/", pos: "n.", definition: "A peak is the top of a mountain.", example: "They reached the peak at noon.", examples: ["Snow covered the peak.", "The peak is higher than the clouds."], vi: "đỉnh núi", forms: ["peaks", "peak"] },
        { id: "13-14", word: "potential", ipa: "/pəˈtenʃl/", pos: "n.", definition: "Potential is the ability to become something in the future.", example: "She has great potential as a singer.", examples: ["The plan has the potential to succeed.", "He showed his potential in the race."], vi: "tiềm năng", forms: ["potential"] },
        { id: "13-15", word: "pride", ipa: "/praɪd/", pos: "n.", definition: "Pride is a feeling of satisfaction in your work or family.", example: "He felt pride when his son won.", examples: ["She took pride in her garden.", "His pride would not let him ask for help."], vi: "niềm tự hào", forms: ["pride"] },
        { id: "13-16", word: "proof", ipa: "/pruːf/", pos: "n.", definition: "Proof is facts that show something is true.", example: "Do you have proof of your age?", examples: ["The photo is proof that he was there.", "I need proof before I believe it."], vi: "bằng chứng", forms: ["proof"] },
        { id: "13-17", word: "quit", ipa: "/kwɪt/", pos: "v.", definition: "To quit is to stop doing something.", example: "He quit his job last month.", examples: ["Don't quit now!", "She quit smoking."], vi: "bỏ, từ bỏ", forms: ["quitting", "quit", "quits"] },
        { id: "13-18", word: "spin", ipa: "/spɪn/", pos: "v.", definition: "To spin is to turn around quickly.", example: "The dancer spun around.", examples: ["The wheel spins fast.", "He spun the top on the table."], vi: "xoay tròn", forms: ["spinning", "spun", "spins", "spin"] },
        { id: "13-19", word: "tiny", ipa: "/ˈtaɪni/", pos: "adj.", definition: "Something tiny is extremely small.", example: "A tiny insect landed on the leaf.", examples: ["She lives in a tiny apartment.", "He wrote in tiny letters."], vi: "nhỏ xíu", forms: ["tiny"] },
        { id: "13-20", word: "tutor", ipa: "/ˈtuːtər/", pos: "n.", definition: "A tutor is a person who teaches one student or a small group.", example: "She hired a tutor to help with math.", examples: ["The tutor comes every Tuesday.", "His tutor taught him French."], vi: "gia sư", forms: ["tutors", "tutor"] }
      ]
    },

    /* ======================================================================
       UNIT 14
       ====================================================================== */
    {
      id: 14,
      title: "Unit 14",
      storyTitle: "The Dormitory Secretary",
      story: `Lena lived in a dormitory and worked part-time as a secretary at the science building. She had a lot of talent for physics, but it was not always apparent to others. It was obvious to her only after a very severe test. The professor told her to calculate the speed of a falling ball. It was a hard problem, and she almost wanted to ignore it.

The test left her exhausted. A friend dropped by to chat and remind her about the greenhouse project. "You must commit to your thesis," he said. Lena wore her uniform and walked to the lab. In the greenhouse, she saw a blind man touching the plants. He asked her to describe the colors. She tried to compose a clear answer. "A portion of them are red," she said.

The man smiled. "You have the vision to be a great teacher." Lena thanked him and went back to work. She finished her thesis a month later.`,
      words: [
        { id: "14-1", word: "apparent", ipa: "/əˈpærənt/", pos: "adj.", definition: "Something apparent is clear and easy to see or understand.", example: "It was apparent that she was tired.", examples: ["His fear was apparent to everyone.", "The reason became apparent later."], vi: "rõ ràng, hiển nhiên", forms: ["apparent"] },
        { id: "14-2", word: "blind", ipa: "/blaɪnd/", pos: "adj.", definition: "A blind person cannot see.", example: "The blind man walked with a stick.", examples: ["She was born blind.", "He used a dog to help him since he is blind."], vi: "mù", forms: ["blind"] },
        { id: "14-3", word: "calculate", ipa: "/ˈkælkjuleɪt/", pos: "v.", definition: "To calculate is to find an answer using numbers.", example: "She calculated the cost of the trip.", examples: ["Can you calculate the area of this room?", "He calculates the bills each month."], vi: "tính toán", forms: ["calculating", "calculated", "calculates", "calculate"] },
        { id: "14-4", word: "chat", ipa: "/tʃæt/", pos: "v.", definition: "To chat is to talk in a friendly way.", example: "They chatted for an hour on the phone.", examples: ["We like to chat over coffee.", "She chats with her neighbor every day."], vi: "trò chuyện", forms: ["chatting", "chatted", "chats", "chat"] },
        { id: "14-5", word: "commit", ipa: "/kəˈmɪt/", pos: "v.", definition: "To commit to something is to promise to do it.", example: "He committed himself to finishing the work.", examples: ["She is committed to her team.", "Don't commit if you can't keep the promise."], vi: "cam kết", forms: ["committing", "committed", "commits", "commit"] },
        { id: "14-6", word: "compose", ipa: "/kəmˈpoʊz/", pos: "v.", definition: "To compose is to write music or a piece of writing.", example: "She composed a song for her mother.", examples: ["He composed a letter to the editor.", "Mozart composed many pieces."], vi: "soạn, sáng tác", forms: ["composing", "composed", "composes", "compose"] },
        { id: "14-7", word: "dormitory", ipa: "/ˈdɔːrmətɔːri/", pos: "n.", definition: "A dormitory is a building where students live at a school.", example: "The students live in a dormitory.", examples: ["My room in the dormitory is small.", "The dormitory closes at ten."], vi: "ký túc xá", forms: ["dormitories", "dormitory"] },
        { id: "14-8", word: "exhaust", ipa: "/ɪɡˈzɔːst/", pos: "v.", definition: "To exhaust someone is to make them very tired.", example: "The long walk exhausted him.", examples: ["The heat exhausted the runners.", "I was exhausted after work."], vi: "làm kiệt sức", forms: ["exhausting", "exhausted", "exhausts", "exhaust"] },
        { id: "14-9", word: "greenhouse", ipa: "/ˈɡriːnhaʊs/", pos: "n.", definition: "A greenhouse is a glass building for growing plants.", example: "Tomatoes grow in the greenhouse.", examples: ["The greenhouse is warm all year.", "She works in a flower greenhouse."], vi: "nhà kính", forms: ["greenhouses", "greenhouse"] },
        { id: "14-10", word: "ignore", ipa: "/ɪɡˈnɔːr/", pos: "v.", definition: "To ignore something is to pay no attention to it.", example: "He ignored the warning.", examples: ["Don't ignore your teacher.", "She ignored the noise and kept reading."], vi: "phớt lờ", forms: ["ignoring", "ignored", "ignores", "ignore"] },
        { id: "14-11", word: "obvious", ipa: "/ˈɑːbviəs/", pos: "adj.", definition: "Something obvious is easy to see or understand.", example: "The answer was obvious.", examples: ["It is obvious that he is lying.", "There was an obvious mistake."], vi: "rõ ràng, hiển nhiên", forms: ["obvious"] },
        { id: "14-12", word: "physics", ipa: "/ˈfɪzɪks/", pos: "n.", definition: "Physics is the science of energy, force, and matter.", example: "She studies physics at college.", examples: ["Physics explains why things fall.", "He is a teacher of physics."], vi: "vật lý", forms: ["physics"] },
        { id: "14-13", word: "portion", ipa: "/ˈpɔːrʃn/", pos: "n.", definition: "A portion is a part of something bigger.", example: "She ate a small portion of rice.", examples: ["A large portion of the money was lost.", "He saved a portion of his salary."], vi: "phần", forms: ["portions", "portion"] },
        { id: "14-14", word: "remind", ipa: "/rɪˈmaɪnd/", pos: "v.", definition: "To remind someone is to help them remember.", example: "Please remind me to call him.", examples: ["The song reminds me of home.", "She reminded him about the test."], vi: "nhắc nhở", forms: ["reminding", "reminded", "reminds", "remind"] },
        { id: "14-15", word: "secretary", ipa: "/ˈsekrəteri/", pos: "n.", definition: "A secretary is a person who does office work such as typing and answering phones.", example: "The secretary answered the phone.", examples: ["She works as a secretary for the boss.", "The secretary booked the meeting."], vi: "thư ký", forms: ["secretaries", "secretary"] },
        { id: "14-16", word: "severe", ipa: "/sɪˈvɪr/", pos: "adj.", definition: "Something severe is very bad or serious.", example: "She had a severe headache.", examples: ["The storm caused severe damage.", "A severe winter hit the region."], vi: "nghiêm trọng, khắc nghiệt", forms: ["severe"] },
        { id: "14-17", word: "talent", ipa: "/ˈtælənt/", pos: "n.", definition: "A talent is a natural ability to do something well.", example: "She has a talent for painting.", examples: ["He showed great talent as a boy.", "The show is for young talent."], vi: "tài năng", forms: ["talents", "talent"] },
        { id: "14-18", word: "thesis", ipa: "/ˈθiːsɪs/", pos: "n.", definition: "A thesis is a long piece of writing done for a university degree.", example: "He wrote his thesis on climate change.", examples: ["She finished her thesis in May.", "The thesis took two years."], vi: "luận văn", forms: ["theses", "thesis"] },
        { id: "14-19", word: "uniform", ipa: "/ˈjuːnɪfɔːrm/", pos: "n.", definition: "A uniform is the special clothes worn by people in a school or job.", example: "The students wear a blue uniform.", examples: ["The nurse wore a white uniform.", "He put on his police uniform."], vi: "đồng phục", forms: ["uniforms", "uniform"] },
        { id: "14-20", word: "vision", ipa: "/ˈvɪʒn/", pos: "n.", definition: "Vision is the ability to see, or a clear idea of the future.", example: "He lost his vision in an accident.", examples: ["The leader had a vision of a better town.", "Her vision is poor without glasses."], vi: "thị lực, tầm nhìn", forms: ["vision"] }
      ]
    },

    /* ======================================================================
       UNIT 15
       ====================================================================== */
    {
      id: 15,
      title: "Unit 15",
      storyTitle: "The Unique Restaurant",
      story: `A cook named Marco wanted to open a unique restaurant. His boss at the old kitchen liked his ideas, and a committee of local leaders agreed to help. They signed a contract and found a foundation to give him funds. A crew of workers came to dig the ground, and soon the mud was everywhere.

Marco wanted to devote himself to his work. He planned to dine with guests from every generation. Each dish had a special flavor, and Marco liked to layer fresh vegetables on top of the rice. He knew how to handle the oven and make a smooth sauce. Rich soil in his garden helped him grow his own herbs, which absorb the sun all summer.

On the first night, he decided to donate a part of the income to a charity. He wanted to elevate the whole neighborhood. He asked each guest to double the number of friends they brought, and the little place was full.`,
      words: [
        { id: "15-1", word: "absorb", ipa: "/əbˈzɔːrb/", pos: "v.", definition: "To absorb something is to take it in.", example: "A sponge absorbs water.", examples: ["Plants absorb sunlight.", "She absorbed all the new information."], vi: "hấp thụ", forms: ["absorbing", "absorbed", "absorbs", "absorb"] },
        { id: "15-2", word: "boss", ipa: "/bɔːs/", pos: "n.", definition: "A boss is the person in charge at work.", example: "My boss gave me a day off.", examples: ["The boss called a meeting.", "She is a kind boss."], vi: "ông chủ, sếp", forms: ["bosses", "boss"] },
        { id: "15-3", word: "committee", ipa: "/kəˈmɪti/", pos: "n.", definition: "A committee is a group of people chosen to make decisions together.", example: "The committee chose a new leader.", examples: ["She joined the school committee.", "The committee meets every month."], vi: "ủy ban", forms: ["committees", "committee"] },
        { id: "15-4", word: "contract", ipa: "/ˈkɑːntrækt/", pos: "n.", definition: "A contract is a written agreement that is legally binding.", example: "He signed a contract for the job.", examples: ["Read the contract before you sign it.", "The contract lasts for two years."], vi: "hợp đồng", forms: ["contracts", "contract"] },
        { id: "15-5", word: "crew", ipa: "/kruː/", pos: "n.", definition: "A crew is a group of people who work together, such as on a ship.", example: "The crew prepared the boat.", examples: ["The film crew arrived early.", "The ship's crew was tired."], vi: "đội, thủy thủ đoàn", forms: ["crew"] },
        { id: "15-6", word: "devote", ipa: "/dɪˈvoʊt/", pos: "v.", definition: "To devote yourself to something is to give it a lot of time and effort.", example: "She devoted her life to teaching.", examples: ["He devotes every weekend to his family.", "They devoted years to the project."], vi: "cống hiến, dành hết", forms: ["devoting", "devoted", "devotes", "devote"] },
        { id: "15-7", word: "dig", ipa: "/dɪɡ/", pos: "v.", definition: "To dig is to make a hole in the ground.", example: "The workers dug a deep hole.", examples: ["The dog dug in the yard.", "They are digging a well."], vi: "đào", forms: ["digging", "dug", "digs", "dig"] },
        { id: "15-8", word: "dine", ipa: "/daɪn/", pos: "v.", definition: "To dine is to eat dinner.", example: "They dined at a nice restaurant.", examples: ["We will dine at eight.", "She dines with her family every Sunday."], vi: "dùng bữa", forms: ["dining", "dined", "dines", "dine"] },
        { id: "15-9", word: "donate", ipa: "/ˈdoʊneɪt/", pos: "v.", definition: "To donate is to give something to help others.", example: "She donated her old clothes to a charity.", examples: ["He donated money to the school.", "People donate blood to the hospital."], vi: "quyên góp", forms: ["donating", "donated", "donates", "donate"] },
        { id: "15-10", word: "double", ipa: "/ˈdʌbl/", pos: "v.", definition: "To double something is to make it twice as big.", example: "The company doubled its profits.", examples: ["Double the recipe for ten people.", "The price doubled in a year."], vi: "nhân đôi", forms: ["doubling", "doubled", "doubles", "double"] },
        { id: "15-11", word: "elevate", ipa: "/ˈelɪveɪt/", pos: "v.", definition: "To elevate something is to raise it to a higher level.", example: "They elevated the road above the river.", examples: ["Good food can elevate your mood.", "He was elevated to a higher rank."], vi: "nâng lên", forms: ["elevating", "elevated", "elevates", "elevate"] },
        { id: "15-12", word: "flavor", ipa: "/ˈfleɪvər/", pos: "n.", definition: "Flavor is the taste of food or drink.", example: "This soup has a rich flavor.", examples: ["What flavor of ice cream do you want?", "Lemon adds flavor to the fish."], vi: "hương vị", forms: ["flavors", "flavor"] },
        { id: "15-13", word: "foundation", ipa: "/faʊnˈdeɪʃn/", pos: "n.", definition: "A foundation is an organization that gives money for a good cause, or the base of a building.", example: "A foundation paid for the new school.", examples: ["The house has a strong foundation.", "She works for a charity foundation."], vi: "quỹ, nền móng", forms: ["foundations", "foundation"] },
        { id: "15-14", word: "generation", ipa: "/ˌdʒenəˈreɪʃn/", pos: "n.", definition: "A generation is all the people born around the same time.", example: "Three generations live in this house.", examples: ["My generation grew up with phones.", "The song is loved by every generation."], vi: "thế hệ", forms: ["generations", "generation"] },
        { id: "15-15", word: "handle", ipa: "/ˈhændl/", pos: "v.", definition: "To handle something is to deal with it or hold it.", example: "She handled the problem well.", examples: ["Handle the glass with care.", "He can handle a lot of stress."], vi: "xử lý, cầm nắm", forms: ["handling", "handled", "handles", "handle"] },
        { id: "15-16", word: "layer", ipa: "/ˈleɪər/", pos: "n.", definition: "A layer is a flat amount of something that covers a surface.", example: "A thin layer of snow covered the ground.", examples: ["The cake has three layers.", "He put on another layer of paint."], vi: "lớp", forms: ["layers", "layer"] },
        { id: "15-17", word: "mud", ipa: "/mʌd/", pos: "n.", definition: "Mud is wet, soft earth.", example: "The children played in the mud.", examples: ["Her boots were full of mud.", "The car got stuck in the mud."], vi: "bùn", forms: ["mud"] },
        { id: "15-18", word: "smooth", ipa: "/smuːð/", pos: "adj.", definition: "Something smooth has an even surface without bumps.", example: "The table is smooth and flat.", examples: ["The road was smooth.", "She has smooth skin."], vi: "mịn, trơn tru", forms: ["smooth"] },
        { id: "15-19", word: "soil", ipa: "/sɔɪl/", pos: "n.", definition: "Soil is the top layer of earth where plants grow.", example: "The soil in the valley is rich.", examples: ["Plants need good soil.", "He dug the soil with a spade."], vi: "đất", forms: ["soil"] },
        { id: "15-20", word: "unique", ipa: "/juˈniːk/", pos: "adj.", definition: "Something unique is the only one of its kind.", example: "Every snowflake is unique.", examples: ["She has a unique style.", "It is a unique chance."], vi: "độc đáo, duy nhất", forms: ["unique"] }
      ]
    },

    /* ======================================================================
       UNIT 16
       ====================================================================== */
    {
      id: 16,
      title: "Unit 16",
      storyTitle: "The Prince's Chamber",
      story: `Mira was a shy girl who worked as a servant in an old castle. One winter night, the castle began to freeze, and the young prince fell ill with a high fever. The royal doctor said it was the flu. Mira carried warm water to the prince's chamber and stayed beside his bed. He was too weak to speak, so he used a small gesture to ask for another blanket. Mira did not stare at him. She simply helped.

By morning, the prince began to recover. Then the king arrived and interrupted their quiet talk. He held a document with a gold seal. "The doctor tells me you saved my son," he said. Mira could not deny that she had stayed awake all night. The king emphasized that the kingdom would never forget her kindness.

On the wall hung a painting of the king's mother, and the king saw a likeness between her and Mira. Moreover, he had noticed that Mira was rational and calm in a crisis. Thus he made her the prince's helper. At first the news was a shock, and Mira had to see her life from a new perspective. "I will always rely on you," the prince said. Their friendship would last for many years.`,
      words: [
        { id: "16-1", word: "chamber", ipa: "/ˈtʃeɪmbər/", pos: "n.", definition: "A chamber is an old-fashioned word for a bedroom.", example: "The girl was tired, so she went to her chamber to rest.", examples: ["The king's chamber was at the top of the tower.", "A servant knocked on the door of the chamber."], vi: "phòng ngủ (cổ), buồng", forms: ["chambers", "chamber"] },
        { id: "16-2", word: "deny", ipa: "/dɪˈnaɪ/", pos: "v.", definition: "To deny something is to say that it is not true.", example: "The boy denied that he had broken the window.", examples: ["She cannot deny that she was late.", "He denies taking the money."], vi: "phủ nhận, chối", forms: ["denying", "denied", "denies", "deny"] },
        { id: "16-3", word: "document", ipa: "/ˈdɑːkjumənt/", pos: "n.", definition: "A document is an official paper with important information on it.", example: "He showed an official document that proved his age.", examples: ["Please sign this document before you leave.", "She kept all her documents in a blue folder."], vi: "tài liệu, văn bản", forms: ["documents", "document"] },
        { id: "16-4", word: "emphasize", ipa: "/ˈemfəsaɪz/", pos: "v.", definition: "To emphasize something is to show that it is especially important.", example: "The teacher emphasized the rules before the exam began.", examples: ["The speaker emphasized the need for safety.", "She emphasizes good manners with her children."], vi: "nhấn mạnh", forms: ["emphasizing", "emphasized", "emphasizes", "emphasize"] },
        { id: "16-5", word: "fever", ipa: "/ˈfiːvər/", pos: "n.", definition: "A fever is a body temperature that is higher than normal because of illness.", example: "Lydia had a fever, so she stayed home from school.", examples: ["The baby has a fever and needs rest.", "A cold drink may help lower a fever."], vi: "cơn sốt", forms: ["fevers", "fever"] },
        { id: "16-6", word: "flu", ipa: "/fluː/", pos: "n.", definition: "The flu is an illness that causes fever, aches, and tiredness.", example: "He stayed in bed for a week because he had the flu.", examples: ["Many students caught the flu this winter.", "She got a shot to protect herself from the flu."], vi: "bệnh cúm", forms: ["flu"] },
        { id: "16-7", word: "freeze", ipa: "/friːz/", pos: "v.", definition: "To freeze is to become very cold or turn into ice.", example: "Water will freeze if the temperature drops below zero.", examples: ["The lake freezes every January.", "Put on a hat, or your ears will freeze."], vi: "đóng băng, lạnh cóng", forms: ["freezing", "froze", "frozen", "freezes", "freeze"] },
        { id: "16-8", word: "gesture", ipa: "/ˈdʒestʃər/", pos: "n.", definition: "A gesture is a movement of the hand or body that shows a meaning.", example: "He made a gesture to tell the driver to stop.", examples: ["A wave is a friendly gesture.", "She used gestures because she did not know the word."], vi: "cử chỉ, điệu bộ", forms: ["gestures", "gesture"] },
        { id: "16-9", word: "interrupt", ipa: "/ˌɪntəˈrʌpt/", pos: "v.", definition: "To interrupt is to stop someone while they are talking or working.", example: "Please do not interrupt me while I am speaking.", examples: ["A loud noise interrupted the lesson.", "He interrupts his sister all the time."], vi: "ngắt lời, làm gián đoạn", forms: ["interrupting", "interrupted", "interrupts", "interrupt"] },
        { id: "16-10", word: "last", ipa: "/læst/", pos: "v.", definition: "To last is to continue for a certain length of time.", example: "The movie lasted for almost three hours.", examples: ["The storm will last until midnight.", "These shoes lasted for five years."], vi: "kéo dài, tồn tại", forms: ["lasting", "lasted", "lasts", "last"] },
        { id: "16-11", word: "likeness", ipa: "/ˈlaɪknəs/", pos: "n.", definition: "Likeness is the way two people or things look alike.", example: "There is a strong likeness between the twins.", examples: ["The painting is a good likeness of my grandfather.", "I see a likeness between you and your uncle."], vi: "sự giống nhau", forms: ["likenesses", "likeness"] },
        { id: "16-12", word: "moreover", ipa: "/mɔːrˈoʊvər/", pos: "adv.", definition: "Moreover is a word used to add more information to what you just said.", example: "The room is cheap. Moreover, it is very clean.", examples: ["He is kind. Moreover, he is very funny.", "The test was easy. Moreover, it was short."], vi: "hơn nữa, ngoài ra", forms: ["moreover"] },
        { id: "16-13", word: "perspective", ipa: "/pərˈspektɪv/", pos: "n.", definition: "A perspective is a particular way of thinking about something.", example: "Traveling abroad gave him a new perspective on life.", examples: ["From my perspective, the plan is too risky.", "Try to see the problem from her perspective."], vi: "quan điểm, góc nhìn", forms: ["perspectives", "perspective"] },
        { id: "16-14", word: "rational", ipa: "/ˈræʃnəl/", pos: "adj.", definition: "When a person or an idea is rational, it is based on clear and sensible thinking.", example: "It is hard to be rational when you are afraid.", examples: ["She made a rational choice and saved her money.", "There is a rational reason for his decision."], vi: "hợp lý, có lý trí", forms: ["rational"] },
        { id: "16-15", word: "recover", ipa: "/rɪˈkʌvər/", pos: "v.", definition: "To recover is to become healthy or normal again after a problem.", example: "It took her two weeks to recover from the flu.", examples: ["The town is slowly recovering from the flood.", "He recovered quickly after the operation."], vi: "hồi phục, khỏi bệnh", forms: ["recovering", "recovered", "recovers", "recover"] },
        { id: "16-16", word: "rely", ipa: "/rɪˈlaɪ/", pos: "v.", definition: "To rely on someone is to trust that person to help you.", example: "Children rely on their parents for food and care.", examples: ["You can rely on me to keep the secret.", "He relies on a bus to get to work."], vi: "dựa vào, tin cậy", forms: ["relying", "relied", "relies", "rely"] },
        { id: "16-17", word: "shock", ipa: "/ʃɑːk/", pos: "v.", definition: "To shock someone is to surprise them in a strong and upsetting way.", example: "The bad news shocked everyone in the room.", examples: ["Her sudden anger shocked her friends.", "I was shocked by how expensive the ticket was."], vi: "gây sốc, làm kinh ngạc", forms: ["shocking", "shocked", "shocks", "shock"] },
        { id: "16-18", word: "shy", ipa: "/ʃaɪ/", pos: "adj.", definition: "When people are shy, they feel nervous around other people.", example: "The shy boy hid behind his mother.", examples: ["She is too shy to speak in class.", "My cat is shy with strangers."], vi: "nhút nhát, e thẹn", forms: ["shy"] },
        { id: "16-19", word: "stare", ipa: "/ster/", pos: "v.", definition: "To stare is to look at something for a long time without moving your eyes.", example: "The children stared at the huge elephant.", examples: ["It is rude to stare at strangers.", "He stared out of the window for an hour."], vi: "nhìn chằm chằm", forms: ["staring", "stared", "stares", "stare"] },
        { id: "16-20", word: "thus", ipa: "/ðʌs/", pos: "adv.", definition: "Thus means as a result of what has just been said.", example: "It was raining hard. Thus, we stayed inside.", examples: ["He studied hard and thus passed the test.", "The road was closed, and thus we took another route."], vi: "do đó, vì vậy", forms: ["thus"] }
      ]
    },

    /* ======================================================================
       UNIT 17
       ====================================================================== */
    {
      id: 17,
      title: "Unit 17",
      storyTitle: "The Carriage Mechanic",
      story: `Tom was a junior mechanic in a small town. His aim was to invent a carriage that could move without horses. Every day he did hard labor in his workshop, and every evening he had to commute two hours by train to reach his home. His friends laughed at him. One of them even made a bet that Tom would fail.

Tom did not give up. He attached a small engine to an old carriage, a classic model from his grandfather's time. The cost was a big expense for a poor worker, but he believed in his idea. He wrote a formal letter to the mayor and asked for a test on the hill.

The mayor came to confirm that the carriage could really move. Many people criticize new ideas, and the crowd was no different. Opinions differed, and some said it was too dangerous. Tom climbed to the height of the hill and gave a signal with a red flag. Then he shifted a lever, and the carriage rolled forward. The crowd was silent, and then it cheered. "That was the prime moment of my life," Tom said. The mayor shook his hand, and Tom thanked him with a sincere smile.`,
      words: [
        { id: "17-1", word: "aim", ipa: "/eɪm/", pos: "n.", definition: "An aim is something that you hope to do or achieve.", example: "My aim is to speak English well.", examples: ["The aim of the game is to score points.", "Her main aim was to finish the race."], vi: "mục tiêu, mục đích", forms: ["aims", "aim"] },
        { id: "17-2", word: "attach", ipa: "/əˈtætʃ/", pos: "v.", definition: "To attach something is to fix it to another thing.", example: "He attached a note to the gift.", examples: ["Please attach the photo to your email.", "She attached the rope to a tree."], vi: "gắn, đính kèm", forms: ["attaching", "attached", "attaches", "attach"] },
        { id: "17-3", word: "bet", ipa: "/bet/", pos: "n.", definition: "A bet is an agreement to win or lose money based on what happens.", example: "I made a bet with my brother about the game.", examples: ["He lost a bet and had to buy lunch.", "They made a bet on who would arrive first."], vi: "vụ cá cược", forms: ["bets", "bet"] },
        { id: "17-4", word: "carriage", ipa: "/ˈkærɪdʒ/", pos: "n.", definition: "A carriage is a vehicle with wheels that is pulled by horses.", example: "The queen rode in a golden carriage.", examples: ["The old carriage stopped in front of the inn.", "Two horses pulled the carriage up the hill."], vi: "xe ngựa", forms: ["carriages", "carriage"] },
        { id: "17-5", word: "classic", ipa: "/ˈklæsɪk/", pos: "adj.", definition: "Something classic is of high quality and stays popular for a long time.", example: "She wore a classic black dress to the party.", examples: ["That is a classic film that people still love.", "He drives a classic car from the 1960s."], vi: "kinh điển, cổ điển", forms: ["classic"] },
        { id: "17-6", word: "commute", ipa: "/kəˈmjuːt/", pos: "v.", definition: "To commute is to travel regularly between your home and your work.", example: "He commutes to the city by train every day.", examples: ["Many people commute for more than an hour.", "She commuted by bicycle last summer."], vi: "đi làm hằng ngày (đi lại)", forms: ["commuting", "commuted", "commutes", "commute"] },
        { id: "17-7", word: "confirm", ipa: "/kənˈfɜːrm/", pos: "v.", definition: "To confirm something is to say or show that it is true.", example: "Please confirm your seat by calling the hotel.", examples: ["The doctor confirmed that he had a broken arm.", "Can you confirm the time of the meeting?"], vi: "xác nhận", forms: ["confirming", "confirmed", "confirms", "confirm"] },
        { id: "17-8", word: "criticize", ipa: "/ˈkrɪtɪsaɪz/", pos: "v.", definition: "To criticize someone is to say what is wrong with them or their work.", example: "It is easy to criticize, but harder to help.", examples: ["The teacher criticized the messy homework.", "Don't criticize her for trying."], vi: "chỉ trích, phê bình", forms: ["criticizing", "criticized", "criticizes", "criticize"] },
        { id: "17-9", word: "differ", ipa: "/ˈdɪfər/", pos: "v.", definition: "To differ is to be unlike something or someone else.", example: "My opinion differs from yours.", examples: ["The twins differ in their taste in music.", "Prices differ from shop to shop."], vi: "khác nhau", forms: ["differing", "differed", "differs", "differ"] },
        { id: "17-10", word: "expense", ipa: "/ɪkˈspens/", pos: "n.", definition: "An expense is the money that you spend on something.", example: "A new car is a large expense.", examples: ["Rent is her biggest monthly expense.", "They saved money by cutting every extra expense."], vi: "chi phí, khoản chi", forms: ["expenses", "expense"] },
        { id: "17-11", word: "formal", ipa: "/ˈfɔːrməl/", pos: "adj.", definition: "Something formal is serious, polite, and follows the usual rules.", example: "He wore a formal suit to the interview.", examples: ["She wrote a formal letter to the school.", "It was a formal dinner for the guests."], vi: "trang trọng, chính thức", forms: ["formal"] },
        { id: "17-12", word: "height", ipa: "/haɪt/", pos: "n.", definition: "Height is how tall something is or how high it is above the ground.", example: "The height of the tower is fifty meters.", examples: ["Her height is one meter seventy.", "The plane flew at a great height."], vi: "chiều cao, độ cao", forms: ["heights", "height"] },
        { id: "17-13", word: "invent", ipa: "/ɪnˈvent/", pos: "v.", definition: "To invent something is to make or think of it for the first time.", example: "Who invented the telephone?", examples: ["She invented a toy for her little brother.", "Scientists are inventing new ways to save energy."], vi: "phát minh, sáng chế", forms: ["inventing", "invented", "invents", "invent"] },
        { id: "17-14", word: "junior", ipa: "/ˈdʒuːnjər/", pos: "adj.", definition: "A junior person has a lower rank or is younger than others.", example: "He is a junior member of the team.", examples: ["She works as a junior doctor at the hospital.", "The junior players practice after school."], vi: "cấp thấp, trẻ hơn", forms: ["junior"] },
        { id: "17-15", word: "labor", ipa: "/ˈleɪbər/", pos: "n.", definition: "Labor is hard physical work.", example: "The farmers spent long hours of labor in the fields.", examples: ["Building the road took years of labor.", "Hard labor made his hands rough."], vi: "lao động, công việc nặng nhọc", forms: ["labor"] },
        { id: "17-16", word: "mechanic", ipa: "/məˈkænɪk/", pos: "n.", definition: "A mechanic is a person who repairs machines, especially cars.", example: "The mechanic fixed our car in one hour.", examples: ["My uncle is a mechanic at a big garage.", "Ask the mechanic to check the brakes."], vi: "thợ máy", forms: ["mechanics", "mechanic"] },
        { id: "17-17", word: "prime", ipa: "/praɪm/", pos: "adj.", definition: "Prime means the most important or the best in quality.", example: "Her prime goal is to finish school.", examples: ["The shop is in a prime location downtown.", "He is a prime example of a hard worker."], vi: "chính, hàng đầu, tốt nhất", forms: ["prime"] },
        { id: "17-18", word: "shift", ipa: "/ʃɪft/", pos: "v.", definition: "To shift is to move or change from one place or position to another.", example: "He shifted the heavy box to the corner.", examples: ["The wind shifted and it became colder.", "She shifted in her seat to get comfortable."], vi: "dịch chuyển, thay đổi", forms: ["shifting", "shifted", "shifts", "shift"] },
        { id: "17-19", word: "signal", ipa: "/ˈsɪɡnəl/", pos: "n.", definition: "A signal is a sound, light, or movement that gives information.", example: "The green light is the signal to go.", examples: ["He gave a signal with his hand.", "My phone has no signal in the mountains."], vi: "tín hiệu, dấu hiệu", forms: ["signals", "signal"] },
        { id: "17-20", word: "sincere", ipa: "/sɪnˈsɪr/", pos: "adj.", definition: "A sincere person means what they say and is honest.", example: "She gave him a sincere thank-you.", examples: ["He made a sincere apology to his friend.", "I am sincere when I say I like your song."], vi: "chân thành", forms: ["sincere"] }
      ]
    },

    /* ======================================================================
       UNIT 18
       ====================================================================== */
    {
      id: 18,
      title: "Unit 18",
      storyTitle: "The Monk's Diary",
      story: `Brother Lucas was a young monk who lived in a quiet mountain monastery. He had the ability to see beauty in simple things, and every night he wrote in his diary. A priest from the next village often visited the monastery, and he greeted Lucas warmly each time.

One morning, Lucas noticed an odd smell near the kitchen ceiling. He was curious, so he decided to investigate. Behind a loose board, he found old sacks of grain. Each sack had a label with a date from two hundred years ago. The monks used to practice agriculture on the hillside, and this was their last harvest.

Lucas did not delay. He ran to the priest and told him what he had found. The priest paused and then smiled with joy. "This is an important element of our history," he said. At first, some monks did not believe it, but the priest had faith in Lucas. Soon a drawing of the old sacks appeared in a cartoon in the village newspaper. Lucas was able to convince even the doubtful monks. He wrote in his diary that night, "A monk's profession is quiet, but today it felt like an adventure."`,
      words: [
        { id: "18-1", word: "ability", ipa: "/əˈbɪləti/", pos: "n.", definition: "Ability is the power or skill to do something.", example: "She has the ability to learn languages quickly.", examples: ["His ability to run fast helped him win.", "Everyone has a different ability."], vi: "khả năng, năng lực", forms: ["abilities", "ability"] },
        { id: "18-2", word: "agriculture", ipa: "/ˈæɡrɪkʌltʃər/", pos: "n.", definition: "Agriculture is the work of growing crops and raising animals.", example: "Agriculture is important to the economy of the country.", examples: ["Many people in the valley work in agriculture.", "Modern agriculture uses a lot of machines."], vi: "nông nghiệp", forms: ["agriculture"] },
        { id: "18-3", word: "cartoon", ipa: "/kɑːrˈtuːn/", pos: "n.", definition: "A cartoon is a funny drawing or a movie made from drawings.", example: "The children watched a cartoon after school.", examples: ["There is a funny cartoon in today's newspaper.", "He draws cartoons for a magazine."], vi: "phim hoạt hình, tranh biếm họa", forms: ["cartoons", "cartoon"] },
        { id: "18-4", word: "ceiling", ipa: "/ˈsiːlɪŋ/", pos: "n.", definition: "A ceiling is the flat surface at the top of a room.", example: "A spider was sitting on the ceiling.", examples: ["The ceiling in the hall is very high.", "He painted the ceiling white."], vi: "trần nhà", forms: ["ceilings", "ceiling"] },
        { id: "18-5", word: "convince", ipa: "/kənˈvɪns/", pos: "v.", definition: "To convince someone is to make them believe that something is true.", example: "She convinced her father to let her go.", examples: ["I could not convince him to change his mind.", "The evidence convinced the judge."], vi: "thuyết phục", forms: ["convincing", "convinced", "convinces", "convince"] },
        { id: "18-6", word: "curious", ipa: "/ˈkjʊriəs/", pos: "adj.", definition: "When you are curious, you want to learn or know about something.", example: "The curious child opened the box.", examples: ["I am curious about how birds fly.", "The cat was curious about the new toy."], vi: "tò mò", forms: ["curious"] },
        { id: "18-7", word: "delay", ipa: "/dɪˈleɪ/", pos: "v.", definition: "To delay something is to do it later than planned.", example: "The storm delayed our flight by two hours.", examples: ["Don't delay your homework until tomorrow.", "The bus was delayed by heavy traffic."], vi: "trì hoãn, chậm trễ", forms: ["delaying", "delayed", "delays", "delay"] },
        { id: "18-8", word: "diary", ipa: "/ˈdaɪəri/", pos: "n.", definition: "A diary is a book where you write about your daily life.", example: "She writes in her diary every night.", examples: ["He kept a diary during the trip.", "I hid my diary under the bed."], vi: "nhật ký", forms: ["diaries", "diary"] },
        { id: "18-9", word: "element", ipa: "/ˈelɪmənt/", pos: "n.", definition: "An element is one basic part of something bigger.", example: "Trust is an important element of friendship.", examples: ["Water is an element of life.", "Surprise is a key element of the story."], vi: "yếu tố, thành phần", forms: ["elements", "element"] },
        { id: "18-10", word: "faith", ipa: "/feɪθ/", pos: "n.", definition: "Faith is strong trust in someone or something.", example: "I have faith in my team.", examples: ["She lost faith in the plan.", "He showed great faith in his students."], vi: "niềm tin, đức tin", forms: ["faith"] },
        { id: "18-11", word: "grain", ipa: "/ɡreɪn/", pos: "n.", definition: "Grain is the small seeds of plants like rice, wheat, and corn.", example: "The farmer stored the grain in a big barn.", examples: ["Bread is made from grain.", "A single grain of rice fell on the floor."], vi: "ngũ cốc, hạt", forms: ["grains", "grain"] },
        { id: "18-12", word: "greet", ipa: "/ɡriːt/", pos: "v.", definition: "To greet someone is to say hello or welcome them.", example: "He greeted the guests at the door.", examples: ["She greets her neighbors every morning.", "The dog greeted us with a happy bark."], vi: "chào hỏi, đón tiếp", forms: ["greeting", "greeted", "greets", "greet"] },
        { id: "18-13", word: "investigate", ipa: "/ɪnˈvestɪɡeɪt/", pos: "v.", definition: "To investigate something is to study it carefully to find the truth.", example: "The police are investigating the robbery.", examples: ["Scientists investigated the strange sound.", "She investigates problems for a living."], vi: "điều tra, nghiên cứu", forms: ["investigating", "investigated", "investigates", "investigate"] },
        { id: "18-14", word: "joy", ipa: "/dʒɔɪ/", pos: "n.", definition: "Joy is a feeling of great happiness.", example: "The children jumped for joy when they saw the snow.", examples: ["Music brings joy to my life.", "She cried tears of joy."], vi: "niềm vui", forms: ["joys", "joy"] },
        { id: "18-15", word: "label", ipa: "/ˈleɪbl/", pos: "n.", definition: "A label is a small piece of paper that gives information about something.", example: "Read the label before you take the medicine.", examples: ["The label on the bottle shows the price.", "He put a label on each box."], vi: "nhãn, mác", forms: ["labels", "label"] },
        { id: "18-16", word: "monk", ipa: "/mʌŋk/", pos: "n.", definition: "A monk is a man who lives in a religious community.", example: "The monk prayed in the garden.", examples: ["The monks eat dinner in silence.", "A monk walked slowly up the path."], vi: "nhà sư, thầy tu", forms: ["monks", "monk"] },
        { id: "18-17", word: "odd", ipa: "/ɑːd/", pos: "adj.", definition: "When something is odd, it is strange or unusual.", example: "It is odd that he is not here yet.", examples: ["She heard an odd noise at night.", "He wears odd socks on purpose."], vi: "kỳ lạ, khác thường", forms: ["odd"] },
        { id: "18-18", word: "pause", ipa: "/pɔːz/", pos: "v.", definition: "To pause is to stop for a short time before continuing.", example: "The singer paused before the last song.", examples: ["He paused to catch his breath.", "She paused at the door and looked back."], vi: "tạm dừng", forms: ["pausing", "paused", "pauses", "pause"] },
        { id: "18-19", word: "priest", ipa: "/priːst/", pos: "n.", definition: "A priest is a person who leads religious services.", example: "The priest gave a short talk at the service.", examples: ["The priest visits the sick every week.", "People asked the priest for advice."], vi: "linh mục, thầy tu", forms: ["priests", "priest"] },
        { id: "18-20", word: "profession", ipa: "/prəˈfeʃn/", pos: "n.", definition: "A profession is a job that needs special training or education.", example: "Teaching is a respected profession.", examples: ["What is your profession?", "She chose the profession of nursing."], vi: "nghề nghiệp, chuyên môn", forms: ["professions", "profession"] }
      ]
    },

    /* ======================================================================
       UNIT 19
       ====================================================================== */
    {
      id: 19,
      title: "Unit 19",
      storyTitle: "The Boy by the Stream",
      story: `A small boy named Ravi lived in a village beyond a wide forest. One cold morning, he walked along a stream and heard a weak cry. Near a tree, a baby bird had fallen out of its nest. "Poor little thing," Ravi said kindly. He lifted the bird and carried it home.

His mother said, "We cannot adopt a wild bird." But Ravi began to beg. "Please, just until it can fly." She looked at the bird and finally gave in. She did not want to reject her son's kind heart. Ravi gave the bird a warm place and some food.

At school, a teacher asked him to tell the story. Ravi wore a bird costume and began to illustrate the tale with drawings. A classmate called him a fool, and the room fell into silence. Then the teacher spoke in a gentle tone. "Never forbid yourself to care about animals," she said. "What was your motive?" Ravi smiled. "I just wanted to help."

The class gave him a warm reception, and the students clapped. Some of them wanted to extend the lesson and learn the origin of the bird's species. "Indeed, this is a fine lesson," the teacher exclaimed. Ravi tried to interpret the bird's song, and it seemed to say thank you.`,
      words: [
        { id: "19-1", word: "adopt", ipa: "/əˈdɑːpt/", pos: "v.", definition: "To adopt a child or an animal is to take it into your family.", example: "They adopted a puppy from the shelter.", examples: ["The couple adopted a little girl.", "She wants to adopt a cat."], vi: "nhận nuôi, tiếp nhận", forms: ["adopting", "adopted", "adopts", "adopt"] },
        { id: "19-2", word: "beg", ipa: "/beɡ/", pos: "v.", definition: "To beg is to ask for something in a very strong or sad way.", example: "The boy begged his mother for a toy.", examples: ["The dog begs for food at the table.", "He begged her to stay."], vi: "van xin, năn nỉ", forms: ["begging", "begged", "begs", "beg"] },
        { id: "19-3", word: "beyond", ipa: "/biˈjɑːnd/", pos: "prep.", definition: "Beyond means on the far side of something, or past a certain point.", example: "The farm is just beyond the river.", examples: ["The problem is beyond my ability.", "Their house lies beyond those hills."], vi: "bên kia, vượt quá", forms: ["beyond"] },
        { id: "19-4", word: "costume", ipa: "/ˈkɑːstuːm/", pos: "n.", definition: "A costume is special clothing that people wear to look like someone else.", example: "She wore a pirate costume to the party.", examples: ["The actors changed into their costumes.", "He made his own costume for Halloween."], vi: "trang phục hóa trang", forms: ["costumes", "costume"] },
        { id: "19-5", word: "exclaim", ipa: "/ɪkˈskleɪm/", pos: "v.", definition: "To exclaim is to say something suddenly and loudly because of a strong feeling.", example: "\"What a beautiful dress!\" she exclaimed.", examples: ["He exclaimed with joy when he won.", "The children exclaimed at the fireworks."], vi: "thốt lên, la lên", forms: ["exclaiming", "exclaimed", "exclaims", "exclaim"] },
        { id: "19-6", word: "extend", ipa: "/ɪkˈstend/", pos: "v.", definition: "To extend something is to make it longer or bigger.", example: "They extended the road to the next town.", examples: ["The shop extended its opening hours.", "She extended her arm to shake hands."], vi: "kéo dài, mở rộng", forms: ["extending", "extended", "extends", "extend"] },
        { id: "19-7", word: "fool", ipa: "/fuːl/", pos: "n.", definition: "A fool is a person who does silly things.", example: "He felt like a fool after he forgot the name.", examples: ["Don't be a fool and trust him.", "The king's fool made everyone laugh."], vi: "kẻ ngốc, người khờ dại", forms: ["fools", "fool"] },
        { id: "19-8", word: "forbid", ipa: "/fərˈbɪd/", pos: "v.", definition: "To forbid something is to say that it must not be done.", example: "The rules forbid eating in the library.", examples: ["My parents forbid me to stay out late.", "The sign forbids swimming here."], vi: "cấm, ngăn cấm", forms: ["forbidding", "forbade", "forbidden", "forbids", "forbid"] },
        { id: "19-9", word: "illustrate", ipa: "/ˈɪləstreɪt/", pos: "v.", definition: "To illustrate something is to explain it with pictures or examples.", example: "The artist illustrated the book with colorful drawings.", examples: ["Let me illustrate my idea with a story.", "The teacher illustrated the lesson with a map."], vi: "minh họa", forms: ["illustrating", "illustrated", "illustrates", "illustrate"] },
        { id: "19-10", word: "indeed", ipa: "/ɪnˈdiːd/", pos: "adv.", definition: "Indeed is a word used to show that something is really true.", example: "It was a hard test indeed.", examples: ["She is very kind indeed.", "\"Is it cold?\" \"It is indeed.\""], vi: "thật vậy, quả thực", forms: ["indeed"] },
        { id: "19-11", word: "interpret", ipa: "/ɪnˈtɜːrprət/", pos: "v.", definition: "To interpret something is to decide what it means.", example: "How do you interpret this poem?", examples: ["She interpreted his silence as a yes.", "He interprets for visitors at the airport."], vi: "diễn giải, thông dịch", forms: ["interpreting", "interpreted", "interprets", "interpret"] },
        { id: "19-12", word: "kindly", ipa: "/ˈkaɪndli/", pos: "adv.", definition: "To do something kindly is to do it in a gentle and friendly way.", example: "The old man spoke kindly to the lost child.", examples: ["She kindly offered me a seat.", "The nurse smiled kindly at the patient."], vi: "một cách tử tế, ân cần", forms: ["kindly"] },
        { id: "19-13", word: "motive", ipa: "/ˈmoʊtɪv/", pos: "n.", definition: "A motive is the reason why someone does something.", example: "The police could not find a motive for the crime.", examples: ["His motive was to help his friend.", "What is your motive for asking?"], vi: "động cơ, lý do", forms: ["motives", "motive"] },
        { id: "19-14", word: "nest", ipa: "/nest/", pos: "n.", definition: "A nest is a home that a bird makes for its eggs.", example: "A bird built a nest in the tree.", examples: ["There are three eggs in the nest.", "The nest fell during the storm."], vi: "tổ chim", forms: ["nests", "nest"] },
        { id: "19-15", word: "origin", ipa: "/ˈɔːrɪdʒɪn/", pos: "n.", definition: "The origin of something is the place or time where it began.", example: "The origin of this word is Latin.", examples: ["Scientists study the origin of the universe.", "Her family is of Spanish origin."], vi: "nguồn gốc, xuất xứ", forms: ["origins", "origin"] },
        { id: "19-16", word: "reception", ipa: "/rɪˈsepʃn/", pos: "n.", definition: "A reception is the way people welcome someone, or a formal party.", example: "The band got a warm reception from the crowd.", examples: ["The wedding reception was held in a garden.", "Please wait at the reception desk."], vi: "sự tiếp đón, buổi tiệc chiêu đãi", forms: ["receptions", "reception"] },
        { id: "19-17", word: "reject", ipa: "/rɪˈdʒekt/", pos: "v.", definition: "To reject something is to refuse to accept it.", example: "The company rejected his idea.", examples: ["She rejected the offer politely.", "The school rejected his application."], vi: "từ chối, bác bỏ", forms: ["rejecting", "rejected", "rejects", "reject"] },
        { id: "19-18", word: "silence", ipa: "/ˈsaɪləns/", pos: "n.", definition: "Silence is a time with no sound at all.", example: "There was silence in the room after the news.", examples: ["The class sat in silence during the test.", "He broke the silence with a cough."], vi: "sự im lặng", forms: ["silence"] },
        { id: "19-19", word: "stream", ipa: "/striːm/", pos: "n.", definition: "A stream is a small, narrow river.", example: "We crossed the stream on a wooden bridge.", examples: ["Cold water flowed in the stream.", "Fish swim in the clear stream."], vi: "dòng suối, dòng chảy", forms: ["streams", "stream"] },
        { id: "19-20", word: "tone", ipa: "/toʊn/", pos: "n.", definition: "Tone is the way a person's voice sounds when they speak.", example: "He spoke in a quiet tone.", examples: ["Her angry tone surprised me.", "I did not like his tone."], vi: "giọng điệu, âm điệu", forms: ["tones", "tone"] }
      ]
    },

    /* ======================================================================
       UNIT 20
       ====================================================================== */
    {
      id: 20,
      title: "Unit 20",
      storyTitle: "A New Country",
      story: `Elena was an immigrant who moved to a new country with her family. They came to escape poverty, and they had very little money. The first months were hard. She had to pretend that she understood the language at her elementary school. Her teacher noticed and offered extra help.

Progress was gradual. Elena learned to insert new words into her sentences every day. Her mother worked in a restaurant and learned to refrigerate food safely. Her father had to retire from his old job because of his back, but he found a new one. They did not own a house, so they had to rent a small apartment.

Every family has a duty to its children, and Elena's parents never forgot that. They believed that school was the way to break any barrier. After a year, Elena could accomplish things she never thought possible. She detected a change in herself: she felt more sure. The principal came to approve her place in an advanced class. The statistic she read in the newspaper said that few immigrant students rank near the top. Elena earned recognition for her hard work. For her, failure was never the end. She smiled when she saw her name on the board. At that instant, she knew the answer was approximate to her dream.`,
      words: [
        { id: "20-1", word: "accomplish", ipa: "/əˈkɑːmplɪʃ/", pos: "v.", definition: "To accomplish something is to succeed in doing it.", example: "She accomplished her goal of running a marathon.", examples: ["He accomplished a lot in one day.", "What do you want to accomplish this year?"], vi: "hoàn thành, đạt được", forms: ["accomplishing", "accomplished", "accomplishes", "accomplish"] },
        { id: "20-2", word: "approve", ipa: "/əˈpruːv/", pos: "v.", definition: "To approve of something is to think that it is good or to agree to it.", example: "My parents approved of my plan.", examples: ["The manager approved the new design.", "I don't approve of lying."], vi: "chấp thuận, tán thành", forms: ["approving", "approved", "approves", "approve"] },
        { id: "20-3", word: "approximate", ipa: "/əˈprɑːksɪmət/", pos: "adj.", definition: "An approximate number or amount is close to the exact one but not exact.", example: "The approximate cost of the trip is five hundred dollars.", examples: ["Give me an approximate time of arrival.", "The approximate age of the tree is a hundred years."], vi: "xấp xỉ, gần đúng", forms: ["approximate"] },
        { id: "20-4", word: "barrier", ipa: "/ˈbæriər/", pos: "n.", definition: "A barrier is something that blocks the way or makes progress hard.", example: "Language can be a barrier when you travel.", examples: ["A fence was a barrier between the two houses.", "Fear is a barrier to learning."], vi: "rào cản, chướng ngại", forms: ["barriers", "barrier"] },
        { id: "20-5", word: "detect", ipa: "/dɪˈtekt/", pos: "v.", definition: "To detect something is to find or notice it.", example: "The machine detects smoke in the room.", examples: ["I detected a smell of gas in the kitchen.", "Doctors can detect the illness early."], vi: "phát hiện", forms: ["detecting", "detected", "detects", "detect"] },
        { id: "20-6", word: "duty", ipa: "/ˈduːti/", pos: "n.", definition: "A duty is something that you must do because it is right or required.", example: "It is a citizen's duty to obey the law.", examples: ["The nurse is on duty tonight.", "She felt it was her duty to help."], vi: "nhiệm vụ, bổn phận", forms: ["duties", "duty"] },
        { id: "20-7", word: "elementary", ipa: "/ˌelɪˈmentri/", pos: "adj.", definition: "Elementary means basic or simple, or related to the first years of school.", example: "My little sister goes to an elementary school.", examples: ["He has an elementary knowledge of math.", "This is an elementary question."], vi: "sơ cấp, cơ bản", forms: ["elementary"] },
        { id: "20-8", word: "failure", ipa: "/ˈfeɪljər/", pos: "n.", definition: "Failure is when someone does not succeed.", example: "His first attempt ended in failure.", examples: ["Failure can teach us important lessons.", "The power failure lasted all night."], vi: "sự thất bại", forms: ["failures", "failure"] },
        { id: "20-9", word: "gradual", ipa: "/ˈɡrædʒuəl/", pos: "adj.", definition: "Something gradual happens slowly over a long time.", example: "There was a gradual change in the weather.", examples: ["Her English improved in a gradual way.", "A gradual rise in price worried the customers."], vi: "dần dần, từ từ", forms: ["gradual"] },
        { id: "20-10", word: "immigrant", ipa: "/ˈɪmɪɡrənt/", pos: "n.", definition: "An immigrant is a person who comes to live in a new country.", example: "The immigrant opened a small shop in the city.", examples: ["Many immigrants arrived by ship.", "Her grandparents were immigrants from Italy."], vi: "người nhập cư", forms: ["immigrants", "immigrant"] },
        { id: "20-11", word: "insert", ipa: "/ɪnˈsɜːrt/", pos: "v.", definition: "To insert something is to put it inside something else.", example: "Insert the coin into the machine.", examples: ["She inserted a key into the lock.", "He inserted a new page into the book."], vi: "chèn vào, cho vào", forms: ["inserting", "inserted", "inserts", "insert"] },
        { id: "20-12", word: "instant", ipa: "/ˈɪnstənt/", pos: "n.", definition: "An instant is a very short period of time.", example: "In an instant, the lights went out.", examples: ["Wait for an instant, please.", "She was gone in an instant."], vi: "khoảnh khắc, tích tắc", forms: ["instants", "instant"] },
        { id: "20-13", word: "poverty", ipa: "/ˈpɑːvərti/", pos: "n.", definition: "Poverty is the state of having very little money.", example: "Many families in the village live in poverty.", examples: ["The charity helps children escape poverty.", "He grew up in poverty."], vi: "sự nghèo đói", forms: ["poverty"] },
        { id: "20-14", word: "pretend", ipa: "/prɪˈtend/", pos: "v.", definition: "To pretend is to act as if something is true when it is not.", example: "The children pretended to be pirates.", examples: ["He pretended to be asleep.", "Don't pretend that you did not hear me."], vi: "giả vờ, giả bộ", forms: ["pretending", "pretended", "pretends", "pretend"] },
        { id: "20-15", word: "rank", ipa: "/ræŋk/", pos: "n.", definition: "A rank is a position or level in a group or order.", example: "He rose to the rank of captain.", examples: ["Her school has a high rank in the country.", "A general has a higher rank than a soldier."], vi: "cấp bậc, thứ hạng", forms: ["ranks", "rank"] },
        { id: "20-16", word: "recognition", ipa: "/ˌrekəɡˈnɪʃn/", pos: "n.", definition: "Recognition is the act of knowing someone or giving them praise for their work.", example: "She received recognition for her research.", examples: ["The artist finally won recognition.", "He gave her a nod of recognition."], vi: "sự công nhận, sự nhận ra", forms: ["recognition"] },
        { id: "20-17", word: "refrigerate", ipa: "/rɪˈfrɪdʒəreɪt/", pos: "v.", definition: "To refrigerate food is to keep it cold in a refrigerator.", example: "Refrigerate the milk after you open it.", examples: ["You must refrigerate fresh fish.", "She refrigerated the leftovers."], vi: "bảo quản lạnh", forms: ["refrigerating", "refrigerated", "refrigerates", "refrigerate"] },
        { id: "20-18", word: "rent", ipa: "/rent/", pos: "v.", definition: "To rent something is to pay money to use it for a period of time.", example: "We rent a small apartment near the park.", examples: ["They rented a car for the trip.", "She rents a room from an old woman."], vi: "thuê", forms: ["renting", "rented", "rents", "rent"] },
        { id: "20-19", word: "retire", ipa: "/rɪˈtaɪər/", pos: "v.", definition: "To retire is to stop working because you are old.", example: "My grandfather retired at the age of sixty-five.", examples: ["She plans to retire next year.", "He retired from the army after thirty years."], vi: "nghỉ hưu", forms: ["retiring", "retired", "retires", "retire"] },
        { id: "20-20", word: "statistic", ipa: "/stəˈtɪstɪk/", pos: "n.", definition: "A statistic is a number that gives information about something.", example: "One statistic shows that most students walk to school.", examples: ["The statistics were shocking.", "She studied the statistics on crime."], vi: "số liệu thống kê", forms: ["statistics", "statistic"] }
      ]
    },

    /* ======================================================================
       UNIT 21
       ====================================================================== */
    {
      id: 21,
      title: "Unit 21",
      storyTitle: "Under the Mountain, Above the Sky",
      story: `Jake was a miner who worked deep underground. Every morning he rode a metal cage down into the dark, where the air was cool and thick. He dug for rare minerals, and sometimes he found a bright jewel hidden in the raw rock. It took courage to work there, but Jake loved it.

His daughter Lily dreamed of the sky. She was an astronaut in her games, and she would float around the living room with her arms out. At night she looked through a telescope on the roof. She watched a satellite cross the stars. "Gravity holds everything down," she said, "but one day I will pour out of the sky like rain." Jake laughed and could not stay awake to hear more.

When Lily was older, she asked for permission to join a space school. Her father did not want to grant it at first, but he saw the joy in her eyes. "I want to participate in the next mission," she said. Jake nodded. He could not skip her big day. On the scale of a mother's pride, Lily's was the highest. In the presence of the whole town, she stretched her hand to the sky. Under the earth or above it, the family was always together.`,
      words: [
        { id: "21-1", word: "astronaut", ipa: "/ˈæstrənɔːt/", pos: "n.", definition: "An astronaut is a person who travels into space.", example: "The astronaut waved from the window of the spaceship.", examples: ["She dreams of becoming an astronaut.", "The astronauts trained for two years."], vi: "phi hành gia", forms: ["astronauts", "astronaut"] },
        { id: "21-2", word: "awake", ipa: "/əˈweɪk/", pos: "adj.", definition: "When you are awake, you are not sleeping.", example: "The baby was awake all night.", examples: ["I stayed awake to watch the game.", "Are you awake yet?"], vi: "tỉnh táo, thức", forms: ["awake"] },
        { id: "21-3", word: "courage", ipa: "/ˈkɜːrɪdʒ/", pos: "n.", definition: "Courage is the ability to do something that is difficult or scary.", example: "It took courage to speak in front of the class.", examples: ["The firefighter showed great courage.", "She found the courage to say sorry."], vi: "lòng can đảm", forms: ["courage"] },
        { id: "21-4", word: "float", ipa: "/floʊt/", pos: "v.", definition: "To float is to stay on top of water or to hang in the air.", example: "The leaf floated down the river.", examples: ["Wood floats on water.", "A balloon floated over the town."], vi: "nổi, trôi", forms: ["floating", "floated", "floats", "float"] },
        { id: "21-5", word: "grant", ipa: "/grænt/", pos: "v.", definition: "To grant something is to officially give or allow it.", example: "The king granted the man his freedom.", examples: ["The school granted her a prize.", "I grant that you are right."], vi: "ban cho, cho phép", forms: ["granting", "granted", "grants", "grant"] },
        { id: "21-6", word: "gravity", ipa: "/ˈgrævəti/", pos: "n.", definition: "Gravity is the force that pulls things toward the earth.", example: "Gravity makes an apple fall from a tree.", examples: ["There is little gravity on the moon.", "Without gravity, we would float away."], vi: "trọng lực, lực hấp dẫn", forms: ["gravity"] },
        { id: "21-7", word: "jewel", ipa: "/ˈdʒuːəl/", pos: "n.", definition: "A jewel is a valuable stone, such as a diamond.", example: "The queen wore a crown with a large jewel.", examples: ["She kept her jewels in a small box.", "The thief stole a famous jewel."], vi: "đá quý, ngọc", forms: ["jewels", "jewel"] },
        { id: "21-8", word: "miner", ipa: "/ˈmaɪnər/", pos: "n.", definition: "A miner is a person who digs under the ground for coal, gold, or other materials.", example: "The miner wore a hat with a light.", examples: ["Her grandfather was a coal miner.", "The miners came up at the end of the day."], vi: "thợ mỏ", forms: ["miners", "miner"] },
        { id: "21-9", word: "mineral", ipa: "/ˈmɪnərəl/", pos: "n.", definition: "A mineral is a natural material that is found in the ground, like salt or iron.", example: "Salt is a common mineral.", examples: ["The water is full of healthy minerals.", "The mountain is rich in minerals."], vi: "khoáng chất, khoáng sản", forms: ["minerals", "mineral"] },
        { id: "21-10", word: "participate", ipa: "/pɑːrˈtɪsɪpeɪt/", pos: "v.", definition: "To participate is to take part in an activity.", example: "All students must participate in the sports day.", examples: ["She participated in the school play.", "Many people participate in the race."], vi: "tham gia", forms: ["participating", "participated", "participates", "participate"] },
        { id: "21-11", word: "permission", ipa: "/pərˈmɪʃn/", pos: "n.", definition: "Permission is when someone says that you are allowed to do something.", example: "You need permission to enter this room.", examples: ["I asked my teacher for permission to leave early.", "He did it without permission."], vi: "sự cho phép", forms: ["permission"] },
        { id: "21-12", word: "pour", ipa: "/pɔːr/", pos: "v.", definition: "To pour is to make a liquid flow out of something.", example: "She poured milk into the glass.", examples: ["The rain poured down all day.", "He poured tea for his guests."], vi: "rót, đổ", forms: ["pouring", "poured", "pours", "pour"] },
        { id: "21-13", word: "presence", ipa: "/ˈprezns/", pos: "n.", definition: "Presence is the state of being in a place.", example: "Your presence at the meeting is required.", examples: ["I felt his presence in the dark room.", "She signed the paper in the presence of a lawyer."], vi: "sự hiện diện", forms: ["presence"] },
        { id: "21-14", word: "raw", ipa: "/rɔː/", pos: "adj.", definition: "Something raw is not cooked, or is in its natural state.", example: "Do not eat raw chicken.", examples: ["The factory uses raw materials.", "He ate a raw carrot."], vi: "sống, thô, chưa chế biến", forms: ["raw"] },
        { id: "21-15", word: "satellite", ipa: "/ˈsætəlaɪt/", pos: "n.", definition: "A satellite is an object that moves around the earth or another planet in space.", example: "The satellite takes pictures of the earth.", examples: ["The moon is a natural satellite.", "A television satellite sends signals to our homes."], vi: "vệ tinh", forms: ["satellites", "satellite"] },
        { id: "21-16", word: "scale", ipa: "/skeɪl/", pos: "n.", definition: "A scale is a system of measuring or ranking things.", example: "On a scale of one to ten, I give the film an eight.", examples: ["The map has a scale of one to a thousand.", "The fire happened on a large scale."], vi: "thang đo, quy mô", forms: ["scales", "scale"] },
        { id: "21-17", word: "skip", ipa: "/skɪp/", pos: "v.", definition: "To skip something is to not do it or to leave it out.", example: "Don't skip breakfast.", examples: ["He skipped the boring part of the book.", "She skipped class to see a doctor."], vi: "bỏ qua, nhảy cóc", forms: ["skipping", "skipped", "skips", "skip"] },
        { id: "21-18", word: "stretch", ipa: "/stretʃ/", pos: "v.", definition: "To stretch is to make something longer or wider, or to reach out with your body.", example: "She stretched her arms above her head.", examples: ["The cat stretched in the sun.", "The road stretches for miles."], vi: "duỗi, kéo dài", forms: ["stretching", "stretched", "stretches", "stretch"] },
        { id: "21-19", word: "telescope", ipa: "/ˈtelɪskoʊp/", pos: "n.", definition: "A telescope is a tool that makes faraway things look bigger and closer.", example: "He looked at the moon through a telescope.", examples: ["The school bought a new telescope.", "She saw Jupiter with her telescope."], vi: "kính thiên văn", forms: ["telescopes", "telescope"] },
        { id: "21-20", word: "underground", ipa: "/ˈʌndərɡraʊnd/", pos: "adv.", definition: "Underground means below the surface of the earth.", example: "The miners work deep underground.", examples: ["The train runs underground in the city center.", "Moles live underground."], vi: "dưới lòng đất", forms: ["underground"] }
      ]
    },

    /* ======================================================================
       UNIT 22
       ====================================================================== */
    {
      id: 22,
      title: "Unit 22",
      storyTitle: "The Garage Robbery",
      story: `Sam was a journalist who lived in a quiet neighborhood. One night, an alarm rang from the garage next door. Sam looked out and saw a man try to rob the place. The man slipped on a wet yard and dropped a bucket, and a small pup began to bark loudly.

Sam called the police, and officers soon arrived. They were able to arrest the man before he got far. The thief was somewhat surprised, as nobody had ever stopped him before. Later, a judge decided to convict him.

The owner of the garage was an old man who loved to repair cars. He used to breed dogs, too, and the pup in the yard was one of his own. He was grateful and wanted to give Sam a prize. "You have earned an award," he said. "You need to qualify for it first," Sam joked, "and I think I did not even enter the contest."

Sam wrote a story about the night and kept a tissue nearby, as he laughed so hard that he cried. The yard was a mess, but things were stable again. After a short rest, the old man and Sam parted ways, no longer a world apart. The old man could resume his work, and the garage was safe once more.`,
      words: [
        { id: "22-1", word: "alarm", ipa: "/əˈlɑːrm/", pos: "n.", definition: "An alarm is a loud sound that warns people of danger.", example: "The fire alarm woke everyone up.", examples: ["She set an alarm for six o'clock.", "The thief ran when the alarm went off."], vi: "chuông báo động, báo thức", forms: ["alarms", "alarm"] },
        { id: "22-2", word: "apart", ipa: "/əˈpɑːrt/", pos: "adv.", definition: "Apart means separated by a distance or into pieces.", example: "The two houses are a mile apart.", examples: ["The old toy fell apart.", "They live apart from their parents."], vi: "xa nhau, rời ra", forms: ["apart"] },
        { id: "22-3", word: "arrest", ipa: "/əˈrest/", pos: "v.", definition: "To arrest someone is to take them away because they may have broken the law.", example: "The police arrested the thief.", examples: ["The officer arrested two men last night.", "He was arrested for speeding."], vi: "bắt giữ", forms: ["arresting", "arrested", "arrests", "arrest"] },
        { id: "22-4", word: "award", ipa: "/əˈwɔːrd/", pos: "n.", definition: "An award is a prize that is given for something good.", example: "She won an award for her paintings.", examples: ["The film got three awards.", "He received an award for kindness."], vi: "giải thưởng", forms: ["awards", "award"] },
        { id: "22-5", word: "breed", ipa: "/briːd/", pos: "v.", definition: "To breed animals is to keep them so that they have babies.", example: "He breeds horses on his farm.", examples: ["Rabbits breed very quickly.", "She breeds dogs for a living."], vi: "gây giống, nuôi", forms: ["breeding", "bred", "breeds", "breed"] },
        { id: "22-6", word: "bucket", ipa: "/ˈbʌkɪt/", pos: "n.", definition: "A bucket is a round container with a handle that is used to carry liquids.", example: "He filled the bucket with water.", examples: ["The child played with a bucket at the beach.", "She washed the floor with a bucket."], vi: "cái xô", forms: ["buckets", "bucket"] },
        { id: "22-7", word: "contest", ipa: "/ˈkɑːntest/", pos: "n.", definition: "A contest is a competition in which people try to win.", example: "She won first prize in the singing contest.", examples: ["The school held a spelling contest.", "He entered a cooking contest."], vi: "cuộc thi", forms: ["contests", "contest"] },
        { id: "22-8", word: "convict", ipa: "/kənˈvɪkt/", pos: "v.", definition: "To convict someone is to say officially in court that they are guilty.", example: "The court convicted the man of stealing.", examples: ["The jury convicted her after a long trial.", "He was convicted of a serious crime."], vi: "kết án, tuyên có tội", forms: ["convicting", "convicted", "convicts", "convict"] },
        { id: "22-9", word: "garage", ipa: "/gəˈrɑːʒ/", pos: "n.", definition: "A garage is a place for keeping or repairing a car.", example: "He parked the car in the garage.", examples: ["The mechanic works at a big garage.", "We keep our bikes in the garage."], vi: "nhà để xe, gara", forms: ["garages", "garage"] },
        { id: "22-10", word: "journalist", ipa: "/ˈdʒɜːrnəlɪst/", pos: "n.", definition: "A journalist is a person who writes news stories for newspapers or television.", example: "The journalist interviewed the mayor.", examples: ["She works as a journalist in the city.", "Journalists gathered outside the court."], vi: "nhà báo", forms: ["journalists", "journalist"] },
        { id: "22-11", word: "pup", ipa: "/pʌp/", pos: "n.", definition: "A pup is a young dog.", example: "The pup chased the ball across the grass.", examples: ["The pup slept on my lap.", "Our dog had four pups."], vi: "chó con", forms: ["pups", "pup"] },
        { id: "22-12", word: "qualify", ipa: "/ˈkwɑːlɪfaɪ/", pos: "v.", definition: "To qualify is to become able or allowed to do something by meeting the needs.", example: "He qualified for the final race.", examples: ["You must pass the test to qualify.", "She qualified as a doctor last year."], vi: "đủ điều kiện, đạt tiêu chuẩn", forms: ["qualifying", "qualified", "qualifies", "qualify"] },
        { id: "22-13", word: "repair", ipa: "/rɪˈper/", pos: "v.", definition: "To repair something is to fix it when it is broken.", example: "The man repaired the broken chair.", examples: ["I took my phone to be repaired.", "They repaired the roof after the storm."], vi: "sửa chữa", forms: ["repairing", "repaired", "repairs", "repair"] },
        { id: "22-14", word: "resume", ipa: "/rɪˈzuːm/", pos: "v.", definition: "To resume is to start again after stopping.", example: "The game resumed after the rain stopped.", examples: ["Classes resume on Monday.", "He resumed his work after lunch."], vi: "tiếp tục lại", forms: ["resuming", "resumed", "resumes", "resume"] },
        { id: "22-15", word: "rob", ipa: "/rɑːb/", pos: "v.", definition: "To rob a place or person is to steal from them.", example: "Two men robbed the bank.", examples: ["The thief tried to rob a shop.", "She was robbed on the bus."], vi: "cướp", forms: ["robbing", "robbed", "robs", "rob"] },
        { id: "22-16", word: "slip", ipa: "/slɪp/", pos: "v.", definition: "To slip is to slide by accident and almost fall.", example: "She slipped on the wet floor.", examples: ["The cup slipped out of his hand.", "Be careful not to slip on the ice."], vi: "trượt chân", forms: ["slipping", "slipped", "slips", "slip"] },
        { id: "22-17", word: "somewhat", ipa: "/ˈsʌmwʌt/", pos: "adv.", definition: "Somewhat means to a small degree.", example: "I was somewhat tired after the long walk.", examples: ["The test was somewhat difficult.", "She felt somewhat nervous."], vi: "hơi, phần nào", forms: ["somewhat"] },
        { id: "22-18", word: "stable", ipa: "/ˈsteɪbl/", pos: "adj.", definition: "Something stable is steady and not likely to change or fall.", example: "The ladder is stable on the flat ground.", examples: ["Her health is stable now.", "He has a stable job."], vi: "ổn định, vững chắc", forms: ["stable"] },
        { id: "22-19", word: "tissue", ipa: "/ˈtɪʃuː/", pos: "n.", definition: "A tissue is a soft piece of paper used for wiping your nose.", example: "She used a tissue to dry her eyes.", examples: ["Can I have a tissue, please?", "There is a box of tissues on the table."], vi: "giấy ăn mỏng", forms: ["tissues", "tissue"] },
        { id: "22-20", word: "yard", ipa: "/jɑːrd/", pos: "n.", definition: "A yard is an area of ground next to a house.", example: "The children played in the yard.", examples: ["We planted flowers in the front yard.", "The dog ran around the yard."], vi: "sân, bãi", forms: ["yards", "yard"] }
      ]
    },

    /* ======================================================================
       UNIT 23
       ====================================================================== */
    {
      id: 23,
      title: "Unit 23",
      storyTitle: "The Secret of the Old Tomb",
      story: `When her uncle died, Nora was surprised to inherit an old stone house on a mountain. The house had a strange roof with a curved top, and its style of architecture was unlike any other in town. In the garden stood an ancient tomb. Nora felt a rush of excitement as she walked up the path, though the squeaking gate began to annoy her.

Inside, the air was thick with dust. A heavy chain locked the tomb's door. Nora tried to pull the chain, but she could not break it. The manner of the lock was odd, and every part of it looked distinct from those she knew. She tried to distinguish the old letters on the stone. They were alike in shape, but they told a story.

She wanted to find out the truth. She wound a rope around her waist, but a stone fell and left a deep wound on her arm. It took a week to heal. A friend helped her with a bandage. In the town, there was a shortage of money, and nobody could afford to repair the house.

Nora found an artificial key hidden in a solid wall. She opened the door and found a box with a strange substance inside. It was dry gold dust. Nora mounted her horse, rode to the town, and sold part of the stock. The village was saved.`,
      words: [
        { id: "23-1", word: "alike", ipa: "/əˈlaɪk/", pos: "adj.", definition: "When two things are alike, they are very similar.", example: "The two sisters look alike.", examples: ["The houses on this street are all alike.", "We think alike about music."], vi: "giống nhau", forms: ["alike"] },
        { id: "23-2", word: "annoy", ipa: "/əˈnɔɪ/", pos: "v.", definition: "To annoy someone is to make them a little angry.", example: "Loud music annoys my neighbors.", examples: ["His jokes annoyed the teacher.", "The buzzing fly annoyed her."], vi: "làm phiền, làm bực mình", forms: ["annoying", "annoyed", "annoys", "annoy"] },
        { id: "23-3", word: "architecture", ipa: "/ˈɑːrkɪtektʃər/", pos: "n.", definition: "Architecture is the art of designing buildings.", example: "She studies architecture at university.", examples: ["The city is famous for its old architecture.", "He loves the architecture of churches."], vi: "kiến trúc", forms: ["architecture"] },
        { id: "23-4", word: "artificial", ipa: "/ˌɑːrtɪˈfɪʃl/", pos: "adj.", definition: "Something artificial is made by people and is not natural.", example: "The room had artificial flowers.", examples: ["The juice has no artificial colors.", "The pond is artificial."], vi: "nhân tạo", forms: ["artificial"] },
        { id: "23-5", word: "chain", ipa: "/tʃeɪn/", pos: "n.", definition: "A chain is a line of metal rings that are joined together.", example: "The dog was tied to a chain.", examples: ["She wore a gold chain around her neck.", "He locked his bike with a chain."], vi: "dây xích, chuỗi", forms: ["chains", "chain"] },
        { id: "23-6", word: "distinct", ipa: "/dɪˈstɪŋkt/", pos: "adj.", definition: "Something distinct is clearly different from something else.", example: "The two flowers have distinct smells.", examples: ["There is a distinct difference between them.", "She has a distinct voice."], vi: "rõ rệt, khác biệt", forms: ["distinct"] },
        { id: "23-7", word: "distinguish", ipa: "/dɪˈstɪŋɡwɪʃ/", pos: "v.", definition: "To distinguish is to see or understand the difference between things.", example: "It is hard to distinguish the twins.", examples: ["Can you distinguish a frog from a toad?", "She could not distinguish the words in the noise."], vi: "phân biệt", forms: ["distinguishing", "distinguished", "distinguishes", "distinguish"] },
        { id: "23-8", word: "dust", ipa: "/dʌst/", pos: "n.", definition: "Dust is a fine powder of dirt that collects on surfaces.", example: "There was dust on the old books.", examples: ["She wiped the dust off the table.", "A cloud of dust rose behind the car."], vi: "bụi", forms: ["dust"] },
        { id: "23-9", word: "excitement", ipa: "/ɪkˈsaɪtmənt/", pos: "n.", definition: "Excitement is a strong feeling of happiness about something.", example: "The children jumped with excitement.", examples: ["There was great excitement before the game.", "He could not hide his excitement."], vi: "sự phấn khích", forms: ["excitement"] },
        { id: "23-10", word: "heal", ipa: "/hiːl/", pos: "v.", definition: "To heal is to become healthy again after being hurt.", example: "The cut on his hand healed in a week.", examples: ["Time heals sad feelings.", "The broken bone will heal slowly."], vi: "chữa lành, lành lại", forms: ["healing", "healed", "heals", "heal"] },
        { id: "23-11", word: "inherit", ipa: "/ɪnˈherɪt/", pos: "v.", definition: "To inherit something is to receive it from a person who has died.", example: "She inherited a farm from her grandfather.", examples: ["He will inherit his father's business.", "I inherited my mother's blue eyes."], vi: "thừa kế", forms: ["inheriting", "inherited", "inherits", "inherit"] },
        { id: "23-12", word: "manner", ipa: "/ˈmænər/", pos: "n.", definition: "A manner is the way that something is done or the way a person behaves.", example: "He spoke in a kind manner.", examples: ["She has a friendly manner.", "The work was done in a careful manner."], vi: "cách thức, thái độ", forms: ["manners", "manner"] },
        { id: "23-13", word: "mount", ipa: "/maʊnt/", pos: "v.", definition: "To mount something is to climb up on it, such as a horse.", example: "The rider mounted his horse.", examples: ["She mounted the stairs two at a time.", "He mounted the horse and rode away."], vi: "leo lên, cưỡi", forms: ["mounting", "mounted", "mounts", "mount"] },
        { id: "23-14", word: "roof", ipa: "/ruːf/", pos: "n.", definition: "A roof is the top part of a building.", example: "The rain hit the roof all night.", examples: ["A cat sat on the roof.", "They fixed the roof after the storm."], vi: "mái nhà", forms: ["roofs", "roof"] },
        { id: "23-15", word: "shortage", ipa: "/ˈʃɔːrtɪdʒ/", pos: "n.", definition: "A shortage is a situation in which there is not enough of something.", example: "There was a shortage of food in the town.", examples: ["The city has a water shortage.", "A shortage of workers slowed the project."], vi: "sự thiếu hụt", forms: ["shortages", "shortage"] },
        { id: "23-16", word: "solid", ipa: "/ˈsɑːlɪd/", pos: "adj.", definition: "Something solid is hard and firm, not a liquid or a gas.", example: "Ice is solid water.", examples: ["The table is made of solid wood.", "The wall was solid and strong."], vi: "rắn, vững chắc", forms: ["solid"] },
        { id: "23-17", word: "stock", ipa: "/stɑːk/", pos: "n.", definition: "A stock is a supply of goods that is kept for sale or use.", example: "The shop has a large stock of shoes.", examples: ["We are out of stock of that book.", "He keeps a stock of food for the winter."], vi: "kho hàng, hàng tồn", forms: ["stocks", "stock"] },
        { id: "23-18", word: "substance", ipa: "/ˈsʌbstəns/", pos: "n.", definition: "A substance is a type of material, such as a powder or liquid.", example: "A strange substance covered the floor.", examples: ["Water is a clear substance.", "The factory uses a dangerous substance."], vi: "chất, vật chất", forms: ["substances", "substance"] },
        { id: "23-19", word: "tomb", ipa: "/tuːm/", pos: "n.", definition: "A tomb is a place where a dead person is buried.", example: "Tourists visited the ancient tomb.", examples: ["The king was buried in a stone tomb.", "Flowers lay at the tomb."], vi: "ngôi mộ, lăng mộ", forms: ["tombs", "tomb"] },
        { id: "23-20", word: "wound", ipa: "/wuːnd/", pos: "n.", definition: "A wound is an injury to the body, such as a cut.", example: "The nurse cleaned the wound on his arm.", examples: ["The soldier had a deep wound.", "The wound will leave a scar."], vi: "vết thương", forms: ["wounds", "wound"] }
      ]
    },

    /* ======================================================================
       UNIT 24
       ====================================================================== */
    {
      id: 24,
      title: "Unit 24",
      storyTitle: "A Runner's Journal",
      story: `Carlos was a disabled runner with a big dream. He wrote in a journal every night, and one entry read, "Today I took a hot bath and felt fantastic." He could not bend his left knee well, but he never let that stop him. Hard times were a tough test, and he had to overcome many.

Years earlier, he had needed surgery on his leg. He could still recall the day he woke up in the hospital. He felt a tube in his arm and a dull ache in his soul. He did not regret his choice to run again, though. His doctor said he must eat well to get enough nutrients and drink plenty of liquid. Carlos did not chew his food quickly. He took his time and ate with care.

At night he read fiction, and the stories gave him sufficient strength for the next day. At the race, he waved a flag proudly. A judge came to inspect his running shoes. Carlos crossed the finish line last, but the crowd cheered. He wrote that night, "Today was a marvel."`,
      words: [
        { id: "24-1", word: "bath", ipa: "/bæθ/", pos: "n.", definition: "A bath is the act of washing your body in a tub of water.", example: "She took a long bath after work.", examples: ["The baby had a warm bath.", "I like a hot bath on a cold night."], vi: "sự tắm, bồn tắm", forms: ["baths", "bath"] },
        { id: "24-2", word: "bend", ipa: "/bend/", pos: "v.", definition: "To bend is to curve your body or to make something curved.", example: "He bent down to pick up the coin.", examples: ["Bend your knees when you lift the box.", "The strong wind bent the tree."], vi: "uốn cong, cúi xuống", forms: ["bending", "bent", "bends", "bend"] },
        { id: "24-3", word: "chew", ipa: "/tʃuː/", pos: "v.", definition: "To chew is to bite food many times before swallowing.", example: "Chew your food slowly.", examples: ["The dog chewed a bone.", "She chews gum all day."], vi: "nhai", forms: ["chewing", "chewed", "chews", "chew"] },
        { id: "24-4", word: "disabled", ipa: "/dɪsˈeɪbld/", pos: "adj.", definition: "A disabled person has a body or mind that does not work in the usual way.", example: "The building has a ramp for disabled people.", examples: ["He is disabled but very active.", "The disabled athlete won a medal."], vi: "khuyết tật", forms: ["disabled"] },
        { id: "24-5", word: "fantastic", ipa: "/fænˈtæstɪk/", pos: "adj.", definition: "Something fantastic is extremely good.", example: "We had a fantastic time at the beach.", examples: ["That is a fantastic idea!", "The food was fantastic."], vi: "tuyệt vời", forms: ["fantastic"] },
        { id: "24-6", word: "fiction", ipa: "/ˈfɪkʃn/", pos: "n.", definition: "Fiction is writing about imaginary people and events.", example: "She likes to read fiction at night.", examples: ["This novel is a work of fiction.", "He writes science fiction."], vi: "truyện hư cấu", forms: ["fiction"] },
        { id: "24-7", word: "flag", ipa: "/flæɡ/", pos: "n.", definition: "A flag is a piece of cloth with a pattern that stands for a country or group.", example: "The flag waved in the wind.", examples: ["Each country has its own flag.", "The children carried small flags."], vi: "lá cờ", forms: ["flags", "flag"] },
        { id: "24-8", word: "inspect", ipa: "/ɪnˈspekt/", pos: "v.", definition: "To inspect something is to look at it carefully to check it.", example: "The officer inspected the bags.", examples: ["The teacher inspected our homework.", "He inspects the machines every morning."], vi: "kiểm tra, thanh tra", forms: ["inspecting", "inspected", "inspects", "inspect"] },
        { id: "24-9", word: "journal", ipa: "/ˈdʒɜːrnl/", pos: "n.", definition: "A journal is a book where you write down your daily thoughts or events.", example: "He writes in his journal before bed.", examples: ["She kept a travel journal.", "The scientist wrote his results in a journal."], vi: "nhật ký, tạp chí", forms: ["journals", "journal"] },
        { id: "24-10", word: "liquid", ipa: "/ˈlɪkwɪd/", pos: "n.", definition: "A liquid is a substance that flows, such as water.", example: "Water is a clear liquid.", examples: ["Drink plenty of liquid in summer.", "The liquid spilled on the floor."], vi: "chất lỏng", forms: ["liquids", "liquid"] },
        { id: "24-11", word: "marvel", ipa: "/ˈmɑːrvl/", pos: "n.", definition: "A marvel is a thing that is wonderful and surprising.", example: "The bridge is a marvel of engineering.", examples: ["The new machine is a marvel.", "The children looked at the stars in wonder and marvel."], vi: "điều kỳ diệu", forms: ["marvels", "marvel"] },
        { id: "24-12", word: "nutrient", ipa: "/ˈnuːtriənt/", pos: "n.", definition: "A nutrient is a substance in food that helps you grow and stay healthy.", example: "Vegetables are full of nutrients.", examples: ["Plants take nutrients from the soil.", "Milk gives children important nutrients."], vi: "chất dinh dưỡng", forms: ["nutrients", "nutrient"] },
        { id: "24-13", word: "overcome", ipa: "/ˌoʊvərˈkʌm/", pos: "v.", definition: "To overcome a problem is to succeed in dealing with it.", example: "She overcame her fear of water.", examples: ["He overcame many difficulties.", "We can overcome this problem together."], vi: "vượt qua, khắc phục", forms: ["overcoming", "overcame", "overcome", "overcomes"] },
        { id: "24-14", word: "recall", ipa: "/rɪˈkɔːl/", pos: "v.", definition: "To recall something is to remember it.", example: "I cannot recall his name.", examples: ["She recalled the day they met.", "Do you recall where you put the keys?"], vi: "nhớ lại", forms: ["recalling", "recalled", "recalls", "recall"] },
        { id: "24-15", word: "regret", ipa: "/rɪˈɡret/", pos: "v.", definition: "To regret something is to feel sorry about it.", example: "I regret saying those words.", examples: ["He regrets not studying harder.", "She regretted her choice later."], vi: "hối tiếc", forms: ["regretting", "regretted", "regrets", "regret"] },
        { id: "24-16", word: "soul", ipa: "/soʊl/", pos: "n.", definition: "A soul is the part of a person that is not the body, such as feelings and spirit.", example: "The music touched her soul.", examples: ["He put his heart and soul into the work.", "Many believe the soul lives on after death."], vi: "linh hồn, tâm hồn", forms: ["souls", "soul"] },
        { id: "24-17", word: "sufficient", ipa: "/səˈfɪʃnt/", pos: "adj.", definition: "Sufficient means enough for what is needed.", example: "We have sufficient food for the trip.", examples: ["Is one hour sufficient for the test?", "She did not have sufficient time."], vi: "đủ, đầy đủ", forms: ["sufficient"] },
        { id: "24-18", word: "surgery", ipa: "/ˈsɜːrdʒəri/", pos: "n.", definition: "Surgery is a medical treatment in which a doctor cuts into the body to fix a problem.", example: "He needed surgery on his knee.", examples: ["The surgery lasted three hours.", "She is recovering after heart surgery."], vi: "phẫu thuật", forms: ["surgery"] },
        { id: "24-19", word: "tough", ipa: "/tʌf/", pos: "adj.", definition: "Something tough is strong or difficult to deal with.", example: "It was a tough week at work.", examples: ["The meat was tough to chew.", "He is a tough man who never gives up."], vi: "cứng, khó khăn, dai", forms: ["tough"] },
        { id: "24-20", word: "tube", ipa: "/tuːb/", pos: "n.", definition: "A tube is a long, narrow pipe that carries liquid or air.", example: "A tube carried air to the patient.", examples: ["She squeezed paste from the tube.", "The water flows through a thin tube."], vi: "ống", forms: ["tubes", "tube"] }
      ]
    },

    /* ======================================================================
       UNIT 25
       ====================================================================== */
    {
      id: 25,
      title: "Unit 25",
      storyTitle: "The Lost Wallet",
      story: `On a cold evening, an elder man named Mr. Hale lost his wallet on a busy street. It held a dozen coins, some cash, and a photo of his wife. He searched the bin by the bus stop and looked under a fence, but he found nothing. He sat on a bench and felt a mere shadow of himself.

A boy named Theo found the wallet in a bowl of leaves near a small cabin. He did not yell with joy. He opened it, saw the old photo, and felt sorry. "Whoever lost this must be very sad," he said. His friend Max had a rude idea. "Keep the cash," he said. Theo shook his head. "It would be wrong. It could even get us a penalty."

Theo went to the old man's house and settled the matter. Mr. Hale had a neat room with a vehicle parked outside. When he saw his wallet, a facial smile spread across his tired face. He wanted to admit his gratitude with a gift. "You are no criminal," Mr. Hale laughed. "You are a good boy. On this occasion, you have inspired me." Theo took only the old man's thanks.`,
      words: [
        { id: "25-1", word: "admit", ipa: "/ədˈmɪt/", pos: "v.", definition: "To admit something is to agree that it is true, often when you do not want to.", example: "He admitted that he had made a mistake.", examples: ["She admitted that she was afraid.", "I admit I was wrong."], vi: "thừa nhận", forms: ["admitting", "admitted", "admits", "admit"] },
        { id: "25-2", word: "bin", ipa: "/bɪn/", pos: "n.", definition: "A bin is a container where people throw away trash.", example: "Throw the paper in the bin.", examples: ["The bin is full of old newspapers.", "He put the can in the recycling bin."], vi: "thùng rác", forms: ["bins", "bin"] },
        { id: "25-3", word: "bowl", ipa: "/boʊl/", pos: "n.", definition: "A bowl is a round, deep dish for food or liquid.", example: "She filled a bowl with soup.", examples: ["There is a bowl of fruit on the table.", "The dog drank from his bowl."], vi: "cái bát, tô", forms: ["bowls", "bowl"] },
        { id: "25-4", word: "cabin", ipa: "/ˈkæbɪn/", pos: "n.", definition: "A cabin is a small wooden house, often in the mountains or woods.", example: "They stayed in a cabin by the lake.", examples: ["The cabin has one small room.", "Smoke came from the cabin's chimney."], vi: "căn nhà gỗ nhỏ, cabin", forms: ["cabins", "cabin"] },
        { id: "25-5", word: "cash", ipa: "/kæʃ/", pos: "n.", definition: "Cash is money in the form of coins and bills.", example: "I paid for the shoes in cash.", examples: ["Do you have any cash with you?", "The shop only takes cash."], vi: "tiền mặt", forms: ["cash"] },
        { id: "25-6", word: "criminal", ipa: "/ˈkrɪmɪnl/", pos: "n.", definition: "A criminal is a person who has done something against the law.", example: "The police caught the criminal.", examples: ["The criminal was sent to jail.", "He is not a criminal, just a fool."], vi: "tội phạm", forms: ["criminals", "criminal"] },
        { id: "25-7", word: "dozen", ipa: "/ˈdʌzn/", pos: "n.", definition: "A dozen is a group of twelve things.", example: "She bought a dozen eggs.", examples: ["There were a dozen people in the room.", "He ate half a dozen cookies."], vi: "một tá (12 cái)", forms: ["dozens", "dozen"] },
        { id: "25-8", word: "elder", ipa: "/ˈeldər/", pos: "adj.", definition: "Elder means older, especially when talking about people in a family.", example: "My elder brother is a doctor.", examples: ["She is the elder of the two sisters.", "The elder man gave advice to the boys."], vi: "lớn tuổi hơn, bậc cao niên", forms: ["elder"] },
        { id: "25-9", word: "facial", ipa: "/ˈfeɪʃl/", pos: "adj.", definition: "Facial means related to the face.", example: "She could tell his mood from his facial expression.", examples: ["He has a facial scar.", "A facial smile can make anyone feel better."], vi: "thuộc về khuôn mặt", forms: ["facial"] },
        { id: "25-10", word: "fence", ipa: "/fens/", pos: "n.", definition: "A fence is a wall made of wood or metal that goes around a yard or field.", example: "They built a fence around the garden.", examples: ["The cat jumped over the fence.", "The farmer painted his fence white."], vi: "hàng rào", forms: ["fences", "fence"] },
        { id: "25-11", word: "inspire", ipa: "/ɪnˈspaɪər/", pos: "v.", definition: "To inspire someone is to make them want to do something good.", example: "Her story inspired many young people.", examples: ["The teacher inspires her students.", "His courage inspired us all."], vi: "truyền cảm hứng", forms: ["inspiring", "inspired", "inspires", "inspire"] },
        { id: "25-12", word: "mere", ipa: "/mɪr/", pos: "adj.", definition: "Mere means only, and nothing more.", example: "It was a mere accident.", examples: ["He is a mere child.", "The cost was a mere five dollars."], vi: "chỉ là, đơn thuần", forms: ["mere"] },
        { id: "25-13", word: "neat", ipa: "/niːt/", pos: "adj.", definition: "Something neat is clean and in good order.", example: "She keeps her room neat.", examples: ["His writing is very neat.", "The shirts were in a neat pile."], vi: "gọn gàng, ngăn nắp", forms: ["neat"] },
        { id: "25-14", word: "occasion", ipa: "/əˈkeɪʒn/", pos: "n.", definition: "An occasion is a special time or event.", example: "The wedding was a happy occasion.", examples: ["She wore a dress for the occasion.", "On this occasion, I will say yes."], vi: "dịp, sự kiện", forms: ["occasions", "occasion"] },
        { id: "25-15", word: "penalty", ipa: "/ˈpenəlti/", pos: "n.", definition: "A penalty is a punishment for breaking a rule or law.", example: "The penalty for speeding is a fine.", examples: ["He paid a penalty for being late.", "The team scored from a penalty."], vi: "hình phạt, quả phạt đền", forms: ["penalties", "penalty"] },
        { id: "25-16", word: "rude", ipa: "/ruːd/", pos: "adj.", definition: "A rude person is not polite.", example: "It is rude to talk with food in your mouth.", examples: ["He was rude to the waiter.", "She made a rude remark."], vi: "thô lỗ, bất lịch sự", forms: ["rude"] },
        { id: "25-17", word: "settle", ipa: "/ˈsetl/", pos: "v.", definition: "To settle a matter is to end an argument or to decide it.", example: "The two men settled the argument.", examples: ["They settled in a small town.", "Let's settle this quickly."], vi: "giải quyết, định cư", forms: ["settling", "settled", "settles", "settle"] },
        { id: "25-18", word: "vehicle", ipa: "/ˈviːəkl/", pos: "n.", definition: "A vehicle is a machine with an engine that carries people or goods.", example: "A truck is a large vehicle.", examples: ["The vehicle stopped at the red light.", "He parked his vehicle in the garage."], vi: "phương tiện giao thông", forms: ["vehicles", "vehicle"] },
        { id: "25-19", word: "wallet", ipa: "/ˈwɑːlɪt/", pos: "n.", definition: "A wallet is a small case for carrying money and cards.", example: "He took out his wallet to pay.", examples: ["She lost her wallet on the bus.", "The wallet was made of leather."], vi: "ví tiền", forms: ["wallets", "wallet"] },
        { id: "25-20", word: "yell", ipa: "/jel/", pos: "v.", definition: "To yell is to shout very loudly.", example: "The boy yelled for help.", examples: ["Don't yell at your sister.", "The coach yelled from the side of the field."], vi: "la hét", forms: ["yelling", "yelled", "yells", "yell"] }
      ]
    },

    /* ======================================================================
       UNIT 26
       ====================================================================== */
    {
      id: 26,
      title: "Unit 26",
      storyTitle: "The Hurricane and the Reef",
      story: `Captain Dara ran a small boat near a coral reef. Her task was to take tourists to the best places to surf. She was a strict leader and had a firm rule: no one goes out when the weather is bad. The crew wore plain cotton shirts and always checked the fuel before they left.

One morning, a sailor named Pete came to the deck. "I heard a hurricane is coming," he said. "That is a grand joke," a tourist said. He tried to amuse the others and did not engage with the warning. But Dara did not accuse him of anything. She asked everyone to shut the windows, and she adjusted the sails.

The storm was so strong that the boat nearly hit the reef and crash. The waves rose in a wild zone of foam. The crew worked together, and the boat was saved. The loss was small: only a few ropes and a broken chair.

When the sea was calm again, the tourists thanked Dara. "You were right," the joking man said. Dara smiled. "The sea is never a joke," she said.`,
      words: [
        { id: "26-1", word: "accuse", ipa: "/əˈkjuːz/", pos: "v.", definition: "To accuse someone is to say that they did something wrong.", example: "She accused him of taking her pen.", examples: ["They accused the man of stealing.", "Don't accuse me without proof."], vi: "buộc tội, cáo buộc", forms: ["accusing", "accused", "accuses", "accuse"] },
        { id: "26-2", word: "adjust", ipa: "/əˈdʒʌst/", pos: "v.", definition: "To adjust something is to change it a little to make it better.", example: "He adjusted the mirror before driving.", examples: ["She adjusted her tie.", "It takes time to adjust to a new school."], vi: "điều chỉnh", forms: ["adjusting", "adjusted", "adjusts", "adjust"] },
        { id: "26-3", word: "amuse", ipa: "/əˈmjuːz/", pos: "v.", definition: "To amuse someone is to make them smile or laugh.", example: "The clown amused the children.", examples: ["The joke amused everyone.", "She amused the baby with funny faces."], vi: "làm vui, giải trí", forms: ["amusing", "amused", "amuses", "amuse"] },
        { id: "26-4", word: "coral", ipa: "/ˈkɔːrəl/", pos: "n.", definition: "Coral is a hard material made by tiny sea animals.", example: "The divers saw colorful coral under the sea.", examples: ["Coral grows slowly in warm water.", "She wore a necklace of pink coral."], vi: "san hô", forms: ["corals", "coral"] },
        { id: "26-5", word: "cotton", ipa: "/ˈkɑːtn/", pos: "n.", definition: "Cotton is a soft plant material that is used to make cloth.", example: "This shirt is made of cotton.", examples: ["The farmers grow cotton in the south.", "Cotton clothes are cool in summer."], vi: "bông, vải cotton", forms: ["cotton"] },
        { id: "26-6", word: "crash", ipa: "/kræʃ/", pos: "v.", definition: "To crash is to hit something hard, often with a loud noise.", example: "The car crashed into a wall.", examples: ["The plane crashed in a field.", "The waves crashed against the rocks."], vi: "đâm sầm, va chạm", forms: ["crashing", "crashed", "crashes", "crash"] },
        { id: "26-7", word: "deck", ipa: "/dek/", pos: "n.", definition: "A deck is the flat floor on the top of a ship.", example: "The sailors stood on the deck.", examples: ["We had dinner on the deck of the boat.", "She cleaned the deck every morning."], vi: "boong tàu, sàn", forms: ["decks", "deck"] },
        { id: "26-8", word: "engage", ipa: "/ɪnˈɡeɪdʒ/", pos: "v.", definition: "To engage with something is to take part or be involved in it.", example: "The teacher engaged the students in a game.", examples: ["He did not engage in the argument.", "A good story engages the reader."], vi: "tham gia, thu hút", forms: ["engaging", "engaged", "engages", "engage"] },
        { id: "26-9", word: "firm", ipa: "/fɜːrm/", pos: "adj.", definition: "Something firm is hard and does not move easily, or strong and clear.", example: "He gave a firm handshake.", examples: ["The bed is too firm for me.", "She made a firm decision."], vi: "chắc chắn, cứng rắn", forms: ["firm"] },
        { id: "26-10", word: "fuel", ipa: "/ˈfjuːəl/", pos: "n.", definition: "Fuel is something that is burned to give power or heat.", example: "The car ran out of fuel.", examples: ["Coal is a fuel.", "The boat needs more fuel."], vi: "nhiên liệu", forms: ["fuel"] },
        { id: "26-11", word: "grand", ipa: "/ɡrænd/", pos: "adj.", definition: "Something grand is large and impressive.", example: "The king lived in a grand palace.", examples: ["They held a grand party.", "It was a grand idea."], vi: "to lớn, hoành tráng", forms: ["grand"] },
        { id: "26-12", word: "hurricane", ipa: "/ˈhɜːrəkeɪn/", pos: "n.", definition: "A hurricane is a very strong storm with high winds.", example: "The hurricane destroyed many houses.", examples: ["A hurricane is coming to the coast.", "People left before the hurricane arrived."], vi: "bão lớn", forms: ["hurricanes", "hurricane"] },
        { id: "26-13", word: "loss", ipa: "/lɔːs/", pos: "n.", definition: "A loss is the state of no longer having something.", example: "The company suffered a big loss.", examples: ["She felt the loss of her friend.", "The team had a loss in the final."], vi: "sự mất mát, thua lỗ", forms: ["losses", "loss"] },
        { id: "26-14", word: "plain", ipa: "/pleɪn/", pos: "adj.", definition: "Something plain is simple and not decorated.", example: "She wore a plain white dress.", examples: ["The room was plain but clean.", "I like plain rice."], vi: "giản dị, trơn", forms: ["plain"] },
        { id: "26-15", word: "reef", ipa: "/riːf/", pos: "n.", definition: "A reef is a line of rock or coral near the surface of the sea.", example: "Many fish live near the reef.", examples: ["The ship hit a reef.", "Divers explored the reef."], vi: "rạn san hô, đá ngầm", forms: ["reefs", "reef"] },
        { id: "26-16", word: "shut", ipa: "/ʃʌt/", pos: "v.", definition: "To shut something is to close it.", example: "Please shut the door.", examples: ["He shut his eyes and slept.", "The shop shuts at nine."], vi: "đóng lại", forms: ["shutting", "shut", "shuts"] },
        { id: "26-17", word: "strict", ipa: "/strɪkt/", pos: "adj.", definition: "A strict person makes sure rules are followed.", example: "Our teacher is strict about homework.", examples: ["His parents are strict.", "There is a strict rule against running."], vi: "nghiêm khắc", forms: ["strict"] },
        { id: "26-18", word: "surf", ipa: "/sɜːrf/", pos: "v.", definition: "To surf is to ride a wave on a board.", example: "They surf every weekend.", examples: ["He learned to surf at the beach.", "It's too windy to surf today."], vi: "lướt sóng", forms: ["surfing", "surfed", "surfs", "surf"] },
        { id: "26-19", word: "task", ipa: "/tæsk/", pos: "n.", definition: "A task is a piece of work that someone must do.", example: "Cleaning the kitchen was her task.", examples: ["The teacher gave us a hard task.", "Each worker has a different task."], vi: "nhiệm vụ, công việc", forms: ["tasks", "task"] },
        { id: "26-20", word: "zone", ipa: "/zoʊn/", pos: "n.", definition: "A zone is an area that is used for a special purpose.", example: "This is a no-parking zone.", examples: ["The danger zone is closed to visitors.", "Don't enter the war zone."], vi: "khu vực, vùng", forms: ["zones", "zone"] }
      ]
    },

    /* ======================================================================
       UNIT 27
       ====================================================================== */
    {
      id: 27,
      title: "Unit 27",
      storyTitle: "The Duke's Twin",
      story: `In a faraway land lived a duke who had a twin brother named Alaric. The two men did not look ordinary: they had the same eyes, the same smile, and the same voice. They could resemble each other so much that even their servants made mistakes. One day, the duke decided to hire a minister to help him rule. Alaric did not like the idea.

That night, Alaric took the duke's coat and rode into town. He wanted to expose a secret. A cardinal from the church was meeting with a witch. They spoke about a new plan, and Alaric tried to capture the sound of their voices to prove it. Soon the guards saw him and thought he was the duke. They arrested him, and he was placed in jail.

When the real duke came, he was shocked. He had to apologize to the guards for the confusion. "My brother is innocent," he said. "I am guilty of having ignored him." He wanted to preserve peace in the family and offer a permanent place to his twin. The cardinal and the witch were punished, and the minister was sent away. Alaric promised to stop making trouble.

The duke's apology was warm. Alaric, with a bold smile, tried to pronounce his thanks, but he could only laugh. The duke saw one small symptom of worry on his twin's face and knew he would be loved. Even the tobacco in his pipe could not hide his joy.`,
      words: [
        { id: "27-1", word: "apology", ipa: "/əˈpɑːlədʒi/", pos: "n.", definition: "An apology is a statement that says you are sorry.", example: "He made an apology for being late.", examples: ["She accepted his apology.", "I owe you an apology."], vi: "lời xin lỗi", forms: ["apologies", "apology", "apologize"] },
        { id: "27-2", word: "bold", ipa: "/boʊld/", pos: "adj.", definition: "A bold person is brave and not afraid to take risks.", example: "It was a bold decision to leave his job.", examples: ["She wore a bold red dress.", "The bold boy climbed the tall tree."], vi: "táo bạo, can đảm", forms: ["bold"] },
        { id: "27-3", word: "capture", ipa: "/ˈkæptʃər/", pos: "v.", definition: "To capture someone or something is to take them by force or to record them.", example: "The police captured the thief.", examples: ["The photo captured the moment.", "They captured a wild horse."], vi: "bắt giữ, ghi lại", forms: ["capturing", "captured", "captures", "capture"] },
        { id: "27-4", word: "cardinal", ipa: "/ˈkɑːrdnəl/", pos: "n.", definition: "A cardinal is a high official in the Catholic church.", example: "The cardinal spoke to the crowd.", examples: ["The cardinal wore a red robe.", "A new cardinal was chosen."], vi: "hồng y giáo chủ", forms: ["cardinals", "cardinal"] },
        { id: "27-5", word: "duke", ipa: "/duːk/", pos: "n.", definition: "A duke is a man with a high rank in a royal land.", example: "The duke lived in a great castle.", examples: ["The duke held a ball for the guests.", "He was the son of a duke."], vi: "công tước", forms: ["dukes", "duke"] },
        { id: "27-6", word: "expose", ipa: "/ɪkˈspoʊz/", pos: "v.", definition: "To expose something is to show what was hidden.", example: "The newspaper exposed the secret.", examples: ["Don't expose the plants to too much sun.", "He exposed the lie."], vi: "phơi bày, vạch trần", forms: ["exposing", "exposed", "exposes", "expose"] },
        { id: "27-7", word: "guilty", ipa: "/ˈɡɪlti/", pos: "adj.", definition: "A guilty person has done something wrong, or feels bad about it.", example: "The judge found him guilty.", examples: ["She felt guilty about the lie.", "The jury said he was not guilty."], vi: "có tội, cảm thấy có lỗi", forms: ["guilty"] },
        { id: "27-8", word: "hire", ipa: "/haɪər/", pos: "v.", definition: "To hire someone is to give them a job and pay them.", example: "The shop hired two new workers.", examples: ["We hired a teacher for the class.", "She was hired last week."], vi: "thuê, tuyển dụng", forms: ["hiring", "hired", "hires", "hire"] },
        { id: "27-9", word: "innocent", ipa: "/ˈɪnəsnt/", pos: "adj.", definition: "An innocent person has not done anything wrong.", example: "The man was innocent of the crime.", examples: ["The child had an innocent face.", "She is innocent until proven guilty."], vi: "vô tội, ngây thơ", forms: ["innocent"] },
        { id: "27-10", word: "jail", ipa: "/dʒeɪl/", pos: "n.", definition: "A jail is a place where people are kept as punishment.", example: "The thief was sent to jail.", examples: ["He spent a year in jail.", "The jail has strong walls."], vi: "nhà tù", forms: ["jails", "jail"] },
        { id: "27-11", word: "minister", ipa: "/ˈmɪnɪstər/", pos: "n.", definition: "A minister is a person who leads a part of the government, or a church.", example: "The minister gave a speech.", examples: ["The prime minister met the king.", "A minister led the service."], vi: "bộ trưởng, mục sư", forms: ["ministers", "minister"] },
        { id: "27-12", word: "ordinary", ipa: "/ˈɔːrdneri/", pos: "adj.", definition: "Something ordinary is normal and not special.", example: "It was an ordinary day at school.", examples: ["She is an ordinary girl with a big dream.", "He led an ordinary life."], vi: "bình thường, thông thường", forms: ["ordinary"] },
        { id: "27-13", word: "permanent", ipa: "/ˈpɜːrmənənt/", pos: "adj.", definition: "Something permanent lasts for a very long time or forever.", example: "He found a permanent job.", examples: ["The ink is permanent.", "They made a permanent home here."], vi: "vĩnh viễn, lâu dài", forms: ["permanent"] },
        { id: "27-14", word: "preserve", ipa: "/prɪˈzɜːrv/", pos: "v.", definition: "To preserve something is to keep it safe or in its original state.", example: "They preserved the old church.", examples: ["Salt can preserve fish.", "We must preserve our forests."], vi: "bảo tồn, giữ gìn", forms: ["preserving", "preserved", "preserves", "preserve"] },
        { id: "27-15", word: "pronounce", ipa: "/prəˈnaʊns/", pos: "v.", definition: "To pronounce a word is to say it in a certain way.", example: "How do you pronounce this word?", examples: ["She pronounced his name wrong.", "The judge pronounced the verdict."], vi: "phát âm, tuyên bố", forms: ["pronouncing", "pronounced", "pronounces", "pronounce"] },
        { id: "27-16", word: "resemble", ipa: "/rɪˈzembl/", pos: "v.", definition: "To resemble someone is to look like them.", example: "She resembles her mother.", examples: ["The two houses resemble each other.", "He resembles an actor."], vi: "giống, trông giống", forms: ["resembling", "resembled", "resembles", "resemble"] },
        { id: "27-17", word: "symptom", ipa: "/ˈsɪmptəm/", pos: "n.", definition: "A symptom is a sign that someone is sick.", example: "A cough is a symptom of a cold.", examples: ["Fever is a common symptom.", "She had no symptoms."], vi: "triệu chứng", forms: ["symptoms", "symptom"] },
        { id: "27-18", word: "tobacco", ipa: "/təˈbækoʊ/", pos: "n.", definition: "Tobacco is a plant whose leaves are dried and smoked.", example: "Tobacco is harmful to your health.", examples: ["He smelled of tobacco.", "Farmers grow tobacco in warm places."], vi: "thuốc lá", forms: ["tobacco"] },
        { id: "27-19", word: "twin", ipa: "/twɪn/", pos: "n.", definition: "A twin is one of two children who are born at the same time.", example: "She has a twin sister.", examples: ["The twins look exactly alike.", "My brother is a twin."], vi: "sinh đôi", forms: ["twins", "twin"] },
        { id: "27-20", word: "witch", ipa: "/wɪtʃ/", pos: "n.", definition: "A witch is a woman in stories who has magic powers.", example: "The witch made a magic drink.", examples: ["The witch lived in a dark forest.", "Children dress as witches on Halloween."], vi: "phù thủy", forms: ["witches", "witch"] }
      ]
    },

    /* ======================================================================
       UNIT 28
       ====================================================================== */
    {
      id: 28,
      title: "Unit 28",
      storyTitle: "The Inn by the Bridge",
      story: `Near an old stone bridge stood a small inn. The innkeeper, Mabel, was a woman of sharp mind who loved to talk about philosophy. Guests came from far away to sort out their problems with her. One day, a stranger arrived with bare feet and a heavy bag. She offered to accompany him to a room.

"Where are you from?" Mabel asked. The man took a deep breath and told her he was a traveler. Mabel poured him a pot of tea and put some bread on a tray. "Who would dare walk so far without shoes?" she asked. He smiled, "I broke the branch of an old tree and my sandals broke too." She laughed.

That night, a heavy rain fell. The water rose quickly under the bridge. Mabel put a tight rope around the door to keep the water out. She cast a net across the entrance. The traveler had an electronic device in his pocket and used a virtual map to find the path to higher ground. "I can subtract the danger by moving upstairs," he said.

By morning, the storm was over. The man planted a seed near the bridge as a gift. Mabel weighed the small thing in her hand and whispered, "A tree will grow here one day." The traveler nodded.`,
      words: [
        { id: "28-1", word: "accompany", ipa: "/əˈkʌmpəni/", pos: "v.", definition: "To accompany someone is to go with them.", example: "I will accompany you to the station.", examples: ["She accompanied her friend to the hospital.", "A guide accompanied the tourists."], vi: "đi cùng, đi kèm", forms: ["accompanying", "accompanied", "accompanies", "accompany"] },
        { id: "28-2", word: "bare", ipa: "/ber/", pos: "adj.", definition: "Something bare is not covered by anything.", example: "The children walked on the beach in bare feet.", examples: ["The room was bare and cold.", "The trees are bare in winter."], vi: "trần, trơ trụi", forms: ["bare"] },
        { id: "28-3", word: "branch", ipa: "/bræntʃ/", pos: "n.", definition: "A branch is a part of a tree that grows out from the trunk.", example: "A bird sat on a branch.", examples: ["The branch broke under his weight.", "The bank has a branch in our town."], vi: "cành cây, chi nhánh", forms: ["branches", "branch"] },
        { id: "28-4", word: "breath", ipa: "/breθ/", pos: "n.", definition: "A breath is the air that you take in or let out of your lungs.", example: "He took a deep breath before jumping.", examples: ["She was out of breath after running.", "I can see my breath in the cold air."], vi: "hơi thở", forms: ["breaths", "breath"] },
        { id: "28-5", word: "bridge", ipa: "/brɪdʒ/", pos: "n.", definition: "A bridge is a structure that lets people cross a river or road.", example: "We crossed the bridge on foot.", examples: ["The old bridge is made of stone.", "A new bridge was built over the river."], vi: "cây cầu", forms: ["bridges", "bridge"] },
        { id: "28-6", word: "cast", ipa: "/kæst/", pos: "v.", definition: "To cast something is to throw it, especially a net or a line.", example: "The fisherman cast his net into the sea.", examples: ["She cast a glance at the clock.", "The tree cast a long shadow."], vi: "quăng, ném", forms: ["casting", "cast", "casts"] },
        { id: "28-7", word: "dare", ipa: "/der/", pos: "v.", definition: "To dare is to be brave enough to do something risky.", example: "I don't dare to ask him.", examples: ["Nobody dared to speak.", "How dare you say that!"], vi: "dám, cả gan", forms: ["daring", "dared", "dares", "dare"] },
        { id: "28-8", word: "electronic", ipa: "/ɪˌlekˈtrɑːnɪk/", pos: "adj.", definition: "Electronic equipment uses electricity to work, like a phone or a computer.", example: "He bought an electronic book.", examples: ["Electronic games are popular with kids.", "The shop sells electronic devices."], vi: "điện tử", forms: ["electronic"] },
        { id: "28-9", word: "inn", ipa: "/ɪn/", pos: "n.", definition: "An inn is a small hotel where travelers can stay.", example: "They stayed at an old inn.", examples: ["The inn had a warm fire.", "The inn is near the bridge."], vi: "quán trọ", forms: ["inns", "inn", "innkeeper"] },
        { id: "28-10", word: "net", ipa: "/net/", pos: "n.", definition: "A net is a material of crossed strings with holes, used for catching things.", example: "The fisherman pulled up his net.", examples: ["The ball hit the net.", "A net kept the insects out."], vi: "lưới", forms: ["nets", "net"] },
        { id: "28-11", word: "philosophy", ipa: "/fəˈlɑːsəfi/", pos: "n.", definition: "Philosophy is the study of ideas about life and the world.", example: "He studies philosophy at university.", examples: ["Her philosophy is to be kind to others.", "The book is about Greek philosophy."], vi: "triết học, triết lý", forms: ["philosophy"] },
        { id: "28-12", word: "pot", ipa: "/pɑːt/", pos: "n.", definition: "A pot is a round container used for cooking or holding things.", example: "She put the soup in a big pot.", examples: ["There is a pot of tea on the table.", "He planted a flower in a pot."], vi: "cái nồi, chậu", forms: ["pots", "pot"] },
        { id: "28-13", word: "seed", ipa: "/siːd/", pos: "n.", definition: "A seed is a small part of a plant from which a new plant grows.", example: "Plant the seed in the soil.", examples: ["A tiny seed can grow into a big tree.", "Birds ate the seeds."], vi: "hạt giống", forms: ["seeds", "seed"] },
        { id: "28-14", word: "sharp", ipa: "/ʃɑːrp/", pos: "adj.", definition: "Something sharp has an edge that can cut easily.", example: "Be careful with that sharp knife.", examples: ["He has a sharp mind.", "A sharp pain hit her arm."], vi: "sắc, nhọn, nhạy", forms: ["sharp"] },
        { id: "28-15", word: "sort", ipa: "/sɔːrt/", pos: "v.", definition: "To sort things is to put them in order or in groups.", example: "She sorted the clothes by color.", examples: ["Let's sort the mail.", "He sorted the books on the shelf."], vi: "sắp xếp, phân loại", forms: ["sorting", "sorted", "sorts", "sort"] },
        { id: "28-16", word: "subtract", ipa: "/səbˈtrækt/", pos: "v.", definition: "To subtract is to take one number away from another.", example: "Subtract three from ten.", examples: ["If you subtract five from eight, you get three.", "He subtracted the cost from his money."], vi: "trừ, lấy đi", forms: ["subtracting", "subtracted", "subtracts", "subtract"] },
        { id: "28-17", word: "tight", ipa: "/taɪt/", pos: "adj.", definition: "Something tight fits closely or is held firmly.", example: "The shoes are too tight for me.", examples: ["He tied the rope tight.", "She gave him a tight hug."], vi: "chặt, bó sát", forms: ["tight"] },
        { id: "28-18", word: "virtual", ipa: "/ˈvɜːrtʃuəl/", pos: "adj.", definition: "Something virtual exists on a computer rather than in real life.", example: "They took a virtual tour of the museum.", examples: ["She plays a virtual game with friends.", "The virtual world looks real."], vi: "ảo", forms: ["virtual"] },
        { id: "28-19", word: "weigh", ipa: "/weɪ/", pos: "v.", definition: "To weigh something is to measure how heavy it is.", example: "She weighed the apples on a scale.", examples: ["How much do you weigh?", "The baby weighs three kilograms."], vi: "cân, nặng", forms: ["weighing", "weighed", "weighs", "weigh"] },
        { id: "28-20", word: "whisper", ipa: "/ˈwɪspər/", pos: "v.", definition: "To whisper is to speak very softly.", example: "She whispered a secret in his ear.", examples: ["Please whisper in the library.", "He whispered to the baby."], vi: "thì thầm", forms: ["whispering", "whispered", "whispers", "whisper"] }
      ]
    },

    /* ======================================================================
       UNIT 29
       ====================================================================== */
    {
      id: 29,
      title: "Unit 29",
      storyTitle: "The Potter's Village",
      story: `Long ago, a potter named Hana lived in a village near the shore. She made bowls and vases from clay, and her work was famous. The land by the river was fertile, so the villagers grew rice and fruit. Nowadays, many people still visit the place.

Every year, an annual festival took place in the village. The villagers wore bright cloth and put new curtains in their windows. Hana's pottery was a big part of the festival. Her furniture was simple, but her pots were an ideal gift. Hana told stories and used a feather to paint on her clay.

One spring, a terrible flood came. The river rose and covered the fields. Many families lost their homes. Hana had a grave worry. Some people were religious and prayed. Others tried to obtain boats. Hana had the intelligence to build a wheel and make a raft from her old pots.

After the flood, a young traveler with a romantic heart visited Hana. He picked up a shell on the shore and brought it to her. "You deserve a prize," he said. Hana only smiled. She made an abstract vase from the shell and gave it to him.`,
      words: [
        { id: "29-1", word: "abstract", ipa: "/ˈæbstrækt/", pos: "adj.", definition: "Abstract means based on ideas, not real things.", example: "The artist painted an abstract picture.", examples: ["Love is an abstract idea.", "The museum has abstract art."], vi: "trừu tượng", forms: ["abstract"] },
        { id: "29-2", word: "annual", ipa: "/ˈænjuəl/", pos: "adj.", definition: "Annual means happening once a year.", example: "The annual meeting takes place in May.", examples: ["We attend the annual festival.", "His annual salary is high."], vi: "hằng năm", forms: ["annual"] },
        { id: "29-3", word: "clay", ipa: "/kleɪ/", pos: "n.", definition: "Clay is a soft earth that becomes hard when it is baked.", example: "The potter made a vase from clay.", examples: ["The children played with clay.", "The riverbank was full of red clay."], vi: "đất sét", forms: ["clay"] },
        { id: "29-4", word: "cloth", ipa: "/klɔːθ/", pos: "n.", definition: "Cloth is material made by weaving or knitting threads.", example: "She wiped the table with a cloth.", examples: ["The dress is made of fine cloth.", "He wrapped the gift in cloth."], vi: "vải", forms: ["cloth", "cloths"] },
        { id: "29-5", word: "curtain", ipa: "/ˈkɜːrtn/", pos: "n.", definition: "A curtain is a piece of cloth that hangs over a window.", example: "She closed the curtains at night.", examples: ["The curtain rose and the play began.", "The curtains were blue."], vi: "rèm cửa", forms: ["curtains", "curtain"] },
        { id: "29-6", word: "deserve", ipa: "/dɪˈzɜːrv/", pos: "v.", definition: "To deserve something is to have earned it by what you have done.", example: "You deserve a rest after the hard work.", examples: ["He deserves a prize.", "She deserved to win."], vi: "xứng đáng", forms: ["deserving", "deserved", "deserves", "deserve"] },
        { id: "29-7", word: "feather", ipa: "/ˈfeðər/", pos: "n.", definition: "A feather is one of the light, soft parts that cover a bird.", example: "A feather fell from the bird.", examples: ["The pillow is filled with feathers.", "She wore a hat with a feather."], vi: "lông chim", forms: ["feathers", "feather"] },
        { id: "29-8", word: "fertile", ipa: "/ˈfɜːrtl/", pos: "adj.", definition: "Fertile land is good for growing plants.", example: "The valley has fertile soil.", examples: ["The river made the land fertile.", "Fertile fields gave a rich harvest."], vi: "màu mỡ", forms: ["fertile"] },
        { id: "29-9", word: "flood", ipa: "/flʌd/", pos: "n.", definition: "A flood is a large amount of water that covers dry land.", example: "The flood destroyed many homes.", examples: ["The town was hit by a flood.", "Heavy rain caused a flood."], vi: "lũ lụt", forms: ["floods", "flood"] },
        { id: "29-10", word: "furniture", ipa: "/ˈfɜːrnɪtʃər/", pos: "n.", definition: "Furniture is the large objects in a room, such as chairs and tables.", example: "They bought new furniture for the living room.", examples: ["The furniture is made of wood.", "She moved the furniture around."], vi: "đồ nội thất", forms: ["furniture"] },
        { id: "29-11", word: "grave", ipa: "/ɡreɪv/", pos: "adj.", definition: "Something grave is very serious.", example: "The doctor gave us grave news.", examples: ["It was a grave mistake.", "He looked grave and worried."], vi: "nghiêm trọng, nghiêm nghị", forms: ["grave"] },
        { id: "29-12", word: "ideal", ipa: "/aɪˈdiːəl/", pos: "adj.", definition: "Something ideal is perfect for a certain use.", example: "The beach is ideal for a holiday.", examples: ["This is an ideal place to rest.", "She is the ideal person for the job."], vi: "lý tưởng", forms: ["ideal"] },
        { id: "29-13", word: "intelligence", ipa: "/ɪnˈtelɪdʒəns/", pos: "n.", definition: "Intelligence is the ability to learn and understand things easily.", example: "She showed great intelligence in solving the puzzle.", examples: ["Dolphins have high intelligence.", "His intelligence surprised everyone."], vi: "trí thông minh", forms: ["intelligence"] },
        { id: "29-14", word: "nowadays", ipa: "/ˈnaʊədeɪz/", pos: "adv.", definition: "Nowadays means at the present time.", example: "Nowadays, most people have phones.", examples: ["Nowadays, I walk to work.", "Life is faster nowadays."], vi: "ngày nay", forms: ["nowadays"] },
        { id: "29-15", word: "obtain", ipa: "/əbˈteɪn/", pos: "v.", definition: "To obtain something is to get it.", example: "She obtained a license to drive.", examples: ["He obtained the book from the library.", "How can I obtain a ticket?"], vi: "đạt được, có được", forms: ["obtaining", "obtained", "obtains", "obtain"] },
        { id: "29-16", word: "religious", ipa: "/rɪˈlɪdʒəs/", pos: "adj.", definition: "A religious person believes in a god or follows a religion.", example: "She is a very religious woman.", examples: ["They attended a religious service.", "Many holidays are religious."], vi: "có tín ngưỡng, thuộc tôn giáo", forms: ["religious"] },
        { id: "29-17", word: "romantic", ipa: "/roʊˈmæntɪk/", pos: "adj.", definition: "Something romantic is related to love.", example: "They had a romantic dinner.", examples: ["He is a romantic man.", "The film is a romantic story."], vi: "lãng mạn", forms: ["romantic"] },
        { id: "29-18", word: "shell", ipa: "/ʃel/", pos: "n.", definition: "A shell is the hard outer cover of an egg or a sea animal.", example: "She collected shells on the beach.", examples: ["The turtle hid in its shell.", "He cracked the egg shell."], vi: "vỏ sò, vỏ", forms: ["shells", "shell"] },
        { id: "29-19", word: "shore", ipa: "/ʃɔːr/", pos: "n.", definition: "The shore is the land at the edge of the sea or a lake.", example: "The boat reached the shore.", examples: ["We walked along the shore.", "Waves hit the shore."], vi: "bờ biển, bờ", forms: ["shores", "shore"] },
        { id: "29-20", word: "wheel", ipa: "/wiːl/", pos: "n.", definition: "A wheel is a round object that turns, like on a car.", example: "The car has four wheels.", examples: ["The potter's wheel turned fast.", "A wheel fell off the cart."], vi: "bánh xe", forms: ["wheels", "wheel"] }
      ]
    },

    /* ======================================================================
       UNIT 30
       ====================================================================== */
    {
      id: 30,
      title: "Unit 30",
      storyTitle: "The Student and the Treasure Map",
      story: `Leo was a student who lived in a small downtown apartment. He had a scholarship, but it was a temporary one, and he had to borrow money from his uncle to pay the rent. His former teacher told him about a practical way to earn extra money: sell old books. "Many people are ready to invest in rare books," she said.

One day, Leo was cleaning an old shelf when he found a dusty map in a book. At first, he assumed it was a joke. The map showed a treasure on a faraway island. He found a client who wanted to buy it and asked for a loan to travel there. The fare for the boat was high, but Leo felt a strong urge to go.

He tried to appeal to a bank for help, but the officer said no. Leo felt embarrassed. Yet he did not give up. He found work and saved part of his salary. In a quarter of a year, he had enough money.

On the island, he used a simple formula his teacher had taught him to find the right place. He found the chest of treasure and was no longer dull and tired. It was a day to remember. When he returned, he used the money to found a small school for poor students.`,
      words: [
        { id: "30-1", word: "appeal", ipa: "/əˈpiːl/", pos: "v.", definition: "To appeal is to ask for help, or to be interesting to someone.", example: "The government appealed for help after the flood.", examples: ["The idea appeals to me.", "She appealed to the judge for mercy."], vi: "kêu gọi, hấp dẫn", forms: ["appealing", "appealed", "appeals", "appeal"] },
        { id: "30-2", word: "assume", ipa: "/əˈsuːm/", pos: "v.", definition: "To assume something is to think it is true without proof.", example: "I assumed that you knew the answer.", examples: ["Don't assume he will come.", "She assumed the shop was open."], vi: "cho rằng, giả định", forms: ["assuming", "assumed", "assumes", "assume"] },
        { id: "30-3", word: "borrow", ipa: "/ˈbɑːroʊ/", pos: "v.", definition: "To borrow something is to take it for a short time and give it back.", example: "Can I borrow your pen?", examples: ["He borrowed a book from the library.", "She borrowed money from her uncle."], vi: "mượn", forms: ["borrowing", "borrowed", "borrows", "borrow"] },
        { id: "30-4", word: "client", ipa: "/ˈklaɪənt/", pos: "n.", definition: "A client is a person who pays for the services of a company or a professional.", example: "The lawyer met with her client.", examples: ["The company lost a big client.", "He is a client of this bank."], vi: "khách hàng", forms: ["clients", "client"] },
        { id: "30-5", word: "downtown", ipa: "/ˌdaʊnˈtaʊn/", pos: "n.", definition: "Downtown is the main business area of a city.", example: "We went downtown to see a movie.", examples: ["She works downtown.", "Downtown is busy on weekends."], vi: "khu trung tâm thành phố", forms: ["downtown"] },
        { id: "30-6", word: "dull", ipa: "/dʌl/", pos: "adj.", definition: "Something dull is boring, or not sharp or bright.", example: "The movie was dull.", examples: ["The knife is dull.", "It was a dull, gray day."], vi: "tẻ nhạt, cùn, xỉn", forms: ["dull"] },
        { id: "30-7", word: "embarrass", ipa: "/ɪmˈbærəs/", pos: "v.", definition: "To embarrass someone is to make them feel shy or ashamed.", example: "His mistake embarrassed him.", examples: ["Don't embarrass me in front of my friends.", "She was embarrassed by her answer."], vi: "làm xấu hổ", forms: ["embarrassing", "embarrassed", "embarrasses", "embarrass"] },
        { id: "30-8", word: "fare", ipa: "/fer/", pos: "n.", definition: "A fare is the money you pay to travel on a bus, train, or boat.", example: "The bus fare is two dollars.", examples: ["The taxi fare was high.", "The train fare has gone up."], vi: "giá vé, cước phí", forms: ["fares", "fare"] },
        { id: "30-9", word: "former", ipa: "/ˈfɔːrmər/", pos: "adj.", definition: "Former means from an earlier time.", example: "He is a former soldier.", examples: ["Her former teacher called her.", "They are former classmates."], vi: "trước đây, cựu", forms: ["former"] },
        { id: "30-10", word: "formula", ipa: "/ˈfɔːrmjələ/", pos: "n.", definition: "A formula is a rule or method that is used to solve a problem.", example: "The scientist used a formula to find the answer.", examples: ["There is no formula for success.", "The math formula was hard."], vi: "công thức", forms: ["formulas", "formula"] },
        { id: "30-11", word: "found", ipa: "/faʊnd/", pos: "v.", definition: "To found something is to start it, like a school or a company.", example: "She founded a company in 2010.", examples: ["The school was founded in 1900.", "He founded a charity."], vi: "thành lập", forms: ["founding", "founded", "founds", "found"] },
        { id: "30-12", word: "invest", ipa: "/ɪnˈvest/", pos: "v.", definition: "To invest is to put money into something to earn more money later.", example: "He invested money in a small business.", examples: ["She invested in a new shop.", "Invest your time in learning."], vi: "đầu tư", forms: ["investing", "invested", "invests", "invest"] },
        { id: "30-13", word: "loan", ipa: "/loʊn/", pos: "n.", definition: "A loan is an amount of money that you borrow and must pay back.", example: "He took out a loan to buy a house.", examples: ["The bank gave her a loan.", "She paid back the loan."], vi: "khoản vay", forms: ["loans", "loan"] },
        { id: "30-14", word: "practical", ipa: "/ˈpræktɪkl/", pos: "adj.", definition: "Something practical is useful and sensible.", example: "A raincoat is a practical gift.", examples: ["She gave me practical advice.", "He is a practical person."], vi: "thực tế, thiết thực", forms: ["practical"] },
        { id: "30-15", word: "quarter", ipa: "/ˈkwɔːrtər/", pos: "n.", definition: "A quarter is one of four equal parts of something.", example: "She ate a quarter of the pizza.", examples: ["It is a quarter past three.", "We pay rent every quarter."], vi: "một phần tư, quý", forms: ["quarters", "quarter"] },
        { id: "30-16", word: "salary", ipa: "/ˈsæləri/", pos: "n.", definition: "A salary is the money you earn from your job each month.", example: "She gets a good salary.", examples: ["His salary is paid every month.", "The job has a high salary."], vi: "tiền lương", forms: ["salaries", "salary"] },
        { id: "30-17", word: "scholarship", ipa: "/ˈskɑːlərʃɪp/", pos: "n.", definition: "A scholarship is money that helps a student pay for school.", example: "He won a scholarship to a university.", examples: ["She studied abroad on a scholarship.", "The scholarship covers all her costs."], vi: "học bổng", forms: ["scholarships", "scholarship"] },
        { id: "30-18", word: "temporary", ipa: "/ˈtempəreri/", pos: "adj.", definition: "Temporary means lasting for a short time only.", example: "He has a temporary job.", examples: ["It is a temporary home.", "The pain is only temporary."], vi: "tạm thời", forms: ["temporary"] },
        { id: "30-19", word: "treasure", ipa: "/ˈtreʒər/", pos: "n.", definition: "A treasure is a collection of valuable things, such as gold.", example: "The pirates hid their treasure on the island.", examples: ["She found a box of treasure.", "My grandmother's ring is my treasure."], vi: "kho báu", forms: ["treasures", "treasure"] },
        { id: "30-20", word: "urge", ipa: "/ɜːrdʒ/", pos: "n.", definition: "An urge is a strong wish to do something.", example: "He felt an urge to laugh.", examples: ["She had an urge to run away.", "Resist the urge to eat sweets."], vi: "sự thôi thúc", forms: ["urges", "urge"] }
      ]
    }

  ]
};
