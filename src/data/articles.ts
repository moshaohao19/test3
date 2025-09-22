import { Article } from '../types';

export const articles: Article[] = [
  // 初一课本内容
  {
    id: 'lunyu-shierzhang',
    title: '《论语》十二章',
    author: '孔子及其弟子',
    dynasty: '春秋',
    textbook: '初中一年级',
    grade: '初一',
    type: 'classic',
    content: [
      {
        text: '子曰："学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？"',
        characters: [
          { char: '子', pinyin: 'zǐ', explanation: '古代对男子的尊称，这里指孔子' },
          { char: '曰', pinyin: 'yuē', explanation: '说' },
          { char: '学', pinyin: 'xué', explanation: '学习' },
          { char: '而', pinyin: 'ér', explanation: '连词，表顺承' },
          { char: '时', pinyin: 'shí', explanation: '按时' },
          { char: '习', pinyin: 'xí', explanation: '复习' },
          { char: '之', pinyin: 'zhī', explanation: '代词，指代所学的知识' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '亦', pinyin: 'yì', explanation: '也' },
          { char: '说', pinyin: 'yuè', explanation: '通"悦"，愉快' },
          { char: '乎', pinyin: 'hū', explanation: '语气助词，吗' },
          { char: '有', pinyin: 'yǒu', explanation: '表示存在' },
          { char: '朋', pinyin: 'péng', explanation: '朋友' },
          { char: '自', pinyin: 'zì', explanation: '从' },
          { char: '远', pinyin: 'yuǎn', explanation: '遥远' },
          { char: '方', pinyin: 'fāng', explanation: '地方' },
          { char: '来', pinyin: 'lái', explanation: '来到' },
          { char: '乐', pinyin: 'lè', explanation: '快乐' },
          { char: '人', pinyin: 'rén', explanation: '别人' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '知', pinyin: 'zhī', explanation: '了解' },
          { char: '而', pinyin: 'ér', explanation: '连词，表转折' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '愠', pinyin: 'yùn', explanation: '生气，恼怒' },
          { char: '君', pinyin: 'jūn', explanation: '古代指地位高的人，后来指道德高尚的人' },
          { char: '子', pinyin: 'zǐ', explanation: '古代对男子的尊称' }
        ]
      },
      {
        text: '子曰："温故而知新，可以为师矣。"',
        characters: [
          { char: '子', pinyin: 'zǐ', explanation: '孔子' },
          { char: '曰', pinyin: 'yuē', explanation: '说' },
          { char: '温', pinyin: 'wēn', explanation: '温习' },
          { char: '故', pinyin: 'gù', explanation: '旧的知识' },
          { char: '而', pinyin: 'ér', explanation: '连词，表顺承' },
          { char: '知', pinyin: 'zhī', explanation: '得到' },
          { char: '新', pinyin: 'xīn', explanation: '新的理解和体会' },
          { char: '可', pinyin: 'kě', explanation: '可以' },
          { char: '以', pinyin: 'yǐ', explanation: '凭借' },
          { char: '为', pinyin: 'wéi', explanation: '做' },
          { char: '师', pinyin: 'shī', explanation: '老师' },
          { char: '矣', pinyin: 'yǐ', explanation: '语气助词，了' }
        ]
      },
      {
        text: '子曰："学而不思则罔，思而不学则殆。"',
        characters: [
          { char: '子', pinyin: 'zǐ', explanation: '孔子' },
          { char: '曰', pinyin: 'yuē', explanation: '说' },
          { char: '学', pinyin: 'xué', explanation: '学习' },
          { char: '而', pinyin: 'ér', explanation: '连词，表转折' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '思', pinyin: 'sī', explanation: '思考' },
          { char: '则', pinyin: 'zé', explanation: '就' },
          { char: '罔', pinyin: 'wǎng', explanation: '迷惑，意思是感到迷茫而无所适从' },
          { char: '思', pinyin: 'sī', explanation: '思考' },
          { char: '而', pinyin: 'ér', explanation: '连词，表转折' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '学', pinyin: 'xué', explanation: '学习' },
          { char: '则', pinyin: 'zé', explanation: '就' },
          { char: '殆', pinyin: 'dài', explanation: '疑惑' }
        ]
      },
      {
        text: '子曰："知之者不如好之者，好之者不如乐之者。"',
        characters: [
          { char: '子', pinyin: 'zǐ', explanation: '孔子' },
          { char: '曰', pinyin: 'yuē', explanation: '说' },
          { char: '知', pinyin: 'zhī', explanation: '知道，懂得' },
          { char: '之', pinyin: 'zhī', explanation: '代词，它，这里指学问和事业' },
          { char: '者', pinyin: 'zhě', explanation: '代词，……的人' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '如', pinyin: 'rú', explanation: '比得上' },
          { char: '好', pinyin: 'hào', explanation: '喜爱，爱好' },
          { char: '之', pinyin: 'zhī', explanation: '代词，它' },
          { char: '者', pinyin: 'zhě', explanation: '代词，……的人' },
          { char: '好', pinyin: 'hào', explanation: '喜爱，爱好' },
          { char: '之', pinyin: 'zhī', explanation: '代词，它' },
          { char: '者', pinyin: 'zhě', explanation: '代词，……的人' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '如', pinyin: 'rú', explanation: '比得上' },
          { char: '乐', pinyin: 'lè', explanation: '以……为快乐' },
          { char: '之', pinyin: 'zhī', explanation: '代词，它' },
          { char: '者', pinyin: 'zhě', explanation: '代词，……的人' }
        ]
      },
      {
        text: '子曰："三人行，必有我师焉。择其善者而从之，其不善者而改之。"',
        characters: [
          { char: '子', pinyin: 'zǐ', explanation: '孔子' },
          { char: '曰', pinyin: 'yuē', explanation: '说' },
          { char: '三', pinyin: 'sān', explanation: '概数，表示多' },
          { char: '人', pinyin: 'rén', explanation: '人' },
          { char: '行', pinyin: 'xíng', explanation: '行走' },
          { char: '必', pinyin: 'bì', explanation: '一定' },
          { char: '有', pinyin: 'yǒu', explanation: '存在' },
          { char: '我', pinyin: 'wǒ', explanation: '我' },
          { char: '师', pinyin: 'shī', explanation: '老师' },
          { char: '焉', pinyin: 'yān', explanation: '于此，在其中' },
          { char: '择', pinyin: 'zé', explanation: '选择' },
          { char: '其', pinyin: 'qí', explanation: '代词，他们的' },
          { char: '善', pinyin: 'shàn', explanation: '好的方面，优点' },
          { char: '者', pinyin: 'zhě', explanation: '……的地方' },
          { char: '而', pinyin: 'ér', explanation: '连词，表顺承' },
          { char: '从', pinyin: 'cóng', explanation: '跟从，学习' },
          { char: '之', pinyin: 'zhī', explanation: '代词，它，指善者' },
          { char: '其', pinyin: 'qí', explanation: '代词，他们的' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '善', pinyin: 'shàn', explanation: '好的' },
          { char: '者', pinyin: 'zhě', explanation: '……的地方' },
          { char: '而', pinyin: 'ér', explanation: '连词，表顺承' },
          { char: '改', pinyin: 'gǎi', explanation: '改正' },
          { char: '之', pinyin: 'zhī', explanation: '代词，它，指不善者' }
        ]
      },
      {
        text: '子在川上曰："逝者如斯夫，不舍昼夜。"',
        characters: [
          { char: '子', pinyin: 'zǐ', explanation: '孔子' },
          { char: '在', pinyin: 'zài', explanation: '处于' },
          { char: '川', pinyin: 'chuān', explanation: '河流' },
          { char: '上', pinyin: 'shàng', explanation: '旁边' },
          { char: '曰', pinyin: 'yuē', explanation: '说' },
          { char: '逝', pinyin: 'shì', explanation: '往，离去' },
          { char: '者', pinyin: 'zhě', explanation: '代词，指流逝的时光' },
          { char: '如', pinyin: 'rú', explanation: '像' },
          { char: '斯', pinyin: 'sī', explanation: '这，指河水' },
          { char: '夫', pinyin: 'fú', explanation: '语气助词，用于句末，表示感叹' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '舍', pinyin: 'shě', explanation: '停止' },
          { char: '昼', pinyin: 'zhòu', explanation: '白天' },
          { char: '夜', pinyin: 'yè', explanation: '夜晚' }
        ]
      },
      {
        text: '子曰："三军可夺帅也，匹夫不可夺志也。"',
        characters: [
          { char: '子', pinyin: 'zǐ', explanation: '孔子' },
          { char: '曰', pinyin: 'yuē', explanation: '说' },
          { char: '三', pinyin: 'sān', explanation: '泛指多' },
          { char: '军', pinyin: 'jūn', explanation: '军队' },
          { char: '可', pinyin: 'kě', explanation: '可以' },
          { char: '夺', pinyin: 'duó', explanation: '改变' },
          { char: '帅', pinyin: 'shuài', explanation: '主帅' },
          { char: '也', pinyin: 'yě', explanation: '语气助词' },
          { char: '匹', pinyin: 'pǐ', explanation: '一个' },
          { char: '夫', pinyin: 'fū', explanation: '男子' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '可', pinyin: 'kě', explanation: '可以' },
          { char: '夺', pinyin: 'duó', explanation: '改变' },
          { char: '志', pinyin: 'zhì', explanation: '志向' },
          { char: '也', pinyin: 'yě', explanation: '语气助词' }
        ]
      },
      {
        text: '子夏曰："博学而笃志，切问而近思，仁在其中矣。"',
        characters: [
          { char: '子', pinyin: 'zǐ', explanation: '古代对男子的尊称' },
          { char: '夏', pinyin: 'xià', explanation: '孔子的弟子' },
          { char: '曰', pinyin: 'yuē', explanation: '说' },
          { char: '博', pinyin: 'bó', explanation: '广泛' },
          { char: '学', pinyin: 'xué', explanation: '学习' },
          { char: '而', pinyin: 'ér', explanation: '连词，表并列' },
          { char: '笃', pinyin: 'dǔ', explanation: '坚定' },
          { char: '志', pinyin: 'zhì', explanation: '志向' },
          { char: '切', pinyin: 'qiè', explanation: '恳切' },
          { char: '问', pinyin: 'wèn', explanation: '提问' },
          { char: '而', pinyin: 'ér', explanation: '连词，表并列' },
          { char: '近', pinyin: 'jìn', explanation: '当前的' },
          { char: '思', pinyin: 'sī', explanation: '思考' },
          { char: '仁', pinyin: 'rén', explanation: '仁德' },
          { char: '在', pinyin: 'zài', explanation: '在于' },
          { char: '其', pinyin: 'qí', explanation: '代词，这' },
          { char: '中', pinyin: 'zhōng', explanation: '里面' },
          { char: '矣', pinyin: 'yǐ', explanation: '语气助词，了' }
        ]
      }
    ],
    modernTranslation: '孔子说："学习了知识然后按时复习，不是很愉快吗？有志同道合的人从远方来，不是很快乐吗？人家不了解我，我却不恼怒，不也是品德上有修养的人吗？"\n\n孔子说："温习学过的知识，可以从中获得新的理解与体会，那么就可以凭借这一点去做老师了。"\n\n孔子说："只是学习却不思考就会感到迷茫而无所适从，只是思考却不学习就会心中充满疑惑而无定见。"\n\n孔子说："知道学习的人比不上爱好学习的人；爱好学习的人比不上以学习为乐趣的人。"\n\n孔子说："多个人同行，其中必定有人可以做我的老师。我选择他好的方面向他学习，看到他不好的方面就对照自己，改正自己的缺点。"\n\n孔子在河边感叹道："时光的流逝就像这河水一样啊，日夜不停地流淌。"\n\n孔子说："军队的主帅可以改变，普通人的志向却不可改变。"\n\n子夏说："博览群书广泛学习，而且能坚守自己的志向，恳切地提问，多考虑当前的事，仁德就在其中了。"',
    deepAnalysis: {
      mainPoints: [
        '《论语》是儒家学派的经典著作之一，由孔子的弟子及其再传弟子编撰而成。它以语录体和对话文体为主，记录了孔子及其弟子的言行，集中体现了孔子的政治主张、伦理思想、道德观念及教育原则等。',
        '所选十二章涵盖了学习方法、学习态度、修身做人等多个方面的内容，是《论语》中的核心部分，也是中国传统文化的重要组成部分。',
        '这些内容强调了学习与思考相结合的重要性，提倡"温故而知新"的学习方法，以及"三人行，必有我师"的谦虚态度。同时也阐述了如何培养仁德、坚守志向等修身做人的道理。'
      ],
      modernExamples: [
        '在现代学习中，我们也强调"温故而知新"的重要性。比如学习数学时，定期复习以前学过的公式和定理，不仅能巩固基础，还能从中发现新的解题思路。',
        '当我们在工作或生活中遇到不被理解的情况时，可以学习孔子"人不知而不愠"的态度，保持平和的心态，专注于做好自己的事情。',
        '在团队合作中，我们可以践行"三人行，必有我师焉"的理念，善于发现同事的优点并向他们学习，同时也要勇于面对自己的不足并加以改进。'
      ],
      conclusion: '《论语》中的智慧跨越千年，至今仍然对我们的学习和生活有着重要的指导意义。通过学习《论语》，我们可以汲取古人的智慧，提升自己的道德修养和学习能力，更好地面对现代社会的各种挑战。'
    }
  },
  {
    id: 'ailianshuo',
    title: '爱莲说',
    author: '周敦颐',
    dynasty: '宋',
    textbook: '初中一年级',
    grade: '初一',
    type: 'prose',
    content: [
      {
        text: '水陆草木之花，可爱者甚蕃。晋陶渊明独爱菊。自李唐来，世人甚爱牡丹。',
        characters: [
          { char: '水', pinyin: 'shuǐ', explanation: '水里' },
          { char: '陆', pinyin: 'lù', explanation: '陆地上' },
          { char: '草', pinyin: 'cǎo', explanation: '草本' },
          { char: '木', pinyin: 'mù', explanation: '木本' },
          { char: '之', pinyin: 'zhī', explanation: '的' },
          { char: '花', pinyin: 'huā', explanation: '花' },
          { char: '可', pinyin: 'kě', explanation: '值得' },
          { char: '爱', pinyin: 'ài', explanation: '喜爱' },
          { char: '者', pinyin: 'zhě', explanation: '的' },
          { char: '甚', pinyin: 'shèn', explanation: '很' },
          { char: '蕃', pinyin: 'fán', explanation: '多' },
          { char: '晋', pinyin: 'jìn', explanation: '晋朝' },
          { char: '陶', pinyin: 'táo', explanation: '姓氏' },
          { char: '渊', pinyin: 'yuān', explanation: '名字' },
          { char: '明', pinyin: 'míng', explanation: '名字' },
          { char: '独', pinyin: 'dú', explanation: '只' },
          { char: '爱', pinyin: 'ài', explanation: '喜爱' },
          { char: '菊', pinyin: 'jú', explanation: '菊花' },
          { char: '自', pinyin: 'zì', explanation: '从' },
          { char: '李', pinyin: 'lǐ', explanation: '姓氏，指唐朝' },
          { char: '唐', pinyin: 'táng', explanation: '朝代' },
          { char: '来', pinyin: 'lái', explanation: '以来' },
          { char: '世', pinyin: 'shì', explanation: '世上的' },
          { char: '人', pinyin: 'rén', explanation: '人' },
          { char: '甚', pinyin: 'shèn', explanation: '很' },
          { char: '爱', pinyin: 'ài', explanation: '喜爱' },
          { char: '牡', pinyin: 'mǔ', explanation: '牡丹' },
          { char: '丹', pinyin: 'dān', explanation: '牡丹' }
        ]
      },
      {
        text: '予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝，香远益清，亭亭净植，可远观而不可亵玩焉。',
        characters: [
          { char: '予', pinyin: 'yú', explanation: '我' },
          { char: '独', pinyin: 'dú', explanation: '只' },
          { char: '爱', pinyin: 'ài', explanation: '喜爱' },
          { char: '莲', pinyin: 'lián', explanation: '莲花' },
          { char: '之', pinyin: 'zhī', explanation: '助词，用于主谓之间，取消句子独立性' },
          { char: '出', pinyin: 'chū', explanation: '生长出来' },
          { char: '淤', pinyin: 'yū', explanation: '污泥' },
          { char: '泥', pinyin: 'ní', explanation: '泥土' },
          { char: '而', pinyin: 'ér', explanation: '连词，表转折' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '染', pinyin: 'rǎn', explanation: '沾染（污秽）' },
          { char: '濯', pinyin: 'zhuó', explanation: '洗涤' },
          { char: '清', pinyin: 'qīng', explanation: '清水' },
          { char: '涟', pinyin: 'lián', explanation: '水波' },
          { char: '而', pinyin: 'ér', explanation: '连词，表转折' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '妖', pinyin: 'yāo', explanation: '美丽而不端庄' },
          { char: '中', pinyin: 'zhōng', explanation: '内部' },
          { char: '通', pinyin: 'tōng', explanation: '贯通' },
          { char: '外', pinyin: 'wài', explanation: '外部' },
          { char: '直', pinyin: 'zhí', explanation: '笔直' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '蔓', pinyin: 'màn', explanation: '生枝蔓' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '枝', pinyin: 'zhī', explanation: '长枝节' },
          { char: '香', pinyin: 'xiāng', explanation: '香气' },
          { char: '远', pinyin: 'yuǎn', explanation: '远播' },
          { char: '益', pinyin: 'yì', explanation: '更加' },
          { char: '清', pinyin: 'qīng', explanation: '清芬' },
          { char: '亭', pinyin: 'tíng', explanation: '耸立的样子' },
          { char: '亭', pinyin: 'tíng', explanation: '耸立的样子' },
          { char: '净', pinyin: 'jìng', explanation: '洁净' },
          { char: '植', pinyin: 'zhí', explanation: '竖立' },
          { char: '可', pinyin: 'kě', explanation: '可以' },
          { char: '远', pinyin: 'yuǎn', explanation: '远远地' },
          { char: '观', pinyin: 'guān', explanation: '观赏' },
          { char: '而', pinyin: 'ér', explanation: '连词，表转折' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '可', pinyin: 'kě', explanation: '可以' },
          { char: '亵', pinyin: 'xiè', explanation: '亲近而不庄重' },
          { char: '玩', pinyin: 'wán', explanation: '玩弄' },
          { char: '焉', pinyin: 'yān', explanation: '语气助词' }
        ]
      },
      {
        text: '予谓菊，花之隐逸者也；牡丹，花之富贵者也；莲，花之君子者也。',
        characters: [
          { char: '予', pinyin: 'yú', explanation: '我' },
          { char: '谓', pinyin: 'wèi', explanation: '认为' },
          { char: '菊', pinyin: 'jú', explanation: '菊花' },
          { char: '花', pinyin: 'huā', explanation: '花' },
          { char: '之', pinyin: 'zhī', explanation: '的' },
          { char: '隐', pinyin: 'yǐn', explanation: '隐居' },
          { char: '逸', pinyin: 'yì', explanation: '闲适' },
          { char: '者', pinyin: 'zhě', explanation: '……的花' },
          { char: '也', pinyin: 'yě', explanation: '语气助词' },
          { char: '牡', pinyin: 'mǔ', explanation: '牡丹' },
          { char: '丹', pinyin: 'dān', explanation: '牡丹' },
          { char: '花', pinyin: 'huā', explanation: '花' },
          { char: '之', pinyin: 'zhī', explanation: '的' },
          { char: '富', pinyin: 'fù', explanation: '富有' },
          { char: '贵', pinyin: 'guì', explanation: '高贵' },
          { char: '者', pinyin: 'zhě', explanation: '……的花' },
          { char: '也', pinyin: 'yě', explanation: '语气助词' },
          { char: '莲', pinyin: 'lián', explanation: '莲花' },
          { char: '花', pinyin: 'huā', explanation: '花' },
          { char: '之', pinyin: 'zhī', explanation: '的' },
          { char: '君', pinyin: 'jūn', explanation: '君子' },
          { char: '子', pinyin: 'zǐ', explanation: '指品德高尚的人' },
          { char: '者', pinyin: 'zhě', explanation: '……的花' },
          { char: '也', pinyin: 'yě', explanation: '语气助词' }
        ]
      },
      {
        text: '噫！菊之爱，陶后鲜有闻。莲之爱，同予者何人？牡丹之爱，宜乎众矣！',
        characters: [
          { char: '噫', pinyin: 'yī', explanation: '感叹词' },
          { char: '菊', pinyin: 'jú', explanation: '菊花' },
          { char: '之', pinyin: 'zhī', explanation: '的' },
          { char: '爱', pinyin: 'ài', explanation: '喜爱' },
          { char: '陶', pinyin: 'táo', explanation: '指陶渊明' },
          { char: '后', pinyin: 'hòu', explanation: '以后' },
          { char: '鲜', pinyin: 'xiǎn', explanation: '少' },
          { char: '有', pinyin: 'yǒu', explanation: '存在' },
          { char: '闻', pinyin: 'wén', explanation: '听说' },
          { char: '莲', pinyin: 'lián', explanation: '莲花' },
          { char: '之', pinyin: 'zhī', explanation: '的' },
          { char: '爱', pinyin: 'ài', explanation: '喜爱' },
          { char: '同', pinyin: 'tóng', explanation: '和……一样' },
          { char: '予', pinyin: 'yú', explanation: '我' },
          { char: '者', pinyin: 'zhě', explanation: '……的人' },
          { char: '何', pinyin: 'hé', explanation: '什么' },
          { char: '人', pinyin: 'rén', explanation: '人' },
          { char: '牡', pinyin: 'mǔ', explanation: '牡丹' },
          { char: '丹', pinyin: 'dān', explanation: '牡丹' },{ char: '之', pinyin: 'zhī', explanation: '的' },
          { char: '爱', pinyin: 'ài', explanation: '喜爱' },
          { char: '宜', pinyin: 'yí', explanation: '应当' },
          { char: '乎', pinyin: 'hū', explanation: '语气助词' },
          { char: '众', pinyin: 'zhòng', explanation: '多' },
          { char: '矣', pinyin: 'yǐ', explanation: '语气助词' }
        ]
      }
    ],
    modernTranslation: '水上、陆地上各种草本木本的花，值得喜爱的非常多。晋代的陶渊明只喜爱菊花。从李氏唐朝以来，世上的人十分喜爱牡丹。而我唯独喜爱莲花从积存的淤泥中长出却不被污染，经过清水的洗涤却不显得妖艳。它的茎中间贯通外形挺直，不生蔓不长枝，香气传播更加清香，笔直洁净地竖立在水中。人们只能远远地观赏而不能玩弄它啊。\n\n我认为菊花，是花中的隐士；牡丹，是花中的富贵者；莲花，是花中的君子。\n\n唉！对于菊花的喜爱，在陶渊明以后很少听到了。对于莲花的喜爱，像我一样的还有什么人呢？对于牡丹的喜爱，应当有很多人了！',
    deepAnalysis: {
      mainPoints: [
        '《爱莲说》是北宋理学家周敦颐创作的一篇散文。这篇文章通过对莲的形象和品质的描写，歌颂了莲花坚贞的品格，从而也表现了作者洁身自爱的高洁人格和洒落的胸襟。',
        '文章托物言志，以莲喻人，通过对莲花的描写和赞美，歌颂了君子"出淤泥而不染"的美德，表达了作者不与世俗同流合污的高尚品格和对追名逐利的世态的鄙弃和厌恶。',
        '作者将莲与菊、牡丹进行对比，突出了莲的高洁品质。菊花象征着隐居避世的人，牡丹象征着追求富贵的人，而莲花则象征着品德高尚、不与世俗同流合污的君子。'
      ],
      modernExamples: [
        '在现代社会，我们也需要"出淤泥而不染"的精神。比如在面对各种诱惑时，要坚守自己的原则和底线，不随波逐流。',
        '工作中，我们应该像莲花一样"中通外直，不蔓不枝"，保持正直的品格，专注于做好自己的本职工作，不搞歪门邪道。',
        '在人际关系中，我们也应该学习莲花的品质，既要保持自己的独立性和高洁品格，又要与周围的人和睦相处，建立良好的人际关系。'
      ],
      conclusion: '《爱莲说》虽然篇幅短小，但寓意深刻，通过对莲花的赞美，表达了作者对理想人格的追求。这种"出淤泥而不染"的精神，在今天仍然具有重要的现实意义，提醒我们要保持自己的高洁品格，不被世俗所污染。'
    }
  },
  {
    id: 'shuiqulian',
    title: '水调歌头·明月几时有',
    author: '苏轼',
    dynasty: '宋',
    textbook: '初中一年级',
    grade: '初一',
    type: 'poetry',
    content: [
      {
        text: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。',
        characters: [
          { char: '明', pinyin: 'míng', explanation: '明亮的' },
          { char: '月', pinyin: 'yuè', explanation: '月亮' },
          { char: '几', pinyin: 'jǐ', explanation: '多少' },
          { char: '时', pinyin: 'shí', explanation: '时候' },
          { char: '有', pinyin: 'yǒu', explanation: '存在' },
          { char: '把', pinyin: 'bǎ', explanation: '持，拿' },
          { char: '酒', pinyin: 'jiǔ', explanation: '酒类饮品' },
          { char: '问', pinyin: 'wèn', explanation: '询问' },
          { char: '青', pinyin: 'qīng', explanation: '蓝色' },
          { char: '天', pinyin: 'tiān', explanation: '天空' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '知', pinyin: 'zhī', explanation: '知道' },
          { char: '天', pinyin: 'tiān', explanation: '天上' },
          { char: '上', pinyin: 'shàng', explanation: '方位词' },
          { char: '宫', pinyin: 'gōng', explanation: '宫殿' },
          { char: '阙', pinyin: 'què', explanation: '皇宫门前两边供瞭望的楼' },
          { char: '今', pinyin: 'jīn', explanation: '今天' },
          { char: '夕', pinyin: 'xī', explanation: '晚上' },
          { char: '是', pinyin: 'shì', explanation: '判断动词' },
          { char: '何', pinyin: 'hé', explanation: '什么' },
          { char: '年', pinyin: 'nián', explanation: '年份' }
        ]
      },
      {
        text: '我欲乘风归去，又恐琼楼玉宇，高处不胜寒。',
        characters: [
          { char: '我', pinyin: 'wǒ', explanation: '第一人称代词' },
          { char: '欲', pinyin: 'yù', explanation: '想要' },
          { char: '乘', pinyin: 'chéng', explanation: '凭借' },
          { char: '风', pinyin: 'fēng', explanation: '风力' },
          { char: '归', pinyin: 'guī', explanation: '回去' },
          { char: '去', pinyin: 'qù', explanation: '离开' },
          { char: '又', pinyin: 'yòu', explanation: '表示重复或继续' },
          { char: '恐', pinyin: 'kǒng', explanation: '担心' },
          { char: '琼', pinyin: 'qióng', explanation: '美玉' },
          { char: '楼', pinyin: 'lóu', explanation: '楼房' },
          { char: '玉', pinyin: 'yù', explanation: '玉石' },
          { char: '宇', pinyin: 'yǔ', explanation: '房屋' },
          { char: '高', pinyin: 'gāo', explanation: '从下向上距离大' },
          { char: '处', pinyin: 'chù', explanation: '地方' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '胜', pinyin: 'shèng', explanation: '承受' },
          { char: '寒', pinyin: 'hán', explanation: '寒冷' }
        ]
      },
      {
        text: '起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。',
        characters: [
          { char: '起', pinyin: 'qǐ', explanation: '起来' },
          { char: '舞', pinyin: 'wǔ', explanation: '跳舞' },
          { char: '弄', pinyin: 'nòng', explanation: '玩弄' },
          { char: '清', pinyin: 'qīng', explanation: '清晰的' },
          { char: '影', pinyin: 'yǐng', explanation: '影子' },
          { char: '何', pinyin: 'hé', explanation: '怎么' },
          { char: '似', pinyin: 'sì', explanation: '像' },
          { char: '在', pinyin: 'zài', explanation: '处于' },
          { char: '人', pinyin: 'rén', explanation: '人间' },
          { char: '间', pinyin: 'jiān', explanation: '中间' },
          { char: '转', pinyin: 'zhuǎn', explanation: '转过' },
          { char: '朱', pinyin: 'zhū', explanation: '红色' },
          { char: '阁', pinyin: 'gé', explanation: '楼阁' },
          { char: '低', pinyin: 'dī', explanation: '低低地' },
          { char: '绮', pinyin: 'qǐ', explanation: '有花纹的' },
          { char: '户', pinyin: 'hù', explanation: '窗户' },
          { char: '照', pinyin: 'zhào', explanation: '照耀' },
          { char: '无', pinyin: 'wú', explanation: '没有' },
          { char: '眠', pinyin: 'mián', explanation: '睡眠' }
        ]
      },
      {
        text: '不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。',
        characters: [
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '应', pinyin: 'yīng', explanation: '应该' },
          { char: '有', pinyin: 'yǒu', explanation: '存在' },
          { char: '恨', pinyin: 'hèn', explanation: '怨恨' },
          { char: '何', pinyin: 'hé', explanation: '什么' },
          { char: '事', pinyin: 'shì', explanation: '事情' },
          { char: '长', pinyin: 'cháng', explanation: '总是' },
          { char: '向', pinyin: 'xiàng', explanation: '在' },
          { char: '别', pinyin: 'bié', explanation: '离别' },
          { char: '时', pinyin: 'shí', explanation: '时候' },
          { char: '圆', pinyin: 'yuán', explanation: '圆满' },
          { char: '人', pinyin: 'rén', explanation: '人' },
          { char: '有', pinyin: 'yǒu', explanation: '存在' },
          { char: '悲', pinyin: 'bēi', explanation: '悲伤' },
          { char: '欢', pinyin: 'huān', explanation: '欢乐' },
          { char: '离', pinyin: 'lí', explanation: '离别' },
          { char: '合', pinyin: 'hé', explanation: '团聚' },
          { char: '月', pinyin: 'yuè', explanation: '月亮' },
          { char: '有', pinyin: 'yǒu', explanation: '存在' },
          { char: '阴', pinyin: 'yīn', explanation: '阴暗' },
          { char: '晴', pinyin: 'qíng', explanation: '晴朗' },
          { char: '圆', pinyin: 'yuán', explanation: '圆满' },
          { char: '缺', pinyin: 'quē', explanation: '残缺' },
          { char: '此', pinyin: 'cǐ', explanation: '这' },
          { char: '事', pinyin: 'shì', explanation: '事情' },
          { char: '古', pinyin: 'gǔ', explanation: '自古以来' },
          { char: '难', pinyin: 'nán', explanation: '难以' },
          { char: '全', pinyin: 'quán', explanation: '周全，完备' }
        ]
      },
      {
        text: '但愿人长久，千里共婵娟。',
        characters: [
          { char: '但', pinyin: 'dàn', explanation: '只' },
          { char: '愿', pinyin: 'yuàn', explanation: '希望' },
          { char: '人', pinyin: 'rén', explanation: '人' },
          { char: '长', pinyin: 'cháng', explanation: '长久' },
          { char: '久', pinyin: 'jiǔ', explanation: '长寿' },
          { char: '千', pinyin: 'qiān', explanation: '概数，形容多' },
          { char: '里', pinyin: 'lǐ', explanation: '路程单位' },
          { char: '共', pinyin: 'gòng', explanation: '共同欣赏' },
          { char: '婵', pinyin: 'chán', explanation: '嫦娥，这里指月亮' },
          { char: '娟', pinyin: 'juān', explanation: '美好的样子' }
        ]
      }
    ],
    modernTranslation: '明月从什么时候才开始出现的？我端起酒杯遥问苍天。不知道在天上的宫殿，何年何月。我想要乘御清风回到天上，又恐怕在美玉砌成的楼宇，受不住高耸九天的寒冷。翩翩起舞玩赏着月下清影，哪像是在人间。月儿转过朱红色的楼阁，低低地挂在雕花的窗户上，照着没有睡意的自己。明月不该对人们有什么怨恨吧，为什么偏在人们离别时才圆呢？人有悲欢离合的变迁，月有阴晴圆缺的转换，这种事自古来难以周全。只希望这世上所有人的亲人能平安健康，即便相隔千里，也能共享这美好的月光。',
    deepAnalysis: {
      mainPoints: [
        '这首词以月起兴，与弟苏辙七年未见之情为基础，围绕中秋明月展开想象和思考，把人世间的悲欢离合之情纳入对宇宙人生的哲理性追寻之中。',
        '词作上片问天反映执著人生，下片问月表现善处人生。落笔潇洒，舒卷自如，情与景融，境与思偕，思想深刻而境界高逸，充满哲理，是苏轼词的典范之作。',
        '全词运用形象描绘手法，勾勒出一种皓月当空、亲人千里、孤高旷远的境界氛围，表达了作者对亲人的思念和美好祝愿，也表达了在仕途失意时旷达超脱的胸怀和乐观的景致。'
      ],
      modernExamples: [
        '在现代社会，人们经常面临离别的场景，如亲人外出工作、朋友异地求学等。这时，我们可以像苏轼一样，用"人有悲欢离合，月有阴晴圆缺，此事古难全"来安慰自己和他人，理解人生中的不完美是常态。',
        '当我们在生活中遇到不如意的事情时，不妨学习苏轼的豁达心态，保持积极乐观的人生态度，珍惜当下的美好时光。',
        '在中秋节等团圆的节日里，我们虽然可能与亲人相隔千里，但可以通过视频通话等现代科技手段"千里共婵娟"，表达对亲人的思念和祝福。'
      ],
      conclusion: '《水调歌头·明月几时有》不仅是一首中秋咏月词，更是一首富含人生哲理的佳作。它教会我们如何面对生活中的离别和不如意，保持豁达的心态，珍惜眼前的幸福。这种乐观豁达的人生态度，在今天仍然具有重要的启示意义。'
    }
  },
  {
    id: 'wangyue',
    title: '望岳',
    author: '杜甫',
    dynasty: '唐',
    textbook: '初中一年级',
    grade: '初一',
    type: 'poetry',
    content: [
      {
        text: '岱宗夫如何？齐鲁青未了。',
        characters: [
          { char: '岱', pinyin: 'dài', explanation: '泰山的别称' },
          { char: '宗', pinyin: 'zōng', explanation: '首，大' },
          { char: '夫', pinyin: 'fú', explanation: '语气助词，无实义' },
          { char: '如', pinyin: 'rú', explanation: '像' },
          { char: '何', pinyin: 'hé', explanation: '怎么样' },
          { char: '齐', pinyin: 'qí', explanation: '齐国' },
          { char: '鲁', pinyin: 'lǔ', explanation: '鲁国' },
          { char: '青', pinyin: 'qīng', explanation: '指山色' },
          { char: '未', pinyin: 'wèi', explanation: '没有' },
          { char: '了', pinyin: 'liǎo', explanation: '尽，完' }
        ]
      },
      {
        text: '造化钟神秀，阴阳割昏晓。',
        characters: [
          { char: '造', pinyin: 'zào', explanation: '创造' },
          { char: '化', pinyin: 'huà', explanation: '化育' },
          { char: '钟', pinyin: 'zhōng', explanation: '聚集' },
          { char: '神', pinyin: 'shén', explanation: '神奇' },
          { char: '秀', pinyin: 'xiù', explanation: '秀丽' },
          { char: '阴', pinyin: 'yīn', explanation: '山的北面' },
          { char: '阳', pinyin: 'yáng', explanation: '山的南面' },
          { char: '割', pinyin: 'gē', explanation: '划分' },
          { char: '昏', pinyin: 'hūn', explanation: '黄昏' },
          { char: '晓', pinyin: 'xiǎo', explanation: '清晨' }
        ]
      },
      {
        text: '荡胸生曾云，决眦入归鸟。',
        characters: [
          { char: '荡', pinyin: 'dàng', explanation: '涤荡' },
          { char: '胸', pinyin: 'xiōng', explanation: '心胸' },
          { char: '生', pinyin: 'shēng', explanation: '生出' },
          { char: '曾', pinyin: 'céng', explanation: '通"层"' },
          { char: '云', pinyin: 'yún', explanation: '云彩' },
          { char: '决', pinyin: 'jué', explanation: '裂开' },
          { char: '眦', pinyin: 'zì', explanation: '眼眶' },
          { char: '入', pinyin: 'rù', explanation: '看见' },
          { char: '归', pinyin: 'guī', explanation: '返回' },
          { char: '鸟', pinyin: 'niǎo', explanation: '鸟儿' }
        ]
      },
      {
        text: '会当凌绝顶，一览众山小。',
        characters: [
          { char: '会', pinyin: 'huì', explanation: '终当，终要' },
          { char: '当', pinyin: 'dāng', explanation: '应当' },
          { char: '凌', pinyin: 'líng', explanation: '登上' },
          { char: '绝', pinyin: 'jué', explanation: '极高的' },
          { char: '顶', pinyin: 'dǐng', explanation: '山顶' },
          { char: '一', pinyin: 'yī', explanation: '全' },
          { char: '览', pinyin: 'lǎn', explanation: '看' },
          { char: '众', pinyin: 'zhòng', explanation: '众多' },
          { char: '山', pinyin: 'shān', explanation: '山' },
          { char: '小', pinyin: 'xiǎo', explanation: '矮小' }
        ]
      }
    ],
    modernTranslation: '五岳之首泰山的景象怎么样？在齐鲁大地上，那青翠的山色没有尽头。大自然把神奇秀丽的景象全都汇聚其中，山南山北阴阳分界，晨昏迥然不同。层层白云，荡涤胸中沟壑；翩翩归鸟，飞入赏景眼圈。定要登上那最高峰，俯瞰在泰山面前显得渺小的群山。',
    deepAnalysis: {
      mainPoints: [
        '这首诗通过描绘泰山雄伟磅礴的景象，热情赞美了泰山高大巍峨的气势和神奇秀丽的景色，流露出了对祖国山河的热爱之情，表达了诗人不怕困难、敢攀顶峰、俯视一切的雄心和气概，以及卓然独立、兼济天下的豪情壮志。',
        '全诗以"望"字贯穿始终，诗人从远望到近望，再到凝望，最后是俯望，全方位地描绘了泰山的雄伟景象，同时也表达了自己的人生理想和追求。',
        '诗的最后两句"会当凌绝顶，一览众山小"，不仅是诗人要攀登泰山顶峰的誓言，也是诗人要攀登人生顶峰的誓言，表现了诗人不怕困难、敢于攀登绝顶、俯视一切的雄心和气概。'
      ],
      modernExamples: [
        '在现代社会，我们也需要像杜甫一样，拥有"会当凌绝顶，一览众山小"的雄心壮志。无论是学习还是工作，都应该有明确的目标，并为之努力奋斗。',
        '当我们面对困难和挑战时，可以学习诗人不怕困难、敢攀顶峰的精神，勇敢地面对挑战，不断超越自我。',
        '在追求成功的道路上，我们可能会遇到各种困难和挫折，但只要我们保持积极向上的心态，像杜甫一样有攀登顶峰的决心和勇气，就一定能够取得成功。'
      ],
      conclusion: '《望岳》是杜甫青年时代的作品，充满了蓬勃的朝气和积极向上的精神。这首诗不仅是对泰山壮丽景色的赞美，更是诗人远大抱负和积极进取精神的体现，对于我们今天的学习和生活仍然具有重要的激励作用。'
    }
  },
  {
    id: 'sanshilishui',
    title: '观沧海',
    author: '曹操',
    dynasty: '东汉末',
    textbook: '初中一年级',
    grade: '初一',
    type: 'poetry',
    content: [
      {
        text: '东临碣石，以观沧海。',
        characters: [
          { char: '东', pinyin: 'dōng', explanation: '向东' },
          { char: '临', pinyin: 'lín', explanation: '到达，登上' },
          { char: '碣', pinyin: 'jié', explanation: '碣石山' },
          { char: '石', pinyin: 'shí', explanation: '石头' },
          { char: '以', pinyin: 'yǐ', explanation: '来' },
          { char: '观', pinyin: 'guān', explanation: '观赏' },
          { char: '沧', pinyin: 'cāng', explanation: '通"苍"，青绿色' },
          { char: '海', pinyin: 'hǎi', explanation: '大海' }
        ]
      },
      {
        text: '水何澹澹，山岛竦峙。',
        characters: [
          { char: '水', pinyin: 'shuǐ', explanation: '海水' },
          { char: '何', pinyin: 'hé', explanation: '多么' },
          { char: '澹', pinyin: 'dàn', explanation: '水波荡漾的样子' },
          { char: '澹', pinyin: 'dàn', explanation: '水波荡漾的样子' },
          { char: '山', pinyin: 'shān', explanation: '山' },
          { char: '岛', pinyin: 'dǎo', explanation: '岛屿' },
          { char: '竦', pinyin: 'sǒng', explanation: '高高地挺立' },
          { char: '峙', pinyin: 'zhì', explanation: '挺立' }
        ]
      },
      {
        text: '树木丛生，百草丰茂。',
        characters: [
          { char: '树', pinyin: 'shù', explanation: '树木' },
          { char: '木', pinyin: 'mù', explanation: '树木' },
          { char: '丛', pinyin: 'cóng', explanation: '丛生' },
          { char: '生', pinyin: 'shēng', explanation: '生长' },
          { char: '百', pinyin: 'bǎi', explanation: '概数，形容多' },
          { char: '草', pinyin: 'cǎo', explanation: '草本植物' },
          { char: '丰', pinyin: 'fēng', explanation: '茂盛' },
          { char: '茂', pinyin: 'mào', explanation: '茂盛' }
        ]
      },
      {
        text: '秋风萧瑟，洪波涌起。',
        characters: [
          { char: '秋', pinyin: 'qiū', explanation: '秋天' },
          { char: '风', pinyin: 'fēng', explanation: '风' },
          { char: '萧', pinyin: 'xiāo', explanation: '风声' },
          { char: '瑟', pinyin: 'sè', explanation: '风声' },
          { char: '洪', pinyin: 'hóng', explanation: '大' },
          { char: '波', pinyin: 'bō', explanation: '波浪' },
          { char: '涌', pinyin: 'yǒng', explanation: '涌起' },
          { char: '起', pinyin: 'qǐ', explanation: '起来' }
        ]
      },
      {
        text: '日月之行，若出其中；星汉灿烂，若出其里。',
        characters: [
          { char: '日', pinyin: 'rì', explanation: '太阳' },
          { char: '月', pinyin: 'yuè', explanation: '月亮' },
          { char: '之', pinyin: 'zhī', explanation: '的' },
          { char: '行', pinyin: 'xíng', explanation: '运行' },
          { char: '若', pinyin: 'ruò', explanation: '好像' },
          { char: '出', pinyin: 'chū', explanation: '从……出来' },
          { char: '其', pinyin: 'qí', explanation: '代词，它的' },
          { char: '中', pinyin: 'zhōng', explanation: '中间' },
          { char: '星', pinyin: 'xīng', explanation: '星星' },
          { char: '汉', pinyin: 'hàn', explanation: '银河' },
          { char: '灿', pinyin: 'càn', explanation: '灿烂' },
          { char: '烂', pinyin: 'làn', explanation: '灿烂' },
          { char: '若', pinyin: 'ruò', explanation: '好像' },
          { char: '出', pinyin: 'chū', explanation: '从……出来' },
          { char: '其', pinyin: 'qí', explanation: '代词，它的' },
          { char: '里', pinyin: 'lǐ', explanation: '里面' }
        ]
      },
      {
        text: '幸甚至哉，歌以咏志。',
        characters: [
          { char: '幸', pinyin: 'xìng', explanation: '幸运' },
          { char: '甚', pinyin: 'shèn', explanation: '非常' },
          { char: '至', pinyin: 'zhì', explanation: '极点' },
          { char: '哉', pinyin: 'zāi', explanation: '语气助词' },
          { char: '歌', pinyin: 'gē', explanation: '诗歌' },
          { char: '以', pinyin: 'yǐ', explanation: '用来' },
          { char: '咏', pinyin: 'yǒng', explanation: '歌咏' },
          { char: '志', pinyin: 'zhì', explanation: '志向' }
        ]
      }
    ],
    modernTranslation: '向东进发登上碣石山，得以观赏大海的奇景。海水波涛激荡，海中山岛罗列，高耸挺立。周围是葱茏的树木，丰茂的花草。萧瑟的风声传来了，草木动摇，海上掀起巨浪，在翻卷，在呼啸，似要将宇宙吞没。太阳和月亮升起降落，好像是从这浩瀚的海洋中发出的。银河里的灿烂群星，也好像是从大海的怀抱里涌现出来的。啊，庆幸得很，美好无比，让我们尽情歌唱，畅抒心中的情怀。',
    deepAnalysis: {
      mainPoints: [
        '《观沧海》是东汉末年诗人曹操创作的一首四言诗，《步出夏门行》的第一章。这首诗是曹操在碣石山登山望海时，用饱蘸浪漫主义激情的大笔，所勾勒出的大海吞吐日月、包蕴万千的壮丽景象；描绘了祖国河山的雄伟壮丽，既刻画了高山大海的壮阔，更表达了诗人以景托志，胸怀天下的进取精神。',
        '全诗语言质朴，想象丰富，气势磅礴，苍凉悲壮，为历代读者所激赏。特别是"日月之行，若出其中；星汉灿烂，若出其里"四句，诗人以丰富的想象力，描绘了大海吞吐日月星辰的壮丽景象，表现了诗人开阔的胸襟和宏大的抱负。',
        '这首诗通过对大海的描绘，反映了诗人渴望统一中国、建功立业的雄心壮志，同时也表现了诗人对前途充满信心的乐观气度。'
      ],
      modernExamples: [
        '在现代社会，我们也需要像曹操一样，拥有广阔的胸怀和远大的抱负。面对生活和工作中的各种挑战，要保持积极进取的精神，勇于开拓创新。',
        '当我们面对困难和挫折时，可以学习诗人"老骥伏枥，志在千里"的精神，即使年龄增长，也要保持一颗积极向上的心，为实现自己的理想而努力奋斗。',
        '在团队建设中，领导者应该像曹操一样，具有开阔的胸襟和宏大的抱负，能够包容不同的意见和建议，带领团队不断前进，实现共同的目标。'
      ],
      conclusion: '《观沧海》是一首充满激情和力量的诗歌，它不仅描绘了大海的壮丽景象，更表达了诗人的雄心壮志和进取精神。这种精神在今天仍然具有重要的现实意义，激励着我们为实现自己的理想而努力奋斗。'
    }
  },
  
  // 其他课本内容
  {
    id: 'huanghelou',
    title: '黄鹤楼',
    author: '崔颢',
    dynasty: '唐',
    textbook: '初中二年级',
    grade: '初二',
    type: 'poetry',
    content: [
      {
        text: '昔人已乘黄鹤去，此地空余黄鹤楼。',
        characters: [
          { char: '昔', pinyin: 'xī', explanation: '过去' },
          { char: '人', pinyin: 'rén', explanation: '指传说中的仙人' },
          { char: '已', pinyin: 'yǐ', explanation: '已经' },
          { char: '乘', pinyin: 'chéng', explanation: '骑，坐' },
          { char: '黄', pinyin: 'huáng', explanation: '黄色' },
          { char: '鹤', pinyin: 'hè', explanation: '仙鹤' },
          { char: '去', pinyin: 'qù', explanation: '离开' },
          { char: '此', pinyin: 'cǐ', explanation: '这' },
          { char: '地', pinyin: 'dì', explanation: '地方' },
          { char: '空', pinyin: 'kōng', explanation: '只，仅仅' },
          { char: '余', pinyin: 'yú', explanation: '剩下' },
          { char: '黄', pinyin: 'huáng', explanation: '黄色' },
          { char: '鹤', pinyin: 'hè', explanation: '仙鹤' },
          { char: '楼', pinyin: 'lóu', explanation: '楼阁' }
        ]
      },
      {
        text: '黄鹤一去不复返，白云千载空悠悠。',
        characters: [
          { char: '黄', pinyin: 'huáng', explanation: '黄色' },
          { char: '鹤', pinyin: 'hè', explanation: '仙鹤' },
          { char: '一', pinyin: 'yī', explanation: '一旦' },
          { char: '去', pinyin: 'qù', explanation: '离开' },
          { char: '不', pinyin: 'bù', explanation: '表示否定' },
          { char: '复', pinyin: 'fù', explanation: '再' },
          { char: '返', pinyin: 'fǎn', explanation: '返回' },
          { char: '白', pinyin: 'bái', explanation: '白色' },
          { char: '云', pinyin: 'yún', explanation: '云彩' },
          { char: '千', pinyin: 'qiān', explanation: '概数，形容多' },
          { char: '载', pinyin: 'zǎi', explanation: '年' },
          { char: '空', pinyin: 'kōng', explanation: '徒然' },
          { char: '悠', pinyin: 'yōu', explanation: '闲适的样子' },
          { char: '悠', pinyin: 'yōu', explanation: '闲适的样子' }
        ]
      },
      {
        text: '晴川历历汉阳树，芳草萋萋鹦鹉洲。',
        characters: [
          { char: '晴', pinyin: 'qíng', explanation: '晴朗的' },
          { char: '川', pinyin: 'chuān', explanation: '平川，平原' },
          { char: '历', pinyin: 'lì', explanation: '分明的样子' },
          { char: '历', pinyin: 'lì', explanation: '分明的样子' },
          { char: '汉', pinyin: 'hàn', explanation: '汉水' },
          { char: '阳', pinyin: 'yáng', explanation: '汉阳' },
          { char: '树', pinyin: 'shù', explanation: '树木' },
          { char: '芳', pinyin: 'fāng', explanation: '芳香的' },
          { char: '草', pinyin: 'cǎo', explanation: '草' },
          { char: '萋', pinyin: 'qī', explanation: '茂盛的样子' },
          { char: '萋', pinyin: 'qī', explanation: '茂盛的样子' },
          { char: '鹦', pinyin: 'yīng', explanation: '鹦鹉' },
          { char: '鹉', pinyin: 'wǔ', explanation: '鹦鹉' },
          { char: '洲', pinyin: 'zhōu', explanation: '水中的陆地' }
        ]
      },
      {
        text: '日暮乡关何处是？烟波江上使人愁。',
        characters: [
          { char: '日', pinyin: 'rì', explanation: '太阳' },
          { char: '暮', pinyin: 'mù', explanation: '傍晚' },
          { char: '乡', pinyin: 'xiāng', explanation: '故乡' },
          { char: '关', pinyin: 'guān', explanation: '关口，这里指故乡' },
          { char: '何', pinyin: 'hé', explanation: '什么' },
          { char: '处', pinyin: 'chù', explanation: '地方' },
          { char: '是', pinyin: 'shì', explanation: '判断动词' },
          { char: '烟', pinyin: 'yān', explanation: '烟雾' },
          { char: '波', pinyin: 'bō', explanation: '波浪' },
          { char: '江', pinyin: 'jiāng', explanation: '长江' },
          { char: '上', pinyin: 'shàng', explanation: '上面' },
          { char: '使', pinyin: 'shǐ', explanation: '让' },
          { char: '人', pinyin: 'rén', explanation: '人' },
          { char: '愁', pinyin: 'chóu', explanation: '忧愁' }
        ]
      }
    ],
    modernTranslation: '过去的仙人已经驾着黄鹤飞走了，这里只留下一座空荡荡的黄鹤楼。黄鹤一去再也没有回来，千百年来只看见悠悠的白云。阳光照耀下的汉阳树木清晰可见，鹦鹉洲上有一片碧绿的芳草覆盖。天色已晚，眺望远方，故乡在哪儿呢？眼前只见一片雾霭笼罩江面，给人带来深深的愁绪。',
    deepAnalysis: {
      mainPoints: [
        '这首诗描写了在黄鹤楼上远眺的美好景色，是一首吊古怀乡之佳作。前四句写登临怀古，后四句写站在黄鹤楼上的所见所思。',
        '诗虽不协律，但音节浏亮而不拗口。信手而就，一气呵成，成为历代所推崇的珍品。传说李白登此楼，目睹此诗，大为折服，说："眼前有景道不得，崔颢题诗在上头。"足见崔颢此诗之影响。',
        '诗中意境开阔、气魄宏大，风景如画，情真意切。且淳朴生动，一如口语，不能不令人叹为观止。诗人通过对自然景物的描绘，表达了对故乡的思念之情和对人生的感慨。'
      ],
      modernExamples: [
        '当我们站在历史古迹前，也会产生类似的感慨。比如站在长城上，我们会想到古代劳动人民的智慧和汗水，感受到历史的厚重。',
        '在现代社会，人们常常忙于工作和生活，很少有时间停下来思考人生和历史。《黄鹤楼》提醒我们，应该偶尔放慢脚步，欣赏身边的美景，思考生命的意义。',
        '对于远离家乡的游子来说，"日暮乡关何处是？烟波江上使人愁"这句诗表达了他们对故乡的深切思念，这种情感在今天仍然能够引起人们的共鸣。'
      ],
      conclusion: '《黄鹤楼》以其意境开阔、气魄宏大、情真意切的特点，成为中国古代诗歌中的经典之作。它不仅描绘了黄鹤楼的壮丽景色，更表达了诗人对历史、对人生的深刻思考，这种思考在今天仍然具有重要的意义。'
    }
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticlesByTextbook = (textbookId: string): Article[] => {
  // 这里简化处理，实际应该从textbooks数据中获取对应课本的文章ID列表
  if (textbookId === 'junior1') {
    return articles.filter(article => article.textbook === '初中一年级');
  } else if (textbookId === 'junior2') {
    return articles.filter(article => article.textbook === '初中二年级');
  } else if (textbookId === 'junior3') {
    return articles.filter(article => article.textbook === '初中三年级');
  } else if (textbookId === 'senior1') {
    return articles.filter(article => article.textbook === '高中一年级');
  } else if (textbookId === 'senior2') {
    return articles.filter(article => article.textbook === '高中二年级');
  } else if (textbookId === 'senior3') {
    return articles.filter(article => article.textbook === '高中三年级');
  }
  return [];
};

export const getFamousArticles = (): Article[] => {
  // 返回所有文章作为著名文章的示例
  return articles;
};